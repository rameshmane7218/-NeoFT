import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/","/api/og/*"],
      
      //   disallow: "/private/",
    },
    sitemap: `${headers().get("host")}/sitemap.xml`,
  };
}
