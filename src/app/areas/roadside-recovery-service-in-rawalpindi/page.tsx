import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "24/7 roadside assistance & recovery service in rawalpindi" },
  description:
    "Fast roadside recovery service in Rawalpindi. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
  alternates: { canonical: "/areas/roadside-recovery-service-in-rawalpindi" },
  openGraph: {
    title: "24/7 roadside assistance & recovery service in rawalpindi",
    description:
      "Fast roadside recovery service in Rawalpindi. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
    url: "https://roadrecoveryservice.com/areas/roadside-recovery-service-in-rawalpindi",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 roadside assistance & recovery service in rawalpindi",
    description:
      "Fast roadside recovery service in Rawalpindi. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
    images: ["/logo.png"],
  },
};

const neighbourhoods = [
  { name: "DHA Phase 1", highlight: true },
  { name: "DHA Phase 2", highlight: true },
  { name: "Bahria Town Phase 1" },
  { name: "Bahria Town Phase 2" },
  { name: "Bahria Town Phase 3" },
  { name: "Bahria Town Phase 4" },
  { name: "Bahria Town Phase 5" },
  { name: "Bahria Town Phase 6" },
  { name: "Bahria Town Phase 7" },
  { name: "Bahria Town Phase 8" },
  { name: "Gulberg Greens" },
  { name: "Gulberg Residencia" },
  { name: "Askari 10" },
  { name: "Askari 13" },
  { name: "Askari 14" },
  { name: "Saddar" },
  { name: "Chaklala Scheme 3" },
];

const services = [
  {
    name: "Car Jump Start",
    href: "/services/jumpstart",
    detail:
      "Dead battery in DHA, Bahria Town, or stalled on Murree Road? We bring commercial-grade jump-start equipment straight to you.",
  },
  {
    name: "Tyre Change",
    href: "/services/tire-change",
    detail:
      "Flat tyre on GT Road, 6th Road, or inside a Rawalpindi housing scheme? We mount your spare on-site, wherever you are.",
  },
  {
    name: "Tyre Air Refill",
    href: "/services/tyre-air-refill",
    detail:
      "Low tyre pressure? Our mobile compressor service visits your driveway or the roadside — no need to find a petrol station.",
  },
  {
    name: "Car Recovery & Towing",
    href: "/services/flatbed-towing",
    detail:
      "Flatbed and wheel-lift recovery covering Rawalpindi's dense road network, from Saddar's narrow lanes to Bahria Town's wide avenues.",
  },
  {
    name: "Fuel Delivery",
    href: "/services/fuel-delivery",
    detail:
      "Run out of petrol or diesel between Chaklala and Murree Road? We deliver fuel directly so you don't have to abandon your vehicle.",
  },
  {
    name: "Lockout Help",
    href: "/services/lockout-help",
    detail:
      "Keys locked inside in Askari 10, Gulberg, or Saddar? Our non-destructive entry service reaches you fast across Rawalpindi.",
  },
  {
    name: "Winch-Out & Recovery",
    href: "/services/winch-out",
    detail:
      "Stuck off-road near Bahria Town's perimeter or in soft ground around Chaklala? Our winch team extracts all vehicle types safely.",
  },
];

const roads = [
  {
    road: "Murree Road",
    desc: "Rawalpindi's main artery from Saddar through Westridge and onward toward Islamabad. We cover its full length including side streets and service lanes.",
  },
  {
    road: "GT Road / N-5",
    desc: "The Grand Trunk Road passing through Rawalpindi's industrial and commercial zones toward Lahore. Breakdowns here get priority dispatch.",
  },
  {
    road: "6th Road & Chaklala",
    desc: "The 6th Road corridor and Chaklala Scheme 3 — a dense residential and cantonment-adjacent area with strong demand for our services.",
  },
  {
    road: "Saddar",
    desc: "Rawalpindi's historic commercial heart. Narrow lanes and heavy traffic mean breakdowns can block traffic fast — we respond quickly to Saddar calls.",
  },
  {
    road: "Bahria Town Phases 1–8",
    desc: "All eight phases of Bahria Town, from the older Phase 1 near the Rawalpindi boundary to the newer outer phases on the city's edge.",
  },
  {
    road: "DHA & Askari Cantonments",
    desc: "DHA Phases 1 and 2, Askari 10, Askari 13, and Askari 14 — we are experienced with cantonment-area protocols and access procedures.",
  },
];

export default function RawalpindiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-5">
            <Link href="/areas" className="hover:text-red-300 transition-colors">
              Areas We Serve
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Rawalpindi</span>
          </div>
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Rawalpindi Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              24/7 Roadside Assistance &amp; Recovery Service in Rawalpindi
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From DHA and Bahria Town to Saddar and the Askari colonies — we cover Rawalpindi's
              neighbourhoods around the clock. Call once and a team is on its way.
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
                Neighbourhood-by-Neighbourhood Coverage Across Rawalpindi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Rawalpindi is one of Pakistan's oldest and most densely populated cities, with a
                road network that ranges from the wide avenues of modern housing schemes to the
                tightly packed lanes of Saddar and Raja Bazaar. Navigating this city quickly
                requires genuine local knowledge — not just a map. Our team operates daily across
                Rawalpindi and knows which route to take when Murree Road is congested and how to
                reach the outer phases of Bahria Town efficiently.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We give particular priority to cantonment-area calls in DHA, Askari 10, Askari 13,
                and Askari 14, where vehicle access protocols matter. We're familiar with these
                procedures and dispatch the appropriate team with the necessary documentation
                arrangements in mind. For Bahria Town, our coverage extends across all eight phases,
                including the newer outer phases that many services decline to reach.
              </p>
              <Link
                href="/areas/roadside-recovery-service-in-islamabad"
                className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Also serving Islamabad →
              </Link>
            </div>

            {/* Neighbourhood list */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
                Neighbourhoods We Cover
              </p>
              <div className="grid grid-cols-2 gap-2">
                {neighbourhoods.map((n) => (
                  <div
                    key={n.name}
                    className={`flex items-center gap-2 p-2.5 rounded-lg text-sm font-medium ${
                      n.highlight
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    <MapPin
                      className={`h-3.5 w-3.5 shrink-0 ${
                        n.highlight ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    <span className="leading-tight">{n.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 col-span-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />
                  <span>+ surrounding Rawalpindi areas — call to confirm</span>
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
            Services Available Across Rawalpindi
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

      {/* Roads */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Where We Operate in Rawalpindi
          </h2>
          <p className="text-gray-500 mb-10">
            Key roads and areas where we respond daily — from main arteries to back lanes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roads.map((r) => (
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
              <Clock className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">~30 Min Response</div>
              <div className="text-red-200 text-sm">Across Rawalpindi</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">All Major Areas</div>
              <div className="text-red-200 text-sm">DHA · Bahria · Askari · Saddar</div>
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
                Accident Recovery on Rawalpindi's Busy Roads
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Murree Road and GT Road carry heavy traffic throughout the day and into the night.
                When an accident or breakdown blocks a lane, seconds matter. Our{" "}
                <Link href="/services/accident-towing" className="text-red-600 hover:underline font-medium">
                  accident towing team
                </Link>{" "}
                is equipped for rapid extraction in Rawalpindi's congested corridors, with
                wheel-lift and flatbed options to suit any situation. We coordinate with drivers and
                where possible, clear the vehicle from the carriageway as fast as safely possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For vehicles that cannot roll — AWD, 4WD, or those with serious front or rear
                damage — our{" "}
                <Link href="/services/flatbed-towing" className="text-red-600 hover:underline font-medium">
                  flatbed car recovery
                </Link>{" "}
                service protects the vehicle during transport with all four wheels completely off
                the ground. We work with major insurers and can assist with documentation on-site.
              </p>
              <ul className="space-y-2">
                {[
                  "Rapid response on Murree Road and GT Road",
                  "Wheel-lift and flatbed options available",
                  "Works with major Pakistani insurers",
                  "Coverage into all Rawalpindi neighbourhoods",
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
              <p className="text-2xl font-extrabold mb-2">Broken down in Rawalpindi?</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tell us your location and we&apos;ll route the nearest available team. Coverage
                includes DHA, Bahria Town (all phases), Askari, Gulberg, Saddar, Chaklala and more.
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

      {/* Twin city link */}
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
            Stuck Somewhere in Rawalpindi?
          </h2>
          <p className="text-red-100 mb-8">
            One call connects you to our 24/7 dispatch team. We&apos;ll send help to your exact
            location — DHA, Bahria Town, Saddar, Askari, Gulberg, or anywhere else in Rawalpindi.
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
