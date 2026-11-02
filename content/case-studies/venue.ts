// Source: ~/Desktop/Venue Case Study (content/case-study.md, facts.md, demo-cut-list.md, assets/manifest.md).
// Copy and alt text are verbatim from the kit, except the two screen descriptions marked below.
// Its open "⚠️ CONFIRM" items are `todo` blocks.
import type { CaseStudy } from "./types";

const dir = "/case-studies/venue";

export const venue: CaseStudy = {
  slug: "tdk-trusted-positioning",
  theme: "tdk",
  title: "Venue Creation Tool: setting up a building in four steps",
  summary:
    "Redesigning how facility admins configure a building digitally, from address to floorplan to zones, in a desktop app that runs in the browser.",
  facts: [
    { label: "Role", value: "UX/UI designer at Trusted Positioning Inc" },
    { label: "Timeline", value: "8 weeks, 2023–2024" },
    { label: "Team", value: "3 developers, 1 backend engineer, 2 QA, 1 PM, 1 manager; I was the one designer" },
    { label: "Platform", value: "Desktop, 1600px, light mode" },
  ],
  // The coloured opening shared by every case study (Lumbini, 2026-10-29). Eyebrow and tags from the
  // Home card (Figma 103:2944); the visual is Lumbini's ~/Desktop/Venue Case Study/Dashboard.png.
  opening: {
    eyebrow: "Enterprise B2B · Indoor positioning",
    tags: ["Information architecture", "UI Design"],
    screen: true,
    image: {
      src: `${dir}/hero-dashboard.png`,
      width: 3204,
      height: 2618,
      alt: "The TDK Venue Overview dashboard: floors monitored, desk utilization, meeting-room wait time and collaboration-zone occupancy across the top; a live tracking map of Floor 2 with an over-capacity alert in the open office; and a table of five floors with their addresses and status.",
    },
  },
  sections: [
    {
      id: "precision-task",
      stage: "Problem",
      heading: "Setting up a building digitally is a precision task, and the old flow made it feel like a form",
      blocks: [
        {
          kind: "video",
          video: {
            src: `${dir}/demo-1.mp4`,
            poster: `${dir}/demo-1-poster.jpg`,
            width: 1920,
            height: 1080,
            description:
              "Walkthrough: from the Dashboard, a user creates a venue, confirms the address, uploads and crops a floorplan, places and scales it on the map, and sees 'Floor 1 aligned' with the floor rail.",
          },
          caption:
            "20-second walkthrough: Dashboard to an aligned floorplan. The data and detection are mocked; the interactions are real.",
        },
        {
          kind: "text",
          paragraphs: [
            "Office managers and facility admins use the Venue Creation Tool to configure a building so they can track attendance and space usage. They upload a floorplan, place it on the map, draw boundaries, and define units and zones.",
            "As the UX/UI designer at Trusted Positioning Inc, I redesigned the flow end to end over 8 weeks, working with three developers, a backend engineer, two QA engineers, a PM and a manager. The result is a prototype that behaves like an installed desktop app, with a mocked engine.",
          ],
        },
      ],
    },
    {
      id: "constraints",
      stage: "Problem",
      heading: "The constraints were clear: one canvas, a mocked engine, and no excuses for the hard states",
      blocks: [
        {
          kind: "tiles",
          items: [
            "Desktop web, 1600 px",
            "Light mode only",
            "Engine is mocked",
            "Angular JS component library",
            "Keyboard and WCAG AA",
            "Windows and macOS",
          ],
          caption: "One target, so the time went into the experience instead of device variants.",
        },
        {
          kind: "text",
          paragraphs: [
            "The tool ships to ordinary Windows and macOS desktops, so I designed one canvas at 1600 px that stays fluid from 1280 to 2560 px. Everything behind it was mocked: no real floorplan parsing, address lookup or detection.",
            "That made the hard states mine to design. I put real delays into upload, alignment and detection, and designed what fills them: progress, previews and a way to cancel.",
          ],
        },
      ],
    },
    {
      id: "old-wizard",
      stage: "Problem",
      heading: "The old wizard split one idea across two steps, and hid where you were headed",
      blocks: [
        {
          kind: "steps",
          label: "Wizard steps",
          before: ["Name", "Address", "Floorplan", "Property", "Launch"],
          after: ["Name & Location", "Add Floorplan", "Manage Properties", "Summary"],
          caption: "Before: five steps, name and address on separate pages. After: four steps, name and location together.",
        },
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/before-after-stepper.png`,
              width: 1160,
              height: 719,
              alt: "Left: the old five-step wizard with name and address on separate pages. Right: the new four-step flow with name and location combined, form beside a map. Caption in image: \"Combining first two steps into one more intuitive Step\".",
            },
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "The original wizard asked for the venue name on one page and the address and map on the next, in five steps. I combined them into one step: the form sits beside a live map, so the address you type is the place you see. The stepper dropped from five steps to four, and stays visible on every screen.",
          ],
        },
      ],
    },
    {
      id: "mapped-every-path",
      stage: "Solution",
      heading: "I mapped every path before drawing a screen, including the ones that go wrong",
      blocks: [
        {
          kind: "flow",
          steps: [
            "Dashboard",
            "Create venue",
            "Add venue details",
            "Search address",
            "Upload floorplan",
            "Align floorplan",
            "Add boundary",
            "Add unit",
            "Add zone",
            "Manage properties",
            "Summary",
            "Launch",
          ],
          notes: [
            "Address not found: fill the form manually, then continue to Upload floorplan.",
            "Summary leads to Edit or Launch.",
            "Launch returns to the Dashboard.",
          ],
          caption: "The flow I designed against. Tools inside Add Floorplan, with a floor rail for multi-floor venues.",
        },
        {
          kind: "text",
          paragraphs: [
            "The flow covers the happy path and its exits: an address that isn't found falls back to filling the form manually; the summary leads to Edit or Launch; Launch returns to the Dashboard.",
            "Mapping it first showed me that floorplan work has several tools in sequence (upload, align, boundary, unit, zone). I kept them as tasks inside one Add Floorplan step with a floor rail, rather than five separate pages.",
          ],
        },
        {
          kind: "todo",
          text: "Confirm that the single-step decision is yours, and where Edit re-enters the flow.",
        },
      ],
    },
    {
      id: "alignment",
      stage: "Solution",
      heading: "Alignment is where a floorplan becomes a place, so the screen says when it's right",
      blocks: [
        {
          kind: "wide",
          images: [
            {
              // A frame of demo-1 at 17.6 s; alt drafted from the frame.
              src: `${dir}/demo-1-poster.jpg`,
              width: 1920,
              height: 1080,
              alt: "The align step: the floorplan placed on the map with \"Floor 1 aligned\" confirmed, the Set the scale panel showing 42 ft, and an inline check reading \"Scale set from 1 measurement. Add a second to double-check.\"",
            },
          ],
          caption: "Drop in the image, trim it to the building, place it on the map, confirm the scale.",
        },
        {
          kind: "text",
          paragraphs: [
            "A floorplan arrives as an image. The tool has to turn it into a place on the map. Upload, crop, then align: move, rotate and scale the plan, set the scale, and get an inline check that confirms it (\"Floor 1 aligned\") instead of leaving the user to wonder.",
          ],
        },
      ],
    },
    {
      id: "boundaries-and-zones",
      stage: "Solution",
      heading: "Boundaries and zones are drawn step by step, and validated while you draw",
      blocks: [
        {
          kind: "video",
          video: {
            src: `${dir}/demo-2.mp4`,
            poster: `${dir}/demo-2-poster.jpg`,
            width: 1920,
            height: 1080,
            description:
              "Walkthrough: a user draws a zone point by point, sees two validation errors, fixes them until 'Boundary is valid', then opens Advanced Tracking and saves.",
          },
          caption: "Numbered steps, one primary action, and validation that explains itself.",
        },
        {
          kind: "text",
          paragraphs: [
            "The side panel numbers each task: 1 draw the zone, 2 add zone details. Every panel has one primary action with Cancel below it. As points are placed, real-time validation says what to fix (\"2 errors\"), and Save & Continue only unlocks when the boundary is valid.",
            "Drawing is explicit: click to place points, commit when done, cancel before committing. Nothing is applied silently.",
          ],
        },
      ],
    },
    {
      id: "units",
      stage: "Solution",
      heading: "Units flag overlaps and say how to fix them",
      blocks: [
        {
          kind: "video",
          video: {
            src: `${dir}/demo-3.mp4`,
            poster: `${dir}/demo-3-poster.jpg`,
            width: 1920,
            height: 1080,
            description:
              "Walkthrough: a user creates a unit, sees an overlap warning with a fix, edits vertices, names the unit, enables LiDAR in Advanced Tracking, saves, and sees sensor icons on the saved unit.",
          },
          caption: "Errors with a fix, details in one place, sensor status on the map.",
        },
        {
          kind: "text",
          paragraphs: [
            "When a unit overlaps another (here, \"Overlaps Open office\"), the panel says so and offers the fix. Name, type and capacity sit in one place. Sensor settings (LiDAR and BLE toggles, data update rate) sit inside the unit, in a collapsed Advanced Tracking row, and saved units show their sensor status right on the map.",
          ],
        },
      ],
    },
    {
      id: "whole-building",
      stage: "Solution",
      heading: "The dashboard and summary give an admin the whole building at a glance",
      blocks: [
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/dashboard-lidar-tracking.png`,
              width: 2400,
              height: 2330,
              alt: "Venue Overview: summary tiles, a live floor map with zone density and sensor status, alerts, zone coverage, and a table of floors.",
            },
            {
              // Drafted from the screen; the manifest left this alt text open.
              src: `${dir}/summary-page.png`,
              width: 2400,
              height: 2093,
              alt: "The Summary and Launch step: venue name, address and ID, a floor overview of 5 of 6 floors configured, and Floor 1 with zones grouped by type, above Back, Skip it for now and Launch.",
            },
          ],
          caption: "Venue Overview, Summary.",
        },
      ],
    },
    {
      id: "without-mouse-or-colour",
      stage: "Solution",
      heading: "I designed it to work without a mouse and to read without colour",
      blocks: [
        {
          kind: "panel",
          columns: [
            {
              title: "Keyboard",
              items: [
                "Every canvas task has a non-canvas path",
                "Add a unit or zone from a form",
                "Pick objects from a list",
                "Nudge with arrow keys or numeric fields",
              ],
            },
            {
              title: "Without colour",
              items: [
                "Units, zones and boundaries differ by outline style and label",
                "Minimum targets are 32 px",
                "Text meets WCAG 2.1 AA",
                "Status changes are announced",
              ],
            },
          ],
          caption: "Design constraints that shaped the tool.",
        },
        {
          kind: "text",
          paragraphs: [
            "A drawing tool excludes people by default, so I designed the way out first. Every canvas task has a non-canvas path: add a unit or zone from a form, pick objects from a list, nudge with arrow keys or numeric fields. Units, zones and boundaries differ by outline style and label, not only colour. Minimum targets are 32 px, text meets WCAG 2.1 AA, and status changes are announced.",
          ],
        },
        {
          kind: "todo",
          text: "Confirm what the prototype actually implements. This section may only claim what is built; the rest should read as \"designed for\".",
        },
      ],
    },
    // Verbatim from Lumbini's Framer page loomdesign.framer.website/project/vc (read 2026-10-27);
    // replaces the "What I can claim" section at her request.
    {
      id: "lessons",
      stage: "Impact",
      heading: "Lessons from redesigning a tool for venue managers",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A key success of this initiative was the implementation of a repeatable, cross-functional design process. By aligning stakeholders early and often, we eliminated guesswork and \"design-by-committee.\" The result is a more transparent product roadmap and a team that is now fully synchronized on the product vision, significantly reducing the friction between ideation and handoff.",
          ],
        },
      ],
    },
  ],
};
