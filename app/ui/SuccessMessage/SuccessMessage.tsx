import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IProps {
  message: string;
  success: boolean;
  onClose: (param: boolean) => void;
}

export default function SuccessMessage({ message, success, onClose }: IProps) {
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (success) {
      timerId = setTimeout(() => setIsFadingOut(true), 4000);
    }

    return () => clearTimeout(timerId);
  }, [success]);

  useEffect(() => {
    if (isFadingOut) {
      const timerId = setTimeout(() => onClose(false), 200); // Длительность исчезновения
      return () => clearTimeout(timerId);
    }
  }, [isFadingOut, onClose]);

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: isFadingOut ? "-100vw" : 0, opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-10 left-0 w-full px-10"
      role="alert"
    >
      <div className="alert alert-success flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-base-100 shrink-0 h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-2xl text-base-100 py-5">{message}</span>
      </div>
    </motion.div>
  );
}
