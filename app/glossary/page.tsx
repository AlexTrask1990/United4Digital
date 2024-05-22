import { getAllGlossary } from "../lib/api";
import { Glossaries } from "../ui/Glossary/Glossaries";
import { GlossaryNav } from "../ui/Glossary/GlossaryNav";

export default function Glossary() {
  const glossaries = getAllGlossary();
  return (
    <main className="min-h-[calc(100vh-86px)] py-10 container mx-auto px-4 laptop:px-0">
      <div className="flex px-4 py-6 text-slate-700">
        <div className="flex flex-col">
          <h3 className="flex text-center pb-4 text-5xl font-semibold">
            Ready to start making good data-driven choices?
          </h3>

          <p className="text-center">
            Digital marketing is a landscape in flux, that's why we've created a
            mobile marketing glossary featuring must-know industry terms,
            topics, and concepts to help you keep up
          </p>
          <div className="flex justify-between laptop:justify-normal">
            <GlossaryNav glossaries={glossaries} />
            <Glossaries glossaries={glossaries} />
          </div>
        </div>
      </div>
    </main>
  );
}
