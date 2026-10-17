import type { ReactNode } from "react";
import { ArrowUpRight, Briefcase, Check, ChevronDown, Code2, Lock } from "lucide-react";
import { projectGroups, projects, type Project, type ProjectCategory, type ProjectNote } from "@/config/site";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Placeholder } from "@/components/ui/placeholder";
import { GithubIcon } from "@/components/ui/brand-icons";
import { ProjectPreview } from "@/components/previews/project-preview";
import { cn } from "@/lib/utils";

const groupOrder: ProjectCategory[] = ["professional", "personal"];
const groupIcons = { professional: Briefcase, personal: Code2 } as const;

export function Projects() {
  // Numbering runs across both groups so every project has a unique index.
  let counter = 0;
  const groups = groupOrder
    .map((category) => ({
      category,
      items: projects.filter((project) => project.category === category).map((project) => ({ project, index: counter++ })),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected projects"
      description="Business applications I've worked on professionally, and independent projects that show how I approach backend and full-stack work."
    >
      {groups.length > 0 ? (
        <div className="space-y-24 sm:space-y-32">
          {groups.map(({ category, items }) => {
            const Icon = groupIcons[category];
            const group = projectGroups[category];
            const headingId = `projects-${category}`;
            return (
              <section key={category} aria-labelledby={headingId}>
                <header className="mb-12 flex flex-col gap-3 border-b border-border pb-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                  <h3 id={headingId} className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                    <span className="grid size-9 place-items-center rounded-lg border border-border bg-bg-subtle text-accent">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {group.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-faint sm:text-right">{group.description}</p>
                </header>
                <div className="space-y-20 sm:space-y-28">
                  {items.map(({ project, index }) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border-strong p-10 text-center text-muted">
          Projects will be added here soon.
        </p>
      )}
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const titleId = `project-${project.slug}-title`;
  const { github, demo } = project.links;
  const professional = project.category === "professional";

  return (
    <article id={`project-${project.slug}`} aria-labelledby={titleId} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={cn("min-w-0 lg:col-span-7", reversed && "lg:order-2")}>
        <ProjectPreview project={project} />
      </div>

      <div className={cn("min-w-0 lg:col-span-5 lg:pt-2", reversed && "lg:order-1")}>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-faint">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true">—</span>
          <span
            className={cn(
              "rounded px-1.5 py-0.5",
              professional ? "bg-accent-soft text-accent" : "border border-border text-muted",
            )}
          >
            {professional ? "Professional work" : "Personal project"}
          </span>
          {project.organization ? <span>{project.organization}</span> : null}
        </p>
        <h4 id={titleId} className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
          {project.name}
        </h4>
        <p className="mt-1 text-sm font-medium text-muted">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted text-pretty">{project.summary}</p>

        <p className="mt-6 font-mono text-xs tracking-wide text-faint uppercase">{project.highlightsTitle}</p>
        <ul className="mt-3 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo (opens in a new tab)`}
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-fg px-4 text-bg transition-colors hover:bg-accent hover:text-accent-fg"
            >
              Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border-strong px-4 transition-colors hover:border-fg/40 hover:bg-surface-2"
            >
              <GithubIcon className="size-4" /> Source code
            </a>
          ) : null}
          {project.privateNote ? (
            <span className="inline-flex items-start gap-2 font-normal text-faint">
              <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              {project.privateNote}
            </span>
          ) : (
            <>
              {!github ? <Placeholder label="GitHub repo URL (optional)" /> : null}
              {!demo ? <Placeholder label="Live demo URL (optional)" /> : null}
            </>
          )}
        </div>
      </div>

      {project.notes.length > 0 ? (
        <details className="group rounded-2xl border border-border bg-surface lg:order-3 lg:col-span-12">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-colors hover:bg-bg-subtle sm:px-6 [&::-webkit-details-marker]:hidden">
            <span>
              {professional ? "Case study" : "Engineering notes"}
              <span className="ml-2 font-normal text-faint">
                — {project.notes.map((note) => note.title.toLowerCase()).join(", ")}
              </span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-faint transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div
            className={cn(
              "grid gap-8 border-t border-border px-5 py-6 sm:px-6 md:grid-cols-2",
              project.notes.length === 3 && "lg:grid-cols-3",
              project.notes.length >= 4 && "lg:grid-cols-4",
            )}
          >
            {project.notes.map((note) => (
              <NoteBlock key={note.title} note={note} />
            ))}
          </div>
        </details>
      ) : null}
    </article>
  );
}

function NoteBlock({ note }: { note: ProjectNote }) {
  let content: ReactNode;
  if (typeof note.body === "string") {
    content = <p>{note.body}</p>;
  } else {
    content = (
      <ul className="space-y-2">
        {note.body.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-[0.65em] h-px w-2.5 shrink-0 bg-faint" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h5 className="font-mono text-xs tracking-wide text-faint uppercase">{note.title}</h5>
      <div className="mt-3 text-sm leading-relaxed text-muted">{content}</div>
    </div>
  );
}
