import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GiftCategories } from "@/components/sections/GiftCategories";
import { Stats } from "@/components/sections/Stats";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Occasions } from "@/components/sections/Occasions";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RIS Services DMCC — Corporate Gifts",
  description:
    "Premium corporate gifting solutions in Dubai. Luxury executive gifts, branded gift boxes, employee welcome kits, and seasonal collections.",
  url: "https://risservices.ae/gifts",
  logo: "https://risservices.ae/gifts/img/logo.png",
  image: "https://risservices.ae/gifts/img/hero_img.png",
  email: "gifts@risservices.ae",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    geoRadius: "500000",
  },
  priceRange: "$$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Gift Collections",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Executive Gifts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branded Gift Boxes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employee Welcome Kits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Awards & Recognition" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Collections" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gourmet & Wellness" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
