import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: IProps) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}
