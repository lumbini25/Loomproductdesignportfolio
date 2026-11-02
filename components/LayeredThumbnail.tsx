import Image from "next/image";
import type { CSSProperties } from "react";
import type { ThumbnailLayers } from "@/content/projects";

// Sierra Hopkins' mobile thumbnails (sierrahopkins.com, studied 2026-10-29): the phones stand
// angled in 3D at rest and ease straight on hover, the side ones fanning out. Built from the Figma
// thumbnail's own layers, positioned in its frame's coordinates, so at rest it matches the frame.
// The phones sit on a stage locked to the frame's shape, centred, so they never stretch when the
// card stretches the image (from 834); the background covers the rest. Hover and keyboard focus on
// the card play it; without motion the change is instant.
export function LayeredThumbnail({ layers, alt, sizes, preload }: { layers: ThumbnailLayers; alt: string; sizes: string; preload?: boolean }) {
  const { frame } = layers;
  const ratio = `${frame.width} / ${frame.height}`;
  return (
    <div role="img" aria-label={alt} className="relative w-full overflow-hidden tablet:h-full" style={{ aspectRatio: ratio }}>
      <Image src={layers.background} alt="" fill sizes={sizes} preload={preload} className="object-cover" />
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 [perspective:1200px]" style={{ aspectRatio: ratio }}>
        {layers.phones.map((p) => (
          <div
            key={p.src}
            className="absolute overflow-hidden shadow-mockup [transform:var(--rest)] group-hover:[transform:var(--hover)] group-has-[:focus-visible]:[transform:var(--hover)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={
              {
                left: `${(p.x / frame.width) * 100}%`,
                top: `${(p.y / frame.height) * 100}%`,
                width: `${(p.width / frame.width) * 100}%`,
                height: `${(p.height / frame.height) * 100}%`,
                borderRadius: `${(p.radius / p.width) * 100}% / ${(p.radius / p.height) * 100}%`,
                zIndex: p.z,
                "--rest": p.rest,
                "--hover": p.hover,
              } as CSSProperties
            }
          >
            <Image src={p.src} alt="" fill sizes={sizes} preload={preload} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
