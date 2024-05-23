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
    <div className="w-full pl-6">
      {_.map(
        _.sortBy(Object.entries(groupedGlossaries || {}), [0]),
        ([letter, nameGroups]) => {
          return (
            <div key={letter} id={letter}>
              <span className="flex py-4 text-7xl text-slate-700">
                {letter}
              </span>
              <div className="flex flex-col sm:flex-row flex-wrap">
                {_.map(nameGroups, ({ slug, title }) => {
                  return (
                    <div
                      key={slug}
                      className="max-w-[200px] sm:max-w-[400px] sm:w-1/2 lg:w-1/4 p-2"
                    >
                      <Link href={`/glossary/${slug}`}>
                        <p className="text-slate-700 truncate block hover:text-teal-600">
                          {title}
                        </p>
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
