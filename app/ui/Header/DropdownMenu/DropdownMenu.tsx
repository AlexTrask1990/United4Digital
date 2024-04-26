"use client";

import { FC, useRef } from "react";
import Link from "next/link";
import * as _ from "lodash";
import { links } from "@/app/lib/links";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/app/lib/hooks/useDimensions";
import { Button } from "@/app/ui/Button/Button";

const dropdownVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const DropdownMenu: FC = () => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const localCloseMenu = () => {
    toggleOpen();
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="laptop:hidden"
    >
      <motion.div
        className="flex justify-center z-10 w-full absolute top-[86px] left-0 text-black transform origin-top"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
      >
        <div className="flex flex-col items-center py-4 px-14 border-t-4 border-t-primary w-4/5 rounded-b-md bg-base-100">
          {_.map(links, (link) => {
            return (
              <Link key={link.name} href={`${link.href}`} onClick={localCloseMenu} aria-label={`${link.name} link`}>
                <p className="py-4 text-center text-2xl leading-6">{link.name}</p>
              </Link>
            );
          })}
          <div className="flex justify-center" onClick={localCloseMenu}>
            <Button
              label="Contact us"
              className="w-[141px] order-2 tablet:order-1 btn-secondary"
            />
          </div>
        </div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
