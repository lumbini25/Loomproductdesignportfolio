"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Three sketches as one stack of photographs (Figma 393:2354; size 103:2972). The top card is
// thrown up and to the left once on landing, and again on each click, tap, Enter or Space: it
// lifts, spins out of the stack, then drops back underneath as the bottom card, so all three stay
// visible and the stack never runs out. The cards below step forward as it leaves. Reduced motion
// skips the landing throw, and a press swaps the order at once. Transforms never affect layout.

// Rest position of each place in the stack: 0 is the top card.
const places = [
  "translate(0%, 0%) rotate(0deg)",
  "translate(4%, 1.5%) rotate(4deg)",
  "translate(-3.5%, 2.5%) rotate(-5deg)",
];

const throwMs = 900;
const landingDelayMs = 700;

export function PhotoStack({ photos }: { photos: { src: string; alt: string }[] }) {
  const [order, setOrder] = useState(photos.map((_, i) => i));
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const busy = useRef(false);
  const landed = useRef(false);

  const throwTop = useCallback(() => {
    landed.current = true;
    if (busy.current) return;
    const top = order[0];
    const next = [...order.slice(1), top];
    const el = cards.current[top];
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOrder(next);
      return;
    }
    busy.current = true;
    // The card flies out on top, then goes under the stack on its way back to the bottom place.
    const flight = el.animate(
      [
        { transform: places[0], zIndex: 5, easing: "ease-out" },
        { transform: "translate(-4%, -6%) rotate(-3deg) scale(1.03)", zIndex: 5, offset: 0.14, easing: "cubic-bezier(0.25, 0.7, 0.3, 1)" },
        { transform: "translate(-66%, -13%) rotate(-15deg) scale(1.02)", zIndex: 5, offset: 0.52, easing: "steps(1, end)" },
        { transform: "translate(-66%, -13%) rotate(-15deg) scale(1.02)", zIndex: 0, offset: 0.54, easing: "cubic-bezier(0.45, 0, 0.2, 1)" },
        { transform: places[2], zIndex: 0 },
      ],
      { duration: throwMs },
    );
    flight.onfinish = flight.oncancel = () => {
      busy.current = false;
    };
    setOrder(next);
  }, [order]);

  // Thrown once when the page lands; `landed` stops it repeating, or following an early press.
  useEffect(() => {
    if (landed.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(throwTop, landingDelayMs);
    return () => window.clearTimeout(t);
  }, [throwTop]);

  return (
    <div className="relative aspect-[340/360] w-[min(28vw,200px)] shrink-0 tablet:w-60 desktop:w-85">
      {photos.map((photo, i) => {
        const place = order.indexOf(i);
        return (
          <div
            key={photo.src}
            ref={(el) => {
              cards.current[i] = el;
            }}
            data-place={place}
            className="absolute inset-0 overflow-hidden rounded-media shadow-card-warm motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
            style={{ transform: places[place], zIndex: photos.length - place }}
          >
            <Image
              src={photo.src}
              alt={place === 0 ? photo.alt : ""}
              fill
              sizes="(min-width: 1200px) 340px, (min-width: 834px) 240px, 200px"
              preload
              className="object-cover"
            />
          </div>
        );
      })}
      {/* One button over the stack, so keyboard focus stays put as the cards change. */}
      <button
        type="button"
        onClick={throwTop}
        aria-label="Show the next sketch"
        className="absolute inset-0 z-10 cursor-pointer rounded-media"
      />
    </div>
  );
}
