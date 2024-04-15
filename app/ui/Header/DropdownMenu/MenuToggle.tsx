"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

interface PathProps {
  variants: Variants;
  d?: string;
  opacity?: number;
  transition?: { duration: number };
}

const Path: FC<PathProps> = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 95%)"
    strokeLinecap="round"
    {...props}
  />
);

interface IProps {
  toggle: () => void;
}

export const MenuToggle: FC<IProps> = ({ toggle }) => (
  <button onClick={toggle}>
    <svg
      width="34"
      height="34"
      viewBox="0 0 20 20"
      className="flex items-center justify-center"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
