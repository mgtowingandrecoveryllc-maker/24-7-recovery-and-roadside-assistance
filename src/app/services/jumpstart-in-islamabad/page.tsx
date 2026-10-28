import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/jumpstart-in-islamabad`;

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Jump Start Service in Islamabad | Fast Battery Recovery" },
  description:
    "Dead car battery in Islamabad? Our 24/7 jump start team reaches you fast across all sectors, Blue Area, Expressway & more. Call 0326 9751717 now.",
  alternates: { canonical: "/services/jumpstart-in-islamabad" },
  openGraph: {
    title: "24/7 Car Jump Start Service in Islamabad | Fast Battery Recovery",
    description:
      "Dead car battery in Islamabad? Our 24/7 jump start team reaches you fast across all sectors, Blue Area, Expressway & more. Call 0326 9751717 now.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", alt: "Jump start service in Islamabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Jump Start Service in Islamabad | Fast Battery Recovery",
    description:
      "Dead car battery in Islamabad? Our 24/7 jump start team reaches you fast across all sectors, Blue Area, Expressway & more. Call 0326 9751717 now.",
    images: ["https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80"],
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
  "Golra, Tarlai, Sohan, Bani Gala",
];

const faqItems = [
  {
    q: "How fast can you reach me in Islamabad?",
    a: "Our average response time across Islamabad is 30 minutes. Response times vary depending on your location and traffic conditions.",
  },
  {
    q: "My car died in a basement car park in F-8 Markaz. Can you still come?",
    a: "Yes. Our technicians can reach underground and multi-storey car parks. Just let us know the building name, floor level, and any access instructions when you call.",
  },
  {
    q: "I'm stranded on Islamabad Expressway at night. Is it safe to wait?",
    a: "Turn on your hazard lights, stay inside the vehicle with doors locked, and call us immediately at 0326 9751717. We prioritise highway calls because of the safety risk and aim to reach Expressway locations quickly.",
  },
  {
    q: "What does a jump start cost in Islamabad?",
    a: "Our flat rate is Rs. 1,500 for a jump start anywhere in Islamabad. No hidden charges, no distance surcharge within the city.",
  },
];

const otherCities = [
  { city: "Rawalpindi", href: "/services/jumpstart-in-rawalpindi" },
  { city: "Lahore", href: "/services/jumpstart-in-lahore" },
  { city: "Murree", href: "/services/jumpstart-in-murree" },
];

export default function JumpstartIslamabadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Jump Start Service in Islamabad",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "Professional 24/7 jump start service covering all Islamabad sectors, Blue Area, Expressway, and surrounding areas.",
      },
      {
        "@type": "Service",
        name: "Car Jump Start Service in Islamabad",
        description:
          "24/7 mobile jump start service for cars, SUVs, trucks and diesel vehicles across Islamabad. Flat rate Rs. 1,500.",
        serviceType: "Car Jump Start",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Islamabad" },
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
          { "@type": "ListItem", position: 4, name: "Islamabad", item: PAGE_URL },
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
            <span>Islamabad</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Jump Start Service in Islamabad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Saturday morning, 7am. You&apos;re parked in G-9 Markaz, picking up groceries before the family wakes up. You come back, turn the key. Dead. Not even the dashboard lights. The market is just opening and there&apos;s no mechanic in sight. Call 0326 9751717. Our technician reaches your sector, jump-starts your car, and you&apos;re home before breakfast.
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
              Get Help Now
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
                Why Batteries Fail Across Islamabad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Islamabad&apos;s extreme summer heat, regularly above 40 °C, accelerates battery fluid
                evaporation and shortens battery life. In winter, cold mornings in sectors near the
                Margalla Hills make starting harder. Short-trip driving between Blue Area offices and
                residential sectors means your alternator never fully recharges the battery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Batteries tend to give out in basement car parks around F-8 and F-10 Markaz,
                commuters stranded on Islamabad Expressway between I-8 and the Faizabad interchange, and
                shoppers who left their lights on at Centaurus or Giga Mall. Our technicians
                bring a jump starter. Have a diesel or a bigger vehicle? Tell us on the call and we&apos;ll confirm what we send.
              </p>
              <ul className="space-y-3">
                {[
                  "Jump starters for petrol and diesel vehicles",
                  "Safe for modern electronics",
                  "Battery health check included at no extra charge",
                  "Flat rate Rs. 1,500. No distance surcharge within Islamabad",
                  "Available 24 hours, 7 days a week, 365 days a year",
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
                alt="Technician jump-starting a car battery in Islamabad"
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
              { icon: Shield, label: "Rs. 1,500 Flat Rate", sub: "No hidden charges" },
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

      {/* Areas We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Areas We Cover in Islamabad
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Our jump start technicians know Islamabad&apos;s grid layout inside out. We cover every sector,
            major highway, and housing society.
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
            When You Need a Jump Start in Islamabad
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Dead Battery Outside NUST",
                desc: "Your car won't start after classes or a meeting on the NUST campus in H-12. Our technician reaches you in the car park and jump-starts your vehicle on the spot. No towing needed.",
              },
              {
                title: "Stranded on Margalla Road After Dark",
                desc: "Your car dies on the quiet stretch near the Margalla Hills. No streetlights, no nearby workshop. We treat these calls as priority and dispatch the nearest available technician immediately.",
              },
              {
                title: "Cold Morning Won't-Start in Margalla Sectors",
                desc: "Islamabad's winter mornings near the hills (E-7, F-6, F-7) are cold enough to drain a weak battery overnight. If your engine cranks slowly or not at all, call us before your commute is delayed further.",
              },
              {
                title: "Lights Left On at a Mall or Restaurant",
                desc: "Easy to do at Centaurus or Giga Mall, or the many restaurants along Srinagar Highway. We meet you in the parking area, jump-start your car, and check if the battery is still healthy.",
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
            Islamabad Jump Start FAQs
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
            We also provide 24/7 jump start service in these cities.
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
              { label: "Islamabad Area Page", href: "/areas/roadside-recovery-service-in-islamabad" },
              { label: "Tyre Change", href: "/services/tire-change" },
              { label: "Lockout Help", href: "/services/lockout-help" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Jump Start in Islamabad?</h2>
          <p className="text-gray-400 mb-8">
            Our dispatch team covers every Islamabad sector 24/7. One call and a technician is on the way.
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
