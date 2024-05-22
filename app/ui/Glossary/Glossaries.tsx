import { FC } from "react";
import * as _ from "lodash";
import Link from "next/link";
import { Glossary } from "@/app/types/definitions";

interface IGlossaryNav {
  glossaries: Glossary[];
}
export const Glossaries: FC<IGlossaryNav> = ({ glossaries }) => {
  // Grouping glossaries by the first letter of the name attribute
  const groupedGlossaries = _.chain(glossaries)
    .defaultTo([])
    .map((glossary) => {
      const letter = _.get(glossary, "title", "");
      return {
        ...glossary,
        firstLetter: _.toUpper(_.head(_.trim(letter))),
      };
    })
    .groupBy("firstLetter")
    .value();

  return (
    <div className="w-full">
      {_.map(
        _.sortBy(Object.entries(groupedGlossaries || {}), [0]),
        ([letter, nameGroups]) => {
          return (
            <div key={letter} id={letter}>
              <span className="flex py-4 text-7xl text-slate-700">
                {letter}
              </span>
              <div className="flex flex-wrap">
                {_.map(nameGroups, ({ slug, title }) => {
                  return (
                    <div
                      key={slug}
                      className="flex md:w-1/3 min-w-[350px] max-w-[350px] py-4"
                    >
                      <Link href={`/glossary/${slug}`}>
                        <span className="text-slate-700 truncate min-w-[350px] max-w-[350px] block w-full hover:text-teal-600">
                          {title}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
