import type { MetadataRoute } from "next";

const BASE = "https://www.decawindows.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: { url: string; priority: number; changeFrequency: "weekly" | "monthly" | "daily" }[] = [
    // Core pages
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/windows", priority: 0.9, changeFrequency: "monthly" },
    { url: "/doors", priority: 0.9, changeFrequency: "monthly" },
    { url: "/tilt-turn", priority: 0.9, changeFrequency: "monthly" },
    { url: "/performance", priority: 0.8, changeFrequency: "monthly" },

    // Product pages
    { url: "/windows/upvc-windows", priority: 0.8, changeFrequency: "monthly" },
    { url: "/windows/aluminum-windows", priority: 0.8, changeFrequency: "monthly" },
    { url: "/doors/entry-doors", priority: 0.8, changeFrequency: "monthly" },
    { url: "/doors/french-doors", priority: 0.8, changeFrequency: "monthly" },
    { url: "/sliding-doors", priority: 0.8, changeFrequency: "monthly" },

    // Commercial pages
    { url: "/professionals", priority: 0.8, changeFrequency: "monthly" },
    { url: "/quote", priority: 0.8, changeFrequency: "monthly" },
    { url: "/locations", priority: 0.7, changeFrequency: "monthly" },

    // Content pages
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" },
    { url: "/team", priority: 0.6, changeFrequency: "monthly" },
  ];

  return pages.map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
