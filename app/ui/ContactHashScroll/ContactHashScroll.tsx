"use client";

import { useEffect } from "react";

const CONTACT_HASH = "#contact-us";
const HEADER_HEIGHT_REM = 5.375;
const ALIGN_THRESHOLD_PX = 32;

const getHeaderOffset = () => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return rootFontSize * HEADER_HEIGHT_REM;
};

const isContactAligned = () => {
  const target = document.getElementById("contact-us");

  if (!target) {
    return true;
  }

  const offset = Math.abs(target.getBoundingClientRect().top - getHeaderOffset());
  return offset < ALIGN_THRESHOLD_PX;
};

const scrollToContact = () => {
  const target = document.getElementById("contact-us");

  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "auto", block: "start" });
};

export const ContactHashScroll = () => {
  useEffect(() => {
    if (window.location.hash !== CONTACT_HASH) {
      return;
    }

    history.scrollRestoration = "manual";

    const alignContact = () => {
      requestAnimationFrame(() => {
        if (isContactAligned()) {
          return;
        }

        scrollToContact();
      });
    };

    if (document.readyState === "complete") {
      alignContact();
      return;
    }

    window.addEventListener("load", alignContact, { once: true });
  }, []);

  return null;
};
