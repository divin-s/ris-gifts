import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = "https://risservices.ae/gifts";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RIS Corporate Gifts — Premium Corporate Gifting in Dubai",
    template: "%s | RIS Corporate Gifts",
  },
  description:
    "Curate meaningful corporate gifts that strengthen business relationships. Luxury executive gifts, branded gift boxes, employee welcome kits & seasonal collections by RIS Services DMCC, Dubai.",
  keywords: [
    "corporate gifts Dubai",
    "corporate gifting UAE",
    "luxury business gifts",
    "branded gift boxes",
    "employee welcome kits",
    "executive gifts Dubai",
    "RIS Services DMCC",
    "corporate gift company Dubai",
    "client appreciation gifts",
    "Eid gifts corporate",
    "bulk corporate gifts UAE",
  ],
  authors: [{ name: "RIS Services DMCC" }],
  creator: "RIS Services DMCC",
  publisher: "RIS Services DMCC",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "RIS Corporate Gifts",
    title: "RIS Corporate Gifts — Premium Corporate Gifting in Dubai",
    description:
      "Curate meaningful corporate gifts that strengthen business relationships. Luxury gifting solutions by RIS Services DMCC, Dubai.",
    images: [
      {
        url: "/img/hero_img.png",
        width: 1200,
        height: 630,
        alt: "RIS Corporate Gifts — Premium gifting solutions in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIS Corporate Gifts — Premium Corporate Gifting in Dubai",
    description:
      "Luxury corporate gifting solutions by RIS Services DMCC, Dubai. Executive gifts, branded boxes, welcome kits & seasonal collections.",
    images: ["/img/hero_img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
