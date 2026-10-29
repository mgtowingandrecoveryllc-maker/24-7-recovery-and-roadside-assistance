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
      tagline="You're in DHA Phase 5 and your front-left tyre looks soft. Really soft. The nearest petrol pump with a working air machine is 20 minutes away, if they even have one. We'll come to you instead."
      description="A technician with a compressor and pressure gauge comes to your exact spot: your driveway, office car park, or the roadside. We check all four tyres against your car's recommended PSI and top them up right there. Rs. 1,500 flat. No hunting for a working air pump. No guessing the pressure. No risk of a blowout because you drove on a soft tyre too long."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      imageAlt="Portable air compressor inflating a car tyre at the roadside"
      icon={Wind}
      features={[
        "All four tyres checked & inflated to the correct PSI",
        "Compressor and pressure gauge for accurate inflation",
        "Flat rate: Rs. 1,500, no hidden charges",
        "We come to you. Home, office, or roadside",
        "Improves fuel efficiency and extends tyre life",
        "Reduces risk of blowouts and uneven wear",
        "Available 24 hours, 7 days a week",
      ]}
      process={[
        {
          step: "Call 0326 9751717",
          desc: "Tell us where you are. We send a technician with a compressor and pressure gauge.",
        },
        {
          step: "All Four Tyres Set to Spec",
          desc: "We check every tyre against your vehicle's recommended PSI, inflate or release as needed, and verify with the gauge before we leave.",
        },
      ]}
      faqItems={[
        {
          q: "Why does correct tyre pressure matter?",
          a: "Correct tyre pressure keeps you safe on the road. It improves grip and braking distance, prevents uneven and premature tyre wear, and can meaningfully improve your fuel efficiency. Under-inflated tyres also run hotter, which increases the risk of a blowout, especially on long or fast drives.",
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
          a: "Yes. We bring a compressor and pressure gauge directly to you, at home, at work, or on the roadside, anywhere in Islamabad, Rawalpindi, Lahore & Murree, 24 hours a day.",
        },
      ]}
      price={1500}
      relatedServices={[
        { title: "Jump Start Service", href: "/services/jumpstart" },
        { title: "Tyre Change Service", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
