import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/Button";
import { CardSequence } from "@/components/CardSequence";
import { Eyebrow } from "@/components/Eyebrow";
import { LayeredThumbnail } from "@/components/LayeredThumbnail";
import { Tags } from "@/components/Tags";
import type { Project } from "@/content/projects";

// The one horizontal card in Home's Featured panel: image and text in equal halves from 834, image
// over text below (proportions from carmen-elena.space/work, Lumbini 2026-11-02). Hover and
// keyboard focus match the Project card (43:166): rust border, warm shadow, rust title and button (blue until 2026-11-06),
// image zooms slightly.
export function FeaturedProject({ project, preload }: { project: Project; preload?: boolean }) {
  const hover = "group-hover:text-accent group-has-[:focus-visible]:text-accent";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-media border-2 border-transparent bg-surface-subtle hover:border-accent hover:shadow-card-warm has-[:focus-visible]:border-accent motion-safe:transition-[border-color,box-shadow] tablet:flex-row tablet:items-stretch tablet:gap-8 desktop:gap-12">
      <div className="relative aspect-[550/336] w-full overflow-hidden tablet:aspect-auto tablet:min-h-[336px] tablet:w-1/2 tablet:shrink-0 tablet:self-stretch desktop:min-h-[388px] tablet:[&>*]:absolute tablet:[&>*]:inset-0">
        {project.thumbnailLayers ? (
          <LayeredThumbnail
            layers={project.thumbnailLayers}
            alt={project.thumbnail.alt}
            sizes="(min-width: 1200px) 632px, (min-width: 834px) 50vw, 358px"
            preload={preload}
          />
        ) : (
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            sizes="(min-width: 1200px) 632px, (min-width: 834px) 50vw, 358px"
            preload={preload}
            className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.04]"
          />
        )}
        {project.sequence && (
          <CardSequence scenes={project.sequence} sizes="(min-width: 1200px) 632px, (min-width: 834px) 50vw, 358px" />
        )}
      </div>
      <div className="flex w-full min-w-0 flex-col justify-center gap-3 p-6 tablet:w-1/2">
        <Eyebrow>{project.eyebrow}</Eyebrow>
        <h4 className={`font-jakarta text-h3-mobile font-bold text-title motion-safe:transition-colors tablet:text-title-s ${hover}`}>{project.title}</h4>
        <p className="font-jakarta text-body-s text-caption">{project.descriptor}</p>
        <Tags items={project.tags} label={`Skills: ${project.title}`} />
        <div className="pt-3">
          <Link
            href={`/work/${project.slug}`}
            className={buttonClasses(
              "secondary",
              "w-full after:absolute after:inset-0 group-hover:bg-primary group-has-[:focus-visible]:bg-primary",
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
