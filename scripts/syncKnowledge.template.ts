import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

// NexDT Assistant - knowledge sync
//
// GENERATED FILE when it lives in base44/functions/syncKnowledge/entry.ts.
// Edit scripts/syncKnowledge.template.ts and run
//   node scripts/build-assistant-lessons.mjs
// to rebuild it.
//
// Fills the KnowledgeArticle entity that the askAcademy function answers from:
//   1. Academy lessons  - embedded below at build time from lmsData.jsx
//   2. Confluence pages - the NexDT customer documentation, read live through
//                         the app's Confluence connector
// Text is copied by code, never retyped, so the assistant quotes the real docs.
// Scope is NexDT only: pilot, flying and capture pages are deliberately not
// in the list below (those belong to the Pilot Companion app).
//
// Safe to run repeatedly. Called by the scheduled "Sync NexDT Assistant
// knowledge" workflow, or by an admin from the app.

const SITE_HOST = 'sitesee.atlassian.net';

// Confluence pages that document the NexDT platform (mostly Customer Support External).
const CONFLUENCE_PAGE_IDS = [
  '3327131649', // NexDT Documentation, Resources and Training
  '3536125955', // NexDT - Loading and Viewing Sites - Support Admin Role / Essentials Package Guide
  '3530653697', // NexDT Role Permission Matrix
  '3327000579', // Colo User Role
  '3327033352', // Engineer User Role
  '3326541832', // Bim Admin Role
  '3327328259', // NexDT Console Administrator Role
  '3579052034', // NexDT Setting Up Multiple Roles
  '3024420870', // NexDT Training and Demo - Video Links
  // From the internal support space, approved for the assistant:
  '3242426372', // Reset MFA request from user
  '3457089540', // Contacting Support - For Customers
];

const MIN_CONTENT_CHARS = 80;

type Article = { page_id: string; title: string; url: string; content: string; space_key?: string; source_updated?: string };

const LESSONS: Article[] = /*__LESSONS__*/[];

// ---------- Confluence HTML -> plain markdown ----------

const ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '-', mdash: '-', hellip: '...',
  rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"', deg: '°', times: 'x', rarr: '->', larr: '<-',
  copy: '(c)', reg: '(R)', trade: '(TM)', bull: '-', middot: '-', le: '<=', ge: '>=', plusmn: '+/-',
};

function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code) => {
    const c = String(code).toLowerCase();
    if (c.startsWith('#x')) return String.fromCodePoint(parseInt(c.slice(2), 16) || 32);
    if (c.startsWith('#')) return String.fromCodePoint(parseInt(c.slice(1), 10) || 32);
    return c in ENTITIES ? ENTITIES[c] : m;
  });
}

function inlineText(html: string): string {
  return decodeEntities(html.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function htmlToMarkdown(html: string): string {
  let s = String(html || '');
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<(script|style|noscript|svg)\b[\s\S]*?<\/\1>/gi, '');

  // Headings (shifted down one level so the article title stays the top heading).
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_m, n, t) => {
    const text = inlineText(t);
    return text ? `\n\n${'#'.repeat(Math.min(Number(n) + 1, 6))} ${text}\n\n` : '\n\n';
  });

  // Table rows -> "| a | b |" so values stay next to their column.
  s = s.replace(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi, (_m, row) => {
    const cells: string[] = [];
    for (const c of String(row).matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)) cells.push(inlineText(c[1]));
    return cells.some((c) => c) ? `\n| ${cells.join(' | ')} |` : '';
  });
  s = s.replace(/<\/table>/gi, '\n\n');

  // Lists, innermost first: numbered lists keep their step order and nested
  // lists are indented under their parent item. \u0001 marks a converted item.
  const innerList = /<(ol|ul)\b[^>]*>((?:(?!<(?:ol|ul)\b|<\/(?:ol|ul)>)[\s\S])*)<\/\1>/i;
  for (let guard = 0; guard < 2000 && innerList.test(s); guard++) {
    s = s.replace(innerList, (_m, tag, body) => {
      let n = 0;
      const ordered = String(tag).toLowerCase() === 'ol';
      const items = String(body)
        .replace(/\n\u0001/g, '\n\u0001  ')
        .replace(/<li\b[^>]*>/gi, () => `\n\u0001${ordered ? `${++n}.` : '-'} `)
        .replace(/<\/li>/gi, '');
      return `\n${items}\n`;
    });
  }
  s = s.replace(/<li\b[^>]*>/gi, '\n\u0001- ').replace(/<\/li>/gi, '');

  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/(p|div|ul|blockquote|section|details|summary|pre)>/gi, '\n\n');
  s = s.replace(/<[^>]+>/g, '');
  s = decodeEntities(s);

  const lines = s.split('\n').map((raw) => {
    const item = raw.match(/^\u0001( *)([\s\S]*)$/);
    const text = (item ? item[2] : raw).replace(/\u0001/g, '').replace(/[ \t ]+/g, ' ').trim();
    if (!item) return text;
    return ' '.repeat(Math.min(item[1].length, 8)) + text;
  });
  const out: string[] = [];
  for (const line of lines) {
    if (/^\s*(-|\d+\.)$/.test(line)) continue; // empty list item
    if (!line && out[out.length - 1] === '') continue;
    out.push(line);
  }
  return out.join('\n').trim();
}

// ---------- Confluence ----------

async function fetchConfluence(base44: any): Promise<{ articles: Article[]; missing: string[]; errors: string[]; skipped?: string }> {
  let accessToken = '';
  try {
    const connection = await base44.asServiceRole.connectors.getConnection('confluence');
    accessToken = connection?.accessToken || '';
  } catch (e) {
    return { articles: [], missing: [], errors: [], skipped: `Confluence connector is not connected (${e?.message || e})` };
  }
  if (!accessToken) return { articles: [], missing: [], errors: [], skipped: 'Confluence connector returned no token' };

  const headers = { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' };

  const sitesRes = await fetch('https://api.atlassian.com/oauth/token/accessible-resources', { headers });
  if (!sitesRes.ok) {
    return { articles: [], missing: [], errors: [`Could not list Atlassian sites (HTTP ${sitesRes.status})`] };
  }
  const sites: any[] = await sitesRes.json();
  const site = (Array.isArray(sites) ? sites : []).find((r) => String(r?.url || '').includes(SITE_HOST));
  if (!site) return { articles: [], missing: [], errors: [`The connected Atlassian account has no access to ${SITE_HOST}`] };

  const api = `https://api.atlassian.com/ex/confluence/${site.id}/wiki`;
  const articles: Article[] = [];
  const missing: string[] = [];
  const errors: string[] = [];

  for (const id of CONFLUENCE_PAGE_IDS) {
    try {
      let title = '';
      let html = '';
      let updated = '';
      let webui = '';
      let status = 'current';

      let res = await fetch(`${api}/api/v2/pages/${id}?body-format=view`, { headers });
      if (res.ok) {
        const p = await res.json();
        title = p?.title || '';
        html = p?.body?.view?.value || '';
        updated = p?.version?.createdAt || '';
        webui = p?._links?.webui || '';
        status = p?.status || 'current';
      } else if (res.status !== 404) {
        // Older scope sets only allow the v1 content API.
        res = await fetch(`${api}/rest/api/content/${id}?expand=body.view,version`, { headers });
        if (res.ok) {
          const p = await res.json();
          title = p?.title || '';
          html = p?.body?.view?.value || '';
          updated = p?.version?.when || '';
          webui = p?._links?.webui || '';
          status = p?.status || 'current';
        }
      }

      if (res.status === 404 || (res.ok && status !== 'current')) { missing.push(id); continue; }
      if (!res.ok) { errors.push(`Page ${id}: HTTP ${res.status}`); continue; }

      const content = htmlToMarkdown(html);
      if (!title || content.length < MIN_CONTENT_CHARS) {
        errors.push(`Page ${id}: no readable text (${content.length} chars) - kept the previous copy`);
        continue;
      }
      articles.push({
        page_id: id,
        title,
        content,
        url: `https://${SITE_HOST}/wiki${webui || `/spaces/CSE/pages/${id}`}`,
        space_key: (String(webui).match(/\/spaces\/([^/]+)\//) || [])[1] || 'CSE',
        source_updated: updated,
      });
    } catch (e) {
      errors.push(`Page ${id}: ${e?.message || e}`);
    }
  }
  return { articles, missing, errors };
}

// ---------- Upsert ----------

async function listAll(db: any): Promise<any[]> {
  const all: any[] = [];
  const pageSize = 200;
  for (let skip = 0; skip < 5000; skip += pageSize) {
    const batch = await db.list('-updated_date', pageSize, skip);
    if (!batch || batch.length === 0) break;
    all.push(...batch);
    if (batch.length < pageSize) break;
  }
  return all;
}

// Makes the stored articles of one source match `desired`.
// `retire` lists page_ids to switch off; anything else that is stored but not
// in `desired` is left untouched (it failed to load this time, keep the old copy).
async function applySource(db: any, existing: any[], sourceType: string, desired: Article[], retire: (pageId: string) => boolean) {
  const report = { created: 0, updated: 0, unchanged: 0, deactivated: 0 };
  const stored = new Map<string, any>();
  for (const a of existing) {
    if (a.source_type !== sourceType || !a.page_id) continue;
    if (stored.has(a.page_id)) {
      // Duplicate copy of the same page: switch the extra one off.
      if (a.is_active !== false) { await db.update(a.id, { is_active: false }); report.deactivated += 1; }
      continue;
    }
    stored.set(a.page_id, a);
  }

  for (const d of desired) {
    const cur = stored.get(d.page_id);
    stored.delete(d.page_id);
    const data = {
      title: d.title,
      content: d.content,
      url: d.url,
      page_id: d.page_id,
      source_type: sourceType,
      space_key: d.space_key || '',
      source_updated: d.source_updated || '',
      is_active: true,
    };
    if (!cur) { await db.create(data); report.created += 1; continue; }
    const same = cur.title === data.title && cur.content === data.content && cur.url === data.url &&
      (cur.source_updated || '') === data.source_updated && cur.is_active !== false;
    if (same) { report.unchanged += 1; continue; }
    await db.update(cur.id, data);
    report.updated += 1;
  }

  for (const [pageId, a] of stored) {
    if (a.is_active !== false && retire(pageId)) { await db.update(a.id, { is_active: false }); report.deactivated += 1; }
  }
  return report;
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Signed-in callers must be admins. Scheduled runs arrive without a user.
    let user: any = null;
    try { user = await base44.auth.me(); } catch (_e) { user = null; }
    if (user && user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const db = base44.asServiceRole.entities.KnowledgeArticle;
    const existing = await listAll(db);

    // Academy lessons: the embedded list is complete, so anything else is retired.
    const academy = await applySource(db, existing, 'academy', LESSONS, () => true);

    // Confluence: only retire pages that are in fact gone or no longer listed.
    const conf = await fetchConfluence(base44);
    let confluence: any = { skipped: conf.skipped };
    if (!conf.skipped) {
      const listed = new Set(CONFLUENCE_PAGE_IDS);
      const gone = new Set(conf.missing);
      const report = await applySource(db, existing, 'confluence', conf.articles, (id) => gone.has(id) || !listed.has(id));
      confluence = { ...report, missing: conf.missing, errors: conf.errors };
    }

    const ok = !conf.skipped && conf.errors.length === 0;
    return Response.json({ ok, academy, confluence, lessons_embedded: LESSONS.length, ran_at: new Date().toISOString() });
  } catch (error) {
    return Response.json({ error: error?.message || String(error) }, { status: 500 });
  }
});
