import Link from "next/link";
import type { ReactNode } from "react";

// Figma "Button / Mobile" (373:1770), at every width (Lumbini, 2026-11-08). One Primary per area,
// for its main action; everything else is Secondary.
export type ButtonVariant = "primary" | "secondary";

const variants: Record<ButtonVariant, string> = {
  primary: "py-3 bg-primary text-on-inverse",
  // White, a 1.5px Primary border (Figma's width; there is no border token) and Primary text. 2px
  // less padding than Primary makes up for the border, so both are 48px tall.
  secondary: "py-2.5 border-[1.5px] border-primary bg-surface text-accent",
};

// Secondary's hover fill, Rust 25, is bound to Surface subtle, the nearest token.
const hovers: Record<ButtonVariant, string> = {
  primary: "hover:bg-primary-hover",
  secondary: "hover:bg-surface-subtle",
};

// Pressed: no hover fill, and a Primary/border/darker border, bound to Title, the nearest token.
// Primary draws it inset, so the button does not grow.
const pressed: Record<ButtonVariant, string> = {
  primary: "active:bg-primary active:ring-1 active:ring-inset active:ring-title",
  secondary: "active:bg-surface active:border-title",
};

// Pass `ownHover: false` when a parent supplies the hover colour (the project card).
export function buttonClasses(variant: ButtonVariant = "primary", className = "", ownHover = true) {
  return [
    // Plus Jakarta SemiBold for every type (Lumbini, 2026-11-08).
    "inline-flex min-h-12 items-center justify-center rounded-control px-6 font-button text-body-s font-semibold",
    "motion-safe:transition-colors",
    variants[variant],
    ownHover ? hovers[variant] : "",
    pressed[variant],
    className,
  ].join(" ");
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant, external, className, children }: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
