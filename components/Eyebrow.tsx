import type { ReactNode } from "react";

// Caption M: Libre Baskerville Medium 12px, uppercase via CSS over sentence-case source text.
// Below 834, "Caption Mobile": Plus Jakarta SemiBold 9px.
// Every eyebrow is Primary/Text/Body (Rust 500): 5.9:1 on white, 5.3:1 on Beige 500
// (Lumbini, 2026-10-27). On dark or blue surfaces use light text instead; Rust fails there.
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-serif text-caption-m font-medium uppercase text-accent max-tablet:font-jakarta max-tablet:font-semibold ${className}`}>{children}</p>;
}
