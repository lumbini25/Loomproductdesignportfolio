// Layout: Lumbini's Figma frame 112:13 "wtv case study" (2026-10-26), which covers the page down
// to "Users response about the current intranet"; later sections follow the same pattern. Sizes
// are the frame's at 1440: cover 900x556, problem illustrations in 641x366 frames, brand diagram
// 1312x740. Content and the other assets: the Framer page loombinicreative.framer.website/wtv-2
// (node k_WRuR6oy). The tabs illustration is the frame's "Cluttered Browser Window Illustration";
// the frame has the two problem captions under each other's image, so they are paired here with
// their own image. Final-screen slides fill 865x666 frames, as on Framer. Left out: Framer template leftovers (the "Explore
// more" cards and the "Aiko Tanaka" footer) and, by Lumbini's choice, the launchpad image.
// The three role dashboards are cropped from Lumbini's "main screens.png" (she sent it for this).
import type { CaseStudy } from "./types";

const dir = "/case-studies/wtv";

export const wtv: CaseStudy = {
  slug: "wtv-consulting",
  theme: "wtv",
  layout: "full",
  title: "An intranet that you actually use daily",
  summary:
    "I redesigned WTV company's intranet while introducing role-based dashboard to improve work efficiency and productivity of the employees.",
  facts: [
    // Figma 336:1754.
    { label: "Role", value: "UX designer" },
    { label: "Team", value: "3 UX designers (including me)" },
    { label: "Timeline", value: "April 2026" },
    { label: "Result", value: "Stakeholder validation" },
  ],
  // The coloured opening shared by every case study (Lumbini, 2026-10-29). Eyebrow and tags from the
  // Home card (Figma 103:2944); the visual is the former cover. "My role" moved into its own section.
  opening: {
    eyebrow: "Intranet · Research and IA",
    tags: ["Information architecture", "Research"],
    // Figma 240:3013 "solution" (the page header's newer cover), exported at 2x on a transparent
    // background so its four floating pieces sit straight on the band.
    image: {
      src: `${dir}/hero-solution.png`,
      width: 1806,
      height: 982,
      alt: "The redesigned WTV intranet: What's New, Quick Links to Teams, Figma, Mailchimp, Monday.com and Gusto, Resources, a calendar and active project boards, with the brand identity kit and search bar floating beside it.",
    },
  },
  sections: [
    {
      // Figma 137:109: one box holding the heading and a numbered list.
      id: "my-role",
      nav: "My role",
      stage: "Problem",
      heading: "My role",
      role: [
        "Led user research — planned the interview guide, conducted all four generative interviews, and adapted methodology to work without direct intranet access, reconstructing behavior through self-reporting.",
        "Led research synthesis",
        "Led information architecture",
        "Built the component library — established the shared token system and reusable patterns that gave both role-based dashboards a consistent, governable foundation.",
      ],
      blocks: [],
    },
    {
      id: "overview",
      nav: "Overview",
      stage: "Problem",
      compactHeading: true,
      heading: "The intranet existed — employees just stopped using it.",
      blocks: [
        {
          kind: "statement",
          label: "Overview",
          text: "WTV Consulting's employees had stopped using their intranet entirely — so they built their own systems to replace it.",
        },
        {
          kind: "wide",
          columns: 2,
          images: [
            {
              src: `${dir}/problem-cluttered-browser.png`,
              width: 2400,
              height: 1088,
              crop: 641 / 366,
              fit: "contain",
              alt: "Illustration: a browser window crowded with tabs and a bookmarks bar full of tool icons.",
              caption:
                "Employees had to switch between numerous tabs to complete a single task, fragmenting their workflow and consuming valuable time that should have been spent on client work.",
            },
            {
              src: `${dir}/problem-no-search.png`,
              width: 1002,
              height: 768,
              crop: 641 / 366,
              fit: "contain",
              alt: "Illustration: a crossed-out magnifying glass among scattered folders and files with names like Client_Pitch_FINAL3 and Project_Overview_Draft.",
              caption: "Finding one document became a time-consuming search",
            },
          ],
        },
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/problem-brand-copy-paste.png`,
              width: 2400,
              height: 1516,
              crop: 1312 / 740,
              fit: "center",
              alt: "Diagram: a Figma brand library in the centre, with arrows to the many decks, reports and web pages where its logos and colours were copied by hand.",
            },
          ],
          caption:
            "Employees had to repeatedly copy and paste brand colors from Figma whenever they created or updated materials",
        },
      ],
    },
    {
      id: "users-response",
      stage: "Problem",
      heading: "Users response about the current intranet",
      blocks: [
        {
          kind: "cards",
          look: "quotes",
          items: [
            {
              title: "No search bar -forced to maintain a personal SharePoint",
              body: "\"I believe that there's no search bar and you really have to look for scroll through the internet in order to see what I'm looking for.\"",
            },
            {
              title: "Bookmarked every tool in Chrome",
              body: "\"It would be nice if I don't have to bookmark all of those and just log in and everything is already there.\"",
            },
            {
              title: "Copy-pasted assets from Figma each time",
              body: "\"We haven't had one place for people to find — we've just had to adapt.\"",
            },
          ],
        },
      ],
    },
    {
      id: "the-problem",
      nav: "The problem",
      stage: "Problem",
      label: "The problem",
      heading:
        "WTV's intranet failed to support search, file collaboration, brand asset access, project visibility, and tool routing — so employees stopped using it entirely, each building their own workaround, costing the team billable hours, introducing version control risk, and leaving every new hire with no reliable starting point.",
      blocks: [
        {
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/current-intranet-annotated.png`,
              width: 2400,
              height: 1090,
              alt: "The old intranet, annotated: navigation overload in a long sidebar; a role-blind interface where all roles see the same screen; no search anywhere; and no actionable entry point, since the main area is a full-bleed brand splash with no tasks, files or tools.",
            },
          ],
        },
        {
          kind: "statement",
          label: "Design Challenge",
          text: "**How might we help employees find what they need faster—without requiring them to understand how the intranet is organized?**",
        },
        {
          kind: "statement",
          label: "Opportunity",
          text: "The challenge wasn't simply to make the intranet \"look better.\" It was to reduce the hidden cost of **searching, switching, sharing, and re-authenticating** that employees experienced every day.",
        },
      ],
    },
    {
      id: "strategic-shift",
      nav: "Strategic Shift",
      stage: "Solution",
      label: "Strategic Shift",
      heading:
        "From an intranet organized around where information lived to an intranet organized around what employees need to accomplish.",
      blocks: [
        {
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/sitemap-before.png`,
              width: 708,
              height: 512,
              alt: "Before: the old sitemap, a long row of navigation items each branching into deep lists of pages.",
              caption: "Organized around the site's structure 16 navigation items → multiple levels → search → resource",
            },
            {
              src: `${dir}/sitemap-after.png`,
              width: 2020,
              height: 2400,
              alt: "After: the new sitemap, with a homepage dashboard holding global actions (search, profile, quick create) above four pillars: Operations, Growth & Clients, All Projects, and People & Culture.",
              caption:
                "Organized around how employees search for information - 4 business pillars → relevant tools & resources → task",
            },
          ],
        },
      ],
    },
    {
      id: "ideation",
      nav: "Ideation",
      stage: "Solution",
      label: "Ideation",
      heading: "Using AI for rapid exploration for understanding design direction",
      logoCloud: {
        label: "Logos of the AI and design tools used for exploration: ChatGPT, Gemini, Claude, Figma, JavaScript and others.",
      },
      blocks: [],
    },
    {
      id: "solution",
      nav: "Solution",
      stage: "Solution",
      heading: "Solution",
      blocks: [
        {
          kind: "video",
          bare: true,
          video: {
            src: `${dir}/solution-search.mp4`,
            autoplay: true,
            poster: `${dir}/solution-search-poster.jpg`,
            width: 1942,
            height: 306,
            description: "Screen recording: the search bar at the top of the new dashboard, in use.",
          },
          caption: "Now search is constant at the top of the dashboard",
        },
        {
          kind: "video",
          bare: true,
          video: {
            src: `${dir}/solution-tools.mp4`,
            autoplay: true,
            poster: `${dir}/solution-tools-poster.jpg`,
            width: 1476,
            height: 1080,
            description:
              "Screen recording: Monday.com, Teams and Figma open from the dashboard's Quick Links without a separate log-in.",
          },
          caption: "Now everyday tools are available within the dashboard, no need for authentication and log in",
        },
        {
          kind: "video",
          bare: true,
          video: {
            src: `${dir}/solution-brand-assets.mp4`,
            autoplay: true,
            poster: `${dir}/solution-brand-assets-poster.jpg`,
            width: 1184,
            height: 1080,
            description: "Screen recording: brand assets opened from the dashboard instead of copied from Figma.",
          },
          caption: "Now employees do not need to copy paste for brand assets from Figma",
        },
      ],
    },
    {
      id: "design",
      nav: "Design",
      stage: "Solution",
      label: "Design",
      heading:
        "Reducing the hidden cost of searching, switching, and re-authenticating by designing a role-based dashboards for CEO, Contractor and internal employees",
      blocks: [
        { kind: "text", paragraphs: ["**Give employees a starting point**"] },
        {
          kind: "wide",
          columns: 3,
          bare: true,
          images: [
            {
              src: `${dir}/dashboard-employee.png`,
              width: 1600,
              height: 2865,
              alt: "Internal employee dashboard: company news and announcements, quick access to the handbook, store and benefits, Quick Links, Resources, a calendar, active project boards and My Tasks.",
              caption: "Internal employee",
            },
            {
              src: `${dir}/dashboard-contractor.png`,
              width: 1600,
              height: 2932,
              alt: "Contractor dashboard greeting \"Good morning, Damien!\", with a training video library, quick access, Quick Links, Resources, a calendar, project boards, My Tasks and What's New.",
              caption: "Contractor",
            },
            {
              src: `${dir}/dashboard-ceo.png`,
              width: 1600,
              height: 2778,
              alt: "CEO dashboard: What's New, Quick Links, Resources, a calendar, active project boards, My Tasks, and Revenue Target and Goals with sales performance, the yearly financial goal and the client pipeline.",
              caption: "CEO",
            },
          ],
        },
      ],
    },
    {
      id: "final-screens",
      nav: "Final Screens",
      stage: "Solution",
      heading: "Final Screens",
      blocks: [
        {
          kind: "carousel",
          label: "Final screens",
          frame: 865 / 666,
          images: [
            {
              src: `${dir}/screen-case-study-archive.png`,
              width: 1269,
              height: 1140,
              alt: "Case Study Archive: a gallery of pitching collateral, each card tagged FinTech with a View Full Case Study button.",
              caption: "Case Study Archive",
            },
            {
              src: `${dir}/screen-brand-identity-kit.png`,
              width: 1130,
              height: 2400,
              alt: "Brand Identity Kit: colour palette, logo repository, and typography systems for marketing and social media.",
              caption: "Brand Identity Kit",
            },
            {
              src: `${dir}/screen-stationery-hub.png`,
              width: 1921,
              height: 2400,
              alt: "Stationery Hub under Growth & Clients: presentation templates, official stationery and digital assets, each with a Download Template button.",
              caption: "Stationery Hub",
            },
            {
              src: `${dir}/screen-campaign-templates.png`,
              width: 1272,
              height: 1146,
              alt: "Campaign Templates: campaign briefs and newsletters to download, and a list of client outreach email series.",
              caption: "Campaign Templates",
            },
            {
              src: `${dir}/screen-news-article.png`,
              width: 2400,
              height: 2327,
              alt: "A news article, \"New Office Expansion: San Francisco Location\", with related updates in a side column.",
              caption: "Company news",
            },
          ],
        },
      ],
    },
    {
      id: "component-library",
      nav: "Component Library",
      stage: "Solution",
      heading: "Component Library",
      blocks: [
        {
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/component-library.png`,
              width: 2400,
              height: 2127,
              alt: "Components exported from Figma: Company Update Cards and Document Grid View, three variants each, and a Template List View.",
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      nav: "Impact",
      stage: "Impact",
      label: "Impact",
      heading: "What Users said about it",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The redesign replaced a cluttered 16-item vertical navigation and one-size-fits-all portal with a streamlined horizontal navigation, role-based dashboards, a persistent tool launchpad, and a governed brand library—giving every user a clear, relevant entry point into the intranet while reducing time spent searching for information, switching between tabs, and asking colleagues for files they should have been able to find themselves.",
          ],
        },
        {
          kind: "quote",
          look: "box",
          text: "It's a fantastic intranet design! The information architecture is highly intuitive and offers a user-friendly experience; it will greatly enhance the team's productivity.",
        },
        // The Framer photo is an Unsplash+ preview with the watermark across it, and its overlay
        // says "Now onboarding of new hire is 10x faster" with no source. Not shipped.
        {
          kind: "placeholder",
          text: "Team photo from the Framer page, 900 × 506. Needs a licensed, unwatermarked copy, and a source for the \"10x faster\" onboarding line or that line removed.",
        },
        {
          kind: "stats",
          look: "outline",
          items: [
            { value: "100%", label: "Completion of primary task flow" },
            { value: "28.9s", label: "Combined avg. across both tasks" },
            { value: "2", label: "User Flow TESTED" },
          ],
        },
        {
          kind: "quote",
          look: "box",
          text: "I think it looks intuitive... it's easy to navigate and with the instructions it's easier for me to find things.",
        },
      ],
    },
    {
      id: "lessons",
      nav: "Lessons",
      stage: "Impact",
      heading: "Lessons",
      blocks: [
        {
          kind: "cards",
          look: "list",
          items: [
            {
              title: "Great UX Balances Business Goals with User Advocacy",
              body: "A successful intranet must balance everyday worker efficiency with company compliance by embedding corporate objectives, like brand consistency and structured onboarding, directly into the natural path of user workflows.",
            },
            {
              title: "Stakeholder Alignment Powers Seamless Execution",
              body: "I learned that continuous, transparent stakeholder alignment is what ultimately transforms competing organizational demands and creative design concepts into a collaborative, successfully completed reality.",
            },
          ],
        },
      ],
    },
    {
      id: "sticky-notes",
      stage: "Impact",
      heading: "Looking for sticky notes and empathy maps?",
      blocks: [
        {
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/affinity-map.png`,
              width: 2400,
              height: 1237,
              alt: "An affinity map of sticky notes in four clusters: feedback and confirmation clarity, visual hierarchy and information prioritization, balance visibility and clarity, and navigation structure and wayfinding.",
            },
          ],
        },
        { kind: "links", items: [{ label: "Let's chat", href: "#contact" }] },
      ],
    },
  ],
};
