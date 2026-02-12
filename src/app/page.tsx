import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GiftCategories } from "@/components/sections/GiftCategories";
import { Stats } from "@/components/sections/Stats";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Occasions } from "@/components/sections/Occasions";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <GiftCategories />
        <Stats />
        <TrustIndicators />
        <Occasions />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
