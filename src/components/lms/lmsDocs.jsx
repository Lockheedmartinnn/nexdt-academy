import { SHOTS } from './lmsShots';

// ─────────────────────────────────────────────────────────────
// lmsDocs.jsx
// Single source of truth links from the NexDT Academy into the
// SiteSee Confluence "Customer Support External" knowledge base.
// Added per SCSUP-3077 + Sales/Support decision to consolidate all
// customer-facing documentation onto Confluence (from Zendesk).
// Downloadable PDF exports of each page are also available.
// ─────────────────────────────────────────────────────────────

const WIKI = 'https://sitesee.atlassian.net/wiki/spaces/CSE/pages';

export const CONFLUENCE = {
  platformFolder: 'https://sitesee.atlassian.net/wiki/spaces/CSE/folder/3024289800/Platform+-+NexDT',
  overview:       `${WIKI}/3327131649/NexDT+Documentation+Resources+and+Training`,
  supportAdmin:   `${WIKI}/3536125955/NexDT+-+Loading+and+Viewing+Sites+-+Support+Admin+Role`,
  permissionMatrix: `${WIKI}/3530653697/NexDT+Role+Permission+Matrix`,
  coloUser:       `${WIKI}/3327000579/Colo+User+Role`,
  engineer:       `${WIKI}/3327033352/Engineer+User+Role`,
  bimAdmin:       `${WIKI}/3326541832/Bim+Admin+Role`,
  consoleAdmin:   `${WIKI}/3327328259/NexDT+Console+Administrator+Role`,
  legacyStart:    `${WIKI}/3132424197/SiteSee+Web+Portal+Legacy+-+Getting+Started`,
  legacyUpload:   `${WIKI}/3132686379/SiteSee+Web+Portal+Legacy+-+Upload+images`,
  legacyJobs:     `${WIKI}/3132293508/SiteSee+Web+Portal+Legacy+-+Loading+and+viewing+jobs`,
  legacyUsers:    `${WIKI}/3132358727/SiteSee+Web+Portal+Legacy+-+User+and+Permission+Management`,
  legacyActivate: `${WIKI}/3132620809/SiteSee+Web+Portal+Legacy+-+User+account+activation`,
  legacySupport:  `${WIKI}/3132686419/SiteSee+Web+Portal+Legacy+-+Getting+Support`,
};

// Documentation hub shown on the Academy landing page
export const CONFLUENCE_DOCS = [
  { group: 'NexDT Platform', items: [
    { title: 'NexDT Documentation, Resources & Training (Overview)', url: CONFLUENCE.overview },
    { title: 'Loading & Viewing Sites — Support Admin (Essentials)', url: CONFLUENCE.supportAdmin },
    { title: 'Role Permission Matrix', url: CONFLUENCE.permissionMatrix },
    { title: 'Colo User Role — Rip & Replace', url: CONFLUENCE.coloUser },
    { title: 'Engineer Role — Review & Approval', url: CONFLUENCE.engineer },
    { title: 'BIM Admin Role — Tooling & CAD Spec', url: CONFLUENCE.bimAdmin },
    { title: 'Console Administrator Role', url: CONFLUENCE.consoleAdmin },
  ]},
  { group: 'Base Functions (Legacy reference)', items: [
    { title: 'Getting Started', url: CONFLUENCE.legacyStart },
    { title: 'Uploading Images', url: CONFLUENCE.legacyUpload },
    { title: 'Loading & Viewing Jobs', url: CONFLUENCE.legacyJobs },
    { title: 'User & Permission Management', url: CONFLUENCE.legacyUsers },
    { title: 'User Account Activation', url: CONFLUENCE.legacyActivate },
    { title: 'Getting Support', url: CONFLUENCE.legacySupport },
  ]},
];

// moduleId → the Confluence page(s) that module is sourced from
export const MODULE_DOC_LINKS = {
  m0:  [ { title: 'NexDT Documentation, Resources & Training', url: CONFLUENCE.overview }, { title: 'Role Permission Matrix', url: CONFLUENCE.permissionMatrix } ],
  c0:  [ { title: 'Colo User Role — Rip & Replace', url: CONFLUENCE.coloUser }, { title: 'NexDT Overview & Roles', url: CONFLUENCE.overview } ],
  c1:  [ { title: 'Loading & Viewing Sites — IEA (Support Admin)', url: CONFLUENCE.supportAdmin }, { title: 'NexDT Overview — EME & IEA', url: CONFLUENCE.overview } ],
  c2:  [ { title: 'Colo User Role — Rip & Replace Workflow', url: CONFLUENCE.coloUser } ],
  e1:  [ { title: 'Loading & Viewing Sites — IEA & EME', url: CONFLUENCE.supportAdmin }, { title: 'NexDT Overview — EME & IEA', url: CONFLUENCE.overview } ],
  e2:  [ { title: 'Engineer Role — Review & Approval', url: CONFLUENCE.engineer } ],
  e3:  [ { title: 'Loading & Viewing Sites — EME', url: CONFLUENCE.supportAdmin }, { title: 'NexDT Overview — EME', url: CONFLUENCE.overview } ],
  b1:  [ { title: 'BIM Admin Role — Tooling & CAD Spec', url: CONFLUENCE.bimAdmin } ],
  b2:  [ { title: 'Console Administrator Role', url: CONFLUENCE.consoleAdmin }, { title: 'NexDT Overview — User & Org Management', url: CONFLUENCE.overview } ],
  tm1: [ { title: 'Loading & Viewing Sites — Support Admin', url: CONFLUENCE.supportAdmin }, { title: 'NexDT Overview & Roles', url: CONFLUENCE.overview } ],
  ess: [ { title: 'Loading & Viewing Sites — Support Admin (Essentials)', url: CONFLUENCE.supportAdmin } ],
  wf:  [ { title: 'NexDT Overview & Workflow', url: CONFLUENCE.overview }, { title: 'Colo User Role', url: CONFLUENCE.coloUser }, { title: 'Engineer Role', url: CONFLUENCE.engineer }, { title: 'Uploading Images (Legacy)', url: CONFLUENCE.legacyUpload } ],
  rpm: [ { title: 'Role Permission Matrix', url: CONFLUENCE.permissionMatrix }, { title: 'NexDT Overview — Roles & Permissions', url: CONFLUENCE.overview } ],
  p0:  [ { title: 'Getting Started (Legacy)', url: CONFLUENCE.legacyStart } ],
  p1:  [ { title: 'Getting Started (Legacy)', url: CONFLUENCE.legacyStart }, { title: 'Uploading Images (Legacy)', url: CONFLUENCE.legacyUpload } ],
  p2:  [ { title: 'Uploading Images (Legacy)', url: CONFLUENCE.legacyUpload }, { title: 'Loading & Viewing Jobs (Legacy)', url: CONFLUENCE.legacyJobs } ],
  p3:  [ { title: 'Getting Support (Legacy)', url: CONFLUENCE.legacySupport } ],
};

// Build a standard "Source Documentation" read-section for a module.
export function makeDocsSection(moduleId, links) {
  return {
    id: `${moduleId}-docs`,
    type: 'read',
    title: 'Source Documentation (Confluence)',
    intro: 'This module follows the current SiteSee documentation on Confluence — our single source of truth for customer-facing docs. Open the source pages below (a downloadable PDF export of each is also maintained):',
    bullets: links.map(l => ({ icon: '📄', text: `[${l.title}](${l.url})` })),
    callout: {
      variant: 'info',
      title: 'Confluence is the source of truth',
      body: 'Customer-facing documentation now lives in Confluence (migrated from the Zendesk Learning Centre). If a page changes on Confluence, that change is authoritative — always check the linked page for the latest version.',
    },
  };
}

// ─── NEW MODULE: Essentials Package (base functions incl. measuring tool) ───
export const ESS_MODULE = {
  id: 'ess',
  path: 'shared',
  title: 'Essentials Package — Core Functions',
  subtitle: 'The base NexDT functions every user needs — built on the Support Admin role',
  duration: '15 min',
  icon: '⭐',
  isNew: true,
  sections: [
    { id: 'ess-obj', type: 'objective', intro: 'By the end of this module you will be able to sign in to NexDT, find and open a site, navigate the 3D digital twin, inspect equipment, and use the core tools — including the measuring tool — plus view IEA, EME, panoramas, cameras and the 2D orthomosaic.' },
    { id: 'ess-what', type: 'read', title: 'What the Essentials Package covers',
      intro: 'The Essentials Package is the base set of functions available to every user. It is built on the NexDT Support Admin role — read-only access to view sites and run the core assessment tools.',
      bullets: [
        { icon: '🔐', text: '**Access & login** with Multi-Factor Authentication (MFA)', detail: 'Sign in with the account from your invitation email. Keep your recovery code safe — it is the only way back in if your authenticator device is lost.' },
        { icon: '🗺️', text: '**Find and open a site** from the map or list view', detail: 'The site map shows the sites you can access as pins. Search by name, or switch to list view. Open a site card to see ACMA/RFNSA IDs, address, structure height/type, landowner and site controller.' },
        { icon: '🧊', text: '**Navigate the 3D digital twin**', detail: 'Left-drag to rotate, right-drag to pan, wheel to zoom. The orientation gizmo (bottom-right) shows compass direction. Toggle 2D/3D bottom-left.' },
        { icon: '📏', text: '**Measure** distances on the model — the measuring tool', detail: 'The measure (ruler) tool reports total length, per-point X/Y/height, per-segment deltas, and the marker origin in lat/long/altitude. It also works in the 2D orthomosaic for distances and areas.' },
        { icon: '⚙️', text: '**View IEA & EME** results', detail: 'Support Admins can run IEA (structural) and EME (RF emissions) on post as-built sites and read the results. Both are indicative — qualified engineers make the final call.' },
      ],
      callout: { variant: 'info', title: 'Built on the Support Admin role', body: 'The Support Admin role forms the basis of the essential functions in NexDT: read-only access to view sites, inspect equipment and run IEA/EME on-demand, without the ability to edit or create applications.' },
    },
    { id: 'ess-open', type: 'steps', title: 'Find and open a site',
      steps: [
        { number: 1, title: 'Sign in', description: 'Open your NexDT sign-in URL (in your invitation email) and complete MFA. Your account name appears top-right; the Menu button is top-left.' },
        { number: 2, title: 'Locate the site', description: 'On the site map, pan/zoom or type in the Search box to find a site. Use the list icon (top-left of the panel) to switch to list view and browse.' },
        { number: 3, title: 'Open the site card', description: 'Click a pin to open the summary card: site name, coordinates, ACMA ID, RFNSA ID, backhaul, address, structure height and type, landowner and site controller.' },
        { number: 4, title: 'Enter the digital twin', description: 'Click the 3D icon to open the viewer, or the folder icon to open the site documents. Note: the 3D icon only appears once a site is As-Built.' },
      ],
    },
    { id: 'ess-shot-open', type: 'infographic', imageUrl: SHOTS.siteMap, label: 'Finding a site', caption: 'The NexDT site map — pins for each site, the search box and the map/list toggle (Leichhardt Oval demo site).', containerHeight: 360, crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 } },
    { id: 'ess-measure', type: 'steps', title: 'Use the measuring tool',
      steps: [
        { number: 1, title: 'Open the measure tool', description: 'In the 3D viewer, click the measure (ruler) icon in the tools group at the top-right of the scene.' },
        { number: 2, title: 'Set two points', description: 'Click two points on the model to draw a measurement segment.' },
        { number: 3, title: 'Read the panel', description: 'The Measure panel shows total length, a points table (X, Y, height), a segments table (change in X, Y, height) and the marker origin: latitude, longitude and altitude.' },
        { number: 4, title: 'Clear & repeat', description: 'Use Clear to remove the measurement and start again. The measure tool is also available in the 2D orthomosaic for distances and areas.' },
      ],
    },
    { id: 'ess-shot-measure', type: 'infographic', imageUrl: SHOTS.measure, label: 'The measuring tool', caption: 'Measuring a 2.62 m segment on the 3D model — the panel reports total length, points, segments and marker origin.', containerHeight: 420, crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 } },
    { id: 'ess-more', type: 'read', title: 'Panoramas, cameras & the 2D view',
      bullets: [
        { icon: '🖼️', text: '**Panoramas** — under Site Views, toggle Panoramas. Green dots mark capture points; click one to open it and drag to look around.' },
        { icon: '📷', text: '**Cameras** — under Additional Camera Views, toggle Cameras to show every drone capture position. Click a camera to open its source photo, or use the image-locator to find every photo of a point.' },
        { icon: '🧭', text: '**2D view** — use the 2D toggle (bottom-left) for the top-down orthomosaic at true scale. Change base layers, measure distances/areas, and use the compass (bottom-right).' },
        { icon: '🔎', text: '**Inspect equipment** — click the select (arrow) tool then an item to open its details: manufacturer, model, ESA, head customer, BIM model, asset & ColoApp IDs, status, and pose (elevation, bearing, tilt).' },
      ],
      callout: { variant: 'tip', title: 'Prospect vs full academy', body: 'The Essentials Package is the "essentials" view for prospective customers — the base functions of NexDT. Onboarded customers continue into their role-specific paths for the full academy.' },
    },
    { id: 'ess-shot-viewer', type: 'infographic', imageUrl: SHOTS.viewer, label: 'The 3D viewer', caption: 'The NexDT 3D digital twin — sidebar sections, scene tools and the equipment detail panel.', containerHeight: 420, crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 } },
    { id: 'ess-check', type: 'check', title: 'Quick Check', question: 'Which tool reports total length plus per-point X, Y and height?', options: [ { id: 'a', text: 'The select tool' }, { id: 'b', text: 'The measure (ruler) tool' }, { id: 'c', text: 'The panorama toggle' }, { id: 'd', text: 'The orientation gizmo' } ], correctAnswer: 'b', explanation: 'The measure (ruler) tool draws a segment between two points and reports total length, the points table (X, Y, height), the segments table, and the marker origin.', maxAttempts: 2 },
  ],
};

// ─── NEW MODULE: End-to-End Workflow (Upload → As-Built → Colo → Acceptance) ───
export const WF_MODULE = {
  id: 'wf',
  path: 'shared',
  title: 'End-to-End Workflow',
  subtitle: 'How a site moves from capture to approval: Upload → As-Built → Colo → Acceptance',
  duration: '12 min',
  icon: '🔄',
  isNew: true,
  sections: [
    { id: 'wf-obj', type: 'objective', intro: 'By the end of this module you will understand the full NexDT lifecycle — how a site moves from image upload, through as-built alignment, to colocation applications and final engineering acceptance — and who is responsible at each stage.' },
    { id: 'wf-map', type: 'workflow', title: 'The NexDT lifecycle', description: 'Every site follows the same four stages. Each stage hands off to the next.',
      steps: [
        { icon: '📤', label: 'Upload', description: 'Images captured, quality-checked and uploaded via the SiteSee Uploader; processing builds the 3D model.', role: 'Pilot / Support', active: false },
        { icon: '🏗️', label: 'As-Built', description: 'The model is aligned and the Engineer configures IEA/EME pre-as-built, then approves As-Built.', role: 'Engineer', active: false },
        { icon: '📡', label: 'Colo', description: 'A Colo User creates a ColoApp, does Rip & Replace, runs IEA and submits the design.', role: 'Colo User', active: false },
        { icon: '✅', label: 'Acceptance', description: 'The Engineer reviews the submitted ColoApp, edits if needed, and approves.', role: 'Engineer', active: false },
      ],
    },
    { id: 'wf-steps', type: 'steps', title: 'Stage by stage',
      steps: [
        { number: 1, title: 'Upload', description: 'Complete the pre-upload image quality check, then use the SiteSee Uploader (web app on a PC) to upload images and any GCP files. Finalise the upload — this starts processing. Capture apps cannot upload.' },
        { number: 2, title: 'As-Built alignment', description: 'The processed 3D model is loaded and aligned. The Engineer configures IEA and the make/model for EME on existing equipment — both must be configured pre-as-built — then completes and approves the As-Built process. Only then does the 3D icon appear and the site become viewable.', warning: 'The 3D model cannot be viewed until the Engineer completes and approves As-Built.' },
        { number: 3, title: 'Colo application', description: 'A Colo User creates an application, uses the My Equipment filter, removes old equipment (the "Rip"), adds new equipment from the BIM Catalog (the "Replace"), runs the IEA to check structural usage, then Confirms Design and Submits. The app becomes read-only once submitted.' },
        { number: 4, title: 'Acceptance', description: 'The Engineer locates the submitted ColoApp, visually audits the design, makes any engineering edits (saving a submitted app triggers Confirm Design), verifies the Add/Remove transaction logs in the Colo App Manager, and clicks Approve to finalise.' },
      ],
    },
    { id: 'wf-note', type: 'read', title: 'Why the order matters',
      bullets: [
        { icon: '🔒', text: '**IEA and EME must be configured pre-as-built** — they cannot be set up after the site is approved as-built.' },
        { icon: '🏢', text: '**Head Customer / Organization naming is case- and syntax-sensitive** — it must match exactly during as-built alignment, because it grants the Colo User their equipment permissions.' },
        { icon: '📝', text: '**Submitting a ColoApp locks it** to read-only until an Engineer reviews and approves it.' },
      ],
      callout: { variant: 'warning', title: 'IEA/EME are indicative', body: 'IEA (structural) and EME (RF) are decision-support tools. A high result flags a configuration for engineering review; qualified engineers make the final determination.' },
    },
    { id: 'wf-check', type: 'check', title: 'Quick Check', question: 'When must IEA and EME be configured?', options: [ { id: 'a', text: 'Any time after approval' }, { id: 'b', text: 'Pre-As-Built' }, { id: 'c', text: 'Only by the Colo User' }, { id: 'd', text: 'They configure automatically' } ], correctAnswer: 'b', explanation: 'Both IEA and EME must be configured pre-as-built, during as-built alignment by the Engineer.', maxAttempts: 2 },
  ],
};

// ─── NEW MODULE: Role Permission Matrix ───
export const RPM_MODULE = {
  id: 'rpm',
  path: 'shared',
  title: 'Role Permission Matrix',
  subtitle: 'Who can do what in NexDT — Site Finder, Colo User, Engineer, Support Admin & Admin',
  duration: '10 min',
  icon: '🔑',
  isNew: true,
  sections: [
    { id: 'rpm-obj', type: 'objective', intro: 'By the end of this module you will know what each NexDT role can and cannot do, so you can pick the right role and set expectations with customers.' },
    { id: 'rpm-roles', type: 'roles', title: 'NexDT roles at a glance', description: 'Each role sees and edits different information, but all work within the same core system. Tap a role.',
      roles: [
        { icon: '🔎', name: 'Site Finder', actions: ['Search for sites', 'Read-only Map hover & Site details', 'Download SIP reports'], restriction: 'No 3D viewer, no go-to-site / redirect to 3D, and no access to Colo Applications — limited to the Map and Site Table.' },
        { icon: '🏗️', name: 'Colo User', actions: ['Search for and go to sites', 'Create ColoApps for their Head Customer', 'Add / Move / Delete their own equipment', 'Run IEA before submitting', 'Download reports for their organization'], restriction: 'Cannot edit main site details (name, location) and cannot view rust / holes / markers, or the details of other organizations’ equipment.' },
        { icon: '⚙️', name: 'Engineer', actions: ['Full edit access ("change everything")', 'Own the As-Built approval process', 'Configure IEA and EME pre-as-built', 'View all equipment regardless of head customer', 'See rust & bolt holes; edit & approve submitted ColoApps'], restriction: 'Cannot create a ColoApp (can cancel one). Saving a submitted app immediately triggers Confirm Design.' },
        { icon: '🛟', name: 'Support Admin', actions: ['Read-only access to all post as-built data', 'Access Site Details & all Colo Applications post as-built', 'Download any documents (pre or post as-built)', 'Run IEA and EME on-demand (post as-built)', 'Switch applications'], restriction: 'No access to As-Built alignment and cannot view a pre-as-built scene (no 3D until the Engineer approves As-Built). Cannot create applications.' },
        { icon: '🛠️', name: 'Administrator', actions: ['Create users and manage Users & Organisations', 'Assign NexDT roles', 'Provision multiple roles to one email using the "+" symbol', 'View user analytics (login count, last login, IP)'], restriction: 'Never delete an active organization that has equipment under it — all that equipment data is lost and needs manual engineering recovery.' },
        { icon: '🔧', name: 'BIM Admin', actions: ['Create & configure BIM equipment (name, make/model, ESA, type, shape, tags)', 'Upload GLB models & thumbnails; link the Mesh Reference', 'Run Get Config for EME port/power settings', 'Manage the BIM / NAD / ESA catalogue'], restriction: 'Must link the Mesh Reference after uploading a GLB or the item appears as a "ghost". Deleting an item only removes it from future use — it stays in existing ColoApps.' },
      ],
    },
    { id: 'rpm-matrix', type: 'matrix', title: 'Detailed access grid',
      legend: 'R = Read · W = Write · R/W = Read & Write · — = No access. Sourced verbatim from the NexDT Role Permission Matrix on Confluence.',
      columns: ['Capability', 'Support Admin', 'Engineer', 'Colo User', 'Site Finder'],
      rows: [
        ['SIP', 'R', 'R', 'R', 'R'],
        ['2D Map-view', 'R', 'R', 'R', 'R'],
        ['Site Details', 'R', 'R/W', 'R', 'R'],
        ['3D Viewer', 'R', 'R', 'R', '—'],
        ['Rust', 'R', 'R', '—', '—'],
        ['Holes', 'R', 'R', '—', '—'],
        ['Orthos', 'R', 'R', '—', '—'],
        ['Panoramas', 'R', 'R', '—', '—'],
        ['Equipment', 'R', 'R/W', 'R (Head Customer)', '—'],
        ['Markers', 'R', 'R/W', '—', '—'],
        ['Create ColoApp', '—', '—', 'W', '—'],
        ['Existing ColoApp', 'R', 'R/W', 'R/W', '—'],
        ['As-Built', '—', 'R/W', '—', '—'],
      ],
    },
    { id: 'rpm-grid', type: 'read', title: 'The full access grid',
      intro: 'The detailed read/write grid (SIP, 2D Map, Site Details, 3D Viewer, Rust, Holes, Orthos, Panoramas, Equipment, Markers, Create ColoApp, Existing ColoApp, As-Built) is maintained on Confluence and in the downloadable PDF:',
      bullets: [
        { icon: '📄', text: `[NexDT Role Permission Matrix — full grid (Confluence)](${CONFLUENCE.permissionMatrix})` },
        { icon: '📘', text: `[NexDT Documentation, Resources & Training — roles & permissions](${CONFLUENCE.overview})` },
      ],
      callout: { variant: 'tip', title: 'Rule of thumb', body: 'Site Finder = find only. Colo User = change their own equipment. Engineer = change everything & approve. Support Admin = read everything post as-built & run tools. Administrator = manage users & orgs. BIM Admin = manage the equipment library.' },
    },
  ],
};

// ─── NEW PATH: Essentials Package (visible to everyone) ───
export const ESSENTIALS_PATH = {
  id: 'essentials',
  title: 'Essentials Package',
  emoji: '⭐',
  description: 'Start here — core platform for everyone',
  subtitle: 'The base functions every NexDT user needs: site loading, the 3D viewer and measuring tool, the full upload-to-acceptance workflow, and the role permission matrix.',
  durationText: '4 modules · ~50 min',
  color: '#22D3EE',
  moduleIds: ['m0', 'ess', 'wf', 'rpm'],
  roles: ['essentials', 'prospect', 'user', 'colo', 'engineer', 'support_admin', 'bim_admin', 'admin'],
};
