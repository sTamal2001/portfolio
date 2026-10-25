import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Tamal's Lab | Software Projects",
  description:
    "Technical case studies and engineering portfolio of Tamal's Lab. Explore Ledgerly, the Employee Management REST API, SaaS CMS platform, and AuditFlow lease accounting application.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Tamal's Lab | Software Projects",
    description:
      "Technical case studies: React, Node.js, Express, Laravel, PostgreSQL, and MongoDB applications.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Work Hero */}
        <section aria-labelledby="work-title" className="relative isolate overflow-hidden pb-12 sm:pb-16">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <Container>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                <Layers className="size-3.5 text-accent" />
                <span>Technical Case Studies</span>
              </div>

              <h1 id="work-title" className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
                Software Projects & Engineering Work
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
                An in-depth look at business web applications I&apos;ve developed professionally and independent software projects. Each case study covers the problem, technical architecture, engineering decisions, and my specific contributions.
              </p>
            </div>
          </Container>
        </section>

        {/* Projects list with full previews and case study expanders */}
        <Projects />

        {/* Cross-linking CTA to Services and Developer */}
        <section aria-label="Explore more" className="border-t border-border py-16 bg-bg-subtle/50">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <div>
                  <span className="font-mono text-xs text-faint uppercase tracking-wider">For Teams & Clients</span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">
                    Looking to build or improve software?
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Explore available development services including web application development, custom REST APIs, and application support.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <span>View Development Services</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <div>
                  <span className="font-mono text-xs text-faint uppercase tracking-wider">For Hiring & Recruiters</span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">
                    Review engineering background
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Review full technical skills matrix, professional experience at BlueHorse, development workflow, and verified credentials.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/developer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    <span>Developer Profile & Résumé</span>
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
