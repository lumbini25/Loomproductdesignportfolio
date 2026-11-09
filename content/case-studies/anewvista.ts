// Structure: anewvista-decisions-log.md (2026-10-22), worksheet blocks 1 to 7. 4B is skipped (no
// wireframes exist) and there is no AI-native block. Copy: Lumbini's Framer page and the Figma file
// Ol45Bb16QNGeHbBKtXVlfC (research synthesis 169:1099, before/after 177:1038, confirmation
// 191:1465), with the log's corrections: the May 2024 baseline is 149 bookings from 832 sessions
// (17.9%), the research is credited to the team, and nothing claims a conversion result.
// Items the log marks OPEN are `todo` blocks (dev only), never guessed.
import type { CaseStudy } from "./types";

const dir = "/case-studies/anewvista";

export const anewvista: CaseStudy = {
  slug: "anewvista",
  theme: "anewvista",
  // Opening and at-a-glance row from Figma Uu1a2kCZL3M4y86CtPcmqR 275:582 and 275:595
  // (Lumbini, 2026-10-29), replacing the earlier hook, cover and Team fact.
  title: "Designing a booking flow seniors can finish without calling for help",
  summary:
    "AnewVista Community Services teaches technology to seniors in the SF Bay Area. I redesigned how users discover, book, and join a class on its website.",
  // Timeline and Result confirmed by Lumbini (2026-10-29): Sept 2024 to March 2025, and the 100% is
  // grant money, not the number of grantors. Figma 275:595 still reads "Aug 2024 to 2025" and
  // "Grantors +100%".
  // Four columns as in Figma 283:595 (Role, Timeline, Team, Result), with the confirmed values.
  facts: [
    { label: "Role", value: "UX designer" },
    { label: "Timeline", value: "Sept 2024 to March 2025" },
    { label: "Team", value: "2 UX designers (including me), 1 UX researcher, 1 developer, CEO" },
    { label: "Result", value: "Shipped. Grant money +100%, stakeholder-reported" },
  ],
  opening: {
    eyebrow: "AnewVista Community Services · Website",
    tags: ["UX research", "Accessibility", "Information architecture"],
    video: {
      // ~/Desktop/Anewvista Case study/hero video.mov, cropped to the laptop; the mask hides the
      // recording's white background so the laptop sits on the band (2026-10-29).
      src: `${dir}/hero-laptop.mp4`,
      poster: `${dir}/hero-laptop-poster.jpg`,
      mask: `${dir}/hero-laptop-mask.png`,
      width: 1320,
      height: 806,
      autoplay: true,
      description:
        "The redesigned AnewVista home page on a laptop, scrolling from the people section to How it works, four numbered steps: sign up, book a class, get your link, join the class; then the paths for retirement communities and individuals.",
    },
  },
  sections: [
    // Block 1 and 2: hook, context and challenge.
    {
      id: "context",
      stage: "Problem",
      chapter: { number: "01", title: "Context" },
      heading: "Seniors couldn't tell how to book a class, then couldn't find the Zoom link",
      blocks: [
        {
          kind: "todo",
          text: "Title: the log asks for an outcome-led title for you to approve. Hero: the sign-up flow video isn't in the folder yet (only the booking-flow video is). It needs a poster, an autoplay decision and a size budget at 390.",
        },
        {
          // Three outlined cards in a row, as in Figma 284:187.
          kind: "cards",
          look: "boxes",
          items: [
            {
              title: "Situation",
              body: "AnewVista Community Services is a nonprofit that runs free online and in-person tech classes for seniors. Its main goal is to get people to book a class, but class videos sat buried in the blog, and some members had free Premium without knowing it.",
            },
            { title: "Users", body: "Seniors, most often aged 70 and over, according to the team's accessibility survey (n=19)." },
            {
              title: "Core problem",
              body: "The landing page did not show users how to book a class, and after booking they could not find the Zoom link.",
            },
          ],
        },
        {
          kind: "todo",
          text: "\"55 to 92\" is removed: the slide has no source for it, and Google Analytics can't supply it. Send the source (interviews?) if it should come back. The same range was on the Home hero line, now \"older adults\".",
        },
        {
          kind: "text",
          paragraphs: [
            "Google Analytics backs the booking problem: in May 2024, 149 of 832 sessions ended in a booking, and 56.4% of sessions bounced. The Zoom link problem is stakeholder-reported: support calls rose after people booked.",
          ],
        },
        {
          // ~/Desktop/Anewvista Case study/Navigating a New Class Booking.png, after the problem
          // statement as on Carmen's Learn.xyz (Lumbini, 2026-10-29). The screen in it is not the
          // shipped AnewVista interface, so the caption says it is an illustration.
          kind: "banner",
          image: {
            src: `${dir}/navigating-booking.jpg`,
            width: 1672,
            height: 941,
            alt: "An older woman at her desk, chin in hand, reading a class booking confirmation on her computer screen.",
          },
          caption: "Illustration: a senior checking a class she has just booked. The screen is not the shipped interface.",
        },
      ],
    },

    // Block 3: role and approach.
    {
      id: "approach",
      stage: "Problem",
      chapter: { number: "02", title: "Role and approach" },
      heading: "I designed the landing page and booking flow, and set the accessibility standards",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "**What I owned:** the landing page and booking flow design, and the accessibility standards: 16px minimum text, 20px body text, 44px touch targets, 4.5:1 contrast and WCAG 2.1 AA. The UX researcher led the research; I designed from the team's findings.",
          ],
        },
        {
          kind: "cards",
          look: "boxes",
          heading: "The journey",
          numbered: true,
          numberInline: true,
          items: [
            { title: "Research synthesis.", body: "Data from analytics and two surveys, and a persona from a user interview." },
            { title: "Design decisions.", body: "Four decisions, each tied to a finding." },
            { title: "Final design.", body: "One flow from the landing page to the Zoom link." },
            { title: "Impact.", body: "What the stakeholder reported, and what I can and can't credit to the design." },
            { title: "Lessons learned.", body: "One thing I would change about readable type." },
          ],
        },
        {
          kind: "todo",
          text: "Who made the persona: the UX researcher or you? The journey strip says \"a persona from a user interview\" without a name.",
        },
      ],
    },

    // Block 4A: research.
    {
      id: "research",
      stage: "Problem",
      chapter: { number: "03", title: "Research" },
      label: "Research synthesis",
      heading: "First-time website visitors did not understand how to book classes",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The team triangulated website analytics, an annual satisfaction survey (n=71) and an accessibility survey of mostly 70+ members (n=19), to decide what the redesign had to fix first.",
          ],
        },
        {
          kind: "cards",
          look: "boxes",
          heading: "What we learned",
          numbered: true,
          numberInline: true,
          items: [
            { title: "First-time visitors did not understand how to book classes." },
            { title: "Mostly 70+ members hit the same wall: finding things." },
            { title: "Lead the redesign with navigation, readable type and clearer instructions, before adding features." },
          ],
        },
        {
          kind: "bars",
          title: "Bounce rate rose from 45.6% to 56.4%, January to May 2024",
          unit: "%",
          items: [
            { label: "Jan", value: 45.6 },
            { label: "Feb", value: 49.1 },
            { label: "Mar", value: 51.8 },
            { label: "Apr", value: 50.1 },
            { label: "May", value: 56.4 },
          ],
          // Colours and highlights from Lumbini's "bounce rate chart.png" (2026-10-29).
          highlight: ["Jan", "May"],
          source:
            "Bounce rate, % of sessions. Google Analytics, AnewVista site. Sessions peaked in March (1,136), but bounce rose overall. In May, 149 of 832 sessions ended in a booking (17.9%).",
        },
        {
          kind: "todo",
          text: "The slide's dashed \"46% average for B2C sites\" line is left out: it has no source. Send one to bring it back.",
        },
        {
          kind: "panel",
          columns: [
            {
              title: "Accessibility survey (n=19)",
              items: [
                "70+ is the most common age group",
                "42% use mobile at least monthly",
                "50% visit weekly or more",
                "Top challenges: unclear navigation, small font size, complicated instructions",
                "Hardest to find: membership status, class videos, tech support, class summaries",
              ],
            },
            {
              title: "Where the sources converged",
              items: [
                "Analytics: bounce rate reached 56.4% in May",
                "Annual survey (n=71): high satisfaction, but from members willing to answer a survey",
                "Accessibility survey (n=19): unclear navigation named as the main challenge",
              ],
            },
          ],
          caption:
            "Small, self-selected samples: treat survey percentages as directional, not definitive. Drove the decision to fix navigation, type size and instructions first.",
        },
        {
          kind: "quote",
          // A participant's words, set as Knowunity's participant quote (Lumbini, 2026-11-09).
          look: "title",
          text: "Starting out is difficult for those who are just beginning and not using technology regularly.",
          cite: "Long-time member, survey response",
        },
        {
          kind: "panel",
          columns: [
            {
              title: "Persona, based on a user interview",
              items: [
                "A retired software quality engineer in his late 80s, in the Bay Area",
                "Uses the website regularly and loves learning new technology",
              ],
            },
            {
              title: "Challenges",
              items: [
                "Weak central vision after surgeries",
                "Can't use a mobile phone except for calls; small buttons are hard to press",
                "Uses a 27-inch monitor, a magnifying glass, 120% zoom and a control wheel to enlarge content",
              ],
            },
            {
              title: "Motivations",
              items: [
                "Understand the instructions to sign up and register for classes",
                "Read the site without the magnifying glass",
              ],
            },
          ],
          caption:
            "His barrier was readability and clear instructions, not motivation. Drove decisions 1 and 2, and the move to 20px body text.",
        },
        {
          // ~/Desktop/Anewvista Case study/persona quote.png, after the persona as in Figma 303:874
          // (Lumbini, 2026-10-29: "use it"). It is an Unsplash+ stock photo with the watermark
          // visible; Lumbini chose to use it. The quote is from the user interview and usability test.
          // TODO: an Unsplash+ licence before launch.
          kind: "wide",
          bare: true,
          images: [
            {
              src: `${dir}/persona-quote.jpg`,
              width: 2368,
              height: 964,
              alt: "An older man with glasses at a laptop in a class, beside the quote: “The texts in the website is so too small that I have to use a magnifying glass to read the content.”",
            },
          ],
        },
        {
          kind: "todo",
          text: "Persona: anonymized (no name, no city, no employer) because he is a real interviewee. Confirm whether he consented to be named. The photo is Unsplash+ stock with its watermark; license it before launch. Source of the quote on the photo: confirm it is from the interview.",
        },
      ],
    },

    // Block 4C: four design decisions (the worksheet caps at three; four is Lumbini's choice).
    // Figma 284:321: a chapter heading, then one row per decision, text beside its visual.
    {
      id: "design-decisions",
      stage: "Solution",
      chapter: { number: "04", title: "Design decisions" },
      heading: "Four decisions, each tied to a finding",
      blocks: [],
    },
    {
      id: "decision-1",
      stage: "Solution",
      label: "Decision 1",
      aside: true,
      heading: "Fewer competing actions, a clearer path to register",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "On the class page, a feedback request, a survey and a QR code competed with Register, and several button styles hid the main action. I made one clear primary action per screen and added a four-step guide to joining a class.",
          ],
        },
        {
          kind: "wide",
          images: [
            {
              // Lumbini's export of Figma Ol45Bb16QNGeHbBKtXVlfC 191:2206, outer margins trimmed and
              // the arrow moved up 59px to the centre of the two screenshots (2026-10-29).
              src: `${dir}/decision-1-class-page.png`,
              width: 2412,
              height: 1636,
              alt: "Fewer competing actions, a clearer path to register. Before: the Free Tech Classes page, where a feedback request, QR code and Start Survey button compete with Register, and several button styles mix. After: a four-step guide to joining an online class above class cards with one consistent primary button.",
            },
          ],
        },
        {
          kind: "text",
          paragraphs: ["**Trade-off.** Removing the feedback and survey block moves it off the top of the page.", "**Evidence.** Unclear navigation was the top challenge in the accessibility survey (n=19, directional)."],
        },
        { kind: "statement", look: "compact", label: "Why it matters", text: "A hesitant senior sees one thing to do." },
      ],
    },
    {
      id: "decision-2",
      stage: "Solution",
      label: "Decision 2",
      aside: true,
      heading: "Four steps replace a wall of text and a video",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The landing page explained booking in a text-heavy \"How does this work?\" list next to a YouTube video. I replaced both with four numbered step cards: sign up, book a class, get your link, join the class.",
          ],
        },
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/decision-2-landing-steps.png`,
              width: 2400,
              height: 942,
              alt: "Before: a \"How does this work?\" text list beside an embedded YouTube video. After: four numbered step cards, Sign up, Book a class, Get your link, and Join the class.",
            },
          ],
        },
        {
          kind: "text",
          paragraphs: ["**Trade-off.** The steps take more vertical space, so the hero copy is shorter.", "**Evidence.** Complicated instructions were a top challenge in the accessibility survey (n=19, directional)."],
        },
        { kind: "statement", look: "compact", label: "Why it matters", text: "Seniors learn how to book without watching a video." },
        {
          kind: "todo",
          text: "Your Figma caption says a usability test showed users never watched the video. The page never mentions a usability test: confirm it happened, who ran it and the sample size before that line goes in.",
        },
      ],
    },
    {
      id: "decision-3",
      stage: "Solution",
      label: "Decision 3",
      aside: true,
      heading: "A shorter sign-up that also identifies who needs Premium",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The old sign-up stacked nine fields and two consents in a grey box with small labels. I cut the required fields, added a plain heading and a friendly photo, and asked whether the member is affiliated with a center.",
          ],
        },
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/decision-3-sign-up.png`,
              width: 2400,
              height: 1343,
              alt: "Before: a long grey sign-up form with nine stacked fields and two consents. After: a shorter sign-up form beside a photo of seniors, with an \"Affiliated with a center?\" question.",
            },
          ],
        },
        {
          kind: "text",
          paragraphs: ["**Trade-off.** One extra field, but fewer required fields overall and clearer labels.", "**Evidence.** Membership status was among the hardest things to find in the accessibility survey (n=19, directional)."],
        },
        {
          kind: "statement",
          look: "compact",
          label: "Why it matters",
          text: "Independent members see Premium at the right moment. The stakeholder found that some members had free Premium without knowing it.",
        },
        {
          kind: "todo",
          text: "The After mock is headed \"Sign In to Anew Vista\" over a sign-up form. Change it to sign up in Figma and I'll re-export the board.",
        },
      ],
    },
    {
      id: "decision-4",
      stage: "Solution",
      label: "Decision 4",
      aside: true,
      heading: "A confirmation page that says what happens next and where the Zoom link will appear",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "No confirmation step existed before, and booking included a payment step even though classes are free. People did not know the Zoom link was emailed, and support calls rose (stakeholder-reported).",
            "The new confirmation page shows the booking receipt and a \"What happens next\" timeline. The Zoom link and passcode appear on this page 15 minutes before class and are also emailed. \"No email yet?\" offers to send it again, use a different email, or call.",
          ],
        },
        {
          kind: "wide",
          images: [
            {
              src: `${dir}/decision-4-confirmation.png`,
              width: 1512,
              height: 1340,
              alt: "The confirmation page: \"Your class booking is Confirmed!\", a booking receipt with date, time, place and language, a Put it on my Calendar button, a \"What happens next\" timeline, a Zoom link area that fills in 15 minutes before class, and a \"No email yet?\" box with Send it again and Use a different email.",
            },
          ],
          caption: "There is no before screen: no confirmation page existed.",
        },
        {
          kind: "statement",
          look: "compact",
          label: "Why it matters",
          text: "Fewer support calls, as reported by the stakeholder, with no count. It is also where the whole flow's booking intent lands.",
        },
      ],
    },

    // Block 5: outcome and impact.
    {
      id: "impact",
      stage: "Impact",
      chapter: { number: "05", title: "Impact" },
      // Figma 284:332 wording: says who reported it.
      heading: "The stakeholder reported grantor funding up 100% for 2024",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "**Stakeholder-reported, not measured by me.** The stakeholder informed that they have seen a 100% increase in the amount of money from their grantors for the year 2024. The redesign shipped.",
            "I credit two parts of the design: the landing page, and replacing the previous YouTube video placement so users understand how class booking works. I can't credit the funding increase to the design alone.",
            "The booking flow was designed to raise the share of visits that end in a booking, from the May 2024 baseline of 17.9% (149 of 832 sessions, Google Analytics). This is unmeasured: I have no data from after launch.",
          ],
        },
        {
          kind: "todo",
          text: "The Figma impact wall's 94%, 97% and 85% are not used: they look like organization stats, not results. Send their source to use any.",
        },
      ],
    },

    // Block 6: reflection, one sentence.
    {
      id: "reflection",
      stage: "Impact",
      chapter: { number: "06", title: "Reflection" },
      heading: "I learned that a 16px base for body text is not legible for users with limited vision, so I scaled it to 20px.",
      blocks: [],
    },

    // Block 4D main slot, at the bottom of the case study (Lumbini, Oct 22).
    {
      id: "final-design",
      stage: "Impact",
      chapter: { number: "07", title: "Final design" },
      heading: "From the landing page to the Zoom link, in one flow",
      blocks: [
        {
          // Edited from ~/Desktop/Anewvista Case study/Class booking flow video.mov.
          kind: "video",
          video: {
            src: `${dir}/class-booking-flow.mp4`,
            autoplay: true,
            poster: `${dir}/class-booking-flow-poster.jpg`,
            width: 1600,
            height: 900,
            description:
              "Walkthrough of the redesigned booking flow in five labelled steps. 1: the home page lists four steps, book, check email, check calendar, join. 2: the student picks Shop Securely Online and presses Confirm. 3: a three-step tracker, and Book on the 10:30 AM time. 4: a review screen with date, time, teacher and cost, then Register. 5: the confirmation page explains what happens next and where the Zoom link will appear. It ends on the goal: before the redesign, 149 of 832 sessions ended in a booking (17.9%, Google Analytics, May 2024), not measured after launch.",
          },
          caption: "The final flow, from the home page to the Zoom link, in five steps.",
        },
        {
          // The video's five labelled steps as cards, as in Figma 284:355.
          kind: "cards",
          look: "boxes",
          label: "Step",
          items: [
            { title: "The home page lists four steps: book, check email, check calendar, join." },
            { title: "Pick Shop Securely Online and press Confirm." },
            { title: "A three-step tracker, then book the 10:30 AM time." },
            { title: "A review screen with date, time, teacher and cost, then Register." },
            { title: "The confirmation page explains what happens next and where the Zoom link will appear." },
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "Before the redesign, 149 of 832 sessions ended in a booking (17.9%, Google Analytics, May 2024). Not measured after launch.",
          ],
        },
        {
          kind: "todo",
          text: "Supporting final screens (new landing page, sign-up): send the Figma nodes you want here.",
        },
      ],
    },
  ],
};
