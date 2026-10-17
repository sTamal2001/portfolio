import { FileText, Globe, Layers, LayoutGrid } from "lucide-react";

const sites = ["Website A", "Website B", "Website C"];
const rows = ["w-28", "w-20", "w-24", "w-16"];

/**
 * Abstract view of a CMS admin platform serving content to several websites
 * through an API. Generic on purpose — no client names or real screens.
 */
export function CmsPreview() {
  return (
    <div className="grid min-h-[300px] grid-cols-[1fr_auto_0.8fr] items-center gap-2 p-3 sm:min-h-[340px] sm:gap-3 sm:p-5" aria-hidden="true">
      <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-surface">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <LayoutGrid className="size-3 text-accent" />
          <span className="text-[0.65rem] font-semibold">Admin</span>
        </div>
        <div className="flex">
          <div className="hidden w-20 shrink-0 space-y-1 border-r border-border p-2 sm:block">
            <span className="flex items-center gap-1.5 rounded bg-accent-soft px-1.5 py-1 text-[0.6rem] font-medium text-accent">
              <Layers className="size-2.5" /> Sites
            </span>
            <span className="flex items-center gap-1.5 px-1.5 py-1 text-[0.6rem] text-faint">
              <FileText className="size-2.5" /> Content
            </span>
            <span className="mx-1.5 mt-2 block h-1 w-10 rounded bg-border" />
          </div>
          <div className="min-w-0 flex-1 p-2.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="h-1.5 w-14 rounded bg-fg/70" />
              <span className="h-3.5 w-10 rounded bg-accent" />
            </div>
            {rows.map((width, index) => (
              <div key={index} className="flex items-center gap-2 border-t border-border py-2">
                <span className="size-3 shrink-0 rounded-sm border border-border-strong" />
                <span className={`h-1.5 max-w-full rounded bg-fg/20 ${width}`} />
                <span className="ml-auto h-1.5 w-6 shrink-0 rounded bg-ok/40" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 text-faint">
        <span className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.55rem] sm:text-[0.6rem]">REST</span>
        <span className="h-16 w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent sm:h-24" />
        <span className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.55rem] sm:text-[0.6rem]">JSON</span>
      </div>

      <div className="min-w-0 space-y-2">
        {sites.map((site) => (
          <div key={site} className="rounded-lg border border-border bg-surface p-2.5 transition-colors group-hover/frame:border-accent/30">
            <div className="flex items-center gap-1.5">
              <Globe className="size-3 shrink-0 text-accent" />
              <span className="truncate text-[0.62rem] font-medium">{site}</span>
            </div>
            <span className="mt-2 block h-1 w-4/5 rounded bg-fg/15" />
            <span className="mt-1 block h-1 w-1/2 rounded bg-fg/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
