import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Logo, home page link">
      <Image
        src="/logo.svg"
        width={0}
        height={0}
        alt="Logo United for Digital"
        className="w-auto h-auto"
      />
    </Link>
  );
}
