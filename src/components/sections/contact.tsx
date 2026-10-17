import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, FileDown, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import type { ResumeLink } from "@/lib/resume";
import { Section } from "@/components/ui/section";
import { Placeholder } from "@/components/ui/placeholder";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { CopyButton } from "@/components/copy-button";
import { cn, isExternal } from "@/lib/utils";

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  download?: string;
  /** Show a copy-to-clipboard button for this value. */
  copy?: boolean;
}

/** "https://www.linkedin.com/in/name/" → "linkedin.com/in/name" */
function prettyUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function Contact({ resume }: { resume: ResumeLink | null }) {
  const { email, linkedin, github } = site.links;

  const channels: ContactChannel[] = [];
  const missing: string[] = [];

  if (email) channels.push({ label: "Email", value: email, href: `mailto:${email}`, icon: Mail, copy: true });
  else missing.push("Email address");

  if (linkedin) channels.push({ label: "LinkedIn", value: prettyUrl(linkedin), href: linkedin, icon: LinkedinIcon });
  else missing.push("LinkedIn URL");

  if (github) channels.push({ label: "GitHub", value: prettyUrl(github), href: github, icon: GithubIcon });
  else missing.push("GitHub URL");

  if (resume)
    channels.push({ label: "Resume", value: "Download PDF", href: resume.href, icon: FileDown, download: resume.downloadName });
  else missing.push("Resume PDF");

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Get in touch"
      description="I'm interested in software developer, React, Node.js, backend, and full-stack roles, and happy to talk about freelance web projects. Email is the quickest way to reach me."
    >
      {channels.length > 0 ? (
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const external = isExternal(channel.href);
            return (
              <li key={channel.label} className="flex min-w-0 items-center bg-surface sm:odd:last:col-span-2">
                <a
                  href={channel.href}
                  download={channel.download}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 flex-1 items-center gap-3 self-stretch p-5 transition-colors hover:bg-bg-subtle sm:gap-4 sm:p-8"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-bg-subtle text-fg transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs text-faint">{channel.label}</span>
                    <span className="mt-0.5 block truncate text-[0.95rem] font-medium sm:text-lg">{channel.value}</span>
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "size-5 shrink-0 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent",
                      channel.copy && "hidden sm:block",
                    )}
                    aria-hidden="true"
                  />
                </a>
                {channel.copy ? (
                  <span className="pr-4 sm:pr-7">
                    <CopyButton value={channel.value} label={`Copy ${channel.label.toLowerCase()} address`} />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="rounded-2xl border border-dashed border-border-strong p-8 text-center text-muted">
          Contact details will be added here shortly.
        </p>
      )}

      {missing.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {missing.map((label) => (
            <Placeholder key={label} label={label} />
          ))}
        </div>
      ) : null}

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-faint">
        <MapPin className="size-4" aria-hidden="true" />
        Based in {site.location}
      </p>
    </Section>
  );
}
