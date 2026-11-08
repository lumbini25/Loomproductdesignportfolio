import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { CardSequence } from "@/components/CardSequence";
import { Eyebrow } from "@/components/Eyebrow";
import { Tags } from "@/components/Tags";
import { VideoPlayer } from "@/components/VideoPlayer";
import type { Project } from "@/content/projects";

// Figma "Project card" (43:166), Default and Hover. The whole card is clickable through the
// button's stretched link. Figma "Project card states" (153:250): hover is a Primary subtle border
// (Lumbini, 2026-11-07), a warm shadow and the Primary button turns Rust 600; keyboard focus is a Title border with
// the button's rust focus ring. Always image over
// text. The image band is 366:200 (carmen-elena.space/work, Lumbini 2026-11-02). Bloom's thumbnail is
// centred and cropped to it. WTV's and Anewvista's have a flat background, so the whole thumbnail is
// scaled to the band's height with that colour filling the sides, and nothing is cropped (Lumbini,
// 2026-11-04: their tops were cut off).
// `FIT`: the card's slug, then the token class for its thumbnail's own background colour.
const FIT: Record<string, string> = {
  "wtv-consulting": "bg-thumb-wtv",
  anewvista: "bg-thumb-anewvista",
};
export function ProjectCard({ project }: { project: Project }) {
  const fitBg = FIT[project.slug];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-transparent bg-surface-subtle hover:border-primary-subtle hover:shadow-card-warm has-[:focus-visible]:border-title motion-safe:transition-[border-color,box-shadow]">
      {/* One wrapper zooms on hover, so an image and the recording laid over it move together. */}
      <div className={`relative aspect-[366/200] overflow-hidden rounded-card ${fitBg ?? ""}`}>
        <div className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.06]">
          {project.thumbnailVideo?.fill ? (
            // The recording is the whole thumbnail: rendered once, filling the frame. Clicks pass
            // through to the card link, except on the pause button.
            <div className="pointer-events-none h-full w-full [&_button]:pointer-events-auto">
              <VideoPlayer
                video={{ ...project.thumbnailVideo, autoplay: true }}
                className="h-full w-full"
                videoClassName="block h-full w-full object-cover object-top"
                compact
              />
            </div>
          ) : (
            // The image and its recording keep the thumbnail's own shape and crop together, so the
            // recording stays on the mockup's screen. The fitted box is 8% taller than the band, so the
            // image's baked rounded corners fall outside it, and its flat edge colour matches the band.
            <div
              className={
                fitBg
                  ? "absolute top-1/2 left-1/2 aspect-[416/303] h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                  : "absolute inset-x-0 top-1/2 aspect-[416/303] -translate-y-1/2"
              }
            >
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                width={project.thumbnail.width}
                height={project.thumbnail.height}
                sizes="(min-width: 1200px) 416px, (min-width: 834px) 50vw, 358px"
                className="h-full w-full object-cover"
              />
              {project.thumbnailVideo?.screen && (
                // The recording plays inside the mockup's screen (Anewvista's laptop).
                <div
                  className="pointer-events-none absolute z-10 overflow-hidden rounded-control [&_button]:pointer-events-auto"
                  style={{
                    left: `${project.thumbnailVideo.screen.left}%`,
                    top: `${project.thumbnailVideo.screen.top}%`,
                    width: `${project.thumbnailVideo.screen.width}%`,
                    height: `${project.thumbnailVideo.screen.height}%`,
                  }}
                >
                  <VideoPlayer
                    video={{ ...project.thumbnailVideo, autoplay: true }}
                    className="h-full w-full"
                    videoClassName="block h-full w-full object-cover object-top"
                    compact
                  />
                </div>
              )}
            </div>
          )}
          {project.sequence && (
            <CardSequence scenes={project.sequence} sizes="(min-width: 1200px) 416px, (min-width: 834px) 100vw, 358px" />
          )}
        </div>
      </div>
      {/* The same spacing as the featured card's text (FeaturedProject). */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-col gap-3">
          <Eyebrow>{project.eyebrow}</Eyebrow>
          <h4 className={`font-jakarta text-h3-mobile font-bold text-title tablet:text-title-s`}>
            {project.title}
          </h4>
          <p className="font-jakarta text-body-s text-caption">{project.descriptor}</p>
          <Tags items={project.tags} label={`Skills: ${project.title}`} />
        </div>
        <div className="mt-auto pt-6">
          <Link
            href={`/work/${project.slug}`}
            className={buttonClasses(
              "primary",
              "w-full after:absolute after:inset-0 group-hover:bg-primary-hover",
              false,
            )}
          >
            Read the case study<span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
