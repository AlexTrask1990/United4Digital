"use client";

import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
  type?: "submit" | "button" | "reset";
}

export const Button: FC<IProps> = ({
  label,
  icon,
  className,
  type = "button",
  ...props
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (type === "button") {
      sendGTMEvent({ event: "type button", value: "contact us" });
      router.push("/#contact-us");
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`btn text-base-100 leading-4 font-bold ${className}`}
      {...props}
    >
      {label && <span className="label-container">{label}</span>}
      {icon && <span className="icon-container">{icon}</span>}
    </button>
  );
};
