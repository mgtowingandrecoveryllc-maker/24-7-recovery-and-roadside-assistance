import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/jumpstart-in-lahore`;

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Jump Start Service in Lahore | Fast Battery Recovery" },
  description:
    "Car battery dead in Lahore? Our 24/7 jump start team covers DHA, Bahria Town, Johar Town, Ring Road & more. Call 0326 9751717.",
  alternates: { canonical: "/services/jumpstart-in-lahore" },
  openGraph: {
    title: "24/7 Car Jump Start Service in Lahore | Fast Battery Recovery",
    description:
      "Car battery dead in Lahore? Our 24/7 jump start team covers DHA, Bahria Town, Johar Town, Ring Road & more. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", alt: "Jump start service in Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Jump Start Service in Lahore | Fast Battery Recovery",
    description:
      "Car battery dead in Lahore? Our 24/7 jump start team covers DHA, Bahria Town, Johar Town, Ring Road & more. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80"],
  },
};

const areas = [
  "DHA Phase 1–8 & DHA EME",
  "Bahria Town Lahore & Bahria Orchard",
  "Johar Town (Block A–R)",
  "Model Town & Model Town Extension",
  "Valencia Town & Wapda Town",
  "Gulberg, Liberty & MM Alam Road",
  "Ring Road (entire stretch)",
  "Ferozepur Road & Canal Road corridor",
  "Multan Road & Thokar Niaz Baig",
  "Defence Road, Raiwind Road & Bedian Road",
];

const faqItems = [
  {
    q: "How fast can you reach me in Lahore?",
    a: "Our average response time across Lahore is 30 minutes. Response times vary depending on your location and traffic conditions. Late-night calls generally have quicker response times.",
  },
  {
    q: "My car won't start in DHA Phase 5 commercial area. Can you enter?",
    a: "Yes. We regularly service vehicles inside all DHA phases. Let the gate security know a roadside assistance vehicle is expected, and share any specific gate or block details when you call our dispatcher.",
  },
  {
    q: "It's monsoon season and my battery died after being parked in standing water. Is a jump start safe?",
    a: "If the water level was below the battery terminals and the engine bay is not submerged, a jump start is usually safe. Our technician inspects the situation on arrival and advises if towing to a workshop would be the safer option.",
  },
  {
    q: "How much does a jump start cost in Lahore?",
    a: "Rs. 1,500 flat rate for a jump start anywhere in Lahore — DHA, Bahria Town, Johar Town, Ring Road, or any other location. No distance surcharge.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/jumpstart-in-islamabad" },
  { city: "Rawalpindi", href: "/services/jumpstart-in-rawalpindi" },
  { city: "Murree", href: "/services/jumpstart-in-murree" },
];

export default function JumpstartLahorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Car Jump Start Service in Lahore",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "Professional 24/7 jump start service covering DHA, Bahria Town, Johar Town, Ring Road, and all Lahore areas.",
      },
      {
        "@type": "Service",
        name: "Car Jump Start Service in Lahore",
        description:
          "24/7 mobile jump start service for cars, SUVs, trucks and diesel vehicles across Lahore. Flat rate Rs. 1,500.",
        serviceType: "Car Jump Start",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Lahore" },
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
          { "@type": "ListItem", position: 4, name: "Lahore", item: PAGE_URL },
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
            <span>Lahore</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Zap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Car Jump Start Service in Lahore
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Battery dead in Lahore? Whether you&apos;re stuck on Ring Road, parked in DHA Phase 5, or
            stranded after a late night in Gulberg — we bring the power to you.
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
                Why Lahore Is Tough on Car Batteries
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lahore&apos;s summers push past 48 °C — among the hottest in Pakistan. That extreme heat
                cooks battery fluid and corrodes terminals faster than any other factor. Winter fog
                season means headlights and defoggers run overtime, adding extra drain. And
                Lahore&apos;s notorious power load-shedding means parked vehicles sit for long stretches
                without the alternator topping up the battery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Lahore team handles jump starts across the city&apos;s sprawl — from the dense
                commercial streets around Liberty and MM Alam Road to the wide avenues of DHA and the
                outer reaches of Bahria Town Lahore on Raiwind Road. We carry dual jump-start units:
                a compact lithium pack for smaller cars and a heavy-duty unit for diesels, pickups,
                and commercial vehicles commonly found along Multan Road and the GT Road industrial belt.
              </p>
              <ul className="space-y-3">
                {[
                  "Dual jump-start units — lithium pack + heavy-duty for diesels",
                  "Trained for Lahore's extreme heat and monsoon conditions",
                  "Free battery terminal cleaning and health check included",
                  "Flat rate Rs. 1,500 — no distance surcharge within Lahore",
                  "Available 24/7, 365 days including Eid and public holidays",
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
                alt="Technician jump-starting a car battery in Lahore"
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
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Lahore's main areas" },
              { icon: Shield, label: "Rs. 1,500 Flat Rate", sub: "No hidden charges" },
              { icon: Phone, label: "24/7 Dispatch", sub: "Including Eid & public holidays" },
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
            Areas We Cover in Lahore
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            From Thokar Niaz Baig in the west to DHA Phase 8 in the south, our technicians cover all
            of Lahore and its surrounding housing societies.
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
            Common Jump Start Scenarios in Lahore
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Breakdown on Lahore Ring Road",
                desc: "Ring Road is fast-moving and pulling over safely matters. If your car dies here, coast to the nearest shoulder or service road, activate hazards, and call us. We dispatch from the closest point and reach Ring Road locations quickly.",
              },
              {
                title: "Dead Battery in DHA Commercial Area",
                desc: "DHA Phase 5 Y-Block commercial, Phase 6 CCA, or Phase 8 Broadway — these busy commercial zones mean crowded parking and no nearby mechanic after hours. We drive straight to your parking spot, jump-start, and you're back on the road.",
              },
              {
                title: "Car Won't Start After Load-Shedding",
                desc: "Extended load-shedding means accessories like alarms and tracking devices slowly drain the battery while the car sits idle in Johar Town, Valencia, or Wapda Town. A common call for us — we arrive, jump-start, and check whether a full charge cycle will recover the battery.",
              },
              {
                title: "Monsoon Morning No-Start",
                desc: "Lahore's monsoon humidity corrodes battery terminals overnight. If your car cranks weakly or clicks in Model Town or Gulberg after a heavy rain, the terminals may need cleaning along with a jump. Our tech handles both on the spot.",
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
            Lahore Jump Start FAQs
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
              { label: "Lahore Area Page", href: "/areas/roadside-recovery-service-in-lahore" },
              { label: "Accident Towing", href: "/services/accident-towing" },
              { label: "Tyre Change", href: "/services/tire-change" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Jump Start in Lahore?</h2>
          <p className="text-gray-400 mb-8">
            From DHA to Johar Town, Ring Road to Bahria Town — our Lahore dispatch is ready 24/7.
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
