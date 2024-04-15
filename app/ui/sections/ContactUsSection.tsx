import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import Container from "@/app/ui/Container/Container";
import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import Form from "@/app/ui/sections/components/Form/Form";
import ContactUsLottie from "./components/LottieImage/ContactUsLottie";

export default function ContactUsSection() {
  return (
    <SectionWrapper id="contact-us" className="bg-base-100">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"Contact us"} />
        </Container>
        <Container>
          <div className="flex flex-col items-center desktop:items-start pt-28 laptop:pt-0 desktop:flex-row justify-between">
            <Form />
            <div className="pt-4 laptop:pt-0 tablet:ml-4">
              <ContactUsLottie />
            </div>
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
