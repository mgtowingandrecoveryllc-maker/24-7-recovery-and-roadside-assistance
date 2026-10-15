import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/jumpstart-in-murree`;

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Jump Start Service in Murree | Mountain Battery Recovery" },
  description:
    "Battery died in Murree's cold weather? Our team handles mountain jump starts across Mall Road, Bhurban, Patriata & Nathia Gali. Call 0326 9751717.",
  alternates: { canonical: "/services/jumpstart-in-murree" },
  openGraph: {
    title: "24/7 Car Jump Start Service in Murree | Mountain Battery Recovery",
    description:
      "Battery died in Murree's cold weather? Our team handles mountain jump starts across Mall Road, Bhurban, Patriata & Nathia Gali. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", alt: "Jump start service in Murree hills" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Jump Start Service in Murree | Mountain Battery Recovery",
    description:
      "Battery died in Murree's cold weather? Our team handles mountain jump starts across Mall Road, Bhurban, Patriata & Nathia Gali. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80"],
  },
};

const areas = [
  "Mall Road & GPO Chowk",
  "Pindi Point & Kashmir Point",
  "Islamabad–Murree Expressway (full route)",
  "Ghora Gali & Changla Gali",
  "Bhurban & PC Bhurban area",
  "Patriata (New Murree) & chairlift area",
  "Nathia Gali & Ayubia",
  "Kashmir Road & Kohala Road",
  "Lower Topa & Upper Topa",
  "Sunny Bank, Jhika Gali & Barian",
];

const faqItems = [
  {
    q: "Why do batteries fail more often in Murree?",
    a: "Cold temperatures at Murree's altitude (2,300 m) reduce a battery's cranking power by up to 50%. Short trips up steep hills also prevent the alternator from fully recharging the battery. We see many tourists arrive with a borderline battery that was fine in the plains but fails after a cold overnight stay.",
  },
  {
    q: "Can you reach me on the Islamabad–Murree Expressway?",
    a: "Yes. We cover the entire Expressway route from the Islamabad toll plaza through Ghora Gali and up to Murree. Highway-side calls are treated as priority due to the safety risk of being stopped on a narrow mountain road.",
  },
  {
    q: "My car died at Patriata (New Murree) near the chairlift. Can you come that far?",
    a: "Absolutely. Patriata, Bhurban, Nathia Gali, and Ayubia are all within our Murree service zone. Response time may be slightly longer for the more remote spots, but we'll give you an honest ETA when you call.",
  },
  {
    q: "What does a jump start cost in Murree?",
    a: "Rs. 1,500 flat rate for all Murree locations — Mall Road, Bhurban, Patriata, or the Expressway. No altitude surcharge.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/jumpstart-in-islamabad" },
  { city: "Rawalpindi", href: "/services/jumpstart-in-rawalpindi" },
  { city: "Lahore", href: "/services/jumpstart-in-lahore" },
];

export default function JumpstartMurreePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Jump Start Service in Murree",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "Professional 24/7 jump start service for Murree, the Expressway, Bhurban, Patriata, Nathia Gali, and surrounding hill areas.",
      },
      {
        "@type": "Service",
        name: "Car Jump Start Service in Murree",
        description:
          "24/7 mountain jump start service for cars, SUVs, and diesel vehicles across Murree and the Galiyat region. Flat rate Rs. 1,500.",
        serviceType: "Car Jump Start",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Murree" },
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: 1500,
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
          { "@type": "ListItem", position: 3, name: "Jump Start", item: `${BASE_URL}/services/jumpstart` },
          { "@type": "ListItem", position: 4, name: "Murree", item: PAGE_URL },
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=800&q=80')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
            <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services/jumpstart" className="hover:text-red-300 transition-colors">Jump Start</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Murree</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Jump Start Service in Murree
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Battery died in Murree&apos;s cold mountain air? Whether you&apos;re a tourist stuck on Mall Road
            or stranded on the Expressway after dark — we bring professional jump-start equipment to you
            at any altitude.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" /> Call 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Mountain Conditions That Kill Batteries
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Murree sits at roughly 2,300 metres above sea level where winter temperatures regularly
                drop below 0 °C. At those temperatures, a battery that delivers 100% cranking power at
                27 °C drops to around 50%. A battery that was &quot;just okay&quot; in Islamabad or Lahore
                will often refuse to start after an overnight stay in Murree — especially during December
                through February.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The steep hills between Ghora Gali and Mall Road also punish batteries. Constant low-gear
                climbing means the engine runs at high RPM but the alternator can&apos;t always keep up with
                the electrical load from headlights, heaters, demisters, and phone chargers. Tourists
                driving up from the plains are the most vulnerable — they arrive with a battery weakened
                by summer heat and park overnight in sub-zero cold. Our Murree-based technicians carry
                cold-rated lithium jump starters designed to work reliably down to −20 °C.
              </p>
              <ul className="space-y-3">
                {[
                  "Cold-rated lithium jump starters that work down to −20 °C",
                  "Experience on mountain roads — Expressway, Ghora Gali, Nathia Gali",
                  "Works on all vehicles including diesel SUVs popular for hill trips",
                  "Battery health advice — we tell you if it'll survive the drive home",
                  "Flat rate Rs. 1,500 — no altitude or distance surcharge",
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
                src="https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=800&q=80"
                alt="Jump-starting a car in cold mountain conditions near Murree"
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
              { icon: Clock, label: "30–50 Min Response", sub: "Mall Road, Bhurban, Expressway" },
              { icon: Shield, label: "Rs. 1,500 Flat Rate", sub: "No altitude surcharge" },
              { icon: Phone, label: "24/7 Mountain Dispatch", sub: "Including snowfall nights" },
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

      {/* Areas We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Areas We Cover in &amp; Around Murree
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            From the Expressway toll plaza all the way up to Nathia Gali and Ayubia, our technicians
            navigate Murree&apos;s winding roads in all weather conditions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            When You Need a Jump Start in Murree
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Cold-Morning No-Start at Your Hotel",
                desc: "You drove up from Islamabad yesterday, parked overnight at a hotel on Mall Road or in Bhurban, and the engine won't turn over in the morning cold. This is our most common Murree call — we reach Mall Road hotels in about 30 minutes.",
              },
              {
                title: "Tourist Stranded on the Expressway After Dark",
                desc: "The Islamabad–Murree Expressway has limited lighting and no nearby workshops once you pass Ghora Gali. If your car dies here, stay inside with hazards on and call immediately. We treat Expressway calls as priority and dispatch from the nearest point.",
              },
              {
                title: "Battery Drained by Steep Uphill Driving",
                desc: "The climb from Ghora Gali to Murree town is steep, and low-gear driving with headlights, heater, and wipers on can overtax a weak battery. If the engine stalls at a hairpin and won't restart, we bring the jump starter up to you — our vehicles are equipped for mountain roads.",
              },
              {
                title: "Weekend Rush — Car Parked for Hours in Snow",
                desc: "Murree's weekend tourist rush means cars sit parked for hours in freezing temperatures at Pindi Point, Kashmir Point, or the Patriata chairlift car park. A battery that was marginal before the trip often won't start after a full day in the cold. We handle multiple calls like this every winter weekend.",
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

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Murree Jump Start FAQs
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
            Jump Start Service in Other Cities
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Heading back to the plains? We also provide 24/7 jump start service in these cities.
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
                  Jump Start in {c.city}
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
              { label: "Jump Start Service (All Cities)", href: "/services/jumpstart" },
              { label: "Murree Area Page", href: "/areas/roadside-recovery-service-in-murree" },
              { label: "Flatbed Towing", href: "/services/flatbed-towing" },
              { label: "Winch Out", href: "/services/winch-out" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact Us", href: "/contact" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Jump Start in Murree?</h2>
          <p className="text-gray-400 mb-8">
            Our mountain dispatch team covers Mall Road, Bhurban, Patriata, and the entire Expressway route — 24/7, even during snowfall.
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" /> Call 0326 9751717
          </a>
        </div>
      </section>
    </>
  );
}
