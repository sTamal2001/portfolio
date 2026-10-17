import Image from "next/image";
import type { Project } from "@/config/site";
import { PreviewFrame } from "./preview-frame";
import { DashboardPreview } from "./dashboard-preview";
import { ApiPreview } from "./api-preview";
import { CmsPreview } from "./cms-preview";
import { LeasePreview } from "./lease-preview";

/** Renders a real screenshot when one is configured, otherwise a captioned CSS illustration. */
export function ProjectPreview({ project }: { project: Project }) {
  if (project.screenshot) {
    return (
      <PreviewFrame label={project.slug} caption="Screenshot of the running application.">
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto w-full"
        />
      </PreviewFrame>
    );
  }

  switch (project.preview) {
    case "cms":
      return (
        <PreviewFrame label="cms / admin → websites" caption="Illustration of the platform's structure — no client data or real screens.">
          <CmsPreview />
        </PreviewFrame>
      );
    case "lease":
      return (
        <PreviewFrame label="auditflow / leases" caption="Illustration of the delivery loop and a generic records view — no client data.">
          <LeasePreview />
        </PreviewFrame>
      );
    case "api":
      return (
        <PreviewFrame label={`${project.slug} / routes`} caption="Selected endpoints and the request pipeline, taken from the repository.">
          <ApiPreview endpoints={project.endpoints ?? []} pipeline={project.pipeline ?? []} />
        </PreviewFrame>
      );
    case "dashboard":
      return (
        <PreviewFrame label={`${project.slug} / dashboard`} caption="Illustration of the dashboard layout — not a product screenshot.">
          <DashboardPreview />
        </PreviewFrame>
      );
  }
}
