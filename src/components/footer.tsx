import Link from "next/link";
import { Mail, FlaskConical } from "lucide-react";
import { footerNavigation, site } from "@/config/site";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export function Footer() {
  const year = new Date().getFullYear();
  const { github, linkedin, email } = site.links;

  return (
    <footer className="no-print border-t border-border bg-bg-subtle">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="grid size-7 place-items-center rounded-md bg-fg text-bg group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                <FlaskConical className="size-3.5" />
              </span>
              <span className="font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                {site.brandName}
              </span>
            </Link>
            <p className="mt-2 text-sm text-faint">
              {site.name} · {site.role}
            </p>
            <p className="mt-1 text-xs text-faint">{site.location}</p>
          </div>

          <nav aria-label="Footer Navigation">
            <p className="font-mono text-xs uppercase tracking-wider text-faint mb-3">Pages</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-muted sm:grid-cols-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-faint">Connect</p>
            <ul className="flex items-center gap-2">
              {email ? (
                <li>
                  <a
                    href={`mailto:${email}`}
                    aria-label={`Email ${email}`}
                    className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                    title={`Email ${email}`}
                  >
                    <Mail className="size-4" />
                  </a>
                </li>
              ) : null}
              {github ? (
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                    title="GitHub profile"
                  >
                    <GithubIcon className="size-[18px]" />
                  </a>
                </li>
              ) : null}
              {linkedin ? (
                <li>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                    title="LinkedIn profile"
                  >
                    <LinkedinIcon className="size-[18px]" />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-faint sm:flex-row sm:justify-between sm:items-center">
          <p>© {year} {site.brandName} ({site.name}). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
