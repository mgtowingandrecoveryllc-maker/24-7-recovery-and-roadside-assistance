import type { Metadata } from "next";
import Link from "next/link";
import { Car, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/car-recovery-and-towing-in-lahore`;

export const metadata: Metadata = {
  title: { absolute: "Car Recovery & Towing Service in Lahore | From Rs. 8,000" },
  description:
    "Car recovery and towing in Lahore, 24/7. DHA, Johar Town, Model Town, Ring Road and Canal Road. From Rs. 8,000. Call 0326 9751717.",
  alternates: { canonical: "/services/car-recovery-and-towing-in-lahore" },
  openGraph: {
    title: "Car Recovery & Towing Service in Lahore | From Rs. 8,000",
    description:
      "Car recovery and towing in Lahore, 24/7. DHA, Johar Town, Model Town, Ring Road and Canal Road. From Rs. 8,000. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80", alt: "Car recovery tow truck in Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Recovery & Towing Service in Lahore | From Rs. 8,000",
    description:
      "Car recovery and towing in Lahore, 24/7. DHA, Johar Town, Model Town, Ring Road and Canal Road. From Rs. 8,000. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

const areas = [
  "DHA Phase 1 to 9 & DHA Rahbar",
  "Johar Town & Valencia Town",
  "Model Town & Faisal Town",
  "Gulberg, MM Alam Road, Liberty",
  "Canal Road (full length)",
  "Ring Road & Thokar Niaz Baig",
  "Ferozepur Road & Multan Road",
  "Mall Road & Lahore Cantt",
  "Bahria Town Lahore (Raiwind Road)",
  "Allama Iqbal Town, Sabzazar, Wapda Town",
];

const faqItems = [
  {
    q: "How much is car recovery in Lahore?",
    a: "Car recovery and towing in Lahore starts from Rs. 8,000. The exact price depends on distance and vehicle size. We confirm the price on the call before dispatch.",
  },
  {
    q: "Can you tow my car from Lahore to Islamabad?",
    a: "Yes. We tow Lahore to Islamabad via the M-2. We quote the total including motorway distance before we send the truck.",
  },
  {
    q: "My car broke down in traffic on Canal Road. How fast can you reach me?",
    a: "Around 30 minutes on average within Lahore city. Canal Road calls depend on traffic, but we dispatch from the nearest available point to minimise wait time.",
  },
  {
    q: "Do you enter DHA and Bahria Town Lahore?",
    a: "Yes. Give us your phase and block, and tell the guard a recovery vehicle is coming.",
  },
  {
    q: "What if my car is blocking a lane on the Ring Road?",
    a: "Call us immediately. The longer the car sits, the higher the risk of a secondary collision. We load quickly to clear the road.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/car-recovery-and-towing-in-islamabad" },
  { city: "Rawalpindi", href: "/services/car-recovery-and-towing-in-rawalpindi" },
  { city: "Murree", href: "/services/car-recovery-and-towing-in-murree" },
];

export default function CarRecoveryLahorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Recovery & Towing Service in Lahore",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 car recovery and towing across Lahore. DHA, Johar Town, Model Town, Canal Road, Ring Road and inter-city to Islamabad. From Rs. 8,000.",
      },
      {
        "@type": "Service",
        name: "Car Recovery & Towing Service in Lahore",
        description:
          "24/7 car recovery and towing for cars, SUVs, and vans across Lahore. Flatbed and wheel-lift. From Rs. 8,000.",
        serviceType: "Car Recovery and Towing",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Lahore" },
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: 8000,
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Car Towing", item: `${BASE_URL}/services/car-towing` },
          { "@type": "ListItem", position: 4, name: "Car Recovery & Towing in Lahore", item: PAGE_URL },
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
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=800&q=80')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
            <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services/car-towing" className="hover:text-red-300 transition-colors">Car Towing</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Lahore</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Car className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Recovery &amp; Towing Service in Lahore
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-600/90 text-white text-sm font-bold px-4 py-1.5 rounded-full">
              From Rs. 8,000
            </span>
            <span className="text-gray-400 text-sm">
              Exact price confirmed on the phone before dispatch
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            The gearbox fails at the Canal Road signal on a Wednesday afternoon. The car lurches, the gears grind, and then nothing. You are stuck in the middle lane with traffic stacking up behind you. Horns everywhere. Call 0326 9751717. We get a tow truck to you, load the car off the road, and deliver it to your workshop in Johar Town or wherever you need it. Price quoted on the phone, no arguments at the scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" /> Call Now: 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </section>

      {/* About the Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Car Recovery in Lahore&apos;s Heavy Traffic
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In Lahore, the biggest problem with a breakdown is not the car. It is the traffic
                behind it. A car blocking a lane on Canal Road, Ferozepur Road, or the Ring Road
                creates a jam within minutes. The priority is speed: get to the car, get it loaded,
                get the lane clear. We position on service lanes where possible so the truck
                does not block a second lane, and use wide signal shoulders
                to place the flatbed safely.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For residential recoveries in DHA, Johar Town, Model Town, or Bahria Town Lahore on
                Raiwind Road, the pace is different. Here the challenge is gate access, narrow internal
                roads, and speed bumps that a flatbed needs to clear. Give us your phase and block,
                and tell the guard a recovery vehicle is coming, so you are
                not waiting at the barrier.
              </p>
              <ul className="space-y-3">
                {[
                  "Fast lane-clearing for breakdowns on major roads",
                  "DHA, Bahria Town, Model Town gate access",
                  "Inter-city towing to Islamabad via M-2 motorway",
                  "Flatbed and wheel-lift options for every vehicle type",
                  "Price confirmed before dispatch. No hidden charges",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=800&q=80"
                alt="Tow truck loading a car on a busy Lahore road"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Lahore" },
              { icon: Shield, label: "From Rs. 8,000", sub: "Price confirmed before dispatch" },
              { icon: Phone, label: "24/7 Dispatch", sub: "Including 3am and monsoon nights" },
            ].map((item) => {
              const I = item.icon;
              return (
                <div key={item.label}>
                  <I className="h-8 w-8 mx-auto mb-2 text-red-200" />
                  <div className="font-bold text-lg">{item.label}</div>
                  <div className="text-red-200 text-sm">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Loading Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            How We Load and Secure Your Car
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1. You call with the details",
                desc: "Location, vehicle type, and destination. If the car is blocking a lane, tell us.",
              },
              {
                step: "2. Nearest truck dispatched",
                desc: "Flatbed for AWD, lowered, or damaged vehicles. Wheel-lift for standard cars on flat ground. We decide with you on the call.",
              },
              {
                step: "3. Lane cleared, car loaded",
                desc: "For road-blocking breakdowns, the operator positions to clear the lane first. Car is checked, loaded, and strapped down securely.",
              },
              {
                step: "4. Delivered to your workshop or home",
                desc: "Ferozepur Road, Johar Town, Bahria Town Lahore, or inter-city to Islamabad. You are updated throughout the journey.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {s.step.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{s.step.slice(3)}</div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas & Roads */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Areas and Roads We Cover in Lahore
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Every major road, housing scheme, and commercial area in Lahore.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            When You Need Car Recovery in Lahore
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Stalled Under a Canal Road Underpass",
                desc: "Your car dies in a Canal Road underpass during monsoon flooding. Water is rising. Do not restart the engine. Call us. We tow the car out dry and deliver it to a mechanic who can check for water damage.",
              },
              {
                title: "Moving a Car to a Workshop on Ferozepur Road",
                desc: "Your mechanic is on Ferozepur Road but your car died in Valencia. We collect from any Lahore address and deliver to the workshop door.",
              },
              {
                title: "Inter-City Transport to Islamabad",
                desc: "Need your car moved from Lahore to Islamabad or Rawalpindi? We tow via the M-2 motorway and deliver to any address at the other end. Total price confirmed before we leave.",
              },
              {
                title: "Recovery After a Monsoon Breakdown",
                desc: "Lahore floods during heavy monsoon rain. If your car stalled in standing water on Canal Road or an underpass, do not restart the engine. Call us. We tow the car out dry and deliver it to a mechanic who can inspect for water damage.",
              },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start">
                <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{s.title}</div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Car Recovery Pricing in Lahore
          </h2>
          <p className="text-gray-600 mb-2">
            Car recovery and towing in Lahore starts from <strong>Rs. 8,000</strong>. Inter-city
            towing to Islamabad or Rawalpindi is priced per kilometre on top of the base rate.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            We always confirm the exact price on the phone before dispatch. No surprises on arrival.
          </p>
          <Link
            href="/pricing"
            className="text-red-600 font-semibold hover:underline text-sm"
          >
            View full pricing &rarr;
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Lahore Car Recovery FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Available In */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Car Recovery &amp; Towing in Other Cities
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We also provide 24/7 car recovery and towing in these cities.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="group bg-gray-50 border border-gray-200 hover:border-red-500 rounded-xl p-5 transition-all hover:shadow-lg text-center"
              >
                <div className="bg-red-50 group-hover:bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto transition-colors">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Car Recovery in {c.city}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Car Towing (All Cities)", href: "/services/car-towing" },
              { label: "Flatbed Towing", href: "/services/flatbed-towing" },
              { label: "Accident Towing", href: "/services/accident-towing" },
              { label: "Motorway Recovery", href: "/services/motorway-recovery" },
              { label: "Jump Start in Lahore", href: "/services/jumpstart-in-lahore" },
              { label: "Lahore Area Page", href: "/areas/roadside-recovery-service-in-lahore" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-200 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                {s.label} <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need Car Recovery in Lahore?</h2>
          <p className="text-gray-400 mb-8">
            Our dispatch covers all of Lahore 24/7. One call and a tow truck is on the way.
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" /> Call Now: 0326 9751717
          </a>
        </div>
      </section>
    </>
  );
}
