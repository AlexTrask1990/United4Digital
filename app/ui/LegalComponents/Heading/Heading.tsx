import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function Heading({ children }: IProps) {
  return (
    <h1 className="text-heading-xl leading-heading-xl font-bold text-primary text-shadow pt-20 pb-15">
      {children}
    </h1>
  );
}
