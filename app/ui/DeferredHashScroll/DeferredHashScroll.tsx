"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  clearDeferredHash,
  readDeferredHash,
  scrollToDeferredHash,
} from "@/app/lib/deferredHashScroll";

export const DeferredHashScroll = () => {
  const pathname = usePathname();
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    const storedHash = readDeferredHash();

    if (!storedHash) return;

    clearDeferredHash();
    scrollToDeferredHash(storedHash);
  }, []);

  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    if (readDeferredHash()) return;

    const hash = window.location.hash;
    if (!hash) return;

    scrollToDeferredHash(hash);
  }, [pathname]);

  return null;
};
