import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Recovery & Roadside Assistance Across Pakistan" },
  description:
    "24/7 jump start, tyre change, towing & car recovery in Islamabad, Rawalpindi, Lahore & Murree. Call 0326 9751717.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "24/7 Car Recovery & Roadside Assistance Across Pakistan",
    description:
      "24/7 jump start, tyre change, towing & car recovery in Islamabad, Rawalpindi, Lahore & Murree. Call 0326 9751717.",
    url: "https://roadrecoveryservice.com",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Recovery & Roadside Assistance Across Pakistan",
    description:
      "24/7 jump start, tyre change, towing & car recovery in Islamabad, Rawalpindi, Lahore & Murree. Call 0326 9751717.",
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
    desc: "Minor collision outside Centaurus Mall. The other car drove off. You need your car moved before the police arrive. One call.",
    href: "/services/accident-towing",
  },
  {
    icon: Truck,
    title: "Flatbed Recovery & Towing",
    desc: "Your Prado's transmission locked up in I-8. It can't be dragged. We bring a flatbed, load it gently, and deliver it to your mechanic.",
    href: "/services/flatbed-towing",
  },
  {
    icon: Lock,
    title: "Car Lockout Help",
    desc: "School pickup at the mall. You step out, door shuts, keys on the seat. Back inside in 15 minutes, no damage.",
    href: "/services/lockout-help",
  },
  {
    icon: Zap,
    title: "Car Jump Start",
    desc: "Monday morning, school run, your Corolla won't turn over in the driveway. Coffee is getting cold. We're there before the kids are late.",
    href: "/services/jumpstart",
  },
  {
    icon: Fuel,
    title: "Emergency Fuel Delivery",
    desc: "GPS said there was a station 5km ahead. There wasn't. Now you're parked on Lehtrar Road with an empty tank. We bring the fuel to you.",
    href: "/services/fuel-delivery",
  },
  {
    icon: CircleDot,
    title: "Tyre Change",
    desc: "School pickup, Margalla Road, that unmistakable wobble. You pull over. No jack in the boot. We show up, swap the tyre, and you're home before dinner gets cold.",
    href: "/services/tire-change",
  },
  {
    icon: Anchor,
    title: "Vehicle Recovery & Winch-Out",
    desc: "Took a wrong turn near Taxila and your sedan bottomed out in a muddy track. Wheels spinning. We winch you back to solid road.",
    href: "/services/winch-out",
  },
  {
    icon: Car,
    title: "All Vehicles Welcome",
    desc: "Civic, Prado, Bolan, Ravi loader. Doesn't matter what you drive. If it's stuck, broken, or won't move, we'll sort it.",
    href: "/services",
  },
];

const stats = [
  { value: "24/7", label: "Always Available" },
  { value: "Fast", label: "Response Times" },
  { value: "4 Cities", label: "Islamabad · Rawalpindi · Lahore · Murree" },
  { value: "11", label: "Services Offered" },
];

const BASE_URL = "https://roadrecoveryservice.com";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        name: "24/7 Car Recovery & Roadside Assistance Across Pakistan",
        url: BASE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "24/7 fast jump start, tyre change, air refill, winch out, lockout help, fuel delivery and car recovery in Islamabad, Rawalpindi, Lahore, Murree & beyond.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
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
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597766321604-9de3ff9e93e2?w=1400&q=80"
          alt=""
          fill
          sizes="100vw"
          preload
          fetchPriority="high"
          className="object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Clock className="h-4 w-4" />
              Available 24 Hours · 7 Days a Week
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              24/7 Car Recovery &amp; Roadside Assistance{" "}
              <span className="text-red-500">Across Pakistan</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              It&apos;s late. The road is empty. Your car won&apos;t start, or your tyre just blew, or you&apos;re
              watching steam pour from under the bonnet on Kashmir Highway. You don&apos;t need a website right now, you need
              someone picking up the phone. One call to 0326 9751717. That&apos;s all it takes.
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
                Stranded? Our team can reach you in as little as{" "}
                <span className="font-extrabold text-yellow-300">30 minutes</span> on average. Response times vary depending on your location.
              </p>
            </div>
            <a
              href="tel:+923269751717"
              className="shrink-0 bg-white text-red-600 font-extrabold text-sm px-5 py-2.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now: 0326 9751717
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
              Three problems. Three fixes. Right where you&apos;re standing. No tow truck needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                name: "Jump Start",
                price: "1,500",
                href: "/services/jumpstart",
                desc: "You turned the key. Nothing. Maybe the interior light was left on overnight in G-11, maybe the battery finally gave up after three summers. Doesn't matter. We show up, connect, and your engine is running. Done.",
              },
              {
                icon: CircleDot,
                name: "Tyre Change",
                price: "2,500",
                href: "/services/tire-change",
                desc: "That thud-thud-thud sound on GT Road and then the pull to one side. You're on the shoulder with traffic screaming past. We come to you with a jack, mount your spare, torque the bolts, and wave you off.",
              },
              {
                icon: Wind,
                name: "Tyre Air Refill",
                price: "1,500",
                href: "/services/tyre-air-refill",
                desc: "School run in 20 minutes and your front-left looks soft in the driveway. No time to find an air pump. We bring the compressor to you. All four tyres checked and filled before the kids are in the car.",
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
                    <Link href={svc.href} className="block">
                      <h3 className="text-white font-extrabold text-xl mb-3 hover:text-red-400 transition-colors">
                        {svc.name}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="px-7 pb-7">
                    <a
                      href="tel:+923269751717"
                      className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now: 0326 9751717
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
              When the problem is bigger than a quick fix and your car needs to move but it can&apos;t move
              itself. Accident on the Ring Road, engine seized on Murree Road, stuck in a monsoon-flooded
              underpass in F-10. We bring the truck.
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
                Why People Keep Our Number Saved
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    title: "Real Person. First Ring.",
                    desc: "You call at 3am expecting a recording. A real voice answers. Gives you an ETA. Stays on the line until the technician arrives. That's every call, every time.",
                  },
                  {
                    icon: Shield,
                    title: "The Price on the Phone Is the Price You Pay",
                    desc: "Before we start the engine, you know exactly what it costs. Rs. 1,500 for a jump start. Rs. 2,500 for a tyre change. No surprise charges when the technician shows up.",
                  },
                  {
                    icon: Truck,
                    title: "Your Car, Not a Number",
                    desc: "Brand-new Civic needs a flatbed? We use soft straps and wheel nets. Not a scratch. We treat every vehicle like the owner is watching. Because you are.",
                  },
                  {
                    icon: Star,
                    title: "We Show Up When Others Don't",
                    desc: "It's Eid night, raining, 2am. Everyone else's phone is off. Ours isn't. When you need roadside help at the worst possible time, that's exactly when we answer.",
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
                alt="Flatbed tow truck providing 24/7 roadside recovery service"
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

      {/* CTA Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Stranded? We&apos;ll Be There Fast. Across Pakistan.
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Right now, someone in Islamabad is staring at a dead engine. Someone on GT Road is sitting
            with a flat and no jack. Someone in Murree is stalled on a dark hill road with the
            family. One call changes everything.
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
              Get Help Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
