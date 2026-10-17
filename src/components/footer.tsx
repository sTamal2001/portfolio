import { navigation, site } from "@/config/site";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export function Footer() {
  const year = new Date().getFullYear();
  const { github, linkedin } = site.links;

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-faint">{site.role} · {site.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {github || linkedin ? (
            <ul className="flex items-center gap-2">
              {github ? (
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
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
                    className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                  >
                    <LinkedinIcon className="size-[18px]" />
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-faint sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Designed and built by hand with Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
