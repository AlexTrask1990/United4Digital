import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
  className?: string;
}
export default function Container({ children, className }: IProps) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
