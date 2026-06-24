import LogoLottie from "./components/LottieImage/LogoLottie";

export default function PresentSection() {
  return (
    <section className="bg-primary flex h-[calc(100vh-85px)] flex-col items-center justify-center overflow-hidden">
      <div className="min-h-[400px] max-w-[1280px] overflow-hidden laptop:min-h-[960px]">
        <LogoLottie />
      </div>
    </section>
  );
}
