"use client";

import { motion, useReducedMotion } from "framer-motion";
import { externalLinks } from "@/app/lib/links";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const linkVariants = {
  rest: {},
  hover: {},
};

const logoLetterVariants = {
  rest: { y: 0, opacity: 1 },
  hover: (index: number) => ({
    y: [0, -4, 0],
    opacity: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.35,
      ease: easeOutExpo,
    },
  }),
};

export const United4GamesHeaderLink = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={externalLinks.united4Games}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="United4Games home — game studio"
      className="group relative hidden shrink-0 transition-opacity hover:opacity-85 laptop:inline-flex"
      variants={linkVariants}
      initial="rest"
      whileHover={prefersReducedMotion ? undefined : "hover"}
    >
      <span className="text-[1.75rem] font-black leading-none tracking-tight laptop:text-[1.875rem]">
        {[
          { char: "U", className: "text-white" },
          { char: "4", className: "text-secondary" },
          { char: "G", className: "text-[#6ec1e4]" },
        ].map((letter, index) => (
          <motion.span
            key={letter.char}
            custom={index}
            variants={logoLetterVariants}
            className={`inline-block ${letter.className}`}
          >
            {letter.char}
          </motion.span>
        ))}
      </span>
      <motion.span
        custom={3}
        variants={logoLetterVariants}
        className="pointer-events-none absolute top-full left-5 translate-y-0.5 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.16em] text-secondary laptop:left-6 laptop:text-[8px]"
      >
        Game studio
      </motion.span>
    </motion.a>
  );
};
