import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle, ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "24/7 roadside assistance & recovery service in islamabad" },
  description:
    "Fast roadside recovery service in Islamabad. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
  alternates: { canonical: "/areas/roadside-recovery-service-in-islamabad" },
  openGraph: {
    title: "24/7 roadside assistance & recovery service in islamabad",
    description:
      "Fast roadside recovery service in Islamabad. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
    url: "https://roadrecoveryservice.com/areas/roadside-recovery-service-in-islamabad",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 roadside assistance & recovery service in islamabad",
    description:
      "Fast roadside recovery service in Islamabad. 24/7 towing, jump start, tire change, fuel delivery, winch out, lockout help & car recovery. Call Now 0326 9751717",
    images: ["/logo.png"],
  },
};

const sectors = [
  "F-6 (Supermarket)", "F-7", "F-8 (Centaurus)", "F-10", "F-11",
  "G-5 (Blue Area)", "G-6", "G-7", "G-8", "G-9 Markaz", "G-10", "G-11",
  "H-8", "H-9", "H-11",
  "I-8", "I-9", "I-10", "I-11",
  "E-7", "E-11",
  "D-12", "D-17",
  "B-17",
];

const services = [
  {
    name: "Car Jump Start",
    href: "/services/jumpstart",
    detail: "Dead battery anywhere in Islamabad — we come to you with commercial-grade jump-start equipment.",
  },
  {
    name: "Tyre Change",
    href: "/services/tire-change",
    detail: "Flat tyre on Islamabad Expressway, Kashmir Highway, or inside a housing scheme? We mount your spare on-site.",
  },
  {
    name: "Tyre Air Refill",
    href: "/services/tire-change",
    detail: "Mobile tyre inflation service — we bring a calibrated compressor to your exact location across the capital.",
  },
  {
    name: "Car Recovery & Towing",
    href: "/services/flatbed-towing",
    detail: "Flatbed and wheel-lift recovery for breakdowns, accidents, and non-starters anywhere across Islamabad.",
  },
  {
    name: "Fuel Delivery",
    href: "/services/fuel-delivery",
    detail: "Run dry on Srinagar Highway or in a sector car park? We deliver petrol or diesel directly to you.",
  },
  {
    name: "Lockout Help",
    href: "/services/lockout-help",
    detail: "Keys locked inside? Our non-destructive lockout service reaches every corner of Islamabad.",
  },
  {
    name: "Winch-Out & Recovery",
    href: "/services/winch-out",
    detail: "Stuck in mud, a ditch, or rough terrain near Margalla foothills? Our winch team extracts all vehicle types.",
  },
];

const corridors = [
  {
    road: "Islamabad Expressway",
    desc: "Full coverage along the expressway from the Rawalpindi boundary to the E-11 interchange and beyond.",
  },
  {
    road: "Kashmir Highway",
    desc: "One of Islamabad's major north–south corridors — we operate end-to-end from Faizabad to the northern sectors.",
  },
  {
    road: "Srinagar Highway",
    desc: "From the Rawat interchange through to Islamabad, including all on-ramps and connecting sector roads.",
  },
  {
    road: "Blue Area (Jinnah Avenue)",
    desc: "Islamabad's central business district, G-5 to G-7. Fast response for corporate and government-area breakdowns.",
  },
  {
    road: "Sector Grid Roads",
    desc: "Every numbered sector road from F through I — residential streets, sector markets, and apartment basements.",
  },
  {
    road: "Margalla Road & Park Road",
    desc: "Northern Islamabad including areas bordering Margalla Hills National Park and the CDA park corridor.",
  },
];

export default function IslamabadPage() {
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
            <span>Islamabad</span>
          </div>
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Islamabad Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              24/7 Roadside Assistance &amp; Recovery Service in Islamabad
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We cover the whole of Islamabad — every sector, every expressway, every housing scheme.
              One call and a technician is on the way, day or night.
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
                Full-City Coverage Across All Islamabad Sectors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Islamabad's planned grid makes it one of the most logistically manageable cities in
                Pakistan for a rapid-response service like ours. We know the sector layout — F, G, H,
                I and beyond — and maintain coverage across the entire Capital Territory, from the
                Diplomatic Enclave in the north to the I-series industrial sectors in the south.
                Whether you're stranded in a basement car park in F-8 or broken down on the
                Islamabad Expressway, our dispatch team will route the nearest available technician
                to you without delay.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As a capital city, Islamabad sees everything from early-morning government commuters
                on Jinnah Avenue to late-night traffic near Centaurus and Kohsar Market. Our 24-hour
                service means there's never a time we can't help — and because we operate across both
                Islamabad and Rawalpindi, there's always a team close to your location.
              </p>
              <Link
                href="/areas/roadside-recovery-service-in-rawalpindi"
                className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Also serving Rawalpindi →
              </Link>
            </div>

            {/* Sector list */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
                Areas &amp; Sectors Covered
              </p>
              <div className="grid grid-cols-2 gap-2">
                {sectors.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 text-sm font-medium text-gray-700"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-red-500" />
                    <span className="leading-tight">{s}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50 text-sm font-medium text-red-700 border border-red-200 col-span-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-red-600" />
                  <span>+ all remaining Islamabad sectors &amp; CDA zones</span>
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
            Services Available Across Islamabad
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
            Where We Operate in Islamabad
          </h2>
          <p className="text-gray-500 mb-10">
            From major expressways to inner-sector roads — we cover every route that matters.
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
              <div className="text-red-200 text-sm">Across Islamabad</div>
            </div>
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">All Sectors Covered</div>
              <div className="text-red-200 text-sm">Full Capital Territory</div>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-2 text-red-200" />
              <div className="font-bold text-lg">24/7 Dispatch</div>
              <div className="text-red-200 text-sm">One call, we're on the way</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accident towing + why choose us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Accident Recovery on Islamabad's Expressways
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                High-speed roads like the Islamabad Expressway and Srinagar Highway require
                professional equipment and fast response. When an accident or sudden breakdown
                happens at speed, waiting is dangerous. Our{" "}
                <Link href="/services/accident-towing" className="text-red-600 hover:underline font-medium">
                  accident towing team
                </Link>{" "}
                carries flatbed carriers and safety equipment specifically for expressway incidents,
                and works with all major insurers operating in Pakistan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For vehicles that can't be towed on their own wheels — AWD, 4WD, luxury, or
                heavily damaged vehicles — our{" "}
                <Link href="/services/flatbed-towing" className="text-red-600 hover:underline font-medium">
                  flatbed car recovery
                </Link>{" "}
                service loads all four wheels completely off the ground, protecting your vehicle's
                drivetrain during transport.
              </p>
              <ul className="space-y-2">
                {[
                  "Expressway-capable flatbed carriers",
                  "Works with all major Pakistani insurers",
                  "Safe lane management during roadside recovery",
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
              <p className="text-2xl font-extrabold mb-2">Broken down in Islamabad?</p>
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

      {/* Twin city link + contact links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-gray-500 text-sm">Also need help in:</span>
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
            Stuck Somewhere in Islamabad?
          </h2>
          <p className="text-red-100 mb-8">
            Call us now and we&apos;ll dispatch the nearest available team to your sector. No waiting
            on hold — just a fast response from a team that knows Islamabad.
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
