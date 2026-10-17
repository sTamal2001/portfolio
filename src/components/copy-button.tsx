"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

type Status = "idle" | "copied" | "failed";

/** Copies `value` to the clipboard and announces the result to screen readers. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      // The async Clipboard API can be blocked (insecure context, permissions,
      // embedded frames), so fall back to the older selection-based copy.
      setStatus(legacyCopy(value) ? "copied" : "failed");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="inline-flex size-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-border text-xs sm:w-auto sm:px-3 font-medium text-muted transition-colors hover:border-accent/50 hover:text-fg"
    >
      {status === "copied" ? (
        <Check className="size-3.5 text-ok" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      <span aria-live="polite" className="sr-only sm:not-sr-only">{status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy"}</span>
    </button>
  );
}

function legacyCopy(value: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}
