import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. Serving Islamabad, Rawalpindi, Lahore, Murree & beyond 24/7.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. Serving Islamabad, Rawalpindi, Lahore, Murree & beyond 24/7.",
    url: "https://roadrecoveryservice.com/contact",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. Serving Islamabad, Rawalpindi, Lahore, Murree & beyond 24/7.",
    images: ["/logo.png"],
  },
};

const BASE_URL = "https://roadrecoveryservice.com";

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BASE_URL}/contact/#webpage`,
        name: "Contact Us",
        url: `${BASE_URL}/contact`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Get Help or Book a Tow
            </h1>
            <p className="text-gray-300 text-lg">
              Need immediate assistance? Call us directly. For non-emergency bookings or general
              inquiries, fill out the form and we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      <ContactClient />
    </>
  );
}
