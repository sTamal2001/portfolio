import type { Metadata } from "next";
import { Clock, Mail, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { InquiryComposer } from "@/components/inquiry-composer";
import { CopyButton } from "@/components/copy-button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const metadata: Metadata = {
  title: "Contact | Tamal's Lab",
  description:
    "Get in touch with Tamal Sen at Tamal's Lab. Inquire about software developer roles, client web development projects, or technical collaborations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Tamal's Lab",
    description: "Direct engineering contact for hiring and web development inquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const { email, github, linkedin } = site.links;

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Contact Hero */}
        <section aria-labelledby="contact-title" className="relative isolate overflow-hidden pb-12 sm:pb-16">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
          <Container>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                <Mail className="size-3.5 text-accent" />
                <span>Professional Inquiries</span>
              </div>

              <h1 id="contact-title" className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
                Get in Touch
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
                I welcome conversations about software engineering opportunities, contract and freelance web projects, and technical questions. Email is the fastest and most reliable way to reach me.
              </p>
            </div>
          </Container>
        </section>

        {/* Content Section: Channels & Inquiry Assistant */}
        <section aria-label="Contact options" className="border-t border-border py-16 sm:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Direct channels and availability */}
              <div className="space-y-8 lg:col-span-5">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-fg">Direct Contact Channels</h2>
                  <p className="mt-1 text-sm text-muted">
                    Reach out directly on any of the platforms below.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email Card with Copy Button */}
                  {email ? (
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-accent">
                          <Mail className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <span className="block font-mono text-[0.7rem] text-faint uppercase">Primary Email</span>
                          <a
                            href={`mailto:${email}`}
                            className="font-mono text-sm font-medium text-fg hover:text-accent transition-colors truncate block"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                      <CopyButton value={email} label="Copy email address" />
                    </div>
                  ) : null}

                  {/* LinkedIn */}
                  {linkedin ? (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40 hover:bg-bg-subtle group"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                        <LinkedinIcon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.7rem] text-faint uppercase">LinkedIn Profile</span>
                        <span className="text-sm font-medium text-fg group-hover:text-accent transition-colors truncate block">
                          linkedin.com/in/stamal2001
                        </span>
                      </div>
                    </a>
                  ) : null}

                  {/* GitHub */}
                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40 hover:bg-bg-subtle group"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                        <GithubIcon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.7rem] text-faint uppercase">GitHub Profile</span>
                        <span className="text-sm font-medium text-fg group-hover:text-accent transition-colors truncate block">
                          github.com/sTamal2001
                        </span>
                      </div>
                    </a>
                  ) : null}
                </div>

                {/* Logistics / Location & Timezone info */}
                <div className="rounded-xl border border-border bg-bg-subtle/70 p-5 space-y-3 font-mono text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-accent shrink-0" />
                    <span>Location: {site.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-accent shrink-0" />
                    <span>Timezone: IST (UTC+05:30)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-ok shrink-0" />
                    <span>No automated marketing or bot intermediaries</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Composer */}
              <div className="lg:col-span-7">
                <InquiryComposer />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
