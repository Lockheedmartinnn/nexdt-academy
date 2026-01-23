import { 
  BookOpen, 
  Users, 
  Settings, 
  Database, 
  CheckCircle,
  Wrench,
  FileSpreadsheet,
  Link as LinkIcon,
  Layers,
  BarChart3,
  Search,
  GraduationCap
} from "lucide-react";
import React from 'react';

export const tracks = [
  {
    id: "nexdt-complete",
    title: "SiteSee NexDT Academy",
    description: "Train users to confidently use NexDT for engineering review, data validation, configuration, and reporting — using official SiteSee documentation and videos.",
    duration: "6 hours",
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    modules: [
      {
        id: "module-1",
        title: "NexDT Overview & Core Concepts",
        lessons: [
          {
            id: "what-is-nexdt",
            title: "What is NexDT?",
            duration: "10 min",
            content: `
# What is NexDT?

**NexDT** is SiteSee's engineering and validation portal used to review, assess, and approve tower configurations using 3D models, equipment data, and engineering calculations.

It enables users to:

- View **as-built 3D models**
- Manage **applications and equipment**
- Run **engineering assessments** (IEA and EME)
- Validate whether a tower remains within **safe load-bearing and compliance limits**

NexDT is used **after capture** and **before approval**.

## Where NexDT Fits in the SiteSee Workflow

A simplified workflow looks like this:

1. A site is captured and processed into an **as-built model**
2. The model and equipment data are loaded into **NexDT**
3. Users review the site and manage **applications**
4. Engineering tools (IEA / EME) are run
5. Results are reviewed before approvals or changes are submitted

**NexDT acts as the engineering truth layer for SiteSee.**

## Who Uses NexDT?

NexDT is used by multiple types of users, including:

- **Engineers** — responsible for reviewing data, approving as-builts, and validating safety
- **Colocation (Colo) users** — manage equipment belonging to their organization
- **Support and Admin users** — assist with reports, validation, and platform support

Each user may see or edit different information, but all users work within the same core system.

## What NexDT Does Not Do

It's important to understand the boundaries of NexDT:

- NexDT does **not** capture sites
- NexDT does **not** replace certified structural engineering
- NexDT does **not** design new towers

NexDT provides **indicative assessments and validation**, not final engineering certification.
            `,
            keyTakeaways: [
              "NexDT is used after capture and before approval",
              "Acts as the engineering truth layer for SiteSee",
              "Provides indicative assessments, not final certification"
            ]
          },
          {
            id: "key-concepts",
            title: "Key Concepts You Must Understand",
            duration: "8 min",
            content: `
# Key Concepts You Must Understand

Before using NexDT, it's important to understand these concepts:

## Applications

An **Application** represents a specific engineering or colocation workflow for a site.

Applications are used to:
- Review equipment
- Run assessments
- Track changes and approvals

## Existing vs Proposed

- **Existing** refers to equipment currently installed on the tower
- **Proposed** refers to new or modified equipment being evaluated

Engineering results can be viewed as:
- **Existing only**
- **Existing + Proposed**

## IEA & EME

### IEA (Indicative Engineering Assessment)
Evaluates whether a tower remains within safe structural limits based on equipment configuration.

### EME (Electromagnetic Energy)
Evaluates electromagnetic exposure based on installed equipment.

Both tools rely on **accurate equipment and as-built data**.
            `,
            keyTakeaways: [
              "Applications track specific engineering/colocation workflows",
              "Existing = current equipment, Proposed = new/modified equipment",
              "IEA and EME depend on accurate data quality"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What is the primary purpose of NexDT?",
              type: "single",
              options: [
                { id: "a", text: "Capturing drone imagery" },
                { id: "b", text: "Designing new tower structures" },
                { id: "c", text: "Engineering review and validation of tower configurations" },
                { id: "d", text: "Managing pilot workflows" }
              ],
              correctAnswer: "c",
              explanation: "NexDT is used for engineering assessment and validation, not capture or design."
            },
            {
              id: "q2",
              question: "When is NexDT typically used in the SiteSee workflow?",
              type: "single",
              options: [
                { id: "a", text: "Before site capture" },
                { id: "b", text: "During drone flight" },
                { id: "c", text: "After capture and before approval" },
                { id: "d", text: "Only after final certification" }
              ],
              correctAnswer: "c",
              explanation: "NexDT is used after capture and before approval to review and validate tower configurations."
            },
            {
              id: "q3",
              question: "What does 'Existing + Proposed' represent?",
              type: "single",
              options: [
                { id: "a", text: "Historical data only" },
                { id: "b", text: "Current equipment plus new or modified equipment" },
                { id: "c", text: "Equipment from multiple organizations" },
                { id: "d", text: "Equipment awaiting deletion" }
              ],
              correctAnswer: "b",
              explanation: "Existing + Proposed represents current equipment combined with new or modified equipment for engineering calculations."
            },
            {
              id: "q4",
              question: "Which tools are run within NexDT?",
              type: "single",
              options: [
                { id: "a", text: "Scanlink and Pilot App" },
                { id: "b", text: "IEA and EME" },
                { id: "c", text: "CAD and BIM render tools" },
                { id: "d", text: "GPS validation tools" }
              ],
              correctAnswer: "b",
              explanation: "IEA (Indicative Engineering Assessment) and EME (Electromagnetic Energy) are the core engineering tools in NexDT."
            }
          ]
        }
      },
      {
        id: "module-1-2",
        title: "IEA & EME Fundamentals",
        lessons: [
          {
            id: "iea-eme-overview",
            title: "IEA & EME Core Tools",
            duration: "12 min",
            content: `
# IEA & EME Fundamentals (NexDT Core Tools)

## What Problem Are We Solving?

Before using any engineering tool, it's critical to understand **what decision the tool supports**.

### Two Core Tools in NexDT

**IEA — Indicative Engineering Assessment**

Evaluates **structural feasibility** of a tower based on:
- Existing equipment
- Proposed equipment
- Wind and structural parameters

**Key idea**: IEA answers *"Can the structure handle this?"*

**EME — Electromagnetic Energy**

Evaluates **RF exposure and compliance**, based on:
- Antenna configuration
- Equipment data
- Regulatory limits

**Key idea**: EME answers *"Is this RF-safe and compliant?"*

## When IEA & EME Actually Work

IEA and EME **depend entirely on data quality**.

They require:
- The site to be **As-Built**
- Equipment present in the model
- Correct catalogue and equipment metadata

They will **not** produce meaningful results if these conditions are missing.

⚠️ **Warning**: Running IEA or EME on incomplete data leads to misleading outputs.
            `,
            keyTakeaways: [
              "IEA evaluates structural feasibility, EME evaluates RF compliance",
              "Both tools require as-built sites with equipment present",
              "Results are only meaningful with accurate data quality"
            ],
            warnings: [
              "Running IEA or EME on incomplete data leads to misleading outputs"
            ]
          },
          {
            id: "iea-workflow",
            title: "The IEA Workflow (End-to-End)",
            duration: "15 min",
            content: `
# The IEA Workflow (End-to-End)

Running an IEA follows a **deliberate sequence**:

1. Open the site in NexDT
2. Navigate to **IEA**
3. Review **Site Information**
4. Confirm **Wind Parameters**
5. Review **Structure**
6. Review **Load Sources**
7. Choose analysis mode
8. Submit and calculate

**Important**: IEA outputs are deterministic — change inputs, results change.

⚠️ **Common Misstep**: Running calculations before reviewing wind or load parameters.

## Understanding the IEA Tabs

### Site Information
Contains:
- Site metadata
- Tower type
- Structural baseline

This data must be **accurate**, even if read-only.

### Wind Parameters
- Critical for structural modelling
- **Defaults are not always correct**
- Incorrect wind data can invalidate results

### Structure
Defines:
- Tower geometry
- Heights and segments

Think of this as the **physical skeleton** of the site.

### Load Sources
This is the **most influential section**.

Here you will see:
- Existing equipment
- Proposed equipment
- Ability to toggle equipment on/off

**Every toggle directly affects final calculations.**
            `,
            keyTakeaways: [
              "Review wind parameters and load sources before calculating",
              "Load Sources is the most influential section for IEA",
              "Every equipment toggle affects final calculations"
            ],
            warnings: [
              "Common mistake: Running calculations before reviewing wind or load parameters"
            ]
          },
          {
            id: "existing-vs-proposed",
            title: "Existing vs Existing + Proposed",
            duration: "10 min",
            content: `
# Existing vs Existing + Proposed (Critical Concept)

## Existing
- Evaluates the **current state** of the tower
- Used as a baseline
- Helpful for diagnosing existing constraints

## Existing + Proposed
- Evaluates impact of **new or modified equipment**
- Used for **decision-making and approvals**

**A site may pass Existing but fail Existing + Proposed — this is normal and expected.**

## Interpreting IEA Results Correctly

IEA results are:
- **Indicative**
- Used for early feasibility
- **Not a replacement** for certified engineering

### Correct response to a failure:
1. Flag for further engineering review
2. Investigate load sources and parameters
3. Do **not** treat as final rejection automatically

## Common Mistakes to Avoid

- Running IEA before site is as-built
- Assuming default wind values are correct
- Forgetting to toggle proposed equipment
- Treating indicative results as final approval

**This module exists to prevent these mistakes.**
            `,
            keyTakeaways: [
              "Existing = baseline, Existing + Proposed = decision-making",
              "Sites may pass Existing but fail Existing + Proposed",
              "IEA failures should trigger review, not automatic rejection"
            ]
          },
          {
            id: "eme-fundamentals",
            title: "EME Fundamentals (High Level)",
            duration: "8 min",
            content: `
# EME Fundamentals (High Level)

## EME Overview

EME:
- Runs **on demand**
- Requires equipment and catalogue data
- Cannot generate meaningful outputs without proper inputs

## Users Who Can Run EME

- Engineer
- Support Admin
- Colo User

*Note: Pilot users cannot run EME*

## EME Analysis

EME analysis is covered in more depth in later modules.

Key understanding for now:
- EME evaluates RF exposure and compliance
- Requires accurate antenna configuration
- Based on equipment data and regulatory limits
            `,
            keyTakeaways: [
              "EME runs on demand and requires catalogue data",
              "Engineers, Support Admins, and Colo Users can run EME",
              "EME evaluates RF exposure and compliance"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What is the primary purpose of IEA?",
              type: "single",
              options: [
                { id: "a", text: "RF exposure compliance" },
                { id: "b", text: "Structural feasibility assessment" },
                { id: "c", text: "Image processing" },
                { id: "d", text: "Pilot validation" }
              ],
              correctAnswer: "b",
              explanation: "IEA (Indicative Engineering Assessment) evaluates structural feasibility of a tower based on equipment configuration."
            },
            {
              id: "q2",
              question: "EME primarily evaluates:",
              type: "single",
              options: [
                { id: "a", text: "Wind loading" },
                { id: "b", text: "Structural rotation" },
                { id: "c", text: "RF exposure and compliance" },
                { id: "d", text: "Equipment geometry" }
              ],
              correctAnswer: "c",
              explanation: "EME (Electromagnetic Energy) evaluates RF exposure and compliance based on antenna configuration."
            },
            {
              id: "q3",
              question: "What must exist before IEA or EME can run meaningfully?",
              type: "single",
              options: [
                { id: "a", text: "Pilot logs" },
                { id: "b", text: "Empty site" },
                { id: "c", text: "As-built site with equipment" },
                { id: "d", text: "Approved ColoApp" }
              ],
              correctAnswer: "c",
              explanation: "IEA and EME require an as-built site with equipment present and correct catalogue metadata to produce meaningful results."
            },
            {
              id: "q4",
              question: "Which tab most directly affects IEA outcomes?",
              type: "single",
              options: [
                { id: "a", text: "Site Information" },
                { id: "b", text: "Load Sources" },
                { id: "c", text: "Reports" },
                { id: "d", text: "Documents" }
              ],
              correctAnswer: "b",
              explanation: "Load Sources is the most influential section, as every equipment toggle directly affects final calculations."
            },
            {
              id: "q5",
              question: "What happens when 'Proposed' equipment is toggled on?",
              type: "single",
              options: [
                { id: "a", text: "UI changes only" },
                { id: "b", text: "Structural calculations update" },
                { id: "c", text: "Site metadata resets" },
                { id: "d", text: "Wind parameters lock" }
              ],
              correctAnswer: "b",
              explanation: "Toggling proposed equipment on/off directly updates the structural calculations in IEA."
            },
            {
              id: "q6",
              question: "A site passing Existing but failing Existing + Proposed means:",
              type: "single",
              options: [
                { id: "a", text: "The system is incorrect" },
                { id: "b", text: "Proposed equipment adds structural load" },
                { id: "c", text: "Wind data is ignored" },
                { id: "d", text: "EME must be run instead" }
              ],
              correctAnswer: "b",
              explanation: "This is normal and expected — the proposed equipment adds structural load that exceeds safe limits."
            },
            {
              id: "q7",
              question: "Are IEA results final engineering approval?",
              type: "single",
              options: [
                { id: "a", text: "Yes" },
                { id: "b", text: "Only for small towers" },
                { id: "c", text: "No, they are indicative" },
                { id: "d", text: "Only if exported" }
              ],
              correctAnswer: "c",
              explanation: "IEA results are indicative and used for early feasibility — not a replacement for certified engineering."
            },
            {
              id: "q8",
              question: "Which user role cannot run EME?",
              type: "single",
              options: [
                { id: "a", text: "Engineer" },
                { id: "b", text: "Support Admin" },
                { id: "c", text: "Colo User" },
                { id: "d", text: "Pilot" }
              ],
              correctAnswer: "d",
              explanation: "Pilot users cannot run EME. Only Engineers, Support Admins, and Colo Users can run EME."
            },
            {
              id: "q9",
              question: "Which mistake most commonly invalidates IEA results?",
              type: "single",
              options: [
                { id: "a", text: "Too many reports" },
                { id: "b", text: "Running without equipment" },
                { id: "c", text: "Forgetting documents" },
                { id: "d", text: "Changing UI theme" }
              ],
              correctAnswer: "b",
              explanation: "Running IEA without equipment present or on incomplete data leads to misleading, invalid outputs."
            },
            {
              id: "q10",
              question: "What is the correct mindset when using IEA?",
              type: "single",
              options: [
                { id: "a", text: "Treat as final decision" },
                { id: "b", text: "Ignore failures" },
                { id: "c", text: "Use as decision guidance" },
                { id: "d", text: "Only use for visuals" }
              ],
              correctAnswer: "c",
              explanation: "IEA should be used as decision guidance for early feasibility, not as final engineering approval."
            }
          ]
        }
      },
      {
        id: "module-2",
        title: "Colo User Workflow: Rip & Replace",
        lessons: [
          {
            id: "rip-replace-intro",
            title: "What Is a Rip & Replace?",
            duration: "5 min",
            videoUrl: "https://www.youtube.com/watch?v=ZwtJNhz1aNc",
            content: `
# What Is a Rip & Replace?

A **Rip & Replace** operation involves:

- Removing existing equipment (e.g. 4G panels)
- Installing new equipment (e.g. 5G antennas)
- Assessing structural impact
- Submitting the design for engineering approval

This workflow is performed by a **Colo User** and reviewed later by an **Engineer**.

**This module covers Colo User actions only.**

Engineer review is covered in a separate module.

## Real-World Scenario

This module simulates a **real-world upgrade scenario** (e.g. 4G → 5G).
            `,
            keyTakeaways: [
              "Rip & Replace removes old equipment and installs new equipment",
              "Performed by Colo Users, reviewed by Engineers",
              "Common scenario: 4G to 5G panel upgrades"
            ]
          },
          {
            id: "key-concepts-tools",
            title: "Key Concepts & Tools",
            duration: "8 min",
            content: `
# Key Concepts & Tools

Before starting, you must understand these tools:

## Colo User Permissions

- You can **only view and modify equipment belonging to your Head Customer**
- You **cannot create engineering approvals**

## My Equipment Filter

A visual filter that:
- Highlights only your organization's equipment
- Restricts editing to permitted assets
- Prevents accidental interaction with competitor equipment

**Always enable this filter before making changes.**

## IEA (Indicative Engineering Assessment)

Used to:
- Compare **Existing vs Existing + Proposed**
- Evaluate structural impact of your changes
- Determine whether a design is viable before submission
            `,
            keyTakeaways: [
              "Colo Users can only modify their organization's equipment",
              "My Equipment Filter prevents editing restricted assets",
              "IEA assesses structural impact before submission"
            ],
            warnings: [
              "Always enable My Equipment Filter before making changes"
            ]
          },
          {
            id: "phase-1-setup",
            title: "Phase 1: Application Setup",
            duration: "6 min",
            content: `
# Phase 1: Application Setup

## Step-by-Step

1. Start from the **default scene** of the site
2. Click **Create Application** (left menu)
3. Enter a descriptive name
   - Example: *"Rip and Replace – Site Name"*
4. Click **Accept**

## Initialization

A **green progress bar** appears at the top of the screen.

⚠️ **Do not proceed until the bar disappears.**

Background tasks must complete first.
            `,
            keyTakeaways: [
              "Start from the default scene",
              "Wait for green progress bar to finish before proceeding",
              "Background initialization must complete first"
            ],
            warnings: [
              "Proceeding before initialization completes can corrupt the session"
            ]
          },
          {
            id: "phase-2-filter",
            title: "Phase 2: Equipment Visibility (The Filter)",
            duration: "5 min",
            content: `
# Phase 2: Equipment Visibility (The Filter)

Before modifying anything:

1. Toggle **My Equipment Filter ON**
2. Verify that only your equipment is highlighted
3. Confirm distinct colouring and full manufacturer details

## Without the Filter

- You may see limited data
- You risk selecting restricted equipment

💡 **Tip**: If you click equipment without the filter:
- Manufacturer details may be hidden
- Editing may be restricted
            `,
            keyTakeaways: [
              "Enable My Equipment Filter before editing",
              "Filter ensures you only edit permitted equipment",
              "Without filter, manufacturer details may be hidden"
            ]
          },
          {
            id: "phase-3-rip",
            title: "Phase 3: The 'Rip' (Removing Equipment)",
            duration: "8 min",
            content: `
# Phase 3: The "Rip" (Removing Old Equipment)

## Steps

1. Enable the **Selector Tool** (arrow icon)
2. Select the equipment to be removed (e.g. existing 4G panel)
3. Click **Edit**
4. When prompted, **Add Layer**
   - Name example: *"Replace 5G Upgrade"*
5. Click **Accept**
6. Click **Delete Equipment** (trash icon)

The selected equipment is now removed from the digital twin.

⚠️ **Important**: Removing equipment does **not** finalize the change until submission.

## Why Layers Matter

Adding a layer is required to:
- Track the change request
- Organize modifications
- Maintain change history
            `,
            keyTakeaways: [
              "Use Selector Tool to select equipment",
              "Adding a layer tracks the change request",
              "Changes are not finalized until submission"
            ]
          },
          {
            id: "phase-4-replace",
            title: "Phase 4: The 'Replace' (Installing Equipment)",
            duration: "10 min",
            content: `
# Phase 4: The "Replace" (Installing New Equipment)

## Steps

1. Open **Proposed Equipment → BIM Catalog**
2. Search by:
   - Manufacturer (e.g. Ericsson)
   - Model (e.g. AIR3227)
3. Select the model and **add to scene**

## Positioning & Alignment

- Use **Translate Tools** to move equipment
- Use **Orientation Tools** to set azimuth/bearing
- Ensure no clashes with mounts or other antennas

## Optional

Rename the equipment for clarity
- Example: *AIR3227-upgrade-5g*

## Save Draft

Click **Save Draft** to commit changes in the session.
            `,
            keyTakeaways: [
              "Search BIM Catalog by manufacturer and model",
              "Use Translate and Orientation tools for positioning",
              "Save Draft commits changes in the session"
            ]
          },
          {
            id: "phase-5-iea",
            title: "Phase 5: Engineering Assessment (IEA)",
            duration: "6 min",
            content: `
# Phase 5: Engineering Assessment (IEA)

1. Expand **IEA** in the left menu
2. Click **Calculate**
3. Review the results table:
   - **Existing %**
   - **Existing + Proposed %**

Ensure the proposed design remains within acceptable limits.

⚠️ **IEA is indicative only.**
            `,
            keyTakeaways: [
              "Run IEA to assess structural impact",
              "Review Existing vs Existing + Proposed percentages",
              "IEA provides indicative assessment, not final approval"
            ],
            warnings: [
              "IEA is indicative only—not a replacement for certified engineering"
            ]
          },
          {
            id: "phase-6-submission",
            title: "Phase 6: Confirmation & Submission",
            duration: "8 min",
            content: `
# Phase 6: Confirmation & Submission

## Confirm Design

1. Click **Confirm Design**
2. You will be redirected to the **ColoApp Manager**
3. Sign in if required

## Review Application

- Locate your application using **Application ID**
- Review equipment transactions:
  - Old equipment → **Remove**
  - New equipment → **Add**

## Submit

1. Click **Submit**
2. Confirm by clicking **Yes**
3. Verify success message

## Post-Submission Status

After submission:
- The application is **read-only**
- You can view but **cannot edit**
- The design moves to **Engineering Review**
- You must wait for approval or feedback
            `,
            keyTakeaways: [
              "Confirm Design redirects to ColoApp Manager",
              "Review all transactions before submitting",
              "After submission, application becomes read-only"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "A Rip & Replace workflow is used to:",
              type: "single",
              options: [
                { id: "a", text: "Capture sites" },
                { id: "b", text: "Remove old equipment and install new equipment" },
                { id: "c", text: "Run EME only" },
                { id: "d", text: "Create BIM models" }
              ],
              correctAnswer: "b",
              explanation: "Rip & Replace is used to remove old equipment and install new equipment, typically for upgrades like 4G to 5G."
            },
            {
              id: "q2",
              question: "Which filter restricts editing to your organization's equipment?",
              type: "single",
              options: [
                { id: "a", text: "Site Filter" },
                { id: "b", text: "My Equipment Filter" },
                { id: "c", text: "Layer Filter" },
                { id: "d", text: "Proposed Filter" }
              ],
              correctAnswer: "b",
              explanation: "My Equipment Filter restricts visibility and editing to equipment belonging to your organization."
            },
            {
              id: "q3",
              question: "What must you wait for after creating an application?",
              type: "single",
              options: [
                { id: "a", text: "IEA results" },
                { id: "b", text: "Green progress bar to finish" },
                { id: "c", text: "Engineer approval" },
                { id: "d", text: "CSV upload" }
              ],
              correctAnswer: "b",
              explanation: "You must wait for the green progress bar to finish, indicating background initialization tasks are complete."
            },
            {
              id: "q4",
              question: "Deleting equipment without adding a layer:",
              type: "single",
              options: [
                { id: "a", text: "Is allowed" },
                { id: "b", text: "Is not permitted" },
                { id: "c", text: "Auto-submits" },
                { id: "d", text: "Triggers IEA" }
              ],
              correctAnswer: "b",
              explanation: "Adding a layer is required before deleting equipment to track the change request."
            },
            {
              id: "q5",
              question: "What should you do after installing new equipment?",
              type: "single",
              options: [
                { id: "a", text: "Submit immediately" },
                { id: "b", text: "Save Draft" },
                { id: "c", text: "Run EME" },
                { id: "d", text: "Exit viewer" }
              ],
              correctAnswer: "b",
              explanation: "After installing new equipment, you should Save Draft to commit changes in the session."
            },
            {
              id: "q6",
              question: "What does IEA compare?",
              type: "single",
              options: [
                { id: "a", text: "RF exposure" },
                { id: "b", text: "Existing vs Existing + Proposed" },
                { id: "c", text: "Pilot logs" },
                { id: "d", text: "Equipment catalogues" }
              ],
              correctAnswer: "b",
              explanation: "IEA compares Existing (current state) vs Existing + Proposed (with new equipment) to assess structural impact."
            },
            {
              id: "q7",
              question: "After submission, the application is:",
              type: "single",
              options: [
                { id: "a", text: "Editable" },
                { id: "b", text: "Read-only" },
                { id: "c", text: "Archived" },
                { id: "d", text: "Deleted" }
              ],
              correctAnswer: "b",
              explanation: "After submission, the application becomes read-only and moves to Engineering Review."
            },
            {
              id: "q8",
              question: "Who reviews the workflow after submission?",
              type: "single",
              options: [
                { id: "a", text: "Pilot" },
                { id: "b", text: "Engineering team" },
                { id: "c", text: "Colo User" },
                { id: "d", text: "System automatically" }
              ],
              correctAnswer: "b",
              explanation: "The Engineering team reviews the submitted workflow for approval."
            }
          ]
        }
      },
      {
        id: "module-3",
        title: "Engineer Review & Approval Workflow",
        lessons: [
          {
            id: "engineering-control",
            title: "What Changes When Engineering Takes Control",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=9xquCESbNW0",
            content: `
# What Changes When Engineering Takes Control

## Engineering Accountability

When a Colo User submits a Colo App, NexDT transitions the application into an **engineering-controlled state**.

At this point:
- The Colo User **can no longer edit**
- The proposal is treated as a **design candidate**
- The Engineer is responsible for:
  - Structural plausibility
  - Modelling accuracy
  - Consistency with SiteSee processing requirements
  - Preventing downstream failures (IEA, EME, 3D reconstruction)

## What Approval Actually Means

Engineering approval does **not** mean "looks OK".

It means **"this design is safe, processable, and defensible."**

## Two Distinct Phases

The Colo App workflow has two distinct phases:

1. **Proposal phase** (Colo User)
2. **Validation & approval phase** (Engineer)

Once an application is submitted:
- The proposal is **frozen**
- Ownership transfers to Engineering
- The system assumes **engineering accountability**

Nothing beyond this point is "suggestive" — it is **authoritative**.
            `,
            keyTakeaways: [
              "Submitted applications transfer ownership to Engineering",
              "Approval means the design is safe, processable, and defensible",
              "Engineers are responsible for structural and modelling accuracy"
            ]
          },
          {
            id: "locating-coloapp",
            title: "Locating a Submitted Colo App Correctly",
            duration: "8 min",
            content: `
# Locating a Submitted Colo App Correctly

## Why This Matters

Engineers must always **orient themselves before editing**.

There are **two visual contexts** in NexDT:
- **Default Scene** → the current as-built baseline
- **Colo App Scene** → the proposed changes

Failing to distinguish these can lead to:
- Approving unintended changes
- Missing removed equipment
- Misinterpreting scope

## Correct Review Sequence

1. Search for the site
2. Open the **default scene**
3. Visually understand the baseline
4. Switch to the **specific Colo App**
5. Compare what has changed

**This comparison step is where most engineering insight happens.**
            `,
            keyTakeaways: [
              "Always review default scene first to establish baseline",
              "Default Scene vs Colo App Scene are different contexts",
              "Comparison reveals the actual changes being proposed"
            ]
          },
          {
            id: "visual-audit",
            title: "Visual Engineering Audit",
            duration: "12 min",
            content: `
# Visual Engineering Audit (What Engineers Look For)

## A visual audit is not cosmetic.

Engineers should actively look for:
- Missing panels or mounts
- Incorrect antenna orientation (azimuth)
- Physical clashes between equipment
- Equipment floating, intersecting, or misaligned
- Inconsistent spacing or unrealistic mounting positions

## The Critical Question

Ask yourself:

**"Would this configuration make sense on a real structure?"**

If the answer is unclear — the design needs correction.
            `,
            keyTakeaways: [
              "Visual audit checks physical plausibility",
              "Look for clashes, misalignment, and floating equipment",
              "Design must make sense on a real structure"
            ]
          },
          {
            id: "engineering-edits",
            title: "Engineering Edits (Override Workflow)",
            duration: "10 min",
            content: `
# Engineering Edits (Override Workflow Explained)

## Authority & Responsibility

Engineers are **allowed to edit submitted applications**.

This is intentional.

**Why?**
- Colo Users propose **intent**
- Engineers enforce **feasibility**

## Common Engineering Edits

- Adding missing equipment
- Correcting placement or orientation
- Aligning models with SiteSee processing constraints

These edits are **authoritative, not collaborative**.

## How Overrides Work

1. Engineer enters **Edit Mode**
2. Modifies the submitted application directly
3. Changes are tracked automatically
4. **No new application is created**

This ensures:
- Single source of truth
- Clear accountability
- Clean transaction logs
            `,
            keyTakeaways: [
              "Engineers can edit submitted applications directly",
              "Common edits: adding equipment, correcting placement",
              "No new application created—maintains single source of truth"
            ]
          },
          {
            id: "confirm-design-trigger",
            title: "The 'Confirm Design' Trigger",
            duration: "8 min",
            content: `
# The "Confirm Design" Trigger (System Behaviour)

## Critical Rule

NexDT contains a **non-obvious but critical rule**:

**Saving changes to a submitted Colo App automatically triggers Confirm Design.**

## What This Means

- You **cannot** "quietly tweak" a design
- Every engineering change must be explicitly reviewed and approved
- The system enforces **conscious decision-making**

## What This Prevents

- Accidental approvals
- Unreviewed overrides
- Silent engineering liability
            `,
            keyTakeaways: [
              "Saving edits on submitted apps triggers Confirm Design",
              "Prevents quiet tweaks—enforces explicit review",
              "Every engineering change requires conscious approval"
            ],
            warnings: [
              "You cannot quietly edit without triggering confirmation workflow"
            ]
          },
          {
            id: "final-approval",
            title: "Final Approval & Transaction Review",
            duration: "10 min",
            content: `
# Final Approval & Transaction Review

## What Approval Really Means

Final approval is the **last gate**.

Before approving, Engineers must review:
- **Application status** (must be Submitted)
- **Transaction logs** (Add / Remove actions)
- **Consistency** between scene and logs

## Why Transaction Logs Are Critical

Transaction logs:
- Become part of **audit trails**
- Affect **reporting**
- Represent **real-world changes**

## What Happens After Approval

Once approved:
- The **digital twin is updated**
- The design becomes **authoritative**
- Downstream tools (IEA, EME, reporting) **rely on this data**
- Any further changes require a **new application**

**Engineering approval carries real operational consequences.**
            `,
            keyTakeaways: [
              "Verify status and transaction logs before approval",
              "Transaction logs become part of audit trails",
              "Approval updates digital twin and affects downstream systems"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "Why does NexDT lock the application after submission?",
              type: "single",
              options: [
                { id: "a", text: "To improve performance" },
                { id: "b", text: "To enforce a clear handover of responsibility" },
                { id: "c", text: "To prevent accidental deletions" },
                { id: "d", text: "To speed up approvals" }
              ],
              correctAnswer: "b",
              explanation: "Locking enforces a clear handover of responsibility from Colo User to Engineering team."
            },
            {
              id: "q2",
              question: "Why should Engineers inspect the default scene first?",
              type: "single",
              options: [
                { id: "a", text: "To unlock editing" },
                { id: "b", text: "To establish a mental baseline before reviewing changes" },
                { id: "c", text: "To recalculate IEA" },
                { id: "d", text: "To check user permissions" }
              ],
              correctAnswer: "b",
              explanation: "Inspecting the default scene establishes a mental baseline to understand what changes are being proposed."
            },
            {
              id: "q3",
              question: "Which issue would most likely require an engineering edit?",
              type: "single",
              options: [
                { id: "a", text: "Slight colour differences" },
                { id: "b", text: "Equipment intersecting a mount or structure" },
                { id: "c", text: "Long application name" },
                { id: "d", text: "Missing description text" }
              ],
              correctAnswer: "b",
              explanation: "Equipment intersecting a mount or structure is a physical impossibility that requires correction."
            },
            {
              id: "q4",
              question: "Why does NexDT allow Engineers to override submissions?",
              type: "single",
              options: [
                { id: "a", text: "For convenience" },
                { id: "b", text: "To enforce engineering correctness and accountability" },
                { id: "c", text: "To speed up Colo User workflows" },
                { id: "d", text: "To reduce documentation" }
              ],
              correctAnswer: "b",
              explanation: "Engineers enforce feasibility and correctness while Colo Users propose intent."
            },
            {
              id: "q5",
              question: "Why does NexDT force Confirm Design after engineering edits?",
              type: "single",
              options: [
                { id: "a", text: "To slow engineers down" },
                { id: "b", text: "To ensure intentional final approval of changes" },
                { id: "c", text: "To re-run modelling" },
                { id: "d", text: "To notify Colo Users" }
              ],
              correctAnswer: "b",
              explanation: "The system enforces conscious decision-making to prevent accidental approvals and unreviewed overrides."
            },
            {
              id: "q6",
              question: "What is the most important thing to verify before approval?",
              type: "single",
              options: [
                { id: "a", text: "UI layout" },
                { id: "b", text: "Transaction logs accurately reflect changes" },
                { id: "c", text: "File sizes" },
                { id: "d", text: "User roles" }
              ],
              correctAnswer: "b",
              explanation: "Transaction logs become part of audit trails and represent real-world changes."
            },
            {
              id: "q7",
              question: "An Engineer adds a missing antenna, saves, and is redirected to Confirm Design. What should they do?",
              type: "single",
              options: [
                { id: "a", text: "Navigate back without approving" },
                { id: "b", text: "Review logs carefully, then approve if correct" },
                { id: "c", text: "Ask the Colo User to resubmit" },
                { id: "d", text: "Cancel the application" }
              ],
              correctAnswer: "b",
              explanation: "The Engineer should review transaction logs to verify the changes are correct before approving."
            }
          ]
        }
      },
      {
        id: "module-4",
        title: "BIM Admin Tooling & Equipment Configuration",
        lessons: [
          {
            id: "bim-overview",
            title: "What the BIM Admin Tool Does",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=zShR12je8bQ",
            content: `
# What the BIM Admin Tool Does (and Does Not Do)

## Why BIM Admin Matters

BIM Admin tooling sits **upstream of almost everything**:
- Colo Users place BIM equipment
- Engineers approve designs based on BIM geometry
- EME calculations rely on BIM metadata
- Reports and exports reference BIM catalog entries

**If BIM data is wrong**:
- Models appear as "ghosts"
- EME fails silently
- Engineering decisions become unreliable

**BIM Admin errors scale fast.**

## What BIM Admin Is Responsible For

The BIM Admin tool is responsible for:
- Defining **equipment metadata**
- Linking **3D geometry** to catalog entries
- Enabling **search, placement, and analysis**

## What It Does Not Do

It does **not**:
- Render 3D previews
- Validate modelling correctness automatically
- Fix geometry problems

The tool assumes the Admin **understands 3D modelling fundamentals**.
            `,
            keyTakeaways: [
              "BIM Admin controls metadata for all equipment",
              "Errors propagate into modelling, EME, and approvals",
              "No 3D preview—verification happens in Sites Portal"
            ]
          },
          {
            id: "creating-bim",
            title: "Creating BIM Equipment (Metadata First)",
            duration: "15 min",
            content: `
# Creating BIM Equipment (Metadata First)

## Why Metadata Comes First

Every BIM equipment item begins as **metadata, not geometry**.

This metadata controls:
- Searchability
- EME configuration
- Engineering classification
- How equipment behaves in downstream tools

**Incorrect metadata = unusable equipment.**

## Required Fields Explained

### Name
A human-readable identifier. Used in search and logs.

### Manufacturer & Model
**This is critical.**
- Must **exactly match** known catalog entries
- Used for **EME configuration lookups**
- **Case and spelling sensitive**

### ESA (Effective Sail Area)
- Required for **tower-mounted equipment**
- Represents **wind loading**
- Ground equipment **must be 0**

### Type & Subtype
These control:
- Engineering categorization
- Where equipment is allowed to be placed

**Examples**:
- Type: Tower → Subtype: Panel
- Type: Ground → Subtype: Shelter

### Shape & Dimensions
Used for:
- Collision logic
- Visual scaling
- Engineering plausibility

### Tags
Tags are **not cosmetic**.

They power:
- Search
- Filtering
- Catalog usability
            `,
            keyTakeaways: [
              "Metadata defines searchability and EME configuration",
              "Manufacturer & Model must match catalog exactly",
              "ESA values required for tower equipment, 0 for ground"
            ]
          },
          {
            id: "asset-upload",
            title: "Asset Management: Uploading Files (CRITICAL)",
            duration: "12 min",
            content: `
# Asset Management: Uploading Files (Critical Section)

## This Is Where Most Failures Happen

After metadata creation, **visual assets must be uploaded**.

Two assets are required:
1. **GLB file** — the 3D geometry
2. **Thumbnail** — UI preview image

**Uploading files alone is not sufficient.**

## ⚠️ Critical Step — Linking the Mesh Reference

After uploading the GLB:

You **must** explicitly link it via:
- **Mesh Reference dropdown**
- Select the uploaded GLB

### If this step is skipped:
- Equipment appears **invisible ("ghost")**
- Geometry exists but is **not instantiated**
- Engineers **cannot validate placement**

**This is the single most common BIM Admin error.**
            `,
            keyTakeaways: [
              "Two assets required: GLB file and thumbnail",
              "MUST link Mesh Reference after uploading GLB",
              "Skipping Mesh Reference causes ghost/invisible equipment"
            ],
            warnings: [
              "Most common error: forgetting to link the Mesh Reference"
            ]
          },
          {
            id: "verification",
            title: "Verification (Why the Admin Must Test)",
            duration: "8 min",
            content: `
# Verification (Why the Admin Must Test)

## No Preview ≠ No Responsibility

The BIM Admin tool has **no 3D previewer**.

Therefore:
- Verification must happen in the **Sites Portal**
- Equipment must be **added to a real scene**
- Alignment, orientation, and scale must be **visually confirmed**

## Admins Must Validate

- **Orientation**
- **Mounting realism**
- **Scale accuracy**
- **No inverted or rotated geometry**
            `,
            keyTakeaways: [
              "BIM Admin has no 3D previewer",
              "Verify equipment in Sites Portal by adding to scene",
              "Check orientation, scale, and mounting realism"
            ]
          },
          {
            id: "eme-config",
            title: "EME Configuration (Metadata Meets Physics)",
            duration: "10 min",
            content: `
# EME Configuration (Metadata Meets Physics)

## Why This Depends on Accuracy

EME configuration is driven by:
- **Manufacturer**
- **Model**
- **Catalog matching**

## When Configured Correctly

- Port frequencies **auto-populate**
- Power ranges are **assigned**
- EME becomes **usable immediately**

## If Manufacturer / Model Mismatch

- **No config is returned**
- Equipment **cannot be evaluated**

**This failure is silent but dangerous.**
            `,
            keyTakeaways: [
              "EME config depends on exact Manufacturer/Model match",
              "Correct match auto-populates port frequencies and power",
              "Mismatch causes silent failure—no config returned"
            ]
          },
          {
            id: "deleting-equipment",
            title: "Deleting BIM Equipment (Data Retention Rules)",
            duration: "6 min",
            content: `
# Deleting BIM Equipment (Data Retention Rules)

## Important Safety Rule

Deleting BIM equipment:
- **Removes it from future use**
- Does **not** delete it from historical Colo Apps
- **Preserves audit integrity**

## What This Prevents

- Breaking historical approvals
- Corrupting reports
- Invalidating past decisions

**Deletion should be rare and intentional.**
            `,
            keyTakeaways: [
              "Deletion removes from future use only",
              "Historical data in existing applications is preserved",
              "Protects audit integrity and past approvals"
            ]
          },
          {
            id: "cad-specs",
            title: "BIM CAD Modelling Specification (Non-Negotiable)",
            duration: "12 min",
            content: `
# BIM CAD Modelling Specification (Non-Negotiable)

## Engineering Law

All BIM equipment **must** comply with these rules:

### Format
- **GLTF 2.0 (.glb) only**

### Origin
- Centered at **axis-aligned bounding box center**

### Rotation
- **Up direction** → **+Z**
- **Emitter face** → **+Y**

### Scale
- Units in **millimetres**
- Required for accurate mounts and clearances

## Violations Cause

- Misalignment
- Engineering misinterpretation
- Invalid approvals
            `,
            keyTakeaways: [
              "Format: GLTF 2.0 GLB only",
              "Up direction: +Z, Emitter face: +Y",
              "Scale: millimetres for accuracy"
            ],
            warnings: [
              "Violating these specs causes misalignment and invalid approvals"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "Why is BIM Admin tooling considered 'upstream critical'?",
              type: "single",
              options: [
                { id: "a", text: "It affects UI layout" },
                { id: "b", text: "Errors propagate into modelling, EME, and approvals" },
                { id: "c", text: "It controls user permissions" },
                { id: "d", text: "It runs reports" }
              ],
              correctAnswer: "b",
              explanation: "BIM Admin sits upstream—errors propagate into all downstream systems including modelling, EME, and approvals."
            },
            {
              id: "q2",
              question: "Why must Manufacturer & Model be accurate?",
              type: "single",
              options: [
                { id: "a", text: "For display only" },
                { id: "b", text: "To enable EME auto-configuration" },
                { id: "c", text: "For thumbnails" },
                { id: "d", text: "To unlock editing" }
              ],
              correctAnswer: "b",
              explanation: "Manufacturer & Model must match catalog exactly to enable EME auto-configuration and lookups."
            },
            {
              id: "q3",
              question: "What happens if the mesh reference is not linked?",
              type: "single",
              options: [
                { id: "a", text: "Upload fails" },
                { id: "b", text: "Equipment appears as an empty/ghost object" },
                { id: "c", text: "EME fails only" },
                { id: "d", text: "The item cannot be created" }
              ],
              correctAnswer: "b",
              explanation: "If mesh reference is not linked, equipment appears invisible or as a ghost—geometry exists but is not instantiated."
            },
            {
              id: "q4",
              question: "Where should BIM equipment be verified?",
              type: "single",
              options: [
                { id: "a", text: "In the Admin tool" },
                { id: "b", text: "In a real scene inside the Sites Portal" },
                { id: "c", text: "In the EME tool" },
                { id: "d", text: "In reports" }
              ],
              correctAnswer: "b",
              explanation: "BIM Admin has no 3D previewer, so equipment must be verified in a real scene in the Sites Portal."
            },
            {
              id: "q5",
              question: "Why might 'Get Config' return nothing?",
              type: "single",
              options: [
                { id: "a", text: "System error" },
                { id: "b", text: "Manufacturer/Model mismatch" },
                { id: "c", text: "File size too large" },
                { id: "d", text: "Missing thumbnail" }
              ],
              correctAnswer: "b",
              explanation: "Get Config returns nothing if Manufacturer/Model doesn't match a known catalog entry—this failure is silent but dangerous."
            },
            {
              id: "q6",
              question: "What happens to existing applications when BIM equipment is deleted?",
              type: "single",
              options: [
                { id: "a", text: "They break" },
                { id: "b", text: "Historical data is preserved" },
                { id: "c", text: "Equipment disappears everywhere" },
                { id: "d", text: "Engineering must reapprove" }
              ],
              correctAnswer: "b",
              explanation: "Deleting BIM equipment removes it from future use but preserves historical data in existing applications."
            },
            {
              id: "q7",
              question: "What is the correct 'up' direction for BIM models?",
              type: "single",
              options: [
                { id: "a", text: "+Y" },
                { id: "b", text: "+Z" },
                { id: "c", text: "+X" },
                { id: "d", text: "Arbitrary" }
              ],
              correctAnswer: "b",
              explanation: "The up direction must be +Z according to BIM CAD modelling specifications."
            },
            {
              id: "q8",
              question: "A BIM Admin uploads a GLB, forgets to link the mesh reference. What happens when equipment is added to a site?",
              type: "single",
              options: [
                { id: "a", text: "EME fails only" },
                { id: "b", text: "Equipment appears invisible or as a ghost" },
                { id: "c", text: "Approval auto-blocks" },
                { id: "d", text: "The model fixes itself" }
              ],
              correctAnswer: "b",
              explanation: "Forgetting to link mesh reference causes equipment to appear invisible or as a ghost—the most common BIM Admin error."
            }
          ]
        }
      },
      {
        id: "module-5",
        title: "Super Admin Console: User & Organization Management",
        lessons: [
          {
            id: "admin-console-controls",
            title: "What the Admin Console Controls",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=o5dktAxAuiE",
            content: `
# What the Admin Console Controls

## Why Super Admin Is Dangerous if Misused

The Super Admin Console controls:
- Which **Head Customers exist**
- Which users can **see, edit, and submit data**
- How **Colo Apps are attributed and approved**
- What data **persists or is destroyed**

**A single incorrect action (especially deleting an Organization) can**:
- Orphan equipment
- Break Colo Apps
- Require **manual engineering recovery**

**This role should be tightly limited.**

## Source of Truth

The NexDT Admin Console is the **source of truth** for:
- Users
- Organizations
- Role assignments
- Access boundaries

Everything downstream (Sites Portal, BIM, Colo Apps, EME) relies on **correct Admin Console setup**.

## What It Does Not Do

The console does **not**:
- Validate engineering correctness
- Recover deleted data automatically
- Warn you before destructive actions

**The system assumes intentional, informed use.**
            `,
            keyTakeaways: [
              "Admin Console defines ownership, access, and data persistence",
              "Incorrect actions can orphan equipment and break Colo Apps",
              "No automatic recovery for deleted data"
            ],
            warnings: [
              "This is the highest-risk role in the platform"
            ]
          },
          {
            id: "organization-management",
            title: "Organization Management (CRITICAL)",
            duration: "15 min",
            content: `
# Organization Management (Critical Section)

## What an Organization Really Is

An **Organization** represents a **Head Customer** in NexDT.

Organizations are used to:
- Attribute **equipment ownership**
- Restrict **Colo User visibility**
- Bind **Colo Apps to the correct customer**
- Drive **pre-As-Built and approval workflows**

**Organizations are not cosmetic labels.**

## ⚠️ CRITICAL WARNING — READ CAREFULLY

**Never delete an active Organization if**:
- Users have created equipment under it
- Colo Apps reference it
- Engineering work has occurred

### If you delete an active Organization:
- All associated **equipment is lost**
- Colo Apps become **invalid**
- Engineers must **manually reconstruct data**
- There is **no automated rollback**

**This is the highest-risk action in the platform.**
            `,
            keyTakeaways: [
              "Organizations define Head Customer ownership",
              "Deleting active organizations causes irreversible data loss",
              "No automated recovery—manual engineering fix required"
            ],
            warnings: [
              "NEVER delete an active Organization with equipment or Colo Apps"
            ]
          },
          {
            id: "creating-users",
            title: "Creating a User (Role Design Matters)",
            duration: "12 min",
            content: `
# Creating a User (Role Design Matters)

## User Creation Is Governance

Creating a user is not just "adding access" — it defines:
- What **data they can see**
- What **actions they can perform**
- Which **customer they represent**
- Which **workflows they can affect**

Errors here lead to:
- Unauthorized access
- Incorrect Colo submissions
- Compliance risk

## Required Fields Explained

### Email
- Must be valid
- Used for login + MFA
- Cannot be shared casually

### Name
- Appears in logs and approvals
- Should be descriptive and real

### NexDT Role (Primary)
Choose exactly one:
- **User** → Standard platform access
- **Engineer** → Can edit and approve Colo Apps
- **Administrator** → Full Admin Console access

*(Legacy equivalent: Support Admin)*

### Home Organization
Defines:
- Default data scope
- Primary ownership context

### Secondary Roles (If Applicable)
When assigning access to a specific Organization:
- **Colocation User**: Can submit and manage Colo Apps (restricted to own Head Customer)
- **Site Finder**: Read-only role (limited to site metadata)

**A single user can have multiple affiliations.**
            `,
            keyTakeaways: [
              "User creation defines access, permissions, and scope",
              "Organization assignment controls equipment visibility",
              "Secondary roles can be added per organization"
            ]
          },
          {
            id: "user-onboarding",
            title: "End-User Onboarding Workflow",
            duration: "10 min",
            content: `
# End-User Onboarding Workflow

## Admin Action Triggers a Chain

When you click **Save** on user creation:

1. System sends a **Welcome Email**
2. User must:
   - Confirm account
   - Set password
   - Configure MFA
3. Access is locked until onboarding is complete

**Admins are responsible for educating users on this flow.**

## End-User Steps (Must Be Followed Exactly)

1. Open email: *"Welcome to SiteSee / NexDT"*
2. Click **Confirm My Account**
3. Create a **strong password**
4. Set up **MFA**:
   - Download Microsoft Authenticator
   - Scan QR code
   - Enter one-time code
5. **Save recovery code securely**

⚠️ **If MFA device is lost and recovery code is missing, Admin intervention is required.**
            `,
            keyTakeaways: [
              "Users must confirm account, set password, and configure MFA",
              "Access locked until onboarding completes",
              "Recovery code is essential for MFA device loss"
            ],
            warnings: [
              "Lost MFA + no recovery code requires Admin intervention"
            ]
          },
          {
            id: "admin-analytics",
            title: "Admin Console Tools & Analytics",
            duration: "8 min",
            content: `
# Admin Console Tools & Analytics

## Visibility ≠ Surveillance

The Admin Console provides visibility into:
- **Login count**
- **Last login date**
- **Last IP address**

### This data is for:
- Security auditing
- Support troubleshooting
- Access validation

### It should NOT be used for:
- Performance monitoring
- Behavioral tracking
- Informal oversight

**Admins must handle analytics professionally and minimally.**

## User Creation Flow

Understanding this flow allows Admins to:
- Diagnose access issues
- Resolve "I can't see my equipment" complaints
- Prevent misconfigured users

**Admins should always think in flows, not screens.**
            `,
            keyTakeaways: [
              "Analytics for security auditing and troubleshooting only",
              "Not for performance monitoring or behavioral tracking",
              "Think in flows to diagnose access issues"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "Why is the Admin Console considered system-critical?",
              type: "single",
              options: [
                { id: "a", text: "It controls UI layout" },
                { id: "b", text: "It defines ownership, access, and data persistence" },
                { id: "c", text: "It runs engineering tools" },
                { id: "d", text: "It generates reports" }
              ],
              correctAnswer: "b",
              explanation: "The Admin Console defines ownership, access boundaries, and data persistence—everything downstream relies on correct setup."
            },
            {
              id: "q2",
              question: "What happens if an active Organization is deleted?",
              type: "single",
              options: [
                { id: "a", text: "Users lose access only" },
                { id: "b", text: "Equipment and ownership data are lost" },
                { id: "c", text: "Colo Apps auto-reassign" },
                { id: "d", text: "The system blocks deletion" }
              ],
              correctAnswer: "b",
              explanation: "Deleting an active Organization causes irreversible equipment and ownership data loss—no automated rollback exists."
            },
            {
              id: "q3",
              question: "What determines which equipment a Colo User can edit?",
              type: "single",
              options: [
                { id: "a", text: "Their email domain" },
                { id: "b", text: "Their Organization assignment" },
                { id: "c", text: "Their login frequency" },
                { id: "d", text: "Their password strength" }
              ],
              correctAnswer: "b",
              explanation: "Organization assignment determines which equipment a Colo User can see and edit."
            },
            {
              id: "q4",
              question: "What is the recovery code used for?",
              type: "single",
              options: [
                { id: "a", text: "Password reset" },
                { id: "b", text: "Regaining access if MFA device is lost" },
                { id: "c", text: "Admin verification" },
                { id: "d", text: "Organization switching" }
              ],
              correctAnswer: "b",
              explanation: "The recovery code allows users to regain access if their MFA device is lost."
            },
            {
              id: "q5",
              question: "What is the correct use of login analytics?",
              type: "single",
              options: [
                { id: "a", text: "Tracking productivity" },
                { id: "b", text: "Security and troubleshooting" },
                { id: "c", text: "Ranking users" },
                { id: "d", text: "Activity enforcement" }
              ],
              correctAnswer: "b",
              explanation: "Login analytics should be used professionally for security auditing and troubleshooting only."
            },
            {
              id: "q6",
              question: "An Admin deletes an Organization to 'clean things up,' unaware that equipment was created under it. What happens?",
              type: "single",
              options: [
                { id: "a", text: "The system blocks deletion" },
                { id: "b", text: "Equipment auto-moves to another org" },
                { id: "c", text: "Equipment data is lost and must be manually repaired" },
                { id: "d", text: "Nothing happens" }
              ],
              correctAnswer: "c",
              explanation: "Equipment data is lost and requires manual engineering repair—this is the highest-risk action in the platform."
            }
          ]
        }
      },
      {
        id: "module-6",
        title: "Existing vs Proposed Equipment",
        lessons: [
          {
            id: "equipment-layers",
            title: "Equipment Layers",
            duration: "12 min",
            content: `
# Existing vs Proposed Equipment

## Existing Equipment Logic

**Existing Equipment** represents current site conditions:
- Already installed on the tower
- Contributes to baseline structural load
- Cannot be modified (only removed or replaced)

### Viewing Existing Equipment
1. Ensure **Existing Equipment** layer is toggled ON
2. Use filters to show specific types (panels, dishes, etc.)

## Proposed Equipment Layer Activation

**Proposed Equipment** represents changes in your application:
- New equipment to be added
- Appears in a different visual layer

### Activating Proposed Layer
1. Toggle **Proposed Equipment** layer ON
2. Equipment appears with distinct visual styling (e.g., green overlay)
3. Both Existing and Proposed can be visible simultaneously

## How NexDT Calculates Combined Load

When you run IEA:
- **Existing**: Baseline load
- **Proposed**: Additional load from new equipment
- **Removed**: Subtract load from deleted equipment

**Formula**:
Combined Load = Existing + Proposed - Removed

## Visual Validation in 3D

### Best Practices
1. **Toggle layers** to compare before/after states
2. **Rotate view** to check for collisions
3. **Verify mounting points** are correct
4. **Check clearances** between equipment

### Visual Indicators
- **Green**: Proposed equipment (to be added)
- **Red**: Equipment to be removed
- **White/Gray**: Existing equipment (unchanged)
            `,
            keyTakeaways: [
              "Existing equipment = current site baseline",
              "Proposed equipment = new additions in your application",
              "Combined Load = Existing + Proposed - Removed"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What does the Proposed Equipment layer show?",
              type: "single",
              options: [
                { id: "a", text: "Currently installed equipment" },
                { id: "b", text: "New equipment to be added in the application" },
                { id: "c", text: "Deleted equipment" },
                { id: "d", text: "BIM catalog library" }
              ],
              correctAnswer: "b",
              explanation: "The Proposed Equipment layer shows new equipment that will be added as part of the colocation application."
            },
            {
              id: "q2",
              question: "How is combined load calculated for IEA?",
              type: "single",
              options: [
                { id: "a", text: "Existing only" },
                { id: "b", text: "Proposed only" },
                { id: "c", text: "Existing + Proposed - Removed" },
                { id: "d", text: "Proposed - Existing" }
              ],
              correctAnswer: "c",
              explanation: "Combined load is calculated as: Existing + Proposed - Removed equipment."
            }
          ]
        }
      },
      {
        id: "module-7",
        title: "CSV Uploads & Data Validation",
        lessons: [
          {
            id: "csv-upload-overview",
            title: "CSV Upload Overview",
            duration: "15 min",
            videoUrl: "https://www.youtube.com/watch?v=_7Ei5A3sYNQ",
            content: `
# CSV Uploads & Data Validation

## Asbuilt CSV Purpose

The **Asbuilt CSV Uploader** allows bulk data import for equipment records:
- Upload equipment inventory
- Align data with 3D site model
- Maintain accurate equipment metadata

## Upload Process

1. **Download Template**: Get existing asbuilt_equipment.csv
2. **Prepare Data**: Fill in equipment records
3. **Upload File**: Drag and drop CSV into uploader
4. **Validation**: System checks for errors
5. **Review Report**: Address any validation errors
6. **Apply Data**: Confirm and apply validated records

## Validation Rules

### Mandatory Fields
- name, type, elevation, x, y, manufacturer, model-number, head customer, Head Customer ID

### Data Types
- Numeric fields must contain only numbers
- Enums must match allowed values

### Uniqueness
- Equipment names must be unique within the site

## Common Upload Errors

### E1001: Invalid File Type
- Ensure file is .csv format

### E1102: Missing Column Headers
- Copy exact headers from template

### E1103: Invalid Data Type
- Check numeric columns contain only numbers

### E2001: Duplicate Names
- Remove duplicate equipment names

### E2005: Head Customer Mismatch (FATAL)
- Head Customer Name and ID must be consistent

## Fixing Failures

1. **Review validation report**
2. **Identify error codes**
3. **Correct data in CSV**
4. **Re-upload fixed file**
            `,
            keyTakeaways: [
              "CSV uploads enable bulk equipment data import",
              "Validation rules ensure data quality",
              "E2005 (Head Customer mismatch) is a FATAL error"
            ],
            warnings: [
              "Tower equipment type is NOT supported—remove tower rows before upload"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "Which equipment type is NOT supported in CSV uploads?",
              type: "single",
              options: [
                { id: "a", text: "panel" },
                { id: "b", text: "dish" },
                { id: "c", text: "tower" },
                { id: "d", text: "rru" }
              ],
              correctAnswer: "c",
              explanation: "The 'tower' equipment type is NOT supported. Remove any tower rows from your CSV before uploading."
            },
            {
              id: "q2",
              question: "What does error code E2005 indicate?",
              type: "single",
              options: [
                { id: "a", text: "Missing file" },
                { id: "b", text: "Mismatched Head Customer Name and ID" },
                { id: "c", text: "Invalid file format" },
                { id: "d", text: "Network error" }
              ],
              correctAnswer: "b",
              explanation: "E2005 is a FATAL error indicating that Head Customer Name and ID are not consistent across equipment records."
            }
          ]
        }
      },
      {
        id: "module-8",
        title: "Reviewing Models & Measurements",
        lessons: [
          {
            id: "measuring-assets",
            title: "Measuring Assets",
            duration: "12 min",
            content: `
# Reviewing Models & Measurements

## Measuring Assets

NexDT provides measurement tools for validating equipment geometry:

### Distance Tool
1. Select **Measure Distance**
2. Click start point
3. Click end point
4. View measurement in meters/feet

### Angle Tool
1. Select **Measure Angle**
2. Click three points to define angle
3. View angle in degrees

## Using Annotations

**Annotations** are visual markers for documenting:
- Equipment positions
- Clearance measurements
- Notes for engineering review

### Creating Annotations
1. Click **Add Annotation**
2. Click location on 3D model
3. Enter text description
4. Save annotation

## Validating Geometry

### Verification Checklist
- [ ] Equipment is correctly positioned
- [ ] Mounting elevation matches spec
- [ ] No collisions with existing equipment
- [ ] Clearances meet requirements

## Understanding Tolerances

### Measurement Accuracy
- **3D Model Accuracy**: ±5cm typical
- **Annotation Precision**: Subject to user placement
- **Equipment Alignment**: Verify with physical site data

### When to Flag Discrepancies
- Measurements differ by > 10cm from expected
- Equipment appears misaligned in model
- Structural elements don't match site photos
            `,
            keyTakeaways: [
              "Use measurement tools to validate equipment placement",
              "Annotations document key information for review",
              "Verify measurements against physical site data"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What is the primary purpose of the measurement tools?",
              type: "single",
              options: [
                { id: "a", text: "To delete equipment" },
                { id: "b", text: "To validate equipment geometry and placement" },
                { id: "c", text: "To upload CSV files" },
                { id: "d", text: "To change user roles" }
              ],
              correctAnswer: "b",
              explanation: "Measurement tools are used to validate equipment geometry, positions, and clearances in the 3D model."
            },
            {
              id: "q2",
              question: "What is a typical accuracy tolerance for 3D model measurements?",
              type: "single",
              options: [
                { id: "a", text: "±1mm" },
                { id: "b", text: "±5cm" },
                { id: "c", text: "±1m" },
                { id: "d", text: "±10m" }
              ],
              correctAnswer: "b",
              explanation: "3D model measurements typically have an accuracy of ±5cm."
            }
          ]
        }
      }
    ]
  },
  {
    id: "fundamentals",
    title: "NexDT Fundamentals",
    description: "Master the core concepts of NexDT, including navigation, site management, and basic workflows essential for all users.",
    duration: "45 min",
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    modules: [
      {
        id: "intro",
        title: "Introduction to NexDT",
        lessons: [
          {
            id: "what-is-nexdt",
            title: "What is NexDT?",
            duration: "5 min",
            content: `
# What is NexDT?

NexDT is SiteSee's powerful digital twin platform designed for telecommunications infrastructure management. It enables you to:

- **Visualize** tower sites in immersive 3D environments
- **Manage** equipment data and colocation applications
- **Collaborate** across teams with role-based access
- **Analyze** structural and EME (Electromagnetic Energy) impacts

## Key Benefits

1. **Accuracy**: Work with precise 3D models captured from real-world sites
2. **Efficiency**: Streamline colocation workflows and reduce site visits
3. **Collaboration**: Enable multiple stakeholders to work on the same digital asset
4. **Compliance**: Generate reports and maintain audit trails

## Platform Components

- **Sites Portal**: Main interface for viewing and editing sites
- **BIM Admin**: Manage your equipment library
- **Admin Console**: User and organization management
- **ColoApp Manager**: Review and approve colocation applications
            `,
            keyTakeaways: [
              "NexDT is a digital twin platform for telecom infrastructure",
              "Supports visualization, management, and collaboration",
              "Includes multiple components for different workflows"
            ]
          },
          {
            id: "user-roles",
            title: "Understanding User Roles",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/watch?v=o5dktAxAuiE",
            content: `
# User Roles in NexDT

NexDT uses a role-based access control system to ensure users have appropriate permissions.

## Available Roles

### Colo User
- View sites and equipment belonging to their Head Customer
- Create and submit colocation applications
- Use the "My Equipment" filter to identify owned assets

### Engineer
- Review submitted colocation applications
- Make engineering edits to designs
- Approve or reject applications
- Access structural analysis tools

### Administrator
- Full system access
- Manage users and organizations
- Configure BIM library
- Generate static authentication links

## Organizations

Organizations (Head Customers) determine which equipment a Colo User can access. This is configured during the pre-asbuilt workflow.
            `,
            keyTakeaways: [
              "Three main roles: Colo User, Engineer, Administrator",
              "Organizations determine equipment access",
              "Role assignment is managed through Admin Console"
            ],
            warnings: [
              "Deleting an organization removes access to all associated equipment"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What is the primary purpose of NexDT?",
              type: "single",
              options: [
                { id: "a", text: "Email management" },
                { id: "b", text: "Digital twin platform for telecom infrastructure" },
                { id: "c", text: "Social media management" },
                { id: "d", text: "Video editing software" }
              ],
              correctAnswer: "b",
              explanation: "NexDT is SiteSee's digital twin platform specifically designed for telecommunications infrastructure management."
            },
            {
              id: "q2",
              question: "Which role can approve colocation applications?",
              type: "single",
              options: [
                { id: "a", text: "Colo User" },
                { id: "b", text: "Engineer" },
                { id: "c", text: "Viewer" },
                { id: "d", text: "Guest" }
              ],
              correctAnswer: "b",
              explanation: "Engineers have the authority to review, edit, and approve or reject colocation applications."
            },
            {
              id: "q3",
              question: "What determines which equipment a Colo User can access?",
              type: "single",
              options: [
                { id: "a", text: "Their email address" },
                { id: "b", text: "Their organization (Head Customer)" },
                { id: "c", text: "The time of day" },
                { id: "d", text: "Their login count" }
              ],
              correctAnswer: "b",
              explanation: "Organizations (Head Customers) determine equipment access. This is configured during the pre-asbuilt workflow."
            }
          ]
        }
      }
    ]
  },
  {
    id: "colo-workflows",
    title: "Colocation Workflows",
    description: "Learn the complete colocation application process from creation to approval, including the Rip and Replace workflow.",
    duration: "60 min",
    color: "bg-emerald-600",
    bgColor: "bg-emerald-50",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    modules: [
      {
        id: "colo-user-workflow",
        title: "Colo User Workflow",
        lessons: [
          {
            id: "rip-replace-overview",
            title: "Rip and Replace Overview",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=ZwtJNhz1aNc",
            content: `
# Rip and Replace Workflow

The Rip and Replace workflow allows Colo Users to propose equipment upgrades, such as replacing 4G panels with 5G equipment.

## Workflow Overview

1. **Create Application** - Start a new colocation application
2. **Identify Equipment** - Use the My Equipment filter
3. **Remove Old Equipment** - "Rip" existing panels
4. **Add New Equipment** - "Replace" with new BIM equipment
5. **Run IEA Analysis** - Check structural impact
6. **Submit for Approval** - Send to engineering team

## Key Concepts

### My Equipment Filter
As a Colo User, you can only modify equipment belonging to your Head Customer. The "My Equipment" filter highlights your assets.

### BIM Catalog
Search and add equipment from the BIM library. Equipment must be properly configured in the BIM Admin tool.

### IEA (Indicative Engineering Assessment)
Calculates the structural usage before and after your proposed changes. This is indicative only and helps validate your design.
            `,
            keyTakeaways: [
              "Colo Users create applications to propose equipment changes",
              "Use My Equipment filter to identify owned assets",
              "IEA provides indicative structural analysis"
            ],
            warnings: [
              "Wait for the green progress bar to disappear before proceeding",
              "Equipment must be attached to the tower - no floating equipment allowed"
            ]
          },
          {
            id: "creating-coloapp",
            title: "Creating a Colocation Application",
            duration: "12 min",
            videoUrl: "https://www.youtube.com/watch?v=ZwtJNhz1aNc",
            content: `
# Creating a Colocation Application

## Step-by-Step Process

### Phase 1: Application Setup
1. Navigate to the site's Default Scene
2. Click "Create Application" in the left menu
3. Enter a descriptive name (e.g., "Rip and Replace [Site Name]")
4. Click Accept and wait for initialization

**Important:** A green progress bar indicates background tasks are running. Wait until it disappears before proceeding.

### Phase 2: Using the Equipment Filter
1. Toggle on "My Equipment Filter" in the left menu
2. This highlights only equipment belonging to your Head Customer
3. Other equipment appears with limited information

### Phase 3: Removing Equipment ("Rip")
1. Enable the Selector Tool and click the panel to remove
2. Click "Edit" to enter Edit Mode
3. Add a Layer with a descriptive name
4. Click "Delete Equipment" to remove the selected panel

### Phase 4: Adding New Equipment ("Replace")
1. Open Proposed Equipment > BIM Catalog
2. Search for the new equipment model
3. Add it to the scene
4. Use Transform tools to position correctly
5. Use Orientation tools to set the bearing
6. Rename the equipment if desired
7. Click "Save Draft"
            `,
            keyTakeaways: [
              "Always wait for the green progress bar to complete",
              "Use layers to organize your changes",
              "Transform and orientation tools help precise placement"
            ]
          },
          {
            id: "submitting-coloapp",
            title: "Submitting for Approval",
            duration: "8 min",
            content: `
# Submitting Your Application

## Running the IEA Assessment

Before submitting, run the Indicative Engineering Assessment:

1. Expand the IEA menu on the left
2. Click "Calculate"
3. Review the results comparing Existing vs Proposed usage

**Note:** This is indicative only and helps validate your design meets safety limits.

## Confirming and Submitting

### Confirm Design
1. Click "Confirm Design" in the left menu
2. You'll be redirected to the ColoApp Manager

### Review Your Application
1. Locate your application by Application ID
2. Review the Equipment list at the bottom
3. Verify "Add" and "Remove" actions are correct

### Submit
1. Click "Submit" in the top right corner
2. Confirm by clicking "Yes"
3. Look for "Successfully Submitted" message

## Post-Submission Status

Once submitted:
- The application becomes **read-only**
- You can view but cannot edit
- The design goes to the Engineering team for review
            `,
            keyTakeaways: [
              "Run IEA to check structural impact before submitting",
              "Verify all changes in ColoApp Manager before final submission",
              "Submitted applications are read-only until approved or returned"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What should you do before proceeding after creating a new colocation application?",
              type: "single",
              options: [
                { id: "a", text: "Immediately start adding equipment" },
                { id: "b", text: "Wait for the green progress bar to disappear" },
                { id: "c", text: "Log out and log back in" },
                { id: "d", text: "Contact support" }
              ],
              correctAnswer: "b",
              explanation: "The green progress bar indicates background tasks are running. Wait until it disappears before proceeding to avoid errors."
            },
            {
              id: "q2",
              question: "What does the 'My Equipment Filter' do?",
              type: "single",
              options: [
                { id: "a", text: "Deletes all equipment" },
                { id: "b", text: "Shows only equipment belonging to your Head Customer" },
                { id: "c", text: "Hides the entire tower" },
                { id: "d", text: "Exports equipment to CSV" }
              ],
              correctAnswer: "b",
              explanation: "The My Equipment Filter highlights only the equipment belonging to your Head Customer, helping you identify what you can modify."
            },
            {
              id: "q3",
              question: "What happens after you submit a colocation application?",
              type: "multiple",
              options: [
                { id: "a", text: "The application becomes read-only" },
                { id: "b", text: "You can still make changes" },
                { id: "c", text: "It goes to the Engineering team for review" },
                { id: "d", text: "The equipment is immediately installed" }
              ],
              correctAnswer: ["a", "c"],
              explanation: "After submission, the application becomes read-only and is sent to the Engineering team for review and approval."
            }
          ]
        }
      },
      {
        id: "engineer-workflow",
        title: "Engineer Review & Approval",
        lessons: [
          {
            id: "reviewing-designs",
            title: "Reviewing Submitted Designs",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=9xquCESbNW0",
            content: `
# Engineer Review Workflow

As an Engineer, you're responsible for reviewing and approving colocation applications submitted by Colo Users.

## Locating Applications

1. **Search for the Site**: Use the search functionality
2. **Inspect Default Scene**: View changes made by the Colo User
3. **Switch to Colo App View**: Select the specific application

## Visual Audit

- Rotate and inspect the 3D model
- Verify equipment placement meets engineering standards
- Check for clashes with existing equipment
- Ensure proper alignment and positioning

## Review Checklist

- [ ] Equipment properly attached to structure
- [ ] Correct bearing/azimuth
- [ ] No collisions with other equipment
- [ ] Appropriate equipment types selected
- [ ] IEA results within acceptable limits
            `,
            keyTakeaways: [
              "Search for sites and switch to the specific Colo App view",
              "Perform visual audit of equipment placement",
              "Use 3D rotation to inspect from all angles"
            ]
          },
          {
            id: "engineering-edits",
            title: "Making Engineering Edits",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/watch?v=9xquCESbNW0",
            content: `
# Engineering Edits (Override Workflow)

If a design requires modification, Engineers can directly edit submitted applications.

## Making Edits

1. **Enter Edit Mode**: Click selector and switch to Edit Mode
2. **Add Equipment** (if needed):
   - Navigate to Proposed Equipment
   - Search BIM Catalog for required item
   - Place equipment into scene
3. **Align & Position**: Use transform tools to correctly position

## The "Confirm Design" Trigger

**Critical System Behavior:**

When an Engineer edits a submitted application and clicks Save:

1. **Action**: Click Save (or Save Draft)
2. **System Trigger**: Automatically triggers the Confirm Design Workflow
3. **Result**: Redirects to ColoApp Manager for final review

This is an automatic process - saving changes on a submitted Colo App always triggers confirmation.
            `,
            keyTakeaways: [
              "Engineers can edit submitted applications",
              "Saving edits automatically triggers Confirm Design",
              "System redirects to ColoApp Manager after save"
            ],
            warnings: [
              "Saving changes on a submitted ColoApp triggers confirmation workflow"
            ]
          },
          {
            id: "final-approval",
            title: "Final Approval Process",
            duration: "5 min",
            content: `
# Final Approval

Once redirected to ColoApp Manager, complete the approval process.

## Verification Steps

1. **Verify Status**: Ensure status shows "Submitted"
2. **Review Transaction Logs**: Check all Add/Remove actions
   - Verify count of added equipment
   - Verify count of removed equipment
   - Confirm changes match expectations

## Approval Actions

### To Approve:
1. Click "Approve" button (top right corner)
2. Confirm in the pop-up window
3. Application is finalized

### To Reject/Return:
1. Click "Cancel" or "Return" button
2. Provide feedback for the Colo User
3. Application returns for revision

## After Approval

- Changes are permanently applied to the site
- Equipment records are updated
- Historical data is preserved for audit
            `,
            keyTakeaways: [
              "Verify status and transaction logs before approval",
              "Approval finalizes the workflow permanently",
              "Historical data is preserved for compliance"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What happens when an Engineer saves changes on a submitted Colo App?",
              type: "single",
              options: [
                { id: "a", text: "Nothing happens" },
                { id: "b", text: "The Confirm Design workflow is automatically triggered" },
                { id: "c", text: "The application is deleted" },
                { id: "d", text: "An email is sent to the Colo User" }
              ],
              correctAnswer: "b",
              explanation: "Saving changes on a submitted Colo App automatically triggers the Confirm Design Workflow and redirects to ColoApp Manager."
            },
            {
              id: "q2",
              question: "What should an Engineer verify in the ColoApp Manager before approving?",
              type: "multiple",
              options: [
                { id: "a", text: "Status shows 'Submitted'" },
                { id: "b", text: "Transaction logs show correct Add/Remove actions" },
                { id: "c", text: "User's email address" },
                { id: "d", text: "Weather conditions" }
              ],
              correctAnswer: ["a", "b"],
              explanation: "Engineers should verify the status is 'Submitted' and review transaction logs to ensure Add/Remove actions are correct."
            }
          ]
        }
      }
    ]
  },
  {
    id: "data-management",
    title: "Data & CSV Management",
    description: "Learn how to upload, validate, and manage equipment data using the Asbuilt CSV workflow.",
    duration: "45 min",
    color: "bg-amber-600",
    bgColor: "bg-amber-50",
    icon: <FileSpreadsheet className="w-6 h-6 text-amber-600" />,
    modules: [
      {
        id: "csv-workflow",
        title: "Asbuilt CSV Upload Workflow",
        lessons: [
          {
            id: "csv-overview",
            title: "Understanding the CSV Workflow",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/watch?v=_7Ei5A3sYNQ",
            content: `
# Asbuilt CSV Uploader Overview

The Asbuilt CSV workflow allows you to upload equipment data into a site and align it with the 3D model.

## Workflow Steps

1. Download the existing asbuilt_equipment.csv
2. Prepare data using the template
3. Upload and ingest the CSV
4. Approve the asbuilt workflow
5. Review validation report

## Important Notes

- The **tower** equipment type is NOT supported
- Remove any tower rows from your CSV before upload
- Duplicate file names cannot be uploaded
- Each upload generates a validation report
            `,
            keyTakeaways: [
              "CSV workflow enables bulk equipment data upload",
              "Tower equipment type is not supported",
              "Validation reports are generated for each upload"
            ],
            warnings: [
              "Remove 'tower' rows from CSV - this equipment type is not supported",
              "CSV files with duplicate names cannot be uploaded"
            ]
          },
          {
            id: "csv-structure",
            title: "CSV File Structure",
            duration: "10 min",
            content: `
# Expected CSV Structure

## Mandatory Columns

| Column | Description | Notes |
|--------|-------------|-------|
| name | Equipment name | String, must be unique |
| type | Equipment type | panel, rru, rau, box, dish, yagi, omni, dipole |
| elevation | Height in meters | Numeric |
| tilt | Tilt angle in degrees | Numeric |
| x | X coordinate in meters | Numeric |
| y | Y coordinate in meters | Numeric |
| manufacturer | Manufacturer name | Must match catalog for EME |
| model-number | Model name | Must match catalog for EME |
| head customer | Customer name | String |
| Head Customer ID | Customer ID | Must be consistent |
| bim catalog | BIM Catalog model name | String |
| asset id | Asset identifier | String |
| Application ID | ColoApp ID | Numeric |
| status | Equipment status | approved, conditionally approved, rejected |

## Optional Columns

- bearing, height, width, depth, length, diameter, roll, structure

## Important Rules

1. **Case Sensitivity**: Column names must match exactly
2. **Data Types**: Numeric columns must contain only numbers
3. **Consistency**: Head Customer Name and ID must match across all equipment
            `,
            keyTakeaways: [
              "Column names are case-sensitive",
              "Numeric columns must contain only numbers",
              "Head Customer Name and ID must be consistent"
            ]
          },
          {
            id: "validation-errors",
            title: "Troubleshooting Validation Errors",
            duration: "12 min",
            content: `
# Validation Error Codes

## Syntax Validation

| Code | Description | How to Fix |
|------|-------------|------------|
| E1001 | Invalid file type | Ensure file is .csv format |
| E1004 | Invalid characters | Remove special/zero-width characters |

## Schema Validation

| Code | Description | How to Fix |
|------|-------------|------------|
| E1102 | Missing column headers | Copy exact headers from template |
| E1103 | Invalid data type | Ensure numeric columns have numbers only |
| E1104 | Missing mandatory data | Fill in all required fields |

## Semantic Validation

| Code | Description | How to Fix |
|------|-------------|------------|
| E2000 | Invalid type transition | Check equipment types are valid |
| E2001 | Duplicate names | Remove duplicate equipment names |
| E2002 | Annotation mismatch | Ensure data matches scene annotations |
| E2003 | Equipment not in scene | Remove rows for equipment not on site |
| E2004 | Partial fill (WARNING) | Not an error - some equipment data missing |
| E2005 | Head Customer mismatch (FATAL) | Fix Name/ID consistency |

## Common Mistakes

1. **Tower in CSV**: Remove tower rows - not supported
2. **Incrementing IDs**: Excel may auto-increment when dragging
3. **Mismatched Head Customer**: Name and ID must be consistent
            `,
            keyTakeaways: [
              "E2005 (Head Customer mismatch) is a FATAL error",
              "E2004 (Partial fill) is a warning - upload can proceed",
              "Tower equipment type causes validation failure"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "Which equipment type is NOT supported in the CSV upload?",
              type: "single",
              options: [
                { id: "a", text: "panel" },
                { id: "b", text: "tower" },
                { id: "c", text: "dish" },
                { id: "d", text: "rru" }
              ],
              correctAnswer: "b",
              explanation: "The 'tower' equipment type is not supported. Remove any tower rows from your CSV before uploading."
            },
            {
              id: "q2",
              question: "What does error code E2005 indicate?",
              type: "single",
              options: [
                { id: "a", text: "Missing file" },
                { id: "b", text: "Mismatched Head Customer Name and ID" },
                { id: "c", text: "Invalid file format" },
                { id: "d", text: "Network error" }
              ],
              correctAnswer: "b",
              explanation: "E2005 is a FATAL error indicating that Head Customer Name and ID are not consistent across equipment records."
            },
            {
              id: "q3",
              question: "Which validation result still allows you to apply data?",
              type: "single",
              options: [
                { id: "a", text: "E1001 ERROR" },
                { id: "b", text: "E2005 FATAL" },
                { id: "c", text: "E2004 WARNING" },
                { id: "d", text: "E1102 ERROR" }
              ],
              correctAnswer: "c",
              explanation: "E2004 WARNING (Partial fill) allows you to proceed. It indicates some equipment data is missing but upload can continue."
            }
          ]
        }
      }
    ]
  },
  {
    id: "bim-admin",
    title: "BIM Administration",
    description: "Learn to manage the BIM equipment library, create new entries, configure EME settings, and maintain CAD specifications.",
    duration: "40 min",
    color: "bg-purple-600",
    bgColor: "bg-purple-50",
    icon: <Wrench className="w-6 h-6 text-purple-600" />,
    modules: [
      {
        id: "bim-management",
        title: "BIM Library Management",
        lessons: [
          {
            id: "bim-overview",
            title: "BIM Admin Tooling Overview",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/watch?v=zShR12je8bQ",
            content: `
# BIM Admin Tooling

The BIM Admin GUI is used to manage your BIM library and configure equipment for use in the Sites Portal.

## Key Functions

- Create new BIM equipment entries
- Upload GLB files and thumbnails
- Configure EME (Electromagnetic Energy) settings
- Set ESA (Effective Sail Area) values
- Manage equipment metadata

## Equipment Properties

| Field | Description |
|-------|-------------|
| Name | Unique, searchable name |
| Manufacturer | Manufacturer name (critical for EME) |
| Model | Model name (critical for EME) |
| ESA | Effective Sail Area (tower equipment only) |
| Type | Ground or Tower |
| Subtype | Specific category |
| Shape | Rectangle or Cylinder |
| Tags | Custom labels for filtering |
            `,
            keyTakeaways: [
              "BIM Admin manages the equipment library",
              "Manufacturer and Model are critical for EME configuration",
              "ESA values are only for tower equipment"
            ]
          },
          {
            id: "creating-bim",
            title: "Creating BIM Equipment",
            duration: "12 min",
            videoUrl: "https://www.youtube.com/watch?v=zShR12je8bQ",
            content: `
# Creating BIM Equipment

## Step-by-Step Process

### 1. Basic Information
1. Click "Create" button
2. Enter equipment name (e.g., test-bim-equipment)
3. Add Manufacturer and Model names
4. Set ESA value (tower only, leave 0 for ground equipment)
5. Select Type (Ground/Tower) and Subtype
6. Choose Shape and enter dimensions
7. Add Tags for searchability
8. Click "Create"

### 2. Asset Upload (CRITICAL)

After creation, upload visual assets:

1. **GLB File**: Drag and drop your .glb file
2. **Thumbnail**: Drag and drop preview image

### 3. Link Mesh Reference (CRITICAL!)

**Warning:** This step is essential!

1. Locate the "Mesh Reference" dropdown
2. Select the GLB file you just uploaded
3. If skipped, equipment appears as a "ghost" on the Sites Portal

### 4. Verification

The BIM Admin tool has no 3D previewer. To verify:
1. Add the item to a scene in Sites Portal
2. Check it aligns with BIM CAD specifications
            `,
            keyTakeaways: [
              "Always link the Mesh Reference after uploading GLB",
              "ESA values are only for tower-mounted equipment",
              "Verify equipment in Sites Portal - no previewer in BIM Admin"
            ],
            warnings: [
              "Skipping Mesh Reference linking causes equipment to appear as empty/ghost object"
            ]
          },
          {
            id: "eme-config",
            title: "EME Configuration",
            duration: "8 min",
            content: `
# EME Configuration

EME (Electromagnetic Energy) configuration sets up port and power settings based on the equipment catalog.

## Configuration Steps

1. Ensure Manufacturer and Model fields are correct
2. These must match a valid entry in the Sites Portal catalog
3. Click "Get Config" button
4. System auto-populates port frequency and power ranges

## Important Notes

- Invalid manufacturer/model returns no configuration
- Contact support for the equipment catalog
- EME is required for radiation analysis features

## Deleting Equipment

To remove an item:
1. Open the item
2. Click "Delete"
3. Confirm the action

**Data Retention Note:** Deleting removes the item from future use but does NOT remove it from existing Colocation Applications. Historical data is preserved.
            `,
            keyTakeaways: [
              "Manufacturer and Model must match catalog exactly",
              "Deleting equipment doesn't affect existing applications",
              "Historical data is always preserved"
            ]
          },
          {
            id: "cad-specs",
            title: "BIM CAD Modelling Specifications",
            duration: "6 min",
            content: `
# BIM CAD Modelling Specifications

All 3D equipment submitted for BIM must follow these specifications.

## Format
- **Required**: GLTF 2.0 GLB format
- Other formats are not supported

## Origin
- Located at the **center point** of the model
- Defined by the axis-aligned bounding box

## Rotation
- **Up direction**: +Z axis
- **Emitter face**: +Y axis

## Scale
- All units in **millimeters (mm)**
- This allows for detailed mounts, antennas, and towers

## Verification Checklist

- [ ] File is GLB format
- [ ] Origin at center of bounding box
- [ ] Up direction is +Z
- [ ] Emitter faces +Y
- [ ] Scale in millimeters
            `,
            keyTakeaways: [
              "Use GLTF 2.0 GLB format only",
              "Up direction must be +Z, emitter face +Y",
              "Scale must be in millimeters"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "What happens if you skip linking the Mesh Reference after uploading a GLB file?",
              type: "single",
              options: [
                { id: "a", text: "Equipment works normally" },
                { id: "b", text: "Equipment appears as a ghost/empty object" },
                { id: "c", text: "The system crashes" },
                { id: "d", text: "Equipment is automatically deleted" }
              ],
              correctAnswer: "b",
              explanation: "If you skip linking the Mesh Reference, the equipment will appear as a 'ghost' or empty object when dragged onto the Sites Portal."
            },
            {
              id: "q2",
              question: "For which equipment type should you set ESA values?",
              type: "single",
              options: [
                { id: "a", text: "Ground equipment like shelters" },
                { id: "b", text: "Tower-mounted equipment" },
                { id: "c", text: "All equipment" },
                { id: "d", text: "No equipment" }
              ],
              correctAnswer: "b",
              explanation: "ESA (Effective Sail Area) values should only be set for tower-mounted equipment. Ground equipment like shelters should have ESA value of 0."
            },
            {
              id: "q3",
              question: "What is the required format for BIM 3D models?",
              type: "single",
              options: [
                { id: "a", text: "OBJ" },
                { id: "b", text: "FBX" },
                { id: "c", text: "GLTF 2.0 GLB" },
                { id: "d", text: "STL" }
              ],
              correctAnswer: "c",
              explanation: "BIM models must be in GLTF 2.0 GLB format. Other formats are not supported."
            }
          ]
        }
      }
    ]
  },
  {
    id: "advanced-tools",
    title: "Advanced Tools & Configuration",
    description: "Master advanced features including static link generation, user management, and system configuration.",
    duration: "30 min",
    color: "bg-slate-700",
    bgColor: "bg-slate-100",
    icon: <Settings className="w-6 h-6 text-slate-700" />,
    modules: [
      {
        id: "advanced-features",
        title: "Advanced System Features",
        lessons: [
          {
            id: "static-links",
            title: "Static Auth Link Generation",
            duration: "5 min",
            videoUrl: "https://www.youtube.com/watch?v=hF2z0GkEnXc",
            content: `
# Static Authentication Links

Static auth links allow sharing site access without requiring recipients to log in.

## Generating Links

1. Log in as an Engineering account
2. Navigate to the Sites table
3. Select a site that has been asbuilt-aligned
4. Click "Create Auth Link" button
5. Copy the generated link

## Using the Link

- Open in a private/incognito window or different browser
- Link provides direct access to the site view
- No login required for recipients

## Important Notes

- Links expire after **one year**
- Can regenerate new links using the same process
- Useful for sharing with external stakeholders
            `,
            keyTakeaways: [
              "Static links expire after one year",
              "No login required to access shared sites",
              "Only Engineering accounts can generate links"
            ]
          },
          {
            id: "user-management",
            title: "User Management Console",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/watch?v=o5dktAxAuiE",
            content: `
# User Admin Console

The User Admin Console manages users and organizations.

## Organizations

Organizations determine Head Customer access for Colo Users.

### Creating Organizations
- Name and Description
- Unique ID generated automatically
- Used in pre-asbuilt workflow

**Warning:** Deleting an active organization removes access to all associated equipment. Engineers must manually fix affected data.

## Inviting Users

1. Enter user's email
2. Add descriptive name
3. Select role:
   - **User**: Basic access
   - **Engineer**: Review and approval capabilities
   - **Administrator**: Full system access
4. Select organization
5. Choose NexDT role (Colo User or Site Finder)
6. Click Save to send invite

## User Activation

1. User receives email invite
2. Click "Confirm my account" link
3. Set a strong, unique password
4. Configure MFA if required
5. Save recovery code securely

## Analytics

View user activity:
- Login frequency
- Sites accessed
- Actions performed
            `,
            keyTakeaways: [
              "Organizations control equipment access for Colo Users",
              "Three role levels: User, Engineer, Administrator",
              "Save MFA recovery code securely"
            ],
            warnings: [
              "Deleting an organization affects all associated equipment access"
            ]
          }
        ],
        quiz: {
          questions: [
            {
              id: "q1",
              question: "How long do static authentication links remain valid?",
              type: "single",
              options: [
                { id: "a", text: "24 hours" },
                { id: "b", text: "30 days" },
                { id: "c", text: "One year" },
                { id: "d", text: "Forever" }
              ],
              correctAnswer: "c",
              explanation: "Static authentication links expire after one year. You can regenerate new links using the same process."
            },
            {
              id: "q2",
              question: "What happens if an administrator deletes an active organization?",
              type: "single",
              options: [
                { id: "a", text: "Nothing happens" },
                { id: "b", text: "Users lose access to associated equipment" },
                { id: "c", text: "System automatically reassigns equipment" },
                { id: "d", text: "A backup is created" }
              ],
              correctAnswer: "b",
              explanation: "Deleting an active organization removes access to all equipment created using that organization. Engineers must manually fix the data."
            }
          ]
        }
      }
    ]
  }
];

export const finalAssessment = {
  title: "NexDT Certification Assessment",
  description: "Complete this final assessment to earn your NexDT Certified User certificate.",
  passingScore: 80,
  questions: [
    {
      id: "fa1",
      question: "What is NexDT?",
      type: "single",
      options: [
        { id: "a", text: "A social media platform" },
        { id: "b", text: "A digital twin platform for telecom infrastructure" },
        { id: "c", text: "An email service" },
        { id: "d", text: "A video conferencing tool" }
      ],
      correctAnswer: "b",
      explanation: "NexDT is SiteSee's digital twin platform for telecommunications infrastructure management."
    },
    {
      id: "fa2",
      question: "Which user role can approve colocation applications?",
      type: "single",
      options: [
        { id: "a", text: "Colo User" },
        { id: "b", text: "Viewer" },
        { id: "c", text: "Engineer" },
        { id: "d", text: "Guest" }
      ],
      correctAnswer: "c",
      explanation: "Engineers have the authority to review, make edits, and approve or reject colocation applications."
    },
    {
      id: "fa3",
      question: "What does the 'My Equipment Filter' show?",
      type: "single",
      options: [
        { id: "a", text: "All equipment on all sites" },
        { id: "b", text: "Only equipment belonging to your Head Customer" },
        { id: "c", text: "Only decommissioned equipment" },
        { id: "d", text: "Only new equipment" }
      ],
      correctAnswer: "b",
      explanation: "The My Equipment Filter highlights only equipment belonging to your Head Customer, helping identify what you can modify."
    },
    {
      id: "fa4",
      question: "What should you do after creating a new colocation application before making changes?",
      type: "single",
      options: [
        { id: "a", text: "Log out immediately" },
        { id: "b", text: "Wait for the green progress bar to disappear" },
        { id: "c", text: "Delete all equipment" },
        { id: "d", text: "Contact support" }
      ],
      correctAnswer: "b",
      explanation: "The green progress bar indicates background tasks are running. Wait for it to complete before proceeding."
    },
    {
      id: "fa5",
      question: "What happens when an Engineer saves changes on a submitted Colo App?",
      type: "single",
      options: [
        { id: "a", text: "Changes are discarded" },
        { id: "b", text: "The Confirm Design workflow is automatically triggered" },
        { id: "c", text: "The application is deleted" },
        { id: "d", text: "Nothing happens" }
      ],
      correctAnswer: "b",
      explanation: "Saving changes on a submitted Colo App automatically triggers the Confirm Design Workflow."
    },
    {
      id: "fa6",
      question: "Which equipment type is NOT supported in CSV upload?",
      type: "single",
      options: [
        { id: "a", text: "panel" },
        { id: "b", text: "dish" },
        { id: "c", text: "tower" },
        { id: "d", text: "rru" }
      ],
      correctAnswer: "c",
      explanation: "The 'tower' equipment type is not supported in CSV upload. Remove tower rows before uploading."
    },
    {
      id: "fa7",
      question: "What error code indicates a fatal Head Customer mismatch?",
      type: "single",
      options: [
        { id: "a", text: "E1001" },
        { id: "b", text: "E2004" },
        { id: "c", text: "E2005" },
        { id: "d", text: "E1102" }
      ],
      correctAnswer: "c",
      explanation: "E2005 is a FATAL error indicating mismatched Head Customer Name and ID."
    },
    {
      id: "fa8",
      question: "What is the required format for BIM 3D models?",
      type: "single",
      options: [
        { id: "a", text: "OBJ" },
        { id: "b", text: "GLTF 2.0 GLB" },
        { id: "c", text: "FBX" },
        { id: "d", text: "STL" }
      ],
      correctAnswer: "b",
      explanation: "BIM models must be in GLTF 2.0 GLB format."
    },
    {
      id: "fa9",
      question: "What happens if you skip linking the Mesh Reference after uploading a GLB file?",
      type: "single",
      options: [
        { id: "a", text: "Equipment works normally" },
        { id: "b", text: "Equipment appears as a ghost/empty object" },
        { id: "c", text: "System crashes" },
        { id: "d", text: "File is automatically linked" }
      ],
      correctAnswer: "b",
      explanation: "Skipping Mesh Reference linking causes equipment to appear as an empty/ghost object."
    },
    {
      id: "fa10",
      question: "How long do static authentication links remain valid?",
      type: "single",
      options: [
        { id: "a", text: "24 hours" },
        { id: "b", text: "One week" },
        { id: "c", text: "One year" },
        { id: "d", text: "Forever" }
      ],
      correctAnswer: "c",
      explanation: "Static authentication links expire after one year."
    },
    {
      id: "fa11",
      question: "Which axis should the 'up direction' be for BIM equipment models?",
      type: "single",
      options: [
        { id: "a", text: "+X" },
        { id: "b", text: "+Y" },
        { id: "c", text: "+Z" },
        { id: "d", text: "-Z" }
      ],
      correctAnswer: "c",
      explanation: "BIM equipment models must have the up direction in +Z axis."
    },
    {
      id: "fa12",
      question: "For which type of equipment should ESA values be set?",
      type: "single",
      options: [
        { id: "a", text: "Ground equipment only" },
        { id: "b", text: "Tower-mounted equipment only" },
        { id: "c", text: "All equipment" },
        { id: "d", text: "No equipment" }
      ],
      correctAnswer: "b",
      explanation: "ESA (Effective Sail Area) values should only be set for tower-mounted equipment."
    },
    {
      id: "fa13",
      question: "What does IEA stand for?",
      type: "single",
      options: [
        { id: "a", text: "International Equipment Assessment" },
        { id: "b", text: "Indicative Engineering Assessment" },
        { id: "c", text: "Internal Energy Analysis" },
        { id: "d", text: "Infrastructure Evaluation Audit" }
      ],
      correctAnswer: "b",
      explanation: "IEA stands for Indicative Engineering Assessment - a tool to calculate structural usage."
    },
    {
      id: "fa14",
      question: "What validation result still allows you to apply CSV data?",
      type: "single",
      options: [
        { id: "a", text: "E1001 ERROR" },
        { id: "b", text: "E2005 FATAL" },
        { id: "c", text: "E2004 WARNING" },
        { id: "d", text: "E1102 ERROR" }
      ],
      correctAnswer: "c",
      explanation: "E2004 WARNING (Partial fill) allows you to proceed with the upload."
    },
    {
      id: "fa15",
      question: "What happens to historical data when you delete BIM equipment?",
      type: "single",
      options: [
        { id: "a", text: "All data is deleted" },
        { id: "b", text: "Historical data is preserved in existing applications" },
        { id: "c", text: "Data is moved to archive" },
        { id: "d", text: "Data is corrupted" }
      ],
      correctAnswer: "b",
      explanation: "Deleting BIM equipment removes it from future use but historical data in existing applications is preserved."
    },
    {
      id: "fa16",
      question: "What unit should BIM model scales use?",
      type: "single",
      options: [
        { id: "a", text: "Centimeters" },
        { id: "b", text: "Meters" },
        { id: "c", text: "Millimeters" },
        { id: "d", text: "Inches" }
      ],
      correctAnswer: "c",
      explanation: "All BIM model scale units must be in millimeters (mm)."
    },
    {
      id: "fa17",
      question: "What must be consistent across all equipment in a CSV upload?",
      type: "single",
      options: [
        { id: "a", text: "Equipment color" },
        { id: "b", text: "Head Customer Name and ID" },
        { id: "c", text: "Upload time" },
        { id: "d", text: "File size" }
      ],
      correctAnswer: "b",
      explanation: "Head Customer Name and ID must be consistent across all equipment records."
    },
    {
      id: "fa18",
      question: "Which axis should the emitter face point in BIM models?",
      type: "single",
      options: [
        { id: "a", text: "+X" },
        { id: "b", text: "+Y" },
        { id: "c", text: "+Z" },
        { id: "d", text: "-Y" }
      ],
      correctAnswer: "b",
      explanation: "BIM equipment models must have the emitter face pointing in the +Y direction."
    },
    {
      id: "fa19",
      question: "What role is required to generate static authentication links?",
      type: "single",
      options: [
        { id: "a", text: "Colo User" },
        { id: "b", text: "Viewer" },
        { id: "c", text: "Engineering account" },
        { id: "d", text: "Any role" }
      ],
      correctAnswer: "c",
      explanation: "Only Engineering accounts can generate static authentication links."
    },
    {
      id: "fa20",
      question: "What happens after a colocation application is submitted?",
      type: "multiple",
      options: [
        { id: "a", text: "Application becomes read-only for the submitter" },
        { id: "b", text: "Submitter can continue editing" },
        { id: "c", text: "Application goes to Engineering for review" },
        { id: "d", text: "Equipment is automatically installed" }
      ],
      correctAnswer: ["a", "c"],
      explanation: "After submission, the application becomes read-only and goes to the Engineering team for review."
    }
  ]
};

export const generateCertificateId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `NEXDT-${timestamp}-${random}`;
};