// Bloom & Heal, rebuilt 2026-10-28 from Lumbini's Figma frame 211:1154 "bloom and heal case study",
// copy verbatim, with Carmen's Pilgrimz scroll effects (pinned device, sections sliding up, banner
// zoom). Visual boards are 2x exports of the Figma nodes in public/case-studies/bloom/v2. On the
// SWOT board the app names under the four logos were blanked, as the logos overlap them in Figma.
// The brand and colour boards carry their captions inside the export, so no HTML caption repeats them.
// Recordings: the watch steps use Lumbini's files from ~/Desktop/Bloom Case Study/iWatch videos;
// the phone steps use the matching Framer clips already in the repo. The previous
// version is kept in git history.
import type { CaseStudy, Img, Video } from "./types";

const dir = "/case-studies/bloom";
const v2 = `${dir}/v2`;

const img = (file: string, width: number, height: number, alt: string, zoom?: boolean): Img => ({
  src: `${v2}/${file}`,
  width,
  height,
  alt,
  zoom,
});

const clip = (file: string, width: number, height: number, description: string): Video => ({
  src: `${dir}/${file}.mp4`,
  poster: `${dir}/${file}-poster.jpg`,
  width,
  height,
  description,
});

export const bloom: CaseStudy = {
  slug: "bloom-and-heal",
  title: "A stress intervention system through Apple Watch that catches stress and intervenes before you do",
  summary:
    "Designing a mobile and watch experience that helps users recover from emotional overwhelm. They can use their watch or deliberately use their phone to stay in control.",
  layout: "full",
  motion: "carmen",
  theme: "bloom",
  opening: {
    eyebrow: "Bloom & Heal · iOS and Apple Watch",
    tags: ["UX research", "Cross platform design", "Brand design"],
    image: img(
      "hero.png",
      1385,
      1472,
      "Bloom & Heal screens: the phone home \"Welcome, Julie\" with a mood picker and an Apple Watch setup prompt, a quick reset card (Breathe, Walk, Talk to Daisy), a therapist card for Dr. Laura Smith, and an AI chat reply.",
    ),
  },
  facts: [
    { label: "Role", value: "Sole designer" },
    { label: "Timeline", value: "May 2026" },
    { label: "Platform", value: "iOS and Apple Watch" },
    { label: "Status", value: "Academic Project" },
  ],
  sections: [
    {
      id: "overview",
      nav: "Overview",
      stage: "Problem",
      label: "Overview",
      heading: "What if your watch could catch a stress spike before you did?",
      blocks: [
        {
          kind: "text",
          look: "lead",
          paragraphs: [
            "Bloom & Heal is designed to read heart rate variability (HRV) from Apple Watch. HRV is the small variation in time between heartbeats, and it usually drops when the body is under stress. When HRV falls below the user’s own average, the app suggests a short physical reset. If that is not enough, it offers an AI chat, then a therapist booking. Chat and booking move to the phone, where testing participants expected them.",
          ],
        },
        {
          kind: "wide",
          bare: true,
          images: [
            img(
              "problem.jpg",
              2368,
              1182,
              "A person sits with their head in their hands, overlaid with the line \"When people are overwhelmed they do not know what to do\".",
              true,
            ),
          ],
        },
      ],
    },
    {
      id: "problem",
      nav: "Problem",
      stage: "Problem",
      label: "Problem",
      heading: "When people are overwhelmed they do not know what to do",
      blocks: [
        {
          kind: "text",
          look: "lead",
          paragraphs: [
            "People experiencing emotional overwhelm lose the ability to think straight. So they default to whatever demands no decision: doomscrolling, bed rotting, changing environment. The relief is real, however the feeling returns, the pattern repeats, and it affects people's emotional health.",
          ],
        },
        {
          kind: "text",
          label: "Discovery",
          paragraphs: [
            "I studied four apps that lead this space — Finch, Headspace, Calm, and Flourish — to understand when people reach for mental health tools, what they return to, and where these apps quietly lose them.",
            "Each competitor has staked out a distinct lane — Finch for daily-task support during low mood, Calm/Headspace for focus and mindfulness, Flourish for CBT-based reflective chat — but none of them address the acute, physiologically-triggered overwhelm moment that Bloom & Heal targets.",
          ],
        },
        {
          kind: "cards",
          look: "outline",
          items: [
            { title: "More features didn't mean more support.", body: "Flourish and Calm can feel heavy in the exact moments that call for less." },
            { title: "Price caps who gets helped", body: "Calm, Headspace, and Flourish paywall the support that matters most." },
            {
              title: "Motivation fades faster than the product expects",
              body: "Finch and Flourish onboard well, but engagement thins over time — a retention gap the whole category struggles with.",
            },
          ],
        },
        {
          kind: "text",
          heading: "How this shaped my research",
          paragraphs: [
            "The SWOT gave me a working vocabulary before I spoke to anyone. Instead of asking \"how do you manage stress,\" I could test sharper hypotheses — When do you open an app like this, and when do you close it without using it? In a moment of overwhelm, what would \"help\" actually look like?",
            "That's what made the interviews productive. I wasn't starting from zero — I was pressure-testing what I'd seen.",
          ],
        },
        {
          kind: "wide",
          bare: true,
          images: [
            img(
              "swot-logos.png",
              2368,
              1410,
              "A matrix of user needs against Finch, Headspace, Calm and Flourish: daily habit and mood tracking, guided meditation and mindfulness, sleep support, CBT based reflection, community and peer support, and AI-powered personalization. The last row, acute in-the-moment overwhelm, is empty for all four apps.",
            ),
          ],
        },
      ],
    },
    {
      id: "research",
      nav: "Research",
      stage: "Problem",
      label: "Research",
      heading: "What people do, what apps offer, and where the two diverge",
      blocks: [
        {
          kind: "wide",
          bare: true,
          images: [img("metrics.png", 2368, 800, "Three interview quotes in speech bubbles above each participant's photo, about wanting a therapist in their pocket, voicing a feeling then taking a walk, and procrastinating on big tasks.")],
        },
        {
          kind: "tiles",
          look: "sky",
          items: [
            "People know they're overwhelmed but don't know what to do",
            "Suppressed emotions does not disappear-it resurfaces harder",
            "Human connection only helps when the right person shows up",
            "Coping styles are too different to serve with a single solution",
          ],
        },
      ],
    },
    {
      id: "solution",
      nav: "Solution",
      stage: "Solution",
      label: "Solution",
      heading: "Watch for quick resets, phone for chat and booking",
      blocks: [
        {
          kind: "text",
          look: "lead",
          paragraphs: [
            "Bloom & Heal is designed to catch the stress cycle earlier. The Apple Watch flags a drop in HRV, then guides the user through a short reset on the device that fits the moment. Whether it reduces stress was not tested.",
          ],
        },
        {
          kind: "wide",
          bare: true,
          images: [
            // Lumbini's export, ~/Desktop/Bloom and Heal case study/iwatch visuals.png (2026-10-29).
            img(
              "iwatch-visuals.png",
              2368,
              957,
              "An Apple Watch on a wrist asking \"How are you feeling now?\", beside watch screens for a reset timer, an offer to talk to a therapist, and the therapist list. Overlay: \"Apple Watch tracks HRV and sends a notification when it drops, prompting a short coping exercise to reset\".",
              true,
            ),
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "I designed the system which will help people reset in a busy day while the watch nudge them to complete tasks they pre-selected in the onboarding phase the mobile app is saved to complete tasks like AI-chat and booking a therapist.",
          ],
        },
        {
          kind: "pinned",
          device: "watch",
          steps: [
            {
              title: "Detect and interrupt",
              body: "The watch doesn't just flag a low-HRV moment — it tells you why it's happening. Reading signals like light sleep, it explains what your body is reacting to and offers a quick pause, so the interruption feels like care, not an alarm.",
              video: clip("watch-hrv", 596, 914, "On Apple Watch, a low HRV notification explains what the body is reacting to and offers a quick pause."),
            },
            {
              title: "Personalized coping options",
              body: "Personalized coping options are selected during onboarding and provided the users with options they rely most in a moment when they cannot think.",
              video: clip("watch-personalized", 670, 898, "On Apple Watch: \"It seems you are still not feeling well. Do you wanna complete another reset task?\", with options such as Call a friend and Walking."),
            },
            {
              title: "Ability to access therapist",
              body: "The watch hands off the therapist booking process to the phone, carrying user context with it.",
              video: clip("watch-therapist", 670, 898, "On Apple Watch, Daisy says \"It's been a tough stretch, Julie. Want to talk to a therapist? You have sessions available.\""),
            },
          ],
        },
        {
          kind: "video",
          video: clip(
            "bloom-heal-demo",
            1280,
            720,
            "Demo film, 40 seconds, with a soft soundtrack. An Apple Watch shows a low HRV notification and the user taps Continue to start a guided reset. The user then picks up their iPhone, opens Bloom & Heal from the lock screen, chooses a therapist, and books a session.",
          ),
          caption: "How the system works.",
        },
        {
          kind: "cards",
          look: "rows",
          label: "Design decisions",
          heading: "Every pixel accounts for cognitive load",
          items: [
            { title: "Why Nunito Sans on phone and SF Compact on watch?" },
            { title: "Why an 8px grid?" },
            { title: "Why no celebratory animation, and what ‘confirmatory not congratulatory’ means in practice." },
          ],
        },
      ],
    },
    {
      id: "brand",
      nav: "Brand",
      stage: "Solution",
      label: "Brand",
      heading: "Calm visuals for people who are already overloaded",
      blocks: [
        {
          kind: "split",
          title: "9 of 12 participants picked this logo",
          paragraphs: [
            "I explored six logos, three script and three sans. Twelve participants chose the one that felt most welcoming. Nine picked option 3, a lowercase wordmark with a small daisy. Participants called the daisy friendly and human.",
          ],
          image: img("brand-logo.png", 1424, 870, "Six logo options for Bloom & Heal in script and sans faces; option 3, a lowercase \"bloom&heal\" wordmark with a small daisy in Nunito Sans Bold, is marked Selected."),
        },
        {
          kind: "split",
          title: "One typeface per screen size",
          paragraphs: ["The phone uses Nunito Sans. The watch uses SF Compact, Apple’s typeface for watchOS, so text matches the platform."],
          image: img("brand-type.png", 1552, 734, "Type scales side by side: phone in Nunito Sans (hero 30 bold, section title 22 bold, body 17 and 15, label 12) and watch in SF Compact (hero 32 bold, section header 15 bold, body 13, caption 11, button 13 bold)."),
        },
        {
          kind: "split",
          title: "A daisy that reassures and never celebrates",
          paragraphs: [
            "Daisy appears in the logo and the AI chat. She uses five expressions and no confetti, because a finished reset should be confirmed, not congratulated. I chose a daisy over medical symbols to keep the app from feeling clinical.",
          ],
          image: img("brand-mascot.png", 1552, 1148, "Daisy the mascot in five expressions: standby, thinking, approving, amazed and questioning."),
        },
        {
          kind: "text",
          label: "Color",
          heading: "Color with psychology and accessibility applied",
          paragraphs: [],
        },
        {
          kind: "wide",
          bare: true,
          images: [
            img("brand-color.png", 2368, 1872, "The Bloom & Heal colour system: primary blue #4473B3, error #EF4444 and green #02AA41 with their contrast ratios, neutrals, status colours and core tokens."),
          ],
        },
      ],
    },
    {
      id: "testing",
      nav: "Testing",
      stage: "Impact",
      label: "Testing",
      // Source: Lumbini's first usability test, 9 of 12 participants (confirmed 2026-10-28; was 92%).
      heading: "75% of the participants (9 of 12) in my first usability test expected to chat with an AI bot before they would talk to a therapist.",
      blocks: [
        {
          kind: "split",
          paragraphs: [
            "Many described AI as a thought partner, so they expected the same kind of support from the app. Talking to ChatGPT or similar tools had already become part of their routine when they felt upset. An in-app AI wasn't a new behavior to learn—it mapped onto something they were already doing",
          ],
          image: img("testing-watch.png", 728, 706, "Two watch screens: an AI chat start with \"Let's reflect\", \"I need inspiration\" and \"I need some perspective\", and Bloom's notes from March 23, 2026 with awareness and knowledge cards."),
        },
        {
          kind: "pinned",
          device: "phone",
          steps: [
            {
              title:
                "Though, the watch felt native for physical, background tasks like walking and breathing, but participants resisted conversing or booking on a small screen and expected a device switch.",
              video: clip("ai-chat", 523, 1080, "AI chat on the phone. A banner says Daisy noticed the user's HRV dropped, and Daisy asks what the loudest thing on their mind is right now."),
            },
            {
              title: "Users can switch device while booking therapist",
              body: "The phone gave users the space to decide: compare therapists, pick a time and confirm, without rushing.",
              video: clip("phone-booking", 556, 1080, "On the phone, the user picks a therapist from the list, chooses a date and time slot, books the appointment and sees \"Thanks, your appointment has been confirmed\" with the session details."),
            },
            {
              title: "Health tab: the week at a glance",
              body: "Users liked the Health tab because it sums up how their emotional wellbeing varied over the week.",
              video: clip("phone-health", 556, 1080, "From the home screen the user opens Health: Health Metrics shows heart rate variability with real-time watch data, then the Trends tab shows a weekly snapshot of stress level and heart rate."),
            },
            {
              title: "Profile: an app shaped around them",
              body: "A profile section lets users personalize their experience, from timer mood to coping options and notifications.",
              video: clip("phone-profile", 556, 1080, "The profile screen shows Julie Andrews's progress chart and therapist sessions, then settings for personal preferences, coping options and notification settings."),
            },
          ],
        },
      ],
    },
    {
      id: "impact",
      nav: "Impact",
      stage: "Impact",
      label: "Impact",
      heading: "What testing showed",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "9 of 10", label: "Participants expressed their intent to use this app" },
            // Lumbini (2026-10-30): 9 of 12, matching the testing section's 75% (9 of 12). Figma
            // 223:2800 still reads "9 of 10".
            { value: "9 of 12", label: "participants chose to use phone for AI chat" },
            { value: "10 out of 10", label: "participants wanted to book their therapist from a phone" },
          ],
        },
        {
          kind: "wide",
          bare: true,
          images: [img("impact.jpg", 2370, 746, "Bloom & Heal on iPhone and Apple Watch.", true)],
        },
      ],
    },
    {
      id: "reflection",
      nav: "Reflection",
      stage: "Impact",
      label: "Reflection",
      heading:
        "The biggest design lesson was that \"cross-platform\" isn't about putting every feature everywhere; it's about matching each task to the device that fits it, and making the handoff between them feel seamless.",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The open questions I'd take into the next round are validating that watch-to-phone handoff and testing whether the transparency disclosure lands as reassuring rather than alarming.",
            "I introduced a happy daisy as Bloom & Heal’s product mascot, and participants shared that seeing it made them feel good while using the app. This taught me that designing for emotionally overwhelmed users means going beyond usability to create small moments of comfort, warmth, and reassurance",
          ],
        },
      ],
    },
  ],
};
