import { getAllGlossary, getGlossaryBySlug } from "@/app/lib/api";
import { markdownToHtml } from "@/app/lib/markdownToHtml";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as _ from "lodash";
import { GlossaryItemBody } from "@/app/ui/Glossary/GlossaryItemBody";
import Link from "next/link";

export default async function GlossaryItem({ params }: Params) {
  const glossary = getGlossaryBySlug(params.slug);
  if (!glossary) {
    return notFound();
  }

  const content = await markdownToHtml(glossary.content || "");

  return (
    <main className="min-h-[calc(100vh-86px)] py-10 container mx-auto px-4 laptop:px-0">
      <div className="max-w-2xl mx-auto pb-10">
        <Link
          aria-label="Glossary link"
          href="/glossary"
          className="text-slate-700 hover:text-sky-500"
        >
          GLOSSARY
        </Link>
        <span> / {params.slug}</span>
      </div>
      <div className="max-w-2xl mx-auto">
        <Image
          width={0}
          height={0}
          src={glossary.coverImage}
          alt={glossary.title}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <GlossaryItemBody content={content} />
    </main>
  );
}
type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const general = getGlossaryBySlug(params.slug);

  if (!general) {
    return notFound();
  }

  const title = `${general.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [general.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const general = getAllGlossary();

  return general.map((item) => ({
    slug: item.slug,
  }));
}
