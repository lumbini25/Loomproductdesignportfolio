import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { LayeredThumbnail } from "@/components/LayeredThumbnail";
import { Tags } from "@/components/Tags";
import type { Project } from "@/content/projects";

// Figma "featured" blocks (112:100 Knowunity, 199:859 Bloom & Heal). Side by side from 834, the
// image keeping its 700 of 1308 share and filling the card's full height, edge to edge (Lumbini,
// 2026-10-28); below 834, image over text. Hover and keyboard focus match the Project
// card (43:166): blue border and shadow, blue title and button, image zooms slightly.
export function FeaturedProject({ project, preload }: { project: Project; preload?: boolean }) {
  const hover = "group-hover:text-secondary group-has-[:focus-visible]:text-secondary";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-featured border-2 border-transparent bg-surface-subtle hover:border-secondary hover:shadow-card-hover has-[:focus-visible]:border-secondary motion-safe:transition-[border-color,box-shadow] tablet:flex-row tablet:items-stretch tablet:gap-8 desktop:gap-12">
      <div className="w-full overflow-hidden tablet:w-[calc(100%*700/1308)] tablet:shrink-0 tablet:self-stretch">
        {project.thumbnailLayers ? (
          <LayeredThumbnail
            layers={project.thumbnailLayers}
            alt={project.thumbnail.alt}
            sizes="(min-width: 1200px) 700px, (min-width: 834px) 410px, 358px"
            preload={preload}
          />
        ) : (
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            sizes="(min-width: 1200px) 700px, (min-width: 834px) 410px, 358px"
            preload={preload}
            className="h-auto w-full object-cover tablet:h-full motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="flex w-full flex-col justify-center gap-4 px-6 pt-6 pb-6 tablet:py-6 tablet:pr-6 tablet:pl-0 desktop:pr-12">
        <Eyebrow>{project.eyebrow}</Eyebrow>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className={`text-h3-mobile font-bold motion-safe:transition-colors max-tablet:font-jakarta tablet:text-h3 ${hover}`}>{project.title}</h3>
            <p className="font-jakarta text-body-s text-caption">{project.descriptor}</p>
            <Tags items={project.tags} label={`Skills: ${project.title}`} />
          </div>
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
