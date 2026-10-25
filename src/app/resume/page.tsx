import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, Globe, Mail, MapPin } from "lucide-react";
import { site, skillGroups, experience, education, projects } from "@/config/site";
import { getResume } from "@/lib/resume";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { PrintButton } from "@/components/print-button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const metadata: Metadata = {
  title: "Tamal Sen — Résumé",
  description:
    "Official résumé of Tamal Sen, Software Developer. Verified engineering experience at BlueHorse Software Solutions, core technical competencies, and education credentials.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Tamal Sen — Résumé",
    description: "Software Developer résumé: React, Node.js, REST APIs, Laravel, PostgreSQL, and MongoDB.",
    url: "/resume",
  },
};

export default function ResumePage() {
  const resume = getResume();
  const { github, linkedin, email } = site.links;

  return (
    <>
      <Header resume={resume} />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Container className="max-w-4xl">
          {/* Top action toolbar (hidden on print) */}
          <div className="no-print mb-8 flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between shadow-xs">
            <Link
              href="/developer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-fg transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Developer Profile</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <PrintButton />
              {resume ? (
                <a
                  href={resume.href}
                  download={resume.downloadName}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-fg px-4 text-xs font-medium text-bg shadow-xs hover:bg-accent hover:text-accent-fg transition-colors"
                >
                  <FileDown className="size-3.5" />
                  <span>Download Verified PDF</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Résumé Paper Presentation Sheet */}
          <article className="resume-card rounded-2xl border border-border bg-surface p-8 sm:p-12 shadow-sm">
            {/* Header / Contact Details */}
            <header className="border-b border-border pb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">{site.name}</h1>
                <p className="font-mono text-sm font-semibold text-accent">{site.role}</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-faint" />
                  {site.location}
                </span>

                {email ? (
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 hover:text-accent">
                    <Mail className="size-3.5 text-faint" />
                    {email}
                  </a>
                ) : null}

                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    <LinkedinIcon className="size-3.5 text-faint" />
                    linkedin.com/in/stamal2001
                  </a>
                ) : null}

                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    <GithubIcon className="size-3.5 text-faint" />
                    github.com/sTamal2001
                  </a>
                ) : null}

                <a href={site.url} className="inline-flex items-center gap-1.5 hover:text-accent">
                  <Globe className="size-3.5 text-faint" />
                  tamalslab.in
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="resume-section border-b border-border py-6" aria-labelledby="summary-heading">
              <h2 id="summary-heading" className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                Professional Summary
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                Software Developer with hands-on experience in full-stack web application development and backend architecture. Proficient in React, Node.js, Express, REST APIs, Laravel, PostgreSQL, and MongoDB. Experienced in direct client requirements gathering, relational and document schema design, authentication protocols, and building dependable, maintainable software.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="resume-section border-b border-border py-6" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                Technical Skills
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.id} className="text-sm">
                    <span className="font-semibold text-fg">{group.title}: </span>
                    <span className="text-muted">
                      {group.skills.map((s) => s.name).join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section className="resume-section border-b border-border py-6" aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                Professional Experience
              </h2>

              <div className="mt-6 space-y-8">
                {experience.map((exp) => (
                  <div key={exp.organization} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold text-base text-fg">{exp.role}</h3>
                        <p className="text-sm text-muted">{exp.organization} · {exp.location}</p>
                      </div>
                      <span className="font-mono text-xs text-faint">
                        {exp.start} — {exp.end}
                      </span>
                    </div>

                    <div className="space-y-4 pt-1">
                      {exp.projects.map((proj) => (
                        <div key={proj.name} className="rounded-xl border border-border/70 bg-bg-subtle/50 p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h4 className="text-sm font-semibold text-fg">{proj.name}</h4>
                            <span className="font-mono text-xs text-faint">{proj.stack.join(" · ")}</span>
                          </div>
                          <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-muted list-disc list-inside">
                            {proj.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Engineering Projects */}
            <section className="resume-section border-b border-border py-6" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                Key Software Projects
              </h2>

              <div className="mt-5 space-y-5">
                {projects.map((proj) => (
                  <div key={proj.slug} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-fg">{proj.name}</h3>
                        <span className="font-mono text-[0.65rem] text-faint border border-border px-1.5 py-0.5 rounded">
                          {proj.category === "professional" ? "Client Work" : "Personal Project"}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-faint">{proj.stack.join(" · ")}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{proj.summary}</p>
                    <ul className="space-y-1 text-xs text-muted list-disc list-inside">
                      {proj.highlights.slice(0, 3).map((hl) => (
                        <li key={hl}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="resume-section pt-6" aria-labelledby="education-heading">
              <h2 id="education-heading" className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                Education
              </h2>

              <div className="mt-4 space-y-4">
                {education.map((edu) => (
                  <div key={edu.short} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm">
                    <div>
                      <h3 className="font-semibold text-fg">
                        {edu.degree} ({edu.short})
                      </h3>
                      <p className="text-xs text-muted">{edu.institution}</p>
                    </div>
                    <div className="font-mono text-xs text-faint">
                      <span>{edu.year}</span> · <span>{edu.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
