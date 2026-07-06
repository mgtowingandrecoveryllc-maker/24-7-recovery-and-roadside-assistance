import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. We serve Islamabad & Rawalpindi 24/7.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. We serve Islamabad & Rawalpindi 24/7.",
    url: "https://roadrecoveryservice.com/contact",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Need roadside help or want to book a tow? Call 0326 9751717 for emergency dispatch or fill out our contact form. We serve Islamabad & Rawalpindi 24/7.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
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
