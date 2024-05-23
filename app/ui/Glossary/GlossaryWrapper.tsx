"use client";

import { Glossary } from "@/app/types/definitions";
import { FC } from "react";
import { GlossarySearch } from "./GlossarySearch";
import { GlossaryNav } from "./GlossaryNav";
import { Glossaries } from "./Glossaries";
import { useGlossary } from "@/app/lib/hooks/useGlossary";

interface IGlossaryWrapperProps {
  glossaries: Glossary[];
}
export const GlossaryWrapper: FC<IGlossaryWrapperProps> = ({ glossaries }) => {
    const { searchTerm, handleSearchChange, filteredGlossaries } = useGlossary(glossaries);
  return (
    <>
      <GlossarySearch searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
      <div className="flex justify-between laptop:justify-normal">
        <GlossaryNav glossaries={filteredGlossaries} />
        <Glossaries glossaries={filteredGlossaries} />
      </div>
    </>
  );
};
