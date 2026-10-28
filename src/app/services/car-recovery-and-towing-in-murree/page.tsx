import type { Metadata } from "next";
import Link from "next/link";
import { Car, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/car-recovery-and-towing-in-murree`;

export const metadata: Metadata = {
  title: { absolute: "Car Recovery & Towing Service in Murree | From Rs. 8,000" },
  description:
    "Car recovery and towing in Murree and Galyat, 24/7. Mall Road, the Expressway, Bhurban, Patriata and Nathia Gali. From Rs. 8,000. Call 0326 9751717.",
  alternates: { canonical: "/services/car-recovery-and-towing-in-murree" },
  openGraph: {
    title: "Car Recovery & Towing Service in Murree | From Rs. 8,000",
    description:
      "Car recovery and towing in Murree and Galyat, 24/7. Mall Road, the Expressway, Bhurban, Patriata and Nathia Gali. From Rs. 8,000. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80", alt: "Car recovery tow truck on mountain road near Murree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Recovery & Towing Service in Murree | From Rs. 8,000",
    description:
      "Car recovery and towing in Murree and Galyat, 24/7. Mall Road, the Expressway, Bhurban, Patriata and Nathia Gali. From Rs. 8,000. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

const areas = [
  "Mall Road & GPO Chowk",
  "Pindi Point & Kashmir Point",
  "Islamabad-Murree Expressway (full length)",
  "Ghora Gali & Lower Topa",
  "Bhurban & PC Hotel Road",
  "Patriata (New Murree) & Chairlift Road",
  "Nathia Gali & Ayubia",
  "Chattar & Jhika Gali",
  "Changla Gali & Dunga Gali",
  "Murree to Islamabad corridor",
];

const faqItems = [
  {
    q: "How much is car recovery in Murree?",
    a: "Car recovery and towing in Murree starts from Rs. 8,000. Towing down to Islamabad or Rawalpindi is priced per kilometre on top of the base rate. We confirm the total on the phone before dispatch.",
  },
  {
    q: "How long does it take you to reach Murree?",
    a: "30 to 50 minutes depending on the road and the exact location. Expressway and Murree town calls are fastest. Nathia Gali and Bhurban take longer because of the winding hill roads.",
  },
  {
    q: "Is flatbed safer than wheel-lift on mountain roads?",
    a: "Yes. On steep downhill gradients, a car on a wheel-lift can push the tow truck from behind. A flatbed keeps all four wheels on the platform, so the car's weight sits over the truck's axles. We recommend flatbed for any hill recovery.",
  },
  {
    q: "My car rolled back on a hill. Can you recover it?",
    a: "Yes. We carry wheel chocks, anchor straps, and a winch. We chock the car first to stop further movement, then winch it onto the flatbed. The operator inspects the gradient and sets anchor points before any loading starts.",
  },
  {
    q: "Can you tow my car from Murree to an Islamabad workshop?",
    a: "Yes. We tow Murree to Islamabad via the Expressway. We deliver to any workshop or home address in Islamabad or Rawalpindi.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/car-recovery-and-towing-in-islamabad" },
  { city: "Rawalpindi", href: "/services/car-recovery-and-towing-in-rawalpindi" },
  { city: "Lahore", href: "/services/car-recovery-and-towing-in-lahore" },
];

export default function CarRecoveryMurreePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Recovery & Towing Service in Murree",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 car recovery and towing across Murree and Galyat. Mall Road, Expressway, Bhurban, Patriata, Nathia Gali. From Rs. 8,000.",
      },
      {
        "@type": "Service",
        name: "Car Recovery & Towing Service in Murree",
        description:
          "24/7 car recovery and towing in Murree and Galyat. Flatbed recovery on mountain roads. From Rs. 8,000.",
        serviceType: "Car Recovery and Towing",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Murree" },
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
          { "@type": "ListItem", position: 4, name: "Car Recovery & Towing in Murree", item: PAGE_URL },
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
            <span>Murree</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Car className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Recovery &amp; Towing Service in Murree
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
            The clutch burns out on the climb above Ghora Gali on a Sunday afternoon. The car loses power, rolls back, and you catch it with the handbrake just before the bend. The family is in the back seat. The road is steep and there is no flat spot to push the car to. Call 0326 9751717. We send a flatbed with wheel chocks. The operator chocks your wheels, winches the car onto the bed, and tows you down to an Islamabad or Rawalpindi workshop. You ride with the driver.
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
                Hill Recovery Is Not the Same as City Towing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On flat roads in Islamabad or Lahore, loading a car is straightforward. In Murree,
                every recovery starts with a gradient assessment. A car on a steep slope will roll
                the moment you release the handbrake. We chock the wheels before touching anything
                else. The winch cable goes on next, anchored to the truck&apos;s chassis, and the car
                is pulled onto the flatbed under controlled tension. No free-rolling, no surprises.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wheel-lift towing is risky on Murree&apos;s gradients. A car suspended by two wheels
                on a downhill run puts extra pushing force on the tow truck. The braking distance
                increases and the rig is harder to control on wet or icy bends. We use flatbed
                recovery for hill jobs because all four wheels sit on the platform and the car&apos;s
                weight is over the truck&apos;s axles. It is slower to load but far safer to transport
                down to the plains.
              </p>
              <ul className="space-y-3">
                {[
                  "Wheel chocks and anchor straps before every hill loading",
                  "Flatbed recovery for safe downhill transport",
                  "Coverage from Ghora Gali to Nathia Gali and Ayubia",
                  "Towing down to Islamabad or Rawalpindi workshops",
                  "Available 24/7 including weekends and holiday rush",
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
                alt="Flatbed recovery truck on a steep mountain road near Murree"
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
              { icon: Clock, label: "30 to 50 Min Response", sub: "Depending on the road" },
              { icon: Shield, label: "From Rs. 8,000", sub: "Price confirmed before dispatch" },
              { icon: Phone, label: "24/7 Dispatch", sub: "Weekends and holidays included" },
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

      {/* How Loading Works on Hills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            How We Load Your Car on a Gradient
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1. Assess the slope and set chocks",
                desc: "The operator measures the gradient and places wheel chocks on the downhill side before anything else. If the handbrake alone is holding the car, we add a strap to the nearest anchor point.",
              },
              {
                step: "2. Position the flatbed",
                desc: "The truck parks uphill of the car where possible so gravity helps the winch. On narrow roads, we may need to block one lane briefly with hazard cones.",
              },
              {
                step: "3. Winch onto the bed",
                desc: "The winch cable hooks to a rated recovery point under the car. The car is pulled onto the flatbed under steady tension. No free-rolling at any point.",
              },
              {
                step: "4. Strap and transport",
                desc: "Ratchet straps at all four corners. The driver takes the descent in low gear with engine braking. Destination is typically an Islamabad or Rawalpindi workshop.",
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
            Areas and Roads We Cover in Murree
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Mall Road, the Expressway, and every hill road from Ghora Gali to Nathia Gali.
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
            When You Need Car Recovery in Murree
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Clutch Cable Snaps Near Sunny Bank",
                desc: "Sunday afternoon, the clutch cable goes on the climb near Sunny Bank. The car rolls to a stop on the gradient. Handbrake on, hazards on, call us. We winch it onto the flatbed and tow down to a workshop.",
              },
              {
                title: "Engine Overheating on the Climb",
                desc: "The steep gradient from Lower Topa to Mall Road pushes engines hard, especially in summer. If your temperature gauge goes red and the engine stalls, pull the handbrake and call. Do not try to restart an overheated engine.",
              },
              {
                title: "Brakes Fading on a Steep Descent Past Bhurban",
                desc: "You pull into a lay-by because the brakes feel soft on the descent past Bhurban. The car won't move safely under its own power. We flatbed it down to a workshop in Islamabad or Rawalpindi.",
              },
              {
                title: "Overheating on Nathia Gali Road Above Ayubia",
                desc: "Steep climb, engine temp maxed out, coolant steaming. You pull over but the engine won't restart. We flatbed you down to a mechanic. You and the family ride with the driver.",
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
            Car Recovery Pricing in Murree
          </h2>
          <p className="text-gray-600 mb-2">
            Car recovery and towing in Murree starts from <strong>Rs. 8,000</strong>. Towing down
            to Islamabad or Rawalpindi is priced per kilometre on top of the base rate.
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
            Murree Car Recovery FAQs
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
              { label: "Jump Start in Murree", href: "/services/jumpstart-in-murree" },
              { label: "Murree Area Page", href: "/areas/roadside-recovery-service-in-murree" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need Car Recovery in Murree?</h2>
          <p className="text-gray-400 mb-8">
            Our team covers Mall Road, the Expressway, and every hill road in between. One call and a flatbed is on the way.
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
