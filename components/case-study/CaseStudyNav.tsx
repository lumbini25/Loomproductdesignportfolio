"use client";

import { useEffect, useState } from "react";

// "Content" navigation for every case study. Below 834 it stays as it was: a wrapping list above
// the content. From 834 it is a sticky, opaque right sidebar, as on Lumbini's Framer case studies:
// muted items, Rust on hover (pointer devices only), the current section semibold in title colour
// with a Rust dot. The current section is the last one whose top
// has passed 35% of the viewport; an IntersectionObserver re-checks whenever a section crosses that
// line, and a scroll listener catches the page end and fast scrolls between crossings.
// `hideBelowTablet`: for studies that had no navigation on mobile (the full-width layout).
export function CaseStudyNav({
  label,
  items,
  hideBelowTablet,
}: {
  label: string;
  items: { id: string; label: string }[];
  hideBelowTablet?: boolean;
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map((it) => document.getElementById(it.id)?.closest("section") ?? document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.35;
        const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        let current = items[0].id;
        targets.forEach((el, i) => {
          if (el.getBoundingClientRect().top <= line) current = items[i].id;
        });
        setActive(atEnd ? items[items.length - 1].id : current);
      });
    };

    const io = new IntersectionObserver(update, { rootMargin: "-35% 0px -64% 0px" });
    targets.forEach((el) => io.observe(el));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav
      aria-label={label}
      className={`${hideBelowTablet ? "hidden tablet:block" : ""} tablet:sticky tablet:top-6 tablet:order-last tablet:w-44 tablet:shrink-0 tablet:self-start tablet:bg-surface tablet:py-2 desktop:w-30`}
    >
      <p className="font-serif text-caption-m font-medium uppercase text-accent">{label}</p>
      <ul className="flex flex-wrap gap-x-6 tablet:mt-2 tablet:flex-col">
        {items.map((item) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "location" : undefined}
                onClick={() => setActive(item.id)}
                className={`inline-flex min-h-11 min-w-11 items-center gap-2 text-subtitle-s text-title transition-colors duration-200 [@media(hover:hover)]:hover:text-accent ${on ? "tablet:font-semibold" : "tablet:text-caption"}`}
              >
                <span
                  aria-hidden="true"
                  className={`hidden size-1.5 shrink-0 rounded-pill bg-accent tablet:inline-block ${on ? "" : "tablet:invisible"}`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
