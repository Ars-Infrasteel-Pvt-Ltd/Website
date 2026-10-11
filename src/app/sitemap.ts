import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.arsinfrasteel.com";
  return ["", "/products", "/projects", "/gallery", "/contact", "/quote"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })
  );
}