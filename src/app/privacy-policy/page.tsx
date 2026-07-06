import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how 24/7 Road Recovery Service collects, uses, and protects your personal data. We never sell your information. Your privacy is our priority.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | 24/7 Recovery and Roadside Assistance",
    description:
      "Read how 24/7 Road Recovery Service collects, uses, and protects your personal data. We never sell your information. Your privacy is our priority.",
    url: "https://roadrecoveryservice.com/privacy-policy",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | 24/7 Recovery and Roadside Assistance",
    description:
      "Read how 24/7 Road Recovery Service collects, uses, and protects your personal data. We never sell your information. Your privacy is our priority.",
    images: ["/logo.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">
              We respect your privacy and are committed to being open about how we handle your
              information. This page explains what we collect, why we collect it, and how you can
              reach us with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-12 pb-8 border-b border-gray-100">
            Last updated: 25 June 2026
          </p>

          <div
            className="
              [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:first:mt-0
              [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
              [&_li]:text-gray-600 [&_li]:leading-relaxed
              [&_strong]:text-gray-800 [&_strong]:font-semibold
            "
          >
            <h2>1. Who We Are</h2>
            <p>
              This website is operated by <strong>24/7 Recovery and Roadside Assistance</strong>, a
              roadside assistance and towing service based in Islamabad and Rawalpindi, Pakistan. When
              you use this website or contact us through it, we may collect some personal information
              about you. This policy explains how we handle that information.
            </p>

            <h2>2. What Information We Collect</h2>
            <p>We only collect information that you actively provide to us, plus basic technical data
            that is collected automatically when you visit any website.</p>

            <p>
              <strong>Contact form.</strong> When you fill in our contact or booking form, we collect
              the name, phone number, and message you enter. This is the information you choose to
              give us so that we can respond to your request.
            </p>
            <p>
              <strong>Location data ("Find Me" feature).</strong> Our website has a "Find Me" button
              that, with your permission, uses your device&apos;s GPS to share your current location
              with us. Your browser will ask for your permission before sharing anything. We receive
              your coordinates only if you choose to share them, and we use this information solely
              to help our dispatcher identify where you are so we can send help quickly.
            </p>
            <p>
              <strong>Automatic technical data.</strong> When you visit our website, our hosting
              provider and any analytics tools we use may automatically record basic technical
              information such as your IP address, the type of browser and device you are using,
              which pages you visited, and how long you spent on the site. This happens on virtually
              every website and is standard practice.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes only:</p>
            <ul>
              <li>To respond to your enquiry or service request by phone or email.</li>
              <li>
                To dispatch our roadside assistance team to your location when you need help.
              </li>
              <li>
                To understand how visitors use our website so we can improve it (using aggregated,
                non-identifying analytics data).
              </li>
            </ul>
            <p>
              We do not use your contact information to send you unsolicited marketing messages. If
              you contact us, we will only use your details to handle that specific request.
            </p>

            <h2>4. We Do Not Sell Your Data</h2>
            <p>
              We do not sell, rent, trade, or otherwise share your personal information with any
              third party for their own commercial purposes. Your information is used only to provide
              you with the service you requested.
            </p>

            <h2>5. Cookies and Analytics</h2>
            <p>
              Our website may use cookies — small text files stored on your device — to help the
              site function correctly and to collect basic analytics data. We may use a service such
              as Google Analytics to help us understand how visitors find and use our site. The data
              collected through analytics is aggregated and does not personally identify you.
            </p>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect
              some features of the site, but will not prevent you from using our contact form or
              calling us directly.
            </p>

            <h2>6. Data Sharing</h2>
            <p>
              We do not share your personal data with other companies or individuals except in the
              following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Legal requirements.</strong> If we are required to disclose information by
                Pakistani law, a court order, or a government authority, we will comply with that
                legal obligation.
              </li>
              <li>
                <strong>Service providers.</strong> Our website is hosted on third-party
                infrastructure (such as Vercel). These providers may process technical data as part
                of delivering the website, but they do not have access to your contact form
                submissions and do not use your data for their own purposes.
              </li>
            </ul>

            <h2>7. How Long We Keep Your Data</h2>
            <p>
              We keep contact form submissions and any related correspondence for up to 12 months
              after your request has been handled, and then we delete them. Location data shared
              through the "Find Me" feature is used only for the immediate dispatch — we do not
              store your GPS coordinates beyond that purpose.
            </p>

            <h2>8. Security</h2>
            <p>
              We take reasonable precautions to protect the information you share with us. Our
              website is served over HTTPS, which encrypts data in transit. However, no method of
              transmission over the internet is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our website and services are intended for adults. We do not knowingly collect personal
              information from children under the age of 13. If you believe a child has submitted
              information through our website, please contact us and we will delete it promptly.
            </p>

            <h2>10. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request a copy of the personal information we hold about you.</li>
              <li>Ask us to correct any information that is inaccurate or out of date.</li>
              <li>
                Ask us to delete your personal information, where we are not required by law to
                keep it.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details in the section
              below and we will respond as promptly as we can.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our
              practices or for legal reasons. When we do, we will update the "Last updated" date at
              the top of this page. We encourage you to check back occasionally if you would like to
              stay informed.
            </p>

            <h2>12. Contact Us About Privacy</h2>
            <p>
              If you have any questions about this privacy policy, how we handle your personal data,
              or would like to exercise any of your rights, please get in touch:
            </p>
          </div>

          {/* Contact card */}
          <div className="mt-6 rounded-xl bg-gray-900 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
              Privacy Enquiries
            </p>
            <p className="text-white font-extrabold text-lg mb-5">
              24/7 Recovery and Roadside Assistance
            </p>
            <div className="space-y-3">
              <a
                href="mailto:recoveryandroadsideassistance@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-red-500 shrink-0" />
                recoveryandroadsideassistance@gmail.com
              </a>
              <a
                href="tel:+923269751717"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                0326 9751717
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
