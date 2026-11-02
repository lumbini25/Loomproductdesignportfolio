---
name: build-page
description: "Applies when building or editing any page of Lumbini's portfolio site: home, a case study, About, Fun and experiments. Triggers on: 'build the home page', 'build the X case study', 'add a page', 'match this to Figma', or any edit under app/ or components/. Covers where pages live, how to resolve the brief against the Figma file, what to reuse, what to do when nothing fits, and what to report. Do NOT use for token-only changes or copy-only fixes in content files."
---

# Building a page in the portfolio

## A page is a route, reachable by clicking

Every page is a Next.js route reached from the top nav, footer nav or a project card. Not by
typing its URL. A page reachable only from the address bar is not built.

Routes: `app/page.tsx` (Home), `app/about`, `app/fun`, `app/work/[slug]` (case studies, from
`content/projects.ts`). Shared parts in `components/`. Copy in `content/`.

## The method

### 1. Read the contract first

- `platform-constraints.md` wins over the brief where they disagree (it is newer: 834 not 810,
  light mode only, Resume is a link to the Google Doc, not a page).
- `Portfolio Design Brief Lumbini Sharma.md`: the page's skim layer and depth layer, and its
  failure states.
- `visual-inspiration.md`: tone, case-study structure (Problem → Solution → Impact), colour and type.

### 2. Does the page have a Figma frame?

Home and About are designed in Figma. Every other page is built straight in code.
File: `Uu1a2kCZL3M4y86CtPcmqR`, page "Foundation". Home is `19:1496`.

TODO: confirm `19:1496` is the current Home (it has copies at `19:1635` and `23:126`), and which
frame is the current About.

**Screenshot the frame before trusting a node read.** Layer names in this file are not reliable:
the TDK card is named "card: Flattened a five-level i" / "thumb WTV", and three button states are
all called "selceted".

### 3. Reuse before building

Figma components: Project card (Default, Hover); buttons, primary and secondary (default, hover,
focus, pressed, disabled).

Code components: `Button` (`ButtonLink`, `buttonClasses`), `ProjectCard`, `FeaturedProject`,
`Tags`, `Eyebrow`, `SectionHeading`, `Container`, `SiteHeader`, `SiteFooter`, `CopyEmail`,
`VideoPlayer`, icons in `components/icons.tsx`. Case studies are data in `content/case-studies/`
(types in `types.ts`), drawn by `components/case-study/Blocks.tsx`; add a block kind there before
building a one-off layout.

Current Figma frames are on the **Prototype** page: Home `103:2944`, About `103:3131`,
Fun `103:3078` (decisions.md, Oct 20).

### 4. When nothing fits

Build it inside the page, from tokens, and add one line to `component-gaps.md`: what it was and
which page needed it. If it is already on that list, build it as a component and remove both
lines. Twice means it is a component.

### 5. Every value comes from the tokens

Tokens are Lumbini's, mapped to the Tailwind config. Tailwind screens are custom: 834 and 1440.
Never Tailwind's default breakpoints. No raw hex, no default Tailwind palette, no fallback values.

TODO: token file location and the semantic layer (Figma has 17 primitives in one collection, no
semantic names yet).
TODO: what to do when a value has no token.

### 6. Three widths, light mode

1440, 834 and 390. Nothing else. Safe-area insets top and bottom on phones.

### 7. Accessibility is the baseline

WCAG 2.1 AA. 16px minimum body text. 44×44 touch targets at rendered size: the 24px-tall text
nav links in Figma do not pass as drawn. 4.5:1 text contrast.

Focus: 2px Rust500 ring, 2px gap outside the button (`outline-offset`), per the Figma button set.

TODO: pressed state. In Figma it is a 1px border, hard to tell apart from default.
TODO: primary hover (white on Rust 200 is about 2.4:1).

Real alt text; decorative images hidden. Keyboard reaches everything. Reduced motion gets a
still. Resume opens the Google Doc in a new tab and says so to screen readers.

### 8. Real content, real behaviour

- Copy comes from the content files, never written into the layout. Do not rewrite claims.
- Every number carries its source and sample size, or is labelled target, projection or school
  project.
- Real assets only. A missing asset is a clearly labelled placeholder, never a generated stand-in.
- No control that does nothing: no dead links, fake buttons or demo controls that look live.
- Nothing autoplays unless the autoplay register in `platform-constraints.md` says Yes.
- Every page has its own title, description and share image.

### 9. Build the failure states

From the brief: video fails or is slow (poster and caption); 390px (at-a-glance block stacks
above the fold); arriving straight on a case study (still says who Lumbini is, links home);
screen reader; 200% zoom; 320px wide; long titles wrapping; a missing image.

### 10. Open choices get options, not a pick

Headline, serif use and hero composition: build two or three contrasting options and let
Lumbini compare before committing.

## When you're done

TODO: commands, once the app exists (typecheck, lint, build, accessibility sweep at three widths).

Then walk the page in the browser at 1440, 834 and 390, clicking only, by mouse and by keyboard.

### Check Figma

If it had a frame: screenshot it and compare property by property. Type, spacing, colour, icon.

### Report

- **With a frame:** every difference between the build and the frame, including the confident ones.
- **Without one:** what you had to decide that was not written down. Those go into the decision log.
- Either way: anything added to `component-gaps.md`, and any link left unwired, with why.
