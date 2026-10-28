import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/jumpstart-in-rawalpindi`;

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Jump Start Service in Rawalpindi | Fast Battery Recovery" },
  description:
    "Dead battery in Rawalpindi? 24/7 jump start service in DHA, Bahria Town, Saddar, Askari & Chaklala. Fast response. Call 0326 9751717.",
  alternates: { canonical: "/services/jumpstart-in-rawalpindi" },
  openGraph: {
    title: "24/7 Car Jump Start Service in Rawalpindi | Fast Battery Recovery",
    description:
      "Dead battery in Rawalpindi? 24/7 jump start service in DHA, Bahria Town, Saddar, Askari & Chaklala. Fast response. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", alt: "Jump start service in Rawalpindi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Jump Start Service in Rawalpindi | Fast Battery Recovery",
    description:
      "Dead battery in Rawalpindi? 24/7 jump start service in DHA, Bahria Town, Saddar, Askari & Chaklala. Fast response. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80"],
  },
};

const areas = [
  "DHA Phase 1 and 2",
  "Bahria Town Phase 1 to 8",
  "Saddar & Committee Chowk",
  "Askari 10, Askari 13, Askari 14",
  "Chaklala Scheme 3 & Chaklala Cantonment",
  "Murree Road & GT Road corridor",
  "Satellite Town & Westridge",
  "Adiala Road & Tench Bhatta",
  "Rawalpindi Cantt & Mall Road",
];

const faqItems = [
  {
    q: "How quickly can you reach Bahria Town Rawalpindi?",
    a: "Our average response time across Rawalpindi is 30 minutes. Response times vary depending on your location and traffic conditions. Late at night the roads are clearer.",
  },
  {
    q: "Can you come into a gated society like DHA or Askari?",
    a: "Yes. We service vehicles inside DHA, Askari, and Bahria Town. Just inform the gate guard that a roadside assistance vehicle is arriving, or meet us at the nearest gate if access is restricted.",
  },
  {
    q: "My car died in heavy Saddar traffic. What should I do?",
    a: "Turn on your hazard lights and try to steer to the nearest safe spot, like a side street or parking area. Call us at 0326 9751717 immediately. In congested areas like Saddar and Committee Chowk, we send a motorcycle-equipped scout if needed to reach you faster.",
  },
  {
    q: "What's the cost for a jump start in Rawalpindi?",
    a: "Rs. 1,500 flat rate across all of Rawalpindi. Cantonment, Bahria Town or GT Road, same price. No hidden charges.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/jumpstart-in-islamabad" },
  { city: "Lahore", href: "/services/jumpstart-in-lahore" },
  { city: "Murree", href: "/services/jumpstart-in-murree" },
];

export default function JumpstartRawalpindiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Jump Start Service in Rawalpindi",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "Professional 24/7 jump start service covering DHA, Bahria Town, Saddar, Askari, and all Rawalpindi areas.",
      },
      {
        "@type": "Service",
        name: "Car Jump Start Service in Rawalpindi",
        description:
          "24/7 mobile jump start service for cars, SUVs, trucks and diesel vehicles across Rawalpindi. Flat rate Rs. 1,500.",
        serviceType: "Car Jump Start",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Rawalpindi" },
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
          { "@type": "ListItem", position: 4, name: "Rawalpindi", item: PAGE_URL },
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
            <span>Rawalpindi</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Jump Start Service in Rawalpindi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Askari 14, 6am. You&apos;re about to leave for an early flight. Overnight cold drained the battery. The car won&apos;t even click. No workshop is open at this hour and you can&apos;t miss the gate. Call 0326 9751717. We cover Rawalpindi at any hour. Our technician will be at your door before the cab you almost booked.
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
                Rawalpindi&apos;s Battery Challenges
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rawalpindi&apos;s dense urban layout means lots of stop-and-go driving: Saddar traffic,
                Murree Road congestion, GT Road commercial vehicles. This constant idling drains
                batteries faster than highway cruising. Add summer heat that pushes past 45 °C in
                Rawalpindi&apos;s lower-lying areas, and batteries age well before their rated lifespan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We handle jump starts across every corner of Rawalpindi: residential societies like
                Askari 14 and Chaklala Scheme 3, commercial zones around Saddar and Committee Chowk,
                and the sprawling housing developments of Bahria Town and DHA where distances between
                gates and homes can catch drivers off guard at night. Our portable jump starters work
                on all vehicle types, from small hatchbacks to diesel-powered SUVs and commercial trucks
                on GT Road.
              </p>
              <ul className="space-y-3">
                {[
                  "Give us your phase and block, and tell the guard a recovery vehicle is coming",
                  "Jump starters for petrol and diesel engines",
                  "Free battery health check after every jump start",
                  "Flat rate Rs. 1,500. Same price across all of Rawalpindi",
                  "Round-the-clock service, including holidays and weekends",
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
                alt="Technician jump-starting a car battery in Rawalpindi"
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
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Rawalpindi & housing societies" },
              { icon: Shield, label: "Rs. 1,500 Flat Rate", sub: "No hidden charges" },
              { icon: Phone, label: "24/7 Dispatch", sub: "Including late nights" },
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
            Areas We Cover in Rawalpindi
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            From the cantonment to the newest Bahria Town phases, our technicians know Rawalpindi&apos;s
            roads and can reach you wherever you&apos;re stuck.
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
            When You Might Need Us in Rawalpindi
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Early Morning Airport Run from Askari 14",
                desc: "5am flight. You load the bags, turn the key, and the engine won't catch. No mechanic is open at this hour and the cab apps show a 20-minute wait. Call us. We reach Askari 14, jump-start the car, and you make the gate on time.",
              },
              {
                title: "Stuck in Saddar Rush-Hour Traffic",
                desc: "Your battery dies at a traffic signal near Saddar or Committee Chowk during peak hours. We send the nearest available technician.",
              },
              {
                title: "Vehicle Won't Start on Murree Road",
                desc: "Murree Road is Rawalpindi's busiest artery. If your car dies here, whether near Faizabad, Marrir Chowk, or the Chandni Chowk flyover, pull to the shoulder, switch on hazards, and call.",
              },
              {
                title: "Dead Battery in Askari or Cantonment",
                desc: "Military housing areas like Askari 10, 13, and 14 have security gates. Let the guard know a roadside assistance vehicle is coming, and share the gate details with our dispatcher so there's no delay.",
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
            Rawalpindi Jump Start FAQs
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
              { label: "Rawalpindi Area Page", href: "/areas/roadside-recovery-service-in-rawalpindi" },
              { label: "Flatbed Towing", href: "/services/flatbed-towing" },
              { label: "Fuel Delivery", href: "/services/fuel-delivery" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Jump Start in Rawalpindi?</h2>
          <p className="text-gray-400 mb-8">
            Our technicians cover all of Rawalpindi 24/7. Saddar, Bahria Town, DHA, and everywhere in between.
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
