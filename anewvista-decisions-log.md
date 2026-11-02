# Anewvista (ANVCS) case study: layout decisions log

Last updated: 2026-10-22. Source: Q&A with Lumbini against `case-study-worksheet.docx`, plus the Figma file "Anewvista-Blooket-portfolio-Redesign-DL" (fileKey Ol45Bb16QNGeHbBKtXVlfC).
Live page being reworked: `/work/anewvista` (localhost:3001). Page ordering and spacing rules follow `knowunity-decisions-log.md` (same worksheet blocks, same motion plan and tokens).
Constraints: `platform-constraints.md` (light mode, 1440 / 834 / 390, WCAG 2.1 AA, 16px body, 44px targets, 4.5:1, every number sourced). Voice: no em dashes.

Rule for Claude Code: follow the worksheet block order. Do not rewrite claims. Anything marked OPEN needs Lumbini's input before it is built. Never leave bracketed placeholders on the page.

## Block 1: The hook

- Title: outcome-led, replacing "Designing for AnewVista's most underserved users" (brief rule: title states what changed for the user). OPEN: Lumbini to approve a new title.
- Hook (draft): "In May 2024, more than 8 in 10 visits to AnewVista ended without a booking. I redesigned the path from landing page to the Zoom link."
  - Basis: 149 bookings from 832 sessions in May 2024 (Google Analytics) = 17.9%, so 82% of sessions ended without a booking. Lumbini confirmed 17.9% is correct.
  - Say "visits" or "sessions", not "visitors" or "users".
  - The page's old "8.77% booking conversion" and "9 in 10 left without booking" are WRONG. Replace every instance. Check the 3-stat block on the current page.
- Details row: Role, Timeline, Tools, Team (worksheet row). Organization and Users move into Context.
  - Role: UX designer (per current page)
  - Timeline: March 2025 (confirmed). OPEN: the brief notes the home card says August 2025. Make the home card match.
  - Tools: NOT SHOWN for this case study (Lumbini, Oct 22). The row is Role, Timeline, Team. Build it from the per-case-study data list.
  - Team (Lumbini, Oct 22): 2 UX designers, 1 UX researcher, 1 developer, CEO. This replaces the page's old "2 UX designers, 1 designer, 1 PM and 1 developer". Lumbini is one of the 2 UX designers. The UX researcher is the person who did the research, which fits the credit rule in Block 3.
- Hero: the sign-up flow video, in the Anewvista case study folder on Lumbini's Mac. Not yet seen by Claude.
  - OPEN: needs the file, a poster frame, the autoplay decision (add a row to the autoplay register) and a size budget at 390px.

## Block 2: Context and challenge

- Three short labeled blocks: Situation, Users, Core problem. Then a context image with caption.
- Situation: AnewVista Community Services is a nonprofit that provides free online and in-person tech classes to seniors. Primary business goal: drive users to book a class. Secondary: the video buttons were buried in the blog page, limiting reach. Some community members get free premium but did not know it. Keep to 2 to 3 sentences.
- Users: seniors, most commonly 70+. Source is the accessibility survey (n=19), NOT Google Analytics. The page's "adults aged 55 to 92, majority over 70, half weekly" has no source on the Figma slide (slide shows 70+ most common age, 42% use mobile at least monthly, 50% visit weekly or more). OPEN: either source "55 to 92" or remove it. As far as I know GA age brackets stop at 65+, so GA cannot be the source.
- Core problem (Lumbini's words, bound as one statement): the landing page does not guide users how to book a class, and after booking they cannot locate the Zoom link.
  - Evidence: booking path is backed by GA (May 2024: 832 sessions, 149 bookings, 56.4% bounce) and survey. The Zoom link problem comes from a stakeholder interview and a rise in support call volume. Label it "stakeholder-reported", with no count claimed.
- Membership eligibility (free premium buried in About Us, no affiliation field in registration) is NOT in the core problem. It stays as a research finding in 4A and as decision 3.
- Context image: the research synthesis slide from Figma node 169:1099 (see 4A). Caption must say what it shows and what decision it drove.

## Block 3: Role and approach

- What I owned (Lumbini selected): landing page and booking flow design; accessibility standards (16px minimum, 20px body, 44px targets, 4.5:1, WCAG 2.1 AA). She did NOT claim research, GA analysis or the content inventory.
  - The page currently says "I conducted a content inventory" and "I had access to two primary data sources." Reword to credit the team ("the team's research showed...").
  - The Figma slide says "I triangulated" the data. Lumbini confirmed the team did it and she used the findings. Reword the slide and the page to "The team triangulated...", or credit the slide to the team.
- Process: the four principles (first attempt, one question per page, eliminate the workaround, guide new users) are replaced by design decisions, Pilgrimz style.
  - Pilgrimz reference (carmen-elena.space/work/pilgrimz): numbered decisions with a small label above a headline that states the decision; 1 to 3 sentences of rationale tied to the business; a visual; do/don't or before/after pairs; Outcomes as bold-titled single-sentence cards; a three-phase Journey strip at the end.
  - Journey strip (Lumbini, Oct 22), five phases in this order, one short line each, no weeks: 1. Research synthesis (with data visuals and persona creation), 2. Design decisions, 3. Final design, 4. Impact, 5. Lessons learned. This replaces the three-phase idea.
  - OPEN: "persona creation" is new. No persona exists in the files seen so far. Lumbini to share the persona (and who made it: the UX researcher or her) or drop it from phase 1.
  - After EACH design decision, add a "Why it matters" line (Lumbini, Oct 22). Wording must separate what is measured from what is expected. See the claim rule in 4C.

## Block 4: The work

### 4A Research
- Artifact: research synthesis slide, Figma node 169:1099. Contains: bounce rate bar chart Jan to May 2024 (45.6%, 49.1%, 51.8%, 50.1%, 56.4%), the 46% B2C benchmark line, 70+ survey stats, "where the sources converged", and survey recommendations ranked Critical (4), Serious (3), Minor (4). Footer: "Small, self-selected samples: treat survey percentages as directional, not definitive." Keep that footer on the page.
- Sources named on the slide: Google Analytics Jan to May 2024; AnewVista Annual Survey (n=71); Accessibility Survey (n=19).
- Short "what did you learn": first-time visitors did not understand how to book classes; mostly 70+ members hit the same wall finding things; lead the redesign with navigation, readable type and clearer instructions before adding features.
- OPEN: source for the 46% B2C average benchmark. Without one, remove the dashed line.
- Check: the slide says "sessions peaked in March (1,136)" and "May: 832 sessions, 149 bookings". Lumbini confirmed 149 of 832 = 17.9% is correct.
- Second artifact: accessibility survey results (n=19), as a card or crop. Keep the "directional" label.

- Persona (Lumbini supplied Oct 22, image file, goes in phase 1 of the Journey and in 4A as a third artifact): a retired software quality engineer in his late 80s in the Bay Area, regular user of the website, loves learning new technology. Challenges: central vision weak after surgeries; cannot use a mobile phone except for calls and struggles to press buttons on small screens; uses a 27" monitor and a magnifying glass; zooms to 120% and uses a control wheel to enlarge content. Motivations: understand the instructions to sign up and register for classes; read the site without the magnifying glass.
  - Use: it is direct evidence for the 16px to 20px lesson in Block 6 and for decisions 1 and 2 (clear instructions to sign up and register).
  - FLAGS before it ships:
    1. The photo carries visible "Unsplash+" watermarks. That is a template leftover and signals an unlicensed or preview image. Replace with a licensed photo, an illustration or initials only.
    2. Source (Lumbini, Oct 22): the persona is based on a REAL interviewee. So: (a) the stock photo is not him and must not be shown as him; (b) his exact details together could identify a real person, so anonymize (no first name, say "retired software quality engineer", use the region not the city) unless he has given consent to be named; (c) label the card "Based on a user interview", and say how many interviews were held. OPEN: consent and interview count.
    2b. Photo: Lumbini asked to remove the Unsplash+ watermark. Claude declined (the watermark marks an unlicensed preview image). Do NOT remove it or ship the watermarked image. Use a licensed image, an illustration, or an initials avatar.
    3. Typos on the card: "He love to learn", "upto date", "Can not use", "Have been using". Fix before use.
    4. Tension with the page text: the page frames users as having "low technical confidence", but the persona is a retired quality engineer who loves technology. His barrier is vision, not confidence. Reword the framing so the persona and the text agree (for example, motivated users whose barrier was readability and clarity).
    5. The age range "55 to 92" may come from interviews (the persona is in his late 80s). OPEN: confirm.

### 4B Exploration
- Skipped. No wireframes or sketches exist. Do not render a 4B block.

### 4C Key design decisions

CLAIM RULE (Oct 22): Lumbini wants to say the transparent booking flow increased the conversion rate. No post-launch conversion data has been seen. The only conversion figure is the pre-redesign May 2024 number (149 of 832 sessions, 17.9%). Do NOT write "increased conversion" as a result. Write it as the design intent or expected effect ("designed to raise the share of visits that end in a booking"), and label it unmeasured, unless Lumbini provides post-launch GA with a period and a sample. OPEN.

Source: Figma node 177:1038 ("before and after"). Four decisions, each Before/After with Decision, Trade-off, Evidence. Lumbini accepted four, the worksheet cap is three, so this is a stated deviation.

1. Fewer competing actions, a clearer path to register (class booking page). Before: feedback, survey and QR code compete with Register; several button styles. After: a four-step guide to joining; one consistent primary button. Trade-off: removing the feedback and survey block moves it off the page top. Evidence: use the survey finding that unclear navigation was the top accessibility-survey challenge, labeled n=19, directional.
2. Four steps replace a wall of text and a video users never watched (landing page). Before: "How does this work?" text list with a YouTube video. After: four numbered step cards (Sign up, Book a class, Get your link, Join the class). Trade-off: the steps take more vertical space, so the hero copy is shorter. Evidence: the Figma caption says "usability test revealed users never watched the video." OPEN, important: the page never mentions a usability test. Confirm it happened, who ran it and the sample size, or reword as stakeholder-reported or remove.
3. A shorter sign-up that also identifies who needs Premium. Before: nine stacked fields, two consents, grey box, little guidance. After: fewer required fields, an affiliation question that flags independents who may want Premium, a friendly photo and plain heading. Trade-off: one extra field, but fewer required fields overall. Evidence: use the survey finding that membership status was among the hardest things to find (n=19, directional). Fix: the After mock is headed "Sign In to Anew Vista" over a sign-up form. Make the heading say sign up.
4. Zoom link and steps on the confirmation page (Figma node 191:1465). Before: no confirmation step existed, and the class booking process included a redundant payment step (classes are free); users did not know the Zoom link was emailed, so support call volume rose. This came from a stakeholder interview, so label it stakeholder-reported with no count. After: a confirmation page with the booking receipt, "What happens next" timeline, Zoom link area, "No email yet?" recovery (send again, use a different email, phone number), and "Put it on my Calendar". There is no "before" screen for confirmation, so show the final screen and state plainly that none existed. Do not invent a before image.
   - FLAG: the new design shows the Zoom link "15 minutes before class starts," not immediately. The current page says "Users now can access the Zoom link after they book a class." Reword to match the design: the link and passcode appear on the confirmation page 15 minutes before class and are emailed.
   - Pair this with the flow video (see 4D).

"Why it matters" lines (Lumbini's answers, Oct 22). Place one after each decision, one or two sentences, in her voice, no em dashes. Direction only; Claude Code drafts the wording from these and checks it against the voice-samples doc.
- Decision 1: why it matters is that a hesitant senior sees one thing to do. User-side only. No number.
- Decision 2: why it matters is that seniors learn how to book without watching a video. User-side. Keep the usability-test claim only if Lumbini confirms it happened (see OPEN).
- Decision 3: why it matters is that independent members see Premium at the right moment. Business-side, tied to the stakeholder's finding that some members get free premium without knowing.
- Decision 4: why it matters is fewer support calls (stakeholder-reported, no count), and it is where the whole-flow conversion intent lands. The conversion line is not on this decision; it goes in Impact.

### 4D Final designs
- Main slot: the final flow video, registration to joining, placed at the BOTTOM of the case study (Lumbini, Oct 22). It is a different video from the hero (the sign-up flow). Both files are in the Anewvista case study folder on Lumbini's Mac. OPEN: Claude Code needs both files, which one is which, and a poster for each. The bottom video starts only on press unless Lumbini marks it autoplay in the register.
- Supporting screens: confirmation page (decision 4), new landing page, sign-up. OPEN: Lumbini to confirm which and give Figma nodes.
- The 16px to 20px body text change is NOT a decision. It becomes the Block 6 lesson. Show a legibility comparison only if Lumbini provides one.

## Extra: AI-native block
Not applicable to this case study.

## Block 5: Outcome and impact
- Ship status: shipped (Lumbini confirmed).
- Headline metric (one term only: "grantor funding"): "Grantor funding up 100% for 2024. Stakeholder-reported, not measured by me." Do not use "sponsorship" or "annual sponsorship" anywhere.
- Credit: the page says the landing page and replacing the YouTube video placement contributed. Keep that attribution, say what can and cannot be credited to the design, and do not imply causation.
- Conversion line (Lumbini chose "whole flow: designed to raise conversion"): in Impact, say the transparent booking flow was designed to raise the share of visits that end in a booking, from the May 2024 baseline of 17.9% (149 of 832 sessions, GA). Label it unmeasured. Do NOT say conversion increased unless Lumbini supplies post-launch GA with the period and the sample.
- Do not use the 94%, 97%, 85% figures in the Figma "impact wall" as results. They appear to be organization stats placed in the design mock. OPEN: confirm their source before using any.
- Metrics cards (2 to 3): only things with a source. Candidates: bounce 45.6% to 56.4% (Jan to May 2024, GA, this is the problem metric, not a result); 149 of 832 bookings in May 2024 (17.9%, GA). Do not present either as an outcome of the redesign.

## Block 6: Reflection
- One sentence only: "I learned that a 16px base for body text is not legible for users with limited vision, so I scaled it to 20px." Lumbini to confirm or reword.

## Block 7: Navigation
- Next project: Active Recall for Knowunity (current page). Brief lineup is open, so drive it from the data file.

## Motion
Same tokens and rules as the Knowunity log (150 / 250 / 400 ms, transform and opacity only, CSS plus IntersectionObserver, reduced-motion fallbacks). Audience is seniors, so keep motion minimal and calm: scroll reveals only, no hover flourishes, nothing that moves without a trigger except the hero video if marked autoplay.

## Open items
1. Title and hook approval (hook uses the corrected 17.9% figure).
2. Resolved: no Tools; Team is 2 UX designers, 1 UX researcher, 1 developer, CEO.
3. Source for "55 to 92" age range, or remove it. GA likely cannot supply it.
4. Source for the 46% B2C benchmark.
5. Whether a usability test took place (decision 2 evidence).
6. Two videos, both in the Anewvista folder on Lumbini's Mac: hero (sign-up flow) and bottom (final flow). Need the files, a poster for each, the autoplay decision for each, and a size budget at 390px.
7. Persona for phase 1 of the Journey strip (does one exist?), and post-launch conversion data if the conversion claim is to be stated as a result.
8. Supporting final screens and Figma nodes.
9. Source for the impact wall percentages before any are used.
10. Home card date (August 2025) vs March 2025.
11. Confirm the research slide and page text credit the team, not Lumbini, for the analysis.
