export const PATHS = {
  colo: {
    id: 'colo',
    title: 'Colo User Path',
    emoji: '🏗️',
    description: 'Propose & submit equipment changes',
    subtitle: 'Learn to create applications, manage equipment changes, and submit for engineering review.',
    durationText: '3 modules · ~60 min',
    color: '#3B82F6',
    moduleIds: ['m0', 'c1', 'c2'],
  },
  engineer: {
    id: 'engineer',
    title: 'Engineer Path',
    emoji: '⚙️',
    description: 'Review, approve, validate safety',
    subtitle: 'Master IEA/EME analysis, review submitted ColoApps, and make engineering decisions.',
    durationText: '3 modules · ~60 min',
    color: '#10B981',
    moduleIds: ['m0', 'e1', 'e2'],
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
    title: 'What is NexDT?',
    subtitle: 'Platform overview & core concepts',
    duration: '10 min',
    icon: '🚀',
    sections: [
      {
        id: 'm0-workflow',
        type: 'workflow',
        title: 'Where NexDT Fits',
        description: 'NexDT is the engineering validation layer between site capture and final approval. It is not the first step, and it is not the last — but nothing gets approved without passing through it.',
        steps: [
          { label: 'Capture', icon: '📸', description: 'Drone imagery and 3D scan data collected on site', role: 'Pilot', active: false },
          { label: 'NexDT', icon: '🏗️', description: 'Engineering review, structural checks, RF compliance — you are here', role: 'You', active: true },
          { label: 'Approval', icon: '✅', description: 'Final sign-off and changes are applied to the live digital twin', role: 'Management', active: false },
        ],
      },
      {
        id: 'm0-s1',
        type: 'concepts',
        title: 'What NexDT Actually Does',
        concepts: [
          { icon: '📐', term: 'Reviews 3D tower models', definition: 'Works with precise 3D models captured from real-world tower sites, letting you inspect equipment placement, structure geometry, and spatial relationships without a site visit.', color: '#3B82F6' },
          { icon: '⚡', term: 'Runs structural & RF checks', definition: 'Performs Indicative Engineering Assessment (IEA) for structural load and EME for RF exposure compliance — two distinct analyses that answer different safety questions.', color: '#8B5CF6' },
          { icon: '✅', term: 'Validates safe configurations', definition: 'Compares proposed equipment changes against safe structural and compliance limits. Flags anything that needs engineering review before it can be approved.', color: '#10B981' },
          { icon: '📋', term: 'Tracks approval workflows', definition: 'Manages the full lifecycle from Colo User proposal → Engineering review → final approval, maintaining audit trails and transaction logs throughout.', color: '#F59E0B' },
        ],
      },
      {
        id: 'm0-s2',
        type: 'donotdo',
        title: 'What NexDT Does NOT Do',
        intro: 'Knowing what NexDT is not responsible for is just as important as knowing what it does.',
        items: [
          { text: 'Capture sites', detail: 'Site capture is handled by the SiteSee Pilot app and drone workflows. NexDT receives the processed 3D model — it does not generate it.' },
          { text: 'Replace certified engineering', detail: 'IEA and EME results are indicative only. They support decision-making but are not a substitute for a qualified structural engineer\'s sign-off on complex modifications.' },
          { text: 'Design new towers', detail: 'NexDT is for reviewing and approving changes to existing tower configurations. New tower design is handled by external engineering workflows.' },
        ],
      },
      {
        id: 'm0-roles',
        type: 'roles',
        title: 'Your Role Determines Everything',
        description: 'In NexDT, your assigned role controls what you can see, what you can modify, and what actions you can take. Every key action in the platform traces back to a role.',
        roles: [
          { icon: '🏗️', name: 'Colo User', actions: ['Propose equipment changes', 'Submit ColoApps for review', 'View your organisation\'s equipment', 'Run IEA before submission'], restriction: 'Cannot approve or edit other organisations\' equipment' },
          { icon: '⚙️', name: 'Engineer', actions: ['Review submitted ColoApps', 'Edit designs for engineering correctness', 'Approve or return applications', 'Run IEA and EME analysis'], restriction: 'Accountable for every approval — not just "looks OK"' },
          { icon: '🔧', name: 'BIM / Admin', actions: ['Manage the equipment catalogue', 'Create and configure BIM equipment', 'Manage user accounts', 'Manage organisations'], restriction: 'Highest risk actions — no automated rollback on destructive changes' },
        ],
      },
      {
        id: 'm0-s2-watch',
        type: 'watch',
        title: 'NexDT Platform Overview',
        videoId: 'ZwtJNhz1aNc',
        startTime: 0,
        endTime: 150,
        timestampLabel: '00:00 – 02:30',
        focusText: 'Focus on: The 3 core user roles and where NexDT sits in the SiteSee workflow',
      },
      {
        id: 'm0-terms',
        type: 'concepts',
        title: 'Core Terms You Must Know',
        intro: 'These terms appear everywhere in NexDT. Get comfortable with them before clicking anything.',
        concepts: [
          { icon: '📁', term: 'Application', definition: 'A tracked change request or review workflow for a specific site. Every equipment modification happens inside an Application — it creates the audit trail and connects Colo Users to Engineers.', example: 'Example: "Rip and Replace – Tower 42"', color: '#3B82F6' },
          { icon: '🔵', term: 'Existing Equipment', definition: 'Equipment currently installed on the tower — the as-built baseline. When you run IEA, this is the starting point. You can\'t pretend it doesn\'t exist.', example: 'Existing 4G panels, dishes, and mounts already on the tower', color: '#6B7280' },
          { icon: '🟢', term: 'Proposed Equipment', definition: 'New or modified equipment you\'re evaluating. Adding proposed equipment changes the IEA calculation — sometimes significantly. This is where engineering risk lives.', example: 'New 5G antennas being added in your application', color: '#10B981' },
          { icon: '⚖️', term: 'IEA', definition: 'Indicative Engineering Assessment. Answers: "Can the structure handle this load?" — NOT a final certification. Used for early feasibility and decision support.', example: 'Results show 87% on Existing, 112% on Existing + Proposed', color: '#F59E0B' },
          { icon: '📡', term: 'EME', definition: 'Electromagnetic Energy assessment. Answers: "Is the RF exposure within safe regulatory limits?" — Requires accurate antenna configuration data to produce meaningful results.', example: 'Run after equipment configuration is complete', color: '#8B5CF6' },
        ],
      },
      {
        id: 'm0-s3',
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

  // ─── MODULE E1: IEA DEEP DIVE ──────────────────────────────
  e1: {
    id: 'e1',
    path: 'engineer',
    title: 'IEA Deep Dive',
    subtitle: 'Engineering perspective on structural assessment',
    duration: '30 min',
    icon: '🔬',
    sections: [
      {
        id: 'e1-s1',
        type: 'read',
        title: 'IEA vs EME — What Each Tool Actually Answers',
        isSplitCard: true,
        columns: [
          { header: 'IEA', question: '"Can the structure handle this?"', items: ['Structural load vs tower capacity', 'Wind loading and ESA impact', 'Existing vs Proposed scenarios', 'Indicative — not a final structural cert'], color: '#3B82F6' },
          { header: 'EME', question: '"Is this RF-safe and compliant?"', items: ['RF exposure levels at ground level', 'Antenna power and frequency bands', 'Regulatory compliance thresholds', 'Requires accurate antenna metadata'], color: '#10B981' },
        ],
      },
      {
        id: 'e1-prereqs',
        type: 'checklist',
        title: 'Prerequisites — Before You Run Either Tool',
        intro: 'Both IEA and EME require the same foundation. Running either tool on incomplete data produces results that are not just wrong — they\'re dangerously misleading.',
        items: [
          { label: 'Site is marked as As-Built', detail: 'As-Built status means the 3D model has been verified against real-world capture data. Without it, the model may not represent actual tower conditions.' },
          { label: 'Equipment is present in the 3D model', detail: 'IEA needs equipment present to calculate load. EME needs antennae configured with accurate specifications. An empty or partially populated model produces garbage output.' },
          { label: 'Correct catalogue metadata assigned to all equipment', detail: 'Manufacturer, Model, ESA values — all must be accurate. EME uses Manufacturer/Model to pull RF configuration from the catalogue. Wrong metadata = no config returned.' },
        ],
        callout: { variant: 'danger', title: 'Running IEA on incomplete data = misleading output.', body: 'Results from incomplete sites are not just wrong — they are dangerously misleading. A passing result on bad data is worse than no result at all.' },
      },
      {
        id: 'e1-s3',
        type: 'watch',
        title: 'IEA Workflow End-to-End',
        videoId: 'ZwtJNhz1aNc',
        startTime: 0,
        endTime: 300,
        timestampLabel: '00:00 – 05:00',
        focusText: 'Focus on: The tab sequence and how each section feeds into the final calculation',
      },
      {
        id: 'e1-tabs',
        type: 'read',
        title: 'The IEA Tab Walkthrough',
        isTabs: true,
        tabs: [
          { name: 'Site Info', description: 'Site metadata, tower type, and structural baseline. This data is often read-only — it comes from the as-built processing pipeline. It must be accurate. If it isn\'t, flag it before running IEA.', importance: 'normal' },
          { name: 'Wind Parameters', description: 'Critical for structural modelling. Wind speed and terrain category directly affect load calculations. Default values are NOT always correct for a given site\'s geography. Always verify against site documentation before calculating.', importance: 'high' },
          { name: 'Structure', description: 'Tower geometry, segment heights, and structural type. Think of this as the physical skeleton of the site. Errors here (wrong height, wrong tower type) propagate through every calculation.', importance: 'normal' },
          { name: 'Load Sources', description: 'The most influential section in IEA. Every equipment item is listed here. Toggle equipment on/off to include or exclude from calculations. Every single toggle directly changes the final structural result. This is where you verify the Rip & Replace equipment changes are correctly reflected.', importance: 'critical' },
        ],
      },
      {
        id: 'e1-s5',
        type: 'think',
        title: 'Think About It',
        question: 'An IEA result shows 89% on Existing but 112% on Existing + Proposed. What does this tell you, and what should happen next?',
      },
      {
        id: 'e1-results',
        type: 'read',
        title: 'Interpreting IEA Results as an Engineer',
        isResultGuide: true,
        results: [
          { status: 'pass', icon: '✅', label: 'Below safe limits', action: 'Proceed with confidence — design is structurally viable. Verify transaction logs match the expected changes, then approve.' },
          { status: 'borderline', icon: '⚠️', label: 'Near safe limits', action: 'Review Load Sources and Wind Parameters. Are defaults correct? Are all proposed items necessary? Document your assessment before approving.' },
          { status: 'fail', icon: '❌', label: 'Exceeds safe limits', action: 'Flag for deeper engineering review — this is NOT an automatic rejection. A site failing IEA may still be approvable with a qualified structural engineer\'s assessment and sign-off.' },
        ],
      },
      {
        id: 'e1-mistakes',
        type: 'mistakes',
        title: 'Engineering Mistakes That Invalidate IEA',
        items: [
          { mistake: 'Running IEA before verifying Wind Parameters are correct for the site', consequence: 'Structural calculations are based on wrong wind loads — results are meaningless even if they look clean.' },
          { mistake: 'Not checking Load Sources for correct equipment inclusion', consequence: 'Proposed equipment may not be toggled on, making IEA calculate Existing only — missing the actual impact of the change.' },
          { mistake: 'Treating IEA failure as final rejection without engineering review', consequence: 'Valid applications get rejected or returned unnecessarily, slowing down the project timeline.' },
          { mistake: 'Approving a design without verifying the IEA reflects the actual submission', consequence: 'Engineering approval is given for a configuration that wasn\'t actually assessed.' },
        ],
      },
      { id: 'e1-s7', type: 'check', question: 'A site passes Existing but fails Existing + Proposed. What does this mean?', options: [{ id: 'a', text: 'The IEA tool has a calculation bug' }, { id: 'b', text: 'Proposed equipment adds structural load that exceeds safe limits' }, { id: 'c', text: 'Wind data is being ignored in the calculation' }, { id: 'd', text: 'EME must be run instead to confirm' }], correctAnswer: 'b', explanation: 'This is expected and normal. Current load is fine, but the added proposed equipment pushes structural load over the safe threshold.', maxAttempts: 2 },
      { id: 'e1-s8', type: 'check', question: 'Which IEA tab most directly affects the final calculation output?', options: [{ id: 'a', text: 'Site Information' }, { id: 'b', text: 'Wind Parameters' }, { id: 'c', text: 'Load Sources' }, { id: 'd', text: 'Reports' }], correctAnswer: 'c', explanation: 'Load Sources is where equipment is toggled on/off. Every change here directly updates structural calculation output.', maxAttempts: 2 },
      {
        id: 'e1-quiz', type: 'quiz', title: 'Module Quiz', passingScore: 80,
        questions: [
          { id: 'q1', question: 'What is the primary purpose of IEA?', options: [{ id: 'a', text: 'RF exposure compliance' }, { id: 'b', text: 'Structural feasibility assessment' }, { id: 'c', text: 'Image processing' }, { id: 'd', text: 'Pilot validation' }], correctAnswer: 'b', explanation: 'IEA evaluates structural feasibility of a tower based on equipment configuration.' },
          { id: 'q2', question: 'EME primarily evaluates:', options: [{ id: 'a', text: 'Wind loading' }, { id: 'b', text: 'Structural rotation' }, { id: 'c', text: 'RF exposure and compliance' }, { id: 'd', text: 'Equipment geometry' }], correctAnswer: 'c', explanation: 'EME evaluates RF exposure and compliance.' },
          { id: 'q3', question: 'What must exist before IEA can run meaningfully?', options: [{ id: 'a', text: 'Pilot logs' }, { id: 'b', text: 'Empty site' }, { id: 'c', text: 'As-built site with equipment' }, { id: 'd', text: 'Approved ColoApp' }], correctAnswer: 'c', explanation: 'As-built site with equipment and correct metadata is required.' },
          { id: 'q4', question: 'Which IEA tab most directly affects outcomes?', options: [{ id: 'a', text: 'Site Information' }, { id: 'b', text: 'Load Sources' }, { id: 'c', text: 'Reports' }, { id: 'd', text: 'Documents' }], correctAnswer: 'b', explanation: 'Load Sources — every equipment toggle directly changes calculations.' },
          { id: 'q5', question: 'Toggling proposed equipment ON in Load Sources results in:', options: [{ id: 'a', text: 'UI changes only' }, { id: 'b', text: 'Structural calculations updating' }, { id: 'c', text: 'Site metadata resetting' }, { id: 'd', text: 'Wind parameters locking' }], correctAnswer: 'b', explanation: 'Every toggle directly updates structural calculations.' },
          { id: 'q6', question: 'A site passing Existing but failing Existing + Proposed means:', options: [{ id: 'a', text: 'The system is incorrect' }, { id: 'b', text: 'Proposed equipment adds structural load' }, { id: 'c', text: 'Wind data is ignored' }, { id: 'd', text: 'EME must be run' }], correctAnswer: 'b', explanation: 'Normal and expected — proposed equipment adds load exceeding safe limits.' },
          { id: 'q7', question: 'Are IEA results final engineering approval?', options: [{ id: 'a', text: 'Yes' }, { id: 'b', text: 'Only for small towers' }, { id: 'c', text: 'No, they are indicative' }, { id: 'd', text: 'Only if exported' }], correctAnswer: 'c', explanation: 'IEA is indicative — not a replacement for certified engineering.' },
          { id: 'q8', question: 'Which user role cannot run EME?', options: [{ id: 'a', text: 'Engineer' }, { id: 'b', text: 'Support Admin' }, { id: 'c', text: 'Colo User' }, { id: 'd', text: 'Pilot' }], correctAnswer: 'd', explanation: 'Pilot users cannot run EME.' },
          { id: 'q9', question: 'What most commonly invalidates IEA results?', options: [{ id: 'a', text: 'Too many reports' }, { id: 'b', text: 'Running without equipment present' }, { id: 'c', text: 'Forgetting documents' }, { id: 'd', text: 'Changing UI theme' }], correctAnswer: 'b', explanation: 'Running without equipment present leads to misleading outputs.' },
          { id: 'q10', question: 'What is the correct mindset when using IEA?', options: [{ id: 'a', text: 'Treat as final decision' }, { id: 'b', text: 'Ignore failures' }, { id: 'c', text: 'Use as decision guidance' }, { id: 'd', text: 'Only use for visuals' }], correctAnswer: 'c', explanation: 'IEA is decision guidance for early feasibility, not final approval.' },
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

  // ─── MODULE B1: BIM ADMIN ─────────────────────────────────
  b1: {
    id: 'b1',
    path: 'bim_admin',
    title: 'BIM Admin Tooling',
    subtitle: 'Managing the equipment library and catalogue',
    duration: '60 min',
    icon: '🗂️',
    sections: [
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
      { id: 'b2-s0', type: 'callout', variant: 'danger', isRiskBanner: true, title: '🔴 RISK LEVEL: HIGHEST', body: 'Actions in this module have system-wide impact and NO automated rollback. Incorrect use can orphan equipment, break ColoApps, and require manual engineering recovery.' },
      { id: 'b2-watch', type: 'watch', title: 'Admin Console Overview', videoId: 'o5dktAxAuiE', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The Organisation management flow and user creation sequence' },
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
    default: return section.title || 'Section';
  }
}