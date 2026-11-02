"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Img } from "@/content/case-studies/types";

// Carmen's Learn.xyz banner (studied 2026-10-29): a photo across the full window width, one screen
// tall from 1200 (16:9 below), clipped, no corners. While it crosses the screen it scales from
// 1.05 down to 1 at the top and slides against the scroll, about 50px. The block sits inside the
// content column, so it measures its own left edge and pulls itself out to the window's edges.
// Reduced motion keeps it still.

export function ScrollBanner({ image }: { image: Img }) {
  const outer = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const fit = () => {
      el.style.marginLeft = "0px";
      const left = el.getBoundingClientRect().left;
      el.style.width = `${document.documentElement.clientWidth}px`;
      el.style.marginLeft = `${-left}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = outer.current;
    const inner = layer.current;
    if (!el || !inner || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // -1 when the banner's top is a screen below the top of the viewport, 0 at the top, then
      // positive as it scrolls away.
      const p = Math.max(-1, Math.min(1, el.getBoundingClientRect().top / -window.innerHeight));
      inner.style.transform = `translateY(${p * 50}px) scale(${1 + 0.05 * Math.abs(p)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={outer} className="relative z-10 aspect-video overflow-hidden desktop:aspect-auto desktop:h-[min(100svh,900px)]">
      <div ref={layer} className="absolute inset-0 will-change-transform">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
