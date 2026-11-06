"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Starts a block's pen-drawing sequence when it scrolls into view. The server renders everything
// finished; once the browser is ready the block is armed (rings and cards hidden) and, when about a
// quarter of it is on screen, drawn (globals.css `.pen-ring` and `.pen-card`, with their own delays).
// Reduced motion leaves everything finished, and so does a browser without JavaScript.
export function DrawOnView({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"armed" | "drawn" | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("drawn");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-pen={state} className={className}>
      {children}
    </div>
  );
}
