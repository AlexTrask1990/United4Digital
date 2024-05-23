import { MetadataRoute } from "next";
import { getAllGlossary } from "./lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const glossary = await getAllGlossary();

  const glossaryEntries: MetadataRoute.Sitemap = glossary.map(({ slug }) => ({
    url: `${process.env.BASE_URL}/glossary/${slug}`,
  }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/glossary`,
      lastModified: new Date(),
    },
    ...glossaryEntries,
  ];
}
