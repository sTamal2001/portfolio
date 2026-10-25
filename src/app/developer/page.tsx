import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileDown, FileText, Layers, Mail, MapPin } from "lucide-react";
import { site, projects } from "@/config/site";
import { getResume } from "@/lib/resume";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Skills } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { Workflow } from "@/components/sections/workflow";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const metadata: Metadata = {
  title: "Tamal Sen | Software Developer",
  description:
    "Professional developer profile of Tamal Sen, Software Developer. Verified engineering experience, full-stack technical competencies, development workflow, and education.",
  alternates: { canonical: "/developer" },
  openGraph: {
    title: "Tamal Sen | Software Developer",
    description:
      "Software Developer building practical web applications and backend systems with React, Node.js, Laravel, PostgreSQL, and MongoDB.",
    url: "/developer",
  },
};

export default function DeveloperPage() {
  const resume = getResume();
  const { github, linkedin, email } = site.links;

  const developerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: `${site.url}/developer`,
    worksFor: {
      "@type": "Organization",
      name: "BlueHorse Software Solutions Pvt Ltd",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Laravel",
      "PHP",
      "WordPress",
      "Prisma ORM",
      "Database Design",
    ],
    sameAs: [github, linkedin].filter(Boolean),
  };

  return (
    <>
      <Header resume={resume} />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Developer Introduction */}
        <section aria-labelledby="developer-title" className="relative isolate overflow-hidden pb-16 sm:pb-20">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <Container>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                <span>Professional Engineering Profile</span>
              </div>

              <h1 id="developer-title" className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-2 text-xl font-medium text-muted">
                {site.role} <span className="text-faint">· BlueHorse Software Solutions</span>
              </p>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
                I build business web applications and backend systems across the stack. My focus is on practical problem-solving: translating client requirements into working application features, designing clear database schemas and REST APIs, and maintaining readable, dependable code.
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/resume"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg hover:bg-accent hover:text-accent-fg transition-colors"
                >
                  <FileText className="size-4" />
                  View Résumé
                </Link>

                {resume ? (
                  <a
                    href={resume.href}
                    download={resume.downloadName}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
                  >
                    <FileDown className="size-4" />
                    Download PDF
                  </a>
                ) : null}

                <Link
                  href="/work"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
                >
                  <Layers className="size-4" />
                  Technical Case Studies
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-muted hover:text-fg hover:bg-surface-2 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Verified metadata links */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-faint" />
                  {site.location}
                </span>

                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-faint hover:text-accent transition-colors"
                  >
                    <Mail className="size-3.5 text-accent" />
                    {email}
                  </a>
                ) : null}

                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-fg transition-colors"
                  >
                    <GithubIcon className="size-3.5" />
                    GitHub
                  </a>
                ) : null}

                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-fg transition-colors"
                  >
                    <LinkedinIcon className="size-3.5" />
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </div>
          </Container>
        </section>

        {/* Technical Skills Section */}
        <Skills />

        {/* Selected Project Highlights (Linking directly to /work) */}
        <section aria-labelledby="selected-projects-title" className="border-t border-border py-20 sm:py-28">
          <Container>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-faint">Portfolio Summary</p>
                <h2 id="selected-projects-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Selected Engineering Projects
                </h2>
                <p className="mt-3 max-w-xl text-base text-muted">
                  A selection of professional client implementations and personal backend systems.
                </p>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <span>View full case studies & architecture</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-colors hover:border-accent/40"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-faint mb-3">
                      <span className="uppercase tracking-wider">
                        {project.category === "professional" ? "Professional Work" : "Personal Project"}
                      </span>
                      {project.organization ? <span>{project.organization}</span> : null}
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
                    <p className="mt-1 text-sm text-faint font-medium">{project.tagline}</p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{project.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <Link
                      href={`/work#project-${project.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                    >
                      Technical details & case study
                      <ArrowRight className="size-3" />
                    </Link>

                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted hover:text-fg"
                      >
                        Live Demo
                        <ArrowUpRight className="size-3" />
                      </a>
                    ) : null}

                    {project.links.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted hover:text-fg"
                      >
                        Source Code
                        <ArrowUpRight className="size-3" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Verified Professional Experience */}
        <ExperienceSection />

        {/* Verified Education */}
        <EducationSection />

        {/* Development Workflow */}
        <Workflow />

        {/* Bottom CTA to Résumé & Contact */}
        <section aria-label="Next steps" className="border-t border-border py-16 bg-bg-subtle/50">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Need a full document format?</h3>
                <p className="mt-1 text-sm text-muted">
                  View the complete web résumé with clean print styles or download the verified PDF.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/resume"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg hover:bg-accent hover:text-accent-fg transition-colors"
                >
                  <FileText className="size-4" />
                  View Résumé
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
