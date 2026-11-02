import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Tags } from "@/components/Tags";
import { VideoPlayer } from "@/components/VideoPlayer";
import type { Project } from "@/content/projects";

// Figma "Project card" (43:166), Default and Hover. The whole card is clickable through the
// button's stretched link; keyboard focus gets the same blue treatment as hover. Always image over
// text. The thumbnail is exported at the frame's exact 416x303, so it is never cropped.
export function ProjectCard({ project }: { project: Project }) {
  const hover = "group-hover:text-secondary group-has-[:focus-visible]:text-secondary";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-transparent bg-surface-subtle hover:border-secondary hover:shadow-card-hover has-[:focus-visible]:border-secondary motion-safe:transition-[border-color,box-shadow]">
      {/* One wrapper zooms on hover, so an image and the recording laid over it move together. */}
      <div className="relative aspect-[416/303] overflow-hidden rounded-card">
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
            <>
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                width={project.thumbnail.width}
                height={project.thumbnail.height}
                sizes="(min-width: 1200px) 416px, (min-width: 834px) 250px, 358px"
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
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6 tablet:px-4 desktop:px-6">
        <div className="flex flex-col gap-2.5">
          <Eyebrow>{project.eyebrow}</Eyebrow>
          <h3 className={`text-h3-mobile font-bold text-title motion-safe:transition-colors max-tablet:font-jakarta tablet:text-title-s ${hover}`}>
            {project.title}
          </h3>
          <p className="font-jakarta text-body-s text-caption">{project.descriptor}</p>
          <Tags items={project.tags} label={`Skills: ${project.title}`} />
        </div>
        <div className="mt-auto pt-5">
          <Link
            href={`/work/${project.slug}`}
            className={buttonClasses(
              "secondary",
              "w-full after:absolute after:inset-0 group-hover:bg-secondary group-has-[:focus-visible]:bg-secondary",
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
