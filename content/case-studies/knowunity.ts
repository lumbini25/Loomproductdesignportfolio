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
  title:
    "Replaced vague progress feedback with a progressive hint ladder and actionable next steps after every Speak Out Loud round.",
  // Draft hook from the log; Lumbini can reword.
  summary: "Knowunity's recall feature ended at a score. I designed what happens next.",
  // Opening and at-a-glance row from Figma Uu1a2kCZL3M4y86CtPcmqR 285:584 and 285:597
  // (Lumbini, 2026-10-29), replacing Solo designer / 2.5-week sprint / Solo.
  facts: [
    { label: "Role", value: "UX designer" },
    { label: "Timeline", value: "2.5 weeks, September 2026" },
    { label: "Tools", value: "Figma, Claude Code, Next.js, Storybook" },
    // Status as written in Figma 285:574 (Lumbini, 2026-11-04); "Prototype" links to the live prototype.
    { label: "Status", value: "Shipped.", link: { label: "Prototype", href: "https://knowunity-sprint-one.vercel.app/entry" } },
  ],
  opening: {
    eyebrow: "Active recall for Knowunity · iOS",
    tags: ["Usability testing", "Coded prototype", "AI-native process"],
    // The hint ladder clip autoplays here, in place of the phones image and out of the key decision
    // (Lumbini, 2026-11-04). Muted, looping, poster and pause control, per the autoplay register.
    video: {
      src: `${dir}/hint-ladder-clip.mp4`,
      autoplay: true,
      poster: `${dir}/hint-ladder-clip-poster.jpg`,
      width: 1280,
      height: 720,
      description:
        "Clip from the product film: a student gives a partial answer to \"What was appeasement, and why did it fail?\", scores 65% with Hint 1 inside the verdict card, answers again, and climbs to 75% with Hint 2 as the next rung lights up.",
    },
  },
  sections: [
    // Sections follow Figma 285:574 (Lumbini, 2026-11-02; the order, problem statement and AI-native
    // placement updated 2026-11-04).
    {
      id: "hook",
      stage: "Problem",
      chapter: { number: "01", title: "Problem" },
      heading:
        "Students lacked visibility into their progress and hint usage during Speak Out Loud sessions, couldn’t tell when their responses were misheard, and had no clear guidance on what to do after completing each round.",
      blocks: [
        {
          kind: "options",
          columns: 3,
          strong: true,
          items: [
            { label: "Problem 1", body: "Students had no clear way to track their progress or recognize when their responses were misheard during Speak Out Loud sessions." },
            { label: "Problem 2", body: "Students do not know when their responses were misheard during Speak Out Loud sessions." },
            { label: "Problem 3", body: "The Summary screen names perfection and time to complete without giving a next step." },
          ],
        },
        // Figma "problem section" 203:1646 (Lumbini, 2026-10-27); copy and screens verbatim from it.
        {
          kind: "annotated",
          label: "Problem",
          text: "Knowunity’s beta shows a verdict and a hint but never what the app heard, so a student who gets “Almost there” can’t tell whether they were misheard or genuinely partial, and a fair result can feel unfair. Its summary then names perfection and time to complete without giving a next step, so the student leaves with a judgment they can neither verify nor act on.",
          screens: [
            {
              image: {
                src: `${dir}/problem-almost-there.png`,
                width: 1179,
                height: 2556,
                alt: "The beta's verdict: \"Almost there\" above a hint about historical thinking, with only a Reveal answer button. Nothing shows what the student said.",
                caption:
                  "‘Almost there’ cannot tell whether students were misheard. It also cannot help the students to know how far they are from answering rightly.",
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
              expand: true,
              width: 2400,
              height: 420,
              alt: "A five-panel storyboard with Knowie at a desk. 1, preparing for an exam. 2, using speak out loud: the key term \"Triple Entente\" with a mic prompt. 3, there is no way the student knows the next step: a hint card reads \"Think three powers. Britain, France, and one more.\" 4, a side-by-side comparison is shown. 5, a plan to improve the weaker area: \"Came naturally\", \"Worth revisiting: Triple Entente\", and \"Back tomorrow\".",
            },
          ],
        },
      ],
    },

    // Figma 286:228's band, holding the demo film (Lumbini, 2026-11-02).
    {
      id: "solution",
      stage: "Solution",
      chapter: { number: "02", title: "Solution" },
      heading:
        "Students explain concepts aloud, receive progressive hints when needed, get a reviewable speech transcript, and a personalized breakdown of their strengths and knowledge gaps, along with a targeted study plan, giving students greater control over their responses and helping them move confidently through each round.",
      blocks: [
        {
          kind: "video",
          band: true,
          video: {
            src: `${dir}/knowunity-active-recall-web.mp4`,
            poster: `${dir}/knowunity-hero-poster.jpg`,
            width: 1280,
            height: 720,
            description:
              "Product film: a student allows the mic, answers aloud, climbs two hints, reviews their take, sees 'You explained 2 of 4 without help', then retries the topic they missed.",
          },
          caption: "How the solution works.",
        },
      ],
    },

    // Overview and Users, after the solution, as in Figma 285:574 (Lumbini, 2026-11-04).
    {
      id: "context",
      stage: "Problem",
      chapter: { number: "03", title: "Context" },
      heading: "Context",
      hideHeading: true,
      blocks: [
        {
          kind: "options",
          columns: 2,
          muted: true,
          items: [
            {
              label: "Overview",
              body: "Knowunity is a study app with 30M+ downloads. Its practice tools test recognition, like multiple choice and flashcards. None of them ask a student to pull an idea from memory and say it.",
            },
            {
              label: "Users",
              body: "Secondary school students and college students before exams. Flattering feedback sends them in over-confident, and punishing hints stops them asking for help.",
            },
          ],
        },
      ],
    },

    {
      id: "approach",
      stage: "Problem",
      chapter: { number: "04", title: "Role and approach" },
      heading: "I owned the whole feature as the solo designer, from audit to coded prototype",
      blocks: [
        {
          kind: "text",
          paragraphs: ["What I owned: everything in a 2.5-week sprint with Knowunity, as the solo designer."],
        },
        {
          kind: "cards",
          look: "boxes",
          numbered: true,
          items: [
            { title: "Beta audit" },
            { title: "Figma design" },
            { title: "Coded prototype" },
            { title: "Usability testing" },
            { title: "Rebuild after the test" },
          ],
        },
      ],
    },

    {
      id: "ai-native",
      stage: "Solution",
      chapter: { number: "05", title: "AI-native process" },
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
          // The design system and documentation link, made prominent (Lumbini, 2026-11-04). It is the
          // same Storybook as the one linked in the Outcome.
          link: {
            label: "See the Design System and Documentation I created.",
            href: "https://6aa836309aea888aed9def73-dezjpygccw.chromatic.com/",
          },
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
          ],
        },
        {
          kind: "todo",
          text: "Did you also use Claude in Cowork, Figma's AI, or another tool in the research or synthesis phase? Add it here only if you did.",
        },
      ],
    },

    {
      id: "research",
      stage: "Problem",
      chapter: { number: "06", title: "Research" },
      heading: "The beta graded students on the basis of answer but students lost track of the hint ladder",
      blocks: [
        {
          kind: "cards",
          look: "boxes",
          numbered: true,
          items: [
            { title: "The beta’s grade misled.", body: "It flattered a student who guessed and punished one who used help." },
            { title: "The hint ladder was invisible.", body: "Participants lost track of where they were, and the reveal didn’t read as the last step." },
            { title: "The next action was unclear.", body: "After the answer appeared, participants didn’t know whether to retry or submit." },
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "I audited Knowunity’s beta before designing anything. Its intro promised scores “up to 20% higher on exams”. It ended with a grade and listed missed terms under a red “Needs practice”.",
          ],
        },
        {
          kind: "gallery",
          columns: 3,
          images: [
            {
              src: `${dir}/beta-take-before.png`,
              width: 1179,
              height: 2556,
              crop: 376 / 420,
              fit: "contain",
              alt: "The beta's recording ends in a tick captioned \"Tap to send\".",
              caption: "Lacking: the recording ends in a tick. The student can’t replay it or try again.",
            },
            {
              src: `${dir}/beta-thinking-before-clean.png`,
              width: 390,
              height: 844,
              crop: 376 / 420,
              fit: "contain",
              alt: "The beta's thinking state, three dots and a tick.",
              caption: "Lacking: three dots and a tick look like “sent”. The student can’t tell if the app heard them.",
            },
            {
              src: `${dir}/beta-pass-before.png`,
              width: 1179,
              height: 2556,
              crop: 376 / 420,
              fit: "contain",
              alt: "The beta's result screen, \"Amazing job! Impressive! You've mastered this content! You're on fire!\", with XP +14, Perfect 100% and a time of 1:45.",
              caption: "Lacking: praise and a “Perfect” 100%. It never says which terms the student recalled alone.",
            },
          ],
        },
        {
          kind: "lead",
          muted: true,
          text: "Beta audit. Drove three decisions: the take became a choice, the wait stopped looking like “sent”, and praise became a count.",
        },
        {
          kind: "text",
          paragraphs: [
            "Competitive analysis shows how four apps handle recall, misses, repetition and the summary. Drove the decision to show the student’s answer beside the model answer, as Anki and Quizlet do.",
          ],
        },
        // Figma's own link target, the competitive analysis table (286:229).
        {
          kind: "linkButton",
          label: "See the full competitive analysis",
          href: "https://www.figma.com/design/Uu1a2kCZL3M4y86CtPcmqR/Loombini-Claude-Portfolio?node-id=286-229",
        },
        {
          kind: "todo",
          text: "The \"Explain it to Knowie\" intro screen is removed, so the \"up to 20% higher\" line has no visual proof. Also a source and access date for each competitor claim, especially the Duolingo App Store reviews and the Quizlet \"twice\" rule.",
        },
      ],
    },

    // Block 4B: exploration.
    {
      id: "exploration",
      stage: "Solution",
      chapter: { number: "07", title: "Exploration" },
      heading: "I explored three interaction directions to increase Active Recall adoption, targeting 25% activation among students and 75% task completion among those who started.",
      blocks: [
        // Figma 286:337. Figma holds the board as a flat image; it is rebuilt here so the text is real
        // and scales with the screen. Copy is as in the image, minus its "generated by" eyebrow
        // and "A sample, not the answer" line (decisions.md, 2026-11-02).
        {
          kind: "flowBoard",
          title: "Voice recall: the loop, its states, and where it breaks",
          legend: [
            { tone: "blue", label: "Screen" },
            { tone: "purple", label: "State" },
            { tone: "red", label: "Edge case" },
            { tone: "green", label: "The payoff" },
          ],
          columns: [
            {
              title: "Getting there",
              tone: "blue",
              cards: [
                { tag: "Screen", title: "Choosing feature from AI Chat", body: "The student opened the app. This is the moment they would chose the feature." },
                { tag: "Screen", title: "Glance over material", body: "Users has the option to look through the reading materials before they activate explain out loud." },
                { tag: "State", title: "Mic permission", body: "The primer sits before the OS dialog. Designed the denied path, not only the granted one." },
              ],
            },
            {
              title: "The recall loop",
              tone: "purple",
              cards: [
                { tag: "Screen", title: "Prompt", body: "\"Explain X in your own words.\" Progress is visible. So is skip." },
                { tag: "State", title: "Idle", body: "Mic ready. Three ways out: speak, type, skip." },
                { tag: "State", title: "Recording", body: "Stopping is sending. Cancel discards the take without costing the turn." },
                { tag: "State", title: "Processing", body: "Transcribing, then judging. Under four seconds. The hardest state in the whole feature." },
                { tag: "State", title: "Result", body: "Pass, partial, or miss. Judge generously: a false \"wrong\" costs more here than anywhere else in the app." },
              ],
            },
            {
              title: "When it doesn't go clean",
              tone: "red",
              cards: [
                { tag: "Edge", title: "Partial answer", body: "Hint that nudges without giving it away. Re-attempt. Second hint. Re-attempt. Then reveal." },
                { tag: "Edge", title: "Can't speak right now", body: "Train, library, shared room. One tap to type. Same judging, same hints, no penalty." },
                { tag: "Edge", title: "Nothing usable heard", body: "Silence, or a transcript that clearly is not an answer. Re-record without losing the turn." },
                { tag: "Edge", title: "Leaves mid-session", body: "Progress saves, returning resumes. Not a drop-off until genuinely abandoned." },
              ],
            },
            {
              title: "Ending it",
              tone: "green",
              cards: [
                { tag: "Screen", title: "Summary", body: "How many they explained unaided. Hinted, revealed and skipped stay distinct from each other." },
                { tag: "Payoff", title: "A 2 columns with correct answer and answer given by you screen", body: "The felt signal of \"I actually know this now.\" If overconfidence costs nothing, this screen is flattery." },
                { tag: "Screen", title: "What happens next", body: "Continue, or re-test what they missed. Recall works through repetition over time, not one clean session." },
              ],
            },
          ],
          caption: "Task flow 4 from my Figma file.",
        },
        {
          kind: "todo",
          text: "Exploration board: Figma's image cuts off the Idle card after \"The student should\", so that sentence is left out. \"Under four seconds\" has no source: is it a target or a measurement?",
        },
      ],
    },

    // Usability test, Figma 287:213. It comes before the key decision, as in the Figma page.
    {
      id: "usability-test",
      stage: "Problem",
      chapter: { number: "08", title: "Usability test" },
      heading: "A think-aloud usability test surfaced eight problems",
      blocks: [
        {
          kind: "quote",
          look: "title",
          text: "I do not know from the reveal question that it was distinct from the other hint.",
          cite: "A participant, think-aloud usability test",
        },
        {
          kind: "screens",
          widths: [22.6, 22.6, 22.6, 22.6],
          images: [
            { src: `${dir}/usability-entry.png`, width: 804, height: 1577, alt: "The home screen: Knowie the mascot, “Evening study session, Harry?”, chips including Quiz, Summarize and Explain Out Loud, and an Ask anything field." },
            { src: `${dir}/usability-hint.png`, width: 804, height: 1991, alt: "A partial answer at 75%, marked Almost there, with Hint 2 inside the card and rungs for Hint 1, Hint 2, Hint 3 and Reveal across the top." },
            { src: `${dir}/usability-reveal.png`, width: 804, height: 1740, alt: "The reveal: the full answer in a green outlined card, the Reveal rung lit, and a mic button under “Try it yourself after reading”." },
            { src: `${dir}/usability-summary.png`, width: 804, height: 2415, alt: "Here's how it went: 6/10 recalled, with 3 hinted, 6/10 perfect and 1 missed, concepts you are strong in, concepts to review, then Revise and Try Again." },
          ],
        },
        { kind: "text", paragraphs: ["Entry point, Recall loop and summary screen."] },
        {
          kind: "details",
          summary: "All eight things the test surfaced",
          blocks: [
            {
              kind: "findings",
              items: [
            "The reveal screen lacked hierarchy. Participants didn’t know it was the final step.",
            "The next action was unclear: retry, continue or submit, especially after the reveal.",
            "Hints needed a visible progression, so a student knows how much help they’ve had and what comes next.",
            "Reviewing and retrying were mixed together. The mic should stay off while the answer shows, until the student chooses to retry.",
            "Participants wanted to see how much was right: a progress circle or percentage, on the verdict and the final result.",
            "The summary should say what to do next, per topic, not only list concepts to review.",
            "Participants wanted to compare with other students’ answers, to find a better way to explain it.",
            "Half-remembered concepts should come back, asked a new way, like Duolingo, with a note on why.",
              ],
            },
          ],
        },
        {
          kind: "todo",
          text: "How many participants, when, and how they were recruited. The page names the test but gives no sample size.",
        },
      ],
    },

    // Block 4C: one key decision. Figma 286:368.
    {
      id: "key-decision",
      stage: "Solution",
      chapter: { number: "09", title: "Key decision" },
      heading: "I rebuilt the hint ladder so every rung looks like the step it is",
      blocks: [
        {
          kind: "options",
          items: [
            { label: "Option A", title: "Three identical hint dots", body: "The reveal still offers the mic." },
            {
              label: "Option B (chosen)",
              title: "Named rungs: Hint 1, Hint 2, Hint 3, Reveal",
              bullets: ["The current rung lights up", "Hint 3 gets a lightbulb and a gold box", "Hints appear inside the verdict card"],
            },
          ],
        },
        {
          kind: "screens",
          widths: [38, 38],
          gap: 4.05,
          images: [
            { src: `${dir}/option-a.png`, width: 900, height: 2032, alt: "Option A: the answer revealed under “Getting there.”, with “Try it yourself after reading”, Next question, and the mic still offered with Tap to answer." },
            { src: `${dir}/option-b.png`, width: 900, height: 1922, alt: "Option B: named rungs for Hint 1, Hint 2, Hint 3 and Reveal, with Reveal lit, the answer in a green outlined card, and a Try again button." },
          ],
          caption: "Participants lost track of the ladder in Option A. One said: “I do not know from the reveal question that it was distinct from the other hint.”",
        },
      ],
    },

    // Block 4D: final designs. Other decisions fold into these captions.
    {
      id: "final-designs",
      stage: "Solution",
      chapter: { number: "10", title: "Final designs" },
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


    // Outcome and Reflection as in Figma 287:334 and 287:337 (Lumbini, 2026-11-04): 24px headings, the
    // reflection in three short parts under one eyebrow.
    {
      id: "outcome",
      stage: "Impact",
      chapter: { number: "11", title: "Outcome" },
      heading: "Placed where students already speak, with success defined up front",
      smallHeading: true,
      lede: [
        "The entry sits in AI Chat, where 15.2% of active users already send voice messages. Success criteria agreed with Knowunity: 25% of students who see the feature start it, and 70% of those finish.",
      ],
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "22", label: "Recall states in the coded prototype" },
            { value: "32", label: "Components in the Storybook library" },
            { value: "11", label: "Critique rounds by critic agents" },
          ],
          source: "I placed the entry in AI Chat, where 15.2% of active users already send voice messages.",
        },
      ],
    },

    {
      id: "reflection",
      stage: "Impact",
      chapter: { number: "12", title: "Reflection" },
      heading: "Reflection",
      eyebrowOnly: true,
      blocks: [
        {
          kind: "text",
          tight: true,
          heading: "The two targets pulled against each other, so I chose which one each screen served",
          paragraphs: [
            "A choice that helps students start can hurt them finish, and the reverse.",
            "Type Instead served activation. I kept it on the idle and hint screens, so a student who cannot speak aloud has a way to start.",
            "The beta’s exit sheet lists “I can’t speak out loud right now” and “I feel awkward talking to the app” as reasons to stop. Those are answer options, not counts, so I treat them as a risk, not a measurement.",
            "The four-round cap served completion. With generous judging, a student who struggles reaches the answer without feeling punished.",
          ],
        },
        {
          kind: "text",
          tight: true,
          heading: "Students check their own recording first, and the transcript stays read-only",
          paragraphs: [
            "Before they submit, students replay their answer and re-record if it sounds wrong. After they submit, Knowie shows what it heard while it evaluates.",
            "I made the transcript read-only. The cost is that fixing one wrong word means re-recording the whole answer.",
          ],
        },
        {
          kind: "text",
          tight: true,
          heading: "What I would test first: whether students speak at all",
          paragraphs: [
            "I walked the flow as two students: a 16-year-old comfortable speaking aloud, and one self-conscious in a shared space. A walkthrough tests my assumptions, not students.",
            "A pilot would measure the start rate against the 25% target, with the share who switch to Type Instead beside it. It would also check whether students read the percentage as a grade. The ring shows how much of the model answer they covered.",
          ],
        },
      ],
    },
  ],
};
