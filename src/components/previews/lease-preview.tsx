import { ChevronRight, MessagesSquare, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = ["Requirements", "Tasks", "Build", "Test", "Refine"];
const rows = [
  { width: "w-24", status: "bg-ok/40" },
  { width: "w-16", status: "bg-warn/40" },
  { width: "w-20", status: "bg-ok/40" },
  { width: "w-28", status: "bg-accent/40" },
];

/**
 * Abstract business-software view: the requirement-to-delivery loop used on
 * the project, above a generic records table. Contains no client data.
 */
export function LeasePreview() {
  return (
    <div className="min-h-[300px] space-y-3 p-3 sm:min-h-[340px] sm:p-5" aria-hidden="true">
      <div className="rounded-lg border border-border bg-surface p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold">
            <MessagesSquare className="size-3 text-accent" /> Client requirements
          </span>
          <RotateCcw className="size-3 text-faint" />
        </div>
        <ol className="flex flex-wrap items-center gap-1">
          {stages.map((stage, index) => (
            <li key={stage} className="flex items-center gap-1">
              <span
                className={cn(
                  "rounded px-1.5 py-0.5 font-mono text-[0.6rem] sm:text-[0.65rem]",
                  index === 0 ? "bg-fg text-bg" : "bg-surface-2 text-muted",
                )}
              >
                {stage}
              </span>
              {index < stages.length - 1 ? <ChevronRight className="size-3 text-faint" /> : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
          <span className="text-[0.7rem] font-semibold">Leases</span>
          <span className="flex gap-1.5">
            <span className="h-4 w-12 rounded border border-border" />
            <span className="h-4 w-10 rounded bg-accent" />
          </span>
        </div>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] gap-3 border-b border-border bg-bg-subtle px-3 py-2">
          {["w-10", "w-8", "w-8", "w-6"].map((width, index) => (
            <span key={index} className={`h-1 rounded bg-faint/50 ${width}`} />
          ))}
        </div>
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] items-center gap-3 border-b border-border px-3 py-2.5 last:border-b-0">
            <span className={`h-1.5 max-w-full rounded bg-fg/25 ${row.width}`} />
            <span className="h-1.5 w-10 max-w-full rounded bg-fg/15" />
            <span className="h-1.5 w-8 max-w-full rounded bg-fg/15" />
            <span className={`h-2.5 w-full rounded-full ${row.status}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
