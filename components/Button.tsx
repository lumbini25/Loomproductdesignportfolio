import Link from "next/link";
import type { ReactNode } from "react";

// Figma Button (90:2039): Primary and Secondary, Medium (48px). "Outline" is the bordered
// "More about me" button drawn by hand on Home; it is not in the Figma component set yet.
export type ButtonVariant = "primary" | "secondary" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary: "font-jakarta font-semibold bg-primary text-on-inverse",
  secondary: "font-jakarta font-semibold bg-surface-inverse text-on-inverse",
  outline: "font-sans font-bold border border-title text-title",
};

const hovers: Record<ButtonVariant, string> = {
  primary: "hover:bg-primary-hover",
  secondary: "hover:bg-surface-inverse-hover",
  outline: "hover:bg-surface-subtle",
};

// Pass `ownHover: false` when a parent supplies the hover colour (the project card).
export function buttonClasses(variant: ButtonVariant = "primary", className = "", ownHover = true) {
  return [
    "inline-flex min-h-12 items-center justify-center rounded-control px-6 py-3 text-body-s",
    "motion-safe:transition-colors",
    variants[variant],
    ownHover ? hovers[variant] : "",
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
