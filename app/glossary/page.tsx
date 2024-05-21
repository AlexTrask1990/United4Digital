import { getAllGlossary } from "../lib/api";
import { GlossaryList } from "../ui/Glossary/GlossaryList";

export default function Glossary() {
  const glossary = getAllGlossary();
  return (
    <div>
      {glossary.length > 0 && <GlossaryList glossary={glossary} />}
    </div>
  )
}