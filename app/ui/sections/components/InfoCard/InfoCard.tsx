import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  text: string;
  secondText?: string;
  cardName: string;
  className?: string;
}
export default function InfoCard({ src, alt, text, cardName, className, secondText }: IProps) {
  return (
    <div className={`bg-base-100 text-primary py-8 px-10 rounded-lg ${className}`}>
      <div className="flex items-center">
        <Image src={src} width={0} height={0} alt={alt} className="w-auto h-auto"/>
        <span className="font-bold text-3xl pl-6">{cardName}</span>
      </div>
      
      <p className="pt-10">{text}</p>
      {secondText && <p className="pt-4">{secondText}</p>}
    </div>
  );
}