# Platform Constraints: Lumbini Sharma Portfolio

## Scope for this sprint

**Next.js and Tailwind. Light mode only. Three breakpoints: 1440px, 834px, 390px.**

Hosting was planned as Vercel. You said Netlify works until you buy a domain, so
the host is an open item below.

The site is built with Claude Code over about 50 hours (20 hours a week for 2.5
weeks). Every page you design and every page you build targets those three
widths and nothing else.

This is a deliberate constraint, not a simplification. A hiring manager gives a
portfolio about a minute, and most of them skim on a laptop or a phone. Three
well-built widths beat six half-built ones.

If a decision only makes sense at a width outside these three, it is out of
scope.

---

## What you're actually building

A content site, not an app. It is a small set of pages that load fast, read
clearly, and get out of the way of the case studies.

- **Pages in scope:** Home, four case study pages, About, and one Fun and
  experiments page. Resume is not a page: it is a link in the top and bottom
  navigation that opens your Google Doc. Where the contact block lives is open
  (see below).
- **Home and About are designed in Figma by you.** Every other page is built
  directly in code.
- **Content is static.** Case study text lives in MDX or typed data files, so a
  copy fix never touches layout.
- **Copy comes from your Framer sites.** You sort it into clear sections before
  handoff, and I do not rewrite claims. Facts flagged in the brief (metrics,
  dates, team sizes) are fixed before they go in.
- **Visuals and videos are handed over per case study.** Nothing is generated to
  stand in for real work.
- **Tokens are yours.** You author the design tokens (color, type, spacing) and
  they map to the Tailwind config. Design and code share the same numbers.
- **Tailwind screens are custom.** 834px and 1440px are set explicitly so
  Figma and code agree. Do not rely on Tailwind's default breakpoints.

---

## Accessibility is the baseline, not a polish pass

A portfolio that claims accessibility work and fails these checks undermines
itself.

- WCAG 2.1 AA on every page, at every breakpoint.
- 16px minimum body text.
- 44x44px minimum touch targets.
- 4.5:1 minimum text contrast.
- Every image has real alt text. Decorative images are hidden from screen
  readers.
- Everything that can be clicked can be reached and used by keyboard.
- The X and LinkedIn icons are links with real accessible names (for example
  "LinkedIn profile") and 44x44px touch targets.
- The copy email button announces "Copied" to screen readers, and the email
  address stays visible as text so it still works if copying fails.
- The Resume link opens the Google Doc in a new tab and says so in its label.
- Respect `prefers-reduced-motion`. Any hero animation has a still version.

---

## Media and performance

- **Autoplay is allowed for some media, always muted, never with sound.** Each
  autoplaying item is marked in the register below, and I ask about each video
  as we build. Autoplaying video needs a poster image, respects
  `prefers-reduced-motion` (shows a still frame instead), and has a visible
  pause control. Anything not marked autoplay starts only when the visitor
  presses play.
- Videos have a poster image and lazy-load below the fold.
- **Set a size budget per video before building.** Heavy video at 390px is the
  main performance risk on this site.
- **Use next/image and next/font.** No unoptimized images, no render-blocking
  font requests.
- **Per-page metadata.** Every page has its own title, description and share
  image. The current Framer site shares one title across pages.
- **Proposed target:** a mobile Lighthouse performance score of 90 or more.
  Confirm or change it in week 1.

### Autoplay register

Filled in as we go. Nothing autoplays until it is marked "Yes" here.

| Media | Where it appears | Autoplay | Notes |
| --- | --- | --- | --- |
| Knowunity hero film (`knowunity-active-recall.mp4`, 74 s, 1920x1080, 49 MB source) | Knowunity case study, Solution | No (Nov 2, Lumbini: everything autoplays except the two demo films) | Starts when pressed; poster first. Shipped as a 1280x720 web version, 8.9 MB; the 49 MB source is only a download link. |
| Knowunity prototype screen recording (Sep 30, 44 s, 824x1360, silent; `prototype-recording.mp4`, 2.8 MB) | Knowunity case study, Final designs, in a phone mockup | Yes (Oct 27, Lumbini) | Muted, looping, poster, visible pause control; pauses off screen; reduced motion shows the poster. |
| AnewVista class booking flow (33 s, 1600x900, 12 MB) | Anewvista case study, bottom | Yes (Nov 2, Lumbini) | Edited from Lumbini's recording, Oct 22. Muted, looping, poster, pause control. |
| Home card videos: ANVCS class booking flow (23.5 s, `anewvista-card.mp4`, 2.5 MB) and TDK unit creation (15.6 s, `tdk-card.mp4`, 1.2 MB), both silent | Home, inside the card thumbnails, as in Figma | Yes (Oct 28, Lumbini) | Muted, looping, poster, visible pause control; pauses off screen; reduced motion shows the poster. |
| AnewVista hero laptop recording (`hero-laptop.mp4`, 6.2 s, 1320x806, 1.8 MB, silent) | Anewvista case study, opening beside the title | Yes (Oct 29, Lumbini: "make the video autoplay") | Muted, looping, poster, visible pause control; pauses off screen; reduced motion shows the poster. A PNG mask hides the white around the laptop. |
| About photo rows (`PhotoMarquee`, 11 photographs, two rows moving slowly in opposite directions) | About, "When I'm not designing" | Yes (Nov 1, Lumbini: "slow moving carousel") | Not video. Pause button; hover and focus also stop it; reduced motion shows a still. |
| Bloom and Heal daisy motion (`motion-daisy.mp4`) | Fun and experiments, motion card | Yes (Oct 20, reconfirmed Oct 22) | Muted, looping, poster, pause control. Reduced motion shows the poster. |
| Bloom and Heal: full phone flow, 3 watch feature clips (from the Framer page, all silent) | Bloom and Heal case study | No | Added Oct 26. Start only when pressed; poster first. |
| Bloom and Heal demo film (`bloom-heal-demo.mp4`, 40 s, 1280x720, 8.3 MB, has a soundtrack) | Bloom and Heal case study, hero | No | Nov 2: stays press-to-play, with sound; poster first. |
| TDK demos (`demo-1` to `demo-3`), WTV solution clips (3), Knowunity hint ladder clip (in the Knowunity hero since Nov 4) | Their case studies | Yes (Nov 2, Lumbini: "all the videos") | All silent. Muted, looping, poster, pause control; pause off screen; reduced motion shows the poster. |
| Bloom and Heal pinned device clips | Bloom and Heal case study | Yes | The active step plays, muted. |
| Home card films (`CardSequence`, three case-study screens per card, about 4 s) | Home, over every card thumbnail | Yes, once (Nov 6, Lumbini: "once on scroll, then rest") | Not video. Plays once when half the card is on screen, again on pointer hover. Under 5 s, so no pause control. Reduced motion and no JavaScript show the thumbnail only. |
| All other media | | Open | Not yet reviewed. I need the files and what each one shows |

---

## Safe areas and real devices

- On a phone, content must not sit under the notch or the home indicator. Use
  `viewport-fit=cover` with `env(safe-area-inset-top)` and
  `env(safe-area-inset-bottom)`.
- **Test on a real phone, not just a browser window at 390px.** Open the
  deployed Vercel preview on your phone. A real thumb and a real notch expose
  problems a desktop window hides.
- Also check: 200% text zoom, a 320px-wide screen, a slow network, and long
  project titles wrapping.

---

## Out of scope

- Designing any width outside 1440px, 834px and 390px, including a large-screen layout
  above 1440px. (Oct 22: widths between them must still hold together; the 1440 layout
  starts at 1200. See decisions.md.)
- Dark mode. The site is light mode only.
- A contact form. Contact is your email address, a copy button, and two icons,
  with no other contact info.
- Native app behaviour of any kind.
- A CMS or any database. Content is files in the repo.
- Account systems, comments, or anything with a login.
- Features that only make sense once real analytics exist.

---

## Decided

| Item | Decision |
| --- | --- |
| Color mode | Light mode only |
| Design approach | Home and About designed in Figma by you; everything else built directly in code |
| Copy | From your Framer sites, sorted by you into clear sections |
| Media | You hand over visuals and videos for each case study |
| Contact | Email address shown as text, a copy email button, and X and LinkedIn icons; no form and no other contact info |
| Resume | A link in the top and bottom navigation that opens your Google Doc; not a page and no PDF in the repo |
| Pages | Home, four case study pages, About, Fun and experiments |
| Case study details row | Varies per case study and is built from a per-case-study data list. Knowunity shows Role, Timeline and Team: Solo (Lumbini, Oct 22; replaces the Oct 21 "no Team field") |
| Knowunity hero film | Autoplays, muted, per the register above (Oct 21) |

## Still open

These are not decided. Do not build around a guess.

| Item | Why it matters |
| --- | --- |
| Host: Vercel or Netlify | Vercel was the plan; Netlify was named for use until the domain exists |
| Domain | You will buy it and hand it over; needed for the resume and share links |
| Analytics | Not decided; see the recommendation in the chat |
| Which four case studies | Five were listed; four pages are planned |
| Where the contact block lives | Footer, navigation, or its own page; not in your page count |
| Which email address to show | Decides the contact block |
| Google Doc link and sharing setting | You will send the link; it must be view-only and open for anyone with the link |
| Old Framer sites: keep, retire or redirect | Decides what recruiters see at the old URLs |
| Tablet breakpoint: 810px (design brief) or 834px (this doc) | Figma and Tailwind must share one number |
| Knowunity hero video size budget | Decides the compressed export settings |

---

## What's mocked, and what that means

Nothing is mocked. Every number, quote and result on the site is real and
sourced, or it is labelled as a target, a projection or a school project. A
number without its source and sample size does not ship.
