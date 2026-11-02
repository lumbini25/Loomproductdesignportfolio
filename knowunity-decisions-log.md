# Knowunity case study: layout decisions log

Last updated: 2026-10-21. Source: Q&A with Lumbini against `case-study-worksheet.docx`.
Live page being reworked: `/work/knowunity` (localhost:3001).
Constraints: see `platform-constraints.md` (light mode, 1440 / 834 / 390, WCAG 2.1 AA, 16px body, 44px targets, 4.5:1, no autoplay unless registered, every number sourced). Voice: no em dashes.

Rule for Claude Code: follow the worksheet block order below. Do not rewrite claims. Anything marked OPEN needs Lumbini's input before it is built.

## Block 1: The hook

- Page title stays outcome-led: "Proof, not praise: voice recall for Knowunity".
- One-line hook (draft, Lumbini's tension: the feature has no path after the summary): "Knowunity's recall feature ended at a score. I designed what happens next." Lumbini can reword.
- Details row (worksheet as written): Role, Timeline, Tools, Team.
  - Role: Solo designer
  - Timeline: 2.5-week sprint
  - Tools: OPEN, Lumbini to supply the list
  - Team: Solo
  - Note: the design brief says team was to be left off the page. Lumbini chose the worksheet row as written, which overrides that. Platform (iOS, 390px, dark mode) moves out of the row; keep it as a caption on the hero or in the context block.
- Hero: the 74-second film, poster first, plays only on press (not on the autoplay register).
  - File: `knowunity-active-recall.mp4`, 1920x1080, 74.0 s, 49 MB, h264, 60 fps.
  - Poster: `knowunity-hero-poster.jpg` / `.webp`, frame at 52.4 s ("You explained 2 of 4 without help").
  - Film has black frames at 0 to 0.5 s, about 2 s, about 3.8 s, and 71.05 s to the end (about 3 s). Trim the black tail, or end on a settled card.
  - Needs a size budget at 390px, a visible fallback caption if the video fails, and a reduced-motion still.
  - The blurred and blacked-out video on the current page is the old embed. Replace it with this file. The source file shows no blur.

## Block 2: Context and challenge

- Three short labeled blocks: Situation (2 to 3 sentences), Users (1 to 2), Core problem (1 to 2).
- Problem section: keep only the bold problem statement. Cut the paragraph below it.
- Context image + caption: the beta audit stays out of Context and lives in 4A.
- Remove the "Explain it to Knowie" intro screen (beta screen with "Active Recall helps you score up to 20% higher on exams") from the audit.
  - Consequence: the claim "its intro promised scores up to 20% higher" loses its visual proof. OPEN: reword as something observed in the beta, or cut the line.
  - Assumed this was the first Before/After pair of the three. OPEN: confirm.

## Block 3: Role and approach

- What I owned: solo designer, 2.5-week sprint with Knowunity.
- Process steps: order only, no weeks.
  - Remove the "Kickoff with Knowunity" step.
  - Remaining order: Beta audit, Figma design, Coded prototype, Usability testing, Rebuild after the test.
  - OPEN: confirm "remove kickoff section" meant only the step, not the whole opening.
- The AI-native material does not live here. It gets its own block after Final designs.

## Block 4: The work

### 4A Research
- Three artifacts: beta audit (3 before/after pairs, minus the removed intro screen), competitive analysis table (Anki, Quizlet, Duolingo, Knowunity beta), think-aloud usability test (participant quote plus findings).
- Short "what did you learn" summary above them. Trim the 8 test findings to 3 in the summary, full list behind a toggle.
- Every artifact gets a caption: what the image shows and what decision it drove.

### 4B Exploration
- No wireframes exist for Knowunity. Use Task Flow 4 from Figma as the exploration artifact.
- Its "Flag:" notes become the caption (decisions still to make). Do not use "messy is fine" framing.

### 4C Key design decisions
- One decision only: the hint ladder rebuild.
  - Option A: three identical hint dots, reveal still offers the mic.
  - Option B: named rungs (Hint 1, Hint 2, Hint 3, Reveal), current rung lit; Hint 3 has a lightbulb and gold box; hints appear inside the verdict card.
  - Ground it in the usability test quote and finding that participants lost track of the ladder.
- Other decisions (reveal screen, coverage ring, count-not-grade summary) fold into captions on the final screens. They are not separate sections.
- Not built, stays as findings: seeing other students' answers, and bringing weak concepts back Duolingo-style (designed, not built).

### 4D Final designs
- Main slot: a full video of how the problem was solved.
  - Asset: screen recording `Screen Recording 2026-09-30 at 10.38.34AM.mov`, 824x1360 portrait, 44.1 s, 2.3 MB.
  - OPEN, important: the recording's reveal frame shows the answer with the mic still live next to it. That is the pre-test "before" state the page says was rebuilt. It is dated Sep 30. If it predates the post-test rebuild, it contradicts the page. Confirm it is the final prototype before shipping it in 4D. If not, use it as the "before" clip in the hint ladder decision.
  - The hero film is a separate asset, so the same video is not shown twice.
- Supporting screens: Side-by-side compare; Retry vs Submit with transcript ("What you said" stays on screen while Knowie judges); a short video (Lumbini to share the asset).
- Captions on final screens carry the folded decisions: ring measures coverage not grade, summary counts unaided recall, reveal hands the mic back.

## Extra block (not in worksheet): AI-native process, sits after Final designs and before Outcome
- Content from the current "AI-native foundation" section: decision loop, project rules, coded prototype (22 states, 32 components), critic agents, rubric and hard gates, what the audit caught, "what stayed mine".
- Product film is rendered from real components.

## Block 5: Outcome and impact
- Three metrics, all things that exist, labeled "What exists today": 22 recall states, 32 components, 11 critique rounds.
- Summary paragraph: nothing shipped, so no claimed metric. Pilot targets (25% start, 70% finish) appear here, clearly marked as targets, not results. Entry placed in AI Chat where 15.2% of active users already send voice messages.

## Block 6: Reflection
- One sentence only. Drop the "Still open" list entirely.
- Default sentence (Lumbini did not pick, edit freely): "I built the whole loop before testing it, so the fixes meant reworking finished screens."

## Block 7: Navigation
- Next project only: WTV Consulting Agency. No Previous slot.
- Drive from a data file so reordering later does not touch layout.

## Open items
1. Tools list for the details row.
2. Short video asset for supporting screens.
3. Confirm the 4D recording is the post-test prototype.
4. Hook wording and the 20% claim after the intro screen is removed.
5. Confirm "remove kickoff" scope and which audit pair was removed.
6. Brief says leave team off, worksheet row includes Team: Lumbini chose worksheet. Update the brief.
