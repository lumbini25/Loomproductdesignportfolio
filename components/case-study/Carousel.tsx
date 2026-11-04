"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import type { Img } from "@/content/case-studies/types";

// Desktop screens one at a time: a scroll-snap track (swipe, trackpad or arrow keys once focused)
// plus Previous and Next buttons and a counter. Reduced motion jumps instead of gliding.
// With `frame` (a width/height ratio), every slide fills that frame from the top at the full
// track width, with no mat, so all screens show at one width (WTV, as on Framer).
export function Carousel({ images, label, frame }: { images: Img[]; label: string; frame?: number }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (to: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(images.length - 1, to));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    setIndex(next);
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const button =
    "inline-flex size-11 items-center justify-center rounded-pill border border-line bg-surface text-title hover:bg-surface-subtle disabled:opacity-40 disabled:hover:bg-surface";

  return (
    <section aria-roledescription="carousel" aria-label={label} className={frame ? "mx-auto w-full max-w-[900px]" : "rounded-card bg-surface-subtle p-4 tablet:p-6"}>
      <div
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        role="group"
        aria-label={`${label}: scroll or use the buttons below`}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-media [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
            className={
              frame
                ? "w-full shrink-0 snap-center overflow-hidden rounded-media border border-line"
                : "flex h-[min(56vh,400px)] w-full shrink-0 snap-center items-center justify-center tablet:h-[min(64vh,600px)]"
            }
            style={frame ? { aspectRatio: frame } : undefined}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1200px) 1100px, (min-width: 834px) calc(100vw - 64px), calc(100vw - 32px)"
              className={
                frame
                  ? "h-full w-full object-cover object-top"
                  : "h-auto max-h-full w-auto max-w-full rounded-media border border-line"
              }
            />
          </figure>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button type="button" className={button} onClick={() => go(index - 1)} disabled={index === 0}>
          <ArrowLeftIcon size={18} />
          <span className="sr-only">Previous screen</span>
        </button>
        <p aria-live="polite" className="caption min-w-0 flex-1 font-jakarta text-body-s text-caption">
          <span className="font-serif text-caption-m font-medium text-title">
            {index + 1} / {images.length}
          </span>
          {images[index]?.caption && (
            <span className="ml-3">
              {/* **bold** in a caption, as in Blocks' Rich. */}
              {images[index].caption!.split(/\*\*(.+?)\*\*/g).map((part, i) =>
                i % 2 ? <strong key={i} className="font-semibold text-title">{part}</strong> : part,
              )}
            </span>
          )}
        </p>
        <button type="button" className={button} onClick={() => go(index + 1)} disabled={index === images.length - 1}>
          <ArrowRightIcon size={18} />
          <span className="sr-only">Next screen</span>
        </button>
      </div>
    </section>
  );
}
