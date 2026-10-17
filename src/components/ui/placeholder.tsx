import { showPlaceholders } from "@/lib/utils";

/**
 * Development-only marker for content that still needs to be configured in
 * `src/config/site.ts`. Renders nothing in production builds.
 */
export function Placeholder({ label }: { label: string }) {
  if (!showPlaceholders) return null;

  return (
    <span
      title="Shown in development only — configure this in src/config/site.ts"
      className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-warn/60 px-2 py-1 font-mono text-[0.7rem] text-warn"
    >
      <span aria-hidden="true">●</span>
      {label}
    </span>
  );
}
