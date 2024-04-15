"use client";

import Lottie from "react-lottie";
import animationData from "@/public/advertisersLottie.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function AdvertLottie() {
  return (
    <div className="w-auto h-auto flex justify-center max-w-[1280px] max-h-[720px]">
      <Lottie options={defaultOptions} />
    </div>
  );
}