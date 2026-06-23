"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "Are you available 24 hours a day?",
        a: "Yes, absolutely. We operate 24 hours a day, 7 days a week — including weekends and holidays. Our dispatch line is always answered by a real person, never a machine.",
      },
      {
        q: "How quickly can you reach me?",
        a: "Our average response time is 30 minutes or less within our primary service area. In some cases, particularly late at night or in remote areas, it may take slightly longer. We'll give you an accurate ETA when you call.",
      },
      {
        q: "Do you serve my area?",
        a: "We cover Islamabad, Rawalpindi, and surrounding areas — including DHA, Bahria Town, Gulberg, Askari sectors, Saddar, Chaklala Scheme 3, and more. Visit our Areas We Serve page for the full list, or just call us — we'll confirm right away.",
      },
      {
        q: "What types of vehicles do you tow?",
        a: "We tow cars, trucks, SUVs, vans, motorcycles, and light-duty commercial vehicles. For specialty or oversized vehicles, give us a call to discuss your specific needs.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much does a tow cost?",
        a: "Pricing depends on the type of service, your location, and the distance to your destination. We always provide an upfront price before we begin any work — no hidden fees or surprise charges. Call us for a free estimate.",
      },
      {
        q: "Do you accept insurance?",
        a: "Yes. We work directly with most major insurance companies and roadside assistance programs. If your insurance covers towing, we can often bill them directly. Have your insurance card ready when you call.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, all major credit and debit cards (Visa, Mastercard, American Express, Discover), and digital payments. Payment is collected at the time of service.",
      },
      {
        q: "Is there an extra charge for nights or weekends?",
        a: "We strive to keep our pricing consistent around the clock. Any applicable after-hours rates will be disclosed upfront when you call for service. We believe in full transparency.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "What is the difference between regular towing and flatbed towing?",
        a: "Regular towing raises one end of the vehicle while the other wheels remain on the road. Flatbed towing loads your entire vehicle onto a flat platform, keeping all four wheels off the ground. Flatbed is safer for AWD vehicles, luxury cars, and vehicles with low ground clearance.",
      },
      {
        q: "Can you unlock my car without damaging it?",
        a: "Yes. Our technicians use industry-standard, non-destructive lockout tools that are designed to open vehicle doors without scratching paint, breaking windows, or damaging locks.",
      },
      {
        q: "What if I don't have a spare tire?",
        a: "If you have a flat and no spare, or if your spare is also damaged, we can tow your vehicle to the nearest tire shop or your preferred location.",
      },
      {
        q: "Can you help if my car is stuck in mud or a ditch?",
        a: "Yes — that's exactly what our winch-out recovery service is for. We have heavy-duty winch equipment and trained operators who can safely extract vehicles from mud, snow, ditches, and other off-road situations.",
      },
      {
        q: "What fuel types do you deliver?",
        a: "We deliver petrol and diesel. When you call, let us know your fuel type and we'll bring the right one. The fuel cost is separate from the delivery fee.",
      },
    ],
  },
  {
    category: "Safety & Trust",
    questions: [
      {
        q: "Are your drivers licensed and insured?",
        a: "Yes. All of our drivers are fully licensed, background-checked, and trained in safe towing and roadside assistance practices. Our business is fully insured, protecting both our team and your vehicle.",
      },
      {
        q: "How will I know the tow truck driver is legitimate?",
        a: "When you call, we'll give you the driver's name and an ETA. Our trucks are marked with our company name and logo. If you ever feel unsure, call us back on the same number to confirm.",
      },
      {
        q: "Is my vehicle insured while being towed?",
        a: "We carry full commercial insurance coverage. In the unlikely event of any damage caused during the tow, we are covered. We'll always do our best to prevent any issues, and we stand behind our work.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-red-600 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQClient() {
  return (
    <>
      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-red-600 rounded-full inline-block" />
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to help. Call us anytime or send us a message and we&apos;ll get back
            to you as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" /> Call 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
