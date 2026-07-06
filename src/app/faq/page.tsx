import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad and Rawalpindi.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQs | 24/7 Recovery and Roadside Assistance",
    description:
      "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad and Rawalpindi.",
    url: "https://roadrecoveryservice.com/faq",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | 24/7 Recovery and Roadside Assistance",
    description:
      "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad and Rawalpindi.",
    images: ["/logo.png"],
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              FAQs
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-lg">
              Got questions? We&apos;ve got answers. Browse the most common questions about our
              towing and roadside assistance services below.
            </p>
          </div>
        </div>
      </section>

      <FAQClient />
    </>
  );
}
