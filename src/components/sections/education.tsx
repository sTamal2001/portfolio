import { GraduationCap } from "lucide-react";
import { education } from "@/config/site";
import { Section } from "@/components/ui/section";

export function EducationSection() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education">
      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.short} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-accent">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold">
                {item.degree} <span className="font-normal text-faint">({item.short})</span>
              </h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <p className="mt-3 font-mono text-xs text-faint">
                {item.year} <span aria-hidden="true">·</span> {item.result}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
