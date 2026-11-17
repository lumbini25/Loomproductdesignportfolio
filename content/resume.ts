// Resume page copy. Source: Lumbini's resume Google Doc, pasted 2026-11-17. Changes by Lumbini's choice
// that day: TDK's "increasing task completion by 60%" dropped (no source); the PhD is in Social Science
// (the Doc says History); Anewvista's "100% increase in annual sponsorship" kept as written.
// TODO: a source for the 100% sponsorship figure (it is not in the Anewvista case study).

export type ResumeEntry = {
  title: string;
  org: string;
  dates: string;
  place?: string;
  bullets?: string[];
};

export const resume = {
  title: "Resume",
  // "serif" or "sans": the two title options Lumbini can compare (CLAUDE.md, open choices).
  titleFace: "serif" as "serif" | "sans",
  docLabel: "Google Doc version",
  profile:
    "Product Designer with 3+ years designing web experiences across enterprise B2B, EdTech, and nonprofit products, and a research background (PhD). I turn user research and stakeholder requirements into user flows, wireframes, interactive prototypes, and developer-ready Figma specs, and I design for accessibility (WCAG 2.1 AA) and edge cases early. I work AI-first: I use Figma Make, Claude, and Claude Code to explore concepts and build working prototypes faster.",
  path: ["PhD research", "UX design", "Product design"],
  contact: {
    place: "SF Bay Area, CA",
    work: "No sponsorship needed (GC)",
  },
  experience: [
    {
      title: "Product Designer",
      org: "WTV Consulting Group",
      dates: "Apr – May 2026",
      place: "Remote, USA",
      bullets: [
        "Planned and conducted user research and stakeholder interviews to find usability gaps and define requirements for a modernized enterprise intranet.",
        "Synthesized findings into information architecture, navigation models, and content organization strategies that improved findability.",
        "Produced user flows, wireframes, and fully interactive prototypes, collaborating with cross-functional teams on accessibility, consistency, and brand alignment, while building scalable design system and component library to keep patterns consistent across the product.",
      ],
    },
    {
      title: "UX Designer",
      org: "Anewvista Community Services",
      dates: "Aug 2024 – Mar 2025",
      place: "San Jose, CA",
      bullets: [
        "Led the redesign of a digital learning platform, translating stakeholder requirements and user research into intuitive journeys and interfaces for older and non-technical learners.",
        "Applied WCAG 2.1 AA standards across onboarding and booking flows, improving usability for older adult learners with varying technical literacy.",
        "Iterated rapidly in Figma on feedback from leadership, developers, and end users. Redesign contributed to a 100% increase in annual sponsorship.",
      ],
    },
    {
      title: "UX/UI Designer",
      org: "TDK Trusted Positioning",
      dates: "May 2023 – Aug 2024",
      place: "San Jose, CA",
      bullets: [
        "Redesigned the Venue Creation Tool, a B2B SaaS platform for real-time tracking of people and assets.",
        "Used Google Analytics behavior data to fix critical information architecture failures in a complex multi-venue workflow.",
        "Maintained and expanded a component-based design system, keeping new screens consistent with established patterns while collaborating cross-functionally with developers, QA and stakeholders.",
      ],
    },
  ] as ResumeEntry[],
  projects: [
    {
      title: "Product Designer",
      org: "Knowunity",
      dates: "Sept 2026",
      place: "Remote, CA",
      bullets: [
        "Designed and shipped an active recall feature for Knowunity in 2.5 weeks, from user flows to interactive prototypes to a deployed product.",
        "Added a transcript view so students can review what the app heard and retry garbled answers, without adding a confirm step.",
        "Built AI-assisted prototypes with Claude Code, React, GitHub, and Vercel, using 4 AI subagents for QA and design iteration.",
      ],
    },
  ] as ResumeEntry[],
  education: [
    { title: "User Experience Design", org: "DesignLab UX Academy", dates: "2025 – 2026" },
    { title: "PhD in Social Science", org: "Assam University, India", dates: "2018 – 2023" },
  ] as ResumeEntry[],
  skills: [
    "UX Design",
    "User Journeys",
    "User Flows",
    "Wireframing",
    "Interactive Prototyping",
    "Interaction Design",
    "UI Design",
    "User Research",
    "Requirements Gathering",
    "Information Architecture",
    "Accessibility (WCAG 2.1 AA)",
    "Design Systems",
    "Figma",
    "Figma Make",
    "AI-Assisted Design and Development (Claude, Claude Code, Cursor)",
    "Jira",
    "Agile",
    "Google Analytics",
    "HTML",
  ],
};
