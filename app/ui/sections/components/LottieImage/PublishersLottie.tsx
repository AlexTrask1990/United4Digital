"use client";

import Lottie from "react-lottie";
import animationData from "@/public/publishersLottie.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function PublishersLottie() {
  return (
    <div className="w-auto h-auto flex justify-center max-w-[1280px] max-h-[720px] relative">
      <Lottie options={defaultOptions} />
    </div>
  );
}
