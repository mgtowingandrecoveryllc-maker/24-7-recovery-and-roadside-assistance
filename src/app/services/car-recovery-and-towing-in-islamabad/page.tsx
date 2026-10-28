import type { Metadata } from "next";
import Link from "next/link";
import { Car, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/car-recovery-and-towing-in-islamabad`;

export const metadata: Metadata = {
  title: { absolute: "Car Recovery & Towing Service in Islamabad | From Rs. 8,000" },
  description:
    "Car recovery and towing in Islamabad, 24/7. Flatbed and wheel-lift for every sector, the Expressway and Srinagar Highway. From Rs. 8,000. Call 0326 9751717.",
  alternates: { canonical: "/services/car-recovery-and-towing-in-islamabad" },
  openGraph: {
    title: "Car Recovery & Towing Service in Islamabad | From Rs. 8,000",
    description:
      "Car recovery and towing in Islamabad, 24/7. Flatbed and wheel-lift for every sector, the Expressway and Srinagar Highway. From Rs. 8,000. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80", alt: "Car recovery tow truck in Islamabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Recovery & Towing Service in Islamabad | From Rs. 8,000",
    description:
      "Car recovery and towing in Islamabad, 24/7. Flatbed and wheel-lift for every sector, the Expressway and Srinagar Highway. From Rs. 8,000. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

const areas = [
  "F-6, F-7, F-8, F-10, F-11",
  "G-8, G-9, G-10, G-11, G-13",
  "I-8, I-9, I-10, I-14, I-16",
  "Blue Area & Jinnah Avenue",
  "Islamabad Expressway & Srinagar Highway",
  "Srinagar Highway & Margalla Road",
  "E-11, D-12, H-13",
  "Bahria Town Phase 1 to 8 (Islamabad side)",
  "DHA Phase 1 to 5 Islamabad",
  "Bahria Enclave, Golra, Tarlai, Bani Gala",
];

const faqItems = [
  {
    q: "How much is car recovery in Islamabad?",
    a: "Our car recovery and towing starts from Rs. 8,000 within Islamabad. The exact price depends on the distance and vehicle type. We confirm the price on the phone before we send anything.",
  },
  {
    q: "Can you tow my car from I-9 to a workshop in Rawalpindi?",
    a: "Yes. We tow between the two cities any time. Give us both addresses and we quote before dispatch.",
  },
  {
    q: "Do you use a flatbed or wheel-lift?",
    a: "Both. If your car is front-wheel drive and the undercarriage is intact, a wheel-lift works fine. For AWD vehicles, lowered cars, or anything with body damage, we send a flatbed. We decide with you on the phone.",
  },
  {
    q: "My car is in a basement car park. Can you still recover it?",
    a: "Yes. Let us know the building name and floor when you call so we can plan the recovery.",
  },
  {
    q: "How fast can a recovery van reach me in Islamabad?",
    a: "Around 30 minutes on average across the city.",
  },
];

const otherCities = [
  { city: "Rawalpindi", href: "/services/car-recovery-and-towing-in-rawalpindi" },
  { city: "Lahore", href: "/services/car-recovery-and-towing-in-lahore" },
  { city: "Murree", href: "/services/car-recovery-and-towing-in-murree" },
];

export default function CarRecoveryIslamabadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Recovery & Towing Service in Islamabad",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 car recovery and towing service covering all Islamabad sectors, Expressway, Srinagar Highway, and surrounding areas. From Rs. 8,000.",
      },
      {
        "@type": "Service",
        name: "Car Recovery & Towing Service in Islamabad",
        description:
          "24/7 car recovery and towing for cars, SUVs, and vans across Islamabad. Flatbed and wheel-lift. From Rs. 8,000.",
        serviceType: "Car Recovery and Towing",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Islamabad" },
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
          { "@type": "ListItem", position: 4, name: "Car Recovery & Towing in Islamabad", item: PAGE_URL },
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
            <span>Islamabad</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Car className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Recovery &amp; Towing Service in Islamabad
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
            The mechanic in I-9 says the engine has seized. The car cannot be driven and the workshop closes at 6. You are stuck in the industrial area with a dead car and no way to move it. Call 0326 9751717. We send a recovery vehicle to I-9, load your car, and deliver it to whichever workshop or home address you need. Price confirmed before we leave the yard.
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
                Car Recovery Across Islamabad&apos;s Sector Grid
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Islamabad&apos;s grid layout looks simple on a map, but the narrow service roads inside
                G and I sectors make loading a car tricky if the operator does not know where to position
                the truck. Basement ramps in F-8, F-10, and Blue Area commercial plazas add another layer.
                A standard car lifter cannot always reverse down a ramp and winch a vehicle out. Our trucks
                have a winch for basement extractions, so your car reaches street
                level even if it cannot roll.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For highway breakdowns on Islamabad Expressway or Srinagar Highway,
                we send the nearest available truck. If your car is front-wheel drive and intact underneath,
                a wheel-lift tow is faster and cheaper. If it is AWD, lowered, or has damage, we send
                the flatbed. We decide this with you on the call so there are no surprises on arrival.
              </p>
              <ul className="space-y-3">
                {[
                  "Flatbed and wheel-lift trucks for every vehicle type",
                  "Basement and ramp extraction",
                  "Cross-city towing to Rawalpindi, Lahore, or Murree",
                  "Price confirmed before dispatch. No hidden charges",
                  "Available 24 hours, 7 days, including public holidays",
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
                alt="Car being loaded onto a recovery truck in Islamabad"
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
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Islamabad sectors" },
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
                step: "1. You call with the location and vehicle details",
                desc: "Tell us where the car is, what it is, and where it needs to go. We quote the price on the call.",
              },
              {
                step: "2. We send the right truck",
                desc: "Wheel-lift for standard FWD/RWD vehicles on flat ground. Flatbed for AWD, lowered cars, or vehicles with body damage. Average arrival around 30 minutes in Islamabad.",
              },
              {
                step: "3. Driver checks the car before loading",
                desc: "Both sides confirm the state of the vehicle before it moves.",
              },
              {
                step: "4. Car is secured on the flatbed",
                desc: "Your car is strapped down securely. The driver does a walk-around check before pulling away.",
              },
              {
                step: "5. Delivered to your address",
                desc: "Workshop, home, dealership, or another city. We unload with the same care and you sign off on delivery.",
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
            Areas and Roads We Cover in Islamabad
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Every sector, every major highway, and every gated community in the capital.
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
            When You Need Car Recovery in Islamabad
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Breakdown on the Expressway During Rush Hour",
                desc: "Your engine cuts out between the I-8 and Rawat interchanges. Hazards on, stay in the car, call us. We load on the shoulder and tow to your chosen workshop.",
              },
              {
                title: "Accident on Srinagar Highway",
                desc: "Your car took a hit and cannot be driven. Needs a flatbed to a body shop in I-10. We load on the highway shoulder and deliver to the workshop. Price confirmed before dispatch.",
              },
              {
                title: "Relative's Car Parked for a Year",
                desc: "A relative's car has been sitting at their house in G-9 for a year. Battery dead, tyres flat, needs to go to the scrapyard or a workshop. We winch it onto the flatbed and deliver.",
              },
              {
                title: "Basement Car Park Extraction",
                desc: "Your car died on B2 of an F-11 Markaz plaza. The ramp is steep and the car will not roll. We winch it up to street level and load it there.",
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
            Car Recovery Pricing in Islamabad
          </h2>
          <p className="text-gray-600 mb-2">
            Car recovery and towing in Islamabad starts from <strong>Rs. 8,000</strong>. The final
            price depends on the distance, vehicle type, and whether you need a flatbed or wheel-lift.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            We always confirm the exact price on the phone before we dispatch. No surprises on arrival.
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
            Islamabad Car Recovery FAQs
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
              { label: "Jump Start in Islamabad", href: "/services/jumpstart-in-islamabad" },
              { label: "Islamabad Area Page", href: "/areas/roadside-recovery-service-in-islamabad" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need Car Recovery in Islamabad?</h2>
          <p className="text-gray-400 mb-8">
            Our dispatch covers every Islamabad sector 24/7. One call and a recovery vehicle is on the way.
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
