"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  name: string;
  navigation: ReadonlyArray<{ label: string; href: string }>;
  resume: { href: string; downloadName: string } | null;
}

export function Header({ name, navigation, resume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the drawer is open: lock page scroll, close on Escape or when the
  // viewport grows past the breakpoint, and keep focus inside the drawer.
  useEffect(() => {
    if (!open) {
      // Return focus to the menu button after closing.
      if (wasOpen.current) menuButtonRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    closeButtonRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70"
            : "border-transparent bg-transparent",
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>

        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${name} — back to top`}>
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-lg bg-fg font-mono text-[0.7rem] font-semibold tracking-tight text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg"
            >
              {initials}
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight">{name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            {resume ? (
              <a
                href={resume.href}
                download={resume.downloadName}
                className="hidden h-9 items-center gap-1.5 rounded-lg border border-border-strong px-3.5 text-sm font-medium transition-colors hover:border-fg/40 hover:bg-surface-2 md:inline-flex"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            ) : null}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="inline-flex size-9 items-center justify-center rounded-lg text-fg transition-colors hover:bg-surface-2 md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer. Rendered outside <header> because the header's
          backdrop-filter would otherwise contain this fixed-position panel. */}
      <div className="md:hidden">
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 z-[60] bg-fg/30 backdrop-blur-[2px] transition-opacity duration-300 dark:bg-black/60",
            open ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          inert={!open}
          className={cn(
            "fixed inset-y-0 right-0 z-[70] flex w-[min(20rem,85vw)] flex-col border-l border-border bg-bg shadow-[-24px_0_48px_-24px_rgb(0_0_0/0.25)] duration-300 ease-out",
            // Becomes visible (and focusable) immediately on open; stays visible until the slide-out finishes.
            open ? "visible translate-x-0 transition-transform" : "invisible translate-x-full transition-[transform,visibility]",
          )}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
            <span className="font-mono text-xs tracking-wide text-faint uppercase">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-9 items-center justify-center rounded-lg text-fg transition-colors hover:bg-surface-2"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="flex flex-col">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 border-b border-border py-4 text-lg font-medium text-fg transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-xs text-faint group-hover:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {resume ? (
            <div className="shrink-0 border-t border-border p-5">
              <a
                href={resume.href}
                download={resume.downloadName}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-fg text-sm font-medium text-bg"
              >
                <FileText className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
