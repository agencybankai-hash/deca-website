import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/lp/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.decawindows.com/sitemap.xml",
  };
}
