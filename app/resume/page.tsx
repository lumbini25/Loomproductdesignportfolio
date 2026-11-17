import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/icons";
import { resume, type ResumeEntry } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Lumbini Sharma's resume: product designer across enterprise B2B, EdTech and nonprofit products, with a research background.",
};

// Laid out after the reference Lumbini shared (2026-11-17): a large title, then one row per part,
// divided by a dark rule, with a spaced label on the left and the content on the right. Phones
// stack the label above the content. No animation, so no "Replay" control.

// The row label: small, spaced capitals in the title colour.
const label = "font-dm text-caption-m font-semibold tracking-[0.2em] text-title uppercase";
// The line under an entry's title: dates and place, spaced capitals, muted.
const meta = "font-dm text-caption-m tracking-[0.14em] text-caption uppercase";

function Row({ id, name, children }: { id: string; name: string; children: ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="grid grid-cols-1 gap-6 border-t border-title py-10 tablet:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] tablet:gap-10 desktop:py-14"
    >
      <h2 id={id} className={`${label} tablet:pt-2`}>
        {name}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Entries({ items }: { items: ResumeEntry[] }) {
  return (
    <ol className="flex flex-col gap-10">
      {items.map((e) => (
        <li key={e.org + e.title} className="grid grid-cols-[12px_minmax(0,1fr)] gap-x-5">
          {/* A hollow marker beside each entry, as in the reference. */}
          <span aria-hidden="true" className="mt-2.5 size-3 rounded-pill border-2 border-title" />
          <div className="flex flex-col gap-2">
            <h3 className="font-jakarta text-title-s font-bold text-title">
              {e.title}, {e.org}
            </h3>
            <p className={meta}>{[e.dates, e.place].filter(Boolean).join(" · ")}</p>
            {e.bullets && (
              <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-body-m text-body">
                {e.bullets.map((b) => (
                  <li key={b.slice(0, 40)}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ResumePage() {
  return (
    <Container className="flex flex-col pt-12 pb-section-sm desktop:pt-16 desktop:pb-section">
      <div className="flex flex-wrap items-end justify-between gap-6 pb-10 desktop:pb-14">
        <h1
          className={
            resume.titleFace === "serif"
              ? "font-serif text-h1-sm italic text-title tablet:text-h0"
              : "font-jakarta text-h1-sm font-bold text-title tablet:text-h0"
          }
        >
          {resume.title}
        </h1>
        {site.resumeUrl && (
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center gap-2 border-b border-title ${label}`}
          >
            {resume.docLabel}
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowRightIcon size={16} className="-rotate-45" />
          </a>
        )}
      </div>

      <Row id="profile" name="Profile">
        <div className="flex flex-col gap-6">
          <p className="max-w-[880px] text-body-l-sm text-title tablet:text-body-l">{resume.profile}</p>
          <p className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${meta}`}>
            {resume.path.map((step, i) => (
              <span key={step} className={`inline-flex items-center gap-4 ${i === resume.path.length - 1 ? "font-semibold text-title" : ""}`}>
                {i > 0 && <ArrowRightIcon size={20} className="text-title" />}
                {step}
              </span>
            ))}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-body-s text-caption">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li className="inline-flex min-h-11 items-center">{resume.contact.place}</li>
            <li className="inline-flex min-h-11 items-center">{resume.contact.work}</li>
          </ul>
        </div>
      </Row>

      <Row id="experience" name="Experience">
        <Entries items={resume.experience} />
      </Row>

      <Row id="projects" name="Project">
        <Entries items={resume.projects} />
      </Row>

      <Row id="education" name="Education">
        <Entries items={resume.education} />
      </Row>

      <Row id="skills" name="Skills">
        <ul className="flex flex-wrap gap-2.5">
          {resume.skills.map((s) => (
            <li key={s} className="rounded-pill border border-line px-4 py-2 text-body-s text-title">
              {s}
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
}
