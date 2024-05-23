import { FC } from "react";
import * as _ from "lodash";
import { Glossary } from "@/app/types/definitions";
import { GlossaryLetter } from "./GlossaryLetter";

interface IGlossaryNav {
  glossaries: Glossary[];
}
export const GlossaryNav: FC<IGlossaryNav> = ({ glossaries }) => {
  const alphabet = _.map(_.range(65, 91), (n) => String.fromCharCode(n));

  const groupedGlossaries = _.uniq(
    _.map(glossaries, (glossary) => {
      return _.toUpper(_.trim(glossary?.title)[0]);
    })
  );

  return (
    <div className="laptop:pr-6 order-last md:order-none">
      <div className="sticky top-[100px] flex flex-col pt-2">
        {_.map(groupedGlossaries, (letter) => {
          return <GlossaryLetter letter={letter} key={letter} />;
        })}
      </div>
    </div>
  );
};
