import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const GOOGLE_LISTING_URL = "https://share.google/eqL2kzmwH8jNbufNy";

const serviceLinks = [
  { href: "/services/accident-towing", label: "Accident Towing" },
  { href: "/services/flatbed-towing", label: "Flatbed Towing" },
  { href: "/services/lockout-help", label: "Lockout Help" },
  { href: "/services/jumpstart", label: "Jumpstart Service" },
  { href: "/services/fuel-delivery", label: "Fuel Delivery" },
  { href: "/services/tire-change", label: "Tire Change" },
  { href: "/services/winch-out", label: "Winch Out Service" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="rounded-full overflow-hidden bg-white w-16 h-16 shrink-0 shadow-md ring-2 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="24/7 Recovery and Roadside Assistance"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted 24/7 towing and roadside assistance provider. Fast, reliable, and
              professional service when you need it most.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589899970081"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded transition-colors text-xs font-bold text-gray-300 hover:text-white"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/recoveryroadsideassistance/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded transition-colors text-xs font-bold text-gray-300 hover:text-white"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+923269751717"
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>0326 9751717</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:recoveryandroadsideassistance@gmail.com"
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>recoveryandroadsideassistance@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <span>
                  D01 jasim arcade , acantilado, Bahria Town Way, phase 7 Islamabad, 44011
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <span>Available 24 Hours, 7 Days a Week</span>
              </li>
              <li>
                <a
                  href={GOOGLE_LISTING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <span>Find Us on Google</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 24/7 Recovery and Roadside Assistance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>Licensed &bull; Insured &bull; Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
