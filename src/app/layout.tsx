import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roadrecoveryservice.com"),
  title: {
    default: "24/7 Jump Start, Tyre Change & Car Recovery in Islamabad & Rawalpindi",
    template: "%s | 24/7 Recovery and Roadside Assistance",
  },
  description:
    "Fast jump start, tyre change, air refill, and car recovery in Islamabad & Rawalpindi. Available 24/7 — call 0326 9751717 for immediate emergency roadside assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "24/7 Recovery and Roadside Assistance",
    telephone: "+923269751717",
    email: "recoveryandroadsideassistance@gmail.com",
    url: "https://roadrecoveryservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D01 jasim arcade , acantilado, Bahria Town Way, phase 7",
      addressLocality: "Islamabad",
      postalCode: "44011",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
    ],
    openingHours: "Mo-Su 00:00-23:59",
    description:
      "Fast jump start, tyre change, air refill, and car recovery in Islamabad & Rawalpindi. Available 24/7.",
    image: "https://roadrecoveryservice.com/logo.png",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
