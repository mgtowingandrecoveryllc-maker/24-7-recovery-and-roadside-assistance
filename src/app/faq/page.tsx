import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about 24/7 Recovery and Roadside Assistance — pricing, services, response times, insurance, and more.",
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
