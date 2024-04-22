import Image from "next/image";
import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import Container from "@/app/ui/Container/Container";
import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import { IOfferList } from "@/app/types/definitions";
import * as _ from "lodash";
import OfferCard from "@/app/ui/sections/components/OfferCard/OfferCard";
import { Button } from "@/app/ui/Button/Button";
import GeneralSchemeOfWork from "./components/ModalImage/GeneralSchemeOfWork/GeneralSchemeOfWork";
import AdvertLottie from "./components/LottieImage/AdvertLottie";

const advertiserList: IOfferList[] = [
  {
    src: "/advOne.svg",
    alt: "Comprehensive digital advertising platform showcasing high viewability, diverse targeting options, and extensive global traffic including Display, Video, Audio, and CTV/OTT channels with access to top-tier publishers.",
    text: `Expect a high viewability rate, a wide range of targeting options, and
  extensive global traffic across Display, Video, Audio, and CTV/OTT
  platforms and access to top-tier publishers within the industry.`,
  },
  {
    src: "/advTwo.svg",
    alt: "Team of experts using programmatic strategies and innovative technologies to ensure optimal outcomes for clients, backed by years of experience.",
    text: `Leveraging our programmatic capabilities, innovative solutions, and
    years of experience, we're committed to achieving optimal results for
    you.`,
  },
  {
    src: "/advThree.svg",
    alt: "Global digital advertising network showcasing over 1 billion daily ad impressions across multiple formats.",
    text: `Traffic Volume: Gain access to over 1 billion daily ad impressions worldwide across diverse ad formats.`,
  },
  {
    src: "/advFour.svg",
    alt: "Comprehensive analytics dashboard displaying detailed traffic reports for effective campaign optimization and scaling.",
    text: `Analytics: Detailed traffic reports empower you to focus on optimizing
    and scaling your campaigns effectively.`,
  },
];
export default function AdvertisersSection() {
  return (
    <SectionWrapper id="advertisers" className="bg-base-100">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"Advertisers"} />
        </Container>
        <Container>
          <div className="flex flex-col justify-between pt-14 laptop:pt-0 items-center laptop:flex-row">
            <div className="order-1 text-justify text-primary text-lg max-w-[500px] pb-8 laptop:pb-0 laptop:pr-4">
              <p>
                No matter if you&apos;re a brand or an agency, rest assured that
                we&apos;ll deliver the outcomes you seek!
              </p>
              <p className="pt-4">
                United4Digital offers advertisers multiple avenues to access
                best inventory, tailored to their desired level of control and
                target CPM preferences.
              </p>
            </div>
            <div className="order-2">
              <Image
                src="/advertisers.gif"
                width={0}
                height={0}
                alt="Not found page image"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="laptop:pt-20 pt-10 laptop:flex">
            {_.map(
              advertiserList,
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
        <Container>
          <GeneralSchemeOfWork />
        </Container>
        <Container>
          <div className="flex laptop:justify-between flex-col items-center laptop:flex-row-reverse pt-28">
            <div className="order-1">
              <AdvertLottie />
            </div>

            <div className="order-2 text-primary max-w-[500px] laptop:pt-0">
              <p className="text-lg pt-9 laptop:pt-0">
                Have an awesome ad ready to go? Let us find the perfect stage
                for your creative masterpiece and bring it to life together. Get
                in touch now!
              </p>
              <div className="pt-8">
                <Button
                  label="Contact us"
                  className="laptop:px-14 w-full laptop:w-auto btn-secondary"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
