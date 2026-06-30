import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "24/7 Recovery and Roadside Assistance serves Islamabad and Rawalpindi — including DHA, Bahria Town, Gulberg, Askari sectors, Saddar, Chaklala Scheme 3, and surrounding areas.",
  alternates: { canonical: "/areas" },
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
  { name: "Gulberg Greens" },
  { name: "Gulberg Residencia" },
  { name: "Askari 10" },
  { name: "Askari 13" },
  { name: "Askari 14" },
  { name: "Saddar, Rawalpindi" },
  { name: "Chaklala Scheme 3" },
  { name: "Islamabad Sectors (F & G)" },
  { name: "Blue Area, Islamabad" },
];

const coverage = [
  "All major roads, motorways & expressways",
  "Residential streets and housing schemes",
  "Commercial zones and shopping areas",
  "Apartment complexes and gated communities",
  "Remote areas and city outskirts",
  "All major bridges and interchange approaches",
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Service Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Areas We Serve</h1>
            <p className="text-gray-300 text-lg">
              We cover Islamabad and Rawalpindi — from DHA and Bahria Town to Saddar and beyond. If
              you&apos;re not sure whether we reach your location, just call and we&apos;ll confirm
              right away.
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder + Area List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3687856814054!2d73.1189577!3d33.543793400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede39cad6c45%3A0x8056b0a62192464f!2s24%2F7%20Recovery%20and%20Roadside%20Assistance!5e0!3m2!1sen!2s!4v1782750818623!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="24/7 Recovery and Roadside Assistance — Google Maps"
              />
            </div>

            {/* Area List */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Areas We Cover in Islamabad &amp; Rawalpindi
              </h2>
              <p className="text-gray-500 text-sm mb-5">
                Including surrounding areas of Islamabad and Rawalpindi.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
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
                Don&apos;t see your area? Give us a call — our coverage extends beyond this list and
                we do our best to reach every customer who needs us.
              </p>
            </div>
          </div>
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
                Whether you&apos;re stuck on a motorway, a back road, or inside a housing scheme,
                our team has the equipment and experience to reach you and handle the situation
                safely across Islamabad and Rawalpindi.
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
                Our strategically positioned fleet allows us to reach most locations across
                Islamabad and Rawalpindi in under 30 minutes — even during peak hours or late at
                night.
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

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Not Sure If We Reach You?</h2>
          <p className="text-red-100 mb-8">
            Give us a call and we&apos;ll confirm right away. We go above and beyond to help drivers
            across Islamabad, Rawalpindi, and the surrounding areas.
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
