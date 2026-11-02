"use client";

import { useId, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

// Bloom's Framer "Full process" panel: a blue banner that opens and closes the full process
// sections under it. Open at first, as on Framer (its default variant is "Open"). The arrow points
// up while open and down while closed. Closed content is inert, so keyboard focus skips it.
// Reduced motion opens and closes without the height transition.
export function ProcessAccordion({ id, label, title, children }: { id?: string; label: string; title: string; children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const panel = useId();
  return (
    <section id={id} aria-label={label} className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panel}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-col items-start gap-3 rounded-card bg-secondary px-6 py-10 text-left text-on-inverse hover:bg-secondary-strong motion-safe:transition-colors tablet:px-10 tablet:py-16"
      >
        <span className="font-serif text-caption-m font-medium uppercase">{label}</span>
        <span className="flex items-center gap-6 text-title-m font-bold tablet:text-h3">
          {title}
          <ArrowRightIcon
            size={36}
            className={`shrink-0 motion-safe:transition-transform motion-safe:duration-300 ${open ? "-rotate-90" : "rotate-90"}`}
          />
        </span>
      </button>
      <div
        id={panel}
        role="region"
        aria-label={title}
        className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <div className="flex flex-col gap-16 pt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
