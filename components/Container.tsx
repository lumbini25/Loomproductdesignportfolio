import type { ReactNode } from "react";

// Page gutters: 16px at 390, 32px at 834, 80px from 1200 (Lumbini, 2026-10-28; Figma has 64).
export const gutter = "px-4 tablet:px-8 desktop:px-20";

// One fluid wrapper, centred, at most 1440 wide. At 390, 834 and 1440 it fills the viewport as the
// three fixed wrappers did; between them it no longer leaves wide empty margins (2026-10-28: a
// 1100px window had an 834px column, a 600px one a 390px column).
export const wrapper = "mx-auto w-full max-w-[1440px]";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${wrapper} ${gutter} ${className}`}>{children}</div>;
}
