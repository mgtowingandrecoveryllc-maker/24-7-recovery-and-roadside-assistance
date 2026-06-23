"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo lockup */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="rounded-full overflow-hidden bg-white w-12 h-12 shrink-0 shadow-md ring-2 ring-white/10">
              <Image
                src="/logo.png"
                alt="24/7 Recovery and Roadside Assistance"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight whitespace-nowrap">
                <span className="text-red-500">24/7</span>
                <span className="text-white"> RECOVERY</span>
              </div>
              <div className="text-xs font-medium text-gray-400 tracking-wide whitespace-nowrap">
                &amp; Roadside Assistance
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+923269751717"
              className="hidden sm:flex flex-col items-end group"
            >
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5">
                Emergency Line
              </span>
              <div className="flex items-center gap-1.5">
                <Phone className="h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors" />
                <span className="text-white font-extrabold text-base group-hover:text-red-100 transition-colors">
                  0326 9751717
                </span>
              </div>
            </a>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
            >
              Book a Tow
            </Link>
            <button
              className="lg:hidden p-1 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+923269751717"
              className="flex items-center gap-2 px-2 py-2 text-sm text-red-400 font-medium"
            >
              <Phone className="h-4 w-4" />
              0326 9751717
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
