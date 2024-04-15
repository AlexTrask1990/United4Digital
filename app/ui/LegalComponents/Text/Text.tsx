import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
function BoldText({ children, className }: IProps) {
  return <span className={`font-bold ${className}`}>{children}</span>;
}

function NormalText({ children, className }: IProps) {
  return <span className={`font-normal ${className}`}>{children}</span>;
}

export { BoldText, NormalText };
