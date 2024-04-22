import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import { Button } from "@/app/ui/Button/Button";
import Image from "next/image";
import Container from "@/app/ui/Container/Container";
import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import MonetizationGraph from "@/app/ui/sections/components/ModalImage/MonetizationGraph/MonetizationGraph";
import IntegrationProcessGraph from "@/app/ui/sections/components/ModalImage/IntegrationProcessGraph/IntegrationProcessGraph";
import PublishersLottie from "@/app/ui/sections/components/LottieImage/PublishersLottie";

export default function PublishersSection() {
  return (
    <SectionWrapper className="bg-white" id="publishers">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"Publishers"} />
        </Container>

        <Container>
          <div className="flex laptop:justify-between items-center flex-col laptop:flex-row-reverse">
            <div className="order-2 laptop:order-1">
              <MonetizationGraph />
            </div>

            <div className="text-primary max-w-[500px] pt-14 laptop:pt-0 order-1 laptop:order-2 pb-8 laptop:pb-0 laptop:mr-[50px]">
              <h3 className="text-3xl font-bold">
                What is the process of ad monetization?
              </h3>
              <p className="text-lg pt-8 text-justify">
                Ad monetization generally operates by displaying various types
                of advertisements on a website, application CTV/OTT or audio
                channel and receiving commission or fee, whenever the ad garners
                views or clicks.
              </p>
            </div>
          </div>

          <div className="flex laptop:justify-between flex-col items-center laptop:flex-row-reverse pt-28">
            <div className="order-2 laptop:order-2 max-w-[1010px] max-h-[490px]">
              <IntegrationProcessGraph />
            </div>

            <div className="text-primary max-w-[500px] order-1 laptop:order-1 pb-8 laptop:pb-0 laptop:ml-4">
              <h3 className="text-3xl font-bold">
                Integration Process Overview
              </h3>
              <ul className="pt-8 list-decimal text-lg list-inside text-justify">
                <li>Incorporate several lines of ads.txt onto your website.</li>
                <li>
                  Provide us with the specifications for your ad placements.
                </li>
                <li>
                  Our expert team will assist in integrating through JS tags,
                  prebid, or alternative solutions.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex laptop:justify-between items-center flex-col laptop:flex-row-reverse pt-28">
            <div className="order-2 laptop:order-1">
              {/* <PublishersLottie /> */}
              <Image width={0} height={0} src="/comprehensive.gif" alt="Comprehensive image" className="w-auto h-auto"/>
            </div>

            <div className="text-primary max-w-[500px] order-1 laptop:order-2 pb-8 laptop:pb-0 laptop:mr-4">
              <h3 className="text-3xl font-bold pb-8">
                Comprehensive AD SUPPORT
              </h3>
              <p className="text-lg pb-7 text-justify">
                We facilitate all ad formats and accessible channels,
                encompassing display, native, audio, video, and connected TVs.
                Through our bidding technology, we aggregate demand across
                various media types and devices, fostering a highly competitive,
                real-time auction for each unique ad impression.
              </p>
              <p className="text-lg font-bold">
                Elevate your revenue while ensuring a captivating user
                experience
              </p>
            </div>
          </div>

          <div className="flex laptop:justify-end items-center flex-col laptop:flex-row-reverse pt-28">
            <div className="order-2 max-w-[730px] max-h-[460px]">
              <PublishersLottie />
            </div>

            <div className="order-1 text-primary max-w-[500px] laptop:ml-[137px] px-8">
              <p className="text-lg pt-9 laptop:pt-0">
                Ready to monetize your website or platform with lucrative ad
                space? Let&apos;s maximize your revenue potential together.
                Reach out to us now!
              </p>
              <div className="pt-8 pb-14 laptop:pb-0">
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
