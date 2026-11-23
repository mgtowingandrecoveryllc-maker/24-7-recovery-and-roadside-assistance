import type { Metadata } from "next";
import Link from "next/link";
import { CircleDot, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";
const PAGE_URL = `${BASE_URL}/services/tyre-change-in-murree`;

export const metadata: Metadata = {
  title: { absolute: "Tyre Change Service in Murree | Flat Tyre Help, Rs. 2,500" },
  description:
    "Flat tyre in Murree or Galyat? 24/7 tyre change on the Expressway, Kashmir Road, Bhurban and Patriata. Rs. 2,500, 30 to 50 minutes. Call 0326 9751717.",
  alternates: { canonical: "/services/tyre-change-in-murree" },
  openGraph: {
    title: "Tyre Change Service in Murree | Flat Tyre Help, Rs. 2,500",
    description:
      "Flat tyre in Murree or Galyat? 24/7 tyre change on the Expressway, Kashmir Road, Bhurban and Patriata. Rs. 2,500, 30 to 50 minutes. Call 0326 9751717.",
    url: PAGE_URL,
    images: [{ url: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", alt: "Tyre change service on a mountain road near Murree" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyre Change Service in Murree | Flat Tyre Help, Rs. 2,500",
    description:
      "Flat tyre in Murree or Galyat? 24/7 tyre change on the Expressway, Kashmir Road, Bhurban and Patriata. Rs. 2,500, 30 to 50 minutes. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80"],
  },
};

const areas = [
  "Islamabad-Murree Expressway (full route)",
  "Ghora Gali & Changla Gali",
  "Mall Road & GPO Chowk",
  "Bhurban & PC Hotel area",
  "Patriata (New Murree)",
  "Kashmir Road & Kohala Road",
  "Nathia Gali road",
  "Pindi Point & Kashmir Point",
  "Lower Topa & Upper Topa",
  "Sunny Bank & Jhika Gali",
];

const faqItems = [
  {
    q: "How much does a tyre change cost in Murree?",
    a: "Rs. 2,500 flat rate anywhere in Murree and the Galyat stretch. Exact price confirmed on the call before dispatch. No altitude surcharge.",
  },
  {
    q: "How long does it take you to reach me in Murree?",
    a: "30 to 50 minutes depending on the road. Mall Road and Expressway calls are fastest. We give you an honest ETA when you call.",
  },
  {
    q: "What if I don't have a spare tyre in Murree?",
    a: "Tell us on the call and we'll tow you to the nearest tyre shop or down to Islamabad. We confirm that price before dispatch.",
  },
  {
    q: "Can you change a tyre on a steep slope?",
    a: "Yes. We position the truck to prevent any roll and use a floor jack on the safest point. Tell us the gradient on the call.",
  },
  {
    q: "Will my space-saver spare last the drive down to Islamabad?",
    a: "Most space-saver spares are limited to about 80 km/h and 80 to 110 km. The Expressway to Islamabad is roughly 60 km. If the spare is in good condition, it should last. We check the pressure and advise you.",
  },
];

const otherCities = [
  { city: "Islamabad", href: "/services/tyre-change-in-islamabad" },
  { city: "Rawalpindi", href: "/services/tyre-change-in-rawalpindi" },
  { city: "Lahore", href: "/services/tyre-change-in-lahore" },
];

export default function TyreChangeMurreePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: "24/7 Tyre Change Service in Murree",
        url: PAGE_URL,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "24/7 tyre change service covering the Expressway, Mall Road, Bhurban, Patriata, Kashmir Road and surrounding Galyat areas. Rs. 2,500.",
      },
      {
        "@type": "Service",
        name: "Tyre Change Service in Murree",
        description:
          "24/7 roadside tyre change for cars, SUVs and vans across Murree and Galyat. Floor jack and torque wrench. Rs. 2,500.",
        serviceType: "Tyre Change",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: { "@type": "City", name: "Murree" },
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
          { "@type": "ListItem", position: 4, name: "Murree", item: PAGE_URL },
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
            <span>Murree</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <CircleDot className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            24/7 Tyre Change Service in Murree
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
            The rear tyre goes flat on the Patriata road after a pothole. It is a steep slope and there is nowhere flat to jack the car. The spare is in the boot but the gradient means the car could roll the moment you lift a wheel. Call 0326 9751717. We bring a floor jack, position the truck to block any roll, swap the flat, and torque the wheel nuts. Done.
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
                Flat Tyre Help in Murree and Galyat
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On flat ground, a tyre change takes a few minutes. On a Murree gradient, the car can roll the moment you lift a wheel. You need the right position, the right tools, and a vehicle behind the car to block any movement. We handle all of that.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We swap the flat for your spare, torque the wheel nuts, check the spare&apos;s pressure and tell you any speed or distance limit. If you are running a space-saver spare, it is limited to about 80 km/h and 80 to 110 km. The Expressway down to Islamabad is roughly 60 km. We tell you whether the spare will last and what speed to keep.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our trucks carry ice-chains and can recover cars in snow. Tell us the road conditions on the call.
              </p>
              <ul className="space-y-3">
                {[
                  "Floor jack and torque wrench. We bring the tools",
                  "Truck positioned to block any roll on a slope",
                  "Spare pressure checked with our gauge",
                  "Rs. 2,500 flat rate. No altitude surcharge",
                  "No spare? We tow you to a tyre shop or down to Islamabad",
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
                alt="Technician changing a tyre on a mountain road near Murree"
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
              { icon: Clock, label: "30 to 50 Min Response", sub: "Depending on the road" },
              { icon: Shield, label: "Rs. 2,500 Flat Rate", sub: "No altitude surcharge" },
              { icon: Phone, label: "24/7 Mountain Dispatch", sub: "Including snowfall nights" },
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
            Areas and Roads We Cover in &amp; Around Murree
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            From the Expressway toll plaza up to Nathia Gali, including every hill road in between.
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
            When to Call for a Tyre Change in Murree
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Tyre burst on the Expressway near Ghora Gali",
                desc: "Steep gradient with no hard shoulder in some sections. Pull as far left as you can, hazards on, and call us immediately. Do not attempt a change on a slope without the right equipment.",
              },
              {
                title: "Flat tyre at a hotel car park in Bhurban",
                desc: "Uneven gravel surface, parked cars close together. We bring the jack and tools and work in the space you have.",
              },
              {
                title: "Puncture on Kashmir Road after dark",
                desc: "No streetlights on most of the stretch. Stay inside with your hazards on. We come to you with a warning triangle and a floor jack.",
              },
              {
                title: "Space-saver spare on a steep descent",
                desc: "The spare is rated for about 80 km/h and 80 to 110 km. That may not be enough for a long drive down to Islamabad depending on where you are. Call us and we'll help you decide whether to drive on the spare or get a tow.",
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
                desc: "Tell us where you are, the slope conditions, and whether you have a usable spare. We give you an ETA and the driver's name.",
              },
              {
                step: "2. Spare mounted, you're rolling",
                desc: "We position the truck, swap the flat for your spare, torque the wheel nuts, and check the spare's pressure. We tell you the speed and distance limits for the descent. No spare at all? Tell us on the call and we'll tow you to the nearest tyre shop. We confirm that price before dispatch.",
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
            Tyre Change Price in Murree
          </h2>
          <p className="text-gray-600 mb-2">
            Tyre change in Murree: <strong>Rs. 2,500</strong>. The exact price is confirmed on the call before dispatch. No altitude surcharge.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            If there is no usable spare, we can tow you to a tyre shop or down to Islamabad. That price is confirmed separately.
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
            Murree Tyre Change FAQs
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
            Heading back to the plains? We also provide 24/7 tyre change service in these cities.
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
              { label: "Murree Area Page", href: "/areas/roadside-recovery-service-in-murree" },
              { label: "Jump Start in Murree", href: "/services/jumpstart-in-murree" },
              { label: "Car Recovery in Murree", href: "/services/car-recovery-and-towing-in-murree" },
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
          <h2 className="text-3xl font-extrabold mb-4">Need a Tyre Change in Murree?</h2>
          <p className="text-gray-400 mb-8">
            Our mountain dispatch team covers Mall Road, Bhurban, Patriata, and the entire Expressway route. 24/7, even during snowfall.
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
