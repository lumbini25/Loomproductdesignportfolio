import Link from "next/link";
import { Container } from "@/components/Container";
import { CopyEmail } from "@/components/CopyEmail";
import { contact, nav, site } from "@/content/site";

// Figma "footer" (103:3062). The contact block lives here; the nav Contact button jumps to it.
export function SiteFooter() {
  const textLink = "inline-flex min-h-11 items-center hover:text-accent motion-safe:transition-colors";

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-subtle pb-[calc(env(safe-area-inset-bottom)+48px)] pt-12 tablet:pt-18"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 tablet:flex-row tablet:items-start tablet:justify-between">
          <div className="flex flex-col gap-5">
            <h2 id="contact-heading" className="text-display-sm font-extrabold tablet:text-display">
              {contact.heading}
            </h2>
            <div className="flex flex-col items-start gap-4 tablet:flex-row tablet:items-center">
              <p className="text-title-xs font-semibold break-all">{site.email}</p>
              <CopyEmail email={site.email} />
            </div>
            <ul className="flex gap-7 text-subtitle-s font-semibold">
              <li>
                <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${textLink} underline`}>
                  LinkedIn<span className="sr-only"> profile (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={site.xUrl} target="_blank" rel="noopener noreferrer" className={`${textLink} min-w-11 justify-center underline`}>
                  X<span className="sr-only"> profile (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col text-subtitle-s">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={textLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {site.resumeUrl && (
                <li>
                  <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                    Resume<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <p className="text-subtitle-s text-caption">{site.footerNote}</p>
      </Container>
    </footer>
  );
}
