// The five case studies as cards, in homepage order: the first two are featured. Card thumbnails
// are exported from the Figma card frames at exactly 416x303 (2x), so the card never crops them.
// Every thumbnail is an exact Figma export (Lumbini, 2026-10-28): featured 112:101 and 199:860,
// cards 103:3002, 149:1250 and 103:3039. Card copy is
// verbatim from the Figma Home frame 103:2944 (featured 112:100 and 116:178, cards 103:3000),
// read 2026-10-26. Page content is in content/case-studies/.

// A thumbnail rebuilt from its Figma frame's layers: the background, then each phone at its frame
// position (px in the frame), with its corner radius and the CSS transforms it holds at rest and
// on hover.
export type ThumbnailLayers = {
  frame: { width: number; height: number };
  background: string;
  phones: { src: string; x: number; y: number; width: number; height: number; radius: number; z: number; rest: string; hover: string }[];
};

// One scene of the short film a card plays over its thumbnail when it first scrolls into view
// (components/CardSequence.tsx; after "Case study card animation.mov", Lumbini 2026-11-06).
// `zoom` settles in from slightly larger, `circle` opens from the top-right corner, `rise` grows
// from a small card at the bottom to fill the frame, `fan` deals its screens out from a stack.
// `zoom`, `circle` and `rise` show the first image filling the frame (`position` is its
// object-position); `fan` shows every image as a tile on the `surface` colour.
export type Scene = {
  kind: "zoom" | "circle" | "rise" | "fan";
  images: { src: string; width: number; height: number }[];
  position?: string;
  surface?: "inverse" | "subtle";
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  descriptor: string;
  tags: string[];
  thumbnail: { src: string; alt: string; width: number; height: number };
  // A screen recording playing inside the thumbnail's screen, as in Figma (autoplay register).
  // `screen` is the screen's box in % of the thumbnail.
  // The thumbnail rebuilt from its Figma layers, for the Sierra Hopkins hover (Knowunity).
  thumbnailLayers?: ThumbnailLayers;
  // Real case-study screens, played once over the thumbnail before it settles (see `Scene`).
  sequence?: Scene[];
  // `fill`: the recording is the whole thumbnail, with no mockup image under it (TDK, 2026-10-29:
  // its PNG already held a screenshot of the same screen, so the overlay showed it twice).
  thumbnailVideo?: {
    src: string;
    poster: string;
    width: number;
    height: number;
    description: string;
    screen?: { left: number; top: number; width: number; height: number };
    fill?: boolean;
  };
};

export const projects: Project[] = [
  {
    slug: "knowunity",
    eyebrow: "AI-native edtech · Voice UI",
    title: "Active Recall for Knowunity",
    descriptor:
      "A voice-based recall feature for an AI study app. It is a course project on a real business problem, so there is no outcome data.",
    tags: ["Edtech", "AI-native", "Voice UI"],
    thumbnail: {
      src: "/images/work/knowunity.png",
      alt: "Three phone screens from the Knowunity active recall prototype: a World War II topic list, a home screen asking “Evening, Harry. Ready to test what stuck?”, and a result screen reading “You explained 1 of 3 without help.”",
      width: 1400,
      height: 1080,
    },
    sequence: [
      { kind: "zoom", images: [{ src: "/case-studies/knowunity/knowunity-hero-poster.jpg", width: 1600, height: 900 }], position: "left center" },
      { kind: "circle", images: [{ src: "/case-studies/knowunity/storybook-hint-ladder.png", width: 1600, height: 1000 }], position: "left top" },
      { kind: "fan", images: [{ src: "/case-studies/knowunity/hints-after.png", width: 1170, height: 2532 }, { src: "/case-studies/knowunity/reveal-after.png", width: 1170, height: 2532 }, { src: "/case-studies/knowunity/beta-summary-after.png", width: 1170, height: 2532 }], surface: "inverse" },
    ],
    // Figma 112:101's layers (glow and gradient; phones 112:104, 112:106, 112:105), exported at 2x
    // (2026-10-29). At rest the side phones turn in towards the centre; on hover all three ease
    // straight, the sides fan out and the centre lifts, as on sierrahopkins.com.
    thumbnailLayers: {
      frame: { width: 700, height: 540 },
      background: "/images/work/knowunity-layers/background.jpg",
      phones: [
        {
          src: "/images/work/knowunity-layers/phone-topic.png",
          x: 40, y: 110, width: 190, height: 449.2, radius: 19, z: 1,
          rest: "rotateY(18deg) rotateZ(-2deg)",
          hover: "translateX(-7%) rotateY(0deg) rotateZ(-4deg) scale(1.02)",
        },
        {
          src: "/images/work/knowunity-layers/phone-result.png",
          x: 470, y: 150, width: 190, height: 411.2, radius: 19, z: 1,
          rest: "rotateY(-18deg) rotateZ(2deg)",
          hover: "translateX(7%) rotateY(0deg) rotateZ(4deg) scale(1.02)",
        },
        {
          src: "/images/work/knowunity-layers/phone-home.png",
          x: 240, y: 40, width: 220, height: 526.4, radius: 22, z: 2,
          rest: "rotateZ(-2deg)",
          hover: "translateY(-4%) rotateZ(0deg) scale(1.04)",
        },
      ],
    },
  },
  {
    slug: "bloom-and-heal",
    eyebrow: "AI-native wellness · On moment help",
    title: "Bloom & Heal",
    descriptor: "Know what to do when instant overwhelm hits.",
    tags: ["Wellness", "AI-native", "Watch sync"],
    thumbnail: {
      src: "/images/work/bloom-featured.png",
      alt: "Bloom & Heal on iPhone and Apple Watch: a mood check-in that offers to connect the watch, a watch prompt to choose a reset, a 2:26 breathing timer, and a low-HRV nudge to take a quick pause.",
      width: 1362,
      height: 1080,
    },
    sequence: [
      { kind: "zoom", images: [{ src: "/case-studies/bloom/bloom-heal-demo-poster.jpg", width: 1280, height: 720 }] },
      { kind: "circle", images: [{ src: "/case-studies/bloom/v2/iwatch-visuals-2.png", width: 2368, height: 1170 }] },
      { kind: "fan", images: [{ src: "/case-studies/bloom/film-health-metrics.png", width: 860, height: 2002 }, { src: "/case-studies/bloom/film-appointment-confirmed.png", width: 860, height: 1864 }, { src: "/case-studies/bloom/film-sign-up.png", width: 860, height: 1864 }], surface: "subtle" },
    ],
  },
  {
    slug: "wtv-consulting",
    eyebrow: "Intranet · Research and IA",
    title: "WTV Consulting Agency",
    descriptor:
      "The previous intranet was abandoned because users had no search bar, the brand materials are not easily accessible, they need to open multiple tabs to complete one task.",
    tags: ["Information architecture", "Research"],
    thumbnail: {
      src: "/images/work/wtv-card.png",
      alt: "The redesigned WTV intranet home screen, with quick links, a calendar and active project boards on a navy background.",
      width: 832,
      height: 606,
    },
    sequence: [
      { kind: "zoom", images: [{ src: "/case-studies/wtv/solution-brand-assets-poster.jpg", width: 1184, height: 1080 }], position: "center top" },
      { kind: "circle", images: [{ src: "/case-studies/wtv/screen-case-study-archive.png", width: 1269, height: 1140 }], position: "center top" },
      { kind: "rise", images: [{ src: "/case-studies/wtv/dashboard-employee.png", width: 1600, height: 2865 }], position: "center top" },
    ],
  },
  {
    slug: "tdk-trusted-positioning",
    eyebrow: "Enterprise B2B · Indoor positioning",
    title: "Trusted Positioning Inc.",
    descriptor:
      "Every test user got stuck turning their physical space into a digital one, so I redesigned the setup tool to replace cognitive overload and zero guidance with one clear, guided workspace.",
    tags: ["Information architecture", "UI Design"],
    thumbnail: {
      src: "/images/work/tdk-card.png",
      alt: "The TDK Venue Creation Tool: a floor plan of an office with rooms laid out, beside a Unit Creation panel confirming the boundary is defined.",
      width: 832,
      height: 606,
    },
    sequence: [
      { kind: "zoom", images: [{ src: "/case-studies/venue/demo-1-poster.jpg", width: 1920, height: 1080 }] },
      { kind: "circle", images: [{ src: "/case-studies/venue/hero-dashboard.png", width: 3204, height: 2618 }], position: "center top" },
      { kind: "fan", images: [{ src: "/case-studies/venue/manage-properties.png", width: 2125, height: 2400 }, { src: "/case-studies/venue/summary-page.png", width: 2400, height: 2092 }, { src: "/case-studies/venue/dashboard-lidar-tracking.png", width: 2400, height: 2329 }], surface: "subtle" },
    ],
    thumbnailVideo: {
      src: "/images/work/tdk-card.mp4",
      poster: "/images/work/tdk-card-poster.jpg",
      width: 878,
      height: 610,
      description: "Screen recording: creating a unit on the floorplan in the Venue Creation Tool.",
      fill: true,
    },
  },
  {
    slug: "anewvista",
    eyebrow: "Nonprofit · Accessibility",
    title: "ANVCS",
    descriptor:
      "Built from five months of analytics and a 19-person accessibility survey, with WCAG 2.1 AA as the baseline.",
    tags: ["Accessibility", "Nonprofit"],
    thumbnail: {
      src: "/images/work/anewvista-card.png",
      alt: "The Anewvista home page on a laptop: “Free tech classes for seniors, live on Zoom”, with buttons to see upcoming classes.",
      width: 832,
      height: 606,
    },
    sequence: [
      { kind: "zoom", images: [{ src: "/case-studies/anewvista/navigating-booking.jpg", width: 1672, height: 941 }] },
      { kind: "circle", images: [{ src: "/case-studies/anewvista/class-booking-flow-poster.jpg", width: 1600, height: 900 }] },
      { kind: "rise", images: [{ src: "/case-studies/anewvista/decision-4-confirmation.png", width: 1512, height: 1340 }], position: "center top" },
    ],
    thumbnailVideo: {
      src: "/images/work/anewvista-card.mp4",
      poster: "/images/work/anewvista-card-poster.jpg",
      width: 960,
      height: 624,
      description: "Screen recording: booking a class on the redesigned Anewvista site.",
      screen: { left: 14.1, top: 12.7, width: 73.7, height: 63.5 },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
