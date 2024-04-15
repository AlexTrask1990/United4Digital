interface IProps {
  text: string;
}
export default function SectionHeading({ text }: IProps) {
  return (
    <h2 className="text-start text-primary text-4xl font-bold pb-4 laptop:pb-16">
      {text}
    </h2>
  );
}
