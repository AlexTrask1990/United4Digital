"use client";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button } from "@/app/ui/Button/Button";
import Link from "next/link";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState<boolean>(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };
  const declineCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-70 z-[5000]">
      <div className="fixed bottom-0 w-full left-0 flex items-center justify-between px-4 py-8 bg-base-100">
        <span className="px-4 py-6">
          This website uses cookies to improve user experience. By using our
          website you consent to all the Terms of Usage in accordance with our{" "}
          <Link href="/privacy-policy" className="text-primary font-semibold">
            Privacy Policy.
          </Link>
        </span>
        <div className="flex flex-col tablet:flex-row px-0">
          <Button
            label={"Decline"}
            onClick={declineCookie}
            className="text-white leading-4 font-bold tablet:mr-4 mb-4 laptop:mb-0 bg-base-300 min-w-[110px]"
          />
          <Button
            label={"Accept"}
            onClick={acceptCookie}
            className="btn btn-secondary text-white leading-4 font-bold min-w-[110px]"
          />
        </div>
      </div>
    </div>
  );
}
