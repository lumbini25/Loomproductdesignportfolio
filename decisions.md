# Decisions

Newest first. Each entry has its **because**. A reversal is a new entry labelled **Reversal of**,
pointing at the old one — never edit an old entry. Rejected ideas stay, labelled **Rejected**.

Decisions in `platform-constraints.md` ("Decided" table, Oct 13) still stand; this log continues
from there.

---

### 2026-11-02 — Bloom usability test had 10 participants; chapter link; persona quote source
**Decided by:** Lumbini.
- **Reversal of** the Oct 28 and Oct 30 counts: the usability test had 10 participants, and 9 of 12
  belongs to the logo choice only. The testing heading is now 90% (9 of 10) and the "phone for AI
  chat" card 9 of 10, which matches Figma 223:2800. The logo title stays 9 of 12.
- About: the book chapter links to Manchester Hive, not JSTOR, matching its label.
- Anewvista: the persona quote is from the user interview and usability test.
- **Rejected:** removing the Unsplash+ watermark from the persona photo, as for the high-five photo
  (Oct entry below). It is an unlicensed preview. The fix is the licensed download, under the same
  file name, or a different image. TODO: replace before launch.

### 2026-11-03 — WTV: Solution comes right after The problem
**Decided by:** Lumbini ("move the solution section after problem, then keep other content in a similar
arrangement"). New order: My role, Overview, Users response, The problem, Solution, Strategic shift,
Ideation, Design, Final screens, Component library, Impact, Lessons, Sticky notes. Only Solution moved;
copy and layouts are unchanged. Claude's reading of "problem": the section titled The problem. The
contents list follows the new order, and Solution is still labelled a Solution-stage section.

### 2026-11-04 — Fun cards and About panels tidied (design review items 4 and 5)
**Decided by:** Lumbini (review items; "I re-exported the talk image in Figma"). The Figma re-export (103:3108) still carries
a 3px black line on its right edge and an 18px black strip on top, so `talk.png` is trimmed to 1033x1292 without them;
the card crop is unchanged. Fun cards: the link is pinned to the card bottom, descriptions are Body S 16px regular
(14 on phones, as on Home), titles stay Title 1 Bold 24/36 as in Figma (the third wraps to three lines, as drawn), and links are DM Sans SemiBold 14
in Primary/Text/Body rust, not blue. The Talk card text is Figma's new shorter copy (re-edited by Lumbini, 103:3112);
the description keeps the darker Caption colour, because Figma's Body grey is 4.1:1 on the card's grey. About: the photo card now has the same 28px padding as the beliefs card, and the two photo rows
share the card's height (both cards 444px at 1440). The first belief was already open by default. The photos still drift;
they now clip at the padded edge with rounded corners.

### 2026-11-04 — Fun cards get the Home card hover
**Decided by:** Lumbini ("the fun and experiment cards had no hover effect"). Fun cards now show the same 2px blue border and
lifted shadow on hover as Home's project cards (an inset ring, so the layout does not shift), and the same border when a
link inside has keyboard focus. The cards themselves are not links; the Motion card has no link at all.

### 2026-11-04 — Dense diagrams open in the lightbox; About stacks below 1200 (design review items)
**Decided by:** Lumbini ("reuse the lightbox for all"; "fix it ... you can do the same for any screen below 1200px").
Every diagram whose text is too small to read in place now opens full size, with the same "View larger" button, focus trap
and Escape as Anewvista's visuals: WTV (old intranet, copy-paste diagram, both sitemaps, three dashboards, component library,
affinity map), TDK (stepper before/after, two dashboards), Knowunity (storyboard), Bloom (competitor matrix, colour system).
It is a new `expand` flag on an image in the content files. From 834 the lightbox image now scales up to fill the screen, not
only down. Not covered: Knowunity's HTML flow boards and Storybook showcase (they are not images), and a diagram's source file
is still low resolution (the WTV "before" sitemap is 708px wide), so enlarging it shows more but not sharper text.
About: below 1200 the portrait sits above the story (square at 358px on phones, 4:3 at most 480px wide from 834), and the
Writing note and each article's type, year, title and link stack in one column. From 1200 it is unchanged.

### 2026-11-04 — Phone captions are 12px, eyebrows are Plus Jakarta, and every opening is the same (review items 1 and 4)
**Decided by:** Lumbini ("make the minimum mobile caption 12px"; "I have used Plus Jakarta Sans in Figma, use that"; "fix it").
Caption Mobile (eyebrows, at-a-glance labels) goes from 9px to 12px, and Mobile Body2 (captions under images) from 10/16 to
12/18. They are tokens, so every page follows; `tokens.json` and `design-system.md` are updated, and the Figma styles should
be changed to match. The scaled card rows (`.fit-N`) keep their labels at 12px at every width. Every eyebrow and at-a-glance
label is now Plus Jakarta Sans, including Home, About and inside case studies, where `font-jakarta` had been remapped to
DM Sans; Libre Baskerville is no longer used for labels. Openings: from 1200 every case study's opening band is 600px
(500 at 1200) with the eyebrow 64px below the band top and the text top-aligned; Bloom's is 9px taller because its text is
longer. Below 1200 they are unchanged. Not fixed: the Knowunity task-flow board is a drawn replica of an app and still
scales its text down to 6 and 7px on phones, and some body text in scaled two-column rows is 10px.

### 2026-11-04 — WTV ideation logo cloud: fewer logos, centred, slower
**Decided by:** Lumbini ("centred, slower, remove the JS, V, purple and orange logos, spacing like the rest of the case study").
The four tool logos below the cloud are removed (JavaScript and the three `tool-a/b/c` images; the files stay in
`public/case-studies/wtv/logos/`, unused). The frame is cropped to the remaining logos (291x267), sits centred in the text
column under the heading, 32px below it as in every other section (it was beside the heading with 146px of empty frame above
the first logo). The loop is 4.5s per cycle, a 2.5s turn then a 2s pause (was 1s and 0.8s). Pause and reduced motion are as before.

### 2026-11-04 — WTV logo cloud: no pause control
**Decided by:** Lumbini ("I don't need the pause button, just make it autoplay without any control"). The Pause button is
removed; the cloud loops on its own and is still under reduced motion. Known trade-off: WCAG 2.2.2 (Level A) asks for a way to
pause moving content that runs over 5 seconds beside other content, and this loop has none. If that matters, the lowest-cost
fix is to stop it after a few cycles (about 5 seconds of motion), not to bring the button back.

### 2026-11-04 — Lightbox: no visible "View larger" button
**Decided by:** Lumbini ("remove the view larger button"). The pill over every expandable visual is removed (WTV, TDK,
Knowunity, Bloom and Anewvista). The whole visual is still one button that opens the lightbox, with the zoom cursor on
desktop and "View larger" as its screen-reader label. Cost: on touch screens nothing shows that a diagram can be opened.

### 2026-11-04 — Knowunity: order and copy follow Figma 285:574; AI-native process after Role and approach
**Decided by:** Lumbini ("implement this content change and arrangement ... keep the design you have"). Order is now
Problem, Solution, Context (Overview and Users, moved out of Problem), Role and approach, AI-native process, Research,
Exploration, Usability test, Key decision, Final designs, Outcome, Reflection; chapter numbers follow this order (Figma's own
numbers repeat). Copy from Figma: the H1 ("Replaced vague progress feedback with a progressive hint ladder ..."), the
Problem statement and three problems, the first problem screen's longer caption, and the Solution statement, with the film
captioned "How the solution works." (the old 71-second caption is gone). The hint ladder clip leaves the Key decision and
autoplays in the hero in place of the phones image (the register already lets it autoplay; it has a poster, pause control and
reduced-motion still). The eight usability findings sit in a native accordion, closed by default. The design system link is a
full-width light button under the AI-native steps. Status is now "Shipped. Prototype" as in Figma, "Prototype" linking to the live prototype (Lumbini corrected me; the
Outcome heading still says "not a shipped result", which now contradicts it and is for Lumbini to reword). Not taken from Figma: its second marker on the first problem screen (the
block supports one marker per screen, so the summary screen's marker still reads 2, not 3).

### 2026-11-04 — Knowunity Outcome: the links row is removed
**Decided by:** Lumbini ("remove this section"). The row of three links under the Outcome numbers (full-quality film, the
prototype, the Storybook) is gone, along with the dev-only TODO about checking them. The prototype is still linked from
Status and the Storybook from the AI-native process; the 1080p film download is no longer linked anywhere.

### 2026-11-04 — Knowunity Outcome and Reflection follow Figma 287:334 and 287:337
**Decided by:** Lumbini ("implement the outcome and reflection section as it appears in Figma"; the link opened the whole
Prototype page, so I took it to mean Knowunity, the page being worked on). Outcome: a 24px heading "Placed where students
already speak, with success defined up front", one paragraph (the 15.2% entry point and the 25% and 70% success criteria
agreed with Knowunity), the three counts, and the source line. Reflection: one eyebrow, then three short parts at 24px
("The two targets pulled against each other ...", "Students check their own recording first ...", "What I would test first ...").
The old "What I can claim: a tested, iterated prototype, not a shipped result" and "I built the whole loop before testing it"
lines are replaced. New section options: `smallHeading` (24px heading, not the 40px chapter size), `eyebrowOnly` (eyebrow
visible, heading for screen readers only) and `lede` (paragraphs in the heading group), plus `tight` on a text block (12px
gaps, as Figma). The "agreed with Knowunity" success criteria are Lumbini's wording; I have no source for them.

### 2026-11-08 — About hero follows bobbyiscreative.com
**Decided by:** Lumbini ("for about me page hero section follow Bobby's style"). The whole portrait, tilted 2°
with the warm card shadow, on the left; "About me" at H1 (56/48, H1 Mobile on phones) level with its top; the
story; one row with "Check my resume" and round 48px LinkedIn and email buttons (Phosphor EnvelopeSimple added);
then "I love…" at every width (was phone only), where Bobby has his embroidered patches. Phones stack it,
portrait first and centred, as Bobby's. Lumbini's museum tickets stand in for the patches: one overlapping row at the
bottom of the text block (Panthéon, Louvre pyramid, Musée Delacroix), each tilted, sized by width on phones (row at most 320px) and 160px tall
from 834, as Bobby's patch row (Lumbini; they first sat on the portrait's corners). Cut flat from her photos (IMG_2950, 2953, 2954) into `public/images/about/tickets/`; the ticket backs
(barcodes, ticket numbers) are left out. From 834 the portrait is sticky (32px from the top), so it stays beside
the story while the longer text is read (Lumbini).
Headings "Featured", "All projects" and Bloom's soft-card titles now step 16 → 18 (H3 Mobile, then Subtitle S),
and the soft-card body 14 → 18, so phones keep the heading above the body.

### 2026-11-08 — About: whole portrait, side by side from 834
**Reversal of** 2026-11-04 "About stacks below 1200". **Decided by:** Lumbini ("fit the whole image… do the same for
all small screens"; "from 834px width screens the image and text should position side by side and you should show
the full image"). The portrait is never cropped. Phones: stacked, 320px tall, its width following. From 834: two
columns, the portrait in the 1440 proportion (440 of 1312), its height following (389px at 834, 648px at 1440).
The 720px text cap from earlier today is dropped, as the column is now narrower than that.

### 2026-11-08 — Top nav marks the current page; buttons get a pressed state
**Decided by:** Lumbini (Figma "top nav componenets" 512:3169 and "Button / Mobile" 373:1770; "bind them with nearest
semantic tokens").
- **Nav:** links are Greyscale/Text/Subtitle; the link for the page you are on is Primary/Text/Body (Rust 500), as in
  variants 2–4. Home is Default (nothing marked); Work is marked on every case study (`aria-current="true"`), About and
  Fun & experiments on their own pages (`aria-current="page"`). The same rust marks it in the phone menu. Resume is underlined
  on every page except Fun & experiments, as variant 4 draws it (Lumbini: "it's not a slip").
- **Pressed** (373:1770, Pressed variants): Primary keeps its Rust 500 fill and gains a 1px Primary/border/darker
  border, drawn inset. Outline drops its hover fill and gains the same border. The dark secondary ("Read the case
  study") has no Figma pressed state and keeps its hover fill. Focus stays CLAUDE.md's 2px Rust 500 ring with a 2px gap.
- **One button set at every width** (Lumbini: "use same button styles across the breakpoints"): "Button / Mobile"
  (373:1770). Secondary is white (`surface`), a 1.5px Primary border, Primary text (`accent`); hover fill Rust 25,
  bound to `surface-subtle`; pressed: Title border, no fill. The dark Secondary of the desktop set (90:2039) and the
  hand-drawn "Outline" type are no longer used, and the phone-only padding on "Check my resume" and "Copy email" is gone.
- **Which button is Primary** (Lumbini: "make the buttons inside the case study cards primary"; the rest is my
  call, one Primary per area for its main action): "Read the case study" on every Home card, "Check my resume" on
  About, "Copy email" in the footer and "See the work" on the 404 page are Primary. The nav's Contact is Secondary,
  because it is on every page; "More about me" on Home is Secondary. Card hover turns its button Rust 600.
- **Tokens not added:** Primary/border/darker (`#550000`) is bound to `--color-title` (`#110d09`), and Rust 25
  (`#f8eae7`, mobile Secondary hover) to `--color-surface-subtle`, the nearest semantic tokens.
- **Button labels:** Plus Jakarta SemiBold on every button and page, through a new `--font-button` that points at
  `--font-heading`, so case studies no longer turn it into DM Sans. Figma 373:1770 draws DM Sans; Lumbini chose
  Plus Jakarta. The outline button was Nunito Bold, and the phone "Copy email" button DM Sans Regular; both follow.
- **Contrast caveat:** the current nav item differs from the others by colour only. Rust 500 against Subtitle is
  under 3:1, which WCAG 1.4.1 asks of a colour-only cue. TODO: Lumbini to decide whether to add a second cue.

### 2026-11-07 — Interactive card hover follows Figma "Project card states" (153:250), in Primary subtle
**Decided by:** Lumbini ("use Primary subtle #CF6E58 as the hover state of the interactive cards").
Home cards, the featured card and Fun cards. Hover: 2px Primary subtle border (`--rust-300`,
`--color-primary-subtle`; Figma draws Rust 500, Lumbini chose the lighter one), the Figma hover
shadow (0 12 28 -6, Neutral 0 at 16%), title stays Title, button turns Surface inverse hover.
Keyboard focus: 2px Title border, and the button keeps its 2px Rust 500 focus ring. Replaces the
rust title and rust button of 2026-11-06.
**Because:** a quieter hover that matches the component. The border is 3.1:1 on Beige 500, above
the 3:1 for a non-text indicator; focus does not rely on it.

### 2026-11-06 — Blue removed from Home, Fun and About; case studies keep theirs
**Decided by:** Lumbini ("only case studies get to keep their blue").
Card hover on Home and Fun is now rust: Rust 500 border and ring, title and button (white on Rust
500, 5.9:1), and a shadow tinted Neutral 0 (`--shadow-card-warm`) in place of the navy one, also on
the Home photo stack. The Fun motion tile is Beige 600, not light blue (`--motion-tile` removed).
`--color-secondary` (blue) and `--shadow-card-hover` stay for the case studies. The WTV card's navy
fill is WTV's own thumbnail colour, so it stays.
**Because:** the site's own colours are beige and rust; blue now appears only inside case studies.

### 2026-11-06 — Bloom watch visual re-exported from Figma 323:1375
**Decided by:** Lumbini (the watch was not aligned). `bloom/v2/iwatch-visuals-2.png` re-exported at
2x from the current frame; the Bloom card film's circle scene uses it too, in place of `watch-wrist.jpg`.

### 2026-11-06 — Home cards play a short film of their case study when they scroll into view
**Decided by:** Lumbini (after "Case study card animation.mov"; chose all five cards, existing
case-study images, and once on scroll).
Each card plays three real screens from its own case study over its thumbnail: a zoom-in, a circle
wipe from the top-right corner, then either three screens dealt out from a stack (`fan`) or one
screen growing from a small card to fill the frame (`rise`). At 3.4 s the film fades and the
thumbnail rests, so TDK's and ANVCS's recordings and Knowunity's layered hover are unchanged.
Pointing at the card plays it again. Scenes are listed per project in `content/projects.ts`
(`sequence`); `components/CardSequence.tsx`; `.card-film` in `globals.css`.
**Because:** it shows more of each project in the 60-second scan without adding a control. About
4 s, so no pause button is needed (WCAG 2.2.2). The layer is decorative (`aria-hidden`; the
thumbnail alt describes the card), lets clicks through, and is not drawn under reduced motion or
without JavaScript.
TODO: the screens are Claude's pick from `public/case-studies`; Lumbini to confirm each card's three.

### 2026-11-05 — Knowunity problem rings corrected to Figma 331:1490 (replaces the positions in the entry below)
**Decided by:** Lumbini ("the places you highlight are not the right ones"). I had used the numbered circles of the older
frame; the right frame has three screens, each with its own ellipse: the "Almost there" chip and first line (screen 1), the
revealed answer card (a new third screen, `problem-reveal.png`, exported from Figma) and the XP, Perfect and Time row on
the Summary (screen 3). Ring sizes and centres are those ellipses (503:3135, 503:3141, 503:3147) scaled to the drawing space.
Captions are Figma's: the first is now only "'Almost there' cannot tell whether students were misheard.", and the new screen
reads "The revealed answer screen cannot help the students to know how far they were from answering rightly."

### 2026-11-05 — Knowunity problem screens: a pen draws a ring round each of three problems
**Decided by:** Lumbini (brief: hand-drawn rings drawn one after another, each followed by its problem text; no numbers).
Positions are the centres of Figma's three circles on the problem screens (331:1497, 480:3028, 331:1502), including the third,
which was missing; each ring is about 90px wide on the 272px Figma screen, so it encircles the area the circle pointed at.
The three problem cards moved into the same block and appear one by one, each when its ring is finished. Each ring is one
irregular path (about one and a half turns, wobbling, finishing past its start), revealed by its dash offset with its own
speed curve, in the red used for pen marks on dark screens (`flow-red`, 3:1 or better; Figma's rust is about 2.6:1 on that
dark). It starts when a quarter of the block is on screen, runs once (about 7.5 seconds in all) and rests finished.
Reduced motion, and a browser without JavaScript, show the finished state with no animation. The numbered markers are gone.

### 2026-11-04 — Home: less space between the hero and Selected work
**Decided by:** Lumbini (hero review: "decrease the spacing between the 1st card and the hero"). From 1200 the gap above
Selected work was 96px (`pt-section`); it is now 64px (`pt-section-sm`) at every width, so the work starts higher.
The other hero items from the review (a "See selected work" button, darker subcopy, stacking the drawing on phones)
were not part of this change.

### 2026-11-04 — WTV and Anewvista card thumbnails are fitted, not cropped
**Decided by:** Lumbini ("in Anewvista thumbnail top part is cut off ... same is true for WTV"; then "can you do
it without making the cards taller? just adjusting the size of the mockups"). The cards keep the 366:200 image
band. Those two thumbnails have a flat background, so the whole thumbnail is scaled to the band's height and
centred, with its own background colour filling the sides: WTV #003f6c and Anewvista #e8d7ff, sampled from the
images. Both colours are new tokens marked TODO (no Figma token). The images' baked white rounded-corner squares (56px) were filled with the flat
colour in the PNGs, so the box is exactly the band's height. Bloom's and TDK's thumbnails are unchanged: Bloom is centred and
cropped, TDK's recording fills the band. The thumbnails are about 20% smaller inside their cards.

### 2026-11-04 — WTV: Strategic Shift images share one left edge
**Decided by:** Lumbini ("these 2 images are not aligned in larger screen"). A portrait image in a `wide` block with
other images was centred in its column; it now sits at the column's left edge, like the wide image above it.

### 2026-11-04 — WTV: the intranet heading sits above The problem
**Decided by:** Lumbini ("the heading should be above the Problem section"). "The intranet existed — employees
just stopped using it." was Overview's heading. It is now its own heading section between My role and The
problem, at the chapter size (40). Overview keeps its statement, images and a screen-reader-only heading, and
stays after Solution. Claude's reading: she meant the heading alone, not the whole Overview section.

### 2026-11-03 — Knowunity's dark panel follows the card scale
**Decided by:** Lumbini ("make it follow Bloom's standard"). The panel's step, checklist and card text was
16/24 Plus Jakarta. It is now the case-study card scale: titles Title 1 Bold (24/36, 22 tablet, 20 phone), body
Body Regular M (20/30, 14 on phones), in DM Sans. Colours and layout are unchanged. This removes the last
exception to the 20px card body, except Bloom's Discovery cards, which follow their own Figma frame.

### 2026-11-03 — One chapter-heading rule across the case studies
**Decided by:** Lumbini ("have you checked ... consistent type scale for all case studies? if not run and fix").
A census of all five studies at 1440, 834 and 390 found one real inconsistency: chapter headings were 40px in
some studies and 24px in others, and the size did not follow length (Knowunity's 90-character Research was 24,
TDK's 91 to 94-character headings were 40). It came from a hand-set `compactHeading` flag copied from each
Figma frame. The flag is gone. A chapter heading is H3 (40, 34, 20), and 24, 22, 20 if it is over 150
characters. Sections without a chapter label keep the 24px sub-section heading. Visible changes: Knowunity's
Research, Final designs and Outcome and WTV's Overview go from 24 to 40; WTV's The problem and Design,
Bloom's Reflection and Knowunity's Exploration and Solution stay or go to 24. Two documented exceptions stay:
Bloom's Discovery cards (Figma 443:2690) and Knowunity's dark panel.

### 2026-11-03 — Type differences closed; tokens.json regenerated
**Decided by:** Lumbini ("fix those"; "regenerate it").
- **Figma:** new text styles H0 Tablet, H0 Mobile, H1 Tablet, H3 Tablet, Title 1 Bold Tablet, Title 1 Bold Mobile
  and Body L Tablet, so every tablet and phone step in the code has a style. Names and values are Claude's,
  taken from the code's existing steps.
- **Display is removed.** Figma's "Let's talk." is H1, so the footer heading uses `text-h1` (56/80, and the
  old tablet display step 48/56 is now H1 Tablet). The footer heading line height changes from 64 to 80 at 834
  and up. `text-display` and `text-display-sm` are gone; nothing else used them.
- **EYEBROW TEXT left as it is.** No Figma layer uses it and no code does. Binding it would change every
  section label from Medium with 6% spacing to Bold with none, so it is Lumbini's call.
- **Builds are always clean.** `npm run build` is now `rm -rf .next && next build`, and the two test scripts
  call it. One incremental build served a stylesheet without a new class. The cause is not proven; a clean
  build costs a few seconds and removes the risk.
- **tokens.json type regenerated** from the Figma styles, 9 entries to 23. Line heights are pixel values, or
  "normal" for Figma's auto. Letter spacing is in em. Colors, radii and spacing were not touched.

### 2026-11-03 — Type definitions in design-system.md; H0 is the 72px heading
**Decided by:** Lumbini. `design-system.md` gained a Type section: the three type breakpoints, the typefaces,
every Figma text style with its code token, the size of each token at desktop, tablet and phone, the
case-study type rules, rules for choosing, the exceptions to the size floor, and where the code differs from
Figma. Lumbini changed Figma's H1 from 72 to 56 because no page uses 72, then asked for the 72px size as its
own heading token. New: Figma text style **H0** (Plus Jakarta Bold 72/80, -2%) and code token `text-h0`, which
takes over H1's old 72, 56 and 44 steps and is used by the 404 page, so nothing renders differently. `text-h1`
is now 56/80 as in Figma, with no tablet or phone steps, and no page uses it. The name H0 is Claude's;
rename it if you prefer. `tokens.json` was not changed; it is stale for type and the doc says so.

### 2026-11-03 — Problem and Solution come first, then Overview
**Decided by:** Lumbini ("make problem and solution first for all case studies and then overview including
WTV"). **Replaces** the order in the entry below for WTV: My role, The problem, Solution, Overview, Users
response, Strategic shift, Ideation, Design, Final screens, Component library, Impact, Lessons, Sticky
notes. My role stays first, under the facts, as Lumbini placed it earlier. Bloom already ran Problem,
Solution, Overview. Knowunity runs Context (the problem), Solution, then Role and approach, which is its
overview. Anewvista and TDK have no separate Solution or Overview section; their text opens on the problem
and the solution is spread across the design chapters. Giving them one would mean writing new copy, so
they are unchanged. TODO: ask Lumbini whether to add a short Solution section to each.

### 2026-11-03 — TDK sections are chapters like the other studies
**Decided by:** Lumbini ("fix this to make it consistent with other case studies"). The census found 7 of
TDK's 10 section headings at 24px with no label, because TDK had no chapter names and only the first
section of each stage got one. All ten are now numbered chapters (01 The task, 02 Constraints, 03 The old
wizard, 04 Mapping the paths, 05 Alignment, 06 Boundaries and zones, 07 Units, 08 Dashboard and summary,
09 Accessibility, 10 Lessons), each a label over the 40px heading, and the contents list names them, as on
Knowunity, Anewvista and Bloom. The chapter names are Claude's wording, taken from each heading; change
any you prefer. Headings and copy are unchanged.

### 2026-11-03 — Decision sections 32px, quotes 20px, full-size view
**Decided by:** Lumbini.
- **Reversal of** 48px: Anewvista's decision sections sit 32px between their text and the visual, like every
  other section. Figma 284:290 draws 48.
- **Reversal of** "quotes stay as they are", for size only: every quote is 20px (body-m; 14 on phones). Weight,
  family and colour are unchanged, so Knowunity's is Plus Jakarta Bold, WTV's box quote Plus Jakarta
  SemiBold, and Anewvista's and Bloom's regular. Anewvista's quote was 24px.
- **Full-size view:** each Anewvista before-and-after visual opens at full viewport size when pressed
  (native modal dialog: Escape, the close button or a click outside closes it, focus returns to the visual).
  Below 834 the image is at least 960px wide inside a scrolling area so it can be read by panning.
  Hover zoom stays. A visible "View larger" pill marks it, since touch has no zoom cursor.

### 2026-11-03 — Captions are one size; WTV problem text is Regular 20
**Decided by:** Lumbini ("captions below the 3 images in WTV have 2 different sizes ... below 834 use the
mobile type scale I define in Figma"; "DM Sans Regular 20px for 1200px for solution and problem text").
- **Cause of the two sizes:** the scale-with-screen rule for image rows used `100vw / 390`, so type inside a
  row kept growing above 390: captions under the two-image row were 21.5px at 600px (about 30px at 833)
  while the one under the wide image stayed 14. The unit is now capped at 390, so rows hold their phone size.
- **Captions:** every caption is Body Semibold S (DM Sans SemiBold 14) from 834 and Mobile Body2 (DM Sans
  SemiBold 10/16) below, whatever row they sit in. Claude's reading: Mobile Body2 is the only small SemiBold
  mobile style in Figma; Mobile Body1 (14 Regular) is the alternative. New token `--text-mobile-body-2`.
- **WTV Overview, Design challenge and Opportunity statements** are DM Sans Regular 20/30 (14 on phones),
  not Title 1 Bold. The Design challenge sentence had its bold markers removed, since it was bold throughout.
  Opportunity keeps its inline emphasis.

### 2026-11-03 — Consistency decisions across the five case studies
**Decided by:** Lumbini, after the style and typography census (critic-evidence/consistency-report.txt).
- **At-a-glance values are 18px on every study.** Knowunity was 14. **Reversal of** the 14px Knowunity
  scale from Figma 285:574, for this one role.
- **Stat labels are 16px on every study** from 834 up (Knowunity was 14). Phones keep the 14px body style.
- **Decision sections keep 48px** between their text and the before-and-after visual (Anewvista's four,
  Figma 284:290). They already did; no other section changes.
- **Cards: strokes are neutral everywhere.** Bloom drew its card lines in its own blue (the theme-line
  token); no other study does. Bloom now uses the same neutral line. Filled cards keep each study's tint
  (surface-subtle): WTV, TDK, Anewvista and Bloom use their own, Knowunity uses beige.
- **Quotes are not restyled.** Knowunity's, WTV's and Anewvista's quotes come from usability tests and
  stay as they are, so the Anewvista quote stays 24px regular (Lumbini had first asked for 20px) and
  Bloom's speech bubbles are untouched. The four quote treatments remain; they differ by source.

### 2026-11-03 — Fixes from the first critic run (Bloom & Heal)
**Decided by:** Lumbini ("fix these"; "fix the touch target 44px for smaller device screens"). Three fixes,
no design change:
- **Touch targets:** footer text links have a 44px minimum width as well as height, so "Work" (was 33px)
  and "About" (was 40px) pass at 390. Their text does not move; only the hit area grows.
- **Pinned device, below 834:** every step's card shows its poster (and plays when active). Before, only
  the active step's recording was visible and the others were empty blue cards; reduced motion showed no
  posters for them. From 834 the pinned card is unchanged.
- **Focus ring:** the ring colour is set on every element before focus, so it no longer fades in from
  the link's text colour over 200ms.
Left alone on purpose: the 45vh gaps between pinned steps from 834 up (the scroll distance in Figma's
pinned frame), and the 9px phone eyebrows (Figma's Caption Mobile).

### 2026-11-03 — Four critic subagents
**Decided by:** Lumbini. `.claude/agents/` holds critic-craft, critic-ux, critic-system and critic-ambition.
Each reads `eval/rubric.md`, has Read, Grep and Glob only (no Write, Edit or Bash), grades blind, cites a
file and line or a screen and state for every finding, and returns scores, top findings with an exact fix,
and one blind spot. The first three are adversarial; critic-ambition is not, obeys every rule in
`design-system.md`, proposes one to three patterns from existing components, and its score is not in the
total. Claude's assignment of the six dimensions: craft takes Craft and Structure; ux takes UX judgment and
Accessibility; system takes System fidelity and Coherence. Gates: ux owns contrast and touch targets,
system owns raw hex, craft owns identical states. Critics cannot render, so scores of 8 or more need
screenshots and measurements the caller leaves for them. `design-system.md` predates some decisions, so
the prompts say `decisions.md` wins on a conflict.

### 2026-11-03 — Critique rubric
**Decided by:** Lumbini. `eval/rubric.md` scores a page on six dimensions with her weights (system
fidelity, coherence, craft and UX judgment High; accessibility Medium; structure Low), with 4, 6 and 9
anchors written for this project from her principles. Rules: "looks good" is a 6; 8 or above only when
verified by rendering, measuring or testing. Four hard gates fail a page on their own: body text
contrast 4.5:1, 44pt touch targets, no raw hex in components, no two states that should differ
rendering identically. The numeric weights (High 3, Medium 2, Low 1) are Claude's mapping; the rest is
Lumbini's.

### 2026-11-03 — WTV ships the Framer team photo
**Decided by:** Lumbini ("replace this section with the image you have in Framer portfolio"). **Reversal
of** the labelled placeholder: the high-five photo from the published Framer page (2048 × 1184) now sits
in the Impact section. It is shipped as it is, Unsplash+ watermark included; the watermark was not
removed. TODO (dev-only note on the page): an Unsplash+ licence and an unwatermarked copy before launch,
and a source for the "10x faster" onboarding line baked into the image, or that line removed.

### 2026-11-03 — Bloom hero is the Figma composition, with sliding and floating screens
**Decided by:** Lumbini ("you did not use the hero image I used in Figma"; "make a slide floating
animation for all the screens like Bobby did"). The opening follows 319:1009: a white band, the title
column, and eight layers (the soft circle and seven screens) exported from the frame at 2x and placed at
its coordinates on a 901x600 stage, right-anchored from 1200 and stacked under the text below 1200.
Motion, studied on bobbyiscreative.com/work/venue (each device fades and slides in from the right, then
floats about 8px): every screen slides 40px in over 900ms, staggered by 110ms, then floats in a 4.2-5.4s
loop. Each screen is exported whole with its shadow and cut out from the export's background, so screens
overlap cleanly and the stage crops them at the frame's edges. The two frame layers that sit fully below the
frame are left out. A pause button (WCAG 2.2.2) stops the loop; reduced motion shows a still and hides
the button. The old hero.png stays in the repo, unused.

### 2026-11-03 — WTV Overview heading has no label
**Decided by:** Lumbini ("remove the eyebrow OVERVIEW from the title The intranet existed"). The statement
under the heading keeps its own "Overview" label, so the word no longer appears twice. The contents list
still names the section Overview.

### 2026-11-03 — Anewvista decisions stack, and before-and-after visuals grow on hover
**Decided by:** Lumbini ("make all the before after design visuals increase size in hover animation";
Figma 284:290 for the design decision section). **Reversal of** text beside the visual from 1200: each
decision is its label, heading, text, trade-off, evidence and "Why it matters" first, then the visual at
full width 48px below. On hover the visual scales to 103% over 300ms, ease-out, only on devices with hover
and only when motion is allowed. The four Anewvista decisions are the only before-and-after visuals.

### 2026-11-03 — Quote carousel: arrows either side, calmer bubble
**Decided by:** Lumbini ("use these 2 arrows on 2 sides of the quote"; "make the quote bubble look more
polished"), with the ui-designer and ux-designer skills. Previous and Next flank the bubble and stay put;
every slide is as tall as the tallest, so nothing jumps between quotes. Three dots under it replace
"1 / 3" and jump to a quote (each a 44px target; position also read out). The bubble uses the card
radius (16), roomier padding, a small tail and the soft card shadow instead of the 40px radius and heavy
drop shadow, so the bubble radius and bubble shadow tokens are gone. The photo is smaller (56) with a
surface ring, set under the tail. The quote block is capped at 880 and centred, so lines stay a readable length
and the arrows sit close to the quote; the tail is a rotated square with a softened corner; quote text
is Body Regular M (20/30, 14 on phones).

### 2026-11-03 — Cards are one per line below 1200
**Decided by:** Lumbini.

**Decision.** Adopt a single-column card layout for all screen widths below 1200px, replacing the
two-column project grid. This principle applies consistently across all five case studies.

**Rationale.**
- Content legibility: cards contain meaningful descriptions, metadata, and large visual assets. A
  two-column layout at narrower widths reduces available space and compromises readability.
- Visual storytelling: each project deserves sufficient horizontal space to communicate its design
  solution and visual identity. A single-column layout allows larger, more legible thumbnails.
- Consistent browsing experience: applying the same layout principle across all five projects creates
  predictable card proportions, alignment, and spacing.

**What it covers.** Home's All projects grid (three from 1200, one below), and every card row in the five
case studies: card rows, tiles, findings, options, stats, panels, lanes, flags, the steps in a cycle, and
the dark panel's steps and cards. They keep their columns from 1200 and scale between 1200 and 1399.
**Reversal of** the Nov 2 rule that card rows keep their columns and scale down at every width.
**Not covered, on purpose:** rows of images or phone screens, the at-a-glance facts, and the Knowunity
task flow board, which Lumbini asked to keep at four columns at every width.

### 2026-11-03 — Bloom interview quotes are a carousel
**Decided by:** Lumbini ("make the bubble part a carousel, so that each time only one bubble is visible").
**Reversal of** the three-across row below: one bubble and its photo per slide at every width, with
Previous and Next, a counter, swipe and arrow keys; no autoplay. Text is the normal 18px (14 on phones).

### 2026-11-03 — Bloom Research quotes and tiles match Figma 211:1253
**Decided by:** Lumbini ("make this section exactly look like the design"; "also make every section
responsive"). The three interview quotes are real text in Secondary Blue speech bubbles, in full, each
over its participant's photo (was metrics.png, which cut the quotes off and framed them in a border).
Bubble height, tail, gaps and photo use the spacing scale, so the row shrinks with the screen and stays
three across. The four tiles are soft filled (Bloom surface, 8px corners, 18px regular, 64 and 44 gaps).
Body type stays DM Sans, as on every case study; the frame sets the tiles in Nunito Sans. Bubble radius
and shadow have no Figma tokens.

### 2026-11-03 — Bloom design decisions are horizontal cards again
**Decided by:** Lumbini ("make this cards horizontal"). **Reversal of** three columns for the "rows" cards
(Nov 2 columns rule): one full-width card per decision, number beside the title, as in 232:3004.

### 2026-11-03 — Bloom & Heal copy follows Figma 211:1154
**Decided by:** Lumbini ("use this design for bloom and heal"). Copy and placement follow the frame, every
block keeps its layout. New: the opening label and its three pills as tags; "The gap no app closes" over
the SWOT board; the SWOT paragraphs open Research under its new heading; the watch section has a visible
heading; the watch visual is re-exported (323:1375) for its new overlay line; new step 2, design decision
and Brand titles; the tile "Suppressed emotions don’t disappear, they resurface harder."
Kept on purpose, where the frame differs: the page title keeps "Apple Watch" and "intervenes" (the frame
has "Applewatch" and "intervene"); Testing keeps 90% (9 of 10), Lumbini's correction of the frame's 92%;
the Health tab and Profile phone steps stay, although the frame shows two steps; Brand and Testing stay
in the contents list.

### 2026-11-03 — One type scale across the case studies
**Decided by:** Lumbini ("check for typography and spacing consistency for all case studies"). A census
at 1440 and 390 found section gaps (96 and 64) and block gaps (32) already equal everywhere. Type was
not. From the Figma frames, every case study now uses: Plus Jakarta labels (Caption M, was Libre
Baskerville outside Knowunity), Body Semibold S captions under images and screens, H3 with auto line
height, Title 1 Bold for statements (WTV and Anewvista were 24 regular), body 20/30 for Bloom's intro
paragraphs (were 24 semibold, the frame has them as Body Regular M), and a 20/30 contents list.
At-a-glance values stay as each frame draws them: 14 on Knowunity, 18 on WTV.

### 2026-11-03 — Bloom Discovery follows Figma 443:2690
**Decided by:** Lumbini ("use this format for discovery"). **Replaces** the paragraph removal below: the
frame keeps "I studied four apps…" as a bold Title 1 line under the label and drops "Each competitor…".
The three cards are soft filled cards (Bloom surface, 8px corners, light shadow, 18px semibold titles).
Body text is Greyscale/Text/Caption (#5d5955, 6.39:1), the closest Figma token that passes on the card;
the frame’s Greyscale/Text/Body is 4.36:1 there (Lumbini: "use figma’s token to find closest match").

### 2026-11-03 — Case-study text fills the column
**Decided by:** Lumbini ("text width should fill container", consistent across case studies). Headings,
paragraphs, leads, statements, quotes and captions no longer stop at 720, 820, 960 or 70ch; they run
the full content column on every case study. Bloom's Discovery drops its first paragraph.

### 2026-11-03 — Bloom & Heal order follows Figma 211:1182
**Decided by:** Lumbini ("follow this problem, solution, overview, discovery, do not change any layout").
Problem (with the problem photo) comes first, then Solution (with the demo film), then Overview
holding the discovery work, then Research. The watch visual, the pinned watch steps and the design
decisions follow Research under a screen-reader-only heading, because the frame gives them none.
Every block keeps its layout; only order and placement changed. The contents list follows the page
order, not the frame's older rail order.

### 2026-11-02 — Home: one Featured project, then All projects
**Decided by:** Lumbini, structure and proportions from carmen-elena.space/work, measured at 1440, 834
and 390. **Reversal of** the two featured blocks in 103:2944. A dark Featured panel holds Knowunity as
one horizontal card, half image and half text. All projects is a grid of three from 1200, two from 834,
one on phones, with Bloom & Heal first. Card images go from 416:303 to 366:200, so thumbnails crop.
Her copy, button wording and blue are not used; the site keeps its own.

### 2026-11-02 — Knowunity keeps its links, carousel and recording; no comparison table
**Decided by:** Lumbini ("do not remove this, add those in their previous places"; "no table needed";
"remove what the audit caught section"). **Reversal of** the removals in the 285:574 entry below:
the Outcome links, the Final designs carousel and the prototype recording are back where they were,
and the 3×2 grid is gone. The comparison table and its block are removed from the site. The rectangular
button opens the table in Figma (286:229) in a new tab, which needs the file set to view by link. The
two audit cards are removed from the dark panel.

### 2026-11-02 — Knowunity keeps two earlier designs over the frame
**Decided by:** Lumbini. Two departures from 285:574, both on purpose.
- **Reversal of** the open table: the competitive analysis text is followed by the rectangular "See the
  full competitive analysis" button, with the table inside it.
- **Reversal of** the light AI-native cards: the dark "What stayed mine" panel is back as committed,
  with its Storybook and audit cards.

### 2026-11-02 — Knowunity: comparison table back on the page; Solution uses the demo film
**Decided by:** Lumbini. **Reversal of** the inline text link: the competitive analysis table shows in
full, with its caption. Solution holds the 71-second demo film instead of the prototype recording,
click to play under the autoplay register. Its frame is 16:9 below 1200, Figma's ratio from 1200.
The prototype recording is no longer on the page.

### 2026-11-02 — Contents list stays on one line from 1200
**Decided by:** Lumbini. From 1200 the rail is as wide as its longest label and labels never wrap, on
every case study. Below 1200 it stays 176px and labels wrap.

### 2026-11-02 — Knowunity type scale, Research hierarchy, contents spacing
**Decided by:** Lumbini ("you did not use visual hierarchy"; "I also use different type scale for the
knowunity, use that"). Scoped to `.theme-knowunity`, from a census of 285:574: Plus Jakarta labels, 14
SemiBold captions and at-a-glance values, H3 with auto line height, a 20/30 contents list, beige panels
(Greyscale/surface/subtle). **Replaces** Knowunity's purple surface; the opening band stays purple.
Research follows 286:318: the beta audit line is grey, competitive analysis is body text with an
inline link. The Solution video frame is square on phones, 3:2 from 834, and Figma's ratio from 1200.
Every study's contents list now has even padding.

### 2026-11-02 — Knowunity follows Figma 285:574; WTV follows the arrangement of 112:13
**Decided by:** Lumbini.
- Knowunity order: Context, Solution (new), Role and approach, Research, Exploration, Usability test,
  Key decision, Final designs, AI-native process, Outcome, Reflection. Copy is the frame's.
- **Removed, because the frame does not have them:** the 71-second product film, the Outcome links
  (full-quality film, Try the prototype, Storybook), the dark "What stayed mine" panel, and the Final
  designs carousel. The prototype recording moves up to Solution, in a dark band.
- Figma's "competitive analysis" link points inside Figma, so the page opens the existing table in
  place. The frame's task flow is still rebuilt as HTML (see Exploration below), without the two
  template lines. "TO CONFIRM" lines are dev-only notes.
- WTV: My role comes straight after the at-a-glance row, and the row takes the frame's values. That
  changes the Timeline from May to April 2026, Role to UX designer, and Platform to Result. The two
  problem images keep their own captions; the frame has them swapped.

### 2026-11-02 — WTV My role is one box again
**Decided by:** Lumbini, Figma 137:109. **Reversal of** the Oct 29 numbered cards: one filled box with
the heading and a /01 list. The words are Figma's, with the dash. The heading stays "My role" under
the sentence-case rule, and body text stays DM Sans like every case study (Figma's box is Plus Jakarta).

### 2026-11-02 — Key decision screens follow the updated 286:368
**Decided by:** Lumbini, who updated the frame after the first build. Both option screens are now whole
phones, 450 wide with a 48 gap, left-aligned, instead of cropped and spread to the edges.

### 2026-11-02 — Card radius: 16 large, 12 small, 8 nested
**Decided by:** Lumbini, sizes by Claude ("for large cards make it 16px and for small cards make it 8px
and 12px, judgement is yours"). Set in the tokens: `radius-card` and `radius-featured` 16,
`radius-media` and `radius-featured-media` 12, new `radius-card-sm` 8 for cards nested in a card. The
Knowunity option cards and task flow board are large; findings are small; flow cards and lane
steps are nested. In scaled rows below 834 they step down to 12 and 8. Buttons, tags, pills, phone
bezels and the About portrait are not cards and do not change. TODO: Figma's radius/card is still 24.

### 2026-11-02 — Rows keep their columns at every width; Knowunity usability test and key decision
**Decided by:** Lumbini ("apply the same principle across the portfolio"; Figma 287:213 and 286:368).
- **Reversal of** stacking on phones in the case studies. Rows of like items (cards, stats, images,
  steps, lanes, panels) keep their column count at every width. `.fit-N` scales type, spacing and
  radius with the screen. Text there goes below the 14px phone rule: 10px in three columns, 8px in four,
  7px in five, at 390.
- Not changed: text beside a visual stacks on phones, because it is one reading order. Home, About
  and Fun keep the phone layouts Lumbini drew in 336:1768 and 408:2363.
- Knowunity order follows the Figma page: Exploration, Usability test, Key decision, Final designs.
  Both are rebuilt from Figma, and all eight findings show without a toggle. The red "TO CONFIRM" line
  in 287:213 is a dev-only note, not page copy.
- Figma: section colours in both frames are bound to Semantic variables. New
  `Greyscale/border/subtle` (#dcd8d4) for card outlines. App screens are left as they are, because
  those are Knowunity's colours.

### 2026-11-02 — Task flow board is four columns at every width; summary cards removed
**Decided by:** Lumbini ("you should have 4 column layout for all screen sizes, for smaller screen
sizes scale that down appropriately"; "remove the 4 white boxes below it").
- **Reversal of** two columns on phones in the entries below. The board is sized in em from one
  value: 14px text at 562px wide and up, down to 7px at 358px. Phone text there is under the 14px rule
  and is the board's own exception.
- The four summary cards are gone, so the section is the board and its caption.

### 2026-11-02 — Task flow board is four columns from 834
**Decided by:** Lumbini ("still in the 2 column style, make it exactly look like Figma, all in one
row"). The board and summary cards are one row of four from 834, as in 286:337, and the legend sits
under the title again. **Extends** the 14px exception below to 834. Phones stay two columns: four
across at 390 leaves each card under 80px wide.

### 2026-11-02 — Task flow board is compact from 1200
**Decided by:** Lumbini ("looks really big in MacBook Pro screen"). From 1200 the board keeps four
columns but its card text is 14px, with tighter padding and the legend beside the title, so it fits
one laptop screen. This is an exception to the 16px rule from 834, for this board only. On phones
("scale it down for mobile screen too") the board and summary are two columns with tighter cards;
text stays 14px. Four across would shrink the text to about 3px. 834 is unchanged.

### 2026-11-02 — Knowunity Exploration follows Figma 286:337
**Decided by:** Lumbini ("replace the task flow section with this section"). **Replaces** the
flowchart of Oct 27, whose block is deleted.
- The board is an image in Figma. It is rebuilt as HTML, so its text is real, stacks on phones and
  meets the 16px and 14px rules. In the image, the card body would be about 9px at 1184.
- Left out of the image: "Generated in this file by Claude, via the Figma Console MCP" and "A sample,
  not the answer. Yours will look different the moment you decide where this feature lives." They
  speak to a designer using a template, not to a hiring manager.
- Idle's last sentence is cut off in the image too, so it ends at "speak, type, skip." TODO: the rest.
- The heading is Title 1 Bold (24) as drawn, and "it75%" gets its missing space. The eyebrow stays
  "Exploration" with no number, per the Oct chapter decision. Other copy is as in Figma.
- Purple tag text is #9a82ea, not Figma's #9178e6, which is under 4.5:1 on the card. The number
  circle keeps #9178e6.
- TODO: "Under four seconds" has no source; is it a target? New `--flow-*` colours have no Figma
  tokens.

### 2026-11-02 — Knowunity: "Not built, kept as findings" removed
**Decided by:** Lumbini. The two cards (other students' answers, bringing weak concepts back) are gone
from the page. The usability-test finding about comparing answers stays.

### 2026-11-02 — H3 Mobile and scaled-down media on every page
**Decided by:** Lumbini ("do it for landing page, about me, fun and all case studies").
- Home project titles, About's Writing and principle titles, and Fun's card titles are H3 Mobile.
  **Reversal of** Title 1 Bold (24) on the Fun cards and the Writing heading: at 24 they were larger
  than the page title. Fun's cards no longer match 408:2363, and Writing is H1 Mobile (20).
- Home's section and project headings are Plus Jakarta below 834. From 834 they stay Nunito Sans.
- Knowunity's storyboard no longer scrolls at 960px. It scales to the column, so its small text is
  harder to read on phones. `minWidth` is gone from the image type.
- The Knowunity and WTV carousels stay: one whole screen shows at a time, with Previous and Next.

### 2026-11-02 — Phone screens stay in one row and scale down
**Decided by:** Lumbini ("do not make it scrollable, scale down the frame sizes"). **Replaces** the
two columns in the entry below: `PhoneFrame` is one row at every width, and a lone screen is 60% wide
below 834.

### 2026-11-02 — Phone sub-headings are H3 Mobile; phone screens fit the width
**Decided by:** Lumbini ("check what typography you use for titles"; "these screens are not fitting
the width of a smaller size of device").
- At 390 the page title, chapter titles and card titles were all 20px, so nothing separated them. New
  Figma and code style **H3 Mobile**, Plus Jakarta Bold 16/24, for case-study sub-headings on phones.
  Page and chapter titles stay H1 Mobile (20), body Mobile Body1 (14). Desktop and 834 are unchanged.
- **Reversal of** the sideways phone scroll: below 834 `PhoneFrame` is two columns, so every screen
  shows at once. This covers Knowunity and WTV, the only two studies that use it with several screens.

### 2026-11-02 — Anewvista numbered cards: number and title on one row
**Decided by:** Lumbini. Applies to "The journey" and "What we learned". Knowunity and WTV keep the
number above the title.

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
