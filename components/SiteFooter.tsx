import Link from "next/link";
import { Container } from "@/components/Container";
import { CopyEmail } from "@/components/CopyEmail";
import { contact, nav, site } from "@/content/site";

// Figma "footer" (103:3062); below 834, 338:1644. The nav Contact button jumps to the contact block.
export function SiteFooter() {
  const textLink = "inline-flex min-h-11 items-center hover:text-accent motion-safe:transition-colors";

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-subtle pb-[calc(env(safe-area-inset-bottom)+24px)] pt-6 tablet:pb-[calc(env(safe-area-inset-bottom)+48px)] tablet:pt-18"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex items-start justify-between gap-8 tablet:gap-10">
          <div className="flex min-w-0 flex-col gap-5">
            <h2 id="contact-heading" className="font-jakarta text-h1-mobile font-bold tablet:font-sans tablet:text-display tablet:font-extrabold">
              {contact.heading}
            </h2>
            <div className="flex flex-col items-start gap-4 tablet:flex-row tablet:items-center">
              <p className="font-dm text-mobile-body-1 break-all tablet:font-sans tablet:font-semibold tablet:text-title-xs">{site.email}</p>
              <CopyEmail email={site.email} />
            </div>
            <ul className="flex gap-7 font-dm text-body-semibold-s font-semibold tablet:font-sans tablet:text-subtitle-s">
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
            <ul className="flex flex-col font-dm text-mobile-body-1 whitespace-nowrap tablet:font-sans tablet:text-subtitle-s">
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
        <p className="font-jakarta text-mobile-caption font-semibold text-caption tablet:font-sans tablet:text-subtitle-s tablet:font-normal">{site.footerNote}</p>
      </Container>
    </footer>
  );
}
