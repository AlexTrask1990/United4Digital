import { ReactNode } from "react";

interface IProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: IProps) {
  return (
    <section className={`h-full flex flex-col items-center py-24 ${className}`} id={id}>
      {children}
    </section>
  );
}
