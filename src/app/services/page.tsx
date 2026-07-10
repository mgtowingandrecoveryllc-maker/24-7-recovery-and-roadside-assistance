import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Truck, AlertTriangle, Lock, Zap, Fuel, CircleDot, Anchor, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "24/7 Roadside Assistance & Car Recovery Services in Islamabad" },
  description:
    "24/7 roadside assistance and car recovery in Islamabad & Rawalpindi. Fast towing, jump starts, tire changes, fuel delivery, winch out and lockout service.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "24/7 Roadside Assistance & Car Recovery Services in Islamabad",
    description:
      "24/7 roadside assistance and car recovery in Islamabad & Rawalpindi. Fast towing, jump starts, tire changes, fuel delivery, winch out and lockout service.",
    url: "https://roadrecoveryservice.com/services",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Roadside Assistance & Car Recovery Services in Islamabad",
    description:
      "24/7 roadside assistance and car recovery in Islamabad & Rawalpindi. Fast towing, jump starts, tire changes, fuel delivery, winch out and lockout service.",
    images: ["/logo.png"],
  },
};

const services = [
  {
    icon: AlertTriangle,
    title: "Accident Recovery & Towing",
    desc: "When the unexpected happens in Islamabad or Rawalpindi, you need a recovery and towing service that responds fast. Our accident recovery specialists work at crash scenes safely, coordinate with law enforcement, and transport your vehicle to your chosen destination. We work with all major insurance carriers.",
    href: "/services/accident-towing",
    image: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Flatbed Recovery & Towing",
    desc: "Flatbed recovery and towing is the safest method for vehicle transport — all four wheels off the road, zero drivetrain stress, no tyre wear. Ideal for AWD, luxury, and lowered vehicles across Islamabad and Rawalpindi. Our flatbeds use soft straps and wheel locks to prevent any damage.",
    href: "/services/flatbed-towing",
    image: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=600&q=80",
  },
  {
    icon: Lock,
    title: "Car Lockout Help",
    desc: "Locked out of your car in Islamabad or Rawalpindi? It happens to everyone. Our technicians use non-destructive entry tools to get you back in your vehicle without damaging your locks or windows. We're discreet, professional, and we'll have you back on the road in minutes.",
    href: "/services/lockout-help",
    image: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Car Jump Start Service",
    desc: "A dead battery in Islamabad or Rawalpindi doesn't have to ruin your day. Our technicians arrive with commercial-grade jump starters capable of reviving cars, vans, trucks, and SUVs. We'll get your vehicle running and advise you on whether your battery needs replacement.",
    href: "/services/jumpstart",
    image: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=600&q=80",
  },
  {
    icon: Fuel,
    title: "Emergency Fuel Delivery",
    desc: "Run out of petrol or diesel in Islamabad or Rawalpindi? We deliver fuel directly to your location so you can reach the nearest petrol or CNG station safely. No need to leave your vehicle — we come to you.",
    href: "/services/fuel-delivery",
    image: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=600&q=80",
  },
  {
    icon: CircleDot,
    title: "Tyre Change Service",
    desc: "A flat tyre on the roadside in Islamabad or Rawalpindi is a safety hazard. Our team arrives quickly, removes the flat, and mounts your spare tyre — getting you back on the road safely. If you don't have a spare, we can tow you to the nearest tyre shop.",
    href: "/services/tire-change",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=600&q=80",
  },
  {
    icon: Anchor,
    title: "Vehicle Recovery & Winch-Out",
    desc: "Vehicle stuck in mud, a ditch, or rough terrain in Islamabad or Rawalpindi? Our heavy-duty winch and vehicle recovery service can extract virtually any car, truck, or SUV safely. We use proper rigging techniques to recover your vehicle without causing additional damage.",
    href: "/services/winch-out",
    image: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=600&q=80",
  },
  {
    icon: Wind,
    title: "Tyre Air Refill",
    desc: "Low tyre pressure in Islamabad or Rawalpindi? We bring a calibrated compressor to your exact location and top up all four tyres to the correct PSI — improving safety, fuel efficiency, and tyre life. Flat rate of Rs. 1,500, available 24/7.",
    href: "/services/tyre-air-refill",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=600&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Roadside Assistance &amp; Car Recovery in Islamabad &amp; Rawalpindi
            </h1>
            <p className="text-gray-300 text-lg">
              Jump starts, tyre changes, car recovery, towing, and more — available 24 hours a day,
              7 days a week across Islamabad and Rawalpindi.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`h-64 rounded-2xl overflow-hidden shadow-lg ${
                    idx % 2 === 1 ? "[direction:ltr]" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? "[direction:ltr]" : ""}>
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="tel:+923269751717"
                      className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need Roadside Assistance Right Now?</h2>
          <p className="text-red-100 mb-8">
            Our dispatch team is standing by 24/7 across Islamabad and Rawalpindi. One call and
            we&apos;re on our way.
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-5 w-5" /> Call 0326 9751717
          </a>
        </div>
      </section>
    </>
  );
}
