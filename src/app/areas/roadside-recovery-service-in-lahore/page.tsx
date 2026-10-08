import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "24/7 Roadside Assistance & Car Recovery Service in Lahore" },
  description:
    "Fast 24/7 roadside recovery in Lahore. Jump start, tyre change, air refill, fuel delivery, winch out, lockout help & car towing across DHA, Bahria Town, Johar Town & the Ring Road.",
  alternates: { canonical: "/areas/roadside-recovery-service-in-lahore" },
  openGraph: {
    title: "24/7 Roadside Assistance & Car Recovery Service in Lahore",
    description:
      "Fast 24/7 roadside recovery in Lahore. Jump start, tyre change, air refill, fuel delivery, winch out, lockout help & car towing across DHA, Bahria Town, Johar Town & the Ring Road.",
    url: "https://roadrecoveryservice.com/areas/roadside-recovery-service-in-lahore",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Roadside Assistance & Car Recovery Service in Lahore",
    description:
      "Fast 24/7 roadside recovery in Lahore. Jump start, tyre change, air refill, fuel delivery, winch out, lockout help & car towing across DHA, Bahria Town, Johar Town & the Ring Road.",
    images: ["/logo.png"],
  },
};

const localities = [
  { name: "DHA Phase 1–8", highlight: true },
  { name: "Bahria Town Lahore", highlight: true },
  { name: "Bahria Orchard" },
  { name: "Johar Town" },
  { name: "Model Town" },
  { name: "Valencia Town" },
  { name: "Wapda Town" },
  { name: "Township" },
  { name: "Kot Lakhpat" },
  { name: "Thokar Niaz Baig" },
  { name: "LDA Avenue" },
  { name: "Lake City" },
  { name: "DHA Rahbar" },
  { name: "Allama Iqbal Town" },
  { name: "Sabzazar" },
  { name: "Lahore Cantt" },
  { name: "Walled City (Androon Lahore)" },
];

const services = [
  {
    name: "Car Jump Start",
    href: "/services/jumpstart",
    detail: "Dead battery in DHA, Johar Town, or stuck on the Ring Road? We bring commercial-grade jump-start equipment straight to you.",
  },
  {
    name: "Tyre Change",
    href: "/services/tire-change",
    detail: "Flat tyre on Ferozepur Road, Multan Road, or inside a housing scheme? We mount your spare on-site, wherever you are in Lahore.",
  },
  {
    name: "Tyre Air Refill",
    href: "/services/tyre-air-refill",
    detail: "Low tyre pressure on Canal Road or in Model Town? Our mobile compressor service visits your exact location — no petrol station needed.",
  },
  {
    name: "Car Recovery & Towing",
    href: "/services/flatbed-towing",
    detail: "Flatbed and wheel-lift recovery covering everything from the Walled City's narrow lanes to the wide avenues of Valencia and DHA.",
  },
  {
    name: "Fuel Delivery",
    href: "/services/fuel-delivery",
    detail: "Run dry on Raiwind Road or between motorway interchanges? We deliver petrol or diesel directly so you're never stranded.",
  },
  {
    name: "Lockout Help",
    href: "/services/lockout-help",
    detail: "Keys locked inside in Wapda Town, Sabzazar, or Allama Iqbal Town? Our non-destructive lockout service reaches you fast.",
  },
  {
    name: "Winch-Out & Recovery",
    href: "/services/winch-out",
    detail: "Stuck off-road near Lake City or DHA Rahbar's newer sectors? Our winch team extracts all vehicle types safely.",
  },
];

const corridors = [
  {
    road: "Lahore Ring Road",
    desc: "Our primary artery for city-wide dispatch. We cover every interchange and service road along the Ring Road, from Harbanspura to Thokar Niaz Baig.",
  },
  {
    road: "Ferozepur Road",
    desc: "One of Lahore's busiest corridors, running from the inner city out past Kalma Chowk toward DHA and the southern suburbs.",
  },
  {
    road: "Canal Road",
    desc: "The green spine of the city, linking Mall Road through Model Town, Township, and Wapda Town — heavy traffic means fast response matters here.",
  },
  {
    road: "Multan Road & Raiwind Road",
    desc: "Southwestern corridors serving Kot Lakhpat's industrial zone and the route toward Thokar Niaz Baig and DHA Rahbar.",
  },
  {
    road: "GT Road & Airport Road",
    desc: "Northern and eastern approaches into the city, including routes serving Lahore Cantt and Allama Iqbal International Airport.",
  },
  {
    road: "Motorway Links (M-2, M-3, M-11)",
    desc: "We dispatch to breakdowns right at the motorway interchanges feeding into Lahore from Islamabad, Faisalabad, and Sialkot.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://roadrecoveryservice.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Areas We Serve",
      item: "https://roadrecoveryservice.com/areas",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lahore",
      item: "https://roadrecoveryservice.com/areas/roadside-recovery-service-in-lahore",
    },
  ],
};

export default function LahorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-5">
            <Link href="/areas" className="hover:text-red-300 transition-colors">
              Areas We Serve
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Lahore</span>
          </div>
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Lahore Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              24/7 Roadside Recovery Service in Lahore
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From the Walled City to DHA Phase 8 — we cover the whole of Lahore, especially the
              Ring Road corridor, 24 hours a day. Call once and a team is on its way.
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
                Full-City Coverage Across Lahore, Inside and Outside the Ring Road
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lahore is Pakistan's cultural capital and one of its largest, busiest cities — a
                sprawling mix of old and new that's far bigger than Islamabad and Rawalpindi
                combined. The Lahore Ring Road almost fully encircles the city, tying together the
                historic core — the Walled City, Lahore Cantt, and the areas around Mall Road —
                with newer developments like DHA, Bahria Town, Bahria Orchard, and Lake City on the
                outskirts. Whether you're just inside the Ring Road or out past it, our dispatch
                team routes the nearest available technician to you without delay.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From the tight, centuries-old lanes of the Walled City to the wide boulevards of
                Valencia and DHA Phase 8, driving conditions change dramatically from one part of
                Lahore to another. Our technicians know the difference between a call from Thokar
                Niaz Baig and one from Johar Town, and dispatch accordingly — with the right
                vehicle, the right equipment, and a realistic ETA every time.
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
                        l.highlight ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    <span className="leading-tight">{l.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 col-span-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />
                  <span>+ surrounding Lahore areas — call to confirm</span>
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
            Services Available Across Lahore
          </h2>
          <p className="text-gray-500 mb-10">
            All services dispatched from the closest available team — 24 hours a day, 7 days a week.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Roads & Corridors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Where We Operate in Lahore
          </h2>
          <p className="text-gray-500 mb-10">
            From the Ring Road to the Walled City's back lanes — we cover every route that matters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corridors.map((c) => (
              <div
                key={c.road}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{c.road}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
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
              <Clock className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">~30 Min Response</div>
              <div className="text-red-200 text-sm">Across Lahore</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">All Major Areas</div>
              <div className="text-red-200 text-sm">DHA · Bahria Town · Johar Town · Ring Road</div>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">24/7 Dispatch</div>
              <div className="text-red-200 text-sm">One call, we're on the way</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accident towing + CTA panel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Accident Recovery on Lahore's Ring Road &amp; Major Arteries
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Ring Road, Ferozepur Road, and Multan Road carry heavy traffic throughout the
                day and well into the night. When an accident or breakdown blocks a lane on a
                high-speed corridor, waiting is dangerous. Our{" "}
                <Link href="/services/accident-towing" className="text-red-600 hover:underline font-medium">
                  accident towing team
                </Link>{" "}
                is equipped for rapid extraction across Lahore's busiest roads, with wheel-lift and
                flatbed options to suit any situation, and works with all major insurers operating
                in Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For vehicles that can't be towed on their own wheels — AWD, 4WD, luxury, or
                heavily damaged vehicles — our{" "}
                <Link href="/services/flatbed-towing" className="text-red-600 hover:underline font-medium">
                  flatbed car recovery
                </Link>{" "}
                service loads all four wheels completely off the ground, protecting your vehicle's
                drivetrain whether we're navigating the Ring Road or the narrow lanes near the
                Walled City.
              </p>
              <ul className="space-y-2">
                {[
                  "Rapid response on the Ring Road and major arteries",
                  "Works with all major Pakistani insurers",
                  "Flatbed access for narrow Walled City lanes",
                  "Hazard lighting and traffic management on approach",
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
              <p className="text-2xl font-extrabold mb-2">Broken down in Lahore?</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Call now and our dispatch team will confirm your location, give you an ETA, and keep
                you updated until the technician arrives.
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

      {/* Other branches + contact links */}
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
            Stuck Somewhere in Lahore?
          </h2>
          <p className="text-red-100 mb-8">
            Call us now and we&apos;ll dispatch the nearest available team to your location. No
            waiting on hold — just a fast response from a team that knows Lahore.
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
