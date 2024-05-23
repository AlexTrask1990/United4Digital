import { getAllGlossary } from "../lib/api";
import { GlossaryWrapper } from "../ui/Glossary/GlossaryWrapper";

export default function Glossary() {
  const glossaries = getAllGlossary();

  return (
    <main className="min-h-[calc(100vh-86px)] py-10 container mx-auto px-4">
      <div className="flex text-slate-700">
        <div className="flex flex-col">
          <h3 className="flex text-start pb-4 text-4xl font-semibold">
            Ready to start making good data-driven choices?
          </h3>

          <p className="text-start">
            Digital marketing is a landscape in flux, that's why we've created a
            mobile marketing glossary featuring must-know industry terms,
            topics, and concepts to help you keep up
          </p>
          <GlossaryWrapper glossaries={glossaries} />
        </div>
      </div>
    </main>
  );
}
