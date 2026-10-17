import { ArrowDownLeft, ArrowUpRight, LayoutGrid, ListOrdered, PiggyBank, Repeat, Target, Wallet } from "lucide-react";

const bars = [38, 52, 44, 66, 48, 72, 58, 80, 54, 62, 46, 70];

const stats = [
  { label: "Income", icon: ArrowDownLeft, tone: "text-ok", width: "w-16" },
  { label: "Expenses", icon: ArrowUpRight, tone: "text-danger", width: "w-14" },
  { label: "Balance", icon: Wallet, tone: "text-accent", width: "w-12" },
];

const rows = [
  { dot: "bg-accent", width: "w-24", amount: "w-10", tone: "bg-danger/50" },
  { dot: "bg-ok", width: "w-32", amount: "w-12", tone: "bg-ok/50" },
  { dot: "bg-warn", width: "w-20", amount: "w-9", tone: "bg-danger/50" },
];

/**
 * Stylised illustration of the dashboard layout; the navigation mirrors the
 * real app's sections. Values are
 * intentionally abstract (skeleton bars) — it shows structure, not data.
 */
export function DashboardPreview() {
  return (
    <div className="flex min-h-[300px] text-fg sm:min-h-[340px]" aria-hidden="true">
      <aside className="hidden w-36 shrink-0 flex-col gap-1 border-r border-border bg-surface/70 p-3 sm:flex">
        <div className="mb-3 flex items-center gap-2 px-1.5">
          <span className="size-4 rounded bg-accent" />
          <span className="text-xs font-semibold">Ledgerly</span>
        </div>
        <span className="flex items-center gap-2 rounded-md bg-accent-soft px-2 py-1.5 text-[0.7rem] font-medium text-accent">
          <LayoutGrid className="size-3" /> Overview
        </span>
        {[
          { label: "Transactions", icon: ListOrdered },
          { label: "Budgets", icon: PiggyBank },
          { label: "Goals", icon: Target },
          { label: "Recurring", icon: Repeat },
        ].map(({ label, icon: Icon }) => (
          <span key={label} className="flex items-center gap-2 px-2 py-1.5 text-[0.7rem] text-faint">
            <Icon className="size-3" /> {label}
          </span>
        ))}
      </aside>

      <div className="min-w-0 flex-1 space-y-3 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Overview</span>
          <span className="h-4 w-16 rounded border border-border bg-surface" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stats.map(({ label, icon: Icon, tone, width }) => (
            <div key={label} className="rounded-lg border border-border bg-surface p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] text-faint sm:text-[0.65rem]">{label}</span>
                <Icon className={`size-3 ${tone}`} />
              </div>
              <span className={`mt-2 block h-2 rounded bg-fg/80 ${width} max-w-full`} />
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-medium">Spending</span>
            <span className="h-1.5 w-10 rounded bg-border" />
          </div>
          <div className="mt-3 flex h-20 items-end gap-1 sm:gap-1.5">
            {bars.map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-sm transition-colors duration-300 ${
                  index === 7 ? "bg-accent" : "bg-accent/25 group-hover/frame:bg-accent/35"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface">
          {rows.map((row, index) => (
            <div key={index} className="flex items-center gap-2.5 border-b border-border px-3 py-2 last:border-b-0">
              <span className={`size-1.5 rounded-full ${row.dot}`} />
              <span className={`h-1.5 rounded bg-fg/20 ${row.width}`} />
              <span className={`ml-auto h-1.5 rounded ${row.tone} ${row.amount}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
