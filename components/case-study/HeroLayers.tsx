"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import type { HeroLayer } from "@/content/case-studies/types";

// Bloom's hero (Figma 319:1009): each screen is its own layer at its Figma position on a 901x600
// stage. Every screen slides in from the right, staggered, then floats a few pixels in a slow loop,
// each on its own timing, the motion studied on bobbyiscreative.com/work/venue (Lumbini, 2026-11-03).
// The stage crops the screens at the frame's edges, as Figma does. The loop can be paused
// (WCAG 2.2.2); with reduced motion nothing moves and the pause button is hidden.
export function HeroLayers({ layers, alt, className = "" }: { layers: HeroLayer[]; alt: string; className?: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`hero-layers relative aspect-[901/600] overflow-hidden ${paused ? "is-paused" : ""} ${className}`}>
      <div role="img" aria-label={alt} className="absolute inset-0">
        {layers.map((l, i) => (
          <div
            key={l.src}
            className={l.still ? "absolute" : "hero-layer absolute"}
            style={
              {
                left: `${(l.x / 901) * 100}%`,
                top: `${(l.y / 600) * 100}%`,
                width: `${(l.w / 901) * 100}%`,
                height: `${(l.h / 600) * 100}%`,
                zIndex: i,
                "--d": `${(i - 1) * 110}ms`,
                "--float": `${l.float ?? -8}px`,
                "--dur": `${4.2 + (i % 3) * 0.6}s`,
              } as CSSProperties
            }
          >
            <Image src={l.src} alt="" fill sizes="(min-width: 1200px) 600px, 60vw" preload className="object-contain" />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="absolute right-2 bottom-2 z-20 inline-flex size-11 items-center justify-center rounded-pill motion-reduce:hidden"
      >
        <span className="inline-flex size-7 items-center justify-center rounded-pill bg-surface-inverse/80 text-on-inverse">
          {paused ? <PlayIcon size={14} /> : <PauseIcon size={14} />}
        </span>
        <span className="sr-only">{paused ? "Play" : "Pause"} the floating screens</span>
      </button>
    </div>
  );
}
