import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { FeaturedProject } from "@/components/FeaturedProject";
import { LinkedinLogoIcon, XLogoIcon } from "@/components/icons";
import { PhotoStack } from "@/components/PhotoStack";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { home } from "@/content/home";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

// Figma Prototype frame 103:2944: hero text beside one sketch (103:2953, redrawn 2026-11-01).
export default function Home() {
  // One featured project in its own panel, then every other project as a card, in the structure of
  // carmen-elena.space/work (Lumbini, 2026-11-02). Bloom & Heal is the first card.
  const [featured, ...rest] = projects;
  const iconLink =
    "inline-flex size-11 items-center justify-center rounded-control border border-line text-caption hover:bg-surface-subtle motion-safe:transition-colors";

  return (
    <>
      <Container className="flex items-center gap-5 py-10 tablet:gap-8 tablet:py-12 desktop:gap-7">
        <div className="flex min-w-0 flex-1 flex-col gap-7">
        <p className="flex items-center gap-2.5 font-dm text-body-s font-semibold text-success">
          <span aria-hidden="true" className="size-3 shrink-0 rounded-pill bg-success" />
          {site.availability}
        </p>
        <h1 className="font-jakarta text-h3 font-bold">
          {home.headline.lead} <span className="text-accent">{home.headline.accent}</span>
        </h1>
        {/* The "Recent work" proof line is removed (Lumbini, 2026-10-28). */}
        <p className="font-dm text-body-m text-body">{home.intro}</p>
        <ul className="flex gap-3">
          <li>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={iconLink}>
              <LinkedinLogoIcon size={18} />
              <span className="sr-only">LinkedIn profile (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={site.xUrl} target="_blank" rel="noopener noreferrer" className={iconLink}>
              <XLogoIcon size={18} />
              <span className="sr-only">X profile (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        </div>
        <PhotoStack photos={home.sketches} />
      </Container>

      <section aria-labelledby="work-heading" id="work" className="pt-section-sm pb-section-sm">
        <Container className="flex flex-col gap-6">
          <SectionHeading id="work-heading" title={home.work.heading} />
          <section aria-labelledby="featured-heading" className="flex flex-col gap-4 rounded-featured bg-surface-inverse p-4 tablet:p-6">
            <h3 id="featured-heading" className="font-jakarta text-subtitle-s font-semibold text-on-inverse">
              {home.work.featured}
            </h3>
            <FeaturedProject project={featured} preload />
          </section>
          <section aria-labelledby="all-projects-heading" className="flex flex-col gap-3">
            <h3 id="all-projects-heading" className="font-jakarta text-subtitle-s font-semibold text-title">
              {home.work.all}
            </h3>
            <ul className="grid grid-cols-1 gap-6 desktop:grid-cols-3">
              {rest.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>

      <section aria-labelledby="about-heading">
        <Container className="flex flex-col gap-5 pt-12 pb-24 desktop:flex-row desktop:gap-24">
          <h2 id="about-heading" className="text-h3-sm font-extrabold max-tablet:font-jakarta max-tablet:font-bold tablet:text-h3 desktop:w-[260px] desktop:shrink-0">
            {home.about.heading}
          </h2>
          <div className="flex flex-col items-start gap-5">
            <p className="max-w-[780px] text-body-m text-subtitle">{home.about.body}</p>
            <ButtonLink href="/about" variant="outline">
              {home.about.cta}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
