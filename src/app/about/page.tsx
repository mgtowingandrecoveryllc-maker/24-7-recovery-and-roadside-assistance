import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "24/7 Recovery and Roadside Assistance, founded in March 2026 by Ali Iqbal in Islamabad. Serving drivers in Islamabad, Rawalpindi, Lahore and Murree.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | 24/7 Recovery and Roadside Assistance",
    description:
      "24/7 Recovery and Roadside Assistance, founded in March 2026 by Ali Iqbal in Islamabad. Serving drivers in Islamabad, Rawalpindi, Lahore and Murree.",
    url: "https://roadrecoveryservice.com/about",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | 24/7 Recovery and Roadside Assistance",
    description:
      "24/7 Recovery and Roadside Assistance, founded in March 2026 by Ali Iqbal in Islamabad. Serving drivers in Islamabad, Rawalpindi, Lahore and Murree.",
    images: ["/logo.png"],
  },
};

const facts = [
  {
    icon: Clock,
    title: "A Real Person Answers",
    desc: "It's 3am. Your car won't start outside your house after a family dinner. You dial our number expecting a robot. A real voice picks up. Tells you a technician is around 30 minutes out. Stays on the line until you see headlights. That's how every call works here. No voicemail, no hold music, no \"press 1.\"",
  },
  {
    icon: Users,
    title: "We Tell You the Price First",
    desc: "You're stuck in Chaklala at midnight, battery dead. Before our guy even turns the key in his van, you already know it's Rs. 1,500. No surprise bill when he arrives. No \"oh, this will cost extra.\" You agree to the price on the phone, or you don't. Either way, we never show up and name a number you didn't expect.",
  },
];

const BASE_URL = "https://roadrecoveryservice.com";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${BASE_URL}/about/#webpage`,
        name: "About Us",
        url: `${BASE_URL}/about`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "Learn about 24/7 Road Recovery Service. A trusted, licensed, family-run towing and roadside assistance provider serving Pakistan's major cities.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/about` },
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
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              One Brother in Milwaukee. One in Islamabad. Same Mission.
            </h1>
            <p className="text-gray-300 text-lg">
              Founded in March 2026 in Islamabad. Serving drivers across Islamabad, Rawalpindi,
              Lahore and Murree, 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ali Iqbal&apos;s brother Sajawal runs a towing company in Milwaukee, USA. He works
                  long hours keeping Milwaukee drivers safe. He picks up the phone. He tells you the price. He sends someone. Their family lives in Pakistan with Ali, and every time Ali heard about
                  someone stranded on the Islamabad Expressway or stuck on a dark road near Murree with
                  no one to call, the same thought came back: why can&apos;t Pakistani drivers get the
                  same kind of help?
                </p>
                <p>
                  So in March 2026, Ali started 24/7 Recovery and Roadside Assistance. The idea was
                  simple. If your battery dies in G-9 on a Tuesday night or your car breaks down on the
                  motorway, you should be able to make one phone call and have someone with you in around 30 minutes. A real person answers, tells you the price upfront, and shows up when they
                  say they will.
                </p>
                <p>
                  One brother serves drivers in America. The other serves drivers in Pakistan.
                  That&apos;s what drives us.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
                alt="24/7 Recovery and Roadside Assistance flatbed tow truck on duty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="font-bold">Founded March 2026 · Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How We Actually Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {facts.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl font-extrabold">4</div><div className="text-sm text-red-100 mt-1">Cities Covered</div></div>
            <div><div className="text-3xl font-extrabold">24/7</div><div className="text-sm text-red-100 mt-1">Always Available</div></div>
            <div><div className="text-3xl font-extrabold">11</div><div className="text-sm text-red-100 mt-1">Services Offered</div></div>
            <div><div className="text-3xl font-extrabold">4</div><div className="text-sm text-red-100 mt-1">Trucks on the Road</div></div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-10 w-10 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            Get to know the people who answer your calls, dispatch our trucks, and show up when you need help most.
          </p>
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Save Our Number</h2>
          <p className="text-red-100 mb-8">
            When you need us at 3am, you&apos;ll be glad you did. Real person picks up, any hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923269751717"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" /> Call 0326 9751717
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
