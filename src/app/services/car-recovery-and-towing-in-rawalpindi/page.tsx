import type { Metadata } from "next";
import Link from "next/link";
import { Car, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/car-recovery-and-towing-in-rawalpindi`;

export const metadata: Metadata = {
  title: { absolute: "Car Recovery & Towing Service in Rawalpindi | From Rs. 8,000" },
  description:
    "Car recovery and towing in Rawalpindi, 24/7. Saddar, Bahria Town, DHA, Askari, Chaklala, Murree Road and GT Road. From Rs. 8,000. Call 0326 9751717.",
  alternates: { canonical: "/services/car-recovery-and-towing-in-rawalpindi" },
  openGraph: {
    title: "Car Recovery & Towing Service in Rawalpindi | From Rs. 8,000",
    description:
      "Car recovery and towing in Rawalpindi, 24/7. Saddar, Bahria Town, DHA, Askari, Chaklala, Murree Road and GT Road. From Rs. 8,000. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80", alt: "Car recovery tow truck in Rawalpindi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Recovery & Towing Service in Rawalpindi | From Rs. 8,000",
    description:
      "Car recovery and towing in Rawalpindi, 24/7. Saddar, Bahria Town, DHA, Askari, Chaklala, Murree Road and GT Road. From Rs. 8,000. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

const areas = [
  "Saddar & Committee Chowk",
  "Chaklala Scheme 3 & Chaklala Cantt",
  "Murree Road (full length)",
  "GT Road (Rawalpindi stretch)",
  "Peshawar Road & Pirwadhai",
  "6th Road, Adiala Road, Airport Road",
  "Bahria Town Phase 1 to 8",
  "DHA Phase 1 and 2 Rawalpindi",
  "Askari 10, 13, 14",
];

const faqItems = [
  {
    q: "How much does car recovery cost in Rawalpindi?",
    a: "Car recovery and towing in Rawalpindi starts from Rs. 8,000. The final price depends on the distance and vehicle type. We confirm the price on the phone before we dispatch.",
  },
  {
    q: "Can you get into Bahria Town and DHA with a tow truck?",
    a: "Yes. Give us your phase and block, and tell the guard a recovery vehicle is coming. If gate access is restricted, we can meet you at the nearest gate.",
  },
  {
    q: "My car is stuck in a narrow lane in Saddar. Can you still tow it?",
    a: "We can. For tight bazaar lanes where a full flatbed cannot enter, we use a smaller recovery van or wheel-lift to move the car to a wider road, then transfer to the flatbed if needed.",
  },
  {
    q: "Can you tow a car from Rawalpindi to Lahore?",
    a: "Yes. We tow Rawalpindi to Lahore via the M-2. We quote per kilometre for long-distance moves and confirm the total before dispatch.",
  },
  {
    q: "Do you recover vehicles from cantonment areas?",
    a: "Yes. Askari 10, 13, 14, Chaklala Cantt, and other cantonment zones all fall in our coverage. Just inform the gate guard that a recovery vehicle is arriving.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/car-recovery-and-towing-in-islamabad" },
  { city: "Lahore", href: "/services/car-recovery-and-towing-in-lahore" },
  { city: "Murree", href: "/services/car-recovery-and-towing-in-murree" },
];

export default function CarRecoveryRawalpindiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Recovery & Towing Service in Rawalpindi",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 car recovery and towing service across Rawalpindi. Saddar, Bahria Town, DHA, Askari, GT Road and Murree Road. From Rs. 8,000.",
      },
      {
        "@type": "Service",
        name: "Car Recovery & Towing Service in Rawalpindi",
        description:
          "24/7 car recovery and towing for cars, SUVs, and vans across Rawalpindi. Flatbed and wheel-lift. From Rs. 8,000.",
        serviceType: "Car Recovery and Towing",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Rawalpindi" },
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
          { "@type": "ListItem", position: 4, name: "Car Recovery & Towing in Rawalpindi", item: PAGE_URL },
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
            <span>Rawalpindi</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Car className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Recovery &amp; Towing Service in Rawalpindi
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
            You bought a non-running car from a seller in Chaklala. He needs it moved today. The car has no battery, the steering locks, and you have no way to push it out of the lane. Call 0326 9751717. We send a recovery van that fits Chaklala&apos;s narrow streets, winch your car onto the bed, and deliver it to your address or mechanic. Done today, as promised.
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
                Why Rawalpindi Needs a Different Approach to Car Recovery
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rawalpindi has two very different road environments. The old city around Saddar,
                Raja Bazaar, and Banni has lanes so narrow that a full-size flatbed cannot enter. A
                recovery van or wheel-lift truck goes in, hooks the car, and pulls it to the nearest
                wide road where a flatbed can take over. Getting this wrong means a tow truck stuck
                sideways in a lane with traffic piling up behind it.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The second environment is the gated communities. Bahria Town, DHA, and Askari sectors
                all require gate security clearance before any recovery vehicle can enter. Give us
                your phase and block, and tell the guard a recovery vehicle is coming. If a particular
                gate does not allow heavy vehicles, we know the alternative entry points and plan
                accordingly.
              </p>
              <ul className="space-y-3">
                {[
                  "Smaller recovery van for narrow Saddar and bazaar lanes",
                  "Gate access coordination for Bahria Town, DHA, Askari",
                  "Cantonment area coverage including Chaklala Cantt",
                  "Inter-city towing to Islamabad, Lahore, or Murree",
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
                alt="Recovery van loading a car in Rawalpindi"
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
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Rawalpindi" },
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
                desc: "Location, vehicle type, destination. We check whether the street is wide enough for a flatbed or if we need the smaller recovery van first.",
              },
              {
                step: "2. Gate or lane access sorted",
                desc: "For gated communities, give us your phase and block. For narrow lanes, we send the right size vehicle so nobody gets stuck.",
              },
              {
                step: "3. Car checked and loaded",
                desc: "Car winched or driven onto the bed and strapped down securely.",
              },
              {
                step: "4. Delivered to your chosen address",
                desc: "Workshop on Peshawar Road, your home in Bahria Town, or a dealership in Islamabad. You are updated throughout.",
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
            Areas and Roads We Cover in Rawalpindi
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            From the narrow bazaar lanes in Saddar to the wide avenues of Bahria Town and DHA.
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
            When You Need Car Recovery in Rawalpindi
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Breakdown on GT Road or Murree Road",
                desc: "Heavy commercial traffic on both roads means a broken-down car blocks the flow fast. We load quickly to clear the lane and tow to any Rawalpindi or Islamabad workshop.",
              },
              {
                title: "Cantonment Gate Recovery",
                desc: "Your car stalled inside Askari 14 or near the Chaklala Cantt gates. Give us your phase and block, and tell the guard a recovery vehicle is coming. We recover the vehicle and deliver it to your mechanic.",
              },
              {
                title: "Breakdown on Murree Road Near Rawat",
                desc: "Your engine overheated and won't restart on the busy Murree Road stretch near Rawat. We load on the shoulder and tow to any Rawalpindi or Islamabad workshop.",
              },
              {
                title: "Car Trapped in a Narrow Lane",
                desc: "A breakdown in the old city or a residential gali where a flatbed cannot fit. We use a recovery van to pull the car to a main road, then transfer to the flatbed for the longer haul.",
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
            Car Recovery Pricing in Rawalpindi
          </h2>
          <p className="text-gray-600 mb-2">
            Car recovery and towing in Rawalpindi starts from <strong>Rs. 8,000</strong>. The final
            price depends on the distance, vehicle type, and road access.
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
            Rawalpindi Car Recovery FAQs
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
              { label: "Jump Start in Rawalpindi", href: "/services/jumpstart-in-rawalpindi" },
              { label: "Rawalpindi Area Page", href: "/areas/roadside-recovery-service-in-rawalpindi" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need Car Recovery in Rawalpindi?</h2>
          <p className="text-gray-400 mb-8">
            From Saddar to Bahria Town, our dispatch covers all of Rawalpindi 24/7. One call and a recovery vehicle is on the way.
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
