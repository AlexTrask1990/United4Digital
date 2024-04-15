import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";
import PresentSection from "@/app/ui/sections/PresentSection";
import AboutUsSection from "@/app/ui/sections/AboutUsSection";
import PublishersSection from "@/app/ui/sections/PublishersSection";
import AdvertisersSection from "@/app/ui/sections/AdvertisersSection";
import ContactUsSection from "@/app/ui/sections/ContactUsSection";
import MediaSection from "@/app/ui/sections/MediaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <PresentSection />
        <AboutUsSection />
        <PublishersSection />
        <AdvertisersSection />
        <MediaSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
