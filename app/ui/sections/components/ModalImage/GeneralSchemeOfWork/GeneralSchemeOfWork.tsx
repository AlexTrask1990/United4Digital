"use client";

import { useCallback } from "react";
import Image from "next/image";

export default function GeneralSchemeOfWork() {
  const handleClick = useCallback(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }, []);
  return (
    <>
      <div className="flex flex-col items-center pt-24">
        <h3 className="text-3xl font-bold text-center text-primary pt-14 laptop:pt-0 laptop:pb-16 order-2 laptop:order-1">
          General scheme of work
        </h3>
        <Image
          alt="General scheme of work img"
          src="/buy-sell.svg"
          width={1402}
          height={490}
          className="w-auto h-auto cursor-zoom-in order-1 laptop:order-2"
          onClick={handleClick}
        />
      </div>
      <dialog id="my_modal_3" className="modal w-full bg-gray-transparent-60">
        <div className="w-full h-full flex justify-center">
          <Image
            alt="General scheme of work img"
            src="/buy-sell.svg"
            width={0}
            height={0}
            className="w-full h-screen"
            onClick={handleClick}
          />
          <form method="dialog">
            <button className="absolute right-1 top-1" aria-label="close dialog">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
