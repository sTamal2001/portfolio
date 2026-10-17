import { Info } from "lucide-react";
import { workflow, workflowNote } from "@/config/site";
import { Section } from "@/components/ui/section";

export function Workflow() {
  return (
    <Section
      id="process"
      index="06"
      eyebrow="Process"
      title="How I approach software development"
      description="A repeatable sequence from understanding what's needed to delivering a working feature."
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {workflow.map((step, index) => (
          <li key={step.title} className="bg-surface p-6 transition-colors hover:bg-bg-subtle">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-[0.95rem] font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-faint">{step.description}</p>
          </li>
        ))}
        {/* The note fills the grid's last cell (7 steps + 1 note = 2 even rows). */}
        <li className="flex flex-col bg-bg-subtle p-6">
          <Info className="size-4 text-accent" aria-hidden="true" />
          <p className="mt-4 text-sm leading-relaxed text-muted">{workflowNote}</p>
        </li>
      </ol>
    </Section>
  );
}
