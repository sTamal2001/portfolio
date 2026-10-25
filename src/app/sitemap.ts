import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/developer", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/work", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/resume", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
