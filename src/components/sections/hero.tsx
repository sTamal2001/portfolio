import { ArrowDownRight, Database, FileDown, MapPin, Monitor, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import type { ResumeLink } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Placeholder } from "@/components/ui/placeholder";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const coreStack = [
  { name: "React", color: "bg-sky-500" },
  { name: "Node.js", color: "bg-emerald-600" },
  { name: "PostgreSQL", color: "bg-blue-600" },
  { name: "MongoDB", color: "bg-green-700" },
];

export function Hero({ resume }: { resume: ResumeLink | null }) {
  const { github, linkedin } = site.links;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-[420px] w-[760px] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dark:bg-accent/15"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {site.availability ? (
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 py-1 pr-3 pl-2 text-xs text-muted">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-ok" />
              </span>
              {site.availability}
            </p>
          ) : null}

          <p className="text-base font-medium sm:text-lg">
            {site.name}
            <span className="text-faint"> — {site.role}</span>
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-[2.15rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.6rem]"
          >
            {site.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">{site.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="#projects">
              View Projects
              <ArrowDownRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
            {resume ? (
              <ButtonLink href={resume.href} download={resume.downloadName} variant="secondary">
                <FileDown className="size-4" aria-hidden="true" />
                Download Resume
              </ButtonLink>
            ) : (
              <Placeholder label="Add resume PDF" />
            )}
            <ButtonLink href="#contact" variant="ghost">
              Contact Me
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-faint" aria-hidden="true" />
              {site.location}
            </li>
            <li>
              {github ? (
                <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              ) : (
                <Placeholder label="GitHub URL" />
              )}
            </li>
            <li>
              {linkedin ? (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              ) : (
                <Placeholder label="LinkedIn URL" />
              )}
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6">
            <span className="font-mono text-[0.7rem] tracking-wide text-faint uppercase">Core stack</span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {coreStack.map((tech) => (
                <li key={tech.name} className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className={`size-1.5 rounded-full ${tech.color}`} aria-hidden="true" />
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ArchitectureVisual />
        </div>
      </Container>
    </section>
  );
}

interface Layer {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
}

const layers: Layer[] = [
  { icon: Monitor, title: "Interface", description: "Pages & components", tech: ["React", "Next.js"] },
  { icon: Server, title: "API", description: "Endpoints & auth", tech: ["Node.js", "Express", "Laravel"] },
  { icon: Database, title: "Data", description: "Schema & queries", tech: ["PostgreSQL", "MongoDB"] },
];

const connectors = ["HTTPS · JSON", "SQL"];

/** Abstract diagram of the layers I usually work across. Decorative but labelled. */
function ArchitectureVisual() {
  return (
    <figure className="relative mx-auto max-w-md rounded-2xl border border-border bg-surface/80 p-4 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_24px_48px_-24px_rgb(11_21_48/0.18)] backdrop-blur-sm sm:p-5 lg:max-w-none dark:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)]">
      <figcaption className="mb-4 flex items-center justify-between font-mono text-[0.7rem] text-faint">
        <span>How I build</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          request flow
        </span>
      </figcaption>

      <ol className="relative">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          const connector = connectors[index];
          return (
            <li key={layer.title}>
              <div className="group flex items-center gap-3 rounded-xl border border-border bg-bg-subtle p-4 transition-colors duration-200 hover:border-accent/40">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-surface text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{layer.title}</span>
                  <span className="block truncate text-xs text-faint">{layer.description}</span>
                </span>
                <span className="hidden flex-wrap justify-end gap-1 min-[400px]:flex">
                  {layer.tech.map((tech) => (
                    <span key={tech} className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.65rem] text-muted">
                      {tech}
                    </span>
                  ))}
                </span>
              </div>
              {connector ? (
                <div className="relative h-10" aria-hidden="true">
                  <span className="absolute top-0 bottom-0 left-[34px] w-px bg-border-strong" />
                  <span className="animate-travel absolute top-0 left-[32px] size-[5px] rounded-full bg-accent" style={{ animationDelay: `${index * 1.2}s` }} />
                  <span className="absolute top-1/2 left-14 -translate-y-1/2 font-mono text-[0.65rem] text-faint">{connector}</span>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
