"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-4 text-xs font-medium text-fg shadow-xs transition-colors hover:border-fg/40 hover:bg-surface-2 cursor-pointer"
    >
      <Printer className="size-3.5" aria-hidden="true" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
