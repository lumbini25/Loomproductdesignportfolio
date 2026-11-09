import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { ArrowCounterClockwiseIcon, ArrowRightIcon, CheckCircleIcon } from "@/components/icons";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Carousel } from "@/components/case-study/Carousel";
import { DrawOnView } from "@/components/case-study/DrawOnView";
import { ExpandableVisual } from "@/components/case-study/ExpandableVisual";
import { penPath } from "@/components/case-study/penPath";
import { QuoteCarousel } from "@/components/case-study/QuoteCarousel";
import { PinnedDevice } from "@/components/case-study/PinnedDevice";
import { ScrollBanner } from "@/components/case-study/ScrollBanner";
import {
  HeroMedia,
  isPortrait,
  PhoneFrame,
  phoneBox,
  phoneSizes,
  WideFigure,
  wideSizes,
} from "@/components/case-study/MediaFrames";
import type { Block, FlowTone, Img, Video } from "@/content/case-studies/types";
import { caseStudy } from "@/content/site";

// Renders case-study content blocks. Every image and video goes through a media wrapper
// (MediaFrames.tsx): portrait media in a PhoneFrame, landscape in a WideFigure, the lead film in
// HeroMedia. Running text stays at a readable 720px; captions at 70ch.

const isDev = process.env.NODE_ENV === "development";

// **bold** in source copy becomes <strong>; nothing else is parsed.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-title">{part}</strong> : part))}</>;
}

function Caption({ children }: { children?: ReactNode }) {
  if (!children) return null;
  // Left-aligned under its visual, on the column's text edge (2026-10-29 alignment audit).
  return <figcaption className="mt-3 font-jakarta text-body-s text-caption">{children}</figcaption>;
}

function Phone({ image, sizes = "(min-width: 834px) 240px, 45vw" }: { image: Img; sizes?: string }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      className="h-auto w-full max-w-[220px] rounded-phone border border-line"
    />
  );
}

// A full-width image. With `crop` it fills a frame of that ratio from the top, as the source
// page crops it; otherwise it keeps its own ratio.
export function Picture({
  image,
  sizes,
  className = "",
  preload,
}: {
  image: Img;
  sizes: string;
  className?: string;
  preload?: boolean;
}) {
  const img = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      preload={preload}
      className={
        !image.crop
          ? `h-auto w-full ${className}`
          : image.fit === "contain"
            ? "h-full w-full object-contain"
            : `h-full w-full object-cover ${image.fit === "center" ? "object-center" : "object-top"}`
      }
    />
  );
  if (!image.crop) {
    // Banner zoom (Carmen): the frame clips while the image settles from 108%.
    return image.zoom ? <div className={`reveal-zoom overflow-hidden ${className}`}>{img}</div> : img;
  }
  return (
    <div className={`overflow-hidden ${className}`} style={{ aspectRatio: image.crop }}>
      {img}
    </div>
  );
}

// One portrait image or video at its capped size (PhoneFrame), caption under it at the same width.
function PortraitItem({
  media,
  frame,
  caption,
  children,
}: {
  media: { width: number; height: number };
  frame: string;
  caption?: string;
  children: ReactNode;
}) {
  const box = phoneBox(media);
  return (
    <div className="phone-cell">
      <div className="flex flex-col gap-3" style={{ width: box.width }}>
        <div className={`overflow-hidden ${frame}`} style={{ aspectRatio: box.aspectRatio }}>
          {children}
        </div>
        {caption && (
          <p className="caption font-jakarta text-body-s text-caption">
            <Rich text={caption} />
          </p>
        )}
      </div>
    </div>
  );
}

function PortraitImage({ image, frame }: { image: Img; frame: string }) {
  return (
    <PortraitItem media={image} frame={frame} caption={image.caption}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={phoneSizes(image)}
        className="h-full w-full object-contain"
      />
    </PortraitItem>
  );
}

function PortraitVideo({ video, caption }: { video: Video; caption?: string }) {
  return (
    <PortraitItem media={video} frame="rounded-card" caption={caption}>
      <VideoPlayer video={video} className="h-full w-full" videoClassName="block h-full w-full object-contain" />
    </PortraitItem>
  );
}

const flowToneText: Record<FlowTone, string> = {
  blue: "text-flow-blue",
  purple: "text-flow-purple-text",
  red: "text-flow-red",
  green: "text-flow-green",
};
const flowToneFill: Record<FlowTone, string> = {
  blue: "bg-flow-blue",
  purple: "bg-flow-purple",
  red: "bg-flow-red",
  green: "bg-flow-green",
};

const wideCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "fit-2 grid-cols-2 items-start",
  3: "fit-3 grid-cols-3 items-start",
};

export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return (
        <div className={`flex flex-col ${block.tight ? "gap-3" : "gap-4"}`}>
          {block.label && <Eyebrow>{block.label}</Eyebrow>}
          {block.heading && <h3 className="text-title-s font-bold text-title">{block.heading}</h3>}
          {block.paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className={
                block.look === "lead"
                  ? "text-body-l-sm font-semibold text-subtitle tablet:text-title-l"
                  : "text-body-m text-body"
              }
            >
              <Rich text={p} />
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <div className="flex flex-col gap-2 text-body-m text-body">
          {block.intro && <p>{block.intro}</p>}
          <ol className="flex list-decimal flex-col gap-1 pl-7">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      );

    case "clips":
      return (
        <PhoneFrame>
          {block.videos.map((v) => (
            <PortraitVideo key={v.src} video={v} />
          ))}
        </PhoneFrame>
      );

    case "feature":
      return (
        <div className="fit-2 grid grid-cols-2 items-center gap-6 tablet:gap-12">
          <PhoneFrame className={block.side === "right" ? "order-2" : ""}>
            <PortraitVideo video={block.video} />
          </PhoneFrame>
          <div className="flex flex-col gap-3">
            <h3 className="text-h3-sm font-bold text-title">{block.title}</h3>
            <p className="text-body-m text-body">{block.text}</p>
          </div>
        </div>
      );

    case "split":
      // Text column beside a visual from 1200 (Figma: 360 + 776); stacked below.
      return (
        <figure className="grid grid-cols-1 items-center gap-8 desktop:grid-cols-[minmax(0,360fr)_minmax(0,776fr)] desktop:gap-12">
          <div className="flex flex-col gap-3">
            {block.title && <h3 className="text-title-s font-bold text-title">{block.title}</h3>}
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-body-m text-body">
                <Rich text={p} />
              </p>
            ))}
          </div>
          {/* Capped at 560px and 70% of the screen height, so a near-square visual stays a
              supporting image when the columns stack (2026-10-28). */}
          <div className="w-full" style={{ maxWidth: `min(560px, calc(70svh * ${block.image.width / block.image.height}))` }}>
            <Picture image={block.image} sizes="(min-width: 1200px) 560px, (min-width: 834px) 560px, calc(100vw - 32px)" className={block.image.fit === "contain" ? "" : "rounded-card"} />
            {block.caption && <figcaption className="mt-3 font-jakarta text-body-s text-caption">{block.caption}</figcaption>}
          </div>
        </figure>
      );

    case "pinned":
      return <PinnedDevice device={block.device} steps={block.steps} />;

    case "video":
      return (
        <figure>
          {block.band ? (
            <div className="aspect-video max-h-[80svh] w-full overflow-hidden rounded-card bg-flow-board desktop:aspect-[1184/480]">
              <VideoPlayer video={block.video} className="h-full w-full" videoClassName="block h-full w-full bg-flow-board! object-contain" />
            </div>
          ) : block.hero ? (
            <HeroMedia>
              <VideoPlayer video={block.video} className="h-full w-full" videoClassName="block h-full w-full object-cover" />
            </HeroMedia>
          ) : block.device === "phone" ? (
            <PhoneFrame>
              <PortraitItem media={block.video} frame="relative rounded-device border-[12px] border-surface-inverse bg-surface-inverse shadow-card-hover">
                <VideoPlayer
                  video={block.video}
                  className="h-full w-full rounded-device-screen"
                  videoClassName="block h-full w-full object-cover"
                />
                {/* Dynamic island, drawn over the recording's own status bar. */}
                <span aria-hidden="true" className="absolute top-2 left-1/2 h-6 w-24 -translate-x-1/2 rounded-pill bg-surface-inverse" />
              </PortraitItem>
            </PhoneFrame>
          ) : isPortrait(block.video) ? (
            <PhoneFrame>
              <PortraitVideo video={block.video} />
            </PhoneFrame>
          ) : (
            <WideFigure>
              <VideoPlayer video={block.video} />
            </WideFigure>
          )}
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "phones":
      return (
        <figure>
          <div className="fit-2 flex flex-row items-start gap-8">
            <PhoneFrame className="min-w-0 flex-1">
              {block.images.map((img) => (
                <PortraitImage key={img.src} image={img} frame="rounded-phone border border-line" />
              ))}
            </PhoneFrame>
            {(block.callouts || block.aside) && (
              <div className="flex min-w-0 flex-1 flex-col gap-6">
                {block.callouts && (
                  <ul className="flex flex-col gap-3 tablet:max-w-[320px]">
                    {block.callouts.map((c) => (
                      <li key={c} className="rounded-card bg-surface-subtle px-5 py-4 font-jakarta text-body-s font-semibold text-title">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {block.aside?.map((b, i) => <BlockView key={i} block={b} />)}
              </div>
            )}
          </div>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "banner":
      return (
        <figure>
          <ScrollBanner image={block.image} />
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "wide": {
      const columns = block.columns ?? 1;
      // A group of portrait images (no fixed crop) is a PhoneFrame; anything else is a WideFigure,
      // where a portrait image still keeps the phone height cap.
      const allPortrait = block.images.every((img) => !img.crop && isPortrait(img));
      const frame = (img: Img) => (img.fit === "contain" ? "" : "rounded-card border border-line");
      return (
        <figure>
          {allPortrait ? (
            <PhoneFrame>
              {block.images.map((img) => (
                <PortraitImage key={img.src} image={img} frame={frame(img)} />
              ))}
            </PhoneFrame>
          ) : (
            <WideFigure>
              <div className={`grid gap-6 ${wideCols[columns]}`}>
                {block.images.map((img) =>
                  !img.crop && isPortrait(img) ? (
                    <div key={img.src} className="flex justify-start">
                      {img.expand ? (
                        <ExpandableVisual image={img}>
                          <PortraitImage image={img} frame={frame(img)} />
                        </ExpandableVisual>
                      ) : (
                        <PortraitImage image={img} frame={frame(img)} />
                      )}
                    </div>
                  ) : (
                    <div key={img.src}>
                      {/* Never taller than 80% of the screen: on a short laptop screen the
                          image narrows instead (2026-10-28, MacBook Pro). A framed screen sits in
                          a box with 32px padding (16px below 834); a `bare` image (a photo
                          banner) keeps its plain edge (Lumbini, 2026-10-29). A narrower image keeps
                          to the column's left edge, like the text above it. */}
                      {(() => {
                        const picture = (
                          <div style={{ maxWidth: `calc(80svh * ${img.width / img.height})` }}>
                            {block.bare || img.fit === "contain" ? (
                              <Picture image={img} sizes={wideSizes[columns]} className={frame(img)} />
                            ) : (
                              <div className="rounded-card border border-line bg-surface p-4 tablet:p-8">
                                <Picture image={img} sizes={wideSizes[columns]} />
                              </div>
                            )}
                          </div>
                        );
                        return img.expand ? <ExpandableVisual image={img}>{picture}</ExpandableVisual> : picture;
                      })()}
                      {img.caption && <p className="caption mt-3 font-jakarta text-body-s text-caption">{img.caption}</p>}
                    </div>
                  ),
                )}
              </div>
            </WideFigure>
          )}
          <Caption>{block.caption}</Caption>
        </figure>
      );
    }

    case "compare":
      return (
        <figure>
          <WideFigure>
          <ul className="fit-2 grid grid-cols-2 gap-8">
            {block.pairs.map((pair) => (
              <li key={pair.after.src} className="grid grid-cols-2 items-start gap-3 rounded-card bg-surface-subtle p-4">
                {(["before", "after"] as const).map((side) => (
                  <div key={side} className="flex flex-col gap-2">
                    <Eyebrow>{side === "before" ? "Before" : "After"}</Eyebrow>
                    <Phone image={pair[side]} sizes="(min-width: 834px) 200px, 40vw" />
                    {pair.note && (
                      <p className="mt-1 font-jakarta text-body-s text-caption">
                        <Rich text={pair.note[side]} />
                      </p>
                    )}
                  </div>
                ))}
              </li>
            ))}
          </ul>
          </WideFigure>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "steps":
      return (
        <figure className="flex flex-col gap-6 rounded-card bg-surface-subtle p-6">
          {(["before", "after"] as const).map((side) => (
            <div key={side} className="flex flex-col gap-3">
              <Eyebrow>{`${side === "before" ? "Before" : "After"}: ${block[side].length} steps`}</Eyebrow>
              <ol aria-label={`${block.label}, ${side}`} className="flex flex-wrap items-center gap-2">
                {block[side].map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-control border border-line bg-surface px-3 py-2 font-jakarta text-body-s font-medium text-title">
                      {i + 1}. {step}
                    </span>
                    {i < block[side].length - 1 && <ArrowRightIcon size={16} className="text-caption" />}
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "tiles":
      if (block.look === "sky")
        return (
          <ul className="stack-fit-2 grid grid-cols-1 gap-4 desktop:grid-cols-2 desktop:gap-x-16 desktop:gap-y-11">
            {block.items.map((item) => (
              // Figma 226:2985: soft filled tiles, 18px regular text, centred in a 79px band.
              <li key={item} className="flex min-h-20 items-center rounded-card-sm bg-surface-subtle px-6 py-2 text-subtitle-s text-title">
                {item}
              </li>
            ))}
          </ul>
        );
      return (
        <figure>
          <ul className="grid grid-cols-2 gap-3 tablet:grid-cols-3">
            {block.items.map((item) => (
              <li key={item} className="rounded-media border border-line bg-surface p-5 text-body-m font-semibold text-title">
                {item}
              </li>
            ))}
          </ul>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "cards": {
      // One text-card style on every case study (Lumbini, 2026-10-29): an outlined card, 20px text.
      // "list" is not a card: headings and paragraphs down the column.
      if (block.look === "list")
        return (
          <div className="flex flex-col gap-8">
            {block.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="font-jakarta text-title-s font-bold">{item.title}</h3>
                {item.body && (
                  <p className="text-body-m text-body">
                    <Rich text={item.body} />
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      // A card's small label: "Step 1" with a block label, "01" when numbered, or (an unnumbered
      // "boxes" block, Anewvista's context) the title itself. Otherwise the title is the card's
      // heading, one level under the block's own heading when it has one.
      const Title = block.heading ? "h4" : "h3";
      // Bloom's "rows" were always numbered.
      const numbered = block.numbered || block.look === "rows";
      const List = numbered || block.label ? "ol" : "ul";
      const n = block.items.length;
      // "rows": one full-width horizontal card per item, number beside the title (Bloom, Figma 232:3004).
      // Below 1200 every card row is one card per line (Lumbini, 2026-11-03).
      const cols = block.look === "rows" ? "grid-cols-1" : n === 5 ? "stack-fit-5 grid-cols-1 desktop:grid-cols-5" : n === 3 ? "stack-fit-3 grid-cols-1 desktop:grid-cols-3" : "stack-fit-2 grid-cols-1 desktop:grid-cols-2";
      return (
        <div className="flex flex-col gap-4">
          {block.label && block.look !== "boxes" && <Eyebrow>{block.label}</Eyebrow>}
          {block.heading && <h3 className="font-jakarta text-title-xs font-bold">{block.heading}</h3>}
          <List className={`grid gap-4 ${cols}`}>
            {block.items.map((item, i) => {
              const steps = block.look === "boxes" && block.label;
              const labelOnly = block.look === "boxes" && !numbered && !block.label;
              const label = steps ? `${block.label} ${i + 1}` : numbered ? String(i + 1).padStart(2, "0") : labelOnly ? item.title : undefined;
              const title = steps || labelOnly ? undefined : item.title;
              const text = steps ? item.title : item.body;
              return (
                <li
                  key={item.title}
                  className={
                    block.look === "soft"
                      ? "flex flex-col gap-3 rounded-card-sm bg-surface-subtle px-3 py-6 shadow-card"
                      : "flex flex-col gap-2.5 rounded-media border border-line bg-surface p-6"
                  }
                >
                  {(block.numberInline || block.look === "rows") && label && title ? (
                    // One step below the section heading (Title 1 Bold), as the case study's other card
                    // titles: Body Semibold S (14) on phones, Subtitle S (18) from 834 (Lumbini, 2026-11-08).
                    <div className="flex items-baseline gap-3">
                      <Eyebrow>{label}</Eyebrow>
                      <Title className="text-body-semibold-s font-semibold text-title tablet:text-subtitle-s">{title}</Title>
                    </div>
                  ) : (
                    <>
                      {label && <Eyebrow>{label}</Eyebrow>}
                      {title && <Title className={block.look === "soft" ? "text-body-semibold-s font-semibold text-title tablet:text-subtitle-s" : "text-title-s font-bold text-title"}>{title}</Title>}
                    </>
                  )}
                  {text &&
                    (block.look === "quotes" ? (
                      <blockquote className="text-body-m text-caption italic">
                        <Rich text={text} />
                      </blockquote>
                    ) : (
                      <p className={block.look === "soft" ? "text-mobile-body-1 text-caption tablet:text-subtitle-s" : "text-body-m text-caption"}>
                        <Rich text={text} />
                      </p>
                    ))}
                </li>
              );
            })}
          </List>
        </div>
      );
    }

    case "quote":
      if (block.look === "rules")
        return (
          <figure className="mx-auto w-full max-w-[720px] border-y border-title py-10">
            <blockquote className="text-h3-sm font-bold text-title tablet:text-h3">{block.text}</blockquote>
          </figure>
        );
      if (block.look === "title")
        return (
          <figure>
            <blockquote className="font-jakarta text-body-m font-bold text-title">“{block.text}”</blockquote>
            {block.cite && <figcaption className="mt-3 font-dm text-body-semibold-s font-semibold text-caption">{block.cite}</figcaption>}
          </figure>
        );
      if (block.look === "box")
        return (
          <figure className="rounded-card bg-surface-subtle p-6">
            <blockquote className="font-jakarta text-body-m font-semibold text-title">“{block.text}”</blockquote>
            {block.cite && <figcaption className="mt-3 font-jakarta text-body-s text-caption">{block.cite}</figcaption>}
          </figure>
        );
      return (
        <figure className="border-l-4 border-primary pl-6">
          <blockquote className="text-body-m text-title">“{block.text}”</blockquote>
          {block.cite && <figcaption className="mt-3 font-jakarta text-body-s text-caption">{block.cite}</figcaption>}
        </figure>
      );

    case "statement":
      return (
        <div className={`flex flex-col ${block.look === "large" ? "gap-5" : block.look === "title" ? "gap-3" : "gap-2"}`}>
          <Eyebrow>{block.label}</Eyebrow>
          <p
            className={
              block.look === "title"
                ? "text-title-s font-bold text-title"
                : block.look === "large"
                ? "text-h3-sm font-bold text-title tablet:text-h3"
                : block.look === "compact"
                  ? "text-body-m text-title"
                  : "text-title-s font-bold text-title"
            }
          >
            <Rich text={block.text} />
          </p>
        </div>
      );

    case "speech":
      return <QuoteCarousel items={block.items} label={block.label} />;

    case "panel":
      return (
        <figure>
          <div className="stack-fit-2 grid grid-cols-1 gap-4 desktop:grid-cols-2">
            {block.columns.map((col) => (
              <div key={col.title} className="rounded-card bg-surface-subtle p-6">
                <h3 className="font-jakarta text-title-xs font-bold">{col.title}</h3>
                <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 font-jakarta text-body-s text-caption">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "cycle":
      return (
        <figure>
          <ol className="stack-fit-4 flex flex-col gap-3 desktop:flex-row desktop:items-stretch">
            {block.steps.map((step, i) => (
              <li key={step.title} className="flex min-w-0 flex-1 flex-col gap-3 desktop:flex-row desktop:items-center">
                <div className="flex-1 rounded-card bg-surface-subtle p-5">
                  <p className="font-jakarta text-title-xs font-bold">{step.title}</p>
                  <p className="mt-1 font-jakarta text-body-s text-caption">{step.body}</p>
                </div>
                <ArrowRightIcon size={20} className="shrink-0 rotate-90 self-center text-caption desktop:rotate-0" />
                {i === block.steps.length - 1 && <span className="sr-only">then back to the first step</span>}
              </li>
            ))}
          </ol>
          <p aria-hidden="true" className="mt-2 inline-flex items-center gap-2 font-jakarta text-body-s text-caption">
            <ArrowCounterClockwiseIcon size={16} />
            {block.steps[0].title}
          </p>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "flow":
      return (
        <figure className="rounded-card bg-surface-subtle p-6">
          <ol className="flex flex-wrap items-center gap-2">
            {block.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-control border border-line bg-surface px-3 py-2 font-jakarta text-body-s font-medium text-title">
                  {step}
                </span>
                {i < block.steps.length - 1 && <ArrowRightIcon size={16} className="text-caption" />}
              </li>
            ))}
          </ol>
          <ul className="mt-5 flex list-disc flex-col gap-1.5 pl-5 font-jakarta text-body-s text-caption">
            {block.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "stats":
      return (
        <figure>
          <div className={block.side ? "grid grid-cols-1 items-center gap-6 desktop:grid-cols-[minmax(0,752fr)_minmax(0,380fr)] desktop:gap-12" : undefined}>
          <dl className="stack-fit-3 grid grid-cols-1 gap-4 desktop:grid-cols-3">
            {/* One number style on every case study (2026-10-29): a filled card. */}
            {block.items.map((s) => (
              // Figma 223:2793 finding card: Plus Jakarta Bold 40/48 number over a DM Sans SemiBold
              // 16/24 label, filled, 24px corners, 24 by 28 padding, left-aligned.
              <div key={s.label} className="flex flex-col-reverse gap-2.5 rounded-card bg-surface-subtle px-6 py-7">
                <dt className="font-dm text-body-s font-semibold text-subtitle">{s.label}</dt>
                <dd className="font-jakarta text-h3-sm font-bold text-title tablet:text-h3">{s.value}</dd>
              </div>
            ))}
          </dl>
          {block.side && <p className="text-body-m text-caption">{block.side}</p>}
          </div>
          <Caption>{block.source}</Caption>
        </figure>
      );

    case "screens":
      return (
        <figure>
          <div className={`flex items-start ${block.gap ? "" : "justify-between"}`} style={block.gap ? { columnGap: `${block.gap}%` } : undefined}>
            {block.images.map((img, i) => (
              <div key={img.src} style={{ width: `${block.widths[i]}%` }}>
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={`(min-width: 1200px) ${Math.round(block.widths[i] * 11)}px, ${Math.round(block.widths[i])}vw`} className="h-auto w-full" />
              </div>
            ))}
          </div>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "findings":
      return (
        <div className="flex flex-col gap-4">
          {block.heading && <h3 className="font-jakarta text-title-xs font-bold">{block.heading}</h3>}
          <ol className="stack-fit-4 grid grid-cols-1 gap-4 desktop:grid-cols-4">
            {block.items.map((item, i) => (
              <li key={item} className="flex min-w-0 flex-col gap-2.5 rounded-media border border-line bg-surface p-6">
                <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                <p className="text-body-m text-caption">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "options": {
      const columns = block.columns ?? 2;
      const Title = block.heading ? "h4" : "h3";
      const rowClass = columns === 3 ? "stack-fit-3 grid grid-cols-1 gap-4 desktop:grid-cols-3" : columns === 2 ? "stack-fit-2 grid grid-cols-1 gap-4 desktop:grid-cols-2" : "grid grid-cols-1 gap-4";
      return (
        <div className="flex flex-col gap-4">
          {block.heading && <h3 className="font-jakarta text-title-xs font-bold">{block.heading}</h3>}
          <figure>
            <ul className={rowClass}>
              {block.items.map((item) => (
                <li key={item.label ?? item.title ?? item.body} className="flex min-w-0 flex-col gap-2.5 rounded-card border border-line bg-surface p-6">
                  {item.label && <Eyebrow>{item.label}</Eyebrow>}
                  {item.title && <Title className="text-title-s font-bold text-title">{item.title}</Title>}
                  {item.body && <p className={`text-body-m ${block.strong ? "text-title" : block.muted ? "text-body" : "text-caption"}`}>{item.body}</p>}
                  {item.bullets && (
                    <ul className="list-disc pl-5 text-body-m text-caption">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Caption>{block.caption}</Caption>
          </figure>
        </div>
      );
    }

    case "lead":
      return <p className={`text-title-s font-bold ${block.muted ? "text-caption" : "text-title"}`}>{block.text}</p>;

    case "gallery":
      return (
        <div className={`grid items-start gap-4 ${block.columns === 3 ? "fit-3 grid-cols-3" : "fit-2 grid-cols-2"}`}>
          {block.images.map((img) => (
            <figure key={img.src} className="flex min-w-0 flex-col gap-2.5">
              <Picture image={img} sizes={wideSizes[block.columns]} className="rounded-card bg-surface-subtle" />
              {img.caption && (
                <figcaption className="font-dm text-body-semibold-s font-semibold text-caption">
                  <Rich text={img.caption} />
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "flowBoard":
      return (
        <figure>
          <div className="flow-board-frame">
            <div className="flow-board rounded-card bg-flow-board text-on-inverse">
              <h3 className="flow-board-title font-bold">{block.title}</h3>
              <ul className="flow-board-legend">
                {block.legend.map((item) => (
                  <li key={item.label} className="font-bold uppercase text-on-inverse/70">
                    <span aria-hidden="true" className={`rounded-pill ${flowToneFill[item.tone]}`} />
                    {item.label}
                  </li>
                ))}
              </ul>
              <ol className="flow-board-columns">
                {block.columns.map((col, i) => (
                  <li key={col.title}>
                    <h4 className="font-bold">
                      <span aria-hidden="true" className={`rounded-pill text-flow-board ${flowToneFill[col.tone]}`}>
                        {i + 1}
                      </span>
                      {col.title}
                    </h4>
                    <ol>
                      {col.cards.map((card, j) => (
                        <li key={card.title}>
                          {j > 0 && <span aria-hidden="true" className="flow-board-line bg-flow-line" />}
                          <div className="flow-board-card rounded-card-sm border border-flow-line bg-flow-card">
                            <p className={`flow-board-tag font-bold uppercase ${flowToneText[col.tone]}`}>{card.tag}</p>
                            <p className="font-bold">{card.title}</p>
                            <p className="text-on-inverse/70">{card.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "lanes":
      return (
        <figure>
          <ol className="stack-fit-4 grid grid-cols-1 gap-4 desktop:grid-cols-4">
            {block.lanes.map((lane) => (
              <li key={lane.title} className="flex flex-col gap-3 rounded-card bg-surface-subtle p-5">
                <div>
                  <p className="font-jakarta text-title-xs font-bold">{lane.title}</p>
                  <p className="mt-1 font-jakarta text-body-s text-caption">{lane.summary}</p>
                </div>
                <ol className="flex flex-col gap-1.5">
                  {lane.steps.map((step, i) => (
                    <li key={step} className="flex flex-col items-start gap-1.5">
                      <span className="w-full rounded-card-sm border border-line bg-surface px-3 py-2 font-jakarta text-body-s font-medium text-title">
                        {step}
                      </span>
                      {i < lane.steps.length - 1 && (
                        <ArrowRightIcon size={14} className="ml-4 rotate-90 text-caption" />
                      )}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          {block.flags && (
            <ul className="stack-fit-2 mt-4 grid grid-cols-1 gap-3 desktop:grid-cols-2">
              {block.flags.map((f) => (
                <li key={f} className="rounded-card border-2 border-dashed border-line p-4 font-jakarta text-body-s text-caption">
                  <Rich text={f} />
                </li>
              ))}
            </ul>
          )}
          <Caption>{block.caption}</Caption>
        </figure>
      );

    case "details":
      return (
        <details className="group rounded-card border border-line p-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-jakarta text-body-s font-semibold text-title [&::-webkit-details-marker]:hidden">
            {block.summary}
            <ArrowRightIcon size={18} className="shrink-0 text-caption group-open:rotate-90 motion-safe:transition-transform" />
          </summary>
          <div className="mt-4 flex flex-col gap-6">
            {block.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </details>
      );

    case "bars": {
      const max = Math.max(...block.items.map((i) => i.value));
      return (
        <figure className="rounded-card bg-surface-subtle p-6">
          <figcaption className="font-jakarta text-title-xs font-bold">{block.title}</figcaption>
          {/* Lumbini's chart (Anewvista, 2026-10-29): fully rounded bars, no baseline, every value
              in title colour; highlighted bars in the project's chart colour, the rest muted. */}
          <div aria-hidden="true" className="mt-6 flex h-56 items-end gap-1.5 tablet:gap-5 desktop:px-[10%]">
            {block.items.map((item) => {
              const on = block.highlight?.includes(item.label);
              return (
                <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="font-jakarta text-body-s font-semibold text-title">
                    {item.value}
                    {block.unit}
                  </span>
                  <span
                    className={`w-full max-w-50 rounded-control ${on ? "bg-chart" : "bg-chart-muted"}`}
                    style={{ height: `${(item.value / max) * 80}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div aria-hidden="true" className="mt-2 flex gap-1.5 tablet:gap-5 desktop:px-[10%]">
            {block.items.map((item) => (
              <span key={item.label} className="flex-1 text-center font-jakarta text-body-s text-caption">
                {item.label}
              </span>
            ))}
          </div>
          {/* sr-only goes on a wrapper: a table ignores the 1px width and would widen the page. */}
          <div className="sr-only">
            <table>
              <caption>{block.title}</caption>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {block.items.map((item) => (
                  <tr key={item.label}>
                    <th scope="row">{item.label}</th>
                    <td>
                      {item.value}
                      {block.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-jakarta text-body-s text-caption">{block.source}</p>
        </figure>
      );
    }

    case "carousel":
      return (
        <WideFigure>
          <Carousel images={block.images} label={block.label} frame={block.frame} />
        </WideFigure>
      );

    case "linkButton":
      return (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-between gap-4 rounded-card border border-line p-5 font-jakarta text-body-s font-semibold text-title hover:bg-surface-subtle"
        >
          <span>
            {block.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
          <ArrowRightIcon size={18} className="shrink-0 text-caption" />
        </a>
      );

    case "links":
      return (
        <ul className="flex flex-wrap gap-x-8">
          {block.items.map((l) => {
            // Links within the site (/, #) open in place; others open a new tab and say so.
            const internal = l.href.startsWith("#") || l.href.startsWith("/");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex min-h-11 items-center font-jakarta text-body-s font-semibold text-accent underline"
                >
                  {l.label}
                  {!internal && " (opens in a new tab)"}
                </a>
              </li>
            );
          })}
        </ul>
      );

    case "annotated": {
      // Hand-drawn rings in place of Figma's numbered circles (Lumbini, 2026-11-05): one pen goes round
      // each problem in turn, and that problem's card appears when its ring is done. `penPath` makes the
      // ring, `.pen-ring` and `.pen-card` in globals.css time it, DrawOnView starts it on scroll.
      const timing = [
        { start: 0.3, dur: 1.9 },
        { start: 2.9, dur: 1.9 },
        { start: 5.5, dur: 1.9 },
      ];
      const looks = [
        { seed: 3, startDeg: -125, tilt: -8 },
        { seed: 7, startDeg: 200, tilt: 10 },
        { seed: 11, startDeg: 40, tilt: -4 },
      ];
      let ring = 0;
      return (
        <DrawOnView className="flex flex-col gap-10">
          {block.problems && (
            <ul className="stack-fit-3 grid grid-cols-1 gap-4 desktop:grid-cols-3">
              {block.problems.map((item, n) => (
                <li
                  key={item.label}
                  className="pen-card flex min-w-0 flex-col gap-2.5 rounded-card border border-line bg-surface p-6"
                  style={{ "--delay": `${timing[n].start + timing[n].dur + 0.05}s` } as React.CSSProperties}
                >
                  <Eyebrow>{item.label}</Eyebrow>
                  <p className="text-body-m text-title">{item.body}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:gap-16">
            <div className="flex flex-col gap-3 desktop:w-[calc(100%*640/1324)] desktop:shrink-0">
              <Eyebrow>{block.label}</Eyebrow>
              <p className="text-title-s font-bold text-title">{block.text}</p>
            </div>
            <PhoneFrame className="min-w-0 flex-1">
              {block.screens.map(({ image, rings }) => (
                <PortraitItem key={image.src} media={image} frame="relative" caption={image.caption}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={phoneSizes(image)}
                    className="h-full w-full object-contain"
                  />
                  <svg viewBox="0 0 272 590" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-flow-red">
                    {rings.map((r) => {
                      const n = ring++;
                      const look = looks[n % looks.length];
                      const t = timing[n % timing.length];
                      return (
                        <path
                          key={n}
                          d={penPath(r, look.seed, look.startDeg, 1.65, look.tilt)}
                          pathLength={1}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`pen-ring pen-ring-${(n % 3) + 1}`}
                          style={{ "--delay": `${t.start}s`, "--dur": `${t.dur}s` } as React.CSSProperties}
                        />
                      );
                    })}
                  </svg>
                </PortraitItem>
              ))}
            </PhoneFrame>
          </div>
        </DrawOnView>
      );
    }

    case "showcase":
      // Light text on the inverse surface; muted lines use the inverse text at 70%, which stays
      // above 4.5:1 on Neutral 0. The chip stays light: Rust on this surface would fail contrast.
      return (
        <div className="flex flex-col gap-8 rounded-featured bg-surface-inverse p-5 text-on-inverse tablet:p-10">
          <div className="grid grid-cols-1 gap-8 desktop:grid-cols-[minmax(0,1fr)_minmax(0,400px)] desktop:gap-12">
            <div className="flex flex-col items-start gap-5">
              <p className="rounded-pill bg-on-inverse/10 px-3 py-1.5 font-(family-name:--font-heading) text-caption-m font-medium uppercase">
                {block.label}
              </p>
              {block.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-body-m text-on-inverse/80">
                  <Rich text={p} />
                </p>
              ))}
              {block.steps && (
                <figure className="flex w-full flex-col gap-3">
                  <ol className="stack-fit-3 grid grid-cols-1 gap-3 desktop:grid-cols-3">
                    {block.steps.map((st) => (
                      <li key={st.title} className="rounded-media border border-on-inverse/15 p-4">
                        <p className="text-title-s font-bold">{st.title}</p>
                        <p className="mt-1 text-body-m text-on-inverse/70">{st.body}</p>
                      </li>
                    ))}
                  </ol>
                  {block.stepsCaption && (
                    <figcaption className="text-on-inverse/70">{block.stepsCaption}</figcaption>
                  )}
                </figure>
              )}
              {block.link && (
                <a
                  href={block.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-between gap-4 rounded-card bg-on-inverse p-5 text-title-s font-bold text-title hover:bg-on-inverse/90"
                >
                  <span>
                    {block.link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                  <ArrowRightIcon size={22} className="shrink-0" />
                </a>
              )}
            </div>
            <div className="rounded-card border border-on-inverse/15 bg-on-inverse/5 p-6">
              <h3 className="text-title-s font-bold">{block.kit.title}</h3>
              <ul className="mt-2 flex flex-col divide-y divide-on-inverse/15">
                {block.kit.items.map((it) => (
                  <li key={it.title} className="flex gap-3 py-3">
                    <CheckCircleIcon size={22} className="mt-0.5 shrink-0 text-on-inverse/80" />
                    <div>
                      <p className="text-title-s font-bold">{it.title}</p>
                      {it.body && <p className="text-body-m text-on-inverse/70">{it.body}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="stack-fit-2 grid grid-cols-1 gap-6 desktop:grid-cols-2">
            {block.cards.map((c) => (
              <li key={c.title} className="flex flex-col gap-4 rounded-card border border-on-inverse/15 bg-on-inverse/5 p-4 tablet:p-5">
                {c.image && (
                  <div className="rounded-media bg-on-inverse/10 p-4">
                    <Picture image={c.image} sizes="(min-width: 1200px) 500px, (min-width: 834px) 45vw, 90vw" className="rounded-media" />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {c.label && <p className="font-(family-name:--font-heading) text-caption-m font-medium uppercase text-on-inverse/70">{c.label}</p>}
                  <h3 className="text-title-s font-bold">{c.title}</h3>
                  {c.body && <p className="text-body-m text-on-inverse/70">{c.body}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "placeholder":
      return <Note label={caseStudy.placeholder}>{block.text}</Note>;

    case "todo":
      return isDev ? <Note label="TODO for Lumbini (dev only, not in the build):">{block.text}</Note> : null;
  }
}

function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="max-w-[720px] rounded-card border-2 border-dashed border-line p-5 font-jakarta text-body-s text-caption">
      <span className="font-semibold text-title">{label} </span>
      {children}
    </p>
  );
}
