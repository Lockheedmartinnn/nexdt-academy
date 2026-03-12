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
  m0: {
    id: 'm0',
    path: 'shared',
    title: 'What is NexDT?',
    subtitle: 'Platform overview & core concepts',
    duration: '10 min',
    icon: '🚀',
    sections: [
      {
        id: 'm0-s1',
        type: 'read',
        title: 'The Big Picture',
        intro: 'NexDT sits between site capture and final approval in the SiteSee workflow.',
        bullets: [
          { text: '**Reviews 3D tower models** and associated equipment data', icon: '📐' },
          { text: '**Runs structural & RF safety checks** to validate configurations', icon: '⚡' },
          { text: '**Validates whether changes** stay within safe operating limits', icon: '✅' },
          { text: '**Tracks approval workflows** from proposal to sign-off', icon: '📋' },
        ],
      },
      {
        id: 'm0-s2',
        type: 'watch',
        title: 'NexDT Platform Overview',
        videoId: 'ZwtJNhz1aNc',
        startTime: 0,
        endTime: 150,
        timestampLabel: '00:00 – 02:30',
        focusText: 'Focus on: The 3 core user roles and where NexDT sits in the SiteSee workflow',
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

  c1: {
    id: 'c1',
    path: 'colo',
    title: 'IEA Fundamentals',
    subtitle: 'Understanding structural assessment as a Colo User',
    duration: '20 min',
    icon: '📊',
    sections: [
      {
        id: 'c1-s1',
        type: 'read',
        title: 'What IEA Does For You',
        bullets: [
          { text: '**IEA checks structural viability** of your proposed equipment changes' },
          { text: '**Compares Existing vs Existing + Proposed** load on the tower structure' },
          { text: '**IEA is INDICATIVE** — it is not a final approval or rejection' },
          { text: 'Run it **before submitting** your ColoApp to catch obvious structural issues early' },
        ],
      },
      {
        id: 'c1-s2',
        type: 'watch',
        title: 'IEA Results in Action',
        videoId: 'ZwtJNhz1aNc',
        startTime: 180,
        endTime: 330,
        timestampLabel: '03:00 – 05:30',
        focusText: 'Focus on: The IEA results table and what the percentage columns mean',
      },
      {
        id: 'c1-s3',
        type: 'think',
        title: 'Think About It',
        question: 'Why would a site pass the Existing assessment but fail Existing + Proposed?',
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

  c2: {
    id: 'c2',
    path: 'colo',
    title: 'Rip & Replace Workflow',
    subtitle: 'End-to-end equipment upgrade walkthrough',
    duration: '30 min',
    icon: '🔄',
    phases: ['Setup', 'Filter', 'Rip', 'Replace', 'IEA', 'Submit'],
    sections: [
      { id: 'c2-p1-read', type: 'read', phase: 0, title: 'Phase 1 — Application Setup',
        bullets: [
          { text: 'Start from the site\'s **default scene** — not a previously created application' },
          { text: 'Click **Create Application** and give it a descriptive name: "Rip and Replace – [Site Name]"' },
          { text: 'After creating, wait for the **green progress bar** to fully disappear before anything else' },
        ],
      },
      { id: 'c2-p1-watch', type: 'watch', phase: 0, title: 'Phase 1 — Setup', videoId: 'ZwtJNhz1aNc', startTime: 70, endTime: 125, timestampLabel: '01:10 – 02:05', focusText: 'Focus on: The Create Application button and the green progress bar behaviour' },
      { id: 'c2-p1-callout', type: 'callout', phase: 0, variant: 'warning', title: 'Do not proceed until the green bar disappears.', body: 'Editing during initialization corrupts the session. Background tasks must complete first — this is not optional.' },
      { id: 'c2-p1-check', type: 'check', phase: 0, question: 'What does the green progress bar indicate after creating an application?', options: [{ id: 'a', text: 'The application has been submitted successfully' }, { id: 'b', text: 'Background initialization tasks are still running' }, { id: 'c', text: 'IEA is calculating in the background' }, { id: 'd', text: 'The application is ready to edit immediately' }], correctAnswer: 'b', explanation: 'The green bar indicates background initialization is in progress. Wait for it to disappear.', maxAttempts: 2 },

      { id: 'c2-p2-read', type: 'read', phase: 1, title: 'Phase 2 — My Equipment Filter',
        bullets: [
          { text: 'The filter **shows only your organisation\'s equipment** — competitor assets are restricted' },
          { text: 'Without it: you may accidentally **see or edit restricted assets** belonging to other organisations' },
          { text: 'Always enable **before touching anything** in the 3D scene' },
        ],
      },
      { id: 'c2-p2-watch', type: 'watch', phase: 1, title: 'Phase 2 — Filter', videoId: 'ZwtJNhz1aNc', startTime: 125, endTime: 200, timestampLabel: '02:05 – 03:20', focusText: 'Focus on: How equipment highlighting changes when the filter is toggled on and off' },
      { id: 'c2-p2-check', type: 'check', phase: 1, question: 'Why should you enable the My Equipment Filter before editing?', options: [{ id: 'a', text: 'It speeds up 3D rendering' }, { id: 'b', text: 'To restrict visibility and editing to your permitted equipment only' }, { id: 'c', text: 'It automatically activates the IEA tool' }, { id: 'd', text: 'It is required to create a new layer' }], correctAnswer: 'b', explanation: 'The filter ensures you only interact with equipment your organisation owns.', maxAttempts: 2 },

      { id: 'c2-p3-read', type: 'read', phase: 2, title: 'Phase 3 — The Rip (Remove Old Equipment)',
        bullets: [
          { text: 'Use the **Selector Tool** (arrow icon) to click the equipment you want to remove' },
          { text: 'You **must add a Layer** before deleting — this creates the audit trail for the change' },
          { text: 'Click **Delete Equipment** (trash icon) to remove it from the digital twin' },
          { text: 'This is **not final** until the full application is submitted to Engineering' },
        ],
      },
      { id: 'c2-p3-watch', type: 'watch', phase: 2, title: 'Phase 3 — Rip', videoId: 'ZwtJNhz1aNc', startTime: 200, endTime: 300, timestampLabel: '03:20 – 05:00', focusText: 'Focus on: The layer creation dialog and the trash icon confirmation step' },
      { id: 'c2-p3-callout', type: 'callout', phase: 2, variant: 'danger', title: 'Cannot delete without a layer.', body: 'The system blocks equipment deletion if no layer has been created. Adding a layer is mandatory — it creates the audit trail for this change.' },
      { id: 'c2-p3-check', type: 'check', phase: 2, question: 'Why is adding a layer required before deleting equipment?', options: [{ id: 'a', text: 'To unlock the delete button visually' }, { id: 'b', text: 'To track the change request in the application audit trail' }, { id: 'c', text: 'To trigger IEA automatically' }, { id: 'd', text: 'To notify the Engineering team' }], correctAnswer: 'b', explanation: 'Adding a layer creates the change tracking record that ties this modification to your application.', maxAttempts: 2 },

      { id: 'c2-p4-read', type: 'read', phase: 3, title: 'Phase 4 — The Replace (Install New Equipment)',
        bullets: [
          { text: 'Navigate to **Proposed Equipment → BIM Catalog** in the left panel' },
          { text: 'Search by **Manufacturer + Model** (e.g. Ericsson AIR3227) and add to scene' },
          { text: 'Use **Translate Tools** to move position and **Orientation Tools** to set bearing' },
          { text: 'Click **Save Draft** to commit your changes to the current session' },
        ],
      },
      { id: 'c2-p4-watch', type: 'watch', phase: 3, title: 'Phase 4 — Replace', videoId: 'ZwtJNhz1aNc', startTime: 300, endTime: 435, timestampLabel: '05:00 – 07:15', focusText: 'Focus on: The catalog search, placement controls, and orientation tools' },
      { id: 'c2-p4-check', type: 'check', phase: 3, question: 'Which tool adjusts the antenna bearing/azimuth direction?', options: [{ id: 'a', text: 'Translate tools' }, { id: 'b', text: 'Scale tools' }, { id: 'c', text: 'Orientation (rotation) tools' }, { id: 'd', text: 'Layer tools' }], correctAnswer: 'c', explanation: 'Orientation tools control bearing, azimuth and tilt. Translate tools move the physical 3D position.', maxAttempts: 2 },

      { id: 'c2-p5-read', type: 'read', phase: 4, title: 'Phase 5 — Run IEA',
        bullets: [
          { text: 'Expand **IEA** in the left menu → click **Calculate**' },
          { text: 'Review both: **Existing %** and **Existing + Proposed %** columns in the results' },
          { text: 'If Existing + Proposed exceeds limits → **flag for engineering review** before proceeding' },
          { text: 'IEA is **indicative only** — a high percentage is not an automatic submission rejection' },
        ],
      },
      { id: 'c2-p5-watch', type: 'watch', phase: 4, title: 'Phase 5 — IEA', videoId: 'ZwtJNhz1aNc', startTime: 435, endTime: 510, timestampLabel: '07:15 – 08:30', focusText: 'Focus on: The results table columns and what the percentage values mean' },
      { id: 'c2-p5-check', type: 'check', phase: 4, question: 'What does IEA compare in the results table?', options: [{ id: 'a', text: 'RF exposure levels before and after changes' }, { id: 'b', text: 'Existing structural load vs Existing + Proposed load' }, { id: 'c', text: 'Pilot logs and inspection history' }, { id: 'd', text: 'Equipment catalogue specifications' }], correctAnswer: 'b', explanation: 'IEA compares the current structural load (Existing) against load if proposed equipment is added (Existing + Proposed).', maxAttempts: 2 },

      { id: 'c2-p6-read', type: 'read', phase: 5, title: 'Phase 6 — Confirm & Submit',
        bullets: [
          { text: 'Click **Confirm Design** → you are redirected to the ColoApp Manager' },
          { text: 'Review **equipment transactions**: old equipment shows as Remove, new equipment as Add' },
          { text: 'Click **Submit → Yes** and verify the success confirmation message' },
          { text: 'The application is now **READ-ONLY** — Engineering takes ownership from here' },
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

  e1: {
    id: 'e1',
    path: 'engineer',
    title: 'IEA Deep Dive',
    subtitle: 'Engineering perspective on structural assessment',
    duration: '30 min',
    icon: '🔬',
    sections: [
      {
        id: 'e1-s1', type: 'read', title: 'IEA vs EME — What Each Tool Answers',
        isSplitCard: true,
        columns: [
          { header: 'IEA', question: '"Can the structure handle this?"', items: ['Structural load vs capacity', 'Wind loading impact', 'Existing vs Proposed scenarios'], color: '#3B82F6' },
          { header: 'EME', question: '"Is this RF-safe and compliant?"', items: ['RF exposure levels', 'Antenna power and frequency', 'Regulatory compliance thresholds'], color: '#10B981' },
        ],
      },
      {
        id: 'e1-s2', type: 'read', title: 'Data Requirements Before You Run Anything',
        bullets: [
          { text: 'Site is marked as **As-Built** in the platform' },
          { text: '**Equipment is present** in the 3D model' },
          { text: 'Correct **catalogue metadata** assigned to all equipment' },
        ],
        callout: { variant: 'danger', title: 'Running IEA on incomplete data = misleading output.', body: 'Results from incomplete sites are not just wrong — they are dangerously misleading. Always verify prerequisites before calculating.' },
      },
      { id: 'e1-s3', type: 'watch', title: 'IEA Workflow End-to-End', videoId: 'ZwtJNhz1aNc', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The tab sequence and how each section feeds into the final calculation' },
      {
        id: 'e1-s4', type: 'read', title: 'The IEA Tab Walkthrough',
        isTabs: true,
        tabs: [
          { name: 'Site Info', description: 'Site metadata, tower type, and structural baseline. Must be accurate even if read-only.', importance: 'normal' },
          { name: 'Wind Parameters', description: 'Critical for structural modelling. Default values are NOT always correct — verify before calculating.', importance: 'high' },
          { name: 'Structure', description: 'Tower geometry, heights, and segments — the physical skeleton of the site.', importance: 'normal' },
          { name: 'Load Sources', description: 'The most influential section. Every equipment toggle directly changes the final structural calculations.', importance: 'critical' },
        ],
      },
      { id: 'e1-s5', type: 'think', title: 'Think About It', question: 'An IEA result shows 89% on Existing but 112% on Existing + Proposed. What does this tell you, and what should happen next?' },
      {
        id: 'e1-s6', type: 'read', title: 'Interpreting IEA Results',
        isResultGuide: true,
        results: [
          { status: 'pass', icon: '✅', label: 'Below safe limits', action: 'Proceed with confidence — design is structurally viable' },
          { status: 'borderline', icon: '⚠️', label: 'Near safe limits', action: 'Review Load Sources and Wind Parameters before approving' },
          { status: 'fail', icon: '❌', label: 'Exceeds safe limits', action: 'Flag for deeper engineering review — this is NOT an automatic rejection' },
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

  e2: {
    id: 'e2',
    path: 'engineer',
    title: 'Engineering Review of ColoApps',
    subtitle: 'Reviewing, editing, and approving submitted applications',
    duration: '20 min',
    icon: '✍️',
    sections: [
      {
        id: 'e2-s1', type: 'read', title: 'What Changes When Engineering Takes Control',
        bullets: [
          { text: 'When a Colo User submits, **ownership transfers to Engineering** — the app is frozen for them' },
          { text: 'Approval means: **"this design is safe, processable, and defensible"** — not just "looks OK"' },
          { text: 'As the engineer, you are **accountable** for structural plausibility and processing compatibility' },
          { text: 'Nothing beyond submission is suggestive — it is **authoritative** and carries real consequences' },
        ],
      },
      { id: 'e2-s2', type: 'watch', title: 'Engineer Review Walkthrough', videoId: '9xquCESbNW0', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The review sequence — default scene first, then switching to the ColoApp view' },
      {
        id: 'e2-s3', type: 'read', title: 'Correct Review Sequence',
        bullets: [
          { text: 'Step 1: Open the site → view the **default scene** (establish the as-built baseline)' },
          { text: 'Step 2: **Switch to the Colo App** and compare what has changed against the baseline' },
          { text: 'Step 3: Perform a **visual engineering audit** — clashes, floating equipment, misalignment' },
          { text: 'Step 4: Run IEA from the engineering perspective before approving' },
        ],
      },
      { id: 'e2-s4', type: 'think', title: 'Think About It', question: 'An engineer opens a submitted ColoApp and sees a panel that appears to be floating 0.5m from the mount. What are the implications and what should happen?' },
      {
        id: 'e2-s5', type: 'read', title: 'The Confirm Design Trigger — Critical System Behaviour',
        bullets: [
          { text: '**Saving any edit** on a submitted ColoApp **automatically triggers Confirm Design**' },
          { text: 'You **cannot quietly tweak** a submitted design — every edit requires explicit review' },
          { text: 'This **prevents accidental approvals** and enforces conscious engineering decision-making' },
          { text: 'The system enforces **engineering accountability** — there is no silent edit mode' },
        ],
        callout: { variant: 'warning', title: 'Saving edits on a submitted ColoApp triggers the approval workflow.', body: 'This is intentional. Every engineering modification must be reviewed. There is no way to make a quiet change.' },
      },
      { id: 'e2-s6', type: 'check', question: 'Why does NexDT lock an application after the Colo User submits it?', options: [{ id: 'a', text: 'To improve rendering performance' }, { id: 'b', text: 'To enforce a clear handover of responsibility to Engineering' }, { id: 'c', text: 'To prevent accidental deletions by other users' }, { id: 'd', text: 'To speed up the approval process timeline' }], correctAnswer: 'b', explanation: 'Locking enforces a clear handover. The Colo User\'s proposal is frozen; Engineering now owns validation and approval.', maxAttempts: 2 },
      { id: 'e2-s7', type: 'check', question: 'An Engineer adds a missing antenna to a submitted ColoApp and saves. What happens next?', options: [{ id: 'a', text: 'The change is silently applied and nothing else happens' }, { id: 'b', text: 'The system redirects to Confirm Design — the engineer must review and explicitly approve' }, { id: 'c', text: 'The Colo User is notified to re-submit the application' }, { id: 'd', text: 'IEA runs automatically to validate the change' }], correctAnswer: 'b', explanation: 'Any edit on a submitted ColoApp triggers Confirm Design. The engineer must consciously review the transaction log and approve.', maxAttempts: 2 },
    ],
  },

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
        id: 'b1-s1', type: 'read', title: 'What BIM Admin Controls',
        bullets: [
          { text: 'Defines **equipment metadata** used across the entire NexDT platform' },
          { text: 'Links **3D geometry** (GLB files) to catalogue entries — enabling visual placement' },
          { text: 'Enables equipment **search, placement, and analysis** across all sites' },
          { text: 'Errors here cause: **ghost models, failed EME, invalid approvals**' },
        ],
      },
      { id: 'b1-s2', type: 'watch', title: 'BIM Admin Overview', videoId: 'zShR12je8bQ', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The metadata form and the asset upload + mesh reference linking steps' },
      {
        id: 'b1-s3', type: 'read', title: 'Creating BIM Equipment — Metadata First',
        bullets: [
          { text: '**Manufacturer & Model** must exactly match the catalogue — case and spelling sensitive' },
          { text: '**ESA (Effective Sail Area)** required for tower equipment; set to 0 for ground equipment' },
          { text: '**Type & Subtype** control placement rules and engineering categorisation' },
          { text: '**Tags** power search and filtering — they are not cosmetic labels' },
        ],
      },
      { id: 'b1-s4', type: 'callout', variant: 'danger', title: '🚨 MOST COMMON ERROR: Uploading GLB but forgetting to link the Mesh Reference.', body: 'After uploading the GLB file, you MUST select it in the Mesh Reference dropdown. If skipped, the equipment appears as an invisible "ghost" on the Sites Portal. This is the #1 BIM Admin failure.' },
      {
        id: 'b1-s5', type: 'read', title: 'Asset Upload — Critical Steps',
        bullets: [
          { text: 'Upload **GLB file** (3D geometry) — drag and drop into the asset upload area' },
          { text: 'Upload **thumbnail** image — shown as the equipment preview icon in the catalogue' },
          { text: '**CRITICAL: Link Mesh Reference** — select the uploaded GLB in the dropdown after upload' },
          { text: 'If Mesh Reference is skipped → equipment appears as a **ghost on ALL sites**' },
        ],
      },
      {
        id: 'b1-s6', type: 'read', title: 'CAD Modelling Specification',
        isSpecTable: true,
        specRows: [
          { property: 'Format', value: 'GLTF 2.0 (.glb) only' },
          { property: 'Origin', value: 'Axis-aligned bounding box centre' },
          { property: 'Up axis', value: '+Z' },
          { property: 'Emitter face', value: '+Y' },
          { property: 'Scale', value: 'Millimetres (mm)' },
        ],
      },
      { id: 'b1-s7', type: 'check', question: 'A BIM Admin uploads a GLB file but skips the Mesh Reference step. What happens?', options: [{ id: 'a', text: 'The upload fails immediately with an error' }, { id: 'b', text: 'Equipment appears as a ghost or invisible object in Sites Portal' }, { id: 'c', text: 'EME fails only, but the model appears correctly' }, { id: 'd', text: 'The system automatically links the mesh reference' }], correctAnswer: 'b', explanation: 'Skipping Mesh Reference is the most common BIM Admin error. Equipment geometry exists but is not instantiated — it appears as an empty ghost object.', maxAttempts: 2 },
      { id: 'b1-s8', type: 'check', question: 'Why must Manufacturer and Model be entered accurately in BIM Admin?', options: [{ id: 'a', text: 'For display purposes only in the UI' }, { id: 'b', text: 'To enable EME auto-configuration via catalogue lookup' }, { id: 'c', text: 'To generate thumbnail images automatically' }, { id: 'd', text: 'To unlock the edit mode for the equipment' }], correctAnswer: 'b', explanation: 'Manufacturer and Model must exactly match catalogue entries. EME uses this to auto-populate port frequencies and power ranges. A mismatch causes silent failure.', maxAttempts: 2 },
    ],
  },

  b2: {
    id: 'b2',
    path: 'bim_admin',
    title: 'Super Admin Console',
    subtitle: 'User management, organisations, and system administration',
    duration: '45 min',
    icon: '🛡️',
    sections: [
      { id: 'b2-s0', type: 'callout', variant: 'danger', isRiskBanner: true, title: '🔴 RISK LEVEL: HIGHEST', body: 'Actions in this module have system-wide impact and NO automated rollback. Incorrect use can orphan equipment, break ColoApps, and require manual engineering recovery.' },
      { id: 'b2-s1', type: 'watch', title: 'Admin Console Overview', videoId: 'o5dktAxAuiE', startTime: 0, endTime: 300, timestampLabel: '00:00 – 05:00', focusText: 'Focus on: The Organisation management flow and user creation sequence' },
      {
        id: 'b2-s2', type: 'read', title: 'What the Admin Console Controls',
        bullets: [
          { text: 'Which **Head Customers (Organisations)** exist in the platform' },
          { text: 'Which users can **see, edit, and submit** data — and which sites they access' },
          { text: 'How **ColoApps are attributed** to the correct customer organisation' },
          { text: 'What data **persists or is destroyed** when organisations are modified' },
        ],
      },
      { id: 'b2-s3', type: 'callout', variant: 'danger', title: '⛔ NEVER delete an active Organisation.', body: 'Deleting an active Organisation removes ALL associated equipment data. ColoApps become invalid. There is NO automated rollback. Engineers must manually reconstruct affected data.' },
      {
        id: 'b2-s4', type: 'read', title: 'Organisation Management',
        bullets: [
          { text: 'Organisations define **Head Customer ownership** — used to attribute equipment and ColoApps' },
          { text: 'Colo User access is **restricted to their assigned Organisation\'s** equipment only' },
          { text: 'Safe to delete only if: **no equipment, no ColoApps, no engineering history**' },
          { text: 'Treat active Organisations as **production data — permanent, not cosmetic**' },
        ],
      },
      {
        id: 'b2-s5', type: 'read', title: 'Creating Users — Role Design Matters',
        bullets: [
          { text: '**User** → Standard platform access (view and submit only)' },
          { text: '**Engineer** → Can edit, run IEA/EME, and approve ColoApps' },
          { text: '**Administrator** → Full Admin Console access — highest privilege level' },
          { text: 'Organisation assignment determines which equipment the user can **see and interact with**' },
        ],
      },
      { id: 'b2-s6', type: 'think', title: 'Think About It', question: 'An admin needs to "clean up" the Organisation list and deletes two entries without checking if equipment exists under them. What are the immediate and downstream consequences?' },
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
    case 'callout': return null;
    default: return section.title || 'Section';
  }
}