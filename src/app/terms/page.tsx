import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using 24/7 Recovery and Roadside Assistance — service descriptions, pricing, liability, and your responsibilities as a customer.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Terms &amp; Conditions</h1>
            <p className="text-gray-300 text-lg">
              Please read these terms before using our services or website. By contacting us or
              requesting assistance, you agree to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-12 pb-8 border-b border-gray-100">
            Last updated: 29 June 2026
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              These terms and conditions govern your use of the 24/7 Recovery and Roadside
              Assistance website and the services we provide. By visiting our website, submitting a
              contact or booking request, or requesting any service from us by phone, you agree to
              be bound by these terms. If you do not agree, please do not use our website or
              services.
            </p>
            <p>
              We reserve the right to update these terms at any time. Changes take effect as soon as
              they are published on this page. The "Last updated" date at the top of this page will
              reflect the most recent revision.
            </p>

            <h2>2. About Us</h2>
            <p>
              <strong>24/7 Recovery and Roadside Assistance</strong> is a towing and roadside
              assistance service operating in Islamabad and Rawalpindi, Pakistan. We provide
              emergency and non-emergency vehicle recovery and roadside services to private and
              commercial vehicle owners across the region.
            </p>

            <h2>3. Services</h2>
            <p>We offer the following services, subject to availability and conditions:</p>
            <ul>
              <li>
                <strong>Towing.</strong> Transporting your vehicle from one location to another
                following a breakdown, accident, or other incident. This includes both wheel-lift and
                flatbed towing.
              </li>
              <li>
                <strong>Jump Start.</strong> Using a professional jump starter or jump leads to
                restart a vehicle with a flat or discharged battery.
              </li>
              <li>
                <strong>Tyre Change.</strong> Removing a flat or damaged tyre and fitting your
                vehicle&apos;s spare tyre at the roadside.
              </li>
              <li>
                <strong>Tyre Air Refill.</strong> Inflating your tyres to the correct pressure at
                your location using a calibrated compressor.
              </li>
              <li>
                <strong>Fuel Delivery.</strong> Delivering a supply of petrol or diesel to your
                location if you have run out of fuel.
              </li>
              <li>
                <strong>Lockout Assistance.</strong> Helping you regain entry to your vehicle if
                you have locked your keys inside, using non-destructive entry methods.
              </li>
              <li>
                <strong>Winch-Out and Recovery.</strong> Extracting a vehicle that is stuck in mud,
                sand, a ditch, or other off-road situations using winching equipment.
              </li>
            </ul>
            <p>
              We will make every reasonable effort to provide the service you request. However, we
              reserve the right to refuse or discontinue service where safety concerns, road
              conditions, or operational limitations make it impractical or unsafe to proceed.
            </p>

            <h2>4. Pricing and Payment</h2>
            <p>
              Any prices displayed on our website — including starting rates for jump start, tyre
              change, and air refill — are <strong>estimates only</strong>. The final price for a
              service may vary based on factors including, but not limited to: your location,
              distance from our nearest team, the type and size of vehicle, road or weather
              conditions, and the complexity of the job.
            </p>
            <p>
              We will always aim to give you a clear price before we begin any work. Once you have
              agreed to a quoted price, that is the amount you will be charged for the service
              described, unless circumstances change materially (for example, if additional work is
              required that was not apparent at the outset).
            </p>
            <p>
              Payment is due on completion of the service unless a different arrangement has been
              agreed with us in advance. We accept cash payment. Please confirm accepted payment
              methods with our team when booking if you require an alternative.
            </p>

            <h2>5. Response Times</h2>
            <p>
              Any response times mentioned on our website — including references to a
              &ldquo;10-minute&rdquo; response for nearby areas or an average response time of 30
              minutes — are <strong>estimates only</strong>. Actual arrival times depend on our
              team&apos;s current location, traffic, road conditions, and the accuracy of the
              location information you provide.
            </p>
            <p>
              We make every effort to reach you as quickly as possible, but we cannot guarantee a
              specific arrival time. We are not liable for any loss, cost, or inconvenience caused
              by a delay in our arrival.
            </p>

            <h2>6. Your Responsibilities</h2>
            <p>When you request our services, you agree to:</p>
            <ul>
              <li>
                Provide accurate information about your location, vehicle, and the nature of the
                problem so we can send the right team and equipment.
              </li>
              <li>
                Ensure that the vehicle or location is reasonably accessible for our team and
                equipment to reach safely.
              </li>
              <li>
                Be present at the location, or ensure an authorised person is present, when our
                team arrives.
              </li>
              <li>
                Inform us of any known hazards at or near the location (for example, fuel spills,
                damaged road surfaces, or nearby live traffic).
              </li>
              <li>
                Ensure that any spare tyre, key, or other item required for the service is
                available, where applicable.
              </li>
              <li>
                Not request services for a vehicle you do not own or are not authorised to deal with
                on behalf of the owner.
              </li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              We take reasonable care with your vehicle at all times. However, our liability is
              limited as follows:
            </p>
            <ul>
              <li>
                We are not liable for any pre-existing damage to your vehicle that was present
                before we began work.
              </li>
              <li>
                We are not liable for mechanical failures or further damage arising from a
                pre-existing condition in your vehicle, including battery, tyre, engine, or
                drivetrain issues.
              </li>
              <li>
                We are not liable for any loss of earnings, indirect loss, or consequential loss
                arising from a delay in our arrival or inability to complete a service.
              </li>
              <li>
                In the event that our team causes damage to your vehicle through negligence, our
                liability is limited to the reasonable cost of repairing that specific damage.
              </li>
            </ul>
            <p>
              Nothing in these terms limits or excludes liability for death or personal injury
              caused by our negligence, or for any other liability that cannot be excluded under
              applicable Pakistani law.
            </p>

            <h2>8. Website Use</h2>
            <p>
              Our website is provided for informational purposes and to allow you to contact us. You
              agree not to use the website for any unlawful purpose, to attempt to interfere with
              its operation, or to submit false or misleading information through any form on the
              site.
            </p>
            <p>
              We do our best to keep the information on our website accurate and up to date, but we
              do not guarantee that all content is error-free. Service descriptions, prices, and
              availability are subject to change without notice.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes
              arising from these terms or the services we provide shall be subject to the
              jurisdiction of the courts of Islamabad, Pakistan.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these terms and conditions, please get in touch:
            </p>
          </div>

          {/* Contact card */}
          <div className="mt-6 rounded-xl bg-gray-900 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
              Get in Touch
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
