import type { Metadata } from "next";
import { Wind } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Tyre Air Refill Service Across Pakistan" },
  description:
    "Low tyre pressure? We come to you across Pakistan for just Rs. 1,500. 24/7 mobile air refill service. Call 0326 9751717.",
  alternates: { canonical: "/services/tyre-air-refill" },
  openGraph: {
    title: "24/7 Tyre Air Refill Service Across Pakistan",
    description:
      "Low tyre pressure? We come to you across Pakistan for just Rs. 1,500. 24/7 mobile air refill service. Call 0326 9751717.",
    url: "https://roadrecoveryservice.com/services/tyre-air-refill",
    images: [{ url: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", alt: "Portable air compressor inflating a car tyre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Tyre Air Refill Service Across Pakistan",
    description:
      "Low tyre pressure? We come to you across Pakistan for just Rs. 1,500. 24/7 mobile air refill service. Call 0326 9751717.",
    images: ["https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80"],
  },
};

export default function TyreAirRefillPage() {
  return (
    <ServicePage
      title="24/7 Tyre Air Refill Service Across Pakistan"
      shortTitle="Tyre Air Refill Service"
      slug="tyre-air-refill"
      tagline="You're in DHA Phase 5 and your front-left tyre looks soft. Really soft. The nearest petrol pump with a working air machine is 20 minutes away — if they even have one. We'll come to you instead."
      description="You noticed it pulling out of the driveway, or maybe walking back to your car after shopping — one tyre visibly lower than the rest. Not flat enough to stop driving, but flat enough that you know something's wrong. The nearest petrol pump air machine? Either broken, missing the nozzle, or a 20-minute detour you don't have time for. Call us. A technician with a calibrated compressor comes to your exact spot — your driveway, office parking, or the roadside — checks all four tyres against your car's recommended PSI, and tops them up right there. Rs. 1,500 flat. No hunting for a working air pump. No guessing the pressure. No risk of a blowout because you drove on a soft tyre too long."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      imageAlt="Portable air compressor inflating a car tyre at the roadside"
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
          a: "Yes. We bring a calibrated compressor directly to you — at home, at work, or on the roadside — anywhere in Islamabad, Rawalpindi, Lahore & Murree, 24 hours a day.",
        },
      ]}
      price={1500}
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
