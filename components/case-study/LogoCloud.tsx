"use client";

import Image from "next/image";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

// WTV's ideation logo cloud, rebuilt from the Framer page /wtv-2 (frame ncgD5_cXB, 327x390;
// its logos run below the frame, to y 464). Positions, sizes and radii are Framer's. The motion is
// Framer's loop effect on every layer: one full turn in 1s (linear), then a 0.8s pause, repeating
// (.logo-spin in globals.css). Layers nested in a white circle turn with it as well, as on Framer.
// Reduced motion shows it still; the Pause button stops it for everyone else (WCAG 2.2.2).

const dir = "/case-studies/wtv/logos";

type Inner = { src: string; size: number; left?: number; top: number; radius: number };
type Item = {
  left: number;
  top: number;
  w: number;
  h: number;
  radius?: number;
  white?: boolean; // a white circle behind the logo
  src?: string; // the item is the logo itself
  inner?: Inner; // the logo sits inside the item
  ring?: { size: number; left: number; top: number; inner: Inner }; // a white circle inside the item
};

const items: Item[] = [
  { left: 263, top: 268, w: 34, h: 34, radius: 44, white: true, inner: { src: "chatgpt.webp", size: 26, top: 4, radius: 3 } },
  { left: 195, top: 216, w: 46, h: 46, radius: 44, white: true, inner: { src: "gemini.webp", size: 34, top: 6, radius: 3 } },
  { left: 24, top: 315, w: 41, h: 41, radius: 44, src: "gemini.webp" },
  { left: 247, top: 304, w: 44, h: 44, radius: 44, src: "gemini.webp" },
  { left: 214, top: 263, w: 33, h: 33, radius: 44, src: "gemini.webp" },
  { left: 21, top: 276, w: 33, h: 33, radius: 44, src: "figma.png" },
  { left: 218, top: 337, w: 46, h: 46, radius: 44, src: "claude.png" },
  { left: 172, top: 304, w: 46, h: 46, radius: 44, src: "figma.png" },
  { left: 24, top: 230, w: 41, h: 41, radius: 44, src: "chatgpt.webp" },
  { left: 182, top: 358, w: 39, h: 39, radius: 44, src: "chatgpt.webp" },
  { left: 42, top: 189, w: 45, h: 45, radius: 44, src: "claude.png" },
  { left: 139, top: 359, w: 38, h: 38, radius: 44, src: "figma.png" },
  { left: 100, top: 267, w: 81, h: 76, inner: { src: "chatgpt.webp", size: 42, top: 15, radius: 44 } },
  { left: 74, top: 160, w: 45, h: 45, radius: 50, src: "figma.png" },
  { left: 97, top: 336, w: 45, h: 45, radius: 50, src: "gemini.webp" },
  { left: 110, top: 224, w: 82, h: 85, inner: { src: "claude.png", size: 45, left: 20, top: 19, radius: 50 } },
  { left: 117, top: 146, w: 39, h: 39, radius: 50, src: "chatgpt.webp" },
  { left: 73, top: 303, w: 43, h: 43, radius: 50, src: "figma.png" },
  { left: 186, top: 386, w: 72, h: 78, inner: { src: "tool-a.png", size: 40, left: 14, top: 19, radius: 40 } },
  { left: 178, top: 151, w: 44, h: 44, radius: 44, white: true, inner: { src: "gemini.webp", size: 42, left: 0, top: 0, radius: 3 } },
  { left: 82, top: 219, w: 45, h: 45, radius: 44, white: true, inner: { src: "gemini.webp", size: 34, top: 6, radius: 3 } },
  { left: 151, top: 398, w: 57, h: 65, ring: { size: 33, left: 10, top: 16, inner: { src: "tool-b.png", size: 25, top: 4, radius: 3 } } },
  { left: 231, top: 181, w: 46, h: 46, radius: 44, white: true, inner: { src: "chatgpt.webp", size: 34, top: 6, radius: 3 } },
  { left: 119, top: 196, w: 42, h: 42, radius: 44, white: true, inner: { src: "gemini.webp", size: 32, top: 5, radius: 3 } },
  { left: 100, top: 385, w: 73, h: 78, ring: { size: 41, left: 14, top: 18, inner: { src: "tool-c.png", size: 31, top: 5, radius: 3 } } },
  { left: 255, top: 221, w: 41, h: 41, radius: 40, src: "claude.png" },
  { left: 163, top: 196, w: 39, h: 39, radius: 40, src: "claude.png" },
  { left: 73, top: 381, w: 45, h: 45, radius: 40, src: "javascript.png" },
];

function Logo({ src, size, radius, style, spin }: { src: string; size: number; radius: number; style?: React.CSSProperties; spin?: boolean }) {
  return (
    <Image
      src={`${dir}/${src}`}
      alt=""
      width={size}
      height={size}
      sizes={`${size}px`}
      className={`absolute object-cover ${spin ? "logo-spin" : ""}`}
      style={{ width: size, height: size, borderRadius: radius, ...style }}
    />
  );
}

// An inner logo is centred horizontally unless Framer gives it a left offset.
const innerStyle = (box: number, i: Inner): React.CSSProperties => ({
  left: i.left ?? (box - i.size) / 2,
  top: i.top,
});

export function LogoCloud({ label }: { label: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="relative w-[327px] max-w-full shrink-0">
      <div
        role="img"
        aria-label={label}
        data-paused={paused || undefined}
        className="relative h-[464px] w-[327px] max-w-full overflow-hidden rounded-control bg-surface"
      >
        {items.map((it, k) => (
          <div
            key={k}
            className="logo-spin absolute"
            style={{
              left: it.left,
              top: it.top,
              width: it.w,
              height: it.h,
              borderRadius: it.radius,
              background: it.white ? "var(--color-surface)" : undefined,
            }}
          >
            {it.src && <Logo src={it.src} size={it.w} radius={it.radius ?? 0} style={{ left: 0, top: 0 }} />}
            {it.inner && <Logo {...it.inner} style={innerStyle(it.w, it.inner)} spin />}
            {it.ring && (
              <div
                className="logo-spin absolute rounded-pill bg-surface"
                style={{ left: it.ring.left, top: it.ring.top, width: it.ring.size, height: it.ring.size }}
              >
                <Logo {...it.ring.inner} style={innerStyle(it.ring.size, it.ring.inner)} spin />
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-pill bg-surface-inverse px-4 text-body-s font-semibold text-on-inverse hover:bg-surface-inverse-hover motion-reduce:hidden"
      >
        {paused ? <PlayIcon size={18} /> : <PauseIcon size={18} />}
        {paused ? "Play" : "Pause"}
        <span className="sr-only"> animation</span>
      </button>
    </div>
  );
}
