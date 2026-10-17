import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.72rem] leading-5 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
