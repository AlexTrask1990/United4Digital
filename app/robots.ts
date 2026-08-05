import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/cookie-policy",
          "/terms",
          "/privacy-policy",
          "/admin/",
          "/api/admin/",
        ],
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
