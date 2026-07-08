import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Shield, Star, Clock, Users, Award, Truck, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 24/7 Road Recovery Service. A trusted, licensed, family-run towing and roadside assistance provider serving Islamabad & Rawalpindi.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Learn about 24/7 Road Recovery Service. A trusted, licensed, family-run towing and roadside assistance provider serving Islamabad & Rawalpindi.",
    url: "https://roadrecoveryservice.com/about",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | 24/7 Recovery and Roadside Assistance",
    description:
      "Learn about 24/7 Road Recovery Service. A trusted, licensed, family-run towing and roadside assistance provider serving Islamabad & Rawalpindi.",
    images: ["/logo.png"],
  },
};

const values = [
  {
    icon: Clock,
    title: "Speed Matters",
    desc: "We know that every minute stranded on the road is stressful. Our goal is to be on-scene in 30 minutes or less.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Every procedure we follow is designed to protect you, other drivers, and your vehicle. We never cut corners.",
  },
  {
    icon: Star,
    title: "Quality Service",
    desc: "From your first call to the final drop-off, we hold ourselves to the highest standard of professionalism.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "We're a local business proud to serve the drivers in our community. Your trust means everything to us.",
  },
];

const milestones = [
  { year: "2010", event: "24/7 Recovery and Roadside Assistance was founded with a single tow truck and a commitment to honest service." },
  { year: "2013", event: "Expanded our fleet and added 24/7 dispatch, ensuring no call goes unanswered." },
  { year: "2016", event: "Introduced flatbed towing and winch-out recovery services to better serve our customers." },
  { year: "2020", event: "Celebrated serving over 5,000 customers and expanded our service area across Islamabad and Rawalpindi." },
  { year: "2024", event: "Launched modern booking and real-time tracking to make getting help even easier." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              About 24/7 Recovery — Islamabad &amp; Rawalpindi&apos;s Trusted Roadside &amp; Recovery
              Service
            </h1>
            <p className="text-red-400 font-semibold text-lg mb-4">
              Built on Trust. Driven by Service.
            </p>
            <p className="text-gray-300 text-lg">
              24/7 Recovery and Roadside Assistance has been helping drivers across the region for over a
              decade. We are a family-owned and operated business that treats every customer like a
              neighbor.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  24/7 Recovery and Roadside Assistance was founded with a simple mission: to provide fast,
                  honest, and professional towing and roadside assistance to drivers who needed help
                  most. What started as a one-truck operation has grown into a full-service fleet
                  serving Islamabad and Rawalpindi.
                </p>
                <p>
                  Our founder started in the industry after seeing firsthand how distressing it is
                  to be stranded on the road — and how a reliable, trustworthy tow company can make
                  all the difference. That experience shaped everything about how we operate: from
                  the way we answer the phone to the care our drivers take with every vehicle.
                </p>
                <p>
                  Today, we are proud to serve thousands of customers each year with a team of
                  trained, certified professionals and a modern fleet ready for any situation.
                  We&apos;re not just a towing company — we&apos;re your neighbors, and we&apos;re
                  here when you need us most.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
                alt="Our tow truck fleet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-red-400" />
                  <span className="font-bold">Licensed &amp; Insured Since 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t just words on a wall — they&apos;re the principles that guide every
              call we take and every job we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">Over a decade of serving drivers across the region.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-red-200 -translate-x-0.5" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-start gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    } hidden sm:block`}
                  >
                    {i % 2 === 0 && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 relative ml-0 sm:ml-0">
                      <Truck className="h-4 w-4" />
                    </div>
                    <div className="absolute -top-1 left-10 sm:left-1/2 sm:-translate-x-1/2 sm:top-auto sm:-top-7 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap">
                      {m.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 sm:block">
                      <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Reviews From Google</h2>
            <p className="text-gray-600">
              Hear directly from the drivers we&apos;ve helped, straight from our Google Business
              Profile.
            </p>
          </div>
          <div className="w-full min-h-[200px]">
            <div id="trustindex-widget-about" />
            <Script
              id="trustindex-widget-about-script"
              src="https://cdn.trustindex.io/loader.js?359ba7276a0f190362465ecae34"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-red-100 mb-8">
            Whether you need a tow right now or want to save our number for later, we&apos;re here
            for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" /> Call 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
