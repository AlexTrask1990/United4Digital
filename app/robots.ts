import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"]
      }
    ],
    sitemap: `https://united4-digital.vercel.app/sitemap.xml`,
  }
}
//NEXT_PUBLIC_BASE_URL