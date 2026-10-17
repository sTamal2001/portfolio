import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

export interface ResumeLink {
  href: string;
  downloadName: string;
}

/**
 * Returns the resume link only if the PDF actually exists in `public/`.
 * Runs on the server at build time, so a missing file never becomes a
 * broken "Download Resume" button.
 */
export function getResume(): ResumeLink | null {
  const file = path.join(process.cwd(), "public", site.resume.path);
  return existsSync(file) ? { href: site.resume.path, downloadName: site.resume.downloadName } : null;
}
