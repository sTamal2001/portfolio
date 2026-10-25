import Link from "next/link";
import { Home, Layers, Code2 } from "lucide-react";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-dvh place-items-center px-4 py-16">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div className="max-w-md text-center">
        <p className="font-mono text-xs font-semibold text-accent uppercase tracking-widest">
          {site.brandName} · 404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-fg">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          The page you requested could not be found or has moved. Explore the main areas of the lab below.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
          >
            <Home className="size-4" aria-hidden="true" />
            <span>Home</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            <Layers className="size-4" aria-hidden="true" />
            <span>Projects</span>
          </Link>

          <Link
            href="/developer"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            <Code2 className="size-4" aria-hidden="true" />
            <span>Developer Profile</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
