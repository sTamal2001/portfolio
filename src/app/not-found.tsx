import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-dvh place-items-center px-4">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-fg"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
