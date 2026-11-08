import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { EnvelopeSimpleIcon, LinkedinLogoIcon, MinusIcon, PlusIcon } from "@/components/icons";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumbini Sharma moved from archival research into product design: background, published writing, and the principles behind the work.",
};

// Figma frame 394:1959, "About 1440 (belief + photo cards)"; below 834, its phone frame 336:1768.
// Round icon buttons, as Bobby's: 48px, the height of the button beside them.
const iconLink =
  "inline-flex size-12 items-center justify-center rounded-pill border border-line text-caption hover:bg-surface-subtle active:border-title motion-safe:transition-colors";

// The tickets' tilts in their row, as Bobby's patch row: each turned a little, alternately.
const ticketTilt = ["-rotate-6", "rotate-6", "-rotate-3"];
// Below 834 each ticket takes its share of the row's width, in proportion to its shape so all three
// are the same height and the row fits even at 320px. From 834 they are 160px tall.
const ticketWidth = ["w-[54%]", "w-[22.5%]", "w-[23%]"];

export default function AboutPage() {
  return (
    <>
      {/* The hero follows bobbyiscreative.com's About (Lumbini, 2026-11-08): the whole portrait,
          tilted, on the left; a large heading level with its top; the story; a row of actions with
          round icon buttons; then "I love…" where Bobby has his patches. Phones stack it, portrait
          first, on one left edge (Lumbini, 2026-11-04). Every section ends with the section gap, 64px
          below 1200 and 96px from 1200 (Lumbini, 2026-11-08). */}
      <Container className="flex flex-col gap-8 pt-6 pb-section-sm tablet:flex-row tablet:items-start tablet:gap-12 tablet:pt-18 desktop:gap-24 desktop:pb-section">
        {/* Phones: 320px tall, its width following. From 834: the 1440 column (440 of 1312), its
            height following. Never cropped. Tilted 2°, as Bobby's photo; centred on phones, as his is
            (Lumbini, 2026-11-08). From 834 it is sticky, so it stays beside the story while the rest is read (Lumbini). */}
        <div className="relative mt-4 w-fit self-center tablet:sticky tablet:top-8 tablet:ml-2 tablet:w-[calc(100%*440/1312)] tablet:shrink-0 tablet:self-start">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={about.photo.width}
            height={about.photo.height}
            sizes="(min-width: 834px) 34vw, 212px"
            preload
            className="h-80 w-auto -rotate-2 rounded-portrait shadow-card-warm tablet:h-auto tablet:w-full"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-4 tablet:gap-6">
          <h1 className="font-jakarta text-h1-mobile font-bold tablet:text-h1">{about.title}</h1>
          <p className="font-dm text-body-m text-title">{about.subtitle}</p>
          <p className="font-dm text-body-m text-title">{about.lead}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-dm text-body-m text-body">
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-wrap items-center gap-3 pt-2">
            {site.resumeUrl && (
              <li>
                <ButtonLink href={site.resumeUrl} external>
                  {about.resumeCta}
                </ButtonLink>
              </li>
            )}
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={iconLink}>
                <LinkedinLogoIcon size={20} />
                <span className="sr-only">LinkedIn profile (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={iconLink}>
                <EnvelopeSimpleIcon size={20} />
                <span className="sr-only">Email {site.email}</span>
              </a>
            </li>
          </ul>
          <section aria-labelledby="loves-heading" className="flex flex-col gap-4 pt-4">
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
          {/* The tickets close the text block in one overlapping row, as Bobby's patches do. All the
              same height, so the landscape and portrait tickets line up. */}
          <div aria-hidden="true" className="flex w-full max-w-80 items-center pt-4 pl-2 tablet:w-auto tablet:max-w-none">
            {about.tickets.map((ticket, i) => (
              <Image
                key={ticket.src}
                src={ticket.src}
                alt=""
                width={ticket.width}
                height={ticket.height}
                sizes="(min-width: 834px) 230px, 170px"
                className={`h-auto min-w-0 rounded-tag shadow-card-warm tablet:h-40 tablet:w-auto ${ticketWidth[i]} ${i > 0 ? "-ml-1" : ""} ${ticketTilt[i]}`}
              />
            ))}
          </div>
        </div>
      </Container>

      <section aria-labelledby="writing-heading">
        <Container className="flex flex-col gap-8 pb-section-sm desktop:pb-section">
          <div className="flex flex-col items-start gap-2 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-8">
            <h2 id="writing-heading" className="font-jakarta text-h1-mobile font-bold tablet:text-title-s">
              {about.writing.heading}
            </h2>
            <p className="font-dm text-mobile-body-1 text-body tablet:font-sans tablet:text-subtitle-s tablet:text-caption">{about.writing.note}</p>
          </div>
          <ul className="flex flex-col border-t border-line">
            {about.writing.entries.map((entry) => (
              <li key={entry.title} className="flex flex-col gap-3 border-b border-line py-8 tablet:pt-10 desktop:flex-row desktop:gap-12">
                <div className="flex shrink-0 items-baseline gap-3 desktop:w-60 desktop:flex-col desktop:items-stretch desktop:gap-2">
                  <Eyebrow>{entry.type}</Eyebrow>
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
        <Container className="flex flex-col gap-8 pb-section-sm">
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

      <Container className="pb-section-sm desktop:pb-section">
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

          <section aria-labelledby="photos-heading" className="flex min-w-0 flex-col gap-5 rounded-portrait border border-line bg-surface p-7">
            <h2 id="photos-heading" className="font-jakarta text-h1-mobile font-bold text-title tablet:text-title-s">
              {about.photos.heading}
            </h2>
            <PhotoMarquee rows={about.photos.rows} />
          </section>
        </div>
      </Container>
    </>
  );
}
