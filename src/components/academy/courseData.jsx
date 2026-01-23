import { 
  BookOpen, 
  Users, 
  Settings, 
  Database, 
  CheckCircle,
  Wrench,
  FileSpreadsheet,
  Link as LinkIcon
} from "lucide-react";
import React from 'react';

export const tracks = [
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