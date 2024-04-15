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
        <h3 className="text-3xl font-bold text-center text-primary pb-16">
          General scheme of work
        </h3>
        <Image
          alt="General scheme of work img"
          src="/buy-sell.svg"
          width={1402}
          height={490}
          className="w-auto h-auto cursor-zoom-in"
          onClick={handleClick}
        />
      </div>
      <dialog id="my_modal_3" className="modal w-full">
        <div className="modal-box w-11/12 max-w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center h-full">
            <Image
              alt="General scheme of work img"
              src="/buy-sell.svg"
              width={0}
              height={0}
              className="w-full h-full"
              onClick={handleClick}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
