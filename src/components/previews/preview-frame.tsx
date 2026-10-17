import type { ReactNode } from "react";

interface PreviewFrameProps {
  /** Text shown in the window's address/title bar. */
  label: string;
  /** Honest caption describing what the preview is. */
  caption: string;
  children: ReactNode;
}

/** Minimal window chrome around a project illustration. */
export function PreviewFrame({ label, caption, children }: PreviewFrameProps) {
  return (
    <figure className="group/frame">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgb(0_0_0/0.04),0_30px_60px_-30px_rgb(11_21_48/0.25)] transition-[transform,box-shadow] duration-300 group-hover/frame:-translate-y-0.5 group-hover/frame:shadow-[0_1px_2px_rgb(0_0_0/0.04),0_40px_70px_-30px_rgb(11_21_48/0.3)] dark:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]">
        <div className="flex items-center gap-3 border-b border-border bg-bg-subtle px-4 py-2.5" aria-hidden="true">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
          </span>
          <span className="mx-auto max-w-[70%] truncate rounded-md border border-border bg-surface px-3 py-0.5 font-mono text-[0.65rem] text-faint">
            {label}
          </span>
          <span className="w-[42px]" />
        </div>
        <div className="bg-dots">{children}</div>
      </div>
      <figcaption className="mt-3 font-mono text-[0.68rem] text-faint">{caption}</figcaption>
    </figure>
  );
}
