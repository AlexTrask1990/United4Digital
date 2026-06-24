import LogoLottie from "./components/LottieImage/LogoLottie";

export default function PresentSection() {
  return (
    <section className="bg-primary h-[calc(100vh-85px)] flex flex-col justify-center items-center ">
      <div className="min-h-[720px] w-full max-w-[1280px] overflow-hidden">
        <LogoLottie />
      </div>
    </section>
  );
}
