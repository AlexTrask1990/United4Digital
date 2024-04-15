"use client";

import { useCallback } from "react";
import Image from "next/image";

export default function IntegrationProcessGraph() {
  const handleClick = useCallback(() => {
    const modal = document.getElementById("integration-process-modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }, []);
  return (
    <>
      <Image
        alt="Flowchart depicting the integration process"
        src="/integration-process.svg"
        width={0}
        height={0}
        className="w-auto h-auto cursor-zoom-in"
        onClick={handleClick}
      />
      <dialog id="integration-process-modal" className="modal w-full">
        <div className="modal-box w-11/12 max-w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center h-full">
            <Image
              alt="Integration process graph"
              src="/integration-process.svg"
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
