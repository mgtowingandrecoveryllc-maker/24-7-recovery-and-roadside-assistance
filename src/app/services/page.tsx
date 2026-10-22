import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Truck, AlertTriangle, Lock, Zap, Fuel, CircleDot, Anchor, Wind, Car, Route, Construction } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Our Roadside Assistance & Recovery Services | 24/7 Recovery Pakistan" },
  description:
    "24/7 roadside assistance and car recovery in Islamabad, Rawalpindi, Lahore, Murree & beyond. Fast towing, jump starts, tyre changes, fuel delivery, winch out and lockout service.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Roadside Assistance & Recovery Services | 24/7 Recovery Pakistan",
    description:
      "24/7 roadside assistance and car recovery in Islamabad, Rawalpindi, Lahore, Murree & beyond. Fast towing, jump starts, tyre changes, fuel delivery, winch out and lockout service.",
    url: "https://roadrecoveryservice.com/services",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Roadside Assistance & Recovery Services | 24/7 Recovery Pakistan",
    description:
      "24/7 roadside assistance and car recovery in Islamabad, Rawalpindi, Lahore, Murree & beyond. Fast towing, jump starts, tyre changes, fuel delivery, winch out and lockout service.",
    images: ["/logo.png"],
  },
};

const services = [
  {
    icon: AlertTriangle,
    title: "Accident Recovery & Towing",
    desc: "When the unexpected happens, including on motorways and mountain roads near Murree, you need a recovery service that responds fast. Our accident recovery specialists work at crash scenes safely, coordinate with law enforcement, and transport your vehicle to your chosen destination.",
    href: "/services/accident-towing",
    image: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=600&q=80",
    imageAlt: "Emergency accident recovery crew securing a damaged vehicle",
  },
  {
    icon: Truck,
    title: "Flatbed Recovery & Towing",
    desc: "Flatbed recovery and towing is the safest method for vehicle transport. All four wheels off the road, zero drivetrain stress, no tyre wear. Ideal for AWD, luxury, and lowered vehicles, from Bahria Town to Blue Area and everywhere between. Our flatbeds use soft straps and wheel locks to prevent any damage.",
    href: "/services/flatbed-towing",
    image: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=600&q=80",
    imageAlt: "Flatbed tow truck loading a car for safe transport",
  },
  {
    icon: Lock,
    title: "Car Lockout Help",
    desc: "Locked out of your car? It happens to everyone. Our technicians use non-destructive entry tools to get you back in, whether you're in DHA, Bahria Town, Gulberg, or any other sector. No damage to your locks or windows, and we'll have you moving again in minutes.",
    href: "/services/lockout-help",
    image: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=600&q=80",
    imageAlt: "Technician using non-destructive tools to unlock a car door",
  },
  {
    icon: Zap,
    title: "Car Jump Start Service",
    desc: "A dead battery doesn't have to ruin your day, wherever it dies. Basement car parks, roadsides, or highways. Our technicians arrive with commercial-grade jump starters capable of reviving cars, vans, trucks, and SUVs. We'll get your vehicle running and advise you on whether your battery needs replacement.",
    href: "/services/jumpstart",
    image: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=600&q=80",
    imageAlt: "Technician jump-starting a car battery with portable equipment",
  },
  {
    icon: Fuel,
    title: "Emergency Fuel Delivery",
    desc: "Run out of petrol or diesel? We deliver fuel directly to your location, even on the Islamabad–Murree Expressway. No need to leave your vehicle or walk along a dangerous roadside. We come to you.",
    href: "/services/fuel-delivery",
    image: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=600&q=80",
    imageAlt: "Emergency fuel delivery canister being carried to a stranded vehicle",
  },
  {
    icon: CircleDot,
    title: "Tyre Change Service",
    desc: "A flat tyre on the roadside is a safety hazard. Our team arrives at your location, any road, any time, removes the flat, and mounts your spare tyre so you can get moving safely. If you don't have a spare, we can tow you to the nearest tyre shop.",
    href: "/services/tire-change",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=600&q=80",
    imageAlt: "Close-up of a tyre being changed at the roadside",
  },
  {
    icon: Anchor,
    title: "Vehicle Recovery & Winch-Out",
    desc: "Stuck in mud, ditches, or snow in Murree? Our heavy-duty winch and vehicle recovery service can extract virtually any car, truck, or SUV safely. We use proper rigging techniques to recover your vehicle without causing additional damage.",
    href: "/services/winch-out",
    image: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=600&q=80",
    imageAlt: "Heavy-duty winch truck recovering a stuck vehicle from rough terrain",
  },
  {
    icon: Wind,
    title: "Tyre Air Refill",
    desc: "Low tyre pressure? We come to you, no need to find a petrol station. We bring a calibrated compressor to your exact location and top up all four tyres to the correct PSI, improving safety, fuel efficiency, and tyre life. Flat rate of Rs. 1,500, available 24/7.",
    href: "/services/tyre-air-refill",
    image: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=600&q=80",
    imageAlt: "Portable air compressor inflating a car tyre at the roadside",
  },
  {
    icon: Car,
    title: "Car Towing Service",
    desc: "Need your car towed? Whether it won't start, needs to reach a mechanic, or has to move between cities, our general car towing service handles it all across Islamabad, Rawalpindi, Lahore & Murree. Safe loading, transparent pricing from Rs. 8,000.",
    href: "/services/car-towing",
    image: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=600&q=80",
    imageAlt: "Car being loaded onto a tow truck for safe transport",
  },
  {
    icon: Route,
    title: "Motorway Recovery",
    desc: "Broken down on the motorway? We provide 24/7 recovery on M-1, M-2, M-3, M-11 & the Islamabad-Murree Expressway. We coordinate with Motorway Police and reach you fast, even in remote stretches far from interchanges.",
    href: "/services/motorway-recovery",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80",
    imageAlt: "Recovery vehicle responding to a motorway breakdown in Pakistan",
  },
  {
    icon: Construction,
    title: "Heavy Duty Vehicle Recovery",
    desc: "Trucks, buses, trailers, construction equipment. When regular tow trucks can't handle the job, our heavy-duty recovery team steps in. Heavy-duty winching, crane-assisted recovery, and multi-axle flatbed transport for the biggest jobs in Pakistan.",
    href: "/services/heavy-duty-recovery",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    imageAlt: "Heavy duty recovery truck lifting a commercial vehicle",
  },
];

const BASE_URL = "https://roadrecoveryservice.com";

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/#webpage`,
        name: "24/7 Roadside Assistance & Car Recovery Across Pakistan",
        url: `${BASE_URL}/services`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "24/7 roadside assistance and car recovery in Islamabad, Rawalpindi, Lahore, Murree & beyond.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
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
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Roadside Assistance &amp; Car Recovery Across Pakistan
            </h1>
            <p className="text-gray-300 text-lg">
              Jump starts, tyre changes, car recovery, towing, and more. Available 24 hours a day,
              7 days a week in Islamabad, Rawalpindi, Lahore, Murree &amp; beyond.
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
                    alt={service.imageAlt}
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
            One call and we&apos;re on our way. Islamabad, Rawalpindi, Lahore, Murree and
            the motorway network between them.
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
