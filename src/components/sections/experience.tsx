import { experience } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Placeholder } from "@/components/ui/placeholder";

export function ExperienceSection() {
  return (
    <Section id="experience" index="04" eyebrow="Experience" title="Professional experience">
      <ol className="relative space-y-12">
        {experience.map((item) => (
          <li key={`${item.organization}-${item.start}`} className="grid gap-4 lg:grid-cols-12 lg:gap-8">
            <p className="font-mono text-sm text-faint lg:col-span-3 lg:pt-1">
              <time>{item.start}</time> — <time>{item.end}</time>
            </p>

            <div className="relative border-l border-border pl-6 lg:col-span-9">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[5px] size-[9px] rounded-full border-2 border-bg bg-accent ring-1 ring-accent/30"
              />
              <h3 className="text-xl font-semibold tracking-tight">
                {item.role ?? <Placeholder label="Job title" />}
              </h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 text-base font-medium text-muted">
                {item.organization}
                {item.location ? <span className="font-normal text-faint">{item.location}</span> : null}
              </p>
              <p className="mt-3 text-[0.95rem] text-muted">{item.focus}</p>

              <ul className="mt-8 space-y-4">
                {item.projects.map((project) => (
                  <li key={project.name} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h4 className="font-semibold">{project.name}</h4>
                      <ul className="flex flex-wrap gap-1.5 sm:justify-end" aria-label={`${project.name} technologies`}>
                        {project.stack.map((tech) => (
                          <li key={tech}>
                            <Badge>{tech}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {project.items.map((point) => (
                        <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-faint" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
