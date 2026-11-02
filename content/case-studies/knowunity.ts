// Structure: knowunity-decisions-log.md (2026-10-21), worksheet block order 1 to 7 plus the extra
// AI-native block after Final designs. Copy: ~/Desktop/Knowunity Case Study Kit, tightened with the
// lumbini-voice skill; problem statement, competitive analysis and Task flow 4 from Figma
// rN9sAZoK4XH8tnIJBkXobU. Items the log marks OPEN are `todo` blocks (dev only), never guessed.
import type { CaseStudy, Img } from "./types";

const dir = "/case-studies/knowunity";
const phone = (file: string, alt: string, caption?: string, width = 1170, height = 2532): Img => ({
  src: `${dir}/${file}`,
  width,
  height,
  alt,
  caption,
});

export const knowunity: CaseStudy = {
  slug: "knowunity",
  theme: "knowunity",
  title: "Proof, not praise: voice recall for Knowunity",
  // Draft hook from the log; Lumbini can reword.
  summary: "Knowunity's recall feature ended at a score. I designed what happens next.",
  // Opening and at-a-glance row from Figma Uu1a2kCZL3M4y86CtPcmqR 285:584 and 285:597
  // (Lumbini, 2026-10-29), replacing Solo designer / 2.5-week sprint / Solo.
  facts: [
    { label: "Role", value: "UX designer" },
    { label: "Timeline", value: "2.5 weeks, September 2026" },
    { label: "Tools", value: "Figma, Claude Code, Next.js, Storybook" },
    { label: "Status", value: "Course project. Not shipped." },
  ],
  opening: {
    eyebrow: "Active recall for Knowunity · iOS",
    tags: ["Usability testing", "Coded prototype", "AI-native process"],
    // Figma 299:865, exported at 2x with its placeholder text and slot outlines removed, on a
    // transparent background, cut at the frame's bottom edge: the middle phone runs off the
    // band, as in Figma (Lumbini, 2026-10-30: "clip the phone mockup in the middle").
    clip: true,
    image: {
      src: `${dir}/hero-phones.png`,
      width: 1081,
      height: 852,
      alt: "Three screens from the Knowunity active recall prototype: a summary reading 6 of 10 recalled with hinted, perfect and missed counts; a previous-mistake review of Germany's rapid-war strategy with the correct answer and the student's own answer; and the home screen, “Evening, Harry. Ready to test what stuck?”",
    },
  },
  sections: [
    // Block 1: the hook. The film is the hero.
    {
      id: "hook",
      stage: "Problem",
      chapter: { number: "01", title: "Context" },
      heading:
        "Students revise, then can't retrieve it in the exam, and nothing in the app tells them which is which",
      blocks: [
        {
          kind: "video",
          hero: true,
          video: {
            src: `${dir}/knowunity-active-recall-web.mp4`,
            poster: `${dir}/knowunity-hero-poster.jpg`,
            width: 1280,
            height: 720,
            autoplay: true,
            description:
              "Product film: a student allows the mic, answers aloud, climbs two hints, reviews their take, sees 'You explained 2 of 4 without help', then retries the topic they missed.",
          },
          caption:
            "71-second product film of the prototype: iOS, 390px, dark mode. Every frame on the phone is the real prototype, rendered from its own components.",
        },
        // Block 2: context and challenge.
        {
          kind: "statement",
          label: "Situation",
          text: "Knowunity is a study app with 30M+ downloads. Its practice tools test recognition, like multiple choice and flashcards. None of them ask a student to pull an idea from memory and say it.",
        },
        {
          kind: "statement",
          label: "Users",
          text: "Secondary-school students before exams. Flattering feedback sends them in over-confident, and punishing hints stops them asking for help.",
        },
        // Figma "problem section" 203:1646 (Lumbini, 2026-10-27); copy and screens verbatim from it.
        {
          kind: "annotated",
          label: "Core problem",
          text: "Knowunity’s beta shows a verdict and a hint but never what the app heard, so a student who gets “Almost there” can’t tell whether they were misheard or genuinely partial, and a fair result can feel unfair. Its summary then names perfection and time to complete without giving a next step, so the student leaves with a judgment they can neither verify nor act on.",
          screens: [
            {
              image: {
                src: `${dir}/problem-almost-there.png`,
                width: 1179,
                height: 2556,
                alt: "The beta's verdict: \"Almost there\" above a hint about historical thinking, with only a Reveal answer button. Nothing shows what the student said.",
                caption: "‘Almost there’ cannot tell whether students were misheard",
              },
              marker: { x: 78.9, y: 26.4 },
            },
            {
              image: {
                src: `${dir}/problem-summary.png`,
                width: 1179,
                height: 2556,
                alt: "The beta's summary: \"Amazing job! Impressive! You've mastered this content! You're on fire!\", with XP +14, Perfect 100% and a time of 1:45, then Continue.",
                caption: "The Summary screen names perfection and time to complete without giving a next step",
              },
              marker: { x: 8.5, y: 60.1 },
            },
          ],
        },
        // Lumbini's "Problem storyboard.png" (~/Desktop/Knowunity case study), after the core problem.
        {
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/problem-storyboard.png`,
              width: 2400,
              height: 420,
              minWidth: 960,
              alt: "A five-panel storyboard with Knowie at a desk. 1, preparing for an exam. 2, using speak out loud: the key term \"Triple Entente\" with a mic prompt. 3, there is no way the student knows the next step: a hint card reads \"Think three powers. Britain, France, and one more.\" 4, a side-by-side comparison is shown. 5, a plan to improve the weaker area: \"Came naturally\", \"Worth revisiting: Triple Entente\", and \"Back tomorrow\".",
            },
          ],
        },
      ],
    },

    // Block 3: role and approach.
    {
      id: "approach",
      stage: "Problem",
      chapter: { number: "02", title: "Role and approach" },
      heading: "I owned the whole feature as the solo designer, from audit to coded prototype",
      blocks: [
        {
          kind: "text",
          paragraphs: ["**What I owned:** everything in a 2.5-week sprint with Knowunity, as the solo designer."],
        },
        {
          kind: "flow",
          steps: ["Beta audit", "Figma design", "Coded prototype", "Usability testing", "Rebuild after the test"],
          notes: [],
        },
        {
          kind: "todo",
          text: "\"Remove kickoff\": I removed only the Kickoff step from this strip. Confirm the whole opening should stay.",
        },
      ],
    },

    // Block 4A: research.
    {
      id: "research",
      stage: "Problem",
      chapter: { number: "03", title: "Research" },
      heading: "The beta graded students, and participants lost track of the hint ladder",
      blocks: [
        {
          kind: "cards",
          heading: "What I learned",
          numbered: true,
          items: [
            { title: "The beta's grade misled.", body: "It flattered a student who guessed and punished one who used help." },
            { title: "The hint ladder was invisible.", body: "Participants lost track of where they were, and the reveal didn't read as the last step." },
            { title: "The next action was unclear.", body: "After the answer appeared, participants didn't know whether to retry or submit." },
          ],
        },
        {
          kind: "phones",
          images: [
            phone(
              "beta-take-before.png",
              "The beta's recording ends in a tick captioned \"Tap to send\".",
              "**Lacking:** the recording ends in a tick. The student can't replay it or try again.",
              1179,
              2556,
            ),
            phone(
              "beta-thinking-before-clean.png",
              "The beta's thinking state, three dots and a tick.",
              "**Lacking:** three dots and a tick look like \"sent\". The student can't tell if the app heard them.",
              390,
              844,
            ),
            phone(
              "beta-pass-before.png",
              "The beta's result screen, \"Amazing job! Impressive! You've mastered this content! You're on fire!\", with XP +14, Perfect 100% and a time of 1:45.",
              "**Lacking:** praise and a \"Perfect\" 100%. It never says which terms the student recalled alone.",
              1179,
              2556,
            ),
          ],
          caption:
            "Beta audit. Drove three decisions: the take became a choice, the wait stopped looking like \"sent\", and praise became a count.",
        },
        {
          kind: "text",
          paragraphs: [
            "I audited Knowunity's beta before designing anything. Its intro promised scores \"up to 20% higher on exams\". It ended with a grade and listed missed terms under a red \"Needs practice\".",
          ],
        },
        {
          kind: "todo",
          text: "The \"Explain it to Knowie\" intro screen is removed, so the \"up to 20% higher\" line has no visual proof. Reword it as something observed in the beta, or cut it.",
        },
        {
          kind: "matrix",
          columns: ["Anki", "Quizlet", "Duolingo", "Knowunity beta"],
          rows: [
            {
              label: "Active recall",
              cells: [
                "The user speaks the answer to a flashcard, then grades themselves against the full model answer.",
                "Shows the correct answer beside the typed answer, so you can see exactly where you diverged.",
                "No free recall. Exercises test recognition: tap the right word, match pairs, build sentences from tiles.",
                "\"Explain out loud\" after each module, so students prove they know a concept by heart.",
              ],
            },
            {
              label: "Recovery from a miss",
              cells: [
                "Missed cards go to the back of the queue. The scheduler decides when each one returns.",
                "Re-queues missed terms and makes you get them right twice before they count as learned.",
                "App Store reviewers say they don't understand their mistakes or the sentences they didn't quite get.",
                "A student can tap Reveal answer, then Next question, and never say the right answer.",
              ],
            },
            {
              label: "Learning by repetition",
              cells: [
                "Spaced repetition: every graded card feeds an algorithm that decides when you see it again.",
                "Flashcards track weak words and resurface them.",
                "The lesson system tracks weak words and resurfaces them.",
                "The session ends at the summary. Nothing links missed terms to the flashcards' spaced repetition.",
              ],
            },
            {
              label: "Summary",
              cells: [
                "Shows your retention rate over time.",
                "Tells you which terms you missed.",
                "Roleplay gives prose feedback on what you could improve.",
                "XP and one overall percentage (33%). A student can't tell which terms to revisit.",
              ],
            },
          ],
          caption:
            "Competitive analysis. Shows how four apps handle recall, misses, repetition and the summary. Drove the decision to show the student's answer beside the model answer, as Anki and Quizlet do.",
        },
      ],
    },

    // Block 4B: exploration.
    {
      id: "exploration",
      stage: "Solution",
      chapter: { number: "04", title: "Exploration" },
      label: "Task flow 4",
      heading: "Chat chip → Explain Out Loud → topic summary",
      blocks: [
        // A traditional flowchart (Lumbini, 2026-10-27: "visual first, as little text as possible").
        // Labels are the Figma task flow's steps, shortened; only "Confident?", "Pass?" and Yes/No are added.
        {
          kind: "flowchart",
          columns: [
            {
              title: "Getting there",
              nodes: [
                { shape: "start", label: "Home screen" },
                { shape: "step", label: "Tap \"Explain Out Loud\"" },
                { shape: "step", label: "Type a topic" },
                { shape: "step", label: "Folder panel: topic card" },
                { shape: "step", label: "Tap the topic card" },
                { shape: "goto", to: 2 },
              ],
            },
            {
              title: "The recall loop",
              nodes: [
                { shape: "step", label: "Prompt shown" },
                { shape: "step", label: "Student speaks" },
                {
                  shape: "decision",
                  label: "Confident?",
                  branches: [
                    { label: "No", nodes: [{ shape: "step", label: "Editable transcript" }] },
                    { label: "Yes", nodes: [{ shape: "step", label: "Read-only transcript" }] },
                  ],
                },
                {
                  shape: "decision",
                  label: "Pass?",
                  branches: [
                    { label: "No", nodes: [{ shape: "goto", to: 3 }] },
                    { label: "Yes", nodes: [{ shape: "goto", to: 4 }] },
                  ],
                },
              ],
            },
            {
              title: "When it goes wrong",
              nodes: [
                { shape: "step", label: "Round 1: no hint" },
                { shape: "step", label: "Rounds 2–4: hints 1–3" },
                { shape: "step", label: "Fourth wrong: term locked" },
                { shape: "step", label: "Side-by-side compare" },
                { shape: "exit", label: "Mid-session exit" },
              ],
            },
            {
              title: "Ending it",
              nodes: [
                { shape: "step", label: "Circle: unaided recall %" },
                { shape: "step", label: "Knowie headline" },
                { shape: "step", label: "Subtopic cards" },
                { shape: "step", label: "Feedback rating" },
                { shape: "end", label: "Schedule revision" },
              ],
            },
          ],
          caption: "Task flow 4 from my Figma file.",
        },
      ],
    },

    // Block 4C: one key decision.
    {
      id: "key-decision",
      stage: "Solution",
      chapter: { number: "05", title: "Key decision" },
      heading: "I rebuilt the hint ladder so every rung looks like the step it is",
      blocks: [
        {
          kind: "panel",
          columns: [
            {
              title: "Option A",
              items: ["Three identical hint dots", "The reveal still offers the mic"],
            },
            {
              title: "Option B (chosen)",
              items: [
                "Named rungs: Hint 1, Hint 2, Hint 3, Reveal",
                "The current rung lights up",
                "Hint 3 gets a lightbulb and a gold box",
                "Hints appear inside the verdict card",
              ],
            },
          ],
          caption:
            "Participants lost track of the ladder in Option A. One said: \"I do not know from the reveal question that it was distinct from the other hint.\"",
        },
        {
          kind: "video",
          video: {
            src: `${dir}/hint-ladder-clip.mp4`,
            poster: `${dir}/hint-ladder-clip-poster.jpg`,
            width: 1280,
            height: 720,
            description:
              "Clip from the product film: a student gives a partial answer to \"What was appeasement, and why did it fail?\", scores 65% with Hint 1 inside the verdict card, answers again, and climbs to 75% with Hint 2 as the next rung lights up.",
          },
          caption: "Option B in the prototype: each partial answer climbs one rung on its own.",
        },
        {
          kind: "cards",
          heading: "Not built, kept as findings",
          items: [
            {
              title: "Seeing other students' answers.",
              body: "It was outside the sprint's scope.",
            },
            {
              title: "Bringing weak concepts back, Duolingo-style.",
              body: "Designed, not built. Hinted and missed terms would come back for a second pass through the ladder.",
            },
          ],
        },
      ],
    },

    // Block 4D: final designs. Other decisions fold into these captions.
    // Usability test (Lumbini, 2026-10-27): placed after the key decision, before final designs.
    {
      id: "usability-test",
      stage: "Problem",
      chapter: { number: "06", title: "Usability test" },
      heading: "Think-aloud usability test",
      blocks: [
        {
          kind: "phones",
          images: [
            phone("hints-before.png", "Before the test: the hint ladder's rungs look alike and the hint carries the same alert icon.", undefined, 780, 1530),
            phone("reveal-before.png", "Before the test: the revealed answer with \"Try again\" and \"Type instead\" still offered.", undefined, 780, 1666),
          ],
          aside: [
            {
              kind: "quote",
              text: "I do not know from the reveal question that it was distinct from the other hint.",
              cite: "A participant, think-aloud usability test",
            },
          ],
          caption:
            "Think-aloud usability test. Shows the screens participants used: three hint dots that look alike, and a reveal that still offered the mic. Drove the hint ladder rebuild.",
        },
        {
          kind: "details",
          summary: "All eight things the test surfaced",
          blocks: [
            {
              kind: "cards",
              numbered: true,
              items: [
                { title: "The reveal screen lacked hierarchy.", body: "Participants didn't know it was the final step." },
                { title: "The next action was unclear:", body: "retry, continue or submit, especially after the reveal." },
                { title: "Hints needed a visible progression,", body: "so a student knows how much help they've had and what comes next." },
                { title: "Reviewing and retrying were mixed together.", body: "The mic should stay off while the answer shows, until the student chooses to retry." },
                { title: "Participants wanted to see how much was right:", body: "a progress circle or percentage, on the verdict and the final result." },
                { title: "The summary should say what to do next, per topic,", body: "not only list concepts to review." },
                { title: "Participants wanted to compare with other students' answers,", body: "to find a better way to explain it." },
                { title: "Half-remembered concepts should come back,", body: "asked a new way, like Duolingo, with a note on why." },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "final-designs",
      stage: "Solution",
      chapter: { number: "07", title: "Final designs" },
      heading: "Each screen answers one question, and every turn has a way out",
      blocks: [
        {
          kind: "todo",
          text: "Main slot: the screen recording from Sep 30 shows the reveal with the mic still live, which is the pre-test state. Confirm it is the final prototype before it goes here; if not, it can be the \"before\" clip in the key decision. Also send the short video for the supporting screens.",
        },
        // All final screens in one carousel (Lumbini, 2026-10-27).
        {
          kind: "carousel",
          label: "Final designs",
          images: [
            phone("reveal-after.png", "The reveal: the ladder lit at Reveal, the answer in a green card, and a single \"Try now\" button.", "**The reveal hands the mic back.** No mic while you read; Try now opens a fresh recorder."),
            phone("05-hint-2-partial-75.png", "A 75% partial verdict after Hint 1, with Hint 2 inside the verdict card.", "**The ring measures coverage, not a grade.** Taking a hint costs nothing.", 780, 1530),
            phone("13-summary-wants-practice.png", "Summary after \"I need to practice\": Redo leads.", "**The summary counts unaided recall.** \"You explained 1 of 3 without help.\""),
            phone("14-compare-your-answer.png", "Your answer beside the correct answer, with Next and Try again.", "**Side-by-side compare.** What the student said, next to the full answer."),
            phone("03-take-retry-or-submit.png", "The take: play it back, then Retry or Submit answer; the bin asks before deleting.", "**Retry is free, Submit counts.** The two buttons look different because they cost different things."),
            phone("04-processing-transcript.png", "Knowie thinking, with \"What you said\" shown as proof the answer landed.", "**\"What you said\" stays on screen** while Knowie judges, so a mishearing never reads as a failure."),
          ],
        },
        // The prototype in use, after the final screens (Lumbini, 2026-10-27): her Sep 30 screen
        // recording (46 s, 824x1360, silent), re-encoded to MP4, autoplaying in a phone mockup.
        {
          kind: "video",
          device: "phone",
          video: {
            src: `${dir}/prototype-recording.mp4`,
            poster: `${dir}/prototype-recording-poster.jpg`,
            width: 824,
            height: 1360,
            autoplay: true,
            description:
              "Screen recording of the prototype: from the home screen, the student opens World War II, chooses Explain out loud, answers, sees \"What you said\" with Retry and Continue, reveals the answer, and waits while it evaluates.",
          },
        },
      ],
    },

    // Extra block: AI-native process, after Final designs and before Outcome.
    {
      id: "ai-native",
      stage: "Solution",
      chapter: { number: "08", title: "AI-native process" },
      heading: "I used AI to build and audit the prototype, and kept the design decisions myself",
      blocks: [
        // Laid out like Carmen's Pilgrimz "Claude Design OS" section (Lumbini, 2026-10-27). All copy is
        // the section's existing text; the image captions are split into a title and a line.
        {
          kind: "showcase",
          label: "What stayed mine",
          intro: [
            "Every product decision came from me, the tests or the brief. I accepted or rejected each critic finding myself.",
          ],
          steps: [
            { title: "I decide", body: "Brief, decisions log, rules" },
            { title: "Claude Code builds", body: "Screens from my Figma and the component library" },
            { title: "Critic agents grade", body: "11 scorecards, hard gates" },
          ],
          stepsCaption: "AI built and checked against my rules, and the decisions stayed with me.",
          kit: {
            title: "The system I set up",
            items: [
              {
                title: "Project rules",
                body: "Every value from the design tokens, only components from the Storybook library, sentence case, Knowie never speaks, and every screen keeps a way out.",
              },
              { title: "Coded prototype", body: "I built a Next.js prototype of 22 recall states from my Figma screens, with Claude Code in VS Code." },
              { title: "Component library", body: "32 components in Storybook. Every screen uses them." },
              { title: "Critic agents", body: "Four critic agents (craft, UX, design system, ambition) and a spec reviewer." },
              { title: "Rubric and hard gates", body: "Six dimensions and four hard gates, such as 48 px tap targets and 4.5:1 contrast." },
              {
                title: "Product film",
                body: "Claude Code rendered the film from the real components. It can't show anything the prototype doesn't do.",
              },
            ],
          },
          cards: [
            {
              image: {
                src: `${dir}/storybook-semantic-colors.png`,
                width: 1600,
                height: 1000,
                alt: "Storybook, Colors / semantic: background tokens such as page, surface, input and contrast, each with its value, the primitive it aliases, and a one-line note on where it is used.",
              },
              title: "Semantic colour tokens in Storybook",
              body: "Each with a note on the job it does.",
            },
            {
              image: {
                src: `${dir}/storybook-hint-ladder.png`,
                width: 1600,
                height: 1000,
                alt: "Storybook, HintLadder docs: the Figma node it comes from, why the active step is taller as well as brighter, its one departure from Figma, and a rung control from attempt 1 to reveal.",
              },
              title: "The HintLadder component",
              body: "Its Figma source, the reason for each state, and where it departs from Figma.",
            },
            {
              label: "What the audit caught",
              title: "A \"Type your answer\" link that rendered 93 × 16 px.",
              body: "It failed the tap-target gate.",
            },
            {
              label: "What the audit caught",
              title: "A score that printed \"6500%\".",
              body: "A percentage multiplied by 100 twice.",
            },
          ],
        },
        {
          kind: "todo",
          text: "Did you also use Claude in Cowork, Figma's AI, or another tool in the research or synthesis phase? Add it here only if you did.",
        },
      ],
    },

    // Block 5: outcome and impact.
    {
      id: "outcome",
      stage: "Impact",
      chapter: { number: "09", title: "Outcome" },
      heading: "What I can claim: a tested, iterated prototype, not a shipped result",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "22", label: "Recall states in the coded prototype" },
            { value: "32", label: "Components in the Storybook library" },
            { value: "11", label: "Critique rounds by critic agents" },
          ],
          source: "What exists today.",
        },
        {
          kind: "text",
          paragraphs: [
            "Nothing shipped, so I don't claim a metric. A pilot would measure Knowunity's targets: **25% of students who see the feature start it, and 70% of those finish it.** These are targets, not results.",
            "I placed the entry in AI Chat, where 15.2% of active users already send voice messages.",
          ],
        },
        {
          kind: "links",
          items: [
            { label: "Watch the film in full quality (1080p, 49 MB)", href: `${dir}/knowunity-active-recall.mp4` },
            { label: "Try the prototype", href: "https://knowunity-sprint-one.vercel.app/entry" },
            { label: "Component library (Storybook)", href: "https://6aa836309aea888aed9def73-dezjpygccw.chromatic.com/" },
          ],
        },
        {
          kind: "todo",
          text: "Confirm both links show the latest build. They answered on 15 Oct 2026, but the Storybook was last published 19 Sep.",
        },
      ],
    },

    // Block 6: reflection, one sentence.
    {
      id: "reflection",
      stage: "Impact",
      chapter: { number: "10", title: "Reflection" },
      heading: "I built the whole loop before testing it, so the fixes meant reworking finished screens.",
      blocks: [],
    },
  ],
};
