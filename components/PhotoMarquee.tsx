"use client";

import Image from "next/image";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

// Figma 396:1988: two rows of photographs drifting slowly in opposite directions, on a loop. Each
// row is drawn twice and moved by half its length, so it never shows a seam. Inside the About card the rows keep the card's 28px padding and share its height (2026-11-04). Hover, keyboard focus
// and the button all stop it. Reduced motion gets the rows as a still, and no button.

type Photo = { src: string; alt: string; width: number };

function Row({ photos, reverse, seconds }: { photos: Photo[]; reverse?: boolean; seconds: number }) {
  return (
    <div className="h-37.5 overflow-hidden rounded-featured-media tablet:h-auto tablet:min-h-36 tablet:flex-1">
      <div className={`marquee flex h-full w-max ${reverse ? "marquee-reverse" : ""}`} style={{ animationDuration: `${seconds}s` }}>
        {[false, true].map((copy) =>
          photos.map((photo) => (
            <div
              key={`${photo.src}${copy}`}
              aria-hidden={copy || undefined}
              className="relative mr-3 h-full shrink-0 overflow-hidden rounded-featured-media"
              style={{ aspectRatio: `${photo.width} / 216` }}
            >
              <Image src={photo.src} alt={copy ? "" : photo.alt} fill sizes={`${photo.width}px`} loading="eager" className="object-cover" />
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export function PhotoMarquee({ rows }: { rows: Photo[][] }) {
  const [paused, setPaused] = useState(false);
  return (
    <div data-paused={paused || undefined} className="marquee-strip relative flex flex-col gap-3 tablet:flex-1 tablet:gap-4">
      <Row photos={rows[0]} seconds={80} />
      <Row photos={rows[1]} seconds={95} reverse />
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play the photos" : "Pause the photos"}
        className="absolute right-1 bottom-1 inline-flex size-11 cursor-pointer items-center justify-center rounded-pill text-on-inverse motion-reduce:hidden"
      >
        {/* 44px target, 28px visible disc, as on the video thumbnails. */}
        <span className="inline-flex size-7 items-center justify-center rounded-pill bg-surface-inverse/80">
          {paused ? <PlayIcon size={14} /> : <PauseIcon size={14} />}
        </span>
      </button>
    </div>
  );
}
