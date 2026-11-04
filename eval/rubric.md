# Critique rubric

How a page or a change to this portfolio is scored. Six weighted dimensions, then four hard gates
that pass or fail on their own. A critic scores each dimension 1–10, names the evidence for the
score, and lists the gates separately.

The project this scores against: a site that lets a hiring manager conclude in 60 seconds who
Lumbini is and what she can do (brief), built on Lumbini's tokens and components, in three widths
(1440, 834, 390), light mode only.

The anchors below use Lumbini's own principles, not generic ones:

- **Behavior over assumption.** Design from what people actually do.
- **Useful before beautiful.** Good design reduces friction for a real person doing a real task.
- **Research before pixels.** Understand where people struggle before the screens.
- **Make the first impression memorable; make the work easy to understand** (visual-inspiration.md).
- **The 10-second test:** a reader who gives a page 10 seconds can say what it is and why it
  matters (brief). Every page has a skim layer for the recruiter and a depth layer for the reader
  who stays.
- **Every visual explains a decision, demonstrates the product, or supports a claim.**
- **Distinguish verified outcomes from goals.** No invented metrics, quotes or results.

## Scoring rules

1. **"Looks good" is a 6, not a 9.** A 9 survives a senior critique untouched: a senior designer
   reviewing it would not ask for a single change in that dimension.
2. **8 or above only if verified by rendering, measuring or testing.** Never from reading code. A
   score of 8 or more names what was rendered, measured or run, at which widths, and the result.
   Without that, the dimension is capped at 7.
3. **Not run is not clean.** A check that was not run counts as no evidence, never as a pass
   (CLAUDE.md).
4. **Score what renders, not what was intended.** A token in the source that renders the wrong
   value scores on the rendered value.
5. **Weights.** High = 3, Medium = 2, Low = 1. The weighted score is the sum of each score times its
   weight, divided by 15. Report it to one decimal place, beside the six scores, never instead of them.
6. **Gates come first.** A failed hard gate fails the page, whatever its scores.

## Dimensions

| Dimension | Weight | What it scores |
| --- | --- | --- |
| System fidelity | High | Every value traces to a token, every component to the library |
| Coherence | High | One product, not screens that arrived separately |
| Craft | High | Spacing, rhythm, states, the small deliberate decisions |
| UX judgment | High | States handled, hierarchy clear, failure paths designed |
| Accessibility | Medium | Contrast, touch targets, meaning never on color alone |
| Structure | Low | The layout holds together and the thing renders |

### System fidelity (High)

**What it scores.** Whether every colour, size, space, radius and shadow comes from
`app/globals.css` (Figma's Primitives and Semantic collections), and whether every repeated pattern
uses an existing component (`components/`, the block kinds in `components/case-study/Blocks.tsx`)
instead of a one-off. A value with no Figma token is allowed only if it is marked
`TODO: no Figma token` in `globals.css` and logged in `decisions.md`.

- **4.** Raw hex or Tailwind's default palette in component source. Arbitrary values (`text-[17px]`,
  `p-[13px]`) with no token behind them. A card or caption built inline when a block kind already
  exists. Figma frames with unbound colours.
- **6.** Tokens used almost everywhere, but a few arbitrary widths or sizes with no comment, or a new
  token added without the TODO mark or the decisions.md entry. Components reused, with one or two
  near-duplicates (two card styles that differ by a border).
- **9.** `npm run check:tokens` passes. Every remaining arbitrary value has a comment that says why
  (a Figma measurement or a layout constraint). Every token without a Figma equivalent is marked
  and logged. A new pattern was built once as a block kind and reused, not copied. Figma colours in
  the frames under review are bound to Semantic variables.

### Coherence (High)

**What it scores.** Whether the five case studies, Home, About and Fun read as one portfolio. The
same role always gets the same treatment: one type scale, one label style, one caption style, one
card language, one radius scale (16 large, 12 small, 8 nested), project colour concentrated in each
opening and white and grey after it. The references (Carmen, Bobby, Gauravi, Pearl) are sources of
qualities, not layouts to stitch together.

- **4.** Each case study has its own label font, caption size or card style. Sections lifted from
  different references keep their own look. Project colour spreads through the body. A reader can
  tell where each idea was borrowed from.
- **6.** One type scale and card language on most pages, but one study, or one block, drifts: a
  serif label among sans labels, a 24px statement in one study and 20px in another, a different
  gap between blocks.
- **9.** A census of rendered styles across all five case studies, at 1440 and 390, shows one value
  per role: labels, headings, body, captions, statements, section gaps (96 and 64) and block gaps
  (32). Differences between studies are deliberate and logged (for example, at-a-glance values that
  follow each study's own frame). A reader moving between studies notices the projects, not the
  system.

### Craft (High)

**What it scores.** The small deliberate decisions, judged by "useful before beautiful": does each
decision reduce friction for a reader, or only decorate. Spacing rhythm, alignment to the column,
readable line lengths, image crops, every interactive state, and motion that answers a question.

- **4.** Gaps that vary without reason. Text and images on different left edges. Body lines over
  100 characters. Images cropped through the subject or into their own cards. Hover-only feedback.
  Motion that delays content or exists only to move.
- **6.** On the spacing scale and aligned, and it looks polished in a screenshot. But some states
  are defaults (a focus ring that matches hover, disabled indistinguishable from enabled), some
  crops are accidental, and motion is present without a stated purpose.
- **9.** Spacing follows the scale and the rhythm is visible: sections, blocks and in-card gaps
  each step down consistently. Line lengths stay readable at every width. Every crop is chosen.
  Every interactive element has distinct default, hover, focus, pressed and disabled states,
  rendered and compared. Motion has a purpose (it shows what changed, or where something came
  from), is paused or stilled under reduced motion, and never holds back content.

### UX judgment (High)

**What it scores.** Whether a reader gets what they came for, judged by "behavior over assumption"
and the 10-second test. The skim layer works on its own, the Problem → Solution → Impact story is
clear, every claim carries its evidence, and the failure states in the brief are designed rather
than discovered: video fails or is slow, a 390px phone, a reader arriving straight on a case study,
a screen reader, 200% zoom, 320px wide, long titles, a missing image.

- **4.** The page needs reading to make sense. Numbers without a source or sample size, or outcomes
  presented as measured when they are targets. Controls that look live and do nothing. A missing
  asset shown as if it were real. Failure states never tried.
- **6.** The happy path works at 1440: the story is clear and the hierarchy reads. But the skim
  layer fails on a phone, a number or two lacks its label, or some failure states were never
  rendered (no poster when a video fails, a dead end at the bottom of a study).
- **9.** A reader given 10 seconds on any page, at any width, can say what it is and why it
  matters. Every number carries its source and sample size or is labelled target, projection or
  school project. Every visual explains a decision or supports a claim, and its caption says what
  to notice. No control does nothing. Each failure state in the brief has been rendered and works.
  Placeholders are labelled as placeholders.

### Accessibility (Medium)

**What it scores.** WCAG 2.1 AA as the baseline: contrast, touch targets at the rendered size,
keyboard reach and visible focus, real alt text, heading order, reduced motion, and meaning that
never rests on colour alone. The four hard gates below are the floor; this dimension scores
everything above it.

- **4.** Any hard gate fails. Or, keyboard focus is lost somewhere, alt text is missing or empty on
  a meaningful image, or a status is shown only by colour.
- **6.** `npm run test:a11y` is clean and the gates pass, but nothing beyond the automated scan was
  checked: no keyboard walk, alt text not read for meaning, reduced motion not tried.
- **9.** Gates pass, `npm run test:a11y` is clean on every route at 390, 834 and 1440, and the
  manual checks axe cannot do were done and recorded: a keyboard walk of the changed pages (order,
  focus visible, nothing trapped), reduced motion gives a still, alt text describes what the image
  shows and why, every state change has a non-colour signal, and moving content can be paused.

### Structure (Low)

**What it scores.** Whether the layout holds together and the page renders: it builds, loads,
scrolls without sideways overflow, and keeps its layout at every width from 320 up.

- **4.** Lint or build fails, a route errors, or a page scrolls sideways at a common width.
- **6.** It builds and renders at 1440, 834 and 390, but sizes between them were not checked, or a
  layout jumps at a breakpoint edge (1199 to 1200, 833 to 834).
- **9.** `npm run lint`, `npm run build` and `npm run test:breakpoints` all pass: every route at 15
  sizes in Chromium, Firefox and WebKit, with no sideways scroll, no failed page and no script
  error. The breakpoint edges were rendered and hold.

## Hard gates

Pass or fail, checked separately from the scores. One failure fails the page.

| Gate | Pass condition | How it is checked |
| --- | --- | --- |
| Body text contrast | Every body text colour is at least 4.5:1 on the surface it renders on | `npm run test:a11y` (axe colour-contrast) on every route at 390, 834 and 1440, plus a manual check of text on images and in states axe cannot see |
| Touch targets | Every interactive element is at least 44 × 44 at its rendered size (44pt = 44 CSS px) | Measure the rendered bounding box at 390 in the browser; a small visual inside a 44px hit area passes |
| No raw hex in components | No hex colour in any `.tsx` under `app/` or `components/` | `npm run check:tokens` |
| No identical states | No two states that should differ render identically: default and hover, hover and focus, default and pressed, enabled and disabled, the current nav item and the others, the active carousel dot and the others | Render each pair and compare; any pair that matches pixel for pixel fails. Known open item: the Figma pressed state (a 1px border) is hard to tell from default (CLAUDE.md TODO) |

## Report format

```
Page or change: <route or description>        Widths checked: <list>

Gates
  Body text contrast   PASS / FAIL  — <evidence>
  Touch targets        PASS / FAIL  — <evidence>
  No raw hex           PASS / FAIL  — <evidence>
  No identical states  PASS / FAIL  — <evidence>

Scores
  System fidelity  (High)    n/10  — <evidence; for 8+, what was rendered, measured or run>
  Coherence        (High)    n/10  — ...
  Craft            (High)    n/10  — ...
  UX judgment      (High)    n/10  — ...
  Accessibility    (Medium)  n/10  — ...
  Structure        (Low)     n/10  — ...
  Weighted                   n.n/10

Top three changes that would raise the lowest scores
```
