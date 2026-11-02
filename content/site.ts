// Site-wide copy and links. Source: Figma Prototype page (102:2874), footer and nav.

export const site = {
  name: "Lumbini Sharma",
  logoAlt: "Loombini, home",
  availability: "Open to work · San Francisco Bay Area",
  footerNote: "Open to work. San Francisco Bay Area.",
  email: "loomdesign25@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/lumbini-sharma",
  xUrl: "https://x.com/SharmaLumbini",
  // Google Doc, opened in a new tab. Set to null to hide every Resume link.
  resumeUrl:
    "https://docs.google.com/document/d/1LoPmLB7tX72RWaYkSCMGEXsbQYX6kdF4GF_4mKb6JaY/edit?usp=sharing" as
      | string
      | null,
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Fun & experiments", href: "/fun" },
];

// Case-study template labels. Not from Figma; there is no case-study frame.
export const caseStudy = {
  back: "All work",
  byline: "Case study by Lumbini Sharma, product designer.",
  onThisPage: "Content",
  myRole: "My role",
  next: "Next project",
  placeholder: "Placeholder.",
};

export const notFoundCopy = {
  title: "Page not found",
  body: "This page does not exist. The case studies are all on the home page.",
  cta: "See the work",
};

export const contact = {
  heading: "Let's talk.",
  copyLabel: "Copy email",
  copiedLabel: "Copied",
  copyFailed: "Copy did not work. The address is shown above.",
};
