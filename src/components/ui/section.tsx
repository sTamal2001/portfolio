import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  id: string;
  /** Two-digit index shown above the title, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, eyebrow, title, description, children, className }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={cn("border-t border-border py-20 sm:py-28", className)}>
      <Container>
        <header className="mb-12 grid gap-4 sm:mb-16 lg:grid-cols-12 lg:gap-8">
          <p className="font-mono text-xs tracking-wide text-faint uppercase lg:col-span-3 lg:pt-2">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            {eyebrow}
          </p>
          <div className="lg:col-span-9">
            <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </header>
        {children}
      </Container>
    </section>
  );
}
