import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad, Rawalpindi, Lahore & Murree.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQs | 24/7 Recovery and Roadside Assistance",
    description:
      "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad, Rawalpindi, Lahore & Murree.",
    url: "https://roadrecoveryservice.com/faq",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | 24/7 Recovery and Roadside Assistance",
    description:
      "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad, Rawalpindi, Lahore & Murree.",
    images: ["/logo.png"],
  },
};

const BASE_URL = "https://roadrecoveryservice.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/faq/#webpage`,
      name: "FAQs",
      url: `${BASE_URL}/faq`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#business` },
      description:
        "Find answers to common questions about our towing, jump start, tyre change, lockout, winch out and fuel delivery services in Islamabad, Rawalpindi, Lahore & Murree.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "FAQs", item: `${BASE_URL}/faq` },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
              Common questions about our services.
            </p>
          </div>
        </div>
      </section>

      <FAQClient />
    </>
  );
}
