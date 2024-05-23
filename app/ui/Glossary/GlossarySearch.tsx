"use client";

import { FC } from "react";

interface IGlossarySearchProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const GlossarySearch: FC<IGlossarySearchProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="pt-6">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="bg-white border border-primary text-primary rounded-md block w-auto p-2.5 outline-none"
        placeholder="Search..."
      />
    </div>
  );
};
