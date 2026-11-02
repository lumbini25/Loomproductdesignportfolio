"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import type { Video } from "@/content/case-studies/types";

// Autoplay only where the register in platform-constraints.md says Yes: always muted, looping,
// with a poster and a visible pause button. Reduced motion gets the poster and a play button.
// Autoplaying video also pauses while it is off screen. Everything else is click to play, with
// its own sound (only the Bloom demo film has a soundtrack).
// `className` styles the frame (radius, size); `videoClassName` places the video inside it.
// `compact`: an icon-only pause button for small frames such as card thumbnails (still 44px).
export function VideoPlayer({
  video,
  className = "rounded-card",
  videoClassName = "block h-auto w-full",
  compact,
}: {
  video: Video;
  className?: string;
  videoClassName?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const descId = useId();
  const [playing, setPlaying] = useState(false);
  // Set only by the button, so scrolling a paused video back into view keeps it paused.
  const userPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !video.autoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused.current) el.play().catch(() => {});
      if (!entry.isIntersecting) el.pause();
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.pause();
    };
  }, [video.autoplay]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    userPaused.current = !el.paused;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const media = (
    <video
      ref={ref}
      width={video.width}
      height={video.height}
      poster={video.poster}
      muted={video.autoplay}
      loop={video.autoplay}
      playsInline
      preload="metadata"
      controls={!video.autoplay}
      aria-describedby={descId}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      className={`${video.mask ? "" : "bg-surface-subtle"} ${videoClassName}`}
      style={
        video.mask
          ? { maskImage: `url(${video.mask})`, WebkitMaskImage: `url(${video.mask})`, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }
          : undefined
      }
    >
      <source src={video.src} type="video/mp4" />
      {video.description}
    </video>
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {media}
      <p id={descId} className="sr-only">
        {video.description}
      </p>
      {video.autoplay && (
        <button
          type="button"
          onClick={toggle}
          className={
            compact
              ? "absolute right-1 bottom-1 inline-flex size-11 items-center justify-center rounded-pill text-on-inverse"
              : "absolute bottom-3 left-3 inline-flex min-h-11 items-center gap-2 rounded-pill bg-surface-inverse px-4 text-body-s font-semibold text-on-inverse hover:bg-surface-inverse-hover"
          }
        >
          {compact ? (
            // 44px target, 28px visible disc so it doesn't cover the recording.
            <span className="inline-flex size-7 items-center justify-center rounded-pill bg-surface-inverse/80">
              {playing ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
            </span>
          ) : playing ? (
            <PauseIcon size={18} />
          ) : (
            <PlayIcon size={18} />
          )}
          {compact ? <span className="sr-only">{playing ? "Pause" : "Play"}</span> : playing ? "Pause" : "Play"}
          <span className="sr-only"> video</span>
        </button>
      )}
    </div>
  );
}
