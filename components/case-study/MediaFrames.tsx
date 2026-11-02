import type { CSSProperties, ReactNode } from "react";

// Case-study media wrappers. Every image and video in a case study sits in one of these, so no
// visual renders larger than its frame allows.
//   PhoneFrame  portrait media: equal columns in one row at every width, never scrolling
//               (.phone-frame in globals.css). Each item centred, at most min(80vh, 720px) tall.
//   WideFigure  landscape media and diagrams: at most 1100px wide, centred.
//   HeroMedia   the lead visual: 16:9, at most 70vh tall, centred.

const PHONE_MAX_H = "min(80vh, 720px)";
const PHONE_MAX_H_PX = 720;

// Treat anything at least as tall as it is wide as portrait.
export const isPortrait = (m: { width: number; height: number }) => m.height >= m.width;

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`phone-frame ${className}`}>{children}</div>;
}

// Box for one portrait item: keeps the media's ratio and caps its height, never wider than its cell.
export function phoneBox(m: { width: number; height: number }): CSSProperties {
  const r = m.width / m.height;
  return { width: `min(100%, calc(${PHONE_MAX_H} * ${r.toFixed(4)}))`, aspectRatio: `${m.width} / ${m.height}` };
}

// next/image `sizes` for a portrait item: its capped width from 834 up, the column below.
export function phoneSizes(m: { width: number; height: number }) {
  const w = Math.round((PHONE_MAX_H_PX * m.width) / m.height);
  return `(min-width: 834px) ${w}px, min(calc(100vw - 32px), ${w}px)`;
}

export function WideFigure({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1100px] ${className}`}>{children}</div>;
}

// next/image `sizes` inside a WideFigure with 1, 2 or 3 columns (gutters 16 / 32 / 64, gap 24).
export const wideSizes: Record<number, string> = {
  1: "(min-width: 1200px) 1100px, (min-width: 834px) calc(100vw - 64px), calc(100vw - 32px)",
  2: "(min-width: 1200px) 538px, (min-width: 834px) calc(50vw - 44px), calc(100vw - 32px)",
  3: "(min-width: 1200px) 351px, (min-width: 834px) calc(33vw - 37px), calc(100vw - 32px)",
};

export function HeroMedia({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto aspect-video w-full max-w-[calc(70vh*16/9)] overflow-hidden rounded-card ${className}`}>
      {children}
    </div>
  );
}

export const heroSizes = "(min-width: 1200px) 1100px, calc(100vw - 32px)";
