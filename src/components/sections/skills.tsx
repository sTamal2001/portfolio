import { Database, Layout, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroup, type SkillStatus } from "@/config/site";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const groupIcons: Record<SkillGroup["id"], LucideIcon> = {
  frontend: Layout,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

const statusLabels: Record<SkillStatus, string> = {
  professional: "Used professionally",
  project: "Used in personal projects",
  learning: "Currently learning",
};

const statusSwatch: Record<SkillStatus, string> = {
  professional: "border-accent/50 bg-accent-soft",
  project: "border-border-strong bg-surface-2",
  learning: "border-dashed border-faint",
};

const statusChip: Record<SkillStatus, string> = {
  professional: "border-accent/35 bg-accent-soft text-fg hover:border-accent/70",
  project: "border-border-strong/70 bg-surface-2 text-fg hover:border-accent/50",
  learning: "border-dashed border-faint/70 text-muted",
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="Technical skills"
      description="Grouped by where they sit in an application, and marked by how I've used them — at work, in personal projects, or as something I'm currently learning."
    >
      <ul className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-faint lg:ml-[25%] lg:pl-2">
        {(Object.keys(statusLabels) as SkillStatus[]).map((status) => (
          <li key={status} className="inline-flex items-center gap-2">
            <span className={cn("h-3 w-5 rounded-sm border", statusSwatch[status])} aria-hidden="true" />
            {statusLabels[status]}
          </li>
        ))}
      </ul>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.id];
          return (
            <div key={group.id} className="bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border border-border bg-bg-subtle text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <p className="text-sm text-faint">{group.description}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={cn("rounded-md border px-2.5 py-1 text-sm transition-colors", statusChip[skill.status])}
                  >
                    {skill.name}
                    <span className="sr-only"> ({statusLabels[skill.status].toLowerCase()})</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
