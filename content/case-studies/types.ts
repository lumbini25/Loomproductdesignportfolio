// Shape of a case study. Copy lives in the per-project files; the page only renders it.
// Text fields accept **bold** for emphasis that exists in the source copy.

// `caption` is used where each image in a group has its own line underneath.
// `crop` is a width/height ratio: the image fills that frame from the top, as the source page
// crops it. Without it the image keeps its own ratio. `fit` changes how it fills the frame:
// "contain" shows all of it, centred; "center" crops from the middle instead of the top.
export type Img = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  crop?: number;
  fit?: "contain" | "center";
  // Carmen's banner effect: the image settles from 108% to 100% as it scrolls into view.
  zoom?: boolean;
  // A diagram too dense to read at page size: it opens full size in the lightbox.
  expand?: boolean;
};

export type Video = {
  src: string;
  poster: string;
  width: number;
  height: number;
  // Text alternative, read by screen readers and shown when the video cannot play.
  description: string;
  // Only true when the autoplay register in platform-constraints.md says Yes.
  autoplay?: boolean;
  // An alpha mask (PNG, same shape as the video) that hides a recording's plain background, so a
  // device sits straight on the page colour (Anewvista hero, 2026-10-29).
  mask?: string;
};

export type Block =
  // `look: "lead"`: larger, semibold subtitle text (Bloom's Framer page, 26px).
  | { kind: "text"; paragraphs: string[]; look?: "lead"; label?: string; heading?: string; tight?: boolean }
  // Text in a narrow column beside a visual (Bloom Figma brand and testing rows).
  | { kind: "split"; title?: string; paragraphs: string[]; image: Img; caption?: string }
  // Carmen's pinned device: the device sticks while numbered steps scroll past, and its screen
  // switches to each step's recording (Bloom Figma "Pinned phone / watch (sticky scroll)").
  | { kind: "pinned"; device: "phone" | "watch"; steps: { title: string; body?: string; video: Video }[] }
  // A numbered list, with an optional line above it.
  | { kind: "list"; intro?: string; items: string[] }
  // Phone screen recordings side by side, each at phone width; click to play.
  | { kind: "clips"; videos: Video[] }
  // One video beside a title and a short text; `side` puts the video left or right from 834 up.
  | { kind: "feature"; video: Video; title: string; text: string; side: "left" | "right" }
  // `bare`: full column width with no mat, whatever the video's shape (WTV, as on Framer).
  // `hero`: the study's lead film, shown 16:9 in HeroMedia (at most 70vh tall).
  | {
      kind: "video";
      // Figma 286:228: a dark band with the video whole inside it.
      band?: boolean;
      video: Video;
      caption?: string;
      link?: { label: string; href: string };
      bare?: boolean;
      hero?: boolean;
      // `device: "phone"`: a portrait screen recording inside a phone mockup (bezel and island).
      device?: "phone";
    }
  // Tall phone screenshots, shown in rows at phone width.
  // `aside` sits beside the phones from 834 up, so a short row does not leave empty space.
  | { kind: "phones"; images: Img[]; caption?: string; callouts?: string[]; aside?: Block[] }
  // Desktop screens or diagrams at full content width. `bare`: tall images too run the full
  // column width, with no mat and no height cap.
  | { kind: "wide"; images: Img[]; caption?: string; columns?: 1 | 2 | 3; bare?: boolean }
  // A photo across the full window width with Carmen's scroll scale (Learn.xyz); caption below,
  // inside the column.
  | { kind: "banner"; image: Img; caption?: string }
  // `note` says what each screen lacked or fixed, shown under it.
  | {
      kind: "compare";
      pairs: { before: Img; after: Img; note?: { before: string; after: string } }[];
      caption?: string;
      device: "phone" | "desktop";
    }
  // Figma 286:337: a dark board of step cards in four columns at every width, then its caption.
  // Each column's tone colours its number and tags.
  | {
      kind: "flowBoard";
      title: string;
      legend: { tone: FlowTone; label: string }[];
      columns: { title: string; tone: FlowTone; cards: { tag: string; title: string; body: string }[] }[];
      caption?: string;
    }
  // A flow drawn as lanes of steps, left to right.
  | { kind: "lanes"; lanes: { title: string; summary: string; steps: string[] }[]; flags?: string[]; caption?: string }
  | { kind: "steps"; label: string; before: string[]; after: string[]; caption?: string }
  // `look: "sky"`: two across, large bold text on the light blue surface (Bloom Figma 179:674).
  | { kind: "tiles"; items: string[]; caption?: string; look?: "sky" }
  // `look`: "quotes" puts each body in its own quote box under a centred title, three across;
  // "list" stacks title over body with no card; "outline" is three across on outlined white cards;
  // "rows" is one full-width row per item, numbered, title only (Bloom's "Design decision").
  | {
      kind: "cards";
      items: { title: string; body?: string }[];
      numbered?: boolean;
      // The number sits on the title's row, not above it (Anewvista, Lumbini 2026-11-02).
      numberInline?: boolean;
      heading?: string;
      // "boxes" (Anewvista Figma 283:572): outlined cards in one row from 1200. Not numbered: the
      // title is the card's label over the body. Numbered: "01" over the title and body. With a
      // `label` ("Step"): "Step 1" over the title, set as body text.
      look?: "quotes" | "list" | "outline" | "rows" | "boxes" | "soft";
      label?: string;
    }
  // `look: "box"`: the quote on a filled box instead of beside a rule. "rules": large, centred
  // between two rules, for a "How might we" line.
  | { kind: "quote"; text: string; cite?: string; look?: "box" | "rules" | "title" }
  // A small label over one large line, as the Framer pages set "Design challenge".
  // `look: "large"`: the line at heading size (40px), as the WTV Figma frame sets "Overview".
  // `look: "compact"`: the line at body size (20px), as Anewvista's decision rows set "Why it matters".
  | { kind: "statement"; label: string; text: string; look?: "large" | "compact" | "title" }
  // A row of screens at set widths (% of the column). Never stacks. They spread edge to edge, or
  // sit left with `gap` (% of the column) between them.
  | { kind: "screens"; images: Img[]; widths: number[]; gap?: number; caption?: string }
  // Numbered outlined cards in rows of four, body text only (Knowunity, Figma 287:176).
  | { kind: "findings"; heading?: string; items: string[] }
  // Outlined cards side by side: label, title, then a line or bullets (Knowunity, Figma 286:348).
  // `columns` defaults to 2; `strong`: body text in the title colour.
  | {
      kind: "options";
      heading?: string;
      columns?: 1 | 2 | 3;
      strong?: boolean;
      muted?: boolean;
      items: { label?: string; title?: string; body?: string; bullets?: string[] }[];
      caption?: string;
    }
  // One bold line between blocks, Title 1 Bold (Knowunity, Figma 286:315).
  | { kind: "lead"; text: string; muted?: boolean }
  // Images in equal columns, each with its caption under it. Never stacks.
  | { kind: "gallery"; columns: 2 | 3; images: Img[] }
  // Interview quotes as speech bubbles over each participant's photo, one at a time (Bloom 211:1257).
  | { kind: "speech"; label: string; items: { quote: string; photo: string }[] }
  | { kind: "panel"; columns: { title: string; items: string[] }[]; caption?: string }
  | { kind: "cycle"; steps: { title: string; body: string }[]; caption?: string }
  | { kind: "flow"; steps: string[]; notes: string[]; caption?: string }
  // `look: "outline"`: centred value and label on an outlined white card.
  | { kind: "stats"; items: { value: string; label: string }[]; source?: string; look?: "outline"; side?: string }
  // Desktop screens shown one at a time, with buttons and a counter. `frame` is a width/height
  // ratio: every slide fills the same frame from the top, so all screens show at one width.
  | { kind: "carousel"; label: string; images: Img[]; frame?: number }
  // One full-width outlined button that opens a page (Knowunity, competitive analysis).
  | { kind: "linkButton"; label: string; href: string }
  | { kind: "links"; items: { label: string; href: string }[] }
  // A short visible list with the full list behind a native toggle.
  | { kind: "details"; summary: string; blocks: Block[] }
  // One series of values as bars; `highlight` marks the bars the text is about (the start and end
  // of a trend, say).
  | {
      kind: "bars";
      title: string;
      unit: string;
      items: { label: string; value: number }[];
      highlight?: string[];
      source: string;
    }
  // A dark panel in the pattern of Carmen's Pilgrimz "Claude Design OS" section: a chip, intro and
  // steps on the left, a checklist card on the right, then a grid of cards (image or text).
  | {
      kind: "showcase";
      label: string;
      intro: string[];
      steps?: { title: string; body: string }[];
      stepsCaption?: string;
      // A prominent link under the steps (Knowunity: the design system and documentation).
      link?: { label: string; href: string };
      kit: { title: string; items: { title: string; body?: string }[] };
      cards: { image?: Img; label?: string; title: string; body?: string }[];
    }
  // Figma "problem section" (203:1646): a labelled statement beside phone screens, each with a
  // hand-drawn ring around each problem and a caption under it. Stacks below 1200.
  | {
      kind: "annotated";
      label: string;
      text: string;
      // Drawn on in order as a hand-drawn ring (Knowunity, 2026-11-05); each problem's card appears when
      // its ring is finished. Rings are centres and radii in px on the Figma 272x590 screen frame.
      problems?: { label: string; body: string }[];
      screens: { image: Img; rings: { cx: number; cy: number; rx: number; ry: number }[] }[];
    }
  // An open question for Lumbini. Rendered in local dev only, never in a production build.
  | { kind: "todo"; text: string }
  // Content not handed over yet. Shown everywhere, labelled, so it never reads as real.
  | { kind: "placeholder"; text: string };

// One screen of a layered hero, in px on its 901x600 stage. `float` is the loop's travel (negative is up);
// `still` layers (the background circle) do not move.
export type HeroLayer = { src: string; x: number; y: number; w: number; h: number; float?: number; still?: boolean };

export type FlowTone = "blue" | "purple" | "red" | "green";

export type Stage = "Problem" | "Solution" | "Impact";

export type Section = {
  id: string;
  stage: Stage;
  // Starts a numbered chapter (e.g. "01", "The problem"). When a study has chapters, the page
  // index lists them instead of the three stages.
  chapter?: { number: string; title: string };
  // Optional small label above the heading, from the source copy (e.g. "Design challenge").
  label?: string;
  // Replaces the usual header and blocks with a filled box: the heading and a /01 numbered list.
  role?: string[];
  heading: string;
  // The heading is for screen readers and the page outline only (Bloom, Figma 211:1274 has none).
  hideHeading?: boolean;
  // The section's name in the content navigation, from words already on the page. Used by
  // studies without chapters (WTV, Bloom); sections without it are left out of the navigation.
  nav?: string;
  // An image beside the heading from 834 up, under it below (WTV's ideation, as on Framer).
  media?: Img;
  // WTV's animated logo cloud beside the heading, in place of `media`; `label` is its alt text.
  logoCloud?: { label: string };
  // From 1200, the label, heading and text sit in a 440 column beside the section's visuals (its
  // `wide` and `video` blocks) in a 696 column (Anewvista Figma 283:572 decision rows).
  // No label over the heading, where the first block already carries the same one (WTV Overview).
  hideEyebrow?: boolean;
  // The heading is 24px Title 1 Bold, as in Knowunity's Outcome (Figma 287:334), not the 40px chapter size.
  smallHeading?: boolean;
  // Only the eyebrow shows; the heading stays for screen readers (Knowunity's Reflection, Figma 287:337).
  eyebrowOnly?: boolean;
  // Paragraphs in the heading group, 12px under the heading, before the blocks.
  lede?: string[];
  // A decision section (Anewvista 284:290): text first, then its before-and-after visual, which grows on hover.
  aside?: boolean;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  // `link`: a word after the value that opens a page (Knowunity's Status: "Shipped. Prototype").
  facts: { label: string; value: string; link?: { label: string; href: string } }[];
  // "My role" list under the facts, where the source has one.
  contributions?: string[];
  cover?: Img;
  // "full": the WTV Figma frame (112:13). Full content width with no page index, a 40px title
  // beside a large cover, the role list in a box numbered /01, and 40px section headings.
  // Default is the index layout.
  layout?: "full";
  // Full layout only. "stacked": title and summary across the full width, cover below
  // (Bloom Figma 176:383). Default is the title beside the cover (WTV).
  hero?: "stacked";
  // A full-width project-coloured opening with an eyebrow, tags and a visual beside the title,
  // then the facts row (Bloom Figma 211:1164 and 221:2779).
  // The visual is an image (Bloom) or a looping recording (Anewvista).
  // `screen`: the visual is a plain screenshot, so it sits in a monitor (MonitorFrame).
  // `clip`: the visual sits on the band's bottom edge and is cut there (Knowunity's phones).
  // `layers`: the visual is built from separate screens that slide in and float (Bloom, Figma 319:1009).
  opening?: {
    eyebrow: string;
    tags: string[];
    image?: Img;
    video?: Video;
    screen?: boolean;
    clip?: boolean;
    layers?: { alt: string; items: HeroLayer[] };
  };
  // Carmen's Pilgrimz scroll effects on this page: sections slide up as they enter.
  motion?: "carmen";
  // The project's colours on cards, tiles and rules across the page (theme-* in globals.css).
  theme?: "bloom" | "anewvista" | "knowunity" | "wtv" | "tdk";
  // Shown under the title in a stacked hero, in place of a cover (Bloom's three phone videos).
  heroBlocks?: Block[];
  // Sections `first` to `last` (ids) sit inside one collapsible "full process" panel, open at
  // first, as on Bloom's Framer page.
  process?: { label: string; title: string; first: string; last: string };
  sections: Section[];
};
