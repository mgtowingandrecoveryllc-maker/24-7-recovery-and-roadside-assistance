import type { Metadata } from "next";
import { Wind } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Tyre Air Refill Service in Islamabad & Rawalpindi" },
  description:
    "Low tyre pressure? Our mobile tyre air refill service comes to your location in Islamabad & Rawalpindi for just Rs. 1,500. Available 24/7. Call 0326 9751717.",
  alternates: { canonical: "/services/tyre-air-refill" },
  openGraph: {
    title: "24/7 Tyre Air Refill Service in Islamabad & Rawalpindi",
    description:
      "Low tyre pressure? Our mobile tyre air refill service comes to your location in Islamabad & Rawalpindi for just Rs. 1,500. Available 24/7. Call 0326 9751717.",
    url: "https://roadrecoveryservice.com/services/tyre-air-refill",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Tyre Air Refill Service in Islamabad & Rawalpindi",
    description:
      "Low tyre pressure? Our mobile tyre air refill service comes to your location in Islamabad & Rawalpindi for just Rs. 1,500. Available 24/7. Call 0326 9751717.",
    images: ["/logo.png"],
  },
};

export default function TyreAirRefillPage() {
  return (
    <ServicePage
      title="24/7 Tyre Air Refill Service in Islamabad & Rawalpindi"
      shortTitle="Tyre Air Refill Service"
      tagline="Low tyre pressure? Our mobile air refill service comes to you — fast, safe, and available 24/7 across Islamabad & Rawalpindi."
      description="Driving on under-inflated tyres is more than a minor inconvenience — it's a genuine safety risk. Low tyre pressure reduces your grip on wet or uneven roads, increases braking distance, causes uneven and premature tyre wear, and can noticeably increase your fuel consumption. Our tyre air refill (tyre pressure top-up) service brings a technician with a calibrated air compressor directly to your location — home, office, or roadside — anywhere in Islamabad & Rawalpindi, 24 hours a day. We check all four tyres against your vehicle manufacturer's recommended PSI and top them up to the correct pressure on the spot, for a flat rate of just Rs. 1,500 — no hidden charges."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      icon={Wind}
      features={[
        "All four tyres checked & inflated to the correct PSI",
        "Calibrated compressor for accurate, consistent pressure",
        "Flat rate: Rs. 1,500 — no hidden charges",
        "We come to you — home, office, or roadside",
        "Improves fuel efficiency and extends tyre life",
        "Reduces risk of blowouts and uneven wear",
        "Available 24 hours, 7 days a week",
      ]}
      process={[
        {
          step: "Call Our Dispatch Line",
          desc: "Call 0326 9751717 and share your location. Let us know your vehicle type so we bring the right equipment.",
        },
        {
          step: "Technician Dispatched",
          desc: "We send the nearest available technician with a calibrated air compressor and pressure gauge.",
        },
        {
          step: "Pressure Check",
          desc: "We check all four tyres (and spare, if accessible) against your vehicle's recommended PSI, found on the driver's door frame or owner's manual.",
        },
        {
          step: "Tyres Topped Up",
          desc: "We inflate or release air as needed to bring every tyre to the correct pressure.",
        },
        {
          step: "Final Verification",
          desc: "We re-check each tyre with the gauge to confirm accurate pressure before we leave — you're safely back on the road in minutes.",
        },
      ]}
      faqItems={[
        {
          q: "Why does correct tyre pressure matter?",
          a: "Correct tyre pressure keeps you safe on the road — it improves grip and braking distance, prevents uneven and premature tyre wear, and can meaningfully improve your fuel efficiency. Under-inflated tyres also run hotter, which increases the risk of a blowout, especially on long or fast drives.",
        },
        {
          q: "When should I get my tyres checked or refilled?",
          a: "Check your tyre pressure at least once a month, before long trips, and whenever the weather changes significantly (pressure drops in colder weather). You should also call us if your dashboard shows a low tyre pressure warning, if a tyre looks visibly low, or if the car starts pulling to one side.",
        },
        {
          q: "How much does tyre air refill cost?",
          a: "Our tyre air refill service is a flat rate of Rs. 1,500 for all four tyres, with no hidden charges. For a full breakdown of our rates across all services, visit our pricing page.",
        },
        {
          q: "Do you come to my exact location?",
          a: "Yes. We bring a calibrated compressor directly to you — at home, at work, or on the roadside — anywhere across Islamabad & Rawalpindi, 24 hours a day.",
        },
      ]}
      relatedServices={[
        { title: "Jump Start Service", href: "/services/jumpstart" },
        { title: "Tyre Change Service", href: "/services/tire-change" },
        { title: "Pricing", href: "/pricing" },
        { title: "Contact Us", href: "/contact" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
