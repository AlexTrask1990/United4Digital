"use client";

import { FC } from "react";
import Link from "next/link";
import * as _ from "lodash";
import { Button } from "@/app/ui/Button/Button";
import { links } from "@/app/lib/links";

export const NavLinks: FC = () => {
  const arrow = (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7055 11L14.1753 8.53026C14.4682 8.23736 14.4682 7.76248 14.1753 7.46958L11.7055 4.99984M13.9556 7.99992L2.95532 7.99992"
        stroke="white"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <div className="hidden laptop:flex w-[796px]">
      <div className="navbar-end text-base-100 w-full hidden laptop:flex laptop:justify-start">
        {_.map(links, (link) => {
          return (
            <Link key={link.name} aria-label={`${link.name} link`} href={`${link.href}`} className={`flex items-center justify-start ${link.name === "Glossary" && "justify-center"} w-[130px]`}>
              <span className="hover:text-white hover:font-bold text-base">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <Button label="Contact us" className="px-5 btn-secondary" icon={arrow} />
    </div>
  );
};
