import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "24/7 Car Recovery & Roadside Assistance in Islamabad & Rawalpindi",
    description:
      "Fast jump start, tyre change, air refill, and car recovery in Islamabad & Rawalpindi. Available 24/7 — call 0326 9751717 for immediate emergency roadside assistance.",
    url: "https://roadrecoveryservice.com",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Recovery & Roadside Assistance in Islamabad & Rawalpindi",
    description:
      "Fast jump start, tyre change, air refill, and car recovery in Islamabad & Rawalpindi. Available 24/7 — call 0326 9751717 for immediate emergency roadside assistance.",
    images: ["/logo.png"],
  },
};
import FindMeButton from "@/components/FindMeButton";
import {
  Phone,
  Clock,
  Shield,
  Star,
  Truck,
  ChevronRight,
  Car,
  Zap,
  Fuel,
  CircleDot,
  Wind,
  Anchor,
  Lock,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    icon: AlertTriangle,
    title: "Accident Recovery & Towing",
    desc: "Fast, careful vehicle recovery after collisions. We work with all insurance providers.",
    href: "/services/accident-towing",
  },
  {
    icon: Truck,
    title: "Flatbed Recovery & Towing",
    desc: "Safe flatbed transport for luxury, AWD, and low-clearance vehicles.",
    href: "/services/flatbed-towing",
  },
  {
    icon: Lock,
    title: "Car Lockout Help",
    desc: "Locked out? Our technicians get you back in your vehicle fast.",
    href: "/services/lockout-help",
  },
  {
    icon: Zap,
    title: "Car Jump Start",
    desc: "Dead battery? We come to you and get your car started — day or night.",
    href: "/services/jumpstart",
  },
  {
    icon: Fuel,
    title: "Emergency Fuel Delivery",
    desc: "Run out of petrol? We deliver fuel directly to your location.",
    href: "/services/fuel-delivery",
  },
  {
    icon: CircleDot,
    title: "Tyre Change",
    desc: "Flat tyre? We fit your spare and have you rolling again safely.",
    href: "/services/tire-change",
  },
  {
    icon: Anchor,
    title: "Vehicle Recovery & Winch-Out",
    desc: "Stuck in mud or a ditch? Our recovery team gets you out safely.",
    href: "/services/winch-out",
  },
  {
    icon: Car,
    title: "All Vehicles Welcome",
    desc: "Cars, trucks, SUVs, motorcycles — we handle them all with care.",
    href: "/services",
  },
];

const stats = [
  { value: "24/7", label: "Always Available" },
  { value: "30 min", label: "Average Response" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "100%", label: "Licensed & Insured" },
];

const testimonials = [
  {
    name: "Bilal Ahmed, Saddar",
    text: "My car broke down on Murree Road late at night and they reached me within 25 minutes. Very professional and reasonable. Highly recommended.",
    stars: 5,
  },
  {
    name: "Ayesha Khan, Bahria Town",
    text: "I was locked out of my car in Bahria Town and called them in a panic. The driver was polite, quick, and sorted it out without any damage. Excellent service.",
    stars: 5,
  },
  {
    name: "Usman Tariq, DHA",
    text: "Got stuck after my battery died in DHA. They arrived fast, jump-started my car, and gave honest advice. Will definitely call them again.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1597766321604-9de3ff9e93e2?w=1400&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Clock className="h-4 w-4" />
              Available 24 Hours · 7 Days a Week
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              24/7 Car Recovery &amp; Roadside Assistance in{" "}
              <span className="text-red-500">Islamabad &amp; Rawalpindi</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              Fast jump start, tyre change, air refill, car recovery and towing — anywhere in
              Islamabad &amp; Rawalpindi. One call and we&apos;re on our way.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <a
                href="tel:+923269751717"
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl px-10 py-5 rounded-xl transition-colors shadow-xl ring-4 ring-red-500/30"
              >
                <Phone className="h-6 w-6" />
                Call 0326 9751717
              </a>
              <FindMeButton variant="hero" />
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                View All Services
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Callout */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-full p-2.5 shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <p className="text-white text-sm sm:text-base font-medium leading-snug">
                Stranded in <span className="font-extrabold">Bahria Town</span> or{" "}
                <span className="font-extrabold">DHA</span>?{" "}
                Our team reaches you in just{" "}
                <span className="font-extrabold text-yellow-300">10 minutes</span>.
              </p>
            </div>
            <a
              href="tel:+923269751717"
              className="shrink-0 bg-white text-red-600 font-extrabold text-sm px-5 py-2.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now — 0326 9751717
            </a>
          </div>
        </div>
      </div>

      {/* Core 3 Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Our Core Roadside Services
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Fast, affordable help right at your location — no tow needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                name: "Jump Start",
                price: "2,000",
                desc: "Dead battery? We come to you and jump-start your car on the spot — fast, safe, and available 24/7 across Islamabad and Rawalpindi.",
              },
              {
                icon: CircleDot,
                name: "Tyre Change",
                price: "2,000",
                desc: "Flat tyre? We mount your spare on the roadside so you can get back on your way safely, without waiting for a workshop.",
              },
              {
                icon: Wind,
                name: "Tyre Air Refill",
                price: "1,500",
                desc: "Low tyre pressure? We fill all four tyres to the correct pressure at your location — no need to find a petrol station.",
              },
            ].map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.name}
                  className="bg-gray-900 rounded-2xl overflow-hidden flex flex-col shadow-lg"
                >
                  <div className="p-7 flex-1">
                    <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-red-400 text-sm font-semibold">from Rs.</span>
                      <span className="text-white font-extrabold text-3xl">{svc.price}</span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl mb-3">{svc.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="px-7 pb-7">
                    <a
                      href="tel:+923269751717"
                      className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now — 0326 9751717
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <div className="text-sm text-red-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Also Available: Car Recovery &amp; Towing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core roadside services, we offer full car recovery and towing for accidents,
              breakdowns, lockouts, fuel delivery, and more — 24/7 across Islamabad and Rawalpindi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-red-200 transition-all group"
                >
                  <div className="bg-red-50 group-hover:bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                  <div className="mt-4 text-red-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Why Drivers Trust 24/7 Recovery and Roadside Assistance
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    title: "True 24/7 Availability",
                    desc: "We answer the phone at 2am on holidays. No voicemail, no waiting — a real person picks up.",
                  },
                  {
                    icon: Shield,
                    title: "Fully Licensed & Insured",
                    desc: "Every driver is trained, certified, and covered. Your vehicle is in safe hands from pickup to drop-off.",
                  },
                  {
                    icon: Truck,
                    title: "Modern Fleet",
                    desc: "Our well-maintained tow trucks and flatbeds are equipped to handle every type of vehicle safely.",
                  },
                  {
                    icon: Star,
                    title: "Transparent Pricing",
                    desc: "No hidden fees. We give you an upfront price before we start — so there are never any surprises.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
                alt="Professional tow truck on the road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900 bg-opacity-80 rounded-lg p-4 text-white">
                <div className="font-bold">Emergency? Don&apos;t wait.</div>
                <a
                  href="tel:+923269751717"
                  className="text-red-400 font-bold text-lg hover:text-red-300 transition-colors"
                >
                  0326 9751717
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">Real stories from drivers we&apos;ve helped.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="font-bold text-gray-900 text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Stranded in Islamabad or Rawalpindi? We&apos;ll Be There Fast.
          </h2>
          <p className="text-red-100 text-lg mb-8">
            One call gets you professional roadside assistance or car recovery dispatched to your
            location — any time, any day.
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
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
