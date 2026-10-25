import Link from "next/link";
import { ArrowRight, Code2, Database, Layers, Mail, Server, ShieldCheck, Terminal } from "lucide-react";
import { site } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

const featuredTech = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel & PHP", category: "Backend" },
  { name: "REST APIs", category: "Architecture" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Linux & Hosting", category: "Deployment" },
];

export default function HomePage() {
  const brandJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    url: site.url,
    description: site.seoDescription,
    author: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      url: `${site.url}/developer`,
      sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
    },
  };

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
        >
          {/* Subtle background ambient grid */}
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <div
            aria-hidden="true"
            className="absolute top-12 left-1/2 -z-10 h-[480px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-accent/8 blur-[130px] dark:bg-accent/12"
          />

          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                {/* Brand pill badge */}
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs text-muted shadow-sm backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-ok" />
                  </span>
                  <span className="font-mono tracking-wide uppercase text-[0.7rem] text-faint">
                    {site.brandName}
                  </span>
                  <span aria-hidden="true" className="text-border">·</span>
                  <span>Software Development Space</span>
                </div>

                <h1
                  id="hero-heading"
                  className="text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.6rem] lg:leading-[1.12]"
                >
                  {site.homeHeadline}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                  {site.homeIntro}
                </p>

                {/* Direct clean pathways */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/work"
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg shadow-sm transition-all hover:bg-accent hover:text-accent-fg"
                  >
                    Explore Projects
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/developer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-surface-2"
                  >
                    Developer Background
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-muted transition-colors hover:text-fg hover:bg-surface-2"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Social & direct email link */}
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted">
                  {site.links.email ? (
                    <a
                      href={`mailto:${site.links.email}`}
                      className="inline-flex items-center gap-2 font-mono text-xs text-faint hover:text-accent transition-colors"
                    >
                      <Mail className="size-3.5 text-accent" />
                      {site.links.email}
                    </a>
                  ) : null}

                  {site.links.github ? (
                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-fg transition-colors"
                    >
                      <GithubIcon className="size-3.5" />
                      GitHub
                    </a>
                  ) : null}

                  {site.links.linkedin ? (
                    <a
                      href={site.links.linkedin}
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

              {/* Lab Visual Architecture Card */}
              <div className="lg:col-span-5">
                <LabSystemVisual />
              </div>
            </div>
          </Container>
        </section>

        {/* Selected Technical Focus */}
        <section aria-labelledby="focus-heading" className="border-t border-border py-16 sm:py-20 bg-bg-subtle/50">
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-mono text-xs tracking-wider uppercase text-faint">Core Foundations</p>
                <h2 id="focus-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Technologies & Engineering Focus
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted leading-relaxed">
                  Focusing on reliable application backends, structured database schemas, and responsive web interfaces.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 max-w-xl">
                {featuredTech.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium shadow-xs"
                  >
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{tech.name}</span>
                    <span className="font-mono text-[0.65rem] text-faint uppercase">{tech.category}</span>
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section Gateway Cards */}
        <section aria-label="Explore Tamal's Lab" className="border-t border-border py-16 sm:py-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: Projects */}
              <Link
                href="/work"
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:border-accent/50 hover:shadow-md"
              >
                <div>
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                    <Layers className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                    Technical Portfolio
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Explore real projects including Ledgerly, the Employee Management REST API, and professional business applications.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono font-medium text-accent">
                  <span>View case studies</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Card 2: Developer Profile */}
              <Link
                href="/developer"
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:border-accent/50 hover:shadow-md"
              >
                <div>
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                    <Code2 className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                    Developer Profile
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Technical problem-solving, engineering workflow, verified experience at BlueHorse, and academic credentials.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono font-medium text-accent">
                  <span>Review background</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Card 3: Contact */}
              <Link
                href="/contact"
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:border-accent/50 hover:shadow-md"
              >
                <div>
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                    <Mail className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                    Contact & Collaboration
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Inquire about software engineering roles, technical projects, or discuss software collaboration directly.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono font-medium text-accent">
                  <span>Get in touch</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

/** Visual architecture representation for Tamal's Lab */
function LabSystemVisual() {
  return (
    <figure className="relative mx-auto max-w-md rounded-2xl border border-border bg-surface/80 p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_24px_48px_-24px_rgb(11_21_48/0.14)] backdrop-blur-sm dark:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)]">
      <figcaption className="mb-4 flex items-center justify-between font-mono text-xs text-faint border-b border-border pb-3">
        <span className="flex items-center gap-2">
          <Terminal className="size-3.5 text-accent" />
          <span>system::overview</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.7rem]">
          <span className="size-1.5 rounded-full bg-ok" />
          operational
        </span>
      </figcaption>

      <div className="space-y-3 font-mono text-xs">
        <div className="rounded-xl border border-border bg-bg-subtle p-3.5">
          <div className="flex items-center justify-between text-fg font-medium">
            <span className="flex items-center gap-2">
              <Code2 className="size-3.5 text-accent" />
              <span>Application Layer</span>
            </span>
            <span className="text-[0.65rem] text-faint">Client & Admin</span>
          </div>
          <p className="mt-1 text-[0.75rem] text-muted font-sans">
            React, Next.js, and Blade templates crafted for clear usability and responsiveness.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-bg-subtle p-3.5">
          <div className="flex items-center justify-between text-fg font-medium">
            <span className="flex items-center gap-2">
              <Server className="size-3.5 text-accent" />
              <span>API & Logic Layer</span>
            </span>
            <span className="text-[0.65rem] text-faint">REST · Auth</span>
          </div>
          <p className="mt-1 text-[0.75rem] text-muted font-sans">
            Node.js, Express, and Laravel backends with JWT authentication and request validation.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-bg-subtle p-3.5">
          <div className="flex items-center justify-between text-fg font-medium">
            <span className="flex items-center gap-2">
              <Database className="size-3.5 text-accent" />
              <span>Data Architecture</span>
            </span>
            <span className="text-[0.65rem] text-faint">SQL · Document</span>
          </div>
          <p className="mt-1 text-[0.75rem] text-muted font-sans">
            PostgreSQL and MongoDB modeled around practical access patterns and data integrity.
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[0.7rem] font-mono text-faint">
        <span>Tamal&apos;s Lab · Software Engineering</span>
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="size-3 text-ok" />
          <span>production-ready</span>
        </span>
      </div>
    </figure>
  );
}
