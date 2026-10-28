import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  CircleDot,
  Wind,
  Phone,
  CheckCircle,
  Info,
  Truck,
  Anchor,
  Fuel,
  Wrench,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Roadside Assistance Pricing Across Pakistan | No Hidden Fees" },
  description:
    "Transparent pricing for towing, jump start, tyre change & roadside services across Pakistan. No hidden fees. Call 0326 9751717.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Roadside Assistance Pricing Across Pakistan | No Hidden Fees",
    description:
      "Transparent pricing for towing, jump start, tyre change & roadside services across Pakistan. No hidden fees. Call 0326 9751717.",
    url: "https://roadrecoveryservice.com/pricing",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadside Assistance Pricing Across Pakistan | No Hidden Fees",
    description:
      "Transparent pricing for towing, jump start, tyre change & roadside services across Pakistan. No hidden fees. Call 0326 9751717.",
    images: ["/logo.png"],
  },
};

interface PricingService {
  icon: LucideIcon;
  name: string;
  price: string;
  variable: boolean;
  description: string;
  features: string[];
}

const quickServices: PricingService[] = [
  {
    icon: Zap,
    name: "Jump Start",
    price: "1,500",
    variable: false,
    description:
      "You turn the key and nothing happens. We show up with a portable jump starter, connect it, and your engine fires up. Done.",
    features: [
      "On-site battery jump-start",
      "Works on cars, SUVs & vans",
      "Battery condition check included",
      "Available 24/7",
    ],
  },
  {
    icon: CircleDot,
    name: "Tyre Change",
    price: "2,500",
    variable: false,
    description:
      "Flat on the roadside, no jack, spare buried under luggage. We mount your spare and torque the bolts properly. Rolling again in minutes.",
    features: [
      "Spare tyre mounted on-site",
      "Proper torque applied",
      "Works on all vehicle types",
      "Available 24/7",
    ],
  },
  {
    icon: Wind,
    name: "Air Refill",
    price: "1,500",
    variable: false,
    description:
      "Night before a Murree trip and you spot a slow leak. No time to find a shop. We bring the compressor to you and fill all four tyres to spec.",
    features: [
      "All four tyres checked & filled",
      "Correct pressure per vehicle spec",
      "Quick roadside service",
      "Available 24/7",
    ],
  },
];

const towingServices: PricingService[] = [
  {
    icon: Truck,
    name: "Towing",
    price: "8,000",
    variable: true,
    description:
      "Car won't move? We load it onto a flatbed or wheel-lift and deliver it wherever you need. Workshop, home, or another city.",
    features: [
      "Flatbed & wheel-lift options",
      "Safe for all vehicle types",
      "Price depends on distance",
      "Available 24/7",
    ],
  },
  {
    icon: Anchor,
    name: "Vehicle Recovery",
    price: "8,000",
    variable: true,
    description:
      "Stuck in mud, a ditch, or off the road? We use a winch and flatbed to pull you back to solid ground.",
    features: [
      "Winch on the truck",
      "Flatbed available if needed",
      "Price depends on the situation",
      "Available 24/7",
    ],
  },
  {
    icon: Fuel,
    name: "Fuel Delivery",
    price: "2,000",
    variable: true,
    description:
      "Tank empty, no station in sight. We bring petrol or diesel straight to your car. You never have to leave the vehicle.",
    features: [
      "Petrol & diesel available",
      "Delivered to your exact location",
      "Fuel cost billed separately",
      "Available 24/7",
    ],
  },
  {
    icon: Wrench,
    name: "Roadside Assistance",
    price: "2,000",
    variable: true,
    description:
      "Something's wrong but you're not sure what. We come to you, assess the situation, and fix it on the spot if we can.",
    features: [
      "On-site diagnosis & assistance",
      "Overheating, loose battery terminal, alternator fault, we assess and fix on the spot",
      "Price depends on the service needed",
      "Available 24/7",
    ],
  },
];

function PricingCard({ service }: { service: PricingService }) {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      {/* Card header */}
      <div className="bg-gray-900 px-6 py-5 text-white">
        <div className="bg-red-600 w-11 h-11 rounded-lg flex items-center justify-center mb-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-lg font-bold">{service.name}</div>
      </div>

      {/* Price */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-baseline gap-1.5">
          {service.variable && (
            <span className="text-sm text-gray-500 font-medium">from</span>
          )}
          <span className="text-sm text-gray-500 font-medium">Rs.</span>
          <span className="text-4xl font-extrabold text-gray-900">{service.price}</span>
        </div>
        <div className="text-xs text-gray-400 mt-0.5">
          {service.variable ? "starting rate" : "flat rate"}
        </div>
      </div>

      {/* Description + features */}
      <div className="px-6 py-5 flex-1 flex flex-col gap-4">
        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
        <ul className="space-y-2 mt-auto">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6">
        <a
          href="tel:+923269751717"
          className="flex items-center justify-center gap-2 w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}

const BASE_URL = "https://roadrecoveryservice.com";

export default function PricingPage() {
  const allServices = [...quickServices, ...towingServices];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/pricing/#webpage`,
        name: "Roadside Assistance Pricing Across Pakistan",
        url: `${BASE_URL}/pricing`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "Discover prices for towing, jump start, tyre change, winch out, lock out, & fuel delivery services in Islamabad, Rawalpindi, Lahore & Murree.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Pricing", item: `${BASE_URL}/pricing` },
        ],
      },
      ...allServices.map((s) => ({
        "@type": "Offer",
        name: s.name,
        description: s.description,
        price: s.price.replace(",", ""),
        priceCurrency: "PKR",
        offeredBy: { "@id": `${BASE_URL}/#business` },
        availability: "https://schema.org/InStock",
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              What You Pay, Before We Start
            </h1>
            <p className="text-gray-300 text-lg">
              Your car just died. You&apos;re standing on a dark road somewhere between home and where you
              need to be. The last thing you want right now is to worry about hidden charges or getting
              overcharged by a stranger with a tow truck. Here&apos;s exactly what you&apos;ll pay, decided
              before we even start the engine.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick roadside fixes — flat rate */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Quick Roadside Fixes</h2>
          <p className="text-gray-500 text-sm mb-5">Flat-rate services, wherever you are.</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {quickServices.map((service) => (
              <PricingCard key={service.name} service={service} />
            ))}
          </div>

          {/* Towing & recovery — starting from */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">Towing &amp; Recovery</h2>
          <p className="text-gray-500 text-sm mb-5">
            Starting prices. Final cost depends on distance and vehicle type.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {towingServices.map((service) => (
              <PricingCard key={service.name} service={service} />
            ))}
          </div>

          {/* Disclaimer note */}
          <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Prices shown are starting rates and may vary depending on location, distance, and
              vehicle type.{" "}
              <a
                href="tel:+923269751717"
                className="text-red-600 font-semibold hover:underline"
              >
                Contact us
              </a>{" "}
              for an exact quote.
            </p>
          </div>
        </div>
      </section>

      {/* Other services row */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Explore Our Other Services</h2>
          <p className="text-gray-500 text-sm mb-5">
            Browse our full range of towing, recovery, and roadside services.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Accident Towing", href: "/services/accident-towing" },
              { label: "Flatbed Towing", href: "/services/flatbed-towing" },
              { label: "Winch Out Service", href: "/services/winch-out" },
              { label: "Fuel Delivery", href: "/services/fuel-delivery" },
              { label: "Lockout Help", href: "/services/lockout-help" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border border-gray-200 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-red-100 mb-8">
            Call us anytime. We&apos;re available 24/7 in Islamabad, Rawalpindi, Lahore, Murree &amp; beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              0326 9751717
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
