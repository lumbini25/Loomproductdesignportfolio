"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

// Bloom's interview quotes (Figma 211:1257), one speech bubble and its participant's photo at a time
// (Lumbini, 2026-11-03). Previous and Next flank the quote and stay put; three dots below show the
// position and jump to a quote. The track also swipes and takes arrow keys once focused. Every slide
// is as tall as the tallest, so the arrows and dots never move. Reduced motion jumps instead of gliding.
export function QuoteCarousel({ items, label }: { items: { quote: string; photo: string }[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (to: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(items.length - 1, to));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    setIndex(next);
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const arrow =
    "inline-flex size-11 shrink-0 items-center justify-center rounded-pill border border-line bg-surface text-title shadow-card hover:bg-surface-subtle disabled:opacity-40 disabled:shadow-none disabled:hover:bg-surface";

  return (
    <section aria-roledescription="carousel" aria-label={label} className="mx-auto flex w-full max-w-[880px] flex-col gap-6">
      <div className="flex items-center gap-2 tablet:gap-4">
        <button type="button" className={arrow} onClick={() => go(index - 1)} disabled={index === 0}>
          <ArrowLeftIcon size={18} />
          <span className="sr-only">Previous quote</span>
        </button>

        <div
          ref={track}
          onScroll={onScroll}
          tabIndex={0}
          role="group"
          aria-label={`${label}: scroll or use the buttons`}
          className="flex min-w-0 flex-1 snap-x snap-mandatory items-stretch overflow-x-auto rounded-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <figure
              key={item.photo}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              aria-hidden={i !== index}
              className="flex w-full shrink-0 snap-center flex-col px-1 pt-1 pb-2"
            >
              <blockquote className="relative flex flex-1 items-center rounded-card bg-secondary px-5 py-6 text-body-m text-on-inverse shadow-card tablet:px-10 tablet:py-9">
                <p>{item.quote}</p>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-8 size-5 rotate-45 rounded-tag bg-secondary tablet:left-12"
                />
              </blockquote>
              <Image
                src={item.photo}
                alt=""
                width={112}
                height={112}
                className="mt-5 ml-5 size-14 rounded-pill object-cover ring-4 ring-surface tablet:ml-9"
              />
            </figure>
          ))}
        </div>

        <button type="button" className={arrow} onClick={() => go(index + 1)} disabled={index === items.length - 1}>
          <ArrowRightIcon size={18} />
          <span className="sr-only">Next quote</span>
        </button>
      </div>

      <div className="flex items-center justify-center">
        {items.map((item, i) => (
          <button
            key={item.photo}
            type="button"
            onClick={() => go(i)}
            aria-current={i === index ? "true" : undefined}
            className="inline-flex size-11 items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-pill motion-safe:transition-all motion-safe:duration-200 ${i === index ? "w-6 bg-secondary" : "w-2 bg-line"}`}
            />
            <span className="sr-only">Quote {i + 1}</span>
          </button>
        ))}
        <p aria-live="polite" className="sr-only">
          Quote {index + 1} of {items.length}
        </p>
      </div>
    </section>
  );
}
