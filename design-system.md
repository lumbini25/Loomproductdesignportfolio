# Design system rules

Rules for building screens from the Loombini Claude Portfolio Figma file. Every value lives in `tokens.json`. This file holds no values. If a rule here seems to need a number or a color, read it from `tokens.json`.

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
