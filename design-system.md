# Design system rules

Rules for building screens from the Loombini Claude Portfolio Figma file. Colors, radii and spacing live in `tokens.json`. Type is defined in the Type section below, and `tokens.json` carries the same 23 text styles. If a rule here seems to need a color or a radius, read it from `tokens.json`.

Scope comes from `platform-constraints.md`: Next.js and Tailwind, light mode only, three designed widths, WCAG 2.1 AA, 16px minimum body text, 44x44px touch targets.

## What exists

Two components exist in the file. Nothing else is a component yet.

| Component | Variants |
| --- | --- |
| Button | Type (Primary, Secondary), Size (Small, Medium, Large), State (Default, Hover, Focused, Selected, Disabled), and a label text property |
| Project card | State (Default, Hover) |

Everything else on the pages (top nav, footer, hero, tags, icon buttons, section headings) is a plain frame, not a component. See "What is missing" before treating any of them as reusable.

## Which component for which job

**Button**
- Primary is the one main action in an area, such as Contact.
- Secondary is a supporting action beside or below a primary one, such as More about me.
- Pick the size by the space the control sits in. Do not resize a button by hand.
- One primary button per view. A second primary means one of them should be secondary.
- Selected is defined in the file but its meaning is not written down. Do not use it until the owner says what it means.

**Project card**
- One card per case study, on the home page and the work list.
- The featured case study gets the featured layout, not a bigger card.
- The card carries its own button. Do not add a second button or a separate link on top of it.
- Hover is a state of the card. Essential content must also be visible without hover.

**Anything not listed**
- Check the file first. If a frame already does the job, reuse its structure and say it is not yet a component.
- If nothing does the job, stop and report it using the rule in "What is missing".

## How the scaffold is composed

Every page is the same three bands in this order: top nav, page body, footer. The body changes per page. The top nav and footer do not.

**Top nav**
- Logo at the left, then the links: Work, About, Fun and experiments, Resume.
- The Contact button is the last item. It is the one primary action in the nav.
- Resume is a link, not a page. It opens the Google Doc in a new tab and says so in its label.
- At 390px the links collapse into a menu button with a full-screen panel.

**Page body, home**
- Hero: availability line, headline, short intro, social icon links.
- Media strip: static frame in design. Motion needs a reduced-motion still and an entry in the autoplay register in `platform-constraints.md`.
- Selected work: section heading, the featured card, then the other project cards.
- About teaser: heading, short copy, one secondary button.

**Page body, other pages**
- Page header (title and intro), then the page's own content.
- About and Fun and experiments follow this pattern. Case study pages are built in code, with the section index beside or above the content as the brief describes.

**Footer**
- Contact block: email address as visible text, a copy button, LinkedIn and X icon links.
- Footer nav, including Resume.
- One availability line.
- No contact form and no other contact details.

**Slot rules**
- One heading level per band, in order. No skipped levels.
- Cards sit in the project cards slot only. They are not placed in the hero or footer.
- Columns per breakpoint follow the brief: three, two, one across for cards.
- Content that is not in a slot does not exist yet. Say so instead of adding a slot.

## Type

The type definitions for every breakpoint. The source of truth is Figma's local text styles. The code
values below are read from `app/globals.css`. Where the two differ, the difference is listed under "Where
the code differs from Figma". Do not pick a size that is not in these tables.

### Breakpoints for type

| Name | Width | Notes |
| --- | --- | --- |
| Phone | below 834 | Designed at 390. Uses the mobile text styles. |
| Tablet | 834 to 1199 | Designed at 834. Large styles step down. |
| Desktop | 1200 and up | Designed at 1440. Full size. The 1440 layout starts at 1200. |

### Typefaces

| Family | Role | Where |
| --- | --- | --- |
| Plus Jakarta Sans | Headings, titles, numbers, labels (Caption styles) | Home, About, Fun, and every case study heading |
| DM Sans | Body text, captions, buttons | About and Fun body, all case study body text |
| Nunito Sans | Site shell body, and Home's headings from 834 | `font-sans`. In case studies it is replaced by DM Sans |
| Libre Baskerville | Editorial accent only: the Home headline and the labels on Home and About | `font-serif`. In case studies labels use Plus Jakarta |

Case studies set one pair: Plus Jakarta Sans for headings and numbers, DM Sans for everything else. This
is one rule on the `.case-study` wrapper in `globals.css`, not a per-block choice.

### Figma text styles

Names are as they are spelled in Figma, including its typo. Auto line height is written "auto". The
Tablet and Mobile styles were added on 2026-11-03 so that every step the code uses has a Figma style.

| Figma style | Family and weight | Size / line height | Letter spacing | Breakpoint | Code token |
| --- | --- | --- | --- | --- | --- |
| H0 | Plus Jakarta Sans Bold | 72 / 80 | -2% | Desktop | `text-h0` |
| H0 Tablet | Plus Jakarta Sans Bold | 56 / 64 | -2% | Tablet | `text-h0` |
| H0 Mobile | Plus Jakarta Sans Bold | 44 / 52 | -2% | Phone | `text-h0` |
| H1 | Plus Jakarta Sans Bold | 56 / 80 | -2% | Desktop | `text-h1` |
| H1 Tablet | Plus Jakarta Sans Bold | 48 / 56 | -2% | Tablet | `text-h1` |
| H3 | Plus Jakarta Sans Bold | 40 / auto | -1% | Desktop | `text-h3` |
| H3 Tablet | Plus Jakarta Sans Bold | 34 / 42 | -1% | Tablet | `text-h3` |
| Title 1 Bold | Plus Jakarta Sans Bold | 24 / 36 | 0 | Desktop | `text-title-*`, `text-title-mobile` |
| Title 1 Bold Tablet | Plus Jakarta Sans Bold | 22 / 32 | 0 | Tablet | `text-title-*` |
| Title 1 Bold Mobile | Plus Jakarta Sans Bold | 20 / 28 | 0 | Phone | `text-title-*` |
| Subtitile1 Regular S | Nunito Sans Regular | 18 / 24 | 0 | All | `text-subtitle-s` |
| Body L | DM Sans Regular | 28 / 38 | 0 | Desktop | `text-citation` |
| Body L Tablet | DM Sans Regular | 24 / 34 | 0 | Tablet | `text-citation` |
| Body Regular M | DM Sans Regular | 20 / 30 | 0 | Desktop and Tablet | `text-body-m` |
| Body Semibold S | DM Sans SemiBold | 14 / auto | 0 | Desktop and Tablet | `text-body-semibold-s` |
| Caption M | Plus Jakarta Sans Medium | 12 / auto | 6% | Desktop and Tablet | `text-caption-m` |
| EYEBROW TEXT | Plus Jakarta Sans Bold | 12 / auto | 0 | unused: no layer in Figma uses it | none |
| H1 Mobile | Plus Jakarta Sans Bold | 20 / auto | -1% | Phone | `text-h1-mobile`, and `text-h3` below 834 |
| H3 Mobile | Plus Jakarta Sans Bold | 16 / 24 | 0 | Phone | `text-h3-mobile` |
| Mobile Body1 | DM Sans Regular | 14 / auto | 0 | Phone | `text-mobile-body-1`, and `text-body-m` below 834 |
| Mobile Body2 | DM Sans SemiBold | 10 / 16 | 0 | Phone | `text-mobile-body-2` (case study captions) |
| Caption Mobile | Plus Jakarta Sans SemiBold | 9 / auto | 6% | Phone | `text-mobile-caption`, and `text-caption-m` below 834 |
| Button Mobile | DM Sans SemiBold | 14 / 20 | 0 | Phone | `text-mobile-button` |

### Size by breakpoint

Each row is one code token, with the Figma style it follows. Size / line height, in px.

| Token | Follows Figma | Desktop (1200+) | Tablet (834 to 1199) | Phone (below 834) |
| --- | --- | --- | --- | --- |
| `text-h0` | H0, H0 Tablet, H0 Mobile | 72 / 80 | 56 / 64 | 44 / 52 |
| `text-h1` | H1, H1 Tablet | 56 / 80 | 48 / 56 | no style: use H1 Mobile |
| `text-h3` | H3, H3 Tablet, then H1 Mobile | 40 / 48 | 34 / 42 | 20 / auto |
| `text-h3-sm` | H3 at phone width | 30 / 38 | 30 / 38 | 20 / auto |
| `text-citation` | Body L, Body L Tablet, then Body Regular M | 28 / 38 | 24 / 34 | 20 / 30 |
| `text-body-l` | Title 1 Bold, Tablet, then Body Regular M | 24 / 36 | 22 / 32 | 20 / 30 |
| `text-title-l`, `-m`, `-s`, `-xs` | Title 1 Bold, Tablet, Mobile | 24 / 36 | 22 / 32 | 20 / 28 |
| `text-subtitle-s` | Subtitile1 Regular S | 18 / 24 | 18 / 24 | 18 / 24 |
| `text-body-m` | Body Regular M, then Mobile Body1 | 20 / 30 | 20 / 30 | 14 / auto |
| `text-body-s` | no style | 16 / 24 | 16 / 24 | 14 / auto |
| `text-body-semibold-s` | Body Semibold S | 14 / auto | 14 / auto | 14 / auto |
| `text-caption-m` | Caption M, then Caption Mobile | 12 / 16, 6% | 12 / 16, 6% | 9 / auto, 6% |

Only Tailwind's `tablet` (834) and `desktop` (1200) screens are used. Never the default breakpoints.

### Case study type

These rules sit on the `.case-study` wrapper and apply to all five case studies.

| Role | Desktop and Tablet | Phone |
| --- | --- | --- |
| Section label (eyebrow) | Plus Jakarta Medium 12, uppercase, 6% | Plus Jakarta SemiBold 9 (Caption Mobile) |
| Chapter heading, up to 150 characters | Plus Jakarta Bold 40 desktop, 34 tablet (H3) | Plus Jakarta Bold 20 (H1 Mobile) |
| Chapter heading over 150 characters, sub-section heading, and card titles | Plus Jakarta Bold 24 desktop, 22 tablet (Title 1 Bold) | Plus Jakarta Bold 16 / 24 (H3 Mobile) |
| Body text | DM Sans Regular 20 / 30 | DM Sans Regular 14 (Mobile Body1) |
| Statements | DM Sans Regular 20 / 30 | DM Sans Regular 14 |
| Quotes | 20, weight and colour per study | 14 |
| Captions under images and screens | DM Sans SemiBold 14 (Body Semibold S) | DM Sans SemiBold 10 / 16 (Mobile Body2) |
| At-a-glance values | DM Sans SemiBold 18 | DM Sans SemiBold 14 |
| Stat labels | DM Sans SemiBold 16 | DM Sans SemiBold 14 |
| Contents list | DM Sans Regular 20 / 30 | 18 (Subtitle) |

Every caption on a page is one size, whatever row it sits in. Caption size has its own variables
(`--caption-size`, `--caption-line`) so it never follows a scaled row.

### Rules

1. Pick from the tables. A size that is not listed is a gap to report, not a value to invent (rule 1 below).
2. Never bind text to the nearest style when it changes size or weight (rule 9 below). Report the gap.
3. Body copy is never below the body minimum. Caption styles are for labels and captions only (rule 8).
4. One caption size per page. One body size per role.
5. A chapter heading (a section with a label above it) is H3: 40 desktop, 34 tablet, 20 phone. If its text is longer than 150 characters it is paragraph-length and takes Title 1 Bold (24, 22, 20). Sub-section headings, with no chapter label, are always Title 1 Bold.
6. The phone styles apply below 834. Do not use a phone style above it, or a desktop style below it.

### Known exceptions to the size floor

These use type smaller than the 14px phone body size, on purpose.

- **Captions on phones** are 10 / 16 (Mobile Body2).
- **Rows of images and screens** (`fit-2` to `fit-5`) scale their text with the screen below 834: 14 down to
  7px, from a base of 390. This keeps columns side by side on phones. It is the only place type is
  computed from the width.
- **Knowunity's task flow board** is four columns at every width, so its text scales from 14px at 562
  wide down to 7px at 358.
- **The 9px phone label** is Figma's Caption Mobile style.

### Exceptions inside the case studies

- **Bloom's Discovery cards** are soft filled cards with an 18px semibold title and 18px body, as drawn in Figma 443:2690. Other cards use a 24px title and 20px body.
- **Card text** is Caption grey (#5d5955) on cards and Body grey (#77736f) on plain white. Text on a tint always uses the darker grey so it passes contrast.

### Where the code differs from Figma

- **EYEBROW TEXT** exists in Figma. No layer in Figma uses it and the code does not either. Section labels use
  Caption M (Caption Mobile on phones). Delete the style, or bind it to the labels it was made for, when you
  decide.
- **Title 1.** Figma has only Title 1 Bold. The code names several tokens "Title 1" for the regular weight
  (`text-body-l`, `text-title-l`). They render at the same sizes as the bold style.
- **Case studies use DM Sans where Figma's Subtitile1 Regular S is Nunito Sans.** The Nunito Sans setting is
  replaced on the `.case-study` wrapper.
- **No phone style for H1.** H1 Mobile covers it. `text-body-s` (16 / 24) and `text-h3-sm` (30 / 38) have no
  Figma style: both are code sizes for the 390 composition.
- **Resolved on 2026-11-03.** Display (56 / 64) is gone: Figma's "Let's talk." is H1, so the footer heading
  uses `text-h1`. The 72px heading is its own style, H0. Every tablet and phone step the code uses now has a
  Figma style.
- **`tokens.json` type was regenerated** from the Figma text styles on 2026-11-03: 23 styles, with the
  families, weights, sizes and line heights read from Figma. It also carries H0, H1 and the tablet and mobile
  steps. Colors, radii and spacing in that file were not touched.

## Naming conventions

**Tokens**
- Dotted paths in `tokens.json`, lowercase, hyphens inside a word.
- Primitive names hold appearance: color family and step. They exist only in the primitive layer.
- Semantic names hold meaning: group, then role, then state when there is one. The groups are the ones in `tokens.json`.
- In CSS and Tailwind the name is the path with dots turned into hyphens. Do not rename a token in code.
- The typography group holds one entry per text style, with family, weight, size and line height as separate tokens.

**Figma**
- Component sets are named in sentence case: Button, Project card.
- Variant properties are Type, Size, State. Values are single words in title case, as they are now.
- Layers are lowercase plain names that say what the thing is (top nav, selected work, about teaser).
- Frames named "Frame 123" or "Rectangle 4567" are unfinished. Name them before reusing.

**Code**
- One React component per Figma component, with the same name in PascalCase and the same variant props.
- Props mirror variant properties. Do not add a prop the Figma component does not have.

## Never do this

1. **Never invent a value that is not in `tokens.json`.** If something is missing, say so instead of filling the gap.
2. **Never use a CSS fallback value** such as `var(--token, #333)`. If a token resolves to nothing, that is a bug to fix, not to hide.
3. **Sentence case on every label, button and heading.** Capitals only for proper nouns. This applies to Figma text, code strings and alt text.
4. **Never put an appearance word in a semantic name.** A word that describes how a color looks belongs in the primitive layer only.
5. **Never read a primitive directly.** Components consume the semantic layer, and the semantic layer references the primitives.
6. **Never build something new when a component in this system already does the job.** Look at what exists before you make anything.
7. **Never invent a component to fill a gap.** This is a real system that gets extended on purpose. Say what is missing and what you would call it, and let the owner decide.
8. Never use a text style below the body minimum for body copy. Caption M is for non-body labels only.
9. Never bind text to the nearest style when the match changes size or weight. Report the gap.
10. Never place two primary buttons in the same view.
11. Never hide essential content behind hover.
12. Never make a control that looks active and does nothing. Unbuilt demos are labelled as unbuilt.
13. Never add a mode, a dark variant or a width outside the three designed ones.
14. Never use a Figma local style or a hard-coded value where a variable exists.

## Known problems in the current tokens

These are in the file today. Do not copy them into new work, and do not fix them without the owner's decision.

- Several semantic names carry appearance words: the `greyscale` group name, `darker`, `subtle` and `negative`. They break rule 4.
- `greyscale.surface.default` and `greyscale.text.disabled` resolve to the same primitive.
- The semantic group `primary.primary.border.*` repeats `primary`.
- A style named Subtitile1 Regular S has a spelling error that carries into `tokens.json`.
- The Tailwind screen for tablet is 834px in `platform-constraints.md` and 810px in the brief. Neither is decided. Do not pick one.

## What is missing

Report these instead of building them. The suggested names are proposals.

- Components: Top nav, Footer, Icon button (the 44x44 social links), Tag, Page header, Section heading, Email copy button, Availability badge.
- Tokens: spacing, project accent colors, white card surfaces, a focus ring color, status colors (green exists only as a primitive), exact line heights for the five auto line height styles.
- Definitions: what the Button Selected state means, which font family the portfolio uses.

## When the system has no answer

Say what is missing, name what you would call it, and stop. The owner decides. Do not fill the gap with a plausible guess.
