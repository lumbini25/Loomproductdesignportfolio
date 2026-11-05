"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { XIcon } from "@/components/icons";
import type { Img } from "@/content/case-studies/types";

// A visual that opens at full viewport size when pressed (Anewvista's before-and-after visuals,
// Lumbini 2026-11-03; then every dense diagram flagged `expand` in the case-study content, 2026-11-04). A native modal dialog gives the focus trap, Escape to close, and focus back on
// the visual afterwards. A click anywhere outside the image, or the close button, also closes it.
// Below 834 the image is at least 960px wide inside a scrolling area, so it can be panned and read;
// from 834 it is scaled up or down to fit the screen (small diagrams grow to fill it). Nothing animates. The button covers the whole visual, so the whole
// card is the target. There is no visible "View larger" pill (Lumbini, 2026-11-04): the zoom cursor is the hint on
// desktop, and the button's label for screen readers is still "View larger".
export function ExpandableVisual({ image, children }: { image: Img; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();
  return (
    <div className="relative">
      {children}
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="absolute inset-0 z-10 cursor-zoom-in rounded-card"
      >
        <span className="sr-only">View larger: {image.alt}</span>
      </button>
      <dialog
        ref={dialog}
        aria-label={image.alt}
        onClick={(e) => {
          if (!(e.target as HTMLElement).closest("img, button")) close();
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-surface-inverse p-0 backdrop:bg-transparent"
      >
        <button
          type="button"
          autoFocus
          onClick={close}
          className="absolute top-3 right-3 z-10 inline-flex size-11 items-center justify-center rounded-pill bg-surface text-title hover:bg-surface-subtle"
        >
          <XIcon size={20} />
          <span className="sr-only">Close full size view</span>
        </button>
        <div className="flex h-full w-full overflow-auto p-4 tablet:p-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="100vw"
            style={{ "--fit": `min(100%, calc((100dvh - 4rem) * ${image.width / image.height}))` } as React.CSSProperties}
            className="m-auto h-auto w-[max(100%,960px)] max-w-none shrink-0 tablet:w-(--fit) tablet:shrink"
          />
        </div>
      </dialog>
    </div>
  );
}
