"use client";

import Lottie from "react-lottie";
import animationData from "@/public/social-media.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function SocialMediaLottie() {
  return (
    <div className="w-auto h-auto max-w-[737px] max-h-[460px]">
      <Lottie options={defaultOptions} />
    </div>
  );
}
