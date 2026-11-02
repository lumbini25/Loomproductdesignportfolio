// About copy, verbatim from Figma frame 394:1959.

export const about = {
  title: "About me",
  subtitle: "A bit about me: where I've been, what I do, and how I work.",
  lead: "I've always been fascinated by how humans organize information, whether that's through the layout of a 44mm Watch interface or the curated halls of the Musée d'Orsay.",
  story: [
    "Before Figma, I was in archives, a published author of academic journals and edited volumes, reconstructing how ordinary people navigated systems of power through wartime India. The discipline transferred cleanly. The only thing that changed is who I'm designing the story for: not a journal editor, but a user with five seconds and no patience for confusion.",
    "Right now I'm most drawn to B2B and internal tooling: complex systems where competing organizational needs, fragmented workflows, and information architecture problems intersect. That's where I believe design has the highest leverage: not in making things beautiful, but in making them work reliably for people who have no choice but to use them every day.",
  ],
  photo: {
    src: "/images/about/portrait.png",
    alt: "Pencil portrait of Lumbini Sharma, smiling, wearing dark-rimmed glasses.",
    width: 880,
    height: 1328,
  },
  resumeCta: "Check my resume",
  // Phone only (Figma 336:1768).
  lovesHeading: "I love…",
  loves: [
    "Writing about my product design experience",
    "Vibe coding",
    "Urban photography",
    "Visiting museums",
    "Reading literature",
    "Exploring human behavior",
    "Traveling",
  ],
  writing: {
    heading: "Writing",
    note: "Published research, from before I moved into design.",
    entries: [
      {
        type: "Journal research note",
        year: "2022",
        title: "Anti-Imperialist Pamphleteering: Understanding Global Jihad in Wartime India, 1914-1918",
        citation: "British Journal for Military History, volume 8, issue 1, pages 152 to 166.",
        linkLabel: "Read the article",
        url: "https://journals.gold.ac.uk/index.php/bjmh/article/view/1610" as string | null,
      },
      {
        type: "Book chapter",
        year: "2025",
        title:
          "Policing ‘terrorist’ propaganda: A study of counter-terrorism strategies in colonial Bengal 1908–18",
        citation:
          "In Global counter terrorism, edited by Sagnik Dutta, Tahir Abbas, and Sylvia I. Bergh. Manchester University Press.",
        // TODO: the Figma label says Manchester Hive, but the Figma link goes to JSTOR.
        linkLabel: "View the chapter on Manchester Hive",
        url: "https://www.jstor.org/stable/jj.25136990" as string | null,
      },
    ],
  },
  principles: {
    heading: "What I believe",
    // Phone only (Figma 336:1768).
    phoneHeading: "I value human behavior in design",
    phoneNote: "A few things that shape how I work and create.",
    items: [
      {
        title: "Behavior over assumption",
        body: "I design from what people actually do, not what I think they'll do. Every workaround, every shortcut, every frustrated click tells me something a survey never would.",
      },
      {
        title: "Useful before beautiful",
        body: "A well-crafted interface that solves the wrong problem is still the wrong solution. I measure good design by whether it reduces friction for a real person doing a real task.",
      },
      {
        title: "Research before pixels",
        body: "I don't open Figma until I understand the problem. Finding where users struggle, and why, is the work. The screens come after.",
      },
    ],
  },
  // Figma 396:1988's two rows, in its order. Width is at the row's 216px height.
  photos: {
    heading: "When I'm not designing",
    rows: [
      [
        { src: "/images/about/photos/photo-01.jpg", width: 340, alt: "Museum hall with an arched glass roof." },
        { src: "/images/about/photos/photo-03.jpg", width: 288, alt: "Granite cliff above a valley." },
        { src: "/images/about/photos/photo-08.jpg", width: 162, alt: "Cypress path to the ocean." },
        { src: "/images/about/photos/photo-06.jpg", width: 288, alt: "Sea arch with birds." },
        { src: "/images/about/photos/photo-09.jpg", width: 162, alt: "Mountain road with snow." },
      ],
      [
        { src: "/images/about/photos/photo-02.jpg", width: 324, alt: "Glass pyramid and courtyard at sunset." },
        { src: "/images/about/photos/photo-04.jpg", width: 288, alt: "Sunlit forest trail." },
        { src: "/images/about/photos/photo-07.jpg", width: 288, alt: "Cypress tree above a white sand beach." },
        { src: "/images/about/photos/photo-11.jpg", width: 162, alt: "Colonnade with a brick floor." },
        { src: "/images/about/photos/photo-10.jpg", width: 288, alt: "Lake and mountains under cloud." },
        { src: "/images/about/photos/photo-05.jpg", width: 288, alt: "Palm-lined beach promenade at dusk." },
      ],
    ],
  },
};
