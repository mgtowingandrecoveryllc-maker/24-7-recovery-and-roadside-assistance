import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Star,
  MessageCircle,
  CreditCard,
  Shield,
  Users,
} from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "Roadside Assistance Membership Plans | 24/7 Recovery Pakistan",
  },
  description:
    "Join our roadside assistance membership for priority response, free services & discounts. Plans from Rs. 5,000/year. Covering Islamabad, Rawalpindi, Lahore, Murree & beyond.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title:
      "Roadside Assistance Membership Plans | 24/7 Recovery Pakistan",
    description:
      "Join our roadside assistance membership for priority response, free services & discounts. Plans from Rs. 5,000/year. Covering Islamabad, Rawalpindi, Lahore, Murree & beyond.",
    url: "https://roadrecoveryservice.com/membership",
    images: [
      { url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Roadside Assistance Membership Plans | 24/7 Recovery Pakistan",
    description:
      "Join our roadside assistance membership for priority response, free services & discounts. Plans from Rs. 5,000/year. Covering Islamabad, Rawalpindi, Lahore, Murree & beyond.",
    images: ["/logo.png"],
  },
};

const plans = [
  {
    name: "Basic",
    price: 5000,
    period: "/year",
    bestFor: "Individual car owners",
    highlighted: false,
    features: [
      "1 free jump start per year",
      "1 free tyre change per year",
      "10% discount on all other services",
      "Priority response",
      "Coverage across all cities",
    ],
  },
  {
    name: "Premium",
    price: 10000,
    period: "/year",
    bestFor: "Families, frequent travellers",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "3 free jump starts per year",
      "3 free tyre changes per year",
      "2 free tyre air refills per year",
      "1 free fuel delivery per year",
      "20% discount on towing/recovery",
      "Priority response",
      "Coverage across all cities",
    ],
  },
  {
    name: "Corporate / Fleet",
    price: 20000,
    period: "/year per vehicle",
    bestFor: "Companies, fleet operators, logistics firms",
    highlighted: false,
    features: [
      "5 free jump starts per year",
      "5 free tyre changes per year",
      "2 free towing/recovery per year",
      "30% discount on all services beyond included",
      "Dedicated account manager",
      "Monthly service report",
      "Coverage across all cities",
    ],
  },
];

const steps = [
  {
    num: "1",
    title: "Choose Your Plan",
    desc: "Pick the membership tier that fits your needs — Basic, Premium, or Corporate.",
  },
  {
    num: "2",
    title: "Pay Your Way",
    desc: "Pay via bank transfer, JazzCash, EasyPaisa, or cash — whatever is easiest for you.",
  },
  {
    num: "3",
    title: "Get Confirmed",
    desc: "Get your WhatsApp confirmation — you’re covered from that moment.",
  },
  {
    num: "4",
    title: "Call Anytime",
    desc: "Whenever you need help, call us. Priority service guaranteed for all members.",
  },
];

const faqItems = [
  {
    q: "Can I upgrade my plan mid-year?",
    a: "Yes. You can upgrade from Basic to Premium or Corporate at any time. We’ll prorate the difference for the remaining months in your membership year.",
  },
  {
    q: "Does membership cover all cities?",
    a: "Yes. All membership plans cover our full service area: Islamabad, Rawalpindi, Lahore, Murree, and the motorway network between these cities.",
  },
  {
    q: "What happens after my free services are used up?",
    a: "Once your included free services are used, you continue to receive your plan’s discount on all additional services for the rest of the year. You still get priority response on every call.",
  },
  {
    q: "How do I renew my membership?",
    a: "We’ll contact you before your membership expires. Renewal is the same process — pay via bank transfer, JazzCash, EasyPaisa, or cash, and your membership continues without interruption.",
  },
  {
    q: "Can I use my membership in any city?",
    a: "Yes, membership covers all our service areas — Islamabad, Rawalpindi, Lahore, Murree, and the motorway network between these cities.",
  },
  {
    q: "Do I get a refund if I don’t use any services?",
    a: "Memberships are non-refundable but valid for 12 months from the date of purchase. Even if you don’t use the included free services, you still benefit from priority response and discounted rates all year.",
  },
  {
    q: "Can I gift a membership?",
    a: "Yes, contact us to purchase a gift membership. We’ll set it up in the recipient’s name and send them their membership details.",
  },
  {
    q: "Is the membership transferable between vehicles?",
    a: "Yes, the membership is tied to you, not the vehicle. You can use it with any vehicle you’re driving at the time you need assistance.",
  },
  {
    q: "Does it cover motorcycles?",
    a: "Yes, all vehicle types are covered including motorcycles, cars, trucks, SUVs, and vans.",
  },
  {
    q: "What happens after I use my free services?",
    a: "You continue to receive priority response and your plan’s discount on all services for the rest of the year. Your membership benefits don’t stop after the free services are used.",
  },
];

export default function MembershipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/membership/#webpage`,
        name: "Roadside Assistance Membership Plans",
        url: `${BASE_URL}/membership`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        description:
          "Join our roadside assistance membership for priority response, free services and discounts across Pakistan.",
      },
      {
        "@type": "Service",
        name: "Roadside Assistance Membership",
        description:
          "Annual membership plans for priority roadside assistance, free services, and discounts across Islamabad, Rawalpindi, Lahore, and Murree.",
        provider: { "@id": `${BASE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Islamabad" },
          { "@type": "City", name: "Rawalpindi" },
          { "@type": "City", name: "Lahore" },
          { "@type": "City", name: "Murree" },
        ],
        url: `${BASE_URL}/membership`,
        offers: [
          {
            "@type": "Offer",
            name: "Basic Plan",
            price: 5000,
            priceCurrency: "PKR",
            description:
              "1 free jump start, 1 free tyre change, 10% discount, priority response, all cities",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Premium Plan",
            price: 10000,
            priceCurrency: "PKR",
            description:
              "3 free jump starts, 3 free tyre changes, 2 free air refills, 1 free fuel delivery, 20% discount on towing, priority response, all cities",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Corporate / Fleet Plan",
            price: 20000,
            priceCurrency: "PKR",
            description:
              "Per vehicle: 5 free jump starts, 5 free tyre changes, 2 free towing/recovery, 30% discount, dedicated account manager, monthly report, all cities",
            availability: "https://schema.org/InStock",
          },
        ],
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Membership",
            item: `${BASE_URL}/membership`,
          },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Membership Plans
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Roadside Assistance Membership Plans
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            For Rs. 5,000 a year, your first jump start and tyre change are free. That&apos;s
            less than one emergency call-out. Priority response, free services, and discounts across
            Islamabad, Rawalpindi, Lahore &amp; Murree.
          </p>
          <p className="text-gray-400 text-base max-w-xl mx-auto mt-3">
            One breakdown without a plan can cost Rs. 8,000+. Members pay zero for their included services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border-2 transition-shadow ${
                  plan.highlighted
                    ? "bg-white border-red-600 shadow-xl scale-[1.02]"
                    : "bg-white border-gray-200 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">
                      Rs. {plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Best for: {plan.bestFor}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+923269751717"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-lg transition-colors ${
                    plan.highlighted
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Call to Subscribe
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            <CreditCard className="h-4 w-4 inline-block mr-1.5 -mt-0.5" />
            Pay via Bank Transfer, JazzCash, EasyPaisa, or Cash
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Compare All Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-lg">Feature</th>
                  <th className="text-center px-4 py-3 font-bold">Basic</th>
                  <th className="text-center px-4 py-3 font-bold border-x-2 border-red-600">Premium</th>
                  <th className="text-center px-4 py-3 font-bold rounded-tr-lg">Corporate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Price", "Rs. 5,000/yr", "Rs. 10,000/yr", "Rs. 20,000/yr per vehicle"],
                  ["Free jump starts", "1", "3", "5"],
                  ["Free tyre changes", "1", "3", "5"],
                  ["Free tyre air refills", "✗", "2", "✓"],
                  ["Free fuel delivery", "✗", "1", "✓"],
                  ["Free towing/recovery", "✗", "✗", "2"],
                  ["Discount on services", "10%", "20%", "30%"],
                  ["Priority response", "✓", "✓", "✓"],
                  ["All-city coverage", "✓", "✓", "✓"],
                  ["Dedicated account manager", "✗", "✗", "✓"],
                  ["Monthly service report", "✗", "✗", "✓"],
                ].map(([feature, basic, premium, corp], i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{basic}</td>
                    <td className="px-4 py-3 text-center text-gray-700 border-x border-red-100 bg-red-50/30">{premium}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{corp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Membership FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="font-semibold text-gray-900 mb-2">
                  {item.q}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-400 mb-8">
            Call us to subscribe or send a WhatsApp message for membership
            inquiries. We&apos;ll get you set up in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call 0326 9751717
            </a>
            <a
              href="https://wa.me/923194547038?text=Hi%2C%20I%27m%20interested%20in%20a%20membership%20plan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
