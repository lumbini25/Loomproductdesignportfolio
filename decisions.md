# Decisions

Newest first. Each entry has its **because**. A reversal is a new entry labelled **Reversal of**,
pointing at the old one — never edit an old entry. Rejected ideas stay, labelled **Rejected**.

Decisions in `platform-constraints.md` ("Decided" table, Oct 13) still stand; this log continues
from there.

---

### 2026-11-02 — Case-study body text is DM Sans
**Decided by:** Lumbini ("check all case study body texts, and fix it"). An audit of all five at 1440
and 390 found body text in Nunito Sans and Plus Jakarta. Figma uses DM Sans for body and Plus Jakarta
for headings and numbers. `.case-study` now sets that once, for every block. Desktop sizes are
unchanged. On phones all body text is Mobile Body1, including statements, leads, quotes and the dark
panel, so those drop from 20 to 14. The facts row is Body Semibold S. This also replaces the note
below about Nunito.

### 2026-11-02 — Phone text uses Figma's mobile styles, site-wide
**Decided by:** Lumbini ("you did not use 14px regular body text and other text style I created in
Figma for mobile"). The styles had changed since the frames were first read: Mobile Body1 is DM Sans
Regular 14 with auto line height, not SemiBold 12. **Replaces** the phone sizes in the three entries
below, including 12px on Fun.
- Below 834, in the type scale, so every page gets them: body is Mobile Body1 (14 Regular), headings H1
  Mobile (20 Bold), labels Caption Mobile (9, Plus Jakarta SemiBold). Chips and links are Body Semibold
  S, Writing and the Fun card titles Title 1 Bold (24), buttons Button Mobile.
- Mobile Body2 (SemiBold 10) is not used, although 336:1768 still sets the story in it: Lumbini chose
  14px body text. CLAUDE.md's 16px rule now says 14px on phones.
- Case-study paragraphs without `font-dm` take the size but stay Nunito Sans.

### 2026-11-02 — Every video autoplays except the two demo films; smaller phone header
**Decided by:** Lumbini ("make all the videos of the portfolio autoplay, except the Bloom and Heal and
Knowunity demo videos"; "I reduced the size of mobile logos and top navbar"; "follow Figma design
exactly for fun and experiment page").
- Autoplay added: TDK demos (3), WTV clips (3), Knowunity hint ladder, Anewvista booking flow. **Reversal
  of** the Knowunity film's autoplay (Oct 21): it now waits for a press, as does Bloom's film. All are
  muted, looping, with a pause control; reduced motion shows the poster. Register updated.
  Videos load metadata only until they play, so a page does not fetch them all at once.
- Phone header on every page: 48.6px bar, 71px logo, 24px menu icon (408:2364). Tap targets stay 44px.
- **Reversal of** the 14px body on Fun: 12px at phone width and 14px from 834, as the frames draw it.
  14px stays on About and the footer. The motion tile's phone screen goes back to Figma's position,
  and from 1200 the labels are Plus Jakarta and tiles and cards are 300 and 610px tall.
- Still not Figma's colours: body text and links on beige stay darker, for 4.5:1.

### 2026-11-01 — Fun at phone width follows Figma 408:2363
**Decided by:** Lumbini ("use this layout for phone fun and experiment screen"). **Reversal of** "three
cards in one row at every width", for phones only: cards stack below 834, and stay in a row from 834.
- 24px card titles, 14px body (not Figma's 12, as decided), 9px labels, 300px image tiles.
- The talk image is back to Figma's full source: centred on phones, as in 408:2391, and shifted up
  from 834 to keep 103:3108's crop.
- The motion tile's phone screen is centred. Figma has it 34px right of centre, carried over from the
  wider desktop tile.
- `writing.png` is Figma's source image, without the word "Writing" (Lumbini: "remove the writing word").
- Not changed: 408:2363 draws a smaller logo (71px), but the header is shared and 336:1768 keeps 130px.

### 2026-11-01 — About intro: portrait and story line up
**Decided by:** Lumbini ("fix the alignment of the image and text block"). From 1200 both columns
share top and bottom edges, as Figma's 664px columns do, with the resume button at the bottom; the
portrait fills the height at 1200, cropping a little at the sides. At 834 the text is about twice the
portrait's height, so the portrait stays top-aligned and sticks while the text scrolls.

### 2026-11-01 — Phone body text is 14px, not Figma's 12 and 10
**Decided by:** Lumbini ("yes", to 14px for body text). Replaces the 10 and 12px sizes in the two
entries below; "Mobile Body1" and "Mobile Body2" are both 14/20 in code. Still under the 16px hard
rule, by choice. Labels stay 9px. On About the story wraps around the portrait and under it, since
at 14px it runs far past the 290px photo. On Fun, words hyphenate in the narrow phone cards.

### 2026-11-01 — Fun page follows Figma 103:3078, three cards in one row at every width
**Decided by:** Lumbini ("all 3 cards will be in the same row for all breakpoints"). She also
confirmed the About photo rows stay at every breakpoint, closing that TODO.
- 1440: Plus Jakarta 40px heading, DM Sans intro and body, 395x300 image tiles, equal-height cards.
- Three columns hold at 390 and 320 (cards about 114 and 90px wide), so phones use Figma's small
  styles: title 12, body 10/16, label 9, under the same exception as About.
- Body and links keep AA on beige: caption grey, and blue-600 links, not Figma's #77736f and #4473b3
  (4.22:1 and 4.34:1). Desktop body stays 16px, not Figma's 14px.
- New primitive `--motion-tile` #e5f2ff (no Figma token).
- `talk.png` is re-cut from Figma's source image at its 103:3108 crop; the old file lost the name.

### 2026-11-01 — About at phone width follows Figma 336:1768; text under 16px by choice
**Decided by:** Lumbini ("in the phone screen you should follow this layout and appropriate text style
I used in the canvas"). Tablet and desktop stay as 394:1959.
- **Exception to the hard rule of 16px minimum body text**, on About and in the footer below 834:
  Mobile Body2 10/16, Mobile Body1 12, Caption Mobile 9. Tokens added. Figma's named styles, used as
  asked. Tap targets stay 44px.
- Portrait beside the story (141x290), resume button under it on the right, "I love…" chips (back, phone
  only), Writing in two columns, the three beliefs as plain cards with the "I value human behavior"
  heading, in place of the accordion.
- In Figma the story is clipped at 290px, cutting off text. Here it runs to its full height.
- 336:1768 has no photo section. The moving photos stay on phones after the beliefs (confirmed by
  Lumbini: "it should be in all breakpoints").
- Chips and belief text use caption grey, not Figma's #77736f, which is 4.22:1 on beige.
- The phone footer (338:1644) is applied site-wide, as the footer is shared. Its 9px LinkedIn label
  stays 14px like X, since Figma's two links differ.

### 2026-11-01 — About page follows Figma 394:1959
**Decided by:** Lumbini ("for about me page follow this design, and use slow moving carousel for all
the images").
- Intro, Writing, then two cards side by side: "What I believe" and "When I'm not designing". The
  "I love…" chips and the old three-card principles grid are gone, as the frame has neither.
- "What I believe" is an accordion using native details, one open at a time, first open as drawn.
- All 11 photographs are in two rows moving in opposite directions, as the Figma layer name says, about
  a 90-second loop. Five were empty slots in Figma; their files came from `about-photos/`, and
  each matched its Figma description. Copied to `public/images/about/photos/`.
- A pause button is added (not in Figma): moving content needs one (WCAG 2.2.2). Hover and focus stop
  it too. Reduced motion shows a still, so the photos past the card's edge are not seen then.
- Sizes: Figma's 216px row height, 150px on phones. 01 is cropped to Figma's 340 width.
- New type token `citation`, Figma "Body L" 28/38. Year and link stay 16px, not Figma's 14px.
- Side by side from 834, stacked at 390.
- `photo-02.jpg` is 548px wide, so it is a little soft on retina screens.

### 2026-11-01 — Home hero: a stack of photographs that throws its top card
**Decided by:** Lumbini (the "Stacked Photo Card-Throwing Animation" brief). **Reversal of** the two
scroll-fan entries below; `SketchFan` is deleted.
- Figma has no stack or prototype to copy: 103:2953 still draws one sketch. The three images are
  frame 393:2354 "hero image" (working, museum, sunset, 967x1024, same shape as the 340x360 card, so
  no cropping). They replace the earlier 2x exports.
- `PhotoStack`: three cards, the two below offset and turned 4° and -5°, edges showing. The top card
  throws once 0.7s after landing, then on each click, tap, Enter or Space. It lifts, spins up and
  left, then drops under the stack as the bottom card. So all three stay visible when scrolling past,
  the order returns to the start after three throws, and no reset control is needed. The brief's
  "move off the visible card area" and "all photographs remain visible" pull apart; this meets both.
- CSS transforms plus the Web Animations API; no library (none is installed). Only transforms move,
  so the page never shifts. Reduced motion: no landing throw, and a press swaps at once.
- One button covers the stack, so focus stays put; the top card's image carries the alt text.
- Layout is text beside the stack at every width, as asked: cards 340 / 240 / 28vw (at most 200), headline 40 / 34
  / 20px, intro 16px at 390. With the fan gone, the text column is back to Figma's width at 1440.
- While in flight the card passes over the end of the text for about half a second.
- The brief says About page; the link is the Home frame, so this is on Home.
`tests/photo-stack.spec.ts` checks the three-throw cycle, the window bounds through a throw, keyboard
and reduced motion at 390, 834 and 1440.

### 2026-11-01 — Home hero follows the redrawn Figma 103:2953, with the fan beside the text
**Decided by:** Lumbini ("use this layout"; "use the 3 images I used in the hero and create the
effect that Bobby did"). Updates the entry below.
- Hero: text left, sketch right; headline Plus Jakarta Bold 40px (was Libre Baskerville 56px); intro
  in DM Sans. The strip is gone, as in Figma.
- At rest the stack sits in Figma's image slot against the right margin. Figma now draws only the
  interview sketch; the gallery and field sketches come from its previous version.
- The fan keeps Bobby's full spread (a tighter one was tried and barely read). The whole stack
  slides left by the spread into room reserved beside the text, so the text column is 663px at
  1440, not Figma's 944, and the headline wraps to three lines. Cards are 340 from 1200, 200 at
  834, 46vw on phones. The fan finishes in 22% of a screen of scroll, while still in view.
- The availability line stays 16px, not Figma's 14px (16px minimum body text).

### 2026-11-01 — Home hero sketches fan out on scroll, after Bobby's Venue page
**Decided by:** Lumbini ("create this animation like Bobby for the charcoal hero images").
- Measured on bobbyiscreative.com/work/venue at 1440: three images stacked; over about 485px of
  scroll the middle one reaches 6°, 160px, -20px and the back one 12°, 310px, -40px on a 460px image,
  following the scroll with no easing, from when the stack's top is 64% down the screen.
- New `SketchFan` uses those proportions (percent of card width, range 54% of the screen). Two
  changes: it starts at the top of the page when the stack is already in view, and the stack slides
  left by half the spread so the group stays centred.
- Images are Figma 103:2970's current three (interview, gallery, field), exported at 2x, card 340x360
  (46vw on phones). They replace the side-by-side strip and the old sketch files.
- Reduced motion shows the finished fan as a still, set in CSS. Decorative, hidden from screen readers.

### 2026-11-01 — axe accessibility scan added
**Decided by:** Lumbini ("add the accessibility scanner").
`@axe-core/playwright` is in devDependencies, with `tests/accessibility.spec.ts` and
`npm run test:a11y`: 8 routes at 390, 834 and 1440, WCAG 2.1 A and AA, collapsed sections open.
- A planted grey paragraph and an image without alt were both caught, so a clean run means something.
- axe's "needs review" list: the Final designs and Final screens carousels had a label but no role
  (fixed, `role="group"`); /fun's text could not be measured under the card link (by tokens, caption
  on Beige 500 is about 6.2:1); video captions, which matter only with sound. 31 of the 32 videos
  have no audio track. `bloom-heal-demo.mp4` has audio, but Lumbini confirmed it has no speech, so
  it needs no captions.
- Not covered: text inside images (the before/after boards, the persona photo's quote), the open
  mobile menu, keyboard flow and alt-text quality. A keyboard walk is still to do.

### 2026-10-31 — Playwright is a dev dependency
**Decided by:** Lumbini ("yes", when asked).
`@playwright/test` is in devDependencies, with `playwright.config.ts`, `tests/breakpoints.spec.ts`
and `npm run test:breakpoints`: 8 routes × 15 sizes × Chromium, Firefox and WebKit, 360 checks. It
serves the build on port 3100. All 360 pass. Putting the Oct 28 image bug back made the 1280 check
fail with the same 24px overflow, so the test does catch it. WebKit is Safari's engine, not Safari
itself. No axe sweep yet: that is a further dependency, still the TODO under Verification.

### 2026-10-31 — Playwright breakpoint check: three overflow fixes
**Asked by:** Lumbini ("use playwright to check the size of different breakpoint browser").
Eight routes at 15 browser sizes, 320 to 2560 wide, in Chrome. Playwright ran from a scratch folder,
so it is not a project dependency.
- Fixed: from 1200 to about 1320 the opening image ignored its column and the page scrolled
  sideways, up to 104px (Knowunity, Bloom, WTV). The Oct 28 height cap let `desktop:max-w-[560px]`
  override `max-w-full`; it is now `min(100%, 560px)`, and 462 likewise at 834.
- Fixed at 320: WTV's logo cloud clips to the screen; Anewvista's chart bars use a 6px gap below 834.
- After: no sideways scroll, failed pages or script errors on any of the 120 page loads.
- Left as they are: the column narrows from 927 to 856 when the window crosses 1199 to 1200, and
  Anewvista's chart source note runs 1048px wide at 16px.

### 2026-10-30 — QA Phases 2 and 3: chapters, contents list, cards, statements
**Decided by:** Lumbini ("do not use the 01 Context structure, instead use Overview for all the case
studies, no box around those texts … chapter names should be in eyebrow style"; "5 is fine"; "fix
it and clip the phone mockup in the middle"; "do it" for one card style; "I do not want that" for
side-by-side decision rows; statements "Knowunity 24px title as big statement style"; the Bloom
finding card "9 of 12"; "follow this Figma design including the use of type face", 223:2793).
- **Reversal of** the Oct 29 Anewvista chapter label "01 Context": every chapter now opens with
  just its name as the small label (no number, no box, no rule) over a 40px heading. Bloom, WTV and
  TDK have chapters too: the name is the section's chapter title, else its contents name, else (TDK,
  which has neither) its stage. Other sections keep their own label over a 24px heading. The
  contents list shows the chapter names.
- The contents list behaves the same on every case study, phones included (Bloom and WTV used to
  hide it below 834). Its links are at least 44px wide.
- Knowunity's skipped heading level is fixed (card titles are h3, or h4 only under a card-group
  heading). Its hero is cut at the Figma frame's bottom edge and sits on the band's bottom, so the
  middle phone runs off the band, as in Figma.
- One text-card style everywhere: outlined, 16px corners, 20px text (was: Knowunity's filled cards,
  Bloom's outline/rows/sky tiles, WTV's outline/quotes, TDK's filled tiles). "list" stays a list,
  not cards. One number style: filled, as Figma 223:2793 draws it: Plus Jakarta Bold 40/48 over a
  DM Sans SemiBold 16/24 label, 24px corners, 24x28 padding, left-aligned.
- DM Sans is loaded through next/font (no new package), as `font-dm`, for those labels.
- WTV's three 40px statements now use the 24px statement style Knowunity uses.
- Not done, by Lumbini's choice: side-by-side decision rows for Bloom and WTV.
- Bloom: "participants chose to use phone for AI chat" reads 9 of 12, matching the 75% (9 of 12)
  in the testing section. TODO: Figma 223:2800 still says 9 of 10, and the other two cards ("9 of
  10" intent, "10 out of 10" booking) imply 10 participants, not 12; confirm their sample.
QA after (five studies at 1440, 834, 390): no overflow, broken images, contrast failures, heading
skips or tap targets under 44px.

### 2026-10-29 — QA Phase 1: every case study opens the same way
**Decided by:** Lumbini (after the five-study QA: "give WTV and TDK the same opening … do it for
consistency"; "use … Dashboard.png as hero image"; "create a monitor wrapper around dashboard image").
- WTV and TDK now have the coloured opening like Knowunity, Bloom and Anewvista: band, eyebrow,
  title, summary, tags and visual, then the four-fact row. Eyebrows and tags come from their Home
  cards (Figma 103:2944). Their "All work" links are gone, as on the other three.
- Bands use the pale tints (WTV #e6f2f9, TDK #eef3fa): the full colours fail AA under grey and rust
  text. Theme role `band` set for both.
- WTV's visual is Figma 240:3013 "solution", exported at 2x on a transparent background (its old
  cover had a blue box). The "My role" box became its own "My role" section after the Overview,
  four numbered cards, lead and detail split at the dash; it is in the contents list.
- TDK's visual is ~/Desktop/Venue Case Study/Dashboard.png in a new CSS `MonitorFrame` (dark bezel,
  deeper chin, neck and base; stand colour new primitive Beige 700 #a9a5a1 as `device-stand`).
- TDK's content column now runs to 1096 at 1440 like the others (it was capped at 960); at 834 and
  390 it was already the same (562, 358).
- Boxes with four items sit two by two.
QA after: all five studies use the same opening, no back link, 1096 column at 1440; no overflow,
broken images, contrast failures or small targets on WTV or TDK at 1440, 834 or 390.

### 2026-10-29 — Knowunity opening from Figma 285:574; Bloom watch visual; persona photo
**Decided by:** Lumbini ("use this hero image and at a glance section for knowunity"; "use …
iwatch visuals to replace the current iwatch visuals"; persona photo: "use it, do not leave it").
- Knowunity now has the coloured opening: band #edebfa (new primitive `Knowunity/25`), eyebrow
  "Active recall for Knowunity · iOS", tags Usability testing / Coded prototype / AI-native process,
  and the three-phone hero (299:865), exported at 2x with its placeholder text and dashed slot
  outlines removed, on a transparent background. In Figma the middle phone hangs ~170px below the
  band, over the at-a-glance row; here the band grows to hold it.
- Knowunity facts from Figma 285:597: Role UX designer; Timeline 2.5 weeks, September 2026; Tools
  Figma, Claude Code, Next.js, Storybook; Status Course project. Not shipped. (Replaces Solo
  designer / 2.5-week sprint / Solo, and fills the Tools slot the log had open.)
- New theme role `band` for the opening band, since Knowunity's band (#edebfa) differs from its
  tile colour (#9178e6). Bloom and Anewvista keep their colours. Figma: `Project/<name>/band`.
- Bloom: `watch-wrist.jpg` is replaced by Lumbini's `iwatch visuals.png` (2368x957, transparent
  corners), so the earlier perspective-fitted watch screen is retired.
- Anewvista: `persona quote.png` is used after the persona, full column width, as Lumbini asked.
  It is Unsplash+ stock with the watermark visible. TODO: an Unsplash+ licence before launch, and
  confirm the quote on it comes from the interview.

### 2026-10-29 — Knowunity thumbnail: Sierra Hopkins' mobile thumbnail effect
**Decided by:** Lumbini ("implement sierra hopkins effect of mobile thumbnails in the knowunity
thumbnail").
- Studied on sierrahopkins.com at 1440: at rest her phone mockup tilts about 2° in 3D perspective and
  a second piece turns about 16° in depth; on hover the phone eases straight and the pieces come
  forward, with the card's border lighting up.
- The Knowunity thumbnail is now rebuilt from its Figma layers (112:101: gradient and glow; phones
  112:104, 112:106, 112:105), exported at 2x, by a new `LayeredThumbnail` component. At rest the side
  phones turn 18° in towards the centre and the centre phone tilts 2°; on hover or keyboard focus all
  three ease straight over 500ms, the sides fan out 7% and the centre lifts 4% and grows 4%. Phone
  shadows are drawn in CSS (`shadow-mockup`, Figma's 0 28 48 #1a084d at 60%) so they move with
  the phones.
- The phones sit on a stage locked to the frame's 700:540 shape, so they never stretch when the card
  stretches the image from 834.
- Touch screens have no hover, so they show the angled rest state. Reduced motion: the change is
  instant, not animated.

### 2026-10-29 — Anewvista layout follows Figma 283:572; visuals left-aligned
**Decided by:** Lumbini ("feels too large … follow my figma design"; "images … not consistently
left-aligned").
- Alignment: every visual and caption starts on the content column's left edge. The height-cap
  wrapper and the shared `Caption` no longer centre (`mx-auto` removed); a narrower image keeps to
  the left. Full-bleed banners are the deliberate exception.
- Container: outer margins stay 16 / 32 / 80 (Lumbini's 80 from 1200, Oct 28), centred, capped at
  1440, for every case study. Figma uses 64 at 1440; 80 is kept for one rule site-wide.
- The contents rail is 120px from 1200 (was 240), close to Figma's 117, for all case studies. A
  study with a coloured opening lets its column run to the rail (about 1100 at 1440, Figma 1184)
  and caps its own lines: headings 968, body 820.
- Chapters (studies with an opening): a small "01 Context" label over a 40px heading, no rule.
- New `cards` look "boxes": outlined cards in one row from 1200, 20px text (context, journey,
  what we learned, the five final steps). New statement look "compact" (20px, "Why it matters").
- New section option `aside`: decision rows with label, heading and text in a 440 column beside the
  visual in a 696 column (Figma 284:279); Trade-off and Evidence are bold-led paragraphs.
- Facts: four columns as in Figma (Role, Timeline, Team, Result), with Lumbini's confirmed values;
  Result reads "Shipped. Grant money +100%, stakeholder-reported".
- Wording from Figma: the chart note says bounce "rose overall" (April dipped below March), and the
  Impact heading says the stakeholder reported it.
- Not used: `persona quote.png` carries Unsplash+ watermarks across the photo, so it is not licensed
  for this use. TODO: a licensed photo, and the source of its quote.
- TODO: Lumbini said the decision 1 image is "before and after booking flow"; no file of that name
  is in the folder yet. The current board stays until it arrives.
Page height at 1440 went from 12,027 to 10,698px. No sideways scroll on any case study at 1440 or
390; no text under 4.5:1 on Anewvista at 834 or 390.

### 2026-10-29 — Bar chart follows Lumbini's bounce rate chart
**Decided by:** Lumbini ("use the color i used for the bounce rate chart", `~/Desktop/Anewvista
Case study/bounce rate chart.png`).
- Highlighted bars #4d12a3, the rest #b9b3ad, on the #f6f0ff card. Jan and May are highlighted (the
  start and end of the rise), so `highlight` now takes a list.
- As in her chart: fully rounded bars, no baseline rule, every value label in title colour.
- New theme roles `chart` / `chart-muted`; the site default stays rust and Beige 950, Anewvista uses
  the two colours above. Figma: Primitives `Anewvista/700`, `Anewvista/Grey`; Semantic
  `Project/Anewvista/chart`, `chart-muted`.
- The grey bars are under 3:1 against the card; each bar carries its value as text above it and the
  table is there for screen readers, so the colour is not the only way to read the values.

### 2026-10-29 — Anewvista facts confirmed; full-bleed photo after the problem
**Decided by:** Lumbini ("100% increase in grant money, not the grantors. The timeline is Sept
2024 to March 2025"; the photo "Navigating a New Class Booking", placed "just the way carmen did").
- Facts: Timeline "Sept 2024 to March 2025"; Result "Grant money +100%, stakeholder-reported".
  This closes the TODO in the Oct 29 opening entry. Figma 275:595 still has the old wording.
- New `banner` block (`ScrollBanner`), from Carmen's Learn.xyz page measured at 1440x900: the photo
  spans the full window, one screen tall from 1200 (16:9 below), clipped, no corners, and scales
  from 1.05 to 1 with a 50px counter-slide as it crosses the screen. Reduced motion keeps it
  still. It covers the side index while it passes. Carmen tints her photos dark; this one is not
  tinted, because the screen in it carries the point.
- Placed at the end of chapter 01, after the problem statement and its analytics paragraph. The
  screen in the photo is not the shipped AnewVista interface (other logo, a "Meera Sharma"
  account), so its caption calls it an illustration.
- The photo is 1672px wide, so it is slightly soft across a full 1440 window on a retina screen.

### 2026-10-29 — TDK card: the recording is the whole thumbnail
**Decided by:** Lumbini ("It should look like one clean, continuous product demo").
**Cause:** the card drew `tdk-card.png` (a blue device frame holding a screenshot of the same
Venue Creation Tool) and laid the recording over it at percentage offsets. The PNG's own copy of
the screen showed round the video's edges (a second "Unit Creation" and "Continue to Zones"), the
image zoomed 6% on hover while the video did not, and the video carried a 2px black line along its
bottom edge.
**Fix:** `thumbnailVideo.fill` makes the recording the only thing in the thumbnail, filling it
(object-cover); the TDK PNG is no longer drawn. The black line was cropped off (878x610). The hover
zoom now moves one wrapper, so the Anewvista laptop image and its recording zoom together.
Checked at 1440, 834 and 390, at rest and on hover.
Also: the class-page before/after arrow is moved up 59px so it centres on the two screenshots, not
on the whole column (Lumbini's export centred it on the column).

### 2026-10-29 — Anewvista opening and at-a-glance row from Figma 275:572
**Decided by:** Lumbini ("replace the hero section and role timeline section with the one I have
right now in Figma"; "make the video autoplay"; "use 32 px padding for the square boxes").
- Opening (275:582): eyebrow, the new title "Designing a booking flow seniors can finish without
  calling for help", the new summary, three tags, and the laptop recording
  (`~/Desktop/Anewvista Case study/hero video.mov`). The recording's white background is hidden by a
  static PNG mask (the laptop never moves), so it sits on the band. Autoplays (register, Oct 29).
  The cover image and the "All work" link are gone, as on Bloom.
- Anewvista's project colour is now #f6f0ff, the band and stat-card fill in 275:572; Figma
  `Anewvista/50` was updated to match (it was #fdf4e8 from the older frame 267:701).
- At a glance (275:595, and Bloom's 221:2779 uses the same): grey Plus Jakarta labels, 18px values,
  a rule above and below. Applied to both Bloom and Anewvista; Bloom's earlier rust serif labels
  were a mismatch with its own frame.
- Facts follow Figma: Role UX designer, Timeline "Aug 2024 to 2025", Result "Grantors +100%,
  stakeholder-reported"; Team is dropped. TODO: the Oct 20 entry below says March 2025 and that the
  100% is grant money, not the number of grantors. Figma is used until Lumbini confirms.
- Proportion: under a 40px opening title, chapter headings are 30px (24px below 834), and the first
  chapter loses its top rule so it does not double the facts row's rule.
- Framed screens in wide blocks sit in a box with 32px padding (16px below 834); `bare` images
  (photo banners) keep a plain edge. The class-page before/after is Lumbini's export of
  Ol45Bb16QNGeHbBKtXVlfC 191:2206 (arrow centred), outer margins trimmed.

### 2026-10-29 — Project colours are Figma tokens
**Decided by:** Lumbini ("add them as primitive tokens in Figma, then create semantic tokens").
- Figma Primitives (grouped by project, step by lightness): Bloom/50 #edf7fe, Bloom/100 #d8eaf6,
  Anewvista/50 #fdf4e8, Knowunity/50 #ebe6fb, Knowunity/500 #9178e6, WTV/50 #e6f2f9,
  WTV/300 #a1cfe9, TDK/50 #eef3fa, TDK/200 #ccdaef. Fill scopes; Bloom/100 stroke only.
- Figma Semantic, aliasing those: Project/<name>/surface (cards with text), /tile (no text) and,
  for Bloom, /border. They match the code roles surface-subtle, surface-sky and line.
- Code primitives renamed to match (`--bloom-50`, `--knowunity-500`, …); the "no Figma token"
  TODOs for these colours are closed.
- Not done: the Figma frames (e.g. the Bloom and Anewvista openings) still use raw fills, not
  these variables. The older paint styles "Bloom Primary" (#eff8ff) and "Knowunity Primary"
  (#9178e6) were left as they are.

### 2026-10-28 — Knowunity, WTV and TDK project colours; tints on text cards
**Decided by:** Lumbini (Knowunity #9178E6 and TDK #CCDAEF given; "WTV is already in Figma";
chose "Pale tints for cards" over darkening the text).
- WTV's colour is #a1cfe9, the page header fill in its Figma frame (112:22).
- At full strength these fail AA under grey and rust text on cards (Knowunity 1.7:1 and 2.0:1,
  WTV 3.6:1 and 4.2:1, TDK 4.2:1). So text cards (surface-subtle) use pale tints: Knowunity
  #ebe6fb, WTV #e6f2f9, TDK #eef3fa. Text-free tiles (surface-sky) use the full colour.
- Measured after: no text under 4.5:1 on any case study at 1440 or 390.
This completes the TODO in the entry below.

### 2026-10-28 — Every case study follows its own project colour
**Decided by:** Lumbini ("other case studies should follow their respective theme color").
Extends the Bloom theme below to all case studies: each study's cards, tiles and rules take its
project colour through `theme` in its content file; text and the rust accent stay the site's.
- Bloom: #edf7fe, rules #d8eaf6 (Figma 211:1164, 240:4864).
- Anewvista: #fdf4e8 (Figma "opening (project color)" 267:701); rules stay beige, as Figma has
  no stroke for it.
- Knowunity, WTV, TDK: no project colour in Figma. Lumbini chose to supply the hex codes rather
  than have tints derived from the thumbnails' brand colours. TODO: add them when they arrive;
  until then these three stay beige.
Also: the split block's visual is capped at 560px and 70% of the screen height, so the testing
watch screens no longer fill the column when it stacks.

### 2026-10-28 — Bloom colour theme; watch screen fitted to the photo; visuals capped by screen height
**Decided by:** Lumbini ("make it consistent all the colors used in Bloom and heal case study";
"fix the angle and alignment of the bloom and heal watch screen"; "the visuals looks big in
macbook pro device").
- Project themes: `theme: "bloom"` on a case study adds `.theme-bloom` to the article, which swaps
  three role variables (`--theme-surface-subtle`, `--theme-surface-sky`, `--theme-line`) to
  `--bloom-background` (#edf7fe) and `--bloom-line` (#d8eaf6, Figma 240:4864; TODO: no Figma
  token). Beige cards, the pinned device card and rules on the Bloom page are now Bloom blue. Text
  and accent stay the site's; no text measured under 4.5:1 at 1512, 1440, 834 or 390.
- `watch-wrist.jpg`: the photo was exported without the flat face layer (211:1284), and the face
  was warped in perspective onto the four corners of the real display, inset so a thin bezel
  shows. Its two emoji (😔, 😃) were redrawn because the exporter dropped them.
- Wide images are never taller than 80% of the screen (they narrow instead); the pinned device card
  and the opening composition are capped to the screen below the 140px pin line. Checked at
  1512×780 (MacBook Pro 14").

### 2026-10-28 — Bloom opening: floating composition, no back link; testing figure is 75% (9 of 12)
**Decided by:** Lumbini ("remove the all work navigation… remove the grey background from the
floating components", after Bobby's Venue case study; chose "75% (9 of 12)").
- On case studies with a project-coloured opening, the "All work" link is gone; Work in the site
  header still leads back. Other case studies keep it.
- The composition is transparent: exported from a temporary clone on black and on white, alpha
  recovered from the difference, so the shadows sit on the band. It grows to 560px from 1200.
- The testing heading said 92%; the source is 9 of 12 participants, so it now reads 75% (9 of 12).
**Because:** the Figma exporter flattens transparency onto grey, which showed as a box behind the
cards; and 92% did not match the sample.

### 2026-10-28 — Bloom opening matches Figma 211:1164; four phone steps; SWOT names
**Decided by:** Lumbini ("it should look exactly like Figma"; supplied the health trends and
therapist booking and profile recordings; "use the name of the apps below each logo").
- Opening band is `#edf7fe`, Figma's "Bloom backgrnd", added as `--bloom-background` /
  `surface-bloom` (TODO: no Figma token in the semantic collection). Text column (600) beside the
  462px composition, 64 gap, 32 top and bottom; side by side from 834. Summary uses caption colour as
  in Figma. The composition is a 3× export of 214:2125 (made through a temporary clone, since
  deleted). Gutter stays 80, not Figma's 64, to line up with the facts row and the 1200+ rule.
- Phone pinned section now has four steps: AI chat, booking (0–15.25s of the booking recording),
  Health tab, Profile (15.25s to the end). Step text for booking, Health and Profile written from
  Lumbini's notes. The last step gets 45vh of room below so it pins like the others.
- SWOT header: each logo trimmed to its visible edge and set to 150px, so the gap between icon
  edge and column is the same for all four; names (Finch, Headspace, Calm, Flourish) below in
  Nunito Sans SemiBold.
**Because:** the previous hero stacked the text over a box of a slightly different blue, and the
logos carried different built-in padding.

### 2026-10-28 — Bloom & Heal rebuilt from Figma 211:1154 with Carmen's scroll effects
**Decided by:** Lumbini ("build it in place of current Bloom and Heal case study").
**Reversal of** the Oct 26 Bloom build (Figma 176:383 plus Framer, with the "Full process" panel).
- Content and order from Figma 211:1154, copy verbatim; visual boards are 2x exports in
  `public/case-studies/bloom/v2`. A project-coloured opening, a facts row, then eight sections.
- Carmen's Pilgrimz effects, studied on her page: a device pinned 140px from the top while
  numbered steps scroll past and its screen switches per step (watch in Solution, phone in
  Testing); sections slide up 30px as they enter; photo banners settle from 108% to 100%. All
  off under reduced motion; below 834 nothing pins and each step shows its own recording.
- Recordings are the repo's Framer clips: the Figma frame's video fills can't be exported.
- Home card thumbnails: ANVCS recording cropped to the laptop screen (it carried its own laptop);
  small icon pause button on card videos. Type scale steps down by breakpoint (globals.css).

### 2026-10-28 — Fluid wrapper, spacing and radius tokens, rebuilt home thumbnails
**Decided by:** Lumbini's layout brief; the specifics are Claude's.
**Reversal of** the Oct 27 fixed 390 / 834 / 1440 wrappers.
- Wrapper: one fluid container, at most 1440px, gutters 16 / 32 / 64. The fixed wrappers left
  empty side margins between breakpoints (a 600px window showed a 390px column, 1100px an 834px one).
- Smaller cards: the row that scrolled sideways below 1200 is gone. One card per row below 1200,
  image beside text at 834; three across from 1200.
- Card thumbnails re-exported from Figma at the frame's exact 416x303 (WTV, TDK, ANVCS), so
  `object-cover` no longer crops them (the old 832x560 exports lost ~26px top and bottom).
- Knowunity and Bloom featured visuals: real screens on a project-coloured panel (FeaturedVisual):
  Knowunity's summary screen; Bloom's mood screen with the low-HRV watch notification overlapping
  it. Panel colours are new primitives taken from the Figma frames (TODO: no Figma token).
- Tokens: `section` spacing (64 / 96px) between case-study sections and on Home; `device` and
  `device-screen` radii for the phone mockup. Every raw radius now uses a token.

### 2026-10-27 — Case-study media wrappers; WTV logo cloud animates as on Framer
**Decided by:** Lumbini (wrapper spec); Claude chose how to reach "3 / 2 / 1 at 1440 / 810 / 390".
- Every case-study image and video sits in PhoneFrame (portrait, at most min(80vh, 720px) tall,
  3 / 2 / 1 across), WideFigure (landscape, at most 1100px wide) or HeroMedia (lead film and covers,
  16:9, at most 70vh tall). Captions at most 70ch. Each next/image has sizes for its wrapper.
- 810 is not a site breakpoint (834 is), so PhoneFrame's column count comes from an auto-fit grid
  with a 300px column minimum: 3 at 1440, 2 at 810 and 834, 1 at 390. No breakpoint added.
- Portrait media already capped below 720px (phone screens at 220px, watch clips at 380px wide)
  render larger under the new cap; landscape media render smaller. Lumbini to confirm the cap.
- WTV ideation: the static logo ring is replaced by Framer's logo cloud (positions, sizes, loop:
  one turn in 1s, 0.8s pause). Still under reduced motion; a Pause button stops it (WCAG 2.2.2).

### 2026-10-26 — Home, WTV and Bloom follow the new Figma frames; serif type; Bloom completed
**Decided by:** Lumbini (Figma 103:2944, 112:13, 176:383; Framer bloom-and-heal-2).
**Reversal of** the WTV 900px column entry below, and of IBM Plex Mono for eyebrows.
- Fonts as in Figma: Libre Baskerville for the Home headline and every "Caption M" eyebrow;
  Nunito Sans and Plus Jakarta Sans unchanged. Blue 600 added for featured eyebrows on beige.
- Home: two featured blocks (Knowunity, Bloom & Heal), then WTV, TDK, ANVCS; card copy from Figma.
  Project order (and "next project") follows.
- WTV and Bloom use the full-width case-study layout from their Figma frames; sections past the
  frames follow the same pattern. Facts rows are not shown there (not in the frames).
- Bloom: Figma's visual treatment where the frame has a section, Framer's order and content for
  everything else, copy verbatim. Framer's "Full process" panel is rebuilt as an accordion, open at
  first (Framer's default variant), button with aria-expanded, closed content inert. The three
  "Design decision" rows are static, as on Framer (the source has no answers for them).
**Because:** Lumbini's frames and instructions; no copy written beyond alt text.

### 2026-10-26 — WTV follows the Framer page layout, with Framer's content and assets
**Decided by:** Lumbini. **Reversal of** the Oct 21 WTV build on the shared index layout.
- WTV uses `layout: "column"`: one centred 900px column, no page index, smaller title beside a
  529×300 cover, plain facts row, role list in a box, no stage labels. Image sizes and crops are
  Framer's at 1440 (problem illustrations 438×300, brand diagram 900×470, slides 865×666).
  Portfolio fonts and colours stay (tokens rule); only Framer's composition is copied.
- "Give employees a starting point" shows three role dashboards (internal employee, contractor,
  CEO), cropped from Lumbini's `main screens.png`. Final Screens shows the rest in a carousel where
  every slide fills the same 865×666 frame from the top, so all screens show at one width.
- Removed: the launchpad image and the role-based carousel (not on Framer), and the near-duplicate
  brand kit and stationery screens. Kept: the company news screen, added to Final Screens.
- The sticky-notes board is Framer's still image, not the video.
- **Rejected:** removing the Unsplash+ watermark from the high-five photo. It is an unlicensed
  preview, and its overlay claims "10x faster" onboarding with no source. A labelled placeholder
  holds the slot until a licensed copy arrives. The other case studies are unchanged.
**Because:** Lumbini's instruction; licensing and the sourced-numbers rule for the photo.

### 2026-10-22 — The 1440 composition starts at 1200; the tablet layout is capped
**Decided by:** Lumbini chose option C from Claude's diagnosis.
**Reversal of** "834 and 390 follow the brief's responsive table" (Oct 20) where it says "at 1440"
for the side-by-side layouts, and of platform-constraints.md putting every other width out of scope.
- Found: at 1440 every page matched Figma, but at 1439 the site fell back to the 834 layout
  stretched to full width: the featured image went from 700×540 to 1371×1058, card images
  to 668×449, and case studies lost the sidebar. The Oct 20 "featured image capped at 700px"
  had also been dropped when the featured card was rebuilt to Figma 112:100.
- `desktop` screen is now 1200. From 1200 to 1440 the Figma columns keep their proportions
  (featured image 700/1308, intro 600:544 with 80 gap, About photo 440/1312, case-study index
  288/1312); 1440 is unchanged. Case-study cover gives way so the title column keeps 600px.
- Below 1200: featured image and its text capped at 700px and centred; hero intro and proof
  capped at their Figma widths (600, 544); case-study cover at 640 and content column at 960.
- Below 834: Home and Fun card lists capped at 700px so a single column doesn't stretch.
- Daisy video keeps autoplaying (muted); its row is restored in the autoplay register.
**Because:** most laptop browser windows are 1200–1439 wide and were getting a tablet layout at
desktop scale. Still designed and checked at 1440, 834 and 390; 1199/1200 and 833/834/835 are
checked as transitions.

### 2026-10-22 — Knowunity and Anewvista follow their per-project decision logs
**Decided by:** Lumbini, in `knowunity-decisions-log.md` (Oct 21) and `anewvista-decisions-log.md`
(Oct 22). These logs win over the earlier case-study entries below.
- Both pages follow the worksheet block order: hook, context, role and approach, research,
  (exploration for Knowunity), decisions, final designs, (AI-native for Knowunity), outcome,
  reflection, next project.
- Knowunity film: autoplays muted per the register (Lumbini chose the register over the log),
  poster at 52.4 s, trimmed to 71.0 s to drop the black tail. Details row keeps Team: Solo
  (Lumbini chose the log over platform-constraints.md).
- Anewvista: the 8.77% and "9 in 10" figures were wrong and are gone. The May 2024 baseline is
  149 bookings from 832 sessions (17.9%). The booking-flow video's closing card was re-rendered with
  it. Conversion is stated only as design intent, unmeasured.
- **Reversal of "Anewvista case study: sources and Lumbini's answers":** ship status is shipped;
  team is 2 UX designers, 1 UX researcher, 1 developer and the CEO; the research is credited to the
  team; the "55 to 92" range is removed (no source), also from the Home hero line.
- The research slide (Figma 169:1099) is rebuilt as page content, not shown as an image, so the
  unsourced 46% B2C line and the "I triangulated" credit don't ship.
- The persona is a text card, anonymized; the Unsplash+ watermarked photo is not used.
- Every OPEN item in the two logs is a dev-only `todo` on the page.
**Because:** Lumbini's logs and answers; every number keeps its source or stays out.

### 2026-10-20 — Bloom and Heal: Lumbini's answers
**Decided by:** Lumbini. Closes the TODOs in "Bloom and Heal added as the fifth case study" below.
- The "1 in 5" figure is from the CDC. It is back on the page, credited to the CDC.
- One merged persona (Dave Lu Chen). Jane Marple is not shown.
- Usability testing ran in three rounds: 5 participants, then 3, then 3.
- The hero proof line now ends "and Bloom and Heal, an academic project."
- With four cards, the lone card on the second row at 1440 stays.
**Because:** Lumbini's answers, 2026-10-20.

### 2026-10-20 — Bloom and Heal added as the fifth case study
**Decided by:** Lumbini ("add as fifth"); sources and wording are Claude's. Revisable.
- Order: Knowunity, WTV, TDK, Bloom and Heal, Anewvista. The brief puts Bloom third on the work
  page, followed by Anewvista; visual-inspiration.md fixes the first three.
- Copy: Lumbini's own draft (`Bloom Case Study/Asset Bloom/Bloom and Heal Case Study Draft.pdf`),
  edited to the lumbini-voice skill. Claims unchanged. Facts not in the draft come from the brief:
  7 interviews, logo test with 10 participants (9 chose the rounded daisy), May 2026.
- Left out: the "1 in 5" statistic (no source), the business impact graphic (targets beside
  unsourced claims), and per-participant usability notes (private health history).
- No Figma card exists, so the card copy follows the other cards' pattern. Home's note now says
  "Five projects". TODO: the hero proof line still lists four kinds of project.
- With four cards, the grid leaves one card alone on the second row at 1440. TODO: keep, or 2×2.
- Three videos are click to play (autoplay register).
**Because:** the folder held a complete draft; every number keeps its source or stays out.

### 2026-10-20 — Anewvista case study: sources and Lumbini's answers
**Decided by:** Lumbini. Supersedes the "Anewvista has no copy" line in "Case-study pages" below.
- Copy from loomdesign.framer.website/anewvista; images only from Figma file
  `Ol45Bb16QNGeHbBKtXVlfC` (page PROTOTYPE), none from the Framer page.
- Timeline: March 2025. Ship status: unknown. Result: a 100% increase in the amount of money from
  grantors for 2024 (not the number of grantors), reported by the stakeholder. Lumbini credits the
  landing page and replacing the YouTube video placement with booking steps.
- No source exists for the "46% B2C benchmark" or the sign-up "increased subscription revenue"
  line, so neither appears in page text.
- Lesson: 16px body text was not legible for users with limited vision; she scaled it to 20px.
- The sign-up before/after board stays as designed, including its own caption.
- Team: Lumbini and 1 other UX designer, 1 UX researcher, 1 PM, 1 developer.
- Never state how many people were interviewed (Lumbini).
- Role: UX designer. Nothing left open.
**Because:** Lumbini's answers, 2026-10-20.

### 2026-10-20 — Reversal of "Video budget and autoplay": the 1080p Knowunity film is linked
**Decided by:** Lumbini ("link the video for the case study").
The 49 MB original is in `public/case-studies/knowunity/` and linked from the Knowunity footer as
"Watch the film in full quality". It only downloads when clicked; the page still plays the 9.1 MB
version.
**Because:** the kit lists it as the footer's first link.

### 2026-10-20 — Case-study pages: source, structure, open items
**Decided by:** Claude, from Lumbini's sources. Revisable.
- Copy is verbatim from the Knowunity and Venue kits and the Framer page `/wtv-2`. Kit alt text is
  used as written; where a kit left alt text open, it was drafted from the image and marked in code.
- Each kit's `⚠️ CONFIRM` item is a `todo` block: shown in `npm run dev`, absent from the build.
- Page title is the case study's own title (kit or Framer); the Figma card title sits above it as
  the eyebrow, so Home cards stay as designed.
- Sections are grouped Problem → Solution → Impact; the sticky index links to each group.
- Anewvista has no copy anywhere (Figma, Framer, Desktop), so it shows labelled placeholders.
**Because:** visual-inspiration.md's structure, the kits' "use the copy as written" rule, and the
real-content rule.

### 2026-10-20 — WTV: team size and unsourced numbers
**Decided by:** Claude. Revisable.
- Team shows **2 designers** (brief, Oct 12), not Framer's "3 Designers". TODO: confirm.
- Left out: a Framer feature graphic ("< 1s", "83% drop in mis-navigation", "12s saved",
  "10× productivity") and a photo captioned "onboarding of new hire is 10x faster". No source or
  sample size. The 100% / 28.9 s stats carry "Maze unmoderated test: 6 participants, 2 tasks"
  (brief). TODO: quote attribution.
**Because:** every number carries its source and sample size, or it does not ship.

### 2026-10-20 — Video budget and autoplay
**Decided by:** Lumbini asked for the daisy to autoplay with soothing sound; the rest is Claude's.
- Daisy and Knowunity film autoplay **muted** (register in platform-constraints.md). No sound: the
  file has no audio and the rule is muted autoplay. Venue and WTV videos are click to play.
- Budget: an autoplaying video stays under 10 MB. The Knowunity film was re-encoded from 22 MB to
  9.1 MB at 1 Mbps with the kit's own macOS script. The 49 MB original is not linked, to keep it out
  of the public repo.
- Autoplay pauses off screen, keeps a user's pause, and does not start under reduced motion.
**Because:** heavy video at 390 is the main performance risk named in platform-constraints.md.

### 2026-10-20 — Build from the Prototype page, not the Foundation copies
**Decided by:** Lumbini (sent the Prototype link, node 102:2874).
Home `103:2944`, About `103:3131`, Fun `103:3078`. These replace `19:1496`, `37:127`, `31:127`.
**Because:** they are the latest frames: real email, LinkedIn and X links, the Green500 and
Primary/Text tokens bound, and the button set swapped in.

### 2026-10-20 — 834 and 390 follow the brief's responsive table
**Decided by:** Lumbini approved the approach; the specifics below are Claude's. Revisable.
Figma has no 834 or 390 frames (`1:3`, `1:4` are empty).
- Nav: full bar from 834; below it a menu button opens a full-screen panel.
- Hero: intro and "Recent work" side by side only at 1440. Sketch strip scales with the page.
- Featured: side by side at 1440; image over text below, image capped at its 700px Figma width.
- Project cards: 3 across at 1440, 2 at 834, 1 at 390. Fun cards the same. Principles 3 from 834.
- Section heading notes sit under the heading below 1440.
- Gutters 16 / 32 / 64. Type at 390: H1 44/52, display 36/44, H3 30/38, Body L 22/32;
  834 uses the 1440 sizes.
**Because:** the brief's table, with the fewest changes that avoid clipping at each width.

### 2026-10-20 — Contrast fixes on beige surfaces
**Decided by:** Claude. Revisable. These pairings in Figma fail WCAG AA:
- Text/Body `#77736f` on Beige500 is 4.22:1. Card and principle body text uses Text/Caption
  (6.23:1) instead.
- Secondary Blue `#4473b3` on Beige500 is 4.34:1. Eyebrows on beige (featured, Fun) use
  Text/Caption; Fun links use Rust500, like the About links (5.3:1). Blue stays where it sits on
  white (About writing eyebrows, 4.83:1) and as the card hover (22px bold title counts as large text).
**Because:** 4.5:1 is the baseline. TODO: a darker blue token would let blue stay on beige.

### 2026-10-20 — Raw Figma colours mapped to the nearest token
**Decided by:** Claude. Revisable. `#4d4d4d` → Text/Caption; `#1f1f1f`, `#3a3a3a` → Text/Subtitle;
black → Text/Title; `#d9d2c9` (tag borders, rules) → Beige600, exposed as `line`.
**Because:** no raw hex in code. TODO: a semantic border token for `line`.

### 2026-10-20 — Phosphor regular icons over the Figma glyphs
**Decided by:** Claude, following the Oct 19 icon decision. The Figma LinkedIn and X icons are
filled brand glyphs; the build uses Phosphor `linkedin-logo` and `x-logo`, regular.
**Because:** one icon set. TODO: swap the Figma glyphs, or reverse this.

### 2026-10-20 — Thumbnails are exported renders
**Decided by:** Claude. Each project thumbnail, the Fun visuals and the portrait are exported
from Figma at 2x as one image, not rebuilt from layers.
**Because:** rebuilding them needs project colours (`#003f6c`, `#7babeb`, gradients) that have no
tokens. TODO: project accent tokens, if case-study openings need colour outside the image.

### 2026-10-19 — Decisions are logged here
**Decided by:** Lumbini.
**Because:** the brief and the constraints file each kept their own "Decided" table; one log
keeps the reason and the history in one place.

### 2026-10-19 — Phosphor, regular weight, is the one icon set
**Decided by:** Claude, delegated by Lumbini ("do what you see fit"). Revisable.
**Because:** Phosphor icons are already in the Figma file (EnvelopeOpen, Student, Signature); it
includes LinkedIn and X logos so social icons match the rest; MIT licence. SVGs are copied into one
icons file rather than adding a package, so there is one place to grep and no new dependency.

### 2026-10-19 — Casing
**Decided by:** Lumbini.
Title case for case-study titles (cards and featured block). All caps for eyebrows. Sentence case
for everything else, including the hero and section headings.
**Because:** stated by Lumbini. TODO: the three smaller card titles in Figma are still sentence case.

### 2026-10-18 — Focus ring sits outside the control, with a gap
**Decided by:** Lumbini (asked Claude to fix it in Figma).
2px Rust500 ring, 2px transparent gap, on both primary and secondary buttons.
**Because:** the earlier 4px Rust100 / Beige600 stroke touched the page and measured about 2:1 and
1.4:1 against white — under the 3:1 a focus indicator needs. Rust500 is 5.9:1 on white and 5.3:1 on
Beige500. Drawn this way, Figma matches CSS `outline-offset`, so the measured pairing does not change
between design and code.

### 2026-10-17 — Rust is the accent
**Decided by:** Lumbini (fixed `Rust500` in Figma).
**Because:** "Copy email" was bound to a variable named rust that painted blue; fixing it settled
rust (`#bb3010`) as the accent. Blue `#4473b3` remains only on eyebrow labels. TODO: confirm blue
eyebrows stay.
