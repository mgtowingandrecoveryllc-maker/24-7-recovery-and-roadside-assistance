"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+923269751717"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 ring-4 ring-red-600/30"
      aria-label="Call 0326 9751717"
    >
      <Phone className="h-6 w-6 animate-pulse shrink-0" />
      <div className="leading-tight">
        <div className="text-xs font-medium text-red-200">Call Now · 24/7</div>
        <div className="text-sm font-extrabold">0326 9751717</div>
      </div>
    </a>
  );
}
