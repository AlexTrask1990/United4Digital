import Link from "next/link";
import Image from "next/image";
import * as _ from "lodash";
import { Button } from "@/app/ui/Button/Button";
import { LinkedIn } from "../Social";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-primary text-base-100 pb-4">
      <div className="flex flex-col laptop:flex-row justify-between w-11/12 container mx-auto">
        <div className="flex flex-col tablet:flex-row tablet:items-end pt-[39px]">
          <aside className="w-auto h-auto pr-[90px]">
            <Image
              src="/logo.svg"
              width={125}
              height={84}
              alt="Logotype United4Digital"
              className="w-[125px] h-[84px]"
            />
          </aside>
          <nav className="flex flex-col tablet:flex-row px-4 py-[20px] tablet:py-0 justify-between text-base w-[499px] tablet:h-[60px]">
            <div className="flex flex-col justify-between">
              <Link
                href={`/#about-us`}
                className="hover:font-bold tablet:w-[90px]"
              >
                About us
              </Link>
              <Link
                href={`/#publishers`}
                className="hover:font-bold tablet:w-[90px]"
              >
                Publishers
              </Link>
            </div>
            <div className="tablet:max-w-[120px] max-w-max">
              <Link
                href={`/#media-buying-and-user-acquisition`}
                className="flex flex-row tablet:flex-col tablet:justify-between tablet:h-[60px] hover:font-bold tablet:w-[130px]"
              >
                <span>Media Buying &</span>
                {"  "} <span>User Acquisition</span>
              </Link>
            </div>
            <div className="flex flex-col justify-between">
              <Link
                href={`/#advertisers`}
                className="hover:font-bold tablet:w-[90px]"
              >
                Advertisers
              </Link>
              <Link
                href={`/glossary`}
                className="hover:font-bold tablet:w-[90px]"
              >
                Glossary
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex pt-[63px] pl-4 laptop:pl-0">
          <div className="font-bold flex flex-col items-start tablet:flex-row">
            <Button
              label="Contact us"
              className="w-[141px] order-2 tablet:order-1 btn-secondary"
            />
            <span className="max-w-[309px] tablet:ml-[31px] mb-[30px] order-1 tablet:order-2">
              We are united to bring the best traffic quality in digital world.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col laptop:flex-row justify-between w-11/12 container pt-4 pl-4 laptop:pl-0 laptop:pt-[84px] mx-auto">
        <div className="flex flex-col laptop:flex-row">
          <nav className="text-base flex items-center pr-[90px]">
            <span className="pr-[13px]">Follow us:</span>
            <LinkedIn />
          </nav>
          <nav className="text-base flex flex-col laptop:flex-row justify-between pt-5 laptop:pt-0 laptop:items-center">
            <Link
              href={`/cookie-policy`}
              className="hover:font-bold laptop:text-center w-[120px]"
            >
              Cookie Policy
            </Link>
            <Link
              href={`/terms`}
              className="hover:font-bold laptop:text-center w-[120px]"
            >
              Terms
            </Link>
            <Link
              href={`/privacy-policy`}
              className="hover:font-bold w-[120px] laptop:text-center"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="flex items-center pt-5 laptop:pt-0">
          <Image
            src="/point.svg"
            width={13}
            height={17}
            alt="A point on the map"
          />
          <span className="pl-[10px]">
            Corporation 123 Main Street City, State, Zip Code Country
          </span>
        </div>
      </div>
      <aside className="flex items-center laptop:justify-end container mx-auto pl-4 laptop:pl-0 w-11/12 pt-7 pb-4">
        <p>© All right reserved by United4Digital</p>
      </aside>
    </footer>
  );
}
