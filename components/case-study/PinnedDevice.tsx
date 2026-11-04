"use client";

import { useEffect, useRef, useState } from "react";
import type { Video } from "@/content/case-studies/types";

// Carmen's Pilgrimz pattern (studied 2026-10-28): from 834 up, a device card on the left pins
// 140px from the top while numbered steps scroll past on the right; the step nearest the middle
// of the screen is active and the device plays its recording (cross-fade). After the last step
// the card scrolls away with the page. Below 834 nothing pins: each step shows its own recording.
// Recordings are muted and loop, and only the active one plays; reduced motion shows posters.
// The recordings have white backgrounds; multiply blending drops the white into the card colour,
// so only the device shows (2026-10-28).

type Step = { title: string; body?: string; video: Video };

// `active` plays the recording. `shown` is whether it is visible: the pinned card shows only the active one,
// but below 834 every step has its own card, which must show its poster even before it plays.
function Screen({ video, active, shown = active }: { video: Video; active: boolean; shown?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && !still) el.play().catch(() => {});
    else el.pause();
  }, [active]);
  return (
    <video
      ref={ref}
      poster={video.poster}
      muted
      loop
      playsInline
      preload={active ? "auto" : "metadata"}
      aria-hidden={!shown}
      className={`absolute inset-0 h-full w-full object-contain mix-blend-multiply motion-safe:transition-opacity motion-safe:duration-500 ${shown ? "opacity-100" : "opacity-0"}`}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}

export function PinnedDevice({ device, steps }: { device: "phone" | "watch"; steps: Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
      },
      // A thin band across the middle of the screen: the step crossing it becomes active.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const ratio = device === "phone" ? "aspect-[9/19]" : "aspect-[4/5]";
  // In the pinned card the device is sized by the card's height, so it always sits inside the
  // card even when the card is capped to a short screen (2026-10-29: the phone ran past it).
  const pinnedSize = device === "phone" ? "h-[88%] max-w-[62%]" : "h-[76%] max-w-[60%]";
  const deviceWidth = device === "phone" ? "w-[min(62%,300px)]" : "w-[min(60%,280px)]";

  return (
    <div className="grid grid-cols-1 gap-10 tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tablet:gap-12">
      {/* Pinned card, from 834 up. */}
      <div className="hidden tablet:block">
        {/* Capped to the screen below the 140px pin line, so it fits a laptop screen whole. */}
        <div className="sticky top-[140px] flex aspect-[540/640] max-h-[calc(100svh-180px)] w-full items-center justify-center rounded-card bg-surface-sky">
          <div className={`relative ${ratio} ${pinnedSize}`}>
            {steps.map((s, i) => (
              <Screen key={s.video.src} video={s.video} active={i === active} />
            ))}
          </div>
        </div>
      </div>

      {/* The bottom padding keeps the card pinned while the last step sits mid-screen. */}
      <ol className="flex flex-col gap-16 tablet:gap-[45vh] tablet:pt-[20vh] tablet:pb-[45vh]">
        {steps.map((s, i) => (
          <li
            key={s.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-step={i}
            className="flex flex-col gap-4"
          >
            {/* Below 834 every step carries its own recording. */}
            <div className="flex justify-center rounded-card bg-surface-sky p-6 tablet:hidden">
              <div className={`relative ${ratio} ${deviceWidth}`}>
                <Screen video={s.video} active={i === active} shown />
              </div>
            </div>
            <span
              aria-hidden="true"
              className={`flex size-10 items-center justify-center rounded-pill text-title-s font-bold text-on-inverse motion-safe:transition-colors ${i === active ? "bg-primary" : "bg-caption"}`}
            >
              {i + 1}
            </span>
            <h3 className="text-title-s font-bold text-title">{s.title}</h3>
            {s.body && <p className="text-body-m text-body">{s.body}</p>}
            <p className="sr-only">{s.video.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
