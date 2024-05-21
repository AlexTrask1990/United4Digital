import { FC } from "react";
import Link from "next/link";
import { Glossary } from "@/app/types/definitions";

type IProps = {
  glossary: Glossary[];
};

export const GlossaryList: FC<IProps> = ({ glossary }) => {
  return (
    <section className="bg-primary text-white py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 pb-32">
        {glossary.map((item) => (
          <span>{item.title}</span>
        ))}
      </div>
    </section>
  );
};
