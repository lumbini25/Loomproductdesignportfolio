import type { ReactNode } from "react";

// A desktop monitor drawn around a screenshot (TDK's opening, Lumbini 2026-10-29): a dark bezel
// with a deeper chin, then a neck and a base. Pure CSS, so it scales with the image it holds.
export function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="rounded-media bg-surface-inverse px-[2.5%] pt-[2.5%] pb-[5%] shadow-card-hover">
        <div className="overflow-hidden rounded-tag">{children}</div>
      </div>
      <div aria-hidden="true" className="mx-auto aspect-[3/2] w-[14%] bg-device-stand" />
      <div aria-hidden="true" className="mx-auto h-2.5 w-[38%] rounded-pill bg-device-stand" />
    </div>
  );
}
