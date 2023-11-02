import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = headers().get("host");
  return [
    {
      url: `${host}`,
      lastModified: new Date(),
      // changeFrequency: "yearly",
      // priority: 1,
    },
    {
      url: `${host}/about`,
      lastModified: new Date(),
      // changeFrequency: "monthly",
      // priority: 0.8,
    },
    {
      url: `${host}/about`,
      lastModified: new Date(),
      // changeFrequency: "weekly",
      // priority: 0.5,
    },
  ];
}
