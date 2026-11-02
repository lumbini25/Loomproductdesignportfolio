"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { buttonClasses } from "@/components/Button";
import { gutter, wrapper } from "@/components/Container";
import { ListIcon, XIcon } from "@/components/icons";
import { nav, site } from "@/content/site";

// Figma "top nav" (103:2945). Full bar from 834 up; below 834 a 48.6px bar (408:2364) with a 71px
// logo and a menu button that opens a full-screen panel. Both keep 44px targets, using negative
// margins so they do not make the bar taller.
export function SiteHeader() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();

  // The panel only exists below 834. If the window widens while it is open, close it.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 834px)");
    const onChange = () => wide.matches && dialog.current?.close();
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  const textLink =
    "inline-flex min-h-11 items-center text-subtitle-s text-title hover:text-accent motion-safe:transition-colors";

  const links = (variant: "bar" | "panel") => {
    const cls =
      variant === "bar"
        ? textLink
        : "flex min-h-14 items-center text-h3-sm font-bold text-title hover:text-accent";
    const onClick = variant === "panel" ? close : undefined;
    return (
      <>
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cls}
              onClick={onClick}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {site.resumeUrl && (
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cls} underline`}
              onClick={onClick}
            >
              Resume<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        )}
        <li>
          <a
            href="#contact"
            className={buttonClasses("primary", variant === "panel" ? "mt-4 w-full" : "")}
            onClick={onClick}
          >
            Contact
          </a>
        </li>
      </>
    );
  };

  return (
    <header className="pt-[env(safe-area-inset-top)]">
      <div
        className={`${wrapper} flex items-center justify-between py-3 tablet:py-5 ${gutter}`}
      >
        <Link href="/" className="-my-2.5 inline-flex min-h-11 items-center tablet:my-0">
          <Image src="/images/logo.png" alt={site.logoAlt} width={130} height={45} preload className="h-auto w-[71px] tablet:w-[130px]" />
        </Link>

        <nav aria-label="Main" className="hidden tablet:block">
          <ul className="flex items-center gap-9">{links("bar")}</ul>
        </nav>

        <button
          type="button"
          className="-my-2.5 -mr-2.5 inline-flex size-11 items-center justify-center rounded-control text-title tablet:hidden"
          aria-haspopup="dialog"
          onClick={() => dialog.current?.showModal()}
        >
          <ListIcon size={24} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <dialog
        ref={dialog}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-surface p-0 tablet:hidden"
      >
        <div className={`flex items-center justify-between py-3 ${gutter} pt-[calc(env(safe-area-inset-top)+12px)]`}>
          <Image src="/images/logo.png" alt="" width={130} height={45} className="h-auto w-[71px]" />
          <button
            type="button"
            className="-my-2.5 -mr-2.5 inline-flex size-11 items-center justify-center rounded-control text-title"
            onClick={close}
          >
            <XIcon size={24} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Main" className={`${gutter} pt-6`}>
          <ul className="flex flex-col gap-2">{links("panel")}</ul>
        </nav>
      </dialog>
    </header>
  );
}
