import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Truck, AlertTriangle, Lock, Zap, Fuel, CircleDot, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Complete towing and roadside assistance services available 24/7. Accident towing, flatbed towing, lockouts, jumpstarts, fuel delivery, tire changes, and winch-out.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: AlertTriangle,
    title: "Accident Towing",
    desc: "When the unexpected happens, you need a tow company that responds fast and handles your vehicle with care. Our accident towing specialists are trained to work at crash scenes safely, coordinate with law enforcement, and transport your vehicle to your chosen body shop or storage facility. We work with all major insurance carriers.",
    href: "/services/accident-towing",
    image: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Flatbed Towing",
    desc: "Flatbed towing is the safest method for transporting your vehicle — no wear on tires or drivetrain. Ideal for AWD vehicles, luxury cars, sports cars, lowered vehicles, and any car that can't be towed on its wheels. Our flatbeds are equipped with soft straps and wheel locks to prevent any damage.",
    href: "/services/flatbed-towing",
    image: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=600&q=80",
  },
  {
    icon: Lock,
    title: "Lockout Help",
    desc: "Keys locked inside your car? It happens to everyone. Our licensed locksmiths use non-destructive entry tools to get you back in your vehicle without damaging your locks or windows. We're discreet, professional, and we'll have you back on the road in minutes.",
    href: "/services/lockout-help",
    image: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Jumpstart Service",
    desc: "A dead battery doesn't have to ruin your day. Our technicians arrive with commercial-grade jump starters capable of reviving even heavy-duty trucks and SUVs. We'll get your vehicle running and advise you on whether your battery needs replacement.",
    href: "/services/jumpstart",
    image: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=600&q=80",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    desc: "Running on empty? We deliver petrol or diesel directly to your location so you can make it to the nearest petrol/CNG station safely. No need to leave your vehicle — we come to you.",
    href: "/services/fuel-delivery",
    image: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=600&q=80",
  },
  {
    icon: CircleDot,
    title: "Tire Change",
    desc: "A flat tire on the side of the road is a safety hazard. Our team will arrive quickly, remove your flat, and mount your spare tire — getting you back on the road safely. If you don't have a spare or it's also damaged, we can tow you to the nearest tire shop.",
    href: "/services/tire-change",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=600&q=80",
  },
  {
    icon: Anchor,
    title: "Winch Out Service",
    desc: "Stuck in mud, snow, sand, or a ditch? Our heavy-duty winch recovery service can extract virtually any vehicle. We use proper rigging techniques to recover your vehicle without causing additional damage — protecting your car, truck, or SUV throughout the process.",
    href: "/services/winch-out",
    image: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=600&q=80",
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
              Everything You Need, Anytime
            </h1>
            <p className="text-gray-300 text-lg">
              Professional towing and roadside assistance services available 24 hours a day, 7 days
              a week. No job is too big or too small.
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
          <h2 className="text-3xl font-extrabold mb-4">Need Help Right Now?</h2>
          <p className="text-red-100 mb-8">
            Our dispatch team is standing by 24/7. Call us and a truck will be on its way.
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
