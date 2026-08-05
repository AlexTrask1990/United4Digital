import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Glossary } from "../types/definitions";

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

const glossaryDirectory = join(process.cwd(), "_glossary");

export const getGlossarySlugs = () => {
  if (!fs.existsSync(glossaryDirectory)) {
    return [];
  }

  return fs
    .readdirSync(glossaryDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
};

export const getGlossaryBySlug = (slug: string): Glossary | null => {
  if (!slug || slug.includes("..") || slug.includes("/") || slug.includes("\\")) {
    return null;
  }

  const realSlug = slug.replace(/\.md$/i, "");

  // Reject image/asset-like slugs that bots request under /glossary/*
  if (/\.(jpe?g|png|gif|webp|svg|ico|css|js|map|txt|json|xml)$/i.test(realSlug)) {
    return null;
  }

  const fullPath = join(glossaryDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Glossary;
};

export const getAllGlossary = (): Glossary[] => {
  const slugs = getGlossarySlugs();

  return slugs
    .map((slug) => getGlossaryBySlug(slug))
    .filter((glossary): glossary is Glossary => glossary !== null);
};
