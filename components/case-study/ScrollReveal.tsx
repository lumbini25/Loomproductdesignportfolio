"use client";

import { useEffect } from "react";

// Carmen's Pilgrimz entrance effects for a page: elements marked `.reveal` start 30px low and
// transparent and slide up as they enter; `.reveal-zoom` images settle from 108% to 100%.
// The CSS lives in globals.css and only applies with motion allowed and JS running, so content
// is never hidden for anyone else.
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-on");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-zoom").forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);
  return null;
}
