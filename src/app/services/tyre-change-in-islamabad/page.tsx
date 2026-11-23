import type { Metadata } from "next";
import Link from "next/link";
import { CircleDot, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/tyre-change-in-islamabad`;

export const metadata: Metadata = {
  title: { absolute: "Tyre Change Service in Islamabad | Flat Tyre Help, Rs. 2,500" },
  description:
    "Flat tyre in Islamabad? We come to you 24/7 with a floor jack and torque wrench. Rs. 2,500, around 30 minutes. Call 0326 9751717.",
  alternates: { canonical: "/services/tyre-change-in-islamabad" },
  openGraph: {
    title: "Tyre Change Service in Islamabad | Flat Tyre Help, Rs. 2,500",
    description:
      "Flat tyre in Islamabad? We come to you 24/7 with a floor jack and torque wrench. Rs. 2,500, around 30 minutes. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", alt: "Tyre change service on a roadside in Islamabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyre Change Service in Islamabad | Flat Tyre Help, Rs. 2,500",
    description:
      "Flat tyre in Islamabad? We come to you 24/7 with a floor jack and torque wrench. Rs. 2,500, around 30 minutes. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80"],
  },
};

const areas = [
  "F-6, F-7, F-8, F-10, F-11",
  "G-8, G-9, G-10, G-11, G-13",
  "I-8, I-9, I-10, I-14, I-16",
  "Blue Area & Jinnah Avenue",
  "Islamabad Expressway",
  "Srinagar Highway",
  "E-11, D-12, H-13",
  "Bahria Enclave",
  "Lake View Park & Rawal Dam area",
  "Golra, Tarlai, Sohan, Bani Gala",
];

const faqItems = [
  {
    q: "How much does a tyre change cost in Islamabad?",
    a: "Rs. 2,500 flat rate anywhere in Islamabad. The exact price is confirmed on the call before dispatch. No hidden charges.",
  },
  {
    q: "How long does it take you to reach me?",
    a: "Around 30 minutes across Islamabad. We give you an ETA and the driver's name when you call.",
  },
  {
    q: "What if my spare tyre is also flat?",
    a: "Tell us on the call and we'll tow you to the nearest tyre shop. We confirm that price before dispatch.",
  },
  {
    q: "What are the speed and distance limits on a space-saver spare?",
    a: "Most space-saver spares are limited to about 80 km/h and 80 to 110 km. We check yours and tell you the limits before you drive off.",
  },
  {
    q: "What should I keep in the boot for a flat tyre?",
    a: "Your spare tyre (check it every few months), the wheel brace that came with the car, and a warning triangle. If you don't have a jack, that's what we bring.",
  },
];

const otherCities = [
  { city: "Rawalpindi", href: "/services/tyre-change-in-rawalpindi" },
  { city: "Lahore", href: "/services/tyre-change-in-lahore" },
  { city: "Murree", href: "/services/tyre-change-in-murree" },
];

export default function TyreChangeIslamabadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Tyre Change Service in Islamabad",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 tyre change service covering all Islamabad sectors, Expressway, Srinagar Highway and surrounding areas. Rs. 2,500.",
      },
      {
        "@type": "Service",
        name: "Tyre Change Service in Islamabad",
        description:
          "24/7 roadside tyre change for cars, SUVs and vans across Islamabad. Floor jack and torque wrench. Rs. 2,500.",
        serviceType: "Tyre Change",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Islamabad" },
        url: PAGE_URL,
        offers: {
          "@type": "Offer",
          price: 2500,
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "Tyre Change", item: `${BASE_URL}/services/tire-change` },
          { "@type": "ListItem", position: 4, name: "Islamabad", item: PAGE_URL },
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
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
            <Link href="/services" className="hover:text-red-300 transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services/tire-change" className="hover:text-red-300 transition-colors">Tyre Change</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Islamabad</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <CircleDot className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Tyre Change Service in Islamabad
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-600/90 text-white text-sm font-bold px-4 py-1.5 rounded-full">
              Rs. 2,500
            </span>
            <span className="text-gray-400 text-sm">
              Exact price confirmed on the call before dispatch
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Sunday evening at the Lake View car park. You hit a pothole on the road down and the rear tyre is flat. The spare is in the boot but you have no jack, and the car park surface is uneven. Call 0326 9751717. We bring a floor jack and torque wrench, swap the flat for your spare, and you drive home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" /> Call Now: 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Get Help Now
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Flat Tyre Help Across Islamabad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Islamabad&apos;s sector service roads are full of potholes, raised manhole covers
                and broken kerbs. A flat tyre or a tyre burst can happen anywhere between Blue Area
                and Bahria Enclave. The worst part is not the puncture itself. It is standing in a
                narrow car park or a one-lane service road with no room to work and no jack in the boot.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We swap the flat for your spare, torque the wheel nuts, check the spare&apos;s pressure
                and tell you any speed or distance limit. Make sure the spare is reachable in the boot
                before we arrive. If the spare is buried under luggage, that is fine. We just need you
                to clear it.
              </p>
              <ul className="space-y-3">
                {[
                  "Floor jack and torque wrench. We bring the tools",
                  "Warning triangle out before the jack goes down",
                  "Spare pressure checked with our gauge",
                  "Rs. 2,500 flat rate. No hidden charges",
                  "No spare? We tow you to the nearest tyre shop",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
                alt="Technician changing a tyre on a car in Islamabad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Clock, label: "~30 Min Avg Response", sub: "Across Islamabad sectors" },
              { icon: Shield, label: "Rs. 2,500 Flat Rate", sub: "No hidden charges" },
              { icon: Phone, label: "24/7 Dispatch", sub: "Nights, weekends, holidays" },
            ].map((item) => {
              const I = item.icon;
              return (
                <div key={item.label}>
                  <I className="h-8 w-8 mx-auto mb-2 text-red-200" />
                  <div className="font-bold text-lg">{item.label}</div>
                  <div className="text-red-200 text-sm">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Areas and Roads We Cover in Islamabad
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Every sector, highway and housing society in Islamabad.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            When to Call for a Tyre Change in Islamabad
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Tyre Burst on Islamabad Expressway",
                desc: "Pull onto the hard shoulder, turn on your hazards, and call us. We set out a warning triangle before we start work. Stay inside the vehicle until we arrive.",
              },
              {
                title: "Flat Tyre in a Narrow Sector Car Park",
                desc: "F-sector and G-sector car parks are tight. If you cannot get the jack under the car or do not have one, we bring ours. We work in the space you have.",
              },
              {
                title: "Tyre Puncture on Srinagar Highway During Rush Hour",
                desc: "Move as far left as you can. Hazards on. We come to you, swap the spare on, torque the wheel nuts, and you merge back in.",
              },
              {
                title: "Space-Saver Spare Already On",
                desc: "If you have been driving on a compact spare and bought a full-size replacement, we can mount it for you at your home or office. No need to visit a tyre shop.",
              },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start">
                <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{s.title}</div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1. Call 0326 9751717",
                desc: "Tell us where you are and whether you have a usable spare. We give you an ETA and the driver's name.",
              },
              {
                step: "2. Spare Mounted, You're Rolling",
                desc: "We swap the flat for your spare, torque the wheel nuts, check the spare's pressure and tell you any speed or distance limit. No spare at all? Tell us on the call and we'll tow you to the nearest tyre shop. We confirm that price before dispatch.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {s.step.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{s.step.slice(3)}</div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Tyre Change Price in Islamabad
          </h2>
          <p className="text-gray-600 mb-2">
            Tyre change in Islamabad: <strong>Rs. 2,500</strong>. The exact price is confirmed
            on the call before dispatch.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            If there is no usable spare, we can tow you to the nearest tyre shop. That price is
            confirmed separately.
          </p>
          <Link
            href="/pricing"
            className="text-red-600 font-semibold hover:underline text-sm"
          >
            View full pricing &rarr;
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Islamabad Tyre Change FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Tyre Change Service in Other Cities
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We also provide 24/7 tyre change service in these cities.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="group bg-gray-50 border border-gray-200 hover:border-red-500 rounded-xl p-5 transition-all hover:shadow-lg text-center"
              >
                <div className="bg-red-50 group-hover:bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto transition-colors">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Tyre Change in {c.city}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tyre Change (All Cities)", href: "/services/tire-change" },
              { label: "Islamabad Area Page", href: "/areas/roadside-recovery-service-in-islamabad" },
              { label: "Jump Start in Islamabad", href: "/services/jumpstart-in-islamabad" },
              { label: "Car Recovery in Islamabad", href: "/services/car-recovery-and-towing-in-islamabad" },
              { label: "Tyre Air Refill", href: "/services/tyre-air-refill" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-200 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                {s.label} <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need a Tyre Change in Islamabad?</h2>
          <p className="text-gray-400 mb-8">
            One call and a technician with a floor jack is on the way. All sectors covered, 24/7.
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" /> Call Now: 0326 9751717
          </a>
        </div>
      </section>
    </>
  );
}
