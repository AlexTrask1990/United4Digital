import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Glossary } from "../types/definitions";

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

const glossaryDirectory = join(process.cwd(), "_glossary");

export const getGlossarySlugs = () => {
  return fs.readdirSync(glossaryDirectory);
};

export const getGlossaryBySlug = (slug: string) => {
  const realSlug = slug?.replace(/\.md$/, "");
  const fullPath = join(glossaryDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Glossary;
};

export const getAllGlossary = (): Glossary[] => {
  const slugs = getGlossarySlugs();
  const posts = slugs.map((slug) => getGlossaryBySlug(slug));
  return posts;
};
