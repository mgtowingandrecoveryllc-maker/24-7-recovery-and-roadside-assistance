import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, ChevronRight, Shield, Mountain } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "24/7 Roadside Assistance in Murree | Mall Road, Bhurban, Patriata, Nathia Gali" },
  description:
    "24/7 mountain car recovery in Murree & Galyat. Mall Road, Bhurban, Patriata, Nathia Gali, Ayubia, Ghora Gali & Expressway. Call 0326 9751717.",
  alternates: { canonical: "/areas/roadside-recovery-service-in-murree" },
  openGraph: {
    title: "24/7 Roadside Assistance in Murree | Mall Road, Bhurban, Patriata, Nathia Gali",
    description:
      "24/7 mountain car recovery in Murree & Galyat. Mall Road, Bhurban, Patriata, Nathia Gali, Ayubia, Ghora Gali & Expressway. Call 0326 9751717.",
    url: "https://roadrecoveryservice.com/areas/roadside-recovery-service-in-murree",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Roadside Assistance in Murree | Mall Road, Bhurban, Patriata, Nathia Gali",
    description:
      "24/7 mountain car recovery in Murree & Galyat. Mall Road, Bhurban, Patriata, Nathia Gali, Ayubia, Ghora Gali & Expressway. Call 0326 9751717.",
    images: ["/logo.png"],
  },
};

const localities = [
  { name: "Mall Road", highlight: true },
  { name: "Kashmir Point" },
  { name: "Pindi Point" },
  { name: "Sunny Bank" },
  { name: "Ghora Gali" },
  { name: "Chitta More" },
  { name: "Satellite Town Murree" },
  { name: "Bagh Shaheedan (Murree Cantt)" },
  { name: "Jhika Gali" },
  { name: "Bhurban" },
  { name: "Patriata (New Murree)" },
  { name: "Ayubia" },
  { name: "Nathia Gali" },
  { name: "Lower Topa" },
  { name: "Chattar" },
];

const services = [
  {
    name: "Car Jump Start",
    href: "/services/jumpstart",
    detail: "Cold mountain mornings drain batteries fast. We carry heavy-duty jump packs rated for high-altitude starts across the Murree hills.",
  },
  {
    name: "Tyre Change",
    href: "/services/tire-change",
    detail: "Sharp gravel, potholes on Cart Road, and worn-out hill tyres — we mount your spare safely on steep shoulders where jacking is tricky.",
  },
  {
    name: "Tyre Air Refill",
    href: "/services/tyre-air-refill",
    detail: "Altitude changes affect tyre pressure. Our mobile compressor reaches you on Mall Road, Bhurban, or anywhere in the Galyat stretch.",
  },
  {
    name: "Car Recovery & Towing",
    href: "/services/flatbed-towing",
    detail: "Mountain recovery requires low-gear winching and flatbed loading on gradients. We tow from Murree down to Islamabad or to your preferred workshop.",
  },
  {
    name: "Fuel Delivery",
    href: "/services/fuel-delivery",
    detail: "Ran out of fuel on the expressway climb or past Bhurban where stations are scarce? We deliver petrol or diesel to your exact location.",
  },
  {
    name: "Lockout Help",
    href: "/services/lockout-help",
    detail: "Locked out at a viewpoint or hotel car park? Our non-destructive lockout service operates across Murree town and surrounding hill areas.",
  },
  {
    name: "Winch-Out & Recovery",
    href: "/services/winch-out",
    detail: "Slid off a wet mountain road or stuck in snow? Our winch team specialises in extracting vehicles from ditches, embankments, and icy surfaces.",
  },
  {
    name: "Accident Towing",
    href: "/services/accident-towing",
    detail: "Hill-road accidents need careful handling on steep terrain. We secure the scene, load safely, and transport to Islamabad or a local workshop.",
  },
];

const routes = [
  {
    road: "Islamabad–Murree Expressway (M-9)",
    desc: "The main artery from the plains to the hills. We cover it end-to-end — from the Islamabad toll plaza through the climb to Murree town.",
  },
  {
    road: "Mall Road, Murree",
    desc: "The heart of Murree's tourist traffic. Narrow, congested, and steep — breakdowns here need quick, careful handling to avoid blocking the road.",
  },
  {
    road: "Kashmir Road",
    desc: "The route toward Muzaffarabad via Kohala. Steep descents and heavy truck traffic make breakdowns common, especially in monsoon and winter.",
  },
  {
    road: "Cart Road",
    desc: "The old winding route between Lower and Upper Murree. Tight hairpin turns and crumbling edges make this a frequent recovery spot.",
  },
  {
    road: "Nathia Gali Road & Galyat",
    desc: "From Murree toward Ayubia and Nathia Gali through dense pine forest. Remote, often foggy — we reach vehicles that break down on this scenic stretch.",
  },
  {
    road: "Allama Iqbal Road",
    desc: "A key connector through Murree town, linking residential areas to the main bazaar. Steep inclines and tight parking cause regular stalling issues.",
  },
];

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/areas/roadside-recovery-service-in-murree`;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      name: "24/7 Roadside Assistance & Recovery Service in Murree",
      url: PAGE_URL,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#business` },
      description:
        "Fast roadside recovery service in Murree. 24/7 towing, jump start, tyre change, fuel delivery, winch out, lockout help & car recovery.",
    },
    {
      "@type": "LocalBusiness",
      parentOrganization: { "@id": `${BASE_URL}/#business` },
      name: "24/7 Recovery and Roadside Assistance — Murree",
      telephone: "+923269751717",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Murree" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${BASE_URL}/areas` },
        { "@type": "ListItem", position: 3, name: "Murree", item: PAGE_URL },
      ],
    },
  ],
};

export default function MurreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-5">
            <Link href="/areas" className="hover:text-red-300 transition-colors">
              Areas We Serve
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Murree</span>
          </div>
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Murree &amp; Hill Region Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              24/7 Roadside Recovery Service in Murree
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              You&apos;re coming down from Nathia Gali. It&apos;s snowing. Your brakes feel wrong and the road is getting steeper. The kids are in the back seat asking why you stopped. There&apos;s no railing, no shoulder, and your phone signal is flickering. Call 0326 9751717 — our mountain recovery team knows every turn on these roads and we&apos;re already closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+923269751717"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now – 0326 9751717
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Book a Tow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Full Coverage Across the Murree Hill Region
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Murree sits at over 2,200 metres and draws millions of visitors each year — families
                escaping the plains heat in summer, tourists chasing snowfall in winter. The roads
                that connect the town to surrounding hill stations are steep, winding, and often
                poorly lit at night. Overheating engines on the climb up, brake fade on the way
                down, flat tyres on gravel shoulders, and vehicles sliding off icy roads in
                December through February are all part of the territory. Our recovery team is
                equipped for every one of these scenarios.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We cover not just Murree town itself but the wider hill region — Bhurban, Patriata
                (New Murree), the Galyat stretch through Ayubia and Nathia Gali, and the connecting
                routes down toward Islamabad. Whether you&apos;re stranded at Kashmir Point after
                dark or stuck on the shoulder of the expressway halfway up the climb, one call
                gets a technician dispatched to your coordinates.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/areas/roadside-recovery-service-in-islamabad"
                  className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Also serving Islamabad →
                </Link>
                <Link
                  href="/areas/roadside-recovery-service-in-rawalpindi"
                  className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Also serving Rawalpindi →
                </Link>
                <Link
                  href="/areas/roadside-recovery-service-in-lahore"
                  className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Also serving Lahore →
                </Link>
              </div>
            </div>

            {/* Locality list */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
                Areas &amp; Localities Covered
              </p>
              <div className="grid grid-cols-2 gap-2">
                {localities.map((l) => (
                  <div
                    key={l.name}
                    className={`flex items-center gap-2 p-2.5 rounded-lg text-sm font-medium ${
                      l.highlight
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    <MapPin
                      className={`h-3.5 w-3.5 shrink-0 ${
                        l.highlight ? "text-red-600" : "text-red-500"
                      }`}
                    />
                    <span className="leading-tight">{l.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50 text-sm font-medium text-red-700 border border-red-200 col-span-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-red-600" />
                  <span>+ surrounding hill villages &amp; tourist stops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Services Available Across Murree &amp; the Hills
          </h2>
          <p className="text-gray-500 mb-10">
            Every service adapted for mountain conditions — steep grades, tight bends, and limited shoulder space.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href + svc.name}
                href={svc.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">
                    {svc.name}
                  </span>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.detail}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              View All Services <ChevronRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              See Pricing <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mountain Roads & Routes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Mountain Roads &amp; Routes We Cover
          </h2>
          <p className="text-gray-500 mb-10">
            From the expressway ascent to remote Galyat forest roads — we know every turn.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((r) => (
              <div
                key={r.road}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{r.road}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <Mountain className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">Mountain-Ready Fleet</div>
              <div className="text-red-200 text-sm">Low-gear winch &amp; flatbed capable</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">Full Hill Region Coverage</div>
              <div className="text-red-200 text-sm">Murree · Bhurban · Galyat</div>
            </div>
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">24/7 Hill Dispatch</div>
              <div className="text-red-200 text-sm">Day, night, snow, or monsoon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us for hill recovery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Why Choose Us for Hill Recovery
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most towing services are built for flat city roads. Murree is a different challenge
                entirely — recovering a vehicle on a 15-degree gradient with a drop on one side
                requires equipment, technique, and experience that only a mountain-ready team can
                provide. Our operators know these roads personally and carry the right gear for
                every scenario: ice-chains in winter, heavy-duty winch lines for embankment
                recoveries, and flatbed carriers that can load safely on steep inclines.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We also handle the long-distance tow down from Murree to Islamabad or Rawalpindi
                when your vehicle needs a workshop that isn&apos;t available in the hills.
                Our{" "}
                <Link href="/services/flatbed-towing" className="text-red-600 hover:underline font-medium">
                  flatbed recovery
                </Link>{" "}
                keeps all four wheels off the ground for safe highway transport, and our{" "}
                <Link href="/services/accident-towing" className="text-red-600 hover:underline font-medium">
                  accident towing
                </Link>{" "}
                team carries safety equipment for securing steep-road incident scenes.
              </p>
              <ul className="space-y-2">
                {[
                  "Heavy-duty winch for embankment and ditch extraction",
                  "Flatbed loading on steep mountain grades",
                  "Snow and ice recovery in winter months",
                  "Long-distance tow down to Islamabad workshops",
                  "Night recovery on unlit mountain roads",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-red-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
                Emergency Line — Open 24/7
              </p>
              <p className="text-2xl font-extrabold mb-2">Stuck on a mountain road?</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Call now — tell us the road and nearest landmark, and we&apos;ll dispatch our hill
                recovery team with the right equipment for your situation. Stay in your vehicle
                with hazards on until we arrive.
              </p>
              <a
                href="tel:+923269751717"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full justify-center"
              >
                <Phone className="h-5 w-5" />
                0326 9751717
              </a>
              <p className="text-gray-500 text-xs mt-4 text-center">
                Towing · Jump Start · Tyre Change · Fuel · Lockout · Winch-Out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links + contact */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-gray-500 text-sm">Also need help in:</span>
            <Link
              href="/areas/roadside-recovery-service-in-islamabad"
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              Islamabad Coverage
            </Link>
            <Link
              href="/areas/roadside-recovery-service-in-rawalpindi"
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              Rawalpindi Coverage
            </Link>
            <Link
              href="/areas/roadside-recovery-service-in-lahore"
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              Lahore Coverage
            </Link>
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              All Areas We Serve
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Stranded in the Murree Hills?
          </h2>
          <p className="text-red-100 mb-8">
            Don&apos;t wait on the roadside — call us now and our mountain recovery team will be
            on the way. We handle everything from a flat tyre at Pindi Point to a full
            vehicle extraction on the Nathia Gali road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
