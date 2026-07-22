"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const brandCards = [
  {
    id: "u4d",
    label: "United4Digital",
    tag: "agency",
    letters: [
      { char: "U", className: "text-primary" },
      { char: "4", className: "text-secondary" },
      { char: "D", className: "text-primary" },
    ],
  },
  {
    id: "u4g",
    label: "United4Games",
    tag: "Game studio",
    letters: [
      { char: "U", className: "text-primary" },
      { char: "4", className: "text-secondary" },
      { char: "G", className: "text-[#6ec1e4]" },
    ],
  },
];

const cardBounceVariants = {
  rest: { scale: 1 },
  active: {
    scale: [1, 1.02, 1],
    transition: { duration: 0.3, ease: easeOutExpo },
  },
};

export const ContactBrandClickers = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState("u4d");

  return (
    <fieldset className="form-control mb-2">
      <legend className="label">
        <span className="font-medium">Write to</span>
      </legend>

      <div
        className="grid grid-cols-1 gap-3 tablet:grid-cols-2"
        role="group"
        aria-label="Brand selection"
      >
        {brandCards.map((brandCard) => {
          const isActive = activeCard === brandCard.id;

          return (
            <motion.button
              key={brandCard.id}
              type="button"
              aria-pressed={isActive}
              variants={cardBounceVariants}
              animate={isActive && !prefersReducedMotion ? "active" : "rest"}
              onClick={() => {
                setActiveCard(brandCard.id);
              }}
              className={`rounded-md border px-4 py-3 text-left transition-all ${
                isActive
                  ? "border-secondary bg-secondary/10 shadow-[0_0_0_1px_rgba(255,104,57,0.35)]"
                  : "border-primary/15 bg-white hover:border-accent-blue/60 hover:bg-accent-blue/5"
              }`}
            >
              <span className="text-2xl font-black leading-none tracking-tight">
                {brandCard.letters.map((letter) => (
                  <span key={letter.char} className={letter.className}>
                    {letter.char}
                  </span>
                ))}
              </span>
              <span className="mt-1 block text-sm font-medium text-gray-50">
                {brandCard.label}
              </span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                {brandCard.tag}
              </span>
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
};
