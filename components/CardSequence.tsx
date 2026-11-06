"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Scene } from "@/content/projects";

// A card's short film (after "Case study card animation.mov", Lumbini 2026-11-06): real screens
// from the case study play once over the thumbnail when the card first scrolls into view, then the
// film clears and the thumbnail rests. Pointing at the card plays it again. About 4 seconds, so it
// needs no pause control (WCAG 2.2.2). The layer is decorative (the thumbnail's alt text describes
// the card) and lets clicks through to the card link. Nothing is drawn under reduced motion or
// without JavaScript. The scenes load when the card is near the screen, so they are ready by the
// time it plays. Timing and transitions are `.card-film` in globals.css.
const AT = [0, 1, 2.1];

export function CardSequence({ scenes, sizes }: { scenes: Scene[]; sizes: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loaded" | "play" | undefined>(undefined);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState((s) => s ?? "loaded");
        near.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("play");
        seen.disconnect();
      },
      { threshold: 0.5 },
    );
    near.observe(el);
    seen.observe(el);
    // Pointing at the card replays the film, unless it is already playing.
    const card = el.closest("article");
    const replay = () => {
      if (el.dataset.film === "play") return;
      setRun((r) => r + 1);
      setState("play");
    };
    card?.addEventListener("pointerenter", replay);
    return () => {
      near.disconnect();
      seen.disconnect();
      card?.removeEventListener("pointerenter", replay);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" data-film={state} className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* A new key on each replay restarts every animation inside. */}
      {state && (
        <div
          key={run}
          onAnimationEnd={(e) => {
            if (e.target === e.currentTarget) setState("loaded");
          }}
          className="card-film absolute inset-0"
        >
        {scenes.map((scene, i) => (
          <div
            key={i}
            style={{ "--at": `${AT[i] ?? i}s` } as React.CSSProperties}
            className={`card-scene card-scene-${scene.kind} absolute inset-0 overflow-hidden ${
              scene.kind === "fan"
                ? `flex items-center justify-center gap-[3%] ${scene.surface === "inverse" ? "bg-surface-inverse" : "bg-surface-subtle"}`
                : "bg-surface-subtle"
            }`}
          >
            {scene.kind === "fan" ? (
              // Phone screens are sized by the frame's height, desktop screens by its width, so
              // three of either fit side by side.
              scene.images.map((img, j) => (
                <div
                  key={img.src}
                  style={{ "--i": j - (scene.images.length - 1) / 2 } as React.CSSProperties}
                  className={`card-tile relative shrink-0 overflow-hidden rounded-control shadow-card-warm ${
                    img.height > 1.5 * img.width ? "aspect-[9/19] h-[82%]" : "aspect-square w-[29%]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={img.width}
                    height={img.height}
                    sizes="200px"
                    loading="eager"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))
            ) : (
              <Image
                src={scene.images[0].src}
                alt=""
                width={scene.images[0].width}
                height={scene.images[0].height}
                sizes={sizes}
                loading="eager"
                style={{ objectPosition: scene.position }}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ))}
        </div>
      )}
    </div>
  );
}
