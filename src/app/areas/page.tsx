import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Areas We Serve Across Pakistan | 24/7 Recovery" },
  description:
    "We cover Islamabad, Rawalpindi, Lahore, Murree & beyond, including DHA, Bahria Town, Saddar, Gulberg, Askari & more. ~30-min average response time.",
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Areas We Serve Across Pakistan | 24/7 Recovery",
    description:
      "We cover Islamabad, Rawalpindi, Lahore, Murree & beyond, including DHA, Bahria Town, Saddar, Gulberg, Askari & more. ~30-min average response time.",
    url: "https://roadrecoveryservice.com/areas",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve Across Pakistan | 24/7 Recovery",
    description:
      "We cover Islamabad, Rawalpindi, Lahore, Murree & beyond, including DHA, Bahria Town, Saddar, Gulberg, Askari & more. ~30-min average response time.",
    images: ["/logo.png"],
  },
};

const areas = [
  { name: "DHA (Defence Housing Authority)", highlight: true },
  { name: "Bahria Town Phase 1" },
  { name: "Bahria Town Phase 2" },
  { name: "Bahria Town Phase 3" },
  { name: "Bahria Town Phase 4" },
  { name: "Bahria Town Phase 5" },
  { name: "Bahria Town Phase 6" },
  { name: "Bahria Town Phase 7" },
  { name: "Bahria Town Phase 8" },
  { name: "Askari 10" },
  { name: "Askari 13" },
  { name: "Askari 14" },
  { name: "Saddar, Rawalpindi" },
  { name: "Chaklala Scheme 3" },
  { name: "Islamabad Sectors (F & G)" },
  { name: "Blue Area, Islamabad" },
  { name: "Gulberg Greens" },
  { name: "Gulberg Residencia" },
];

const coverage = [
  "All major roads, motorways & expressways",
  "Residential streets and housing schemes",
  "Commercial zones and shopping areas",
  "Apartment complexes and gated communities",
  "Remote areas and city outskirts",
  "All major bridges and interchange approaches",
];

const BASE_URL = "https://roadrecoveryservice.com";

export default function AreasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/areas/#webpage`,
        name: "Areas We Serve Across Pakistan",
        url: `${BASE_URL}/areas`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "We cover Islamabad, Rawalpindi, Lahore, Murree & beyond, including DHA, Bahria Town, Saddar, Gulberg, Askari & more.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${BASE_URL}/areas` },
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
              Service Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Areas We Serve</h1>
            <p className="text-gray-300 text-lg">
              We cover Islamabad, Rawalpindi, Lahore, Murree &amp; beyond, from DHA and Bahria Town
              to Saddar and more. Not sure if we reach your location? Just call
              and we&apos;ll confirm right away.
            </p>
          </div>
        </div>
      </section>

      {/* Area List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Areas We Cover Across Pakistan
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Including Islamabad, Rawalpindi, Lahore, Murree and surrounding areas.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
            {areas.map((area) => (
              <div
                key={area.name}
                className={`flex items-center gap-2 p-2.5 rounded-lg text-sm font-medium ${
                  area.highlight
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                <MapPin
                  className={`h-3.5 w-3.5 shrink-0 ${
                    area.highlight ? "text-red-600" : "text-gray-400"
                  }`}
                />
                <span className="leading-tight">{area.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Don&apos;t see your area? Call and we&apos;ll tell you straight away.
          </p>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                We Cover All Road Types
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Overheating near Rawat interchange. Locked out in F-7 Markaz.
                Locked out on a quiet lane in I-10 on a Sunday afternoon. Whatever the road, whatever the
                hour, we bring the right equipment and get to you across Islamabad, Rawalpindi,
                Lahore, Murree &amp; beyond.
              </p>
              <ul className="space-y-3">
                {coverage.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <Clock className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-2xl font-extrabold mb-3">Average Response Time: 30 Minutes</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We aim to reach most locations across Islamabad, Rawalpindi, Lahore, and Murree
                in around 30 minutes, even during peak hours or late at night.
              </p>
              <div className="border-t border-gray-700 pt-6">
                <div className="text-sm text-gray-400 mb-2">Call our 24/7 dispatch line:</div>
                <a
                  href="tel:+923269751717"
                  className="text-2xl font-extrabold text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-6 w-6" />
                  0326 9751717
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City pages */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Dedicated City Coverage Pages
          </h2>
          <p className="text-gray-500 mb-8">
            Need information specific to your city? See detailed coverage for each city below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/areas/roadside-recovery-service-in-islamabad"
              className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors text-lg">
                  Islamabad
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-city coverage across all sectors: F, G, H, I and beyond. Islamabad
                Expressway, Srinagar Highway, Blue Area.
              </p>
              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-4">
                <MapPin className="h-4 w-4" />
                View Islamabad coverage
              </span>
            </Link>
            <Link
              href="/areas/roadside-recovery-service-in-rawalpindi"
              className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors text-lg">
                  Rawalpindi
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                DHA, Bahria Town Phase 1 to 8, Askari 10/13/14, Saddar, Chaklala. Coverage
                on Murree Road, GT Road, and 6th Road.
              </p>
              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-4">
                <MapPin className="h-4 w-4" />
                View Rawalpindi coverage
              </span>
            </Link>
            <Link
              href="/areas/roadside-recovery-service-in-lahore"
              className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors text-lg">
                  Lahore
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                DHA, Bahria Town, Johar Town, Model Town, Valencia & more. Coverage across the
                Lahore Ring Road, Ferozepur Road, and Canal Road.
              </p>
              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-4">
                <MapPin className="h-4 w-4" />
                View Lahore coverage
              </span>
            </Link>
            <Link
              href="/areas/roadside-recovery-service-in-murree"
              className="bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors text-lg">
                  Murree
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hill-station recovery across Murree town, Bhurban, Patriata, Ayubia &amp;
                Nathia Gali. Coverage on the Expressway, Mall Road, and Galyat routes.
              </p>
              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold mt-4">
                <MapPin className="h-4 w-4" />
                View Murree coverage
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure If We Reach You?</h2>
          <p className="text-red-100 mb-8">
            If you&apos;re not sure we reach you, call and we&apos;ll tell you straight away.
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
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
