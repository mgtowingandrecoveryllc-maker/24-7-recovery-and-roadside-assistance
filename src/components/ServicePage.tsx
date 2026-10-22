import Link from "next/link";
import { LucideIcon, Phone, ChevronRight, CheckCircle, Clock, Shield, MapPin, Star } from "lucide-react";

const SERVICE_AREAS = [
  { city: "Islamabad", href: "/areas/roadside-recovery-service-in-islamabad" },
  { city: "Rawalpindi", href: "/areas/roadside-recovery-service-in-rawalpindi" },
  { city: "Lahore", href: "/areas/roadside-recovery-service-in-lahore" },
  { city: "Murree", href: "/areas/roadside-recovery-service-in-murree" },
];

const BASE_URL = "https://roadrecoveryservice.com";
const BUSINESS_ID = `${BASE_URL}/#business`;

interface ServicePageProps {
  title: string;
  shortTitle?: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt?: string;
  icon: LucideIcon;
  features: string[];
  process: { step: string; desc: string }[];
  faqItems: { q: string; a: string }[];
  relatedServices: { title: string; href: string }[];
  cityPages?: { city: string; href: string }[];
  price?: number;
  priceText?: string;
}

export default function ServicePage({
  title,
  shortTitle,
  slug,
  tagline,
  description,
  image,
  imageAlt,
  icon: Icon,
  features,
  process,
  faqItems,
  relatedServices,
  cityPages,
  price,
  priceText,
}: ServicePageProps) {
  const serviceUrl = `${BASE_URL}/services/${slug}`;
  const breadcrumbName = shortTitle ?? title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${serviceUrl}/#webpage`,
        name: title,
        url: serviceUrl,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description,
      },
      {
        "@type": "Service",
        name: title,
        description,
        serviceType: breadcrumbName,
        provider: { "@id": BUSINESS_ID },
        areaServed: [
          { "@type": "City", name: "Islamabad" },
          { "@type": "City", name: "Rawalpindi" },
          { "@type": "City", name: "Lahore" },
          { "@type": "City", name: "Murree" },
        ],
        url: serviceUrl,
        ...((price != null || priceText != null) && {
          offers: {
            "@type": "Offer",
            ...(price != null && { price, priceCurrency: "PKR" }),
            ...(priceText != null && { description: priceText }),
            availability: "https://schema.org/InStock",
          },
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: breadcrumbName, item: serviceUrl },
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
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
            <Link href="/services" className="hover:text-red-300 transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{shortTitle ?? title}</span>
          </div>
          <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{title}</h1>
          {(price != null || priceText != null) && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-lg px-5 py-2 rounded-full mb-4">
              <span className="text-red-400 text-sm font-semibold">{price != null && price > 2000 ? "from" : ""}</span>
              <span>{price != null ? `Rs. ${price.toLocaleString()}` : priceText}</span>
            </div>
          )}
          <p className="text-xl text-gray-300 max-w-2xl mb-8">{tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call for Immediate Help
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

      {/* About This Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt={imageAlt ?? title}
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
              { icon: Clock, label: "Around 30 Min", sub: "Average response time" },
              { icon: Shield, label: "Price Before We Start", sub: "No surprises" },
              { icon: Phone, label: "24/7, Real Person", sub: "No robots, no hold music" },
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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            How It Works
          </h2>
          <div className="space-y-6">
            {process.map((p, i) => (
              <div key={p.step} className="flex gap-5 items-start">
                <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{p.step}</div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Offer This Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
            Where We Offer This Service
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Available in Islamabad, Rawalpindi, Lahore, and Murree.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(cityPages && cityPages.length > 0 ? cityPages : SERVICE_AREAS).map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="group bg-white border border-gray-200 hover:border-red-500 rounded-xl p-5 transition-all hover:shadow-lg"
              >
                <div className="bg-red-50 group-hover:bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                  {(shortTitle ?? title)} in {area.city}
                </div>
                <div className="mt-3 text-red-600 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Cross-Sell */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 mb-1">Save with a Membership</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                From Rs. 5,000/year. Priority response + free services included. Members save on every call.
              </p>
            </div>
            <Link
              href="/membership"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shrink-0"
            >
              View Plans <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services</h3>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-200 hover:border-red-400 text-gray-700 hover:text-red-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                {s.title} <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need {shortTitle ?? title} Right Now?</h2>
          <p className="text-gray-400 mb-8">
            Call 0326 9751717. Real person picks up. Technician dispatched.
          </p>
          <a
            href="tel:+923269751717"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call 0326 9751717
          </a>
        </div>
      </section>
    </>
  );
}
