import type { Metadata } from "next";
import Link from "next/link";
import { Zap, CircleDot, Wind, Phone, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for jump start, tire change, and air refill services in Islamabad and Rawalpindi. Call 0326 9751717 for an exact quote.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | 24/7 Recovery and Roadside Assistance",
    description:
      "Transparent starting prices for jump start, tire change, and air refill services in Islamabad and Rawalpindi. Call 0326 9751717 for an exact quote.",
    url: "https://roadrecoveryservice.com/pricing",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | 24/7 Recovery and Roadside Assistance",
    description:
      "Transparent starting prices for jump start, tire change, and air refill services in Islamabad and Rawalpindi. Call 0326 9751717 for an exact quote.",
    images: ["/logo.png"],
  },
};

const services = [
  {
    icon: Zap,
    name: "Jump Start",
    price: "2,000",
    description:
      "Dead battery? We come to your location and jump-start your vehicle so you can get moving again.",
    features: [
      "On-site battery jump-start",
      "Works on cars, SUVs & vans",
      "Battery condition check included",
      "Available 24/7",
    ],
  },
  {
    icon: CircleDot,
    name: "Tire Change",
    price: "2,000",
    description:
      "Flat tyre? We mount your spare on-site so you can safely continue your journey without waiting for a workshop.",
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
    description:
      "Low tyre pressure? We fill your tyres to the correct pressure at your location — no need to find a petrol station.",
    features: [
      "All four tyres checked & filled",
      "Correct pressure per vehicle spec",
      "Quick roadside service",
      "Available 24/7",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-gray-300 text-lg">
              No hidden charges, no surprises. These are our starting rates for roadside services
              across Islamabad and Rawalpindi.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
                >
                  {/* Card header */}
                  <div className="bg-gray-900 px-6 py-5 text-white">
                    <div className="bg-red-600 w-11 h-11 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-lg font-bold">{service.name}</div>
                  </div>

                  {/* Price */}
                  <div className="px-6 py-5 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-500 font-medium">Rs.</span>
                      <span className="text-4xl font-extrabold text-gray-900">
                        {service.price}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">starting rate</div>
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
                      className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              );
            })}
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need towing or recovery?</h2>
          <p className="text-gray-500 text-sm mb-5">
            Towing prices depend on your location, vehicle type, and destination. Call us for an
            instant quote — we always give you the price before we start.
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
            Call us anytime — we&apos;re available 24/7 across Islamabad and Rawalpindi.
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
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
