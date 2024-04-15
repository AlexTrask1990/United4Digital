import * as _ from "lodash";
import OfferCard from "@/app/ui/sections/components/OfferCard/OfferCard";
import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import Container from "@/app/ui/Container/Container";
import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import { IOfferList } from "@/app/types/definitions";
import AboutUsLottie from "@/app/ui/sections/components/LottieImage/AboutUsLottie";

const offerList: IOfferList[] = [
  {
    src: "/offerIconOne.svg",
    alt: "Offer comprehensive solution",
    text: `At United4Digital, we offer comprehensive solutions tailored to innovate
  the dynamic landscape of digital marketing. Whether through our
  proprietary video streaming applications or exclusive exchanges for
  advertisers and publishers, we strive to forge a seamless synergy
  between our clients' objectives and their audience. Our focus lies in
  managing the entirety of the advertising framework, digital
  monetization, and strategic planning with a cohesive approach.`,
  },
  {
    src: "/offerIconTwo.svg",
    alt: "We specialize in providing scalable",
    text: `We specialize in providing scalable, high quality, and trusted
  inventory across various platforms including Display, Connected TV,
  InApp, and Audio. Through meticulous selection processes, we handpick top-tier publishers and emerging high-quality content to
  ensure that all our partners deliver a valuable advertising experience.
  `,
  },
  {
    src: "/offerIconThree.svg",
    alt: "United4Digital is committed to maintaining the utmost quality",
    text: `United4Digital is committed to maintaining the utmost quality of
  traffic through strategic partnerships with leading data transparency
  providers and anti-fraud protection systems. Our dedication to excellence ensures that our clients receive nothing short of the best
  in traffic quality.`,
  },
];

export default function AboutUsSection() {
  return (
    <SectionWrapper id="about-us" className="bg-base-100">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"About us"} />
        </Container>
        <Container>
          <div className="flex flex-col laptop:flex-row items-center laptop:justify-between">
            <div className="text-primary text-justify max-w-[500px] pb-8 pt-28 laptop:pt-0 laptop:pb-0 laptop:mr-4">
              <h3 className="text-3xl font-bold pb-8">
                The company&apos;s mission
              </h3>
              <p className="text-lg pb-7 text-justify">
                United4Digital is aimed to offer wide range solutions designed
                to businesses to maximize the revenue potential by means of
                variety of digital ads.
              </p>
              <p className="text-lg">
                United4Digital is dedicated to empowering businesses with a wide
                range of digital advertising solutions aimed at optimizing
                revenue potential.
              </p>
            </div>
            <AboutUsLottie />
          </div>
        </Container>
        <Container>
          <div className="laptop:pt-20 pt-10 laptop:flex">
            {_.map(
              offerList,
              ({ src, alt, text }: IOfferList, index: number) => {
                return (
                  <OfferCard
                    key={alt}
                    src={src}
                    alt={alt}
                    text={text}
                    className={`${index && "mt-6 laptop:mt-0 laptop:ml-6"}`}
                  />
                );
              }
            )}
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
