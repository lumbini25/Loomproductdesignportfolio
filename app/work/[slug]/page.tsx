import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlockView, Picture, Rich } from "@/components/case-study/Blocks";
import { LogoCloud } from "@/components/case-study/LogoCloud";
import { MonitorFrame } from "@/components/case-study/MonitorFrame";
import { HeroMedia, heroSizes } from "@/components/case-study/MediaFrames";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { ScrollReveal } from "@/components/case-study/ScrollReveal";
import { Tags } from "@/components/Tags";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ProcessAccordion } from "@/components/case-study/ProcessAccordion";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { getCaseStudy } from "@/content/case-studies";
import type { Section, Stage } from "@/content/case-studies/types";
import { getProject, nextProject, projects } from "@/content/projects";
import { caseStudy as labels } from "@/content/site";

// Case-study page. No Figma frame: built from visual-inspiration.md and the per-project kits.
// Opening, then sections grouped Problem → Solution → Impact, then the next project.

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

const stages: Stage[] = ["Problem", "Solution", "Impact"];

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();
  const next = nextProject(slug);

  // The index links to each chapter if the study has them, otherwise to the first section of
  // each stage.
  const firstOfStage = new Map<Stage, string>();
  for (const s of study.sections) if (!firstOfStage.has(s.stage)) firstOfStage.set(s.stage, s.id);
  const chapters = study.sections.flatMap((s) => (s.chapter ? [{ id: s.id, ...s.chapter }] : []));
  // Content navigation: chapter titles (no numbers), or the sections' `nav` names with the "full
  // process" panel as one item, or the three stages.
  const navNamed = study.sections.some((s) => s.nav);
  const processIds = new Set<string>();
  if (study.process) {
    const ids0 = study.sections.map((x) => x.id);
    const a = ids0.indexOf(study.process.first);
    const b = ids0.indexOf(study.process.last);
    if (a >= 0 && b >= a) ids0.slice(a, b + 1).forEach((id) => processIds.add(id));
  }
  const index =
    chapters.length > 0
      ? chapters.map((c) => ({ id: c.id, label: c.title }))
      : navNamed
        ? study.sections.flatMap((s) => {
            if (study.process && s.id === study.process.first) return [{ id: "full-process", label: study.process.label }];
            if (processIds.has(s.id) || !s.nav) return [];
            return [{ id: s.id, label: s.nav }];
          })
        : stages.filter((st) => firstOfStage.has(st)).map((st) => ({ id: firstOfStage.get(st)!, label: st }));
  // WTV follows its Figma frame 112:13: full width, no index (types.ts, `layout`).
  const full = study.layout === "full";

  // Sections inside the "full process" panel, when the study has one (types.ts, `process`).
  const ids = study.sections.map((x) => x.id);
  const from = study.process ? ids.indexOf(study.process.first) : -1;
  const to = study.process ? ids.indexOf(study.process.last) : -1;
  const split = from >= 0 && to >= from;
  const before = split ? study.sections.slice(0, from) : study.sections;
  const inProcess = split ? study.sections.slice(from, to + 1) : [];
  const after = split ? study.sections.slice(to + 1) : [];

  // Every case study opens its chapters the same way (Lumbini, 2026-10-29): the chapter's name as
  // the small label, no number and no box, over a 40px heading. The name is the section's chapter
  // title, else its contents name, else (a study with neither, TDK) its stage. Other sections keep
  // their own label over a 24px heading.
  const chapterName = new Map<string, string>();
  for (const s of study.sections) {
    const name = s.chapter?.title ?? (chapters.length === 0 && navNamed && !processIds.has(s.id) ? s.nav : undefined) ?? (chapters.length === 0 && !navNamed && firstOfStage.get(s.stage) === s.id ? s.stage : undefined);
    if (name) chapterName.set(s.id, name);
  }

  const renderSection = (s: Section) => {
    const chapter = chapterName.get(s.id);
    const eyebrow = chapter ?? s.label;
    const header = (
      <div className={`flex flex-col gap-3 ${chapter ? "max-w-[968px]" : "max-w-[820px]"}`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 id={s.id} className={chapter ? (s.compactHeading ? "text-h1-mobile font-bold tablet:text-title-l" : "text-h3-sm font-bold tablet:text-h3") : "text-title-m font-bold tablet:text-title-l"}>
          {s.heading}
        </h2>
      </div>
    );
    if (s.aside) {
      // Decision rows: label, heading and text beside the visuals from 1200; stacked below.
      const isVisual = (b: Section["blocks"][number]) => b.kind === "wide" || b.kind === "video";
      return (
        <section key={s.id} aria-labelledby={s.id} className={study.motion === "carmen" ? "reveal" : undefined}>
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,440fr)_minmax(0,696fr)] desktop:items-start desktop:gap-12">
            <div className="flex flex-col gap-4">
              {header}
              {s.blocks.filter((b) => !isVisual(b)).map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              {s.blocks.filter(isVisual).map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
          </div>
        </section>
      );
    }
    return (
      <section key={s.id} aria-labelledby={s.id} className={`flex flex-col gap-8 ${study.motion === "carmen" ? "reveal" : ""}`}>
        <div
          className={
            s.media || s.logoCloud
              ? "flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-10"
              : ""
          }
        >
          {header}
          {s.logoCloud && <LogoCloud label={s.logoCloud.label} />}
          {s.media && (
            <Picture
              image={s.media}
              sizes="(min-width: 834px) 327px, 100vw"
              className="w-full max-w-[327px] shrink-0 rounded-card border border-line"
            />
          )}
        </div>
        {s.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </section>
    );
  };

  return (
    <article className={`case-study ${study.theme ? `theme-${study.theme}` : ""}`}>
      {/* A project-coloured opening starts right under the site header (Lumbini, 2026-10-28);
          Work in the header still leads back. */}
      {!study.opening && (
        <Container className="pt-4">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 text-subtitle-s text-caption hover:text-accent"
          >
            <ArrowLeftIcon size={18} />
            {labels.back}
          </Link>
        </Container>
      )}

      {study.motion === "carmen" && <ScrollReveal />}
      <header>
        {study.opening ? (
          // Figma 211:1164: a project-coloured opening, title column beside the product visual,
          // then the facts row (221:2779). At 1440: a 600px text column, 64px gap, the 462px
          // composition, 32px top and bottom; the composition grows to 560 into the room the back link
          // left (Lumbini, 2026-10-28). Side by side from 834, stacked below. The band takes the
          // study's project colour (`band` inside its theme); Anewvista's opening (Figma
          // 275:582) puts its laptop recording where Bloom has an image.
          <>
            <div className="bg-band">
              <Container className="grid grid-cols-1 items-center gap-10 py-8 tablet:grid-cols-[minmax(0,600fr)_minmax(0,462fr)] desktop:grid-cols-[minmax(0,600px)_minmax(0,1fr)] desktop:gap-16">
                <div className="flex flex-col gap-6">
                  <Eyebrow>{study.opening.eyebrow}</Eyebrow>
                  <h1 className="text-h3 font-bold text-title">{study.title}</h1>
                  <p className="text-body-m text-caption">{study.summary}</p>
                  <Tags items={study.opening.tags} label={`Skills: ${project.title}`} />
                </div>
                {study.opening.video ? (
                  <div className="mx-auto w-full max-w-[661px]">
                    {/* A masked device sits straight on the band; a bare screen recording gets
                        rounded corners and a soft shadow (TDK). */}
                    <VideoPlayer
                      video={study.opening.video}
                      className={study.opening.video.mask ? "" : "overflow-hidden rounded-media shadow-card-hover"}
                      compact
                    />
                  </div>
                ) : (
                  study.opening.image &&
                  (study.opening.screen ? (
                    // A plain screenshot sits in a monitor (TDK's dashboard).
                    <MonitorFrame>
                      <Image
                        src={study.opening.image.src}
                        alt={study.opening.image.alt}
                        width={study.opening.image.width}
                        height={study.opening.image.height}
                        sizes="(min-width: 1200px) 530px, (min-width: 834px) 38vw, calc(100vw - 48px)"
                        preload
                        className="block h-auto w-full"
                      />
                    </MonitorFrame>
                  ) : (
                    <Image
                      src={study.opening.image.src}
                      alt={study.opening.image.alt}
                      width={study.opening.image.width}
                      height={study.opening.image.height}
                      sizes="(min-width: 1200px) 560px, (min-width: 834px) 40vw, calc(100vw - 32px)"
                      preload
                      className={`mx-auto h-auto max-h-[calc(100svh-180px)] w-auto max-w-full tablet:max-w-[min(100%,462px)] desktop:max-w-[min(100%,560px)] ${study.opening.clip ? "-mb-8 self-end" : ""}`}
                    />
                  ))
                )}
              </Container>
            </div>
            {/* At a glance (Figma 221:2779 and 275:595): grey Plus Jakarta labels over 18px values,
                a rule above and below, one column per fact from 1200. */}
            <Container>
              <dl
                className={`grid grid-cols-2 gap-x-8 gap-y-5 border-y border-line py-6 ${study.facts.length === 3 ? "desktop:grid-cols-3" : "desktop:grid-cols-4"}`}
              >
                {study.facts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <dt className="font-jakarta text-caption-m font-medium uppercase text-caption">{f.label}</dt>
                    <dd className="text-subtitle-s font-semibold text-subtitle max-tablet:text-body-semibold-s">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </>
        ) : full ? (
          // Figma 112:13: a 392px title column beside a 900x556 cover at 1440, then the role box.
          <Container className="flex flex-col gap-8 pt-14 pb-8">
            <div
              className={`flex flex-col gap-8 ${study.hero === "stacked" ? "" : "desktop:flex-row desktop:items-center desktop:gap-5"}`}
            >
              {study.hero === "stacked" ? (
                // Figma 176:383: title and summary across the full width, cover below.
                <div className="flex flex-col gap-5">
                  <h1 className="text-h3-sm font-bold tablet:text-h3">{study.title}</h1>
                  <p className="text-subtitle-s text-body">{study.summary}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-5 desktop:w-[calc(100%*392/1312)] desktop:shrink-0">
                  <h1 className="text-h3-sm font-bold tablet:text-h3">{study.title}</h1>
                  <p className="max-w-[600px] font-jakarta text-body-s text-body">{study.summary}</p>
                </div>
              )}
              {study.cover && (
                <div className="w-full desktop:flex-1">
                  <HeroMedia>
                    <Image
                      src={study.cover.src}
                      alt={study.cover.alt}
                      width={study.cover.width}
                      height={study.cover.height}
                      sizes={heroSizes}
                      preload
                      className="h-full w-full object-cover"
                    />
                  </HeroMedia>
                </div>
              )}
              {study.heroBlocks?.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
            {study.contributions && (
              <div className="flex flex-col gap-3 rounded-media bg-surface-subtle p-4 tablet:p-6">
                <h2 className="text-title-s font-bold">{labels.myRole}</h2>
                <ol className="flex flex-col gap-1">
                  {study.contributions.map((c, i) => (
                    <li key={c.slice(0, 32)} className="font-jakarta text-body-s text-title">
                      <span className="mr-2 font-sans text-title-s font-bold">/{String(i + 1).padStart(2, "0")}</span>
                      <Rich text={c} />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </Container>
        ) : (
          <Container className="flex flex-col gap-10 pt-6 pb-16">
            <div className="flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:gap-12">
              <div className="flex max-w-[820px] flex-col gap-4 desktop:flex-1">
                <Eyebrow>{project.title}</Eyebrow>
                <h1 className="text-h1-sm font-extrabold tablet:text-h1">{study.title}</h1>
                <p className="text-body-m text-body">{study.summary}</p>
                <p className="text-body-s text-caption">{labels.byline}</p>
              </div>
              {study.cover && (
                // The title column keeps at least 600px (its 624 at 1440), so the cover gives way.
                <div className="w-full max-w-[640px] desktop:w-[min(640px,calc(100%-648px))] desktop:max-w-none desktop:shrink-0">
                  <HeroMedia>
                    <Image
                      src={study.cover.src}
                      alt={study.cover.alt}
                      width={study.cover.width}
                      height={study.cover.height}
                      sizes="(min-width: 1200px) 640px, (min-width: 834px) 640px, calc(100vw - 32px)"
                      preload
                      className="h-full w-full object-cover"
                    />
                  </HeroMedia>
                </div>
              )}
            </div>

            {study.facts.length > 0 && (
              <dl className="fit-4 grid grid-cols-4 gap-x-8 gap-y-5 rounded-card bg-surface-subtle p-6">
                {study.facts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1">
                    <dt className="font-serif text-caption-m font-medium uppercase text-accent">{f.label}</dt>
                    <dd className="font-jakarta text-body-s text-title">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {study.contributions && (
              <div className="flex max-w-[820px] flex-col gap-3">
                <h2 className="font-jakarta text-title-s font-bold">{labels.myRole}</h2>
                <ol className="flex list-decimal flex-col gap-2 pl-6 text-body-m text-body marker:font-serif marker:text-caption">
                  {study.contributions.map((c) => (
                    <li key={c.slice(0, 32)}>
                      <Rich text={c} />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </Container>
        )}
      </header>

      <Container className={`flex flex-col pb-24 tablet:flex-row tablet:gap-8 desktop:gap-16 ${full ? "gap-16" : "gap-10"} ${study.opening ? "pt-16" : ""}`}>
        {/* The contents list behaves the same on every case study, phones included (2026-10-29). */}
        <CaseStudyNav label={labels.onThisPage} items={index} />

        {/* 960 is the content column at 1440; below 1200 it caps the single column there too. A
            study with a coloured opening (Figma 283:572) runs to the 120px rail instead, about
            1100 at 1440, and caps its own text lines (968 headings, 820 body). */}
        <div className={`flex min-w-0 flex-1 flex-col gap-section-sm desktop:gap-section ${full || study.opening ? "" : "max-w-[960px]"}`}>
          {before.map(renderSection)}
          {study.process && inProcess.length > 0 && (
            <ProcessAccordion id="full-process" label={study.process.label} title={study.process.title}>
              {inProcess.map(renderSection)}
            </ProcessAccordion>
          )}
          {after.map(renderSection)}
        </div>
      </Container>

      <aside aria-label={labels.next} className="bg-surface-subtle">
        <Container className="py-12">
          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex min-h-11 flex-col gap-2 hover:text-accent"
          >
            <Eyebrow>{labels.next}</Eyebrow>
            <span className="inline-flex items-center gap-3 text-h3-sm font-bold tablet:text-h3">
              {next.title}
              <ArrowRightIcon size={32} className="motion-safe:transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </aside>
    </article>
  );
}
