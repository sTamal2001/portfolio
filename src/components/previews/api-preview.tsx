import { ChevronRight, Lock } from "lucide-react";
import type { Endpoint, HttpMethod } from "@/config/site";
import { cn } from "@/lib/utils";

const methodStyles: Record<HttpMethod, string> = {
  GET: "text-ok bg-ok/10",
  POST: "text-accent bg-accent/10",
  PUT: "text-warn bg-warn/10",
  PATCH: "text-warn bg-warn/10",
  DELETE: "text-danger bg-danger/10",
};

/** Endpoint map and request pipeline for an API project. */
export function ApiPreview({ endpoints, pipeline }: { endpoints: Endpoint[]; pipeline: string[] }) {
  return (
    <div className="min-h-[300px] p-3 sm:min-h-[340px] sm:p-4">
      <p className="sr-only">Request pipeline: {pipeline.join(", then ")}.</p>
      <ol aria-hidden="true" className="flex flex-wrap items-center gap-1 rounded-lg border border-border bg-surface p-2.5">
        {pipeline.map((step, index) => (
          <li key={step} className="flex items-center gap-1">
            <span
              className={cn(
                "rounded px-1.5 py-0.5 font-mono text-[0.62rem] sm:text-[0.66rem]",
                index === 0 || index === pipeline.length - 1 ? "bg-fg text-bg" : "bg-surface-2 text-muted",
              )}
            >
              {step}
            </span>
            {index < pipeline.length - 1 ? <ChevronRight className="size-3 text-faint" /> : null}
          </li>
        ))}
      </ol>

      <table className="mt-3 w-full table-fixed overflow-hidden rounded-lg border border-border bg-surface text-left font-mono text-[0.66rem] sm:text-[0.7rem]">
        <caption className="sr-only">API endpoints</caption>
        <colgroup>
          <col className="w-[3.75rem]" />
          <col />
          <col className="w-[4.75rem] sm:w-[5.5rem]" />
        </colgroup>
        <thead className="sr-only">
          <tr>
            <th scope="col">Method</th>
            <th scope="col">Path</th>
            <th scope="col">Access</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((endpoint) => (
            <tr key={`${endpoint.method} ${endpoint.path}`} className="border-b border-border last:border-b-0">
              <td className="py-2 pl-2.5">
                <span className={cn("rounded px-1.5 py-0.5 font-semibold", methodStyles[endpoint.method])}>
                  {endpoint.method === "DELETE" ? "DEL" : endpoint.method}
                </span>
              </td>
              <td className="truncate py-2 pr-2 text-fg" title={endpoint.note}>
                {endpoint.path}
              </td>
              <td className="py-2 pr-2.5 text-right">
                <span className="inline-flex items-center justify-end gap-1 text-faint">
                  {endpoint.role ? (
                    <span className="rounded border border-border px-1 text-[0.6rem]">{endpoint.role}</span>
                  ) : null}
                  {endpoint.auth ? (
                    <Lock className="size-3" aria-label="Requires authentication" />
                  ) : (
                    <span className="text-[0.6rem]">public</span>
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
