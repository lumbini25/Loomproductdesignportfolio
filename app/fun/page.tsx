import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { VideoPlayer } from "@/components/VideoPlayer";
import { fun } from "@/content/fun";

export const metadata: Metadata = {
  title: "Fun and experiments",
  description:
    "Concepts, side projects, writing and talks by Lumbini Sharma that did not make it into a full case study.",
};

// Figma Prototype frame 103:3078, "Fun and experiments 1440".
export default function FunPage() {
  return (
    <>
      <Container className="flex flex-col gap-5 pt-10 pb-10 tablet:pt-18">
        <h1 className="text-h1-sm font-extrabold tablet:text-h1">{fun.title}</h1>
        <p className="max-w-[720px] text-body-m text-body">{fun.intro}</p>
      </Container>

      <Container className="flex flex-col gap-8 pt-6 pb-18">
        <ul className="grid max-w-[700px] grid-cols-1 gap-4 tablet:max-w-none tablet:grid-cols-2 desktop:grid-cols-3">
          {fun.experiments.map((item) => (
            <li key={item.title} className="flex flex-col gap-5 rounded-card bg-surface-subtle px-4 pt-4 pb-7">
              {"video" in item && item.video ? (
                // Figma "motion tile": a phone-width video cropped inside a 395×260 panel.
                <VideoPlayer
                  video={item.video}
                  className="aspect-[395/260] w-full rounded-media bg-surface-sky"
                  videoClassName="absolute top-[15.4%] left-[24.7%] h-auto w-[50.6%] rounded-t-card"
                />
              ) : (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1200px) 30vw, (min-width: 834px) 50vw, 100vw"
                  className="h-auto w-full rounded-media"
                />
              )}
              <div className="flex flex-col gap-2.5 px-3">
                <Eyebrow>{item.type}</Eyebrow>
                <h2 className="font-jakarta text-title-m font-bold">{item.title}</h2>
                <p className="font-jakarta text-body-s text-caption">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center self-start font-jakarta text-body-s font-semibold text-accent underline"
                  >
                    {item.link.label} (opens in a new tab)
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="text-subtitle-s text-caption">{fun.comingSoon}</p>
      </Container>
    </>
  );
}
