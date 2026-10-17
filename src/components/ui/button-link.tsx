import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Suggested file name; turns the link into a download. */
  download?: string;
  "aria-label"?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-accent hover:text-accent-fg shadow-[0_1px_0_0_rgb(255_255_255/0.08)_inset,0_1px_2px_rgb(0_0_0/0.12)]",
  secondary: "border border-border-strong bg-surface text-fg hover:border-fg/40 hover:bg-surface-2",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

export function ButtonLink({ href, children, variant = "primary", className, download, ...rest }: ButtonLinkProps) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
