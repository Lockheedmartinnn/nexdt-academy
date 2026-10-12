// Builds the NexDT Assistant's copy of the Academy lessons.
//
// Reads src/components/lms/lmsData.jsx, turns every module into a plain-markdown
// article, and writes base44/functions/syncKnowledge/entry.ts from
// scripts/syncKnowledge.template.ts with the articles embedded.
//
// Run after changing lesson content:   node scripts/build-assistant-lessons.mjs
// then redeploy the syncKnowledge function and run it once.
//
// Left out on purpose: quizzes and knowledge checks (so the assistant can never
// leak answers), images/videos, and the Partner Onboarding track (capture and
// pilot content belongs in the Pilot Companion app, not here).

import { build } from 'esbuild';
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXCLUDED_PATHS = new Set(['partner']);
const SKIP_TYPES = new Set(['check', 'quiz', 'infographic']);
const SKIP_KEYS = new Set([
  'id', 'type', 'icon', 'emoji', 'imageUrl', 'image', 'videoId', 'variant', 'color', 'url', 'crop',
  'containerHeight', 'startTime', 'endTime', 'timestampLabel', 'phase', 'number', 'maxAttempts',
  'passingScore', 'correctAnswer', 'shot', 'src', 'label', 'href',
]);

const out = join(mkdtempSync(join(tmpdir(), 'lms-')), 'lms.mjs');
await build({
  entryPoints: [join(root, 'src/components/lms/lmsData.jsx')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: out,
  logLevel: 'error',
  loader: { '.jsx': 'jsx', '.png': 'dataurl', '.jpg': 'dataurl', '.svg': 'dataurl' },
});
const { PATHS, MODULES, getSectionLabel } = await import(pathToFileURL(out).href);

const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
const isUrlOnly = (s) => /^https?:\/\/\S+$/.test(s);

function ownStrings(obj) {
  const parts = [];
  for (const [k, v] of Object.entries(obj)) {
    if (SKIP_KEYS.has(k)) continue;
    if (typeof v === 'string' && clean(v) && !isUrlOnly(clean(v))) parts.push(clean(v));
  }
  return parts;
}

function renderNested(obj, lines) {
  for (const [k, v] of Object.entries(obj)) {
    if (SKIP_KEYS.has(k)) continue;
    if (Array.isArray(v)) renderList(v, lines);
    else if (v && typeof v === 'object') {
      const parts = ownStrings(v);
      if (parts.length) lines.push(parts.join(' — '));
      renderNested(v, lines);
    }
  }
}

function renderList(items, lines) {
  for (const item of items) {
    if (typeof item === 'string') {
      if (clean(item)) lines.push(`- ${clean(item)}`);
    } else if (item && typeof item === 'object') {
      const parts = ownStrings(item);
      const prefix = typeof item.number === 'number' ? `${item.number}.` : '-';
      if (parts.length) lines.push(`${prefix} ${parts.join(' — ')}`);
      renderNested(item, lines);
    }
  }
}

function renderSection(section) {
  if (!section || SKIP_TYPES.has(section.type)) return '';
  if (String(section.id || '').endsWith('-docs')) return '';
  const lines = [];
  const heading = clean(section.title || getSectionLabel(section) || '');
  if (heading) lines.push(`## ${heading}`);
  for (const [k, v] of Object.entries(section)) {
    if (SKIP_KEYS.has(k) || k === 'title') continue;
    if (typeof v === 'string' && clean(v) && !isUrlOnly(clean(v))) lines.push(clean(v));
  }
  renderNested(section, lines);
  // A heading with nothing under it carries no information.
  return lines.length > (heading ? 1 : 0) ? lines.join('\n\n') : '';
}

const articles = [];
const seen = new Set();
const skipped = [];
for (const path of Object.values(PATHS)) {
  if (EXCLUDED_PATHS.has(path.id)) continue;
  for (const moduleId of path.moduleIds || []) {
    if (seen.has(moduleId)) continue;
    const mod = MODULES[moduleId];
    if (!mod) { skipped.push(moduleId); continue; }
    seen.add(moduleId);
    const body = (mod.sections || []).map(renderSection).filter(Boolean).join('\n\n');
    if (!body) { skipped.push(moduleId); continue; }
    const intro = [mod.subtitle, mod.description].filter(Boolean).map(clean).join(' — ');
    articles.push({
      page_id: `academy:${moduleId}`,
      title: `Academy lesson: ${clean(mod.title)}`,
      url: `/LMSLesson?path=${path.id}&module=${moduleId}&section=0`,
      content: (intro ? intro + '\n\n' : '') + body,
    });
  }
}

const template = readFileSync(join(root, 'scripts/syncKnowledge.template.ts'), 'utf8');
if (!template.includes('/*__LESSONS__*/[]')) throw new Error('Template marker /*__LESSONS__*/[] not found');
const target = join(root, 'base44/functions/syncKnowledge/entry.ts');
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, template.replace('/*__LESSONS__*/[]', JSON.stringify(articles, null, 1)));

const allPathModules = new Set(Object.values(PATHS).flatMap((p) => p.moduleIds || []));
console.log(JSON.stringify({
  articles: articles.length,
  chars: articles.reduce((n, a) => n + a.content.length, 0),
  skipped,
  partnerOnly: [...allPathModules].filter((id) => !seen.has(id) && !skipped.includes(id)),
  list: articles.map((a) => `${a.page_id} | ${a.title} | ${a.content.length}`),
}, null, 1));
