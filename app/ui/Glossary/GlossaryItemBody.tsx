import { FC } from "react";
import markdownStyles from "./markdown-styles.module.css";

type IProps = {
  content: string;
};

export const GlossaryItemBody: FC<IProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto text-slate-700">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
