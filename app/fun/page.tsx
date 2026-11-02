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

// Figma frame 103:3078, "Fun and experiments 1440"; below 834, its phone frame 408:2363.
export default function FunPage() {
  return (
    <>
      <Container className="flex flex-col gap-5 py-10 tablet:pt-18">
        <h1 className="font-jakarta text-h1-mobile font-bold tablet:text-h3">{fun.title}</h1>
        <p className="font-dm text-body-m text-body">{fun.intro}</p>
      </Container>

      <Container className="flex flex-col gap-8 py-6 tablet:pb-18">
        <ul className="grid grid-cols-1 gap-4 tablet:grid-cols-3">
          {fun.experiments.map((item) => (
            <li key={item.title} className="flex min-w-0 flex-col gap-5 rounded-card bg-surface-subtle p-4 tablet:pb-7 desktop:min-h-[610px]">
              {"video" in item && item.video ? (
                // Figma "motion tile": a phone-width video cropped inside a 395×300 panel.
                <VideoPlayer
                  video={item.video}
                  className="h-[300px] w-full rounded-media bg-surface-motion tablet:aspect-[395/300] tablet:h-auto desktop:aspect-auto desktop:h-[300px]"
                  videoClassName="absolute top-[13.3%] left-[29.9%] h-auto w-[61.3%] rounded-t-card shadow-card-hover tablet:left-[24.7%] tablet:w-[50.6%]"
                  compact
                />
              ) : (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 834px) 30vw, 100vw"
                  className={`h-[300px] w-full rounded-media object-cover tablet:aspect-[395/300] tablet:h-auto desktop:aspect-auto desktop:h-[300px] ${item.image.crop ?? ""}`}
                />
              )}
              <div className="flex flex-col gap-2.5 px-3">
                <Eyebrow className="font-jakarta!">{item.type}</Eyebrow>
                <h2 className="font-jakarta text-h3-mobile font-bold tablet:text-title-m">{item.title}</h2>
                <p className="font-dm text-mobile-body-1 text-caption tablet:text-body-semibold-s tablet:font-semibold">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center self-start font-dm text-body-semibold-s font-semibold text-secondary-strong hover:underline"
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
