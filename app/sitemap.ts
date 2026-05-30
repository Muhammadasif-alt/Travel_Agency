import type { MetadataRoute } from "next";
import { siteConfig, cityLandings } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date("2026-05-30");

  const routes = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/hajj", priority: 0.9, freq: "weekly" as const },
    { path: "/umrah", priority: 0.9, freq: "weekly" as const },
    { path: "/flights", priority: 0.8, freq: "weekly" as const },
    { path: "/visa", priority: 0.8, freq: "weekly" as const },
    { path: "/hotels", priority: 0.7, freq: "monthly" as const },
    { path: "/transport", priority: 0.7, freq: "monthly" as const },
    { path: "/tours", priority: 0.7, freq: "monthly" as const },
    { path: "/about", priority: 0.6, freq: "monthly" as const },
    { path: "/contact", priority: 0.6, freq: "monthly" as const },
    // City landing pages (local SEO)
    ...cityLandings.map((l) => ({
      path: `/${l.slug}`,
      priority: 0.85,
      freq: "weekly" as const,
    })),
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
