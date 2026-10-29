import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronRight, User } from "lucide-react";

const BASE_URL = "https://roadrecoveryservice.com";

export const metadata: Metadata = {
  title: { absolute: "Meet Our Team | 24/7 Recovery and Roadside Assistance" },
  description:
    "Meet the team behind 24/7 Recovery. Ali Iqbal (founder), Fahad Ali (operations) and the crew who answer your calls.",
  alternates: { canonical: "/about/team" },
  openGraph: {
    title: "Meet Our Team | 24/7 Recovery and Roadside Assistance",
    description:
      "Meet the team behind 24/7 Recovery. Ali Iqbal (founder), Fahad Ali (operations) and the crew who answer your calls.",
    url: "https://roadrecoveryservice.com/about/team",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | 24/7 Recovery and Roadside Assistance",
    description:
      "Meet the team behind 24/7 Recovery. Ali Iqbal (founder), Fahad Ali (operations) and the crew who answer your calls.",
    images: ["/logo.png"],
  },
};

const teamMembers = [
  {
    name: "Ali Iqbal",
    role: "Founder & CEO",
    bio: "Founded 24/7 Recovery and Roadside Assistance in March 2026. Oversees all operations and expansion into new cities. Personally reviews every driver complaint and signs off on fleet purchases.",
  },
  {
    name: "Fahad Ali",
    role: "Operations Manager",
    bio: "Manages day-to-day dispatch and service coordination across all four cities. Tracks every call from pickup to completion. Background in fleet management and logistics.",
  },
  {
    name: "Ijaz Ahmad",
    role: "Head of Recovery Operations",
    bio: "Runs the recovery crews in Islamabad, Rawalpindi, Lahore and Murree. Handles recovery jobs, including hill roads around Murree.",
  },
  {
    name: "Bilal Qureshi",
    role: "Technical Lead & Fleet Maintenance",
    bio: "Maintains our fleet of recovery vehicles and towing equipment. Ensures every truck is road-ready 24/7. Background in automotive engineering.",
  },
  {
    name: "Qamar Lillah",
    role: "Senior Recovery Technician",
    bio: "Specialises in jump starts, tyre changes, and roadside repairs. Carries a jump starter and can diagnose a dead battery versus a faulty alternator on-site.",
  },
  {
    name: "Faizan Qadir",
    role: "Customer Relations & Support",
    bio: "First point of contact for customers calling our helpline. Handles dispatch coordination and customer follow-ups. Tracks open jobs on a live board and calls back every customer after the technician leaves.",
  },
];

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/about/team/#webpage`,
        name: "Meet Our Team",
        url: `${BASE_URL}/about/team`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#business` },
        description:
          "Meet the team behind 24/7 Recovery.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${BASE_URL}/about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Our Team",
            item: `${BASE_URL}/about/team`,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-4">
              <Link
                href="/about"
                className="hover:text-red-300 transition-colors"
              >
                About Us
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Meet the Team Behind 24/7 Recovery
            </h1>
            <p className="text-gray-300 text-lg">
              From the person who answers your emergency call to the technician
              who arrives at your location, here is who you are trusting with
              your car and your time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <User className="h-10 w-10 text-gray-400" />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h2>
                  <div className="text-red-600 font-semibold text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Need Roadside Help Right Now?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is standing by 24/7. One call and a technician will be on
            the way.
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
