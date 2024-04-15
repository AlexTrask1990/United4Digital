import Image from "next/image";
import SectionWrapper from "@/app/ui/SectionWrapper/SectionWrapper";
import Container from "@/app/ui/Container/Container";
import SectionHeading from "@/app/ui/sections/components/Heading/SectionHeading";
import InfoCard from "@/app/ui/sections/components/InfoCard/InfoCard";
import { Button } from "@/app/ui/Button/Button";
import SocialMediaLottie from "./components/LottieImage/SocialMedia";

export default function MediaSection() {
  return (
    <SectionWrapper id="media-buying-and-user-acquisition" className="bg-white">
      <div className="w-11/12">
        <Container>
          <SectionHeading text={"Media Buying & User Acquisition"} />
        </Container>
        <Container>
          <div className="flex flex-col laptop:flex-row pt-28 laptop:pt-0 items-center laptop:justify-between">
            <div className="text-primary max-w-[500px] pb-8 laptop:pb-0 laptop:mr-4">
              <p className="text-lg pb-7">
                In the realm of online media buying and user acquisition,
                finding a company that aligns with your brand&apos;s objectives
                and adapts to your unique needs is crucial. It entails a blend
                of knowledge, expertise, and established relationships to ensure
                your ads are effectively placed in front of the right audience,
                at the right moment.
              </p>
              <p className="text-lg">
                Leveraging data-driven programmatic media buying technologies,
                we craft customized growth strategies tailored to your specific
                targets.
              </p>
            </div>
            <div className="w-auto h-auto max-w-[730px] max-h-[406px]">
              <Image
                src="/your-adv.gif"
                width={0}
                height={0}
                alt="Customized programmatic media buying to effectively position your ads for optimal user acquisition, leveraging deep expertise and strategic relationships."
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="pt-20 laptop:flex laptop:justify-between">
            <InfoCard
              src="/social-media-icon.svg"
              alt="United4Digital's team delivering multi-platform social media campaigns to engage audiences and meet KPIs, boosting brand promotion and sales."
              text={`We deliver comprehensive campaigns across all major social platforms, 
            allowing you to reach engaged audience and achieve the established KPIs.`}
              secondText={`United4Digital's team of skilled professionals will expertly navigate you towards 
            selecting the finest creative strategies to amplify the promotion of your brand or service, 
            ultimately boosting your sales.`}
              cardName="Social Media"
              className={"max-w-[744px]"}
            />
            <InfoCard
              src="/seo-icon.svg"
              alt="SEO specialists employing a data-driven approach to enhance organic traffic by adapting to user intent and search engine algorithms."
              text={`Today's SEO landscape is driven by user intent and semantics. Our
            specialists utilize a data-driven approach to unlock organic traffic
            growth for your business, capitalizing on evolving search engine
            algorithms and user behaviors.`}
              cardName="SEO"
              className={"max-w-[744px] mt-14 laptop:mt-0 laptop:ml-14"}
            />
          </div>
          <div className="flex laptop:justify-end items-center flex-col laptop:flex-row-reverse pt-28">
            <div className="order-1 laptop:order-2">
              <SocialMediaLottie />
            </div>

            <div className="order-2 laptop:order-1 text-primary max-w-[500px] laptop:ml-[198px] px-8 laptop:px-0">
              <p className="text-lg pt-9 laptop:pt-0">
                Ready to elevate your online presence and drive targeted user
                acquisition? Let&apos;s craft tailored strategies to amplify
                your brand&apos;s reach and ROI. Reach out to us now and unlock
                the power of strategic media buying!
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
