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

// Figma frame 394:1959, "About 1440 (belief + photo cards)"; below 834, its phone frame 336:1768.
export default function AboutPage() {
  return (
    <>
      {/* On phones the story wraps around the portrait and under it; from 834 they are two columns,
          the portrait staying in view past the longer text; from 1200 both edges line up. */}
      <Container className="flow-root pt-3 pb-2.5 tablet:flex tablet:items-start tablet:gap-8 tablet:py-18">
        <Image
          src={about.photo.src}
          alt={about.photo.alt}
          width={about.photo.width}
          height={about.photo.height}
          sizes="(min-width: 834px) 34vw, 141px"
          preload
          className="float-left mr-4 mb-2 h-[290px] w-[141px] rounded-control object-cover tablet:sticky tablet:top-6 tablet:float-none tablet:m-0 tablet:h-auto tablet:w-[calc(100%*440/1312)] tablet:shrink-0 tablet:rounded-portrait desktop:static desktop:self-stretch"
        />
        <div className="min-w-0 space-y-2 tablet:flex tablet:flex-col tablet:items-start tablet:gap-6 tablet:space-y-0 desktop:self-stretch">
          <h1 className="font-jakarta text-h1-mobile font-bold tablet:text-h3">{about.title}</h1>
          <p className="font-dm text-body-m text-title">{about.subtitle}</p>
          <p className="font-dm text-body-m text-title">{about.lead}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-dm text-body-m text-body">
              {paragraph}
            </p>
          ))}
          {site.resumeUrl && (
            <ButtonLink href={site.resumeUrl} external className="max-tablet:hidden desktop:mt-auto">
              {about.resumeCta}
            </ButtonLink>
          )}
        </div>
      </Container>

      {/* Phone only: the button sits under the intro, on the right, then "I love…" (336:1802). */}
      <Container className="flex flex-col gap-6 pb-8 tablet:hidden">
        {site.resumeUrl && (
          <div className="flex justify-end">
            <ButtonLink href={site.resumeUrl} external className="max-tablet:min-h-11 max-tablet:p-2 max-tablet:text-mobile-button">
              {about.resumeCta}
            </ButtonLink>
          </div>
        )}
        <section aria-labelledby="loves-heading" className="flex flex-col gap-6">
          <h2 id="loves-heading" className="text-subtitle-s font-normal text-title">
            {about.lovesHeading}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {about.loves.map((item) => (
              <li key={item} className="rounded-pill bg-surface-subtle px-4.5 py-2.5 font-dm text-body-semibold-s font-semibold text-caption">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <section aria-labelledby="writing-heading">
        <Container className="flex flex-col gap-8 pb-4 tablet:pt-10 tablet:pb-section-sm desktop:pb-section">
          <div className="flex items-center justify-between gap-4 tablet:flex-col tablet:items-start tablet:gap-2 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-8">
            <h2 id="writing-heading" className="font-jakarta text-h1-mobile font-bold tablet:text-title-s">
              {about.writing.heading}
            </h2>
            <p className="font-dm text-mobile-body-1 text-body tablet:font-sans tablet:text-subtitle-s tablet:text-caption">{about.writing.note}</p>
          </div>
          <ul className="flex flex-col border-t border-line">
            {about.writing.entries.map((entry) => (
              <li key={entry.title} className="flex gap-12 border-b border-line py-8 tablet:pt-10">
                <div className="flex w-32 shrink-0 flex-col gap-2 tablet:w-60">
                  <Eyebrow className="max-tablet:whitespace-nowrap">{entry.type}</Eyebrow>
                  <p className="font-dm text-mobile-body-1 text-caption tablet:text-body-s tablet:font-semibold">{entry.year}</p>
                </div>
                <div className="flex min-w-0 flex-col gap-3">
                  <h3 className="font-jakarta text-h3-mobile font-bold text-title [overflow-wrap:anywhere] tablet:font-dm tablet:text-citation tablet:font-normal">{entry.title}</h3>
                  <p className="font-dm text-mobile-body-1 text-body tablet:font-sans tablet:text-subtitle-s">{entry.citation}</p>
                  {entry.url && (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center self-start font-dm text-body-semibold-s font-semibold text-accent underline tablet:text-body-s"
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

      {/* Phone only: the beliefs as plain cards (338:1629), in place of the accordion. */}
      <section aria-labelledby="principles-heading" className="tablet:hidden">
        <Container className="flex flex-col gap-8 py-4">
          <div className="flex flex-col gap-3">
            <h2 id="principles-heading" className="font-jakarta text-h1-mobile font-bold text-title">
              {about.principles.phoneHeading}
            </h2>
            <p className="font-dm text-mobile-body-1 text-caption">{about.principles.phoneNote}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {about.principles.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-3 rounded-card bg-surface-subtle p-3">
                <h3 className="font-jakarta text-h3-mobile font-bold text-title tablet:text-h1-mobile">{item.title}</h3>
                <p className="font-dm text-mobile-body-1 text-caption">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="pt-4 pb-section-sm tablet:pt-10 desktop:pb-section">
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <section aria-labelledby="beliefs-heading" className="hidden min-w-0 flex-col gap-5 tablet:flex rounded-portrait border border-line bg-surface p-7">
            <h2 id="beliefs-heading" className="font-jakarta text-h1-mobile font-bold text-title tablet:text-title-s">
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
            <h2 id="photos-heading" className="px-7 pt-7 pb-5 font-jakarta text-h1-mobile font-bold text-title tablet:text-title-s">
              {about.photos.heading}
            </h2>
            <PhotoMarquee rows={about.photos.rows} />
          </section>
        </div>
      </Container>
    </>
  );
}
