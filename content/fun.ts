// Fun and experiments copy, verbatim from Figma Prototype frame 103:3078.
import type { Video } from "@/content/case-studies/types";

export type Experiment = {
  type: string;
  title: string;
  body: string;
  image: { src: string; alt: string; width: number; height: number };
  // Shown instead of the image where there is one.
  video?: Video;
  link: { label: string; url: string } | null;
};

export const fun = {
  title: "Fun and experiments",
  intro:
    "Concepts, side projects, and work that did not make it into a full case study. This is where I try ideas to see where they go.",
  comingSoon: "New experiments coming soon.",
  experiments: [
    {
      type: "Motion",
      title: "Motion experiment",
      body: "I designed a wellness and mental health app whose mascot is happy daisy. The motion is for giving the user a calm and delightful experience.",
      // Autoplay approved by Lumbini (2026-10-20), muted: the source has no audio track.
      video: {
        src: "/images/fun/motion-daisy.mp4",
        poster: "/images/fun/motion-daisy-poster.jpg",
        width: 430,
        height: 932,
        autoplay: true,
        description:
          "Animation: on a sky-blue screen, a green stem grows from the grass and opens into a smiling daisy mascot, then the Sign Up button appears.",
      },
      image: {
        src: "/images/fun/motion.png",
        alt: "Still from the Bloom and Heal sign-up animation: a smiling daisy mascot under clouds on a sky-blue phone screen.",
        width: 790,
        height: 520,
      },
      link: null,
    },
    {
      type: "Writing · Substack",
      title: "Writing about AI product design",
      body: "From research on a stress app: many people would try an AI chatbot before a human therapist. The article argues designers must build guardrails into AI products from the start.",
      image: {
        src: "/images/fun/writing.png",
        alt: "Illustration of a designer at a cosy desk with a large monitor of app screens, captioned “Writing”.",
        width: 790,
        height: 600,
      },
      link: {
        label: "Read on Substack",
        url: "https://designedminds.substack.com/p/evolving-user-expectations-around?r=8a5u9j",
      },
    },
    {
      type: "Talk · Event note on Medium",
      title: "Where does AI actually help in UX research, and where does it fall short?",
      body: "From the Designers Exploring AI, Live event by LTUX Taipei and IxDF Taipei. Helped: competitor research, brainstorming, scenario visuals. Fell short: interview questions, repeated behavior, ambiguous card sorts.",
      image: {
        src: "/images/fun/talk.png",
        alt: "Event card for Designers Exploring AI, Live, by IxDF and Ladies that UX Taipei, showing Lumbini Sharma as guest speaker.",
        width: 790,
        height: 520,
      },
      link: {
        label: "Read on Medium",
        url: "https://medium.com/ladies-that-ux-taipei/ltuxtaipei-ixdfaipei-meetup-lumbinisharma-5a0605669141",
      },
    },
  ] satisfies Experiment[],
};
