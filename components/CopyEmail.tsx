"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/Button";
import { contact } from "@/content/site";

// Copies the address and announces the result. The address stays visible as text beside it,
// so it still works if the clipboard is unavailable.
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <>
      <button type="button" onClick={copy} className={buttonClasses("primary", "max-tablet:min-h-11 max-tablet:p-2 max-tablet:font-dm max-tablet:text-mobile-body-1 max-tablet:font-normal")}>
        {status === "copied" ? contact.copiedLabel : contact.copyLabel}
      </button>
      <span role="status" className="sr-only">
        {status === "copied" ? contact.copiedLabel : status === "failed" ? contact.copyFailed : ""}
      </span>
    </>
  );
}
