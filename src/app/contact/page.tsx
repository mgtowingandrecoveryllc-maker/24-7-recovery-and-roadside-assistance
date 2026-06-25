import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact 24/7 Recovery and Roadside Assistance for 24/7 towing and roadside assistance. Call us anytime or fill out our online form to book a tow.",
  alternates: { canonical: "/contact" },
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
