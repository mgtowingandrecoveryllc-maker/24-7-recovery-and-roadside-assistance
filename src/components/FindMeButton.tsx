"use client";

import { useState } from "react";
import { Phone, MapPin, X, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type Step = "idle" | "form" | "locating" | "success" | "denied" | "error";

interface FindMeButtonProps {
  variant?: "hero" | "contact";
}

export default function FindMeButton({ variant = "hero" }: FindMeButtonProps) {
  const [step, setStep] = useState<Step>("idle");
  const [phone, setPhone] = useState("");

  function open() {
    setStep("form");
  }

  function close() {
    setStep("idle");
    setPhone("");
  }

  function locate() {
    if (!phone.trim()) return;
    setStep("locating");

    if (!navigator.geolocation) {
      setStep("error");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        const waText = encodeURIComponent(
          `I'm stranded and need help!\n\nMy location: ${mapsLink}\n\nMy phone number: ${phone.trim()}`
        );

        sendEmailNotification({ phone: phone.trim(), mapsLink });
        window.open(`https://wa.me/923194547038?text=${waText}`, "_blank");
        setStep("success");
      },
      (err) => {
        setStep(err.code === err.PERMISSION_DENIED ? "denied" : "error");
      },
      { timeout: 15000, enableHighAccuracy: true }
    );
  }

  const btnClass =
    variant === "hero"
      ? "inline-flex items-center justify-center gap-2 border-2 border-white bg-white/10 hover:bg-white hover:text-gray-900 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
      : "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm w-full";

  return (
    <>
      {/* Trigger button */}
      <button onClick={open} className={btnClass}>
        <MapPin className={variant === "hero" ? "h-5 w-5" : "h-4 w-4"} />
        📍 Find My Location
      </button>

      {/* Modal overlay */}
      {step !== "idle" && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="font-extrabold text-lg">I&apos;m Stranded — Find Me</span>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {/* ── STEP: form ─────────────────────────────────────────────── */}
              {step === "form" && (
                <>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    Enter your number below. We&apos;ll detect your exact GPS location and send
                    it to our dispatch team via WhatsApp — so help reaches you fast.
                  </p>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && locate()}
                    placeholder="e.g. 0326 9751717"
                    className="w-full border-2 border-gray-300 focus:border-red-500 rounded-lg px-4 py-3 text-base text-gray-900 bg-white placeholder:text-gray-400 outline-none transition-colors mb-4"
                    autoFocus
                  />
                  <button
                    onClick={locate}
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    <MapPin className="h-5 w-5" />
                    Share My Location Now
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Your browser will ask for location permission — tap{" "}
                    <strong>Allow</strong> when prompted.
                  </p>
                </>
              )}

              {/* ── STEP: locating ─────────────────────────────────────────── */}
              {step === "locating" && (
                <div className="text-center py-10">
                  <Loader2 className="h-14 w-14 text-red-600 animate-spin mx-auto mb-4" />
                  <p className="font-bold text-gray-900 text-lg mb-1">
                    Detecting your location…
                  </p>
                  <p className="text-gray-500 text-sm">
                    Allow location access when your browser asks.
                  </p>
                </div>
              )}

              {/* ── STEP: success ──────────────────────────────────────────── */}
              {step === "success" && (
                <div className="text-center py-6">
                  <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-4" />
                  <p className="font-extrabold text-gray-900 text-xl mb-2">Location Sent!</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Your location and number have been sent to our team via WhatsApp. Someone
                    is being dispatched to you now.
                  </p>
                  <a
                    href="tel:+923269751717"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Also Call — 0326 9751717
                  </a>
                </div>
              )}

              {/* ── STEP: denied ───────────────────────────────────────────── */}
              {step === "denied" && (
                <div className="text-center py-6">
                  <AlertCircle className="h-14 w-14 text-yellow-500 mx-auto mb-4" />
                  <p className="font-extrabold text-gray-900 text-xl mb-2">
                    Location Access Blocked
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Your browser blocked location access. You can enable it in your phone&apos;s
                    browser settings, or just call us — we&apos;ll guide you from there.
                  </p>
                  <a
                    href="tel:+923269751717"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now — 0326 9751717
                  </a>
                </div>
              )}

              {/* ── STEP: error ────────────────────────────────────────────── */}
              {step === "error" && (
                <div className="text-center py-6">
                  <AlertCircle className="h-14 w-14 text-red-500 mx-auto mb-4" />
                  <p className="font-extrabold text-gray-900 text-xl mb-2">
                    Couldn&apos;t Get Location
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    We couldn&apos;t detect your location. Please call us and describe where
                    you are — we&apos;ll find you.
                  </p>
                  <a
                    href="tel:+923269751717"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now — 0326 9751717
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── EMAIL SERVICE INTEGRATION ────────────────────────────────────────────────
// Sends a location alert to recoveryandroadsideassistance@gmail.com.
// WhatsApp dispatch above works fully without this — email is a secondary channel.
//
// To enable, choose one option and uncomment:
//
// OPTION A — EmailJS (browser-side, no backend needed)
//   1. Sign up at https://emailjs.com, create a service + email template
//   2. npm install @emailjs/browser
//   3. Add to .env.local:
//        NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
//
// OPTION B — Next.js API Route (server-side; use with Resend, Nodemailer, etc.)
//   1. Create src/app/api/send-location/route.ts with your mail logic
//   2. Store secrets in .env.local (without NEXT_PUBLIC_ prefix)
// ─────────────────────────────────────────────────────────────────────────────
async function sendEmailNotification({
  phone,
  mapsLink,
}: {
  phone: string;
  mapsLink: string;
}) {
  // ── OPTION A: EmailJS ──────────────────────────────────────────────────────
  // import emailjs from "@emailjs/browser";
  // await emailjs.send(
  //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //   {
  //     to_email:        "recoveryandroadsideassistance@gmail.com",
  //     subject:         "Stranded Customer — Location Shared",
  //     maps_link:       mapsLink,
  //     customer_phone:  phone,
  //   },
  //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  // );

  // ── OPTION B: API Route ────────────────────────────────────────────────────
  // await fetch("/api/send-location", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     to:      "recoveryandroadsideassistance@gmail.com",
  //     subject: "Stranded Customer — Location Shared",
  //     body:    `Location: ${mapsLink}\nCustomer phone: ${phone}`,
  //   }),
  // });
  // ──────────────────────────────────────────────────────────────────────────

  // Dev log so you can verify the payload is correct before wiring the service:
  if (process.env.NODE_ENV === "development") {
    console.log("[FindMe] Email payload ready:", {
      to: "recoveryandroadsideassistance@gmail.com",
      mapsLink,
      phone,
    });
  }
}
