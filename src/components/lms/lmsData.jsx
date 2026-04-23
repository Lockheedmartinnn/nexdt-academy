// ─── VIDEO PLACEHOLDERS (replace with YouTube IDs when uploaded) ───────────
const VID_UNBROKEN_CHAIN   = 'eNjpgsNJjTM';   // The_Unbroken_Chain.mp4
const VID_NEXDT_WORKFLOW   = '1LtFvDnWOSo';   // The_NexDT_Workflow.mp4
const VID_RIP_REPLACE      = 'OhAjtWlqQaA';   // The_Rip_&_Replace_Workflow.mp4
const VID_IEA_EME          = 'dZc8fFSB5LU';   // NexDT_IEA_&_EME.mp4
const VID_BIM_ADMIN        = 'tpUksqWptbM';   // BIM__Architect_of_Digital_Twins.mp4
const VID_SUPER_ADMIN      = 'OhAjtWlqQaA';   // Super_Admin__Digital_Governance.mp4

// Infographic image URLs
const IMG_PLATFORM   = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/90cdb9409_infographic_1_platform_overview.png';
const IMG_IEA_EME    = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/042f9b569_infographic_2_iea_vs_eme.png';
const IMG_RIP        = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/621092d98_infographic_3_rip_replace.png';
const IMG_BIM        = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/5448c0c57_infographic_4_bim_admin.png';
const IMG_MODELLING  = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/7e8589730_infographic_5_modelling_specs.png';
const IMG_ADMIN      = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/2728951c3_infographic_6_super_admin.png';

export const PATHS = {
  colo: {
    id: 'colo',
    title: 'Colo User Path',
    emoji: '🏗️',
    description: 'Propose & submit equipment changes',
    subtitle: 'Learn to create applications, manage equipment changes, and submit for engineering review.',
    durationText: '4 modules · ~90 min',
    color: '#3B82F6',
    moduleIds: ['m0', 'c0', 'c1', 'c2'],
  },
  engineer: {
    id: 'engineer',
    title: 'Engineer Path',
    emoji: '⚙️',
    description: 'Review, approve, validate safety',
    subtitle: 'Master IEA/EME analysis, review submitted ColoApps, and make engineering decisions.',
    durationText: '4 modules · ~90 min',
    color: '#10B981',
    moduleIds: ['m0', 'e1', 'e2', 'e3'],
  },
  bim_admin: {
    id: 'bim_admin',
    title: 'BIM / Admin Path',
    emoji: '🔧',
    description: 'Configure equipment & manage users',
    subtitle: 'Configure the BIM equipment library, manage organisations, and administer the platform.',
    durationText: '3 modules · ~105 min',
    color: '#F59E0B',
    moduleIds: ['m0', 'b1', 'b2'],
  },
};

export const MODULES = {
  // ─── MODULE 0: SHARED INTRO ────────────────────────────────
  m0: {
    id: 'm0',
    path: 'shared',
    title: 'NexDT Overview & Core Concepts',
    subtitle: 'Module 1 — Platform foundations for all users',
    duration: '15 min',
    icon: '🚀',
    sections: [
      {
        id: 'm0-intro-video',
        type: 'watch',
        title: 'Welcome — The Unbroken Chain',
        videoId: VID_UNBROKEN_CHAIN,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Watch this first — it sets the context for everything you\'ll learn in NexDT Academy.',
      },
      {
        id: 'm0-workflow-video',
        type: 'watch',
        title: 'The NexDT Workflow',
        videoId: VID_NEXDT_WORKFLOW,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Overview of the full NexDT platform workflow from site capture to approval.',
      },
      {
        id: 'm0-obj',
        type: 'objective',
        intro: 'By the end of this module, you will understand what NexDT is, who uses it, and how it fits into the SiteSee workflow.',
      },
      {
        id: 'm0-what',
        type: 'read',
        title: 'What is NexDT?',
        intro: 'NexDT is SiteSee\'s engineering and validation portal used to review, assess, and approve tower configurations using 3D models, equipment data, and engineering calculations.',
        bullets: [
          { icon: '🏗️', text: 'View **as-built 3D models** of tower sites', detail: 'NexDT loads processed 3D models captured from real-world tower sites, letting you inspect equipment placement and structure without a site visit.' },
          { icon: '📁', text: 'Manage **applications and equipment** within those sites', detail: 'Applications track each engineering or colocation workflow. Equipment records are linked to 3D positions in the model.' },
          { icon: '⚙️', text: 'Run **engineering assessments** (IEA and EME)', detail: 'IEA evaluates structural load. EME evaluates RF exposure. Both run within NexDT against the as-built model data.' },
          { icon: '✅', text: 'Validate whether a tower remains within **safe load-bearing and compliance limits**', detail: 'NexDT checks whether proposed equipment changes stay within safe structural and RF compliance thresholds before approval.' },
        ],
        callout: { variant: 'info', title: 'NexDT is used after capture and before approval.', body: 'It is the engineering truth layer — sitting between site capture and final approval in every SiteSee workflow.' },
      },
      {
        id: 'm0-infographic-overview',
        type: 'infographic',
        imageUrl: IMG_PLATFORM,
        containerHeight: 340,
        label: 'NexDT Platform Overview',
        caption: 'Platform overview: Site Capture → NexDT (Engineering Truth Layer) → Final Approval',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'm0-workflow',
        type: 'steps',
        title: 'Where NexDT Fits in the SiteSee Workflow',
        steps: [
          { number: 1, title: 'Site Capture', description: 'A site is captured and processed into an as-built 3D model using the SiteSee Pilot App and drone workflows. NexDT receives this model — it does not generate it.', warning: null },
          { number: 2, title: 'Load into NexDT', description: 'The 3D model and equipment data are loaded into NexDT. The site is aligned and marked as As-Built, making it ready for engineering tools.', warning: null },
          { number: 3, title: 'Review & Manage Applications', description: 'Users review the site in 3D, create applications for equipment changes or reviews, and manage the equipment inventory associated with the site.', warning: null },
          { number: 4, title: 'Run Engineering Tools (IEA / EME)', description: 'Engineering tools — IEA for structural assessment and EME for RF compliance — are run against the as-built site with current and proposed equipment.', warning: null },
          { number: 5, title: 'Review Results & Submit for Approval', description: 'Results are reviewed before approvals or changes are submitted. NexDT acts as the engineering truth layer — every approval decision is based on data from within NexDT.', warning: null },
        ],
      },
      {
        id: 'm0-infographic-roles',
        type: 'infographic',
        imageUrl: IMG_ADMIN,
        containerHeight: 360,
        label: 'NexDT — Core Platform Roles',
        caption: 'Super Admin Governance: User roles and MFA onboarding flow',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'm0-roles',
        type: 'roles',
        title: 'Who Uses NexDT?',
        description: 'NexDT is used by multiple types of users. Each user may see or edit different information, but all users work within the same core system.',
        roles: [
          { icon: '⚙️', name: 'Engineers', actions: ['Review site data and equipment', 'Approve as-built configurations', 'Validate structural and RF safety', 'Edit and approve ColoApp submissions'], restriction: 'Accountable for every approval — not just "looks OK"' },
          { icon: '🏗️', name: 'Colo Users', actions: ['View equipment belonging to their organisation', 'Create and submit colocation applications', 'Propose equipment changes (Rip & Replace)', 'Run IEA before submitting'], restriction: 'Cannot see or edit competitor equipment, or approve applications' },
          { icon: '🔧', name: 'Support / Admin', actions: ['Assist with reports and validation', 'Manage user accounts and organisations', 'Configure the BIM equipment library', 'Platform-wide administration'], restriction: 'Highest-risk role — destructive actions have no automated rollback' },
        ],
      },
      {
        id: 'm0-concepts',
        type: 'concepts',
        title: 'Key Concepts You Must Understand',
        intro: 'Before using NexDT, it\'s important to understand these concepts. They appear throughout every module.',
        concepts: [
          { icon: '📁', term: 'Applications', definition: 'An Application represents a specific engineering or colocation workflow for a site. Applications are used to: review equipment, run assessments, and track changes and approvals. Every equipment change happens inside an Application.', example: 'Example: "Rip and Replace – Tower 42"', color: '#3B82F6' },
          { icon: '🔵', term: 'Existing Equipment', definition: 'Existing refers to equipment currently installed on the tower. This is the as-built baseline. Engineering results calculated on Existing-only show the current structural and RF state of the tower before any proposed changes.', example: 'Currently installed 4G panels, dishes, and mounts on the tower', color: '#6B7280' },
          { icon: '🟢', term: 'Proposed Equipment', definition: 'Proposed refers to new or modified equipment being evaluated. When you add Proposed equipment and run IEA in Existing + Proposed mode, you see how structural load changes with the new equipment added.', example: 'New 5G antennas being assessed in a ColoApp', color: '#10B981' },
          { icon: '⚖️', term: 'IEA (Indicative Engineering Assessment)', definition: 'Evaluates whether a tower remains within safe structural limits based on equipment configuration. IEA answers: "Can the structure handle this load?" Results are indicative — not final certification.', example: 'Results show: Existing 87% / Existing + Proposed 112%', color: '#F59E0B' },
          { icon: '📡', term: 'EME (Electromagnetic Energy)', definition: 'Evaluates electromagnetic exposure based on installed equipment. EME answers: "Is this RF-safe and compliant?" Both IEA and EME rely on accurate equipment and as-built data to produce meaningful results.', example: 'Run after equipment is configured with full catalogue metadata', color: '#8B5CF6' },
        ],
      },
      {
        id: 'm0-notdo',
        type: 'donotdo',
        title: 'What NexDT Does Not Do',
        intro: 'It\'s important to understand the boundaries of NexDT. NexDT provides indicative assessments and validation, not final engineering certification.',
        items: [
          { text: 'NexDT does not capture sites', detail: 'Site capture is handled by the SiteSee Pilot App and drone processing pipeline. NexDT receives the processed 3D model — it has no role in capturing or processing the imagery.' },
          { text: 'NexDT does not replace certified structural engineering', detail: 'IEA and EME are indicative assessments for decision support. They are not a substitute for a qualified structural engineer\'s certification on complex or safety-critical modifications.' },
          { text: 'NexDT does not design new towers', detail: 'NexDT is for reviewing and approving changes to existing tower configurations. New tower design is handled by external engineering workflows outside the NexDT system.' },
        ],
      },
      {
        id: 'm0-golden',
        type: 'checklist',
        title: 'The 5 Golden Rules of Data Integrity',
        intro: 'All users must adhere to these non-negotiable standards to prevent session corruption and downstream engineering failures.',
        items: [
          { label: 'Explicitly Link the Mesh Reference after every GLB upload', detail: 'When a BIM Admin uploads a GLB file, they must link it via the Mesh Reference dropdown. If skipped, the geometry is not instantiated, resulting in "ghost" objects — invisible to Engineers and Colo Users, yet present in data, causing IEA and EME failures.' },
          { label: 'Wait for the Green Initialisation Bar to disappear before editing', detail: 'Upon creating an application, a green progress bar appears. You MUST wait for it to fully disappear. Background initialisation tasks must complete — interrupting them causes session corruption and data loss that requires recreating the application.' },
          { label: 'Follow the CAD Modelling Specifications without exception', detail: 'All 3D assets must comply: Format = GLB/GLTF 2.0, units = millimetres, Up direction = +Z, Emitter face = +Y. Violations lead to inverted mounts, signal paths pointing into the ground, and invalid engineering approvals.' },
          { label: 'Enable the "My Equipment" Filter before editing anything', detail: 'Users must enable this filter before touching the 3D scene. It restricts interaction to the user\'s specific organisation, preventing accidental modification of competitor assets and guaranteeing correct data scope.' },
          { label: 'Use exact case-sensitive Manufacturer & Model names', detail: 'Manufacturer and Model fields are case-sensitive. Mismatches cause "silent" EME failures where port configurations fail to return — the assessment appears to run but produces no usable config data.' },
        ],
      },
      {
        id: 'm0-applied',
        type: 'scenarios',
        title: 'Applied Scenario: The Upgrade Workflow',
        intro: 'A Colo User is replacing an existing 4G panel with a 5G antenna. Identify the three critical steps required to execute this safely within the Engineering Truth Layer standards.',
        scenarios: [
          { status: 'pass', icon: '1️⃣', condition: 'Application Setup & Initialisation', meaning: 'Create the application in NexDT and wait for the green progress bar to fully disappear. The system is instantiating geometry and metadata during this time.', action: 'Do NOT proceed with any edits until the bar disappears — interruption causes session corruption.', color: '#3B82F6' },
          { status: 'pass', icon: '2️⃣', condition: 'Enable My Equipment Filter', meaning: 'Toggle the My Equipment Filter ON before touching any equipment in the 3D scene. This ensures you are only editing assets permitted for your specific organisation.', action: 'Confirm your equipment is highlighted with distinct colouring and full manufacturer details visible.', color: '#10B981' },
          { status: 'pass', icon: '3️⃣', condition: 'Run IEA: Existing vs Existing + Proposed', meaning: 'After placing the new 5G antenna, run IEA and compare Existing structural load against Existing + Proposed to determine feasibility before submitting for Engineering Review.', action: 'Document the result. If Existing + Proposed exceeds limits, flag for Engineering review — not automatic rejection.', color: '#F59E0B' },
        ],
      },
      {
        id: 'm0-summary',
        type: 'read',
        title: 'Summary',
        intro: 'NexDT is the system where SiteSee users review 3D tower models, manage applications and equipment, run engineering checks, and make informed decisions before approvals.',
        bullets: [
          { text: 'NexDT acts as the **engineering truth layer** between site capture and final approval' },
          { text: 'All users — Engineers, Colo Users, and Admins — work within the **same core system**' },
          { text: 'Understanding NexDT\'s role and boundaries makes **every other module easier**' },
        ],
      },
      {
        id: 'm0-check',
        type: 'check',
        title: 'Quick Check',
        question: 'NexDT is used at which stage of the SiteSee workflow?',
        options: [
          { id: 'a', text: 'Before site capture' },
          { id: 'b', text: 'During drone flight' },
          { id: 'c', text: 'After capture, before approval' },
          { id: 'd', text: 'After final certification' },
        ],
        correctAnswer: 'c',
        explanation: 'NexDT acts as the engineering validation layer — used after the site is captured and before any changes or designs are formally approved.',
        maxAttempts: 2,
      },
      {
        id: 'm0-quiz',
        type: 'quiz',
        title: 'Module 1 Quiz',
        passingScore: 80,
        questions: [
          { id: 'q1', question: 'What is the primary purpose of NexDT?', options: [{ id: 'a', text: 'Capturing drone imagery' }, { id: 'b', text: 'Designing new tower structures' }, { id: 'c', text: 'Engineering review and validation of tower configurations' }, { id: 'd', text: 'Managing pilot workflows' }], correctAnswer: 'c', explanation: 'NexDT is used for engineering assessment and validation, not capture or design.' },
          { id: 'q2', question: 'When is NexDT typically used in the SiteSee workflow?', options: [{ id: 'a', text: 'Before site capture' }, { id: 'b', text: 'During drone flight' }, { id: 'c', text: 'After capture and before approval' }, { id: 'd', text: 'Only after final certification' }], correctAnswer: 'c', explanation: 'NexDT sits between capture and approval — the engineering truth layer.' },
          { id: 'q3', question: 'What does "Existing + Proposed" represent?', options: [{ id: 'a', text: 'Historical data only' }, { id: 'b', text: 'Current equipment plus new or modified equipment' }, { id: 'c', text: 'Equipment from multiple organizations' }, { id: 'd', text: 'Equipment awaiting deletion' }], correctAnswer: 'b', explanation: 'Existing + Proposed combines the current as-built equipment with any new or modified equipment being evaluated.' },
          { id: 'q4', question: 'Which tools are run within NexDT?', options: [{ id: 'a', text: 'Scanlink and Pilot App' }, { id: 'b', text: 'IEA and EME' }, { id: 'c', text: 'CAD and BIM render tools' }, { id: 'd', text: 'GPS validation tools' }], correctAnswer: 'b', explanation: 'IEA (Indicative Engineering Assessment) and EME (Electromagnetic Energy) are the two core engineering tools run within NexDT.' },
        ],
      },
    ],
  },

  // ─── MODULE C0: COLO PRE-OPS ──────────────────────────────
  c0: {
    id: 'c0',
    path: 'colo',
    title: 'Pre-Operational Requirements',
    subtitle: 'What must be true before you touch anything',
    duration: '15 min',
    icon: '🔍',
    sections: [
      {
        id: 'c0-obj',
        type: 'objective',
        intro: 'By the end of this module, you will understand the upstream dependencies your workflow depends on — and why failing to verify them causes downstream failures.',
        outcomes: [
          'Understand why **BIM metadata accuracy** is critical before running operations',
          'Know the four **operational constraints** that can fail silently',
          'Understand the **ghost equipment** failure and how to avoid it',
          'Know your **permissions scope** before editing',
        ],
      },
      {
        id: 'c0-mandate',
        type: 'read',
        title: 'The Engineering Truth Layer — Your Role',
        intro: 'Operational integrity is non-negotiable. It starts with verifying upstream data in the BIM Admin tool. Errors in metadata or geometry linking propagate through the entire system.',
        bullets: [
          { icon: '🚨', text: '**Incorrect metadata causes EME to fail silently** — results appear valid but are based on wrong data', detail: 'If Manufacturer/Model fields don\'t exactly match the catalogue, "Get Config" returns nothing. The EME calculation appears to run but produces no usable output. A compliance report generated on this data is physically meaningless.' },
          { icon: '🔗', text: '**Mesh Reference must be explicitly linked** by the BIM Admin after every GLB upload', detail: 'Uploading a GLB file is only the first half. The Mesh Reference dropdown is the specific action that instantiates the asset. Without this pointer, the object has a record in the catalogue but no presence in the 3D environment.' },
          { icon: '📐', text: '**Axis orientation must comply with CAD law** — +Z up, +Y emitter face, millimetre scale', detail: 'NexDT hard-codes mounting brackets and clearance logic to the millimetre. Any scale or orientation violation renders the asset unusable for engineering approvals and produces invalid EME interpretations.' },
          { icon: '🏢', text: '**Organisation mapping controls your access scope** — you can only touch what\'s yours', detail: 'Organisation assignment determines which equipment you can see and edit. This is enforced at the data level, not just the UI. Colo Users assigned to Organisation A cannot interact with Organisation B equipment even if it\'s on the same tower.' },
        ],
      },
      {
        id: 'c0-constraints',
        type: 'mistakes',
        title: 'Critical Operational Constraints',
        items: [
          { mistake: 'Manufacturer & Model Mismatch', consequence: 'Mismatches prevent EME auto-configuration. "Get Config" returns no data — the equipment is unevaluable for RF compliance. The failure is silent: the workflow appears to continue but produces no meaningful EME output.' },
          { mistake: 'Missing Mesh Reference Link', consequence: 'Failure to link the GLB file results in Ghost Objects — geometry that is present in data but invisible in the 3D scene. Engineers cannot validate placement, orientation, or structural clearances. This forces application rejection and manual data recovery.' },
          { mistake: 'Wrong Z-Up Orientation in CAD model', consequence: 'Incorrect axis alignment leads to physically impossible mounting configurations — inverted equipment, signal paths pointing into the ground, or rotated geometry. This triggers automatic rejection of colocation applications.' },
          { mistake: 'Missing or Wrong Organisation Mapping', consequence: 'Prevents Colo Users from accessing their permitted assets, or incorrectly exposes them to proprietary data from other organisations. Misconfigured mapping breaks the entire ColoApp attribution chain.' },
        ],
      },
      {
        id: 'c0-ghost',
        type: 'read',
        title: 'The Ghost Equipment Failure — A Case Study',
        intro: 'This failure scenario illustrates how a single upstream omission breaks an entire workflow.',
        bullets: [
          { icon: '🔧', text: '**BIM Admin correctly inputs all metadata** for a new 5G antenna, uploads the GLB file', detail: 'Everything looks correct: Manufacturer, Model, ESA, Type, Subtype — all filled in. The GLB is uploaded successfully. The entry appears in catalogue search results.' },
          { icon: '❌', text: '**BIM Admin does NOT link the Mesh Reference** dropdown — skips this step', detail: 'The file exists in storage. The catalogue entry exists. But the pointer connecting them is missing. The asset is an orphan — it has a record but no 3D instantiation.' },
          { icon: '🏗️', text: '**Colo User finds the antenna** in the catalog and adds it to the scene', detail: 'The equipment appears to be added successfully. The session looks normal. But the antenna is invisible — it exists in data, but renders as nothing in the 3D environment.' },
          { icon: '⚙️', text: '**Engineer cannot validate placement** — visual audit fails, application is rejected', detail: 'The Reviewing Engineer cannot see the antenna to check for clashes, orientation, or physical plausibility. This creates a "trust gap" between the Colo User and the Engineer, forcing a full application rejection and manual data recovery.' },
        ],
        callout: { variant: 'danger', title: 'One missed click by a BIM Admin halts an entire site deployment.', body: 'The cost of omission scales: BIM Admin time → Colo User time → Engineer review time → site deployment delay. Verify the Mesh Reference is linked before publishing any new BIM equipment entry.' },
      },
      {
        id: 'c0-check',
        type: 'check',
        question: 'A Colo User adds a new antenna to the scene but it appears invisible. What is the most likely cause?',
        options: [
          { id: 'a', text: 'The site is not marked As-Built' },
          { id: 'b', text: 'The BIM Admin did not link the Mesh Reference after uploading the GLB' },
          { id: 'c', text: 'The IEA calculation has not been run yet' },
          { id: 'd', text: 'The Colo User needs to enable My Equipment Filter' },
        ],
        correctAnswer: 'b',
        explanation: 'Ghost equipment is caused by a missing Mesh Reference link. The GLB file exists in storage but is not instantiated — it has no 3D presence in the scene.',
        maxAttempts: 2,
      },
    ],
  },

  // ─── MODULE C1: IEA FUNDAMENTALS (COLO) ───────────────────
  c1: {
    id: 'c1',
    path: 'colo',
    title: 'IEA Fundamentals',
    subtitle: 'Understanding structural assessment as a Colo User',
    duration: '20 min',
    icon: '📊',
    sections: [
      {
        id: 'c1-what',
        type: 'read',
        title: 'What Decision Does IEA Help You Make?',
        intro: 'IEA answers one question: "Can the tower structure handle the proposed equipment?"',
        bullets: [
          { icon: '📐', text: '**IEA checks structural viability** of your proposed equipment changes before you commit to submitting them', detail: 'IEA models the tower as a physical structure and calculates how the added equipment load (weight, wind surface area) affects the tower\'s overall structural usage percentage.' },
          { icon: '⚖️', text: '**Compares Existing vs Existing + Proposed** — two separate load calculations on the same structure', detail: 'Existing shows the baseline structural load with current equipment. Existing + Proposed adds your new equipment to the model. The difference tells you the impact of your change.' },
          { icon: '⚠️', text: '**IEA is INDICATIVE** — it is not a final approval or rejection, just a signal', detail: 'A high IEA result means "flag for engineering review" — not "this is automatically rejected." Qualified engineers make the final call, not the tool.' },
          { icon: '⏱️', text: 'Run it **before submitting** your ColoApp — catch structural issues before Engineering reviews', detail: 'If IEA shows an obvious structural concern, you can adjust your equipment selection before sending it to Engineering. This saves significant review time.' },
        ],
      },
      {
        id: 'c1-watch',
        type: 'watch',
        title: 'IEA Results in Action',
        videoId: 'ZwtJNhz1aNc',
        startTime: 180,
        endTime: 330,
        timestampLabel: '03:00 – 05:30',
        focusText: 'Focus on: The IEA results table and what the percentage columns mean',
      },
      {
        id: 'c1-scenarios',
        type: 'scenarios',
        title: 'Interpreting IEA: Three Scenarios',
        intro: 'These are the three outcomes you\'ll see. Know how to respond to each.',
        scenarios: [
          { status: 'pass', icon: '✅', condition: 'Existing + Proposed is within safe limits', meaning: 'The proposed equipment does not push the tower beyond structural capacity. The design is structurally viable.', action: 'Proceed confidently. Run EME if required, then submit.', color: '#10B981' },
          { status: 'warn', icon: '⚠️', condition: 'Existing + Proposed is near the limit (borderline)', meaning: 'The proposed configuration is close to the structural limit. A slight variation in wind conditions or additional equipment could push it over.', action: 'Review the equipment list carefully. Consider whether all proposed items are necessary before submitting.', color: '#F59E0B' },
          { status: 'fail', icon: '❌', condition: 'Existing + Proposed exceeds the structural limit', meaning: 'The proposed equipment adds enough load to push the structural usage above the safe threshold. This does NOT mean the project is dead.', action: 'Flag for Engineering review — do not automatically reject. A qualified engineer may approve with caveats or request equipment modification.', color: '#EF4444' },
        ],
      },
      {
        id: 'c1-think',
        type: 'think',
        title: 'Think About It',
        question: 'Why would a site pass the Existing assessment but fail Existing + Proposed?',
      },
      {
        id: 'c1-mistakes',
        type: 'mistakes',
        title: 'Common Colo User Mistakes with IEA',
        items: [
          { mistake: 'Running IEA before the site is marked As-Built', consequence: 'Results are meaningless — the model doesn\'t reflect real-world conditions.' },
          { mistake: 'Treating a high IEA result as an automatic rejection', consequence: 'The application gets abandoned when Engineering might have approved it with review.' },
          { mistake: 'Not running IEA at all before submitting', consequence: 'Engineering receives a submission with obvious structural concerns, slowing down the review cycle.' },
          { mistake: 'Forgetting to toggle proposed equipment ON in Load Sources', consequence: 'IEA calculates Existing only — the proposed equipment impact is never assessed.' },
        ],
      },
      {
        id: 'c1-s4',
        type: 'check',
        question: 'IEA evaluates which of the following?',
        options: [
          { id: 'a', text: 'RF exposure and compliance' },
          { id: 'b', text: 'Structural feasibility of the equipment configuration' },
          { id: 'c', text: 'Image processing quality' },
          { id: 'd', text: 'Pilot flight validation logs' },
        ],
        correctAnswer: 'b',
        explanation: 'IEA — Indicative Engineering Assessment — evaluates whether the tower structure can handle the proposed equipment load.',
        maxAttempts: 2,
      },
      {
        id: 'c1-s5',
        type: 'check',
        question: 'When should you run IEA during the Colo workflow?',
        options: [
          { id: 'a', text: 'After submission, to verify the result' },
          { id: 'b', text: 'Before you create the application' },
          { id: 'c', text: 'After adding proposed equipment, before submitting' },
          { id: 'd', text: 'Only when Engineering requests it' },
        ],
        correctAnswer: 'c',
        explanation: 'Run IEA after placing your proposed equipment and before submitting. This lets you catch structural issues before the application goes to Engineering.',
        maxAttempts: 2,
      },
    ],
  },

  // ─── MODULE C2: RIP & REPLACE ─────────────────────────────
  c2: {
    id: 'c2',
    path: 'colo',
    title: 'Rip & Replace Workflow',
    subtitle: 'End-to-end equipment upgrade walkthrough',
    duration: '30 min',
    icon: '🔄',
    phases: ['Setup', 'Filter', 'Rip', 'Replace', 'IEA', 'Submit'],
    sections: [
      {
        id: 'c2-intro-video',
        type: 'watch',
        title: 'Intro — The Rip & Replace Workflow',
        videoId: VID_RIP_REPLACE,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Watch this intro before stepping through the workflow — it gives you the full picture first.',
      },
      {
        id: 'c2-infographic-workflow',
        type: 'infographic',
        imageUrl: IMG_RIP,
        containerHeight: 380,
        label: 'NexDT — Rip & Replace Workflow',
        caption: 'Rip & Replace: Application Setup → Filter → Rip → Replace → Assess & Submit',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'c2-overview',
        type: 'read',
        title: 'What is a Rip & Replace?',
        intro: 'A Rip & Replace replaces existing equipment with new equipment — the most common Colo User workflow. The classic example: upgrading 4G panels to 5G antennas.',
        bullets: [
          { icon: '🔴', text: 'The **"Rip"** — removing existing equipment from the digital twin', detail: 'You select the equipment to be removed, add it to a named layer (the audit trail), and delete it from the scene. The change isn\'t final until submission.' },
          { icon: '🟢', text: 'The **"Replace"** — searching the BIM Catalog and installing new equipment', detail: 'You search the equipment catalogue by Manufacturer and Model, place the equipment in the 3D scene, and position it using Translate and Orientation tools.' },
          { icon: '📊', text: '**IEA assessment** to validate structural impact before you commit', detail: 'Before submitting, you run IEA to check whether the new equipment configuration stays within structural safe limits.' },
          { icon: '📤', text: '**Submission** — sending the completed design to Engineering for review and approval', detail: 'Once confirmed and submitted, the application locks. Engineering takes ownership. You can view but not edit.' },
        ],
      },

      // PHASE 1
      {
        id: 'c2-p1-steps',
        type: 'steps',
        phase: 0,
        title: 'Phase 1 — Application Setup',
        steps: [
          { number: 1, title: 'Start from the Default Scene', description: 'Navigate to the site and open the default scene — not an existing application. The default scene represents the as-built baseline. Starting from a previous application will cause tracking issues.', warning: null },
          { number: 2, title: 'Click Create Application', description: 'Find "Create Application" in the left side menu. Give it a descriptive, recognisable name. The convention: "Rip and Replace – [Site Name]". This name appears in logs, approvals, and the Engineering review queue.', warning: null },
          { number: 3, title: 'Wait for the Green Bar', description: 'After creating, a green progress bar appears at the top of the screen. This indicates background initialisation tasks are running — scene preparation, data linking, audit trail creation. Do NOT proceed until it fully disappears.', warning: 'Editing during initialisation corrupts the session. This is not a cosmetic warning — it will cause data integrity issues that require the application to be recreated.' },
        ],
      },
      { id: 'c2-p1-watch', type: 'watch', phase: 0, title: 'Phase 1 — Setup', videoId: 'ZwtJNhz1aNc', startTime: 70, endTime: 125, timestampLabel: '01:10 – 02:05', focusText: 'Focus on: The Create Application button and the green progress bar behaviour' },
      { id: 'c2-p1-callout', type: 'callout', phase: 0, variant: 'warning', title: 'Do not proceed until the green bar disappears.', body: 'Editing during initialization corrupts the session. Background tasks must complete first — this is not optional.' },
      { id: 'c2-p1-check', type: 'check', phase: 0, question: 'What does the green progress bar indicate after creating an application?', options: [{ id: 'a', text: 'The application has been submitted successfully' }, { id: 'b', text: 'Background initialization tasks are still running' }, { id: 'c', text: 'IEA is calculating in the background' }, { id: 'd', text: 'The application is ready to edit immediately' }], correctAnswer: 'b', explanation: 'The green bar indicates background initialization is in progress. Wait for it to disappear before proceeding.', maxAttempts: 2 },

      // PHASE 2
      {
        id: 'c2-p2-read',
        type: 'read',
        phase: 1,
        title: 'Phase 2 — My Equipment Filter',
        intro: 'Before touching anything in the 3D scene, enable the My Equipment Filter. This is not optional.',
        bullets: [
          { icon: '🔍', text: 'The filter **shows only your organisation\'s equipment**, highlighted with distinct colouring', detail: 'Without the filter active, you can see all equipment on the tower — including competitor assets. The filter makes your equipment visually distinct with full manufacturer details.' },
          { icon: '🚫', text: 'Without it: **competitor assets are visible but restricted** — you may accidentally interact with them', detail: 'Clicking on equipment belonging to other organisations without the filter shows limited data. You risk confusing their equipment with yours, especially on shared towers.' },
          { icon: '✅', text: 'Always enable **before touching anything** in the 3D scene — it takes one click', detail: 'Toggle "My Equipment Filter" in the left panel. Your equipment will immediately highlight and show full manufacturer details, assembly numbers, and configuration data.' },
        ],
      },
      { id: 'c2-p2-watch', type: 'watch', phase: 1, title: 'Phase 2 — Filter', videoId: 'ZwtJNhz1aNc', startTime: 125, endTime: 200, timestampLabel: '02:05 – 03:20', focusText: 'Focus on: How equipment highlighting changes when the filter is toggled on and off' },
      { id: 'c2-p2-check', type: 'check', phase: 1, question: 'Why should you enable the My Equipment Filter before editing?', options: [{ id: 'a', text: 'It speeds up 3D rendering' }, { id: 'b', text: 'To restrict visibility and editing to your permitted equipment only' }, { id: 'c', text: 'It automatically activates the IEA tool' }, { id: 'd', text: 'It is required to create a new layer' }], correctAnswer: 'b', explanation: 'The filter ensures you only interact with equipment your organisation owns, preventing accidental edits to other organisations\' assets.', maxAttempts: 2 },

      // PHASE 3
      {
        id: 'c2-p3-steps',
        type: 'steps',
        phase: 2,
        title: 'Phase 3 — The Rip (Remove Old Equipment)',
        steps: [
          { number: 1, title: 'Enable the Selector Tool', description: 'Switch to the Selector Tool (arrow icon) in the toolbar. This puts you in selection mode — clicking an object selects it rather than navigating around it.', warning: null },
          { number: 2, title: 'Select the Equipment to Remove', description: 'Click the equipment panel or antenna you want to remove. The selected item should highlight. Confirm it\'s yours (manufacturer details should be visible if the filter is active).', warning: null },
          { number: 3, title: 'Click Edit and Add a Layer', description: 'Click the Edit button in the properties panel. You\'ll be prompted to Add a Layer. Name it descriptively — e.g. "Replace 5G Upgrade". This layer is the audit trail for this change. Without it, you cannot delete.', warning: 'The layer is REQUIRED. The system blocks deletion without one. Do not try to skip this step.' },
          { number: 4, title: 'Delete the Equipment', description: 'With the layer created, click the Delete Equipment icon (trash). The equipment is removed from the digital twin. This action is tracked in the layer and does not take effect on the real site until the application is approved.', warning: null },
        ],
      },
      { id: 'c2-p3-watch', type: 'watch', phase: 2, title: 'Phase 3 — Rip', videoId: 'ZwtJNhz1aNc', startTime: 200, endTime: 300, timestampLabel: '03:20 – 05:00', focusText: 'Focus on: The layer creation dialog and the trash icon confirmation step' },
      { id: 'c2-p3-callout', type: 'callout', phase: 2, variant: 'danger', title: 'Cannot delete without a layer.', body: 'The system blocks equipment deletion if no layer has been created. Adding a layer is mandatory — it creates the audit trail for this change.' },
      { id: 'c2-p3-check', type: 'check', phase: 2, question: 'Why is adding a layer required before deleting equipment?', options: [{ id: 'a', text: 'To unlock the delete button visually' }, { id: 'b', text: 'To track the change request in the application audit trail' }, { id: 'c', text: 'To trigger IEA automatically' }, { id: 'd', text: 'To notify the Engineering team' }], correctAnswer: 'b', explanation: 'Adding a layer creates the change tracking record that ties this modification to your application.', maxAttempts: 2 },

      // PHASE 4
      {
        id: 'c2-infographic-downstream',
        type: 'infographic',
        imageUrl: IMG_IEA_EME,
        containerHeight: 340,
        label: 'NexDT — IEA vs EME',
        caption: 'Engineering Assessment: IEA (Structural Feasibility) vs EME (RF Safety & Compliance)',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'c2-p4-steps',
        type: 'steps',
        phase: 3,
        title: 'Phase 4 — The Replace (Install New Equipment)',
        steps: [
          { number: 1, title: 'Open the BIM Catalog', description: 'Navigate to Proposed Equipment → BIM Catalog in the left panel. This is the library of all available equipment configured by your BIM Admin team. Search by Manufacturer or Model name.', warning: null },
          { number: 2, title: 'Search and Add to Scene', description: 'Search for the specific model (e.g. Ericsson AIR3227). Click the equipment to preview its details, then add it to the scene. It will appear in the model, often at the origin point — you\'ll need to position it.', warning: null },
          { number: 3, title: 'Position with Translate Tools', description: 'Use the Translate Tools to move the equipment to the correct mounting location. Ensure it is attached to the tower structure — no floating equipment. Position it where the removed equipment was, unless the design calls for a different location.', warning: null },
          { number: 4, title: 'Set Bearing with Orientation Tools', description: 'Use the Orientation Tools to set the correct azimuth (bearing direction). This is important for both visual accuracy and EME calculations. Check the site documentation or design specs for the correct bearing angle.', warning: null },
          { number: 5, title: 'Rename (Optional) and Save Draft', description: 'Optionally rename the equipment for clarity — e.g. "AIR3227-5G-North". Then click Save Draft. This commits your changes to the current session. Without saving, your work may be lost if you navigate away.', warning: null },
        ],
      },
      { id: 'c2-p4-watch', type: 'watch', phase: 3, title: 'Phase 4 — Replace', videoId: 'ZwtJNhz1aNc', startTime: 300, endTime: 435, timestampLabel: '05:00 – 07:15', focusText: 'Focus on: The catalog search, placement controls, and orientation tools' },
      { id: 'c2-p4-check', type: 'check', phase: 3, question: 'Which tool adjusts the antenna bearing/azimuth direction?', options: [{ id: 'a', text: 'Translate tools' }, { id: 'b', text: 'Scale tools' }, { id: 'c', text: 'Orientation (rotation) tools' }, { id: 'd', text: 'Layer tools' }], correctAnswer: 'c', explanation: 'Orientation tools control bearing, azimuth and tilt. Translate tools move the physical 3D position.', maxAttempts: 2 },

      // PHASE 5
      {
        id: 'c2-p5-read',
        type: 'read',
        phase: 4,
        title: 'Phase 5 — Run IEA',
        intro: 'Before submitting, validate that your proposed configuration is structurally viable.',
        bullets: [
          { icon: '📊', text: 'Expand **IEA** in the left menu → click **Calculate**', detail: 'IEA runs a structural analysis model using your current equipment configuration. The calculation takes the tower geometry, wind parameters, and all equipment loads into account.' },
          { icon: '📋', text: 'Review both: **Existing %** and **Existing + Proposed %** columns in the results table', detail: 'Existing shows the current structural usage baseline. Existing + Proposed shows what the structural usage becomes after your new equipment is added. The difference is the impact of your change.' },
          { icon: '🚨', text: 'If Existing + Proposed exceeds limits → **flag for engineering review** before proceeding', detail: 'A high result does not mean auto-rejection. Note it in your submission, and Engineering will assess whether it is acceptable with caveats or needs equipment modification.' },
          { icon: '⚠️', text: 'IEA is **indicative only** — a high percentage is not an automatic submission rejection', detail: 'The tool provides decision support. Qualified engineers make the final determination. Your job is to run it honestly and include the results in your submission.' },
        ],
      },
      { id: 'c2-p5-watch', type: 'watch', phase: 4, title: 'Phase 5 — IEA', videoId: 'ZwtJNhz1aNc', startTime: 435, endTime: 510, timestampLabel: '07:15 – 08:30', focusText: 'Focus on: The results table columns and what the percentage values mean' },
      { id: 'c2-p5-check', type: 'check', phase: 4, question: 'What does IEA compare in the results table?', options: [{ id: 'a', text: 'RF exposure levels before and after changes' }, { id: 'b', text: 'Existing structural load vs Existing + Proposed load' }, { id: 'c', text: 'Pilot logs and inspection history' }, { id: 'd', text: 'Equipment catalogue specifications' }], correctAnswer: 'b', explanation: 'IEA compares the current structural load (Existing) against load if proposed equipment is added (Existing + Proposed).', maxAttempts: 2 },

      // PHASE 6
      {
        id: 'c2-p6-steps',
        type: 'steps',
        phase: 5,
        title: 'Phase 6 — Confirm & Submit',
        steps: [
          { number: 1, title: 'Click Confirm Design', description: 'In the left menu, click "Confirm Design". This triggers a redirect to the ColoApp Manager — the submission interface for your application. Sign in if prompted.', warning: null },
          { number: 2, title: 'Review Your Application', description: 'Locate your application using the Application ID. Review the equipment transactions listed at the bottom: old equipment should appear as "Remove", new equipment as "Add". Verify both the count and the correct items.', warning: null },
          { number: 3, title: 'Submit', description: 'Click the Submit button (top right corner). A confirmation dialog appears — click "Yes". Look for the "Successfully Submitted" status message. If this does not appear, the submission did not go through.', warning: null },
          { number: 4, title: 'Confirm Read-Only Status', description: 'After successful submission, the application becomes read-only. You can view all details, transactions, and documents — but no edits are possible. The Engineering team now owns the application.', warning: null },
        ],
      },
      { id: 'c2-p6-watch', type: 'watch', phase: 5, title: 'Phase 6 — Submit', videoId: 'ZwtJNhz1aNc', startTime: 510, endTime: 600, timestampLabel: '08:30 – 10:00', focusText: 'Focus on: The ColoApp Manager layout and the submission confirmation screen' },
      { id: 'c2-p6-callout', type: 'callout', phase: 5, variant: 'info', title: 'After submission, the application is locked.', body: 'You can view but not edit. The Engineering team takes ownership and will review, potentially edit, then approve or return the application.' },
      { id: 'c2-p6-check', type: 'check', phase: 5, question: 'What happens immediately after you successfully submit a ColoApp?', options: [{ id: 'a', text: 'The equipment is immediately installed on the tower' }, { id: 'b', text: 'The application becomes read-only and enters Engineering review' }, { id: 'c', text: 'You can still edit for 24 hours' }, { id: 'd', text: 'IEA runs automatically one final time' }], correctAnswer: 'b', explanation: 'Submission locks the application and transfers ownership to Engineering. You retain read access but cannot make further changes.', maxAttempts: 2 },

      {
        id: 'c2-quiz', type: 'quiz', title: 'Module Quiz', passingScore: 80,
        questions: [
          { id: 'q1', question: 'A Rip & Replace workflow is used to:', options: [{ id: 'a', text: 'Capture new site imagery' }, { id: 'b', text: 'Remove old equipment and install new equipment' }, { id: 'c', text: 'Run EME analysis only' }, { id: 'd', text: 'Create BIM catalogue entries' }], correctAnswer: 'b', explanation: 'Rip & Replace removes old equipment (e.g. 4G panels) and installs new equipment (e.g. 5G antennas) within a ColoApp.' },
          { id: 'q2', question: 'Which filter restricts editing to your organisation\'s equipment only?', options: [{ id: 'a', text: 'Site Filter' }, { id: 'b', text: 'My Equipment Filter' }, { id: 'c', text: 'Layer Filter' }, { id: 'd', text: 'Proposed Equipment Filter' }], correctAnswer: 'b', explanation: 'My Equipment Filter restricts visibility and editing to equipment belonging to your Head Customer.' },
          { id: 'q3', question: 'What must you wait for after creating a new application?', options: [{ id: 'a', text: 'IEA results to appear' }, { id: 'b', text: 'The green progress bar to fully disappear' }, { id: 'c', text: 'Engineer approval' }, { id: 'd', text: 'CSV upload confirmation' }], correctAnswer: 'b', explanation: 'The green progress bar indicates background initialization tasks are still running.' },
          { id: 'q4', question: 'Attempting to delete equipment without first adding a layer results in:', options: [{ id: 'a', text: 'The equipment being deleted anyway' }, { id: 'b', text: 'The system blocking the deletion' }, { id: 'c', text: 'Automatic submission' }, { id: 'd', text: 'IEA being triggered' }], correctAnswer: 'b', explanation: 'The system blocks deletion without a layer. A layer must be created first.' },
          { id: 'q5', question: 'After installing new equipment from the BIM catalog, what should you do?', options: [{ id: 'a', text: 'Submit the application immediately' }, { id: 'b', text: 'Click Save Draft to commit changes' }, { id: 'c', text: 'Run EME first' }, { id: 'd', text: 'Exit the viewer' }], correctAnswer: 'b', explanation: 'Save Draft commits your changes to the session.' },
          { id: 'q6', question: 'What does IEA compare in the results table?', options: [{ id: 'a', text: 'RF exposure before and after' }, { id: 'b', text: 'Existing structural load vs Existing + Proposed' }, { id: 'c', text: 'Pilot logs' }, { id: 'd', text: 'Equipment catalogue entries' }], correctAnswer: 'b', explanation: 'IEA compares Existing load (current baseline) against Existing + Proposed (with new equipment).' },
          { id: 'q7', question: 'After submission, the application status becomes:', options: [{ id: 'a', text: 'Editable by the submitter for 24h' }, { id: 'b', text: 'Read-only, pending Engineering review' }, { id: 'c', text: 'Archived automatically' }, { id: 'd', text: 'Deleted from the system' }], correctAnswer: 'b', explanation: 'After submission, the application is locked to the Colo User and enters the Engineering review queue.' },
          { id: 'q8', question: 'Who reviews and approves a submitted Rip & Replace application?', options: [{ id: 'a', text: 'The Pilot who captured the site' }, { id: 'b', text: 'The Engineering team' }, { id: 'c', text: 'The original Colo User' }, { id: 'd', text: 'The system automatically' }], correctAnswer: 'b', explanation: 'The Engineering team reviews submitted applications, validates the design, and approves or returns for revision.' },
        ],
      },
    ],
  },

  // ─── MODULE E1: IEA & EME FUNDAMENTALS ────────────────────
  e1: {
    id: 'e1',
    path: 'engineer',
    title: 'IEA & EME Fundamentals',
    subtitle: 'Module 1.2 — NexDT Core Tools',
    duration: '25–30 min',
    icon: '🔬',
    sections: [
      {
        id: 'e1-intro-video',
        type: 'watch',
        title: 'Intro — NexDT IEA & EME',
        videoId: VID_IEA_EME,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Watch this before diving into IEA and EME — it explains both tools and why they matter.',
      },
      {
        id: 'e1-obj',
        type: 'objective',
        intro: 'By the end of this module, you will be able to:',
        outcomes: [
          'Understand **what IEA and EME are**',
          'Know **when and why** they are used in NexDT',
          'Confidently **navigate and run** IEA and EME',
          'Correctly interpret **Existing vs Existing + Proposed** results',
          'Avoid common misuses of **indicative engineering outputs**',
        ],
      },
      {
        id: 'e1-infographic-tools',
        type: 'infographic',
        imageUrl: IMG_IEA_EME,
        containerHeight: 340,
        label: 'NexDT — IEA vs EME Core Tools',
        caption: 'Core Tools: IEA (Structural Feasibility) vs EME (RF Safety) — deterministic logic, analysis modes',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      // SECTION 1 — What Problem Are We Solving?
      {
        id: 'e1-s1',
        type: 'read',
        title: 'Section 1 — What Problem Are We Solving?',
        intro: 'Before using any engineering tool, it\'s critical to understand what decision the tool supports. NexDT has two core engineering tools:',
        isSplitCard: true,
        columns: [
          { header: 'IEA', question: '"Can the structure handle this?"', items: ['Evaluates structural feasibility of the tower', 'Based on existing equipment load', 'Based on proposed equipment load', 'Wind and structural parameters included'], color: '#3B82F6' },
          { header: 'EME', question: '"Is this RF-safe and compliant?"', items: ['Evaluates RF exposure and compliance', 'Based on antenna configuration', 'Based on equipment data', 'Checked against regulatory limits'], color: '#10B981' },
        ],
      },
      {
        id: 'e1-check1',
        type: 'check',
        question: 'Which statement is correct about IEA?',
        options: [
          { id: 'a', text: 'IEA evaluates RF exposure' },
          { id: 'b', text: 'IEA evaluates structural feasibility' },
          { id: 'c', text: 'EME replaces certified engineering' },
          { id: 'd', text: 'EME is automatically run on every site' },
        ],
        correctAnswer: 'b',
        explanation: 'IEA evaluates structural feasibility of the tower. EME evaluates RF exposure and compliance. Neither replaces certified engineering.',
        maxAttempts: 2,
      },
      // SECTION 2 — When IEA & EME Actually Work
      {
        id: 'e1-prereqs',
        type: 'checklist',
        title: 'Section 2 — When IEA & EME Actually Work',
        intro: 'IEA and EME depend entirely on data quality. They will not produce meaningful results if these conditions are missing.',
        items: [
          { label: 'The site is marked As-Built', detail: 'As-Built status means the 3D model has been verified against real-world capture data. Without this, the model may not reflect actual tower conditions — any results produced are based on potentially incorrect geometry.' },
          { label: 'Equipment is present in the model', detail: 'IEA needs equipment to calculate structural load. EME needs antennae configured with accurate specifications. An empty or partially populated model produces garbage output — or worse, a clean-looking result that is entirely wrong.' },
          { label: 'Correct catalogue and equipment metadata', detail: 'Manufacturer, Model, ESA values — all must be accurate. EME uses Manufacturer/Model as the lookup key to pull RF configuration from the catalogue. A mismatch returns no config and EME silently fails.' },
        ],
        callout: { variant: 'warning', title: 'Running IEA or EME on incomplete data leads to misleading outputs.', body: 'Results from incomplete sites are not just wrong — they can be dangerously misleading. A passing result on bad data is worse than no result at all.' },
      },
      {
        id: 'e1-check2',
        type: 'check',
        question: 'What is the minimum requirement to run IEA or EME meaningfully?',
        options: [
          { id: 'a', text: 'A completed ColoApp' },
          { id: 'b', text: 'As-built site with equipment present' },
          { id: 'c', text: 'Engineer approval' },
          { id: 'd', text: 'BIM catalogue upload only' },
        ],
        correctAnswer: 'b',
        explanation: 'Both IEA and EME require an as-built site with equipment present and correct catalogue metadata to produce meaningful results.',
        maxAttempts: 2,
      },
      // SECTION 3 — IEA Workflow End-to-End
      {
        id: 'e1-workflow',
        type: 'steps',
        title: 'Section 3 — The IEA Workflow (End-to-End)',
        steps: [
          { number: 1, title: 'Open the site in NexDT', description: 'Navigate to the site from the Sites Portal. Confirm the site is marked as As-Built before proceeding. Check that equipment is present in the 3D model. If either condition is missing, stop — results will be meaningless.', warning: null },
          { number: 2, title: 'Navigate to IEA', description: 'In the left side panel, expand the IEA section. This opens the IEA tool for the current site and application. IEA is scoped to the specific application you are reviewing.', warning: null },
          { number: 3, title: 'Review Site Information', description: 'Check site metadata, tower type, and structural baseline. This data must be accurate even if read-only. If site information is wrong, flag it to the data team before calculating — errors here propagate through all downstream results.', warning: null },
          { number: 4, title: 'Confirm Wind Parameters', description: 'Critical for structural modelling. Default values are NOT always correct — they depend on site geography and terrain category. Verify against site documentation. Incorrect wind data can completely invalidate IEA results.', warning: 'Default wind parameters are NOT always correct for a given site. Always verify against site documentation before calculating. This is the most common source of invalid IEA results.' },
          { number: 5, title: 'Review Structure', description: 'Review tower geometry, heights, and structural segments. Think of this as the physical skeleton of the site. Correct tower type and segment heights are essential for accurate structural modelling — errors here affect every calculation.', warning: null },
          { number: 6, title: 'Review Load Sources', description: 'This is the most influential section. You will see existing equipment and proposed equipment listed. Toggle equipment on/off to include or exclude from calculations. Every single toggle directly affects the final structural load result. For Existing + Proposed mode, ensure proposed equipment is toggled ON.', warning: null },
          { number: 7, title: 'Choose Analysis Mode', description: 'Select whether to calculate Existing only (baseline) or Existing + Proposed (with new equipment included). For ColoApp reviews and approvals, always use Existing + Proposed. Existing-only is useful for understanding current structural state before reviewing changes.', warning: null },
          { number: 8, title: 'Submit and Calculate', description: 'Click Calculate. IEA outputs are deterministic — change any input and the results change. Review the results table showing structural usage percentages for Existing and Existing + Proposed. Document your findings before making any approval decisions.', warning: null },
        ],
      },
      {
        id: 'e1-misstep',
        type: 'callout',
        variant: 'warning',
        title: 'Common Misstep: Running calculations before reviewing wind or load parameters.',
        body: 'IEA outputs are deterministic. If you calculate before verifying inputs, you may base engineering decisions on results derived from incorrect wind data or wrong equipment toggles. Always review Wind Parameters and Load Sources FIRST.',
      },
      {
        id: 'e1-check3',
        type: 'check',
        question: 'You are about to run IEA. What should you review first?',
        options: [
          { id: 'a', text: 'Click Calculate immediately' },
          { id: 'b', text: 'Wind parameters and Load Sources' },
          { id: 'c', text: 'Export the report first' },
          { id: 'd', text: 'Run EME instead' },
        ],
        correctAnswer: 'b',
        explanation: 'Always review Wind Parameters and Load Sources before calculating. IEA outputs are deterministic — wrong inputs produce wrong results that can lead to incorrect engineering decisions.',
        maxAttempts: 2,
      },
      // SECTION 4 — Understanding the IEA Tabs
      {
        id: 'e1-tabs',
        type: 'read',
        title: 'Section 4 — Understanding the IEA Tabs',
        isTabs: true,
        tabs: [
          { name: 'Site Information', description: 'Contains site metadata, tower type, and structural baseline. This data must be accurate, even if read-only. If site information is wrong, flag it to the data team — errors here invalidate all downstream calculations. Do not proceed with IEA if site information looks incorrect.', importance: 'normal' },
          { name: 'Wind Parameters', description: 'Critical for structural modelling. Default values are NOT always correct — they depend on site geography and terrain category. Incorrect wind data can completely invalidate IEA results. Always verify against site documentation before calculating.', importance: 'high' },
          { name: 'Structure', description: 'Defines tower geometry, heights, and structural segments. Think of this as the physical skeleton of the site. Correct tower type and height are essential for accurate structural modelling. Errors here propagate through every calculation downstream.', importance: 'normal' },
          { name: 'Load Sources', description: 'THE MOST INFLUENTIAL SECTION. Here you see existing and proposed equipment. Toggle each item on/off to include or exclude from calculations. Every toggle directly affects the final structural load result. For Existing + Proposed analysis, ensure all proposed equipment is toggled ON.', importance: 'critical' },
        ],
      },
      {
        id: 'e1-infographic-modes',
        type: 'infographic',
        imageUrl: IMG_PLATFORM,
        containerHeight: 360,
        label: 'NexDT — Platform Overview',
        caption: 'Platform Overview: Site Capture → NexDT Engineering Truth Layer → Final Approval',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      // SECTION 5 — Existing vs Existing + Proposed
      {
        id: 'e1-existing-proposed',
        type: 'scenarios',
        title: 'Section 5 — Existing vs Existing + Proposed (Critical Concept)',
        intro: 'Engineering results can be viewed in two modes. Understanding the difference is essential for correct interpretation.',
        scenarios: [
          { status: 'pass', icon: '🔵', condition: 'Existing Only', meaning: 'Evaluates the current state of the tower — the as-built baseline. Helpful for diagnosing existing structural constraints before any proposed changes are considered. This is where you start, not where you finish.', action: 'Use as your baseline reference. Then switch to Existing + Proposed before making any approval decisions.', color: '#6B7280' },
          { status: 'warn', icon: '🟢', condition: 'Existing + Proposed', meaning: 'Evaluates the impact of new or modified equipment added on top of the existing baseline. Used for decision-making and approvals. A site may pass Existing but fail Existing + Proposed — this is normal and expected when proposed equipment adds structural load.', action: 'Always use this mode for ColoApp reviews and approvals. This is the number that matters for engineering decisions.', color: '#10B981' },
        ],
      },
      {
        id: 'e1-think1',
        type: 'think',
        title: 'Reflection',
        question: 'Why is it important to evaluate Existing + Proposed instead of only Existing?',
      },
      // SECTION 6 — Interpreting IEA Results
      {
        id: 'e1-results',
        type: 'read',
        title: 'Section 6 — Interpreting IEA Results Correctly',
        intro: 'IEA results are indicative, used for early feasibility, and not a replacement for certified engineering.',
        isResultGuide: true,
        results: [
          { status: 'pass', icon: '✅', label: 'Within safe structural limits', action: 'Proceed with confidence — design is structurally viable. Verify transaction logs match expected changes, then approve.' },
          { status: 'borderline', icon: '⚠️', label: 'Near structural limits', action: 'Flag for further engineering review. Investigate load sources and wind parameters. Do not treat as final rejection automatically.' },
          { status: 'fail', icon: '❌', label: 'Exceeds structural limits', action: 'Flag for engineering review — NOT automatic rejection. Investigate load sources and parameters. A qualified engineer may approve with conditions.' },
        ],
      },
      {
        id: 'e1-check4',
        type: 'check',
        question: 'Your site fails Existing + Proposed. What should you do?',
        options: [
          { id: 'a', text: 'Reject the application immediately' },
          { id: 'b', text: 'Flag for further engineering review' },
          { id: 'c', text: 'Ignore the result and proceed' },
          { id: 'd', text: 'Assume the system is wrong' },
        ],
        correctAnswer: 'b',
        explanation: 'A failing IEA result is NOT an automatic rejection. Flag for engineering review — a qualified engineer will assess whether the design can be approved with conditions or requires modification.',
        maxAttempts: 2,
      },
      // SECTION 7 — EME Fundamentals
      {
        id: 'e1-eme',
        type: 'read',
        title: 'Section 7 — EME Fundamentals (High Level)',
        intro: 'EME (Electromagnetic Energy) evaluates RF exposure and compliance. It is covered in more depth in a dedicated module.',
        bullets: [
          { icon: '▶️', text: 'EME **runs on demand** — it is not automatic', detail: 'Unlike IEA which is part of every application review, EME is triggered manually when RF compliance needs to be assessed for a specific equipment configuration.' },
          { icon: '📋', text: 'Requires **equipment and catalogue data** to generate meaningful outputs', detail: 'Manufacturer and Model must match the platform catalogue exactly. If they don\'t match, no RF configuration is returned and EME produces nothing useful.' },
          { icon: '🚫', text: 'Cannot generate meaningful outputs **without proper inputs**', detail: 'Running EME on equipment with incorrect metadata is worse than not running it — the results will appear valid but are based on wrong data.' },
        ],
        callout: { variant: 'info', title: 'Users who can run EME: Engineer, Support Admin, Colo User. Pilots cannot run EME.', body: 'EME analysis is covered in more depth in a later module. For now, understand when it applies and who can run it.' },
      },
      {
        id: 'e1-check5',
        type: 'check',
        question: 'Which user role CANNOT run EME in NexDT?',
        options: [
          { id: 'a', text: 'Engineer' },
          { id: 'b', text: 'Support Admin' },
          { id: 'c', text: 'Colo User' },
          { id: 'd', text: 'Pilot' },
        ],
        correctAnswer: 'd',
        explanation: 'Pilots cannot run EME. Engineers, Support Admins, and Colo Users all have EME access.',
        maxAttempts: 2,
      },
      // SECTION 8 — Common Mistakes
      {
        id: 'e1-mistakes',
        type: 'mistakes',
        title: 'Section 8 — Common Mistakes to Avoid',
        items: [
          { mistake: 'Running IEA before site is as-built', consequence: 'Results are meaningless — the model doesn\'t reflect real-world conditions. You may make approval decisions based on completely incorrect structural data.' },
          { mistake: 'Assuming default wind values are correct', consequence: 'Structural calculations are based on wrong wind loads. Results look clean but are invalid for the site\'s actual geography and terrain. This is one of the most common sources of bad IEA output.' },
          { mistake: 'Forgetting to toggle proposed equipment in Load Sources', consequence: 'IEA calculates Existing only — the actual impact of proposed changes is never assessed. You approve a design without ever understanding its structural consequence.' },
          { mistake: 'Treating indicative results as final approval', consequence: 'IEA is decision support, not engineering certification. Treating a pass as automatic approval bypasses the engineering review that NexDT is designed to enable.' },
        ],
      },
      // FINAL QUIZ
      {
        id: 'e1-quiz',
        type: 'quiz',
        title: 'Module 1.2 Final Quiz',
        passingScore: 80,
        questions: [
          { id: 'q1', question: 'What is the primary purpose of IEA?', options: [{ id: 'a', text: 'RF exposure compliance' }, { id: 'b', text: 'Structural feasibility assessment' }, { id: 'c', text: 'Image processing' }, { id: 'd', text: 'Pilot validation' }], correctAnswer: 'b', explanation: 'IEA evaluates structural feasibility of a tower based on equipment configuration.' },
          { id: 'q2', question: 'EME primarily evaluates:', options: [{ id: 'a', text: 'Wind loading' }, { id: 'b', text: 'Structural rotation' }, { id: 'c', text: 'RF exposure and compliance' }, { id: 'd', text: 'Equipment geometry' }], correctAnswer: 'c', explanation: 'EME evaluates RF exposure and compliance.' },
          { id: 'q3', question: 'What must exist before IEA or EME can run meaningfully?', options: [{ id: 'a', text: 'Pilot logs' }, { id: 'b', text: 'Empty site' }, { id: 'c', text: 'As-built site with equipment' }, { id: 'd', text: 'Approved ColoApp' }], correctAnswer: 'c', explanation: 'As-built site with equipment and correct metadata is required for meaningful results.' },
          { id: 'q4', question: 'Which tab most directly affects IEA outcomes?', options: [{ id: 'a', text: 'Site Information' }, { id: 'b', text: 'Load Sources' }, { id: 'c', text: 'Reports' }, { id: 'd', text: 'Documents' }], correctAnswer: 'b', explanation: 'Load Sources — every equipment toggle directly changes the final structural calculations.' },
          { id: 'q5', question: 'What happens when "Proposed" equipment is toggled on in Load Sources?', options: [{ id: 'a', text: 'UI changes only' }, { id: 'b', text: 'Structural calculations update' }, { id: 'c', text: 'Site metadata resets' }, { id: 'd', text: 'Wind parameters lock' }], correctAnswer: 'b', explanation: 'Every equipment toggle in Load Sources directly updates structural calculations.' },
          { id: 'q6', question: 'A site passing Existing but failing Existing + Proposed means:', options: [{ id: 'a', text: 'The system is incorrect' }, { id: 'b', text: 'Proposed equipment adds structural load exceeding limits' }, { id: 'c', text: 'Wind data is ignored' }, { id: 'd', text: 'EME must be run instead' }], correctAnswer: 'b', explanation: 'Normal and expected — proposed equipment adds load that exceeds the safe structural limit.' },
          { id: 'q7', question: 'Are IEA results final engineering approval?', options: [{ id: 'a', text: 'Yes' }, { id: 'b', text: 'Only for small towers' }, { id: 'c', text: 'No, they are indicative' }, { id: 'd', text: 'Only if exported' }], correctAnswer: 'c', explanation: 'IEA is indicative — not a replacement for certified engineering.' },
          { id: 'q8', question: 'Which user role cannot run EME?', options: [{ id: 'a', text: 'Engineer' }, { id: 'b', text: 'Support Admin' }, { id: 'c', text: 'Colo User' }, { id: 'd', text: 'Pilot' }], correctAnswer: 'd', explanation: 'Pilot users cannot run EME.' },
          { id: 'q9', question: 'Which mistake most commonly invalidates IEA results?', options: [{ id: 'a', text: 'Too many reports' }, { id: 'b', text: 'Running without equipment present' }, { id: 'c', text: 'Forgetting documents' }, { id: 'd', text: 'Changing UI theme' }], correctAnswer: 'b', explanation: 'Running without equipment present leads to misleading outputs.' },
          { id: 'q10', question: 'What is the correct mindset when using IEA?', options: [{ id: 'a', text: 'Treat as final decision' }, { id: 'b', text: 'Ignore failures' }, { id: 'c', text: 'Use as decision guidance' }, { id: 'd', text: 'Only use for visuals' }], correctAnswer: 'c', explanation: 'IEA is decision guidance for early feasibility, not final engineering approval.' },
        ],
      },
    ],
  },

  // ─── MODULE E2: ENGINEER REVIEW ───────────────────────────
  e2: {
    id: 'e2',
    path: 'engineer',
    title: 'Engineering Review of ColoApps',
    subtitle: 'Reviewing, editing, and approving submitted applications',
    duration: '20 min',
    icon: '✍️',
    sections: [
      {
        id: 'e2-accountability',
        type: 'read',
        title: 'What Engineering Approval Actually Means',
        intro: 'When a Colo User submits, everything changes. Engineering accountability begins the moment you open that application.',
        bullets: [
          { icon: '🔒', text: 'When submitted, **ownership transfers to Engineering** — the Colo User\'s application is frozen', detail: 'The Colo User can view their submitted application but can no longer edit. They proposed intent. You validate feasibility and defensibility.' },
          { icon: '⚖️', text: 'Approval means: **"this design is safe, processable, and defensible"** — not just "looks OK"', detail: 'Engineering approval carries real operational consequences. The digital twin is updated based on your approval. Downstream tools — IEA, EME, reporting — rely on this data being correct.' },
          { icon: '📋', text: 'You are **accountable** for structural plausibility, modelling accuracy, and processing compatibility', detail: 'This includes verifying that equipment is physically possible on the real structure, that positions make sense, that there are no clashes, and that the IEA reflects the actual submission.' },
          { icon: '🚫', text: 'Nothing beyond submission is "suggestive" — it is **authoritative and carries real consequences**', detail: 'Once approved, the design becomes the source of truth. Any further changes require a new Application. You cannot quietly "tweak" an approval after the fact.' },
        ],
      },
      { id: 'e2-watch', type: 'watch', title: 'Engineer Review Walkthrough', videoId: '9xquCESbNW0', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The review sequence — default scene first, then switching to the ColoApp view' },
      {
        id: 'e2-sequence',
        type: 'steps',
        title: 'The Correct Review Sequence',
        steps: [
          { number: 1, title: 'Open the Default Scene First', description: 'Before touching the ColoApp, open the site\'s default scene. Spend time understanding the as-built baseline — what\'s currently on the tower, how it\'s arranged, what the existing load looks like. This establishes your mental reference point for reviewing changes.', warning: null },
          { number: 2, title: 'Switch to the Submitted ColoApp', description: 'Navigate to the specific ColoApp submitted for review. Compare what you see against the baseline. What equipment has been removed? What\'s been added? Where are the new items positioned? Is the layer name consistent with the stated scope?', warning: null },
          { number: 3, title: 'Perform a Visual Engineering Audit', description: 'Rotate the model. Look for: equipment intersecting a mount or structure (physically impossible), floating equipment (not attached), incorrect azimuth (antenna pointing the wrong way), unrealistic spacing between panels. Ask yourself: "Would this configuration make sense on a real structure?"', warning: null },
          { number: 4, title: 'Run IEA from Engineering Perspective', description: 'Run IEA yourself — don\'t just accept the results the Colo User submitted. Verify the Load Sources reflect the actual submission (correct equipment toggled). Check Wind Parameters. Review Existing vs Existing + Proposed. Form your own engineering assessment.', warning: null },
          { number: 5, title: 'Review Transaction Logs Before Approving', description: 'In ColoApp Manager, verify the transaction logs. Count the Add and Remove entries. Confirm they match the design intent. These logs become part of the permanent audit trail and affect real-world changes.', warning: 'Transaction logs become part of audit trails. They affect reporting, billing, and real-world change records. Approve only when logs accurately reflect the intended changes.' },
        ],
      },
      {
        id: 'e2-audit',
        type: 'checklist',
        title: 'Visual Engineering Audit Checklist',
        intro: 'A visual audit is not cosmetic — it is engineering due diligence. Work through these systematically before approving.',
        items: [
          { label: 'Equipment is physically attached to the tower structure', detail: 'No floating equipment. Every antenna and panel should have a logical mount point on the tower or an arm/bracket structure.' },
          { label: 'Correct bearing/azimuth direction', detail: 'Antennas pointing in the specified bearing. Check against the design documentation and site plan. A misaligned antenna affects both RF performance and neighbour interference.' },
          { label: 'No physical clashes between equipment', detail: 'Equipment should not intersect mounts, existing panels, or structural elements. Clashes indicate a positioning error that must be corrected before approval.' },
          { label: 'Appropriate equipment types for the tower position', detail: 'Panel antennas on panel mounts. RRUs on RRU brackets. Equipment placed at realistic heights and positions consistent with the tower design.' },
          { label: 'IEA results are within acceptable limits', detail: 'Or, if borderline/failed, you have documented your engineering assessment and have engineering justification for approval.' },
        ],
      },
      { id: 'e2-think', type: 'think', title: 'Think About It', question: 'An engineer opens a submitted ColoApp and sees a panel that appears to be floating 0.5m from the mount. What are the implications and what should happen?' },
      {
        id: 'e2-override',
        type: 'read',
        title: 'Engineering Edits — The Override Workflow',
        intro: 'Engineers are allowed to edit submitted applications. This is intentional by design.',
        bullets: [
          { icon: '✏️', text: '**Engineers can directly edit** submitted ColoApp designs — this is by design, not a workaround', detail: 'Colo Users propose intent. Engineers enforce feasibility. Sometimes the proposed design needs correction before it can be safely approved. Engineering edits are authoritative, not collaborative.' },
          { icon: '🔧', text: '**Common edits**: missing equipment, corrected placement, incorrect orientation, processing incompatibilities', detail: 'These edits are tracked automatically. They appear in the transaction log alongside the Colo User\'s original changes. No new Application is created — the audit trail stays clean.' },
          { icon: '⚡', text: '**Critical: Saving any edit automatically triggers the Confirm Design workflow**', detail: 'This is the most important system behaviour to understand. You cannot quietly tweak a submitted design. Every save redirects you to Confirm Design in ColoApp Manager.' },
          { icon: '🛡️', text: 'This forces **conscious, intentional approval** — you must review the full transaction log every time', detail: 'The system prevents accidental approvals and unreviewed overrides. Engineering accountability is enforced at the system level.' },
        ],
        callout: { variant: 'warning', title: 'Saving edits on a submitted ColoApp triggers the approval workflow.', body: 'This is intentional. Every engineering modification must be reviewed. There is no way to make a quiet change.' },
      },
      { id: 'e2-s6', type: 'check', question: 'Why does NexDT lock an application after the Colo User submits it?', options: [{ id: 'a', text: 'To improve rendering performance' }, { id: 'b', text: 'To enforce a clear handover of responsibility to Engineering' }, { id: 'c', text: 'To prevent accidental deletions by other users' }, { id: 'd', text: 'To speed up the approval process timeline' }], correctAnswer: 'b', explanation: 'Locking enforces a clear handover. The Colo User\'s proposal is frozen; Engineering now owns validation and approval.', maxAttempts: 2 },
      { id: 'e2-s7', type: 'check', question: 'An Engineer adds a missing antenna to a submitted ColoApp and saves. What happens next?', options: [{ id: 'a', text: 'The change is silently applied and nothing else happens' }, { id: 'b', text: 'The system redirects to Confirm Design — the engineer must review and explicitly approve' }, { id: 'c', text: 'The Colo User is notified to re-submit the application' }, { id: 'd', text: 'IEA runs automatically to validate the change' }], correctAnswer: 'b', explanation: 'Any edit on a submitted ColoApp triggers Confirm Design. The engineer must consciously review the transaction log and approve.', maxAttempts: 2 },
    ],
  },

  // ─── MODULE E3: EME DEEP DIVE ──────────────────────────────
  e3: {
    id: 'e3',
    path: 'engineer',
    title: 'EME Technical Deep-Dive',
    subtitle: 'RF safety assessment, metadata dependencies & BIM configuration',
    duration: '25 min',
    icon: '📡',
    sections: [
      {
        id: 'e3-obj',
        type: 'objective',
        intro: 'By the end of this module, you will be able to:',
        outcomes: [
          'Understand **how EME assessments work** technically',
          'Know the **metadata dependencies** that make or break EME',
          'Diagnose **silent EME failures** caused by catalogue mismatches',
          'Correctly interpret **EME results** and determine follow-up actions',
          'Understand the **BIM-to-EME pipeline** end-to-end',
        ],
      },
      {
        id: 'e3-infographic-ieaveme',
        type: 'infographic',
        imageUrl: IMG_IEA_EME,
        containerHeight: 340,
        label: 'NexDT — IEA vs EME Assessment',
        caption: 'Engineering Assessment: IEA (Structural Feasibility) vs EME (RF Safety & Compliance)',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'e3-compare',
        type: 'read',
        title: 'IEA vs EME — Two Engines, Different Physics',
        intro: 'While IEA and EME share the same data sources, they solve fundamentally different engineering problems.',
        isSplitCard: true,
        columns: [
          {
            header: 'IEA (Structural)',
            question: '"Can the structure handle this load?"',
            items: [
              'Primary physics: wind loading & structural geometry',
              'Key input: Effective Sail Area (ESA) per equipment item',
              'Key input: Wind parameters (must be verified, not defaulted)',
              'Key input: As-built tower skeleton (heights, segments)',
              'Output: Structural usage % — Existing vs Existing + Proposed',
              'Action on failure: Flag for engineering review, reduce load sources',
            ],
            color: '#3B82F6',
          },
          {
            header: 'EME (RF Safety)',
            question: '"Is this RF-safe and compliant?"',
            items: [
              'Primary physics: antenna patterns, frequencies & power levels',
              'Key input: Manufacturer & Model — exact catalogue match',
              'Key input: Type & Subtype — controls placement and categorisation',
              'Key input: Port configurations — auto-populated from catalogue',
              'Output: RF exposure compliance against regulatory limits',
              'Action on failure: Resolve Manufacturer/Model mismatch, verify port config',
            ],
            color: '#10B981',
          },
        ],
      },
      {
        id: 'e3-metadata-link',
        type: 'concepts',
        title: 'The Manufacturer/Model Link — How EME Gets Its Data',
        intro: 'EME assessments are driven by backend catalogue lookups rather than raw geometry. Metadata accuracy is therefore absolute.',
        concepts: [
          { icon: '🔗', term: 'The Catalogue Lookup', definition: 'When a user clicks "Get Config," NexDT triggers an API call to a master library using Manufacturer and Model fields as the lookup key. These are case-sensitive and spelling-sensitive. A discrepancy here leads to a "silent but dangerous" failure — no configuration is returned, leaving equipment unevaluated.', color: '#3B82F6' },
          { icon: '📋', term: 'Auto-Population of Port Config', definition: 'When the Manufacturer/Model match is exact, port frequencies auto-populate and power ranges are assigned. EME becomes usable immediately. When the match fails, nothing populates — EME cannot proceed, and the failure can be easily missed if the operator doesn\'t notice the empty config.', color: '#10B981' },
          { icon: '🏷️', term: 'Type & Subtype Logic', definition: 'Type & Subtype metadata control where equipment is allowed to be placed — Tower/Panel vs Ground/Shelter. This serves as a primary engineering constraint. Incorrect Type/Subtype can allow equipment in physically impossible locations or block valid placements.', color: '#F59E0B' },
          { icon: '⚠️', term: 'The Silent Failure Risk', definition: '"Close but wrong" metadata is the most dangerous failure state. The system may link to the wrong equipment entry, producing a compliant-looking report that is physically impossible. A 5G Massive MIMO antenna mapped to a legacy 4G panel spec will produce EME output — but the output is meaningless.', color: '#EF4444' },
        ],
      },
      {
        id: 'e3-watch',
        type: 'watch',
        title: 'EME Assessment Walkthrough',
        videoId: 'ZwtJNhz1aNc',
        startTime: 435,
        endTime: 540,
        timestampLabel: '07:15 – 09:00',
        focusText: 'Focus on: The "Get Config" step, port auto-population, and what happens when the config returns empty',
      },
      {
        id: 'e3-infographic-metadata',
        type: 'infographic',
        imageUrl: IMG_BIM,
        containerHeight: 380,
        label: 'NexDT — BIM Admin Essentials',
        caption: 'BIM-to-EME Pipeline: Metadata First → Mesh Reference → Catalogue Lookup → Port Config',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'e3-prereqs',
        type: 'checklist',
        title: 'Prerequisites Before Running EME',
        intro: 'Running EME without meeting these conditions produces outputs that are either empty or dangerously misleading.',
        items: [
          { label: 'Site is marked As-Built', detail: 'EME requires the site model to reflect actual real-world conditions. An unverified model produces RF assessments based on incorrect geometry — the compliance report may pass or fail based on equipment that doesn\'t actually exist at the reported positions.' },
          { label: 'Equipment is present and instantiated in the scene', detail: 'Equipment must be visible in the 3D scene (not ghost equipment). If the BIM Admin missed the Mesh Reference step, the equipment exists in data but not in the scene — EME data may be calculated but cannot be visually validated by the reviewing engineer.' },
          { label: 'Manufacturer & Model match the catalogue exactly', detail: 'This is the single most critical prerequisite. Even a trailing space, a lowercase first letter, or a model number variant causes Get Config to return nothing. Verify the entry in BIM Admin before running EME.' },
          { label: 'Port configuration has been populated via "Get Config"', detail: 'Manually check that port frequencies and power ranges have auto-populated after running Get Config. If the fields are empty, stop — the Manufacturer/Model lookup failed silently. Do not proceed with EME on unconfigured equipment.' },
        ],
        callout: { variant: 'danger', title: 'Never proceed with EME on equipment showing empty port configuration.', body: 'Empty port config means Get Config failed. Running EME anyway produces a calculation with no valid input data — the output will appear to run but is meaningless. It may even produce a false compliance result.' },
      },
      {
        id: 'e3-troubleshoot',
        type: 'mistakes',
        title: 'Diagnosing EME Failures — Common Silent Issues',
        items: [
          { mistake: 'Manufacturer/Model mismatch (most common)', consequence: '"Get Config" returns no data. Port frequencies and power ranges remain empty. EME cannot proceed. If forced, results are based on zero-input data and are physically meaningless. Fix: verify exact spelling and case in BIM Admin entry.' },
          { mistake: '"Close but wrong" metadata match', consequence: 'System links to a different equipment entry — perhaps an older model or a similar name. EME produces output, but the output describes the wrong equipment. The result may show compliance even if the actual equipment would fail. Fix: cross-reference the exact catalogue identifier.' },
          { mistake: 'Running EME before site is As-Built', consequence: 'Assessment is based on a model that may not reflect physical reality. Equipment positions, heights, and orientations in the model may differ from the actual site. The compliance report is valid for the model, not the real tower.' },
          { mistake: 'Ghost equipment in the scene', consequence: 'Equipment exists in data (and EME may attempt to calculate it) but cannot be visually validated by the Engineer. The Engineer cannot verify placement, orientation, or physical clearances. Application must be rejected until BIM Admin links the Mesh Reference.' },
        ],
      },
      {
        id: 'e3-check1',
        type: 'check',
        question: 'An engineer runs EME and the port configuration fields are empty after clicking "Get Config". What is the most likely cause?',
        options: [
          { id: 'a', text: 'The site is not yet As-Built' },
          { id: 'b', text: 'Manufacturer or Model name does not exactly match the catalogue' },
          { id: 'c', text: 'The equipment has no ESA value' },
          { id: 'd', text: 'EME requires a completed IEA first' },
        ],
        correctAnswer: 'b',
        explanation: 'Empty port config after Get Config indicates a Manufacturer/Model mismatch. The API lookup failed to find the equipment — even a single character difference prevents the match.',
        maxAttempts: 2,
      },
      {
        id: 'e3-scenarios',
        type: 'scenarios',
        title: 'Interpreting EME Results',
        intro: 'EME results must be interpreted in context. A passing result on bad data is more dangerous than a failing result on good data.',
        scenarios: [
          { status: 'pass', icon: '✅', condition: 'EME passes with full port configuration', meaning: 'RF exposure is within regulatory compliance limits. The assessment is valid because it is based on correct equipment metadata and a verified as-built model.', action: 'Document the result. Include in approval workflow. Proceed with engineering sign-off.', color: '#10B981' },
          { status: 'warn', icon: '⚠️', condition: 'EME passes but port config was incomplete', meaning: 'The result may be invalid. If port frequencies were manually overridden or partially populated, the calculation does not reflect the actual equipment RF profile. A "pass" here is a false positive.', action: 'Do NOT approve based on this result. Resolve the Manufacturer/Model mismatch, re-run Get Config, and re-run EME from scratch.', color: '#F59E0B' },
          { status: 'fail', icon: '❌', condition: 'EME fails — RF exposure exceeds limits', meaning: 'The proposed antenna configuration generates RF exposure levels that exceed regulatory compliance thresholds. The assessment is based on validated equipment data.', action: 'Flag for further engineering review. Do not auto-reject — a qualified RF engineer may modify power settings or equipment positioning to bring the design into compliance.', color: '#EF4444' },
        ],
      },
      {
        id: 'e3-check2',
        type: 'check',
        question: 'EME shows a "pass" result but the port configuration was not populated via Get Config. What does this mean?',
        options: [
          { id: 'a', text: 'The equipment is definitely RF-compliant' },
          { id: 'b', text: 'The result is invalid — it was calculated without correct equipment data' },
          { id: 'c', text: 'A manual port entry is more accurate than Get Config' },
          { id: 'd', text: 'The EME result can still be used for approval' },
        ],
        correctAnswer: 'b',
        explanation: 'EME results without populated port configuration are invalid. The calculation ran on incorrect or zero-input data. A "pass" on empty config is a false positive — it must not be used for approval decisions.',
        maxAttempts: 2,
      },
      {
        id: 'e3-quiz',
        type: 'quiz',
        title: 'EME Technical Quiz',
        passingScore: 80,
        questions: [
          { id: 'q1', question: 'What is the primary question EME answers?', options: [{ id: 'a', text: 'Can the structure handle this load?' }, { id: 'b', text: 'Is this RF-safe and compliant?' }, { id: 'c', text: 'Is the site As-Built?' }, { id: 'd', text: 'Is the equipment correctly positioned?' }], correctAnswer: 'b', explanation: 'EME evaluates RF exposure and compliance — "Is this RF-safe and compliant?"' },
          { id: 'q2', question: 'Which fields are used as the EME catalogue lookup key?', options: [{ id: 'a', text: 'ESA and Type' }, { id: 'b', text: 'Name and Tags' }, { id: 'c', text: 'Manufacturer and Model (exact, case-sensitive)' }, { id: 'd', text: 'Shape and Dimensions' }], correctAnswer: 'c', explanation: 'Manufacturer and Model are the exact, case-sensitive lookup keys for EME catalogue configuration.' },
          { id: 'q3', question: 'Port configuration auto-populates when:', options: [{ id: 'a', text: 'IEA has been calculated first' }, { id: 'b', text: 'Manufacturer/Model exactly matches the catalogue' }, { id: 'c', text: 'The site is marked As-Built' }, { id: 'd', text: 'Tags include the equipment frequency band' }], correctAnswer: 'b', explanation: 'Port frequencies and power ranges auto-populate when the Manufacturer/Model match is exact.' },
          { id: 'q4', question: 'What happens when "Get Config" returns nothing?', options: [{ id: 'a', text: 'EME runs anyway with default values' }, { id: 'b', text: 'Equipment is unevaluable — port config is empty and EME cannot proceed validly' }, { id: 'c', text: 'The engineer must manually enter port data' }, { id: 'd', text: 'The system rejects the application automatically' }], correctAnswer: 'b', explanation: 'Empty Get Config means the Manufacturer/Model lookup failed. EME cannot be validly run without port configuration data.' },
          { id: 'q5', question: 'Which user roles can run EME?', options: [{ id: 'a', text: 'Engineer only' }, { id: 'b', text: 'Engineer, Support Admin, and Colo User' }, { id: 'c', text: 'All users including Pilot' }, { id: 'd', text: 'BIM Admin only' }], correctAnswer: 'b', explanation: 'Engineer, Support Admin, and Colo User can run EME. Pilot users cannot.' },
        ],
      },
    ],
  },

  // ─── MODULE B1: BIM ADMIN ─────────────────────────────────
  b1: {
    id: 'b1',
    path: 'bim_admin',
    title: 'BIM Admin Tooling',
    subtitle: 'Managing the equipment library and catalogue',
    duration: '60 min',
    icon: '🗂️',
    sections: [
      {
        id: 'b1-intro-video',
        type: 'watch',
        title: 'Intro — BIM: Architect of Digital Twins',
        videoId: VID_BIM_ADMIN,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Watch this first — it explains the BIM Admin role and why it sits upstream of everything else.',
      },
      { id: 'b1-s0', type: 'callout', variant: 'danger', title: 'Upstream Critical: BIM Admin errors propagate everywhere.', body: 'BIM Admin sits upstream of modelling, EME, approvals, and reporting. A single error here cascades into every downstream system. Treat every change as production-critical.' },
      {
        id: 'b1-chain',
        type: 'concepts',
        title: 'Why BIM Admin Is Upstream Critical',
        intro: 'Every NexDT workflow that involves equipment depends on BIM Admin data being correct. This is the dependency chain:',
        concepts: [
          { icon: '🗂️', term: 'BIM Admin', definition: 'Defines equipment metadata, geometry, and catalogue entries. Everything downstream inherits from here. One wrong entry propagates into every site that uses that equipment.', color: '#EF4444' },
          { icon: '🏗️', term: '3D Visualisation', definition: 'The 3D model in Sites Portal uses BIM geometry to render equipment. If the GLB is missing or mesh reference unlinked, the equipment appears as a ghost or invisible object.', color: '#F59E0B' },
          { icon: '⚙️', term: 'Engineering Review', definition: 'Engineers rely on correct 3D placement and geometry to validate designs. Ghost equipment cannot be visually audited — approvals based on invisible models carry unknown risk.', color: '#3B82F6' },
          { icon: '📡', term: 'EME Analysis', definition: 'EME pulls configuration from BIM metadata using Manufacturer/Model as the lookup key. A mismatch between BIM entry and catalogue returns no config — EME silently fails to populate.', color: '#10B981' },
        ],
      },
      {
        id: 'b1-infographic-bim',
        type: 'infographic',
        imageUrl: IMG_BIM,
        containerHeight: 360,
        label: 'NexDT — BIM Admin Essentials',
        caption: 'BIM Admin Essentials: Metadata First → Asset Upload → CRITICAL: Link Mesh Reference',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      { id: 'b1-watch', type: 'watch', title: 'BIM Admin Overview', videoId: 'zShR12je8bQ', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The metadata form and the asset upload + mesh reference linking steps' },
      {
        id: 'b1-metadata',
        type: 'concepts',
        title: 'BIM Equipment Fields — What Each One Does',
        intro: 'Every field in the BIM entry form has a purpose. None are cosmetic.',
        concepts: [
          { icon: '🏭', term: 'Manufacturer & Model', definition: 'CRITICAL. Must exactly match the platform catalogue — case and spelling sensitive. Used as the lookup key for EME configuration. A mismatch returns no config and disables EME for that equipment.', example: 'Wrong: "ericsson" / Correct: "Ericsson"', color: '#EF4444' },
          { icon: '💨', term: 'ESA (Effective Sail Area)', definition: 'Required for tower-mounted equipment. Represents the wind loading surface area. Used in IEA structural calculations. Ground equipment (shelters, cabinets) must have ESA = 0.', example: 'Tower panel: 0.85 m² / Ground shelter: 0', color: '#F59E0B' },
          { icon: '📂', term: 'Type & Subtype', definition: 'Controls placement rules, engineering categorisation, and which sites/positions the equipment can be assigned to. Incorrect type/subtype can make equipment appear in wrong contexts or block placement.', example: 'Type: Tower, Subtype: Panel', color: '#3B82F6' },
          { icon: '🏷️', term: 'Tags', definition: 'Power search and filtering in the BIM Catalog. Engineers and Colo Users find equipment by searching tags. Missing or wrong tags make equipment undiscoverable in the catalogue — effectively invisible to users.', example: '"5G", "massive-mimo", "ericsson"', color: '#8B5CF6' },
        ],
      },
      { id: 'b1-critical-callout', type: 'callout', variant: 'danger', title: '🚨 MOST COMMON ERROR: Uploading GLB but forgetting to link the Mesh Reference.', body: 'After uploading the GLB file, you MUST select it in the Mesh Reference dropdown. If skipped, the equipment appears as an invisible "ghost" on the Sites Portal. This is the #1 BIM Admin failure.' },
      {
        id: 'b1-upload',
        type: 'steps',
        title: 'Asset Upload — The Correct Sequence',
        steps: [
          { number: 1, title: 'Create the Equipment Entry (Metadata First)', description: 'Before uploading any files, complete the metadata form: Name, Manufacturer, Model, ESA, Type/Subtype, Shape, Dimensions, Tags. Click Create. The entry exists as metadata only — no geometry yet.', warning: null },
          { number: 2, title: 'Upload the GLB File', description: 'Drag and drop the GLTF 2.0 GLB file into the asset upload area. This uploads the 3D geometry to the platform. The file appears in the asset list. The geometry now exists on the server, but it is NOT yet linked to the equipment entry.', warning: null },
          { number: 3, title: 'LINK THE MESH REFERENCE', description: 'This is the critical step most people miss. In the Mesh Reference dropdown, select the GLB file you just uploaded. This links the geometry to the catalogue entry and instantiates the 3D model. Without this step, the equipment appears as a ghost in Sites Portal.', warning: 'If you skip this step, equipment will appear invisible or as an empty placeholder in every site where it is placed. There is no automatic fallback. You must explicitly link the reference.' },
          { number: 4, title: 'Upload Thumbnail', description: 'Upload a preview image for the equipment. This appears in the BIM Catalog search results in Sites Portal, helping users identify the correct equipment visually before placing it.', warning: null },
          { number: 5, title: 'Verify in Sites Portal', description: 'The BIM Admin tool has no 3D previewer. Verification must happen in a real scene in Sites Portal. Add the equipment to a test site, check orientation (+Z up, +Y emitter face), verify scale is correct, confirm no geometry issues.', warning: null },
        ],
      },
      {
        id: 'b1-infographic-cad',
        type: 'infographic',
        imageUrl: IMG_MODELLING,
        containerHeight: 360,
        label: 'NexDT — Modelling Specifications',
        caption: 'Modelling Specs: File Format & Units → Axis Orientation (+Z up, +Y emitter) → Centred Origin',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'b1-cad',
        type: 'read',
        title: 'CAD Modelling Specification',
        isSpecTable: true,
        specRows: [
          { property: 'Format', value: 'GLTF 2.0 (.glb) only — other formats are not supported' },
          { property: 'Origin', value: 'Centred at axis-aligned bounding box centre' },
          { property: 'Up axis', value: '+Z — the top of the antenna points in the +Z direction' },
          { property: 'Emitter face', value: '+Y — the front/transmitting face points in the +Y direction' },
          { property: 'Scale', value: 'Millimetres (mm) — enables accurate mounts, clearances, and structural calculations' },
        ],
      },
      {
        id: 'b1-eme-config',
        type: 'read',
        title: 'EME Configuration Integrity — Metadata Meets Physics',
        intro: 'EME configuration is the point where BIM metadata intersects with physics calculations. When configured correctly, port frequencies auto-populate and power ranges are assigned.',
        bullets: [
          { icon: '🔗', text: '**Manufacturer & Model → Catalogue API → Port Config** — this is the chain', detail: 'When a user clicks "Get Config," the platform queries a master catalogue using Manufacturer and Model as the lookup key. If the match is exact, port frequencies and power ranges are returned and auto-populated. If not, nothing is returned.' },
          { icon: '🚫', text: 'Mismatch causes a **hard stop** — equipment cannot be RF-evaluated', detail: 'If Get Config returns nothing, EME cannot proceed. This creates a compliance bottleneck that halts site approval until the BIM metadata is corrected. The Colo User or Engineer will see an empty config and cannot proceed.' },
          { icon: '🔍', text: '**"Close but wrong" is the most dangerous state** — wrong config may return data', detail: 'If your Manufacturer/Model entry is similar to an existing catalogue entry (e.g., different model variant), the system may link to the wrong equipment. EME runs and produces a result — but the result is for the wrong antenna. This is a false compliance report.' },
          { icon: '✅', text: 'Verify correct matching by confirming **port frequencies match the physical equipment datasheet**', detail: 'After clicking Get Config, cross-reference the populated port frequencies against the manufacturer\'s official datasheet. If they don\'t match, the wrong catalogue entry was returned. Correct the Manufacturer/Model entry and re-run Get Config.' },
        ],
        callout: { variant: 'warning', title: 'Always verify Get Config returns data before proceeding with EME.', body: 'Empty port configuration after Get Config = Manufacturer/Model mismatch. Do not proceed. Fix the metadata and try again.' },
      },
      {
        id: 'b1-verification',
        type: 'steps',
        title: 'The Verification Workflow — Testing in Sites Portal',
        steps: [
          { number: 1, title: 'Deploy to a Test Scene', description: 'Add the newly created BIM item into a test scene within the Sites Portal. Choose a site with similar tower geometry to the equipment\'s intended deployment context. This is your visual forensic check environment.', warning: null },
          { number: 2, title: 'Check Orientation — Emitter Face', description: 'Verify the EME "emitter cone" (derived from the +Y face) points toward the horizon, not upward or downward. Assets must not be inverted. The front face of the antenna should face outward from the tower, as it would in real-world installation.', warning: 'Inverted equipment (+Y pointing down or +Z rotated) is not just a visual bug — it produces invalid engineering interpretations. Signal paths pointing into the ground trigger automatic rejection.' },
          { number: 3, title: 'Check Mounting Realism', description: 'Inspect for Z-fighting (geometry clipping into steelwork), floating offsets that defy physics, or equipment placed at an angle that would be physically impossible on the actual structure. Ask: "Would a rigger install this at this angle?"', warning: null },
          { number: 4, title: 'Check Scale Accuracy', description: 'Confirm the asset dimensions reflect physical reality relative to known tower members. A 2m antenna should look 2m in the scene. If the equipment is the size of the tower or a pinhead, the millimetre-scale conversion was applied incorrectly.', warning: null },
          { number: 5, title: 'Finalise the Catalogue Entry', description: 'Only after the visual verification passes, finalise the catalogue entry and make it available for production use. Document the verification date and scene used for testing. This creates an audit trail for the equipment entry.', warning: null },
        ],
      },
      {
        id: 'b1-retention',
        type: 'read',
        title: 'BIM Data Retention Rules',
        intro: 'The BIM catalogue serves as the engineering truth layer. Data persistence is prioritised over simple deletion.',
        bullets: [
          { icon: '🗃️', text: 'Deleting a BIM item **removes it from future use** — it is removed from search and catalogue browsing', detail: 'Users can no longer find or place the deleted equipment. It no longer appears in BIM Catalog searches within Sites Portal.' },
          { icon: '📜', text: 'Deleted items **persist in historical data** — existing ColoApps and approvals are NOT affected', detail: 'The item remains in the Object Store to support historical digital twin states. Past Colocation Applications, engineering decisions, and reports that reference this equipment remain valid for audit purposes.' },
          { icon: '✅', text: 'This **protects audit integrity** — past approvals cannot be retroactively invalidated', detail: 'An engineer who approved a design 18 months ago cannot have that approval invalidated by a later BIM catalogue cleanup. The historical truth layer is preserved.' },
          { icon: '⚠️', text: '**Deletion should be rare and intentional** — archive first, delete only when absolutely necessary', detail: 'Before deleting any catalogue entry, verify no active sites are using it, no open ColoApps reference it, and no pending engineering reviews depend on it. If uncertain, use tags to mark as deprecated rather than deleting.' },
        ],
      },
      { id: 'b1-s7', type: 'check', question: 'A BIM Admin uploads a GLB file but skips the Mesh Reference step. What happens?', options: [{ id: 'a', text: 'The upload fails immediately with an error' }, { id: 'b', text: 'Equipment appears as a ghost or invisible object in Sites Portal' }, { id: 'c', text: 'EME fails only, but the model appears correctly' }, { id: 'd', text: 'The system automatically links the mesh reference' }], correctAnswer: 'b', explanation: 'Skipping Mesh Reference is the most common BIM Admin error. Equipment geometry exists but is not instantiated — it appears as an empty ghost object.', maxAttempts: 2 },
      { id: 'b1-s8', type: 'check', question: 'Why must Manufacturer and Model be entered accurately in BIM Admin?', options: [{ id: 'a', text: 'For display purposes only in the UI' }, { id: 'b', text: 'To enable EME auto-configuration via catalogue lookup' }, { id: 'c', text: 'To generate thumbnail images automatically' }, { id: 'd', text: 'To unlock the edit mode for the equipment' }], correctAnswer: 'b', explanation: 'Manufacturer and Model must exactly match catalogue entries. EME uses this to auto-populate port frequencies and power ranges. A mismatch causes silent failure.', maxAttempts: 2 },
    ],
  },

  // ─── MODULE B2: SUPER ADMIN CONSOLE ───────────────────────
  b2: {
    id: 'b2',
    path: 'bim_admin',
    title: 'Super Admin Console',
    subtitle: 'User management, organisations, and system administration',
    duration: '45 min',
    icon: '🛡️',
    sections: [
      {
        id: 'b2-intro-video',
        type: 'watch',
        title: 'Intro — Super Admin: Digital Governance',
        videoId: VID_SUPER_ADMIN,
        startTime: 0,
        endTime: null,
        timestampLabel: 'Full video',
        focusText: 'Watch this before proceeding — it covers the gravity of Super Admin responsibilities.',
      },
      { id: 'b2-s0', type: 'callout', variant: 'danger', isRiskBanner: true, title: '🔴 RISK LEVEL: HIGHEST', body: 'Actions in this module have system-wide impact and NO automated rollback. Incorrect use can orphan equipment, break ColoApps, and require manual engineering recovery.' },
      { id: 'b2-watch', type: 'watch', title: 'Admin Console Overview', videoId: 'o5dktAxAuiE', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The Organisation management flow and user creation sequence' },
      {
        id: 'b2-infographic-roles',
        type: 'infographic',
        imageUrl: IMG_ADMIN,
        containerHeight: 380,
        label: 'NexDT — Super Admin Governance',
        caption: 'Super Admin Governance: Core platform roles (User, Engineer, Administrator) + MFA Onboarding Flow',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'b2-controls',
        type: 'concepts',
        title: 'What the Admin Console Actually Controls',
        intro: 'The Admin Console is the source of truth for everything downstream. A single incorrect action here can corrupt data across the entire platform.',
        concepts: [
          { icon: '🏢', term: 'Organisations (Head Customers)', definition: 'Define which equipment belongs to which customer. Control what Colo Users can see and modify. Bind ColoApps to the correct business entity for billing and approval workflows.', color: '#3B82F6' },
          { icon: '👤', term: 'User Accounts & Roles', definition: 'Determine what every user can see, what actions they can take, and which sites/organisations they can access. A misconfigured role can give a Colo User access to competitor equipment or block an Engineer from reviewing.', color: '#10B981' },
          { icon: '🔗', term: 'ColoApp Attribution', definition: 'Every ColoApp is attributed to a Head Customer Organisation. If the Organisation is missing or wrong, the ColoApp is orphaned — Engineering cannot process it correctly and billing cannot be attributed.', color: '#F59E0B' },
          { icon: '💾', term: 'Data Persistence', definition: 'Organisations and users are permanent records. Deleting them is a destructive, irreversible action with cascading consequences. There is no recycle bin, no automated backup, no rollback.', color: '#EF4444' },
        ],
      },
      { id: 'b2-org-callout', type: 'callout', variant: 'danger', title: '⛔ NEVER delete an active Organisation.', body: 'Deleting an active Organisation removes ALL associated equipment data. ColoApps become invalid. There is NO automated rollback. Engineers must manually reconstruct affected data.' },
      {
        id: 'b2-orgs',
        type: 'read',
        title: 'Organisation Management',
        intro: 'Organisations are not cosmetic labels — they are the structural backbone of data ownership in NexDT.',
        bullets: [
          { icon: '🏢', text: 'Organisations define **Head Customer ownership** — used to attribute equipment, ColoApps, and approval workflows', detail: 'Every equipment item, every ColoApp, and every approval chain traces back to an Organisation. Without a correct Organisation assignment, none of these processes work correctly.' },
          { icon: '🔒', text: 'Colo User access is **restricted to their assigned Organisation\'s equipment only**', detail: 'A Colo User assigned to Organisation A cannot see or edit equipment belonging to Organisation B, even if it\'s on the same tower. The filter is enforced at the data level, not just the UI.' },
          { icon: '⚠️', text: 'Safe to delete only if: **no equipment, no ColoApps, no engineering history**', detail: 'Before deleting any Organisation, query the system to confirm zero equipment records, zero open or historical ColoApps, and no active user assignments. If in doubt, archive — do not delete.' },
          { icon: '🏗️', text: 'Treat active Organisations as **production data — permanent, not cosmetic**', detail: 'The temptation to "clean up" old Organisations is a major risk. Old Organisations may be referenced by historical approvals, archived ColoApps, or reporting data. Deleting them can corrupt records that appeared inactive.' },
        ],
      },
      {
        id: 'b2-user-creation',
        type: 'steps',
        title: 'Creating a User — The Right Way',
        steps: [
          { number: 1, title: 'Enter Email and Name', description: 'Enter the user\'s email address (this becomes their login identity) and a descriptive display name. The name appears in logs, approval records, and audit trails — use a real full name, not a username or nickname.', warning: null },
          { number: 2, title: 'Select the Primary NexDT Role', description: 'Choose exactly one primary role. User = standard access. Engineer = can edit and approve ColoApps, run IEA/EME. Administrator = full Admin Console access. Do not grant Administrator unless it is genuinely required for the user\'s function.', warning: 'Administrator role grants full Admin Console access — the highest risk role in the platform. Only assign to users who genuinely need to manage organisations and users.' },
          { number: 3, title: 'Assign Home Organisation', description: 'Set the primary organisation for this user. This defines their default data scope and equipment visibility. For Colo Users, this is critical — it determines which equipment they can see and modify.', warning: null },
          { number: 4, title: 'Add Secondary Roles (if applicable)', description: 'If the user needs Colo User or Site Finder access for specific organisations, add these as secondary roles. A single user can have multiple organisation affiliations — e.g. an Engineer who also needs to review ColoApps from multiple Head Customers.', warning: null },
          { number: 5, title: 'Save — This Triggers the Onboarding Email', description: 'Clicking Save sends the welcome email. The user receives an invitation with a "Confirm My Account" link. They must: confirm the account, set a password, and configure MFA (using Microsoft Authenticator). Access is locked until all steps are complete.', warning: null },
        ],
      },
      {
        id: 'b2-mfa',
        type: 'checklist',
        title: 'User Onboarding Sequence (End-User Steps)',
        intro: 'After you create the user, they must complete onboarding before they can access NexDT. Make sure they know these steps.',
        items: [
          { label: 'Open the welcome email from SiteSee / NexDT', detail: 'Check spam if not received within 5 minutes. Admins can resend from the console if needed.' },
          { label: 'Click "Confirm My Account" and set a strong password', detail: 'Password must meet complexity requirements. Users should not share passwords or reuse them from other systems.' },
          { label: 'Download Microsoft Authenticator and set up MFA', detail: 'Scan the QR code shown during setup. Enter the one-time code to confirm. MFA is mandatory — access is blocked without it.' },
          { label: 'Save the recovery code in a secure location', detail: 'The recovery code is the ONLY way to regain access if the MFA device is lost. If it\'s lost and the recovery code wasn\'t saved, Admin intervention is required to reset the account.' },
        ],
        callout: { variant: 'warning', title: 'Lost MFA + no recovery code requires Admin intervention.', body: 'Users who lose their MFA device without saving the recovery code are locked out. As the Admin, you\'ll need to manually reset their MFA — a time-consuming process. Educate users to save the recovery code before they complete onboarding.' },
      },
      {
        id: 'b2-infographic-upstream',
        type: 'infographic',
        imageUrl: IMG_BIM,
        containerHeight: 360,
        label: 'NexDT — BIM Admin Essentials',
        caption: 'BIM Admin Essentials: Metadata First → Asset Upload → CRITICAL: Link Mesh Reference',
        crop: { imageWidth: '100%', marginTop: 0, marginLeft: 0 },
      },
      {
        id: 'b2-downstream',
        type: 'read',
        title: 'How Admin Errors Propagate Downstream',
        intro: 'Administrative errors are not local — they propagate into technical failures across the entire platform. The Admin Console is the source of truth; if it is wrong, everything downstream is wrong.',
        bullets: [
          { icon: '🔤', text: '**Metadata case sensitivity** — Manufacturer and Model fields are exact and case-sensitive', detail: 'If a user enters "ericsson AIR3227" instead of "Ericsson AIR3227", Get Config returns nothing. The failure is silent — EME appears to run but produces no valid output. This is not caught by validation; it requires manual inspection.' },
          { icon: '💨', text: '**ESA for tower equipment must be accurate** — 0 for ground equipment is mandatory', detail: 'ESA (Effective Sail Area) represents wind loading. Tower-mounted equipment must have a real, manufacturer-specified ESA value. Ground equipment (shelters, cabinets) must be 0. Incorrect ESA values directly change IEA structural results.' },
          { icon: '🌪️', text: '**Wind parameters cannot be defaulted** — incorrect wind data forces deterministic IEA to produce invalid structural results', detail: 'IEA is deterministic: it produces mathematically correct results based on the inputs provided. If the inputs (wind parameters) are wrong, the results are wrong with full mathematical precision. A "pass" on wrong wind data is a false approval.' },
          { icon: '👻', text: '**Ghost Object failure** — the most visible upstream error, caused by missing Mesh Reference in BIM Admin', detail: 'If the BIM Admin fails to link the Mesh Reference dropdown after uploading a GLB, the equipment exists in the database but is invisible in the 3D scene. Engineers cannot validate placement or orientation. The failure is not caught until a Colo User attempts to use the equipment.' },
        ],
      },
      {
        id: 'b2-analytics',
        type: 'read',
        title: 'Security Analytics — Visibility ≠ Surveillance',
        intro: 'The Admin Console provides specific data points intended for system health and security, not behavioural monitoring.',
        bullets: [
          { icon: '🔒', text: '**Permitted use: Security Auditing** — Last IP Address and Last Login Date identify unauthorised access', detail: 'Use these fields to identify credential sharing (same account logged in from multiple IPs simultaneously), unusual login locations, or accounts that haven\'t been accessed in months that should be deprovisioned.' },
          { icon: '🔧', text: '**Permitted use: Support Troubleshooting** — Login Count diagnoses onboarding failures', detail: 'A user with Login Count = 0 never completed onboarding. Login Count = 1 and never accessed specific tools suggests an onboarding support issue. This data helps Admins triage support requests efficiently.' },
          { icon: '🚫', text: '**Forbidden use: Performance monitoring** — this data is strictly prohibited for tracking productivity', detail: 'Login frequency, time of last login, and session data must not be used to monitor, rank, or evaluate user activity levels. This violates professional governance standards and may breach employment agreements.' },
          { icon: '⚠️', text: '**Forbidden use: Behavioral tracking or activity enforcement** — analytics are for the system, not the user', detail: 'Admins who use this data to flag "inactive" users for performance reasons are misusing the tool. The data tells you about system health; it does not tell you whether a user is doing their job well.' },
        ],
        callout: { variant: 'info', title: 'Admins must handle analytics professionally and minimally.', body: 'Use the least amount of data necessary to solve the immediate security or support issue. Do not retain or export analytics data for non-security purposes.' },
      },
      {
        id: 'b2-cautionary',
        type: 'scenarios',
        title: 'Cautionary Case Study: The "Cleanup" Scenario',
        intro: 'A documented failure pattern in the NexDT platform. This scenario illustrates why every Admin Console action must be treated as a final engineering decision.',
        scenarios: [
          { status: 'fail', icon: '🗑️', condition: 'The Decision', meaning: 'An Administrator attempts to "clean up" the console by deleting two Organisations that appeared inactive. No verification was performed — no check for equipment under the organisations, no check for historical ColoApps, no check for active users.', action: 'What should have happened: Query the system for equipment, ColoApps, and user assignments before deletion. Archive rather than delete. Confirm with the Head Customer before any destructive action.', color: '#EF4444' },
          { status: 'fail', icon: '💥', condition: 'The Consequence', meaning: 'The deletion resulted in the immediate and permanent loss of all associated equipment data. ColoApps for both Organisations became invalid, severing their engineering review chains. Active projects lost their Truth Layer baseline.', action: 'The error necessitated high-cost manual reconstruction of the digital twin by the engineering team — weeks of recovery work for a "cleanup" that took 30 seconds.', color: '#EF4444' },
          { status: 'pass', icon: '✅', condition: 'The Lesson', meaning: 'In the Super Admin Console, every click is a final engineering decision. The system provides no safety net, no confirmation prompts for standard operations, and no automated rollback.', action: 'Operate under the mandate: Integrity over expediency. When in doubt, do not delete. Archive, tag as deprecated, or consult with the engineering team first.', color: '#10B981' },
        ],
      },
      { id: 'b2-think', type: 'think', title: 'Think About It', question: 'An admin needs to "clean up" the Organisation list and deletes two entries without checking if equipment exists under them. What are the immediate and downstream consequences?' },
      { id: 'b2-s7', type: 'check', question: 'What happens if an active Organisation is deleted from the Admin Console?', options: [{ id: 'a', text: 'Users lose access but equipment data is preserved' }, { id: 'b', text: 'All associated equipment and ColoApp data is lost with no rollback' }, { id: 'c', text: 'The system blocks deletion of active organisations automatically' }, { id: 'd', text: 'Equipment auto-reassigns to the default organisation' }], correctAnswer: 'b', explanation: 'Deleting an active Organisation is irreversible. All equipment under it is lost, ColoApps become invalid, and manual engineering recovery is required.', maxAttempts: 2 },
      { id: 'b2-s8', type: 'check', question: 'Which role grants the ability to approve ColoApp applications?', options: [{ id: 'a', text: 'User' }, { id: 'b', text: 'Engineer' }, { id: 'c', text: 'Colo User (secondary role)' }, { id: 'd', text: 'Site Finder' }], correctAnswer: 'b', explanation: 'Only the Engineer role has authority to review, edit, and approve submitted ColoApp applications.', maxAttempts: 2 },
    ],
  },
};

export function getModulesForPath(pathId) {
  const path = PATHS[pathId];
  if (!path) return [];
  return path.moduleIds.map(id => MODULES[id]).filter(Boolean);
}

export function getSectionLabel(section) {
  switch (section.type) {
    case 'read': return section.title || 'Read';
    case 'watch': return section.title || 'Watch';
    case 'think': return 'Reflect';
    case 'check': return 'Knowledge Check';
    case 'quiz': return 'Module Quiz';
    case 'steps': return section.title || 'Steps';
    case 'concepts': return section.title || 'Key Concepts';
    case 'scenarios': return section.title || 'Scenarios';
    case 'mistakes': return section.title || 'Common Mistakes';
    case 'checklist': return section.title || 'Checklist';
    case 'roles': return section.title || 'Roles';
    case 'workflow': return section.title || 'Workflow';
    case 'donotdo': return section.title || 'What Not To Do';
    case 'callout': return null;
    case 'objective': return 'Learning Objectives';
    case 'infographic': return section.caption ? section.caption.split(':')[0] : 'Reference Diagram';
    default: return section.title || 'Section';
  }
}