import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  FileCode2,
  Layers,
  Mail,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { services, clientProcess, site } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Web Development Services | Tamal's Lab",
  description:
    "Software development services by Tamal Sen. Full-stack web application development, Laravel & React systems, REST API integration, WordPress modernization, and reliable application maintenance.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Development Services | Tamal's Lab",
    description:
      "Reliable web applications, REST APIs, and system maintenance. Direct developer collaboration with transparent milestones.",
    url: "/services",
  },
};

const serviceIcons = {
  "web-apps": Code2,
  "apis-integrations": Server,
  "wordpress": FileCode2,
  "maintenance-support": Wrench,
} as const;

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Services Hero */}
        <section aria-labelledby="services-title" className="relative isolate overflow-hidden pb-16 sm:pb-20">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <Container>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                <Cpu className="size-3.5 text-accent" />
                <span>Client & Technical Services</span>
              </div>

              <h1 id="services-title" className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
                Web Development & Engineering Services
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
                Practical, well-engineered web development for small businesses, startups, and agencies. Work directly with an engineer on custom web applications, backend APIs, or existing system improvements—with transparent communication and milestone-based deliverables.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg shadow-sm transition-colors hover:bg-accent hover:text-accent-fg"
                >
                  <Mail className="size-4" />
                  <span>Request a Project Quote</span>
                </Link>

                <Link
                  href="/work"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
                >
                  <Layers className="size-4" />
                  <span>Review Past Work</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section aria-labelledby="offerings-title" className="border-t border-border py-20 sm:py-28">
          <Container>
            <div className="mb-14">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">Capabilities</p>
              <h2 id="offerings-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Areas of Expertise
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted">
                Grounded in verified experience with React, Node.js, Laravel, REST APIs, and modern database architectures.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Code2;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="grid gap-8 rounded-2xl border border-border bg-surface p-7 sm:p-10 lg:grid-cols-12 lg:gap-12"
                  >
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl border border-border bg-bg-subtle text-accent">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <span className="font-mono text-xs text-faint">Service 0{index + 1}</span>
                          <h3 className="text-2xl font-semibold tracking-tight text-fg">{service.title}</h3>
                        </div>
                      </div>

                      <p className="mt-2 text-sm font-medium text-accent">{service.subtitle}</p>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">{service.description}</p>

                      <div className="mt-6 border-t border-border pt-5">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                          What This Solves
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {service.problemsSolved.map((prob) => (
                            <li key={prob} className="flex items-start gap-2.5">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              <span>{prob}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {service.caseStudySlug ? (
                        <div className="mt-7">
                          <Link
                            href={`/work#project-${service.caseStudySlug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                          >
                            <span>Related project case study</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:border-l lg:border-border lg:pl-10">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                          Who It Is For
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {service.forWhom.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 size-1.5 rounded-full bg-faint shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-border pt-6">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-faint font-semibold">
                          Core Capabilities & Deliverables
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {service.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2.5">
                              <CheckCircle2 className="size-4 text-ok shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/contact?subject=${encodeURIComponent(`Inquiry: ${service.title}`)}`}
                          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border-strong px-4 text-xs font-medium text-fg hover:border-fg/40 hover:bg-surface-2 transition-colors"
                        >
                          <span>Discuss this service</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Development Process */}
        <section aria-labelledby="process-title" className="border-t border-border py-20 sm:py-28 bg-bg-subtle/50">
          <Container>
            <div className="mb-14">
              <p className="font-mono text-xs uppercase tracking-wider text-faint">Structured Execution</p>
              <h2 id="process-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                The Development Process
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted">
                Every project follows a straightforward, collaborative process designed to ensure clarity, predictable progress, and reliable software.
              </p>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {clientProcess.map((step) => (
                <li key={step.step} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                  <span className="font-mono text-xs font-semibold text-accent">{step.step}</span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-fg">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted flex-1">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Honest Engagement Model & Availability */}
        <section aria-labelledby="engagement-title" className="border-t border-border py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="font-mono text-xs uppercase tracking-wider text-faint">Working Model</p>
                <h2 id="engagement-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Straightforward Collaboration
                </h2>
                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-muted">
                  <p>
                    I work directly with you—there are no account managers, outsourced handoffs, or hidden agency markups. Every line of code is written with attention to maintainability so that future developers can easily continue the work.
                  </p>
                  <p>
                    Projects are scoped transparently with clear milestone deliverables. Before writing code, we confirm expected behaviors and edge cases so there are no surprises down the line.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-faint">
                  <ShieldCheck className="size-5 text-ok" />
                  <span>Transparent scoping · Code ownership · Clean documentation</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 sm:p-10">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-fg">Have a project in mind?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Tell me about your requirements, existing stack, and timeline. I&apos;ll review your needs and let you know if I&apos;m the right fit.
                  </p>

                  <div className="mt-6 rounded-xl border border-border bg-bg-subtle p-4 font-mono text-xs text-muted">
                    <p className="text-fg font-semibold mb-1">Direct Contact:</p>
                    <p className="text-accent">{site.links.email}</p>
                    <p className="text-[0.7rem] text-faint mt-1">Typical response within 24–48 hours</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg shadow-sm transition-colors hover:bg-accent hover:text-accent-fg"
                  >
                    <span>Request a Quote / Discuss Project</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
