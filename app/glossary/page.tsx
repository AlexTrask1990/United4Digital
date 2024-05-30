import { getAllGlossary } from "../lib/api";
import { GlossaryWrapper } from "../ui/Glossary/GlossaryWrapper";

export default function Glossary() {
  const glossaries = getAllGlossary();

  return (
    <main className="min-h-[calc(100vh-86px)] py-10 container mx-auto px-4">
      <div className="flex text-slate-700">
        <div className="flex flex-col">
          <h3 className="flex text-start pb-4 text-4xl font-semibold">
            Excited to explore the world of digital marketing?
          </h3>

          <p className="text-start">
            Browse through our comprehensive marketing glossary, packed with
            essential industry terms to help you stay informed and ahead in the
            field.
          </p>
          <GlossaryWrapper glossaries={glossaries} />
        </div>
      </div>
    </main>
  );
}
