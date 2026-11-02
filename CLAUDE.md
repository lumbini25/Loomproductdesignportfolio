@AGENTS.md

# Lumbini Sharma — product design portfolio

A content site that lets a hiring manager conclude in 60 seconds who Lumbini is and what Lumbini can do.
A responsive website, not an app: static pages, built with Next.js 16 and Tailwind 4. (`app/` is
only the name of Next.js's routing folder.)

`reference/` and the brief are local only — kept out of git because the repo is public.

## Which file wins

`platform-constraints.md` (Oct 13) overrules `Portfolio Design Brief Lumbini Sharma.md` (Oct 12)
where they disagree: 834 not 810, light mode only, Resume is a link to the Google Doc and not a page,
no contact form. Decisions made since then are in `decisions.md`, and those win over both.

## Hard rules

- **Three widths, light mode.** 1440, 834 and 390. Tailwind screens are custom: `tablet` 834 and
  `desktop` 1200, where the 1440 composition starts and scales in proportion (decisions.md, Oct 22) —
  never Tailwind's default breakpoints. No dark mode, no layout above 1440.
- **Every value from the tokens.** No raw hex, no default Tailwind palette, no `var(--x, fallback)`.
  Tokens live in `app/globals.css`: primitives as custom properties, semantic names in `@theme`
  (Figma "Primitives" and "Semantic" collections). Only semantic names reach Tailwind.
  When a value has no token: add it to `globals.css` marked `TODO: no Figma token` and log it in
  `decisions.md`.
- **Accessibility is the baseline.** WCAG 2.1 AA; 16px minimum body text; 44×44 touch targets at
  the **rendered** size; 4.5:1 text contrast; real alt text; keyboard reaches everything; reduced
  motion gets a still.
- **Focus:** 2px Rust500 ring with a 2px gap outside the control (`outline-offset: 2px`), as drawn
  on the Figma button set.
  TODO: pressed state (the Figma 1px border is hard to tell from default).
- **Casing.** Sentence case for labels, buttons, section headings and the hero. Title case for
  case-study titles (cards and the featured block). Eyebrows are all caps via CSS over
  sentence-case source text. Proper nouns as written: Knowunity, TDK, WTV, Anewvista.
- **One icon set:** Phosphor, regular weight, SVGs copied into one icons file. Grep it before
  adding a glyph. Never a text character where an icon belongs.
- **Real content only.** Copy lives in content files, never in layout. Do not rewrite claims.
  Every number carries its source and sample size, or is labelled target, projection or school
  project. Real assets only; a missing asset is a labelled placeholder.
- **No control that does nothing.** No dead links, fake buttons or demo controls that look live.
- **Media.** Nothing autoplays unless the autoplay register in `platform-constraints.md` says Yes;
  autoplay is always muted, with a poster and a pause control.
- **Open choices get options.** Headline, serif use and hero composition: build two or three and
  let Lumbini compare.

## Never

- Never put reference material in `public/`. It lives in `reference/`.
- Never add a dependency without asking.
- Never invent a rule, metric or quote. Write `TODO:` and ask.

## Verification

- `npm run lint` and `npm run build` — prove it compiles. Say nothing about design.
- `npm run test:breakpoints` — builds, then loads every route at 15 sizes in Chromium, Firefox and
  WebKit. Fails on sideways scroll, a failed page or a script error. Says nothing about design.
- Walk every changed page in the browser at 1440, 834 and 390, clicking only, by mouse and keyboard.
- Pages with a Figma frame: screenshot the frame and compare property by property.
- `npm run test:a11y` — builds, then runs axe (WCAG 2.1 A and AA) over every route at 390, 834 and
  1440, in Chromium, with collapsed sections open. It does not see text inside images, the open
  mobile menu, keyboard flow or whether alt text is any good.

A clean result covers only what was run. Not run is not clean — say which.

## Files

| File | Read it when |
| --- | --- |
| `platform-constraints.md` | Before building anything. Scope, accessibility, media, what is out. |
| `Portfolio Design Brief Lumbini Sharma.md` | Building a page. Skim and depth layers, failure states, case-study rework. |
| `visual-inspiration.md` | Styling or writing. Tone, colour, type, case-study structure. |
| `decisions.md` | Before proposing anything. It may already be decided, or rejected. |
| `component-gaps.md` | Before building a page. Things built inline because no component existed. |
| `.claude/skills/build-page/` | Loaded automatically when a page is built. |
| `reference/` | Matching a layout. Inspiration and screenshots. Never shipped. |
| Figma `Uu1a2kCZL3M4y86CtPcmqR` | Home (`19:1496`) and About. Screenshot before trusting layer names. |

## Later — when X, add Y

- When the **tokens are settled in Figma**, add the token file and a check that fails on raw hex.
- When the **first page is built**, add `eval/rubric.md` with critics.
- When there are **three or more components**, consider Storybook and its MCP.
- When a **finding repeats across two reviews**, write it here as a rule, with the count.
- When a **decision is reversed**, label it as a reversal in `decisions.md`; never edit the old entry.
- When the **domain and host are chosen**, add the deploy and per-page share images.
