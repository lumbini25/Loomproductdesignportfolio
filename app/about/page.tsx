import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumbini Sharma moved from archival research into product design: background, published writing, and the principles behind the work.",
};

// Figma frame 394:1959, "About 1440 (belief + photo cards)".
export default function AboutPage() {
  return (
    <>
      <Container className="flex flex-col gap-8 py-10 tablet:flex-row tablet:items-start tablet:py-18">
        <Image
          src={about.photo.src}
          alt={about.photo.alt}
          width={about.photo.width}
          height={about.photo.height}
          sizes="(min-width: 834px) 34vw, 320px"
          preload
          className="h-auto w-full max-w-80 rounded-portrait tablet:w-[calc(100%*440/1312)] tablet:max-w-none tablet:shrink-0"
        />
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-jakarta text-h3 font-bold">{about.title}</h1>
          <p className="font-dm text-body-m text-title">{about.subtitle}</p>
          <p className="font-dm text-body-m text-title">{about.lead}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-dm text-body-m text-body">
              {paragraph}
            </p>
          ))}
          {site.resumeUrl && (
            <ButtonLink href={site.resumeUrl} external>
              {about.resumeCta}
            </ButtonLink>
          )}
        </div>
      </Container>

      <section aria-labelledby="writing-heading">
        <Container className="flex flex-col gap-8 pt-10 pb-section-sm desktop:pb-section">
          <div className="flex flex-col gap-2 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-8">
            <h2 id="writing-heading" className="font-jakarta text-title-s font-bold">
              {about.writing.heading}
            </h2>
            <p className="text-subtitle-s text-caption">{about.writing.note}</p>
          </div>
          <ul className="flex flex-col border-t border-line">
            {about.writing.entries.map((entry) => (
              <li key={entry.title} className="flex flex-col gap-4 border-b border-line pt-10 pb-8 tablet:flex-row tablet:gap-12">
                <div className="flex shrink-0 flex-col gap-2 tablet:w-60">
                  <Eyebrow>{entry.type}</Eyebrow>
                  <p className="font-dm text-body-s font-semibold text-caption">{entry.year}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-dm text-citation font-normal text-title">{entry.title}</h3>
                  <p className="text-subtitle-s text-body">{entry.citation}</p>
                  {entry.url && (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center self-start font-dm text-body-s font-semibold text-accent underline"
                    >
                      {entry.linkLabel} (opens in a new tab)
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="pt-10 pb-section-sm desktop:pb-section">
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <section aria-labelledby="beliefs-heading" className="flex min-w-0 flex-col gap-5 rounded-portrait border border-line bg-surface p-7">
            <h2 id="beliefs-heading" className="font-jakarta text-title-s font-bold text-title">
              {about.principles.heading}
            </h2>
            {/* Native details with one shared name: opening one closes the others. */}
            <div className="flex flex-col gap-3">
              {about.principles.items.map((item, i) => (
                <details key={item.title} name="beliefs" open={i === 0} className="group rounded-card border border-line bg-surface-subtle py-3.5 pr-3.5 pl-6">
                  <summary className="flex cursor-pointer list-none items-center gap-4 rounded-control font-dm text-body-m text-title [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1">{item.title}</span>
                    <span aria-hidden="true" className="inline-flex size-11 shrink-0 items-center justify-center rounded-pill bg-surface text-title">
                      <PlusIcon size={20} className="group-open:hidden" />
                      <MinusIcon size={20} className="hidden group-open:block" />
                    </span>
                  </summary>
                  <p className="mt-3 pr-2.5 text-subtitle-s text-subtitle">{item.body}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="photos-heading" className="flex min-w-0 flex-col overflow-hidden rounded-portrait border border-line bg-surface">
            <h2 id="photos-heading" className="px-7 pt-7 pb-5 font-jakarta text-title-s font-bold text-title">
              {about.photos.heading}
            </h2>
            <PhotoMarquee rows={about.photos.rows} />
          </section>
        </div>
      </Container>
    </>
  );
}
