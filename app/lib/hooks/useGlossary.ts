import { useState, useMemo } from 'react';
import { Glossary } from "@/app/types/definitions";

export const useGlossary = (glossaries: Glossary[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredGlossaries = useMemo(() => 
    glossaries.filter((glossary) =>
      glossary.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm, glossaries]);

  return {
    searchTerm,
    handleSearchChange,
    filteredGlossaries,
  };
};
