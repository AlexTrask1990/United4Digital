import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  text: string;
  className: string;
}
export default function OfferCard({ src, alt, text, className }: IProps) {
  return (
    <div className={`bg-white py-8 px-10 rounded-lg flex flex-col items-center laptop:block ${className}`}>
      <Image src={src} width={0} height={0} alt={alt} className="w-[100px] h-auto laptop:w-auto"/>
      <p className="pt-10">{text}</p>
    </div>
  );
}
