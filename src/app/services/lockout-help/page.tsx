import type { Metadata } from "next";
import { Lock } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Car Lockout Help in Islamabad & Rawalpindi | 24/7",
  description:
    "Locked out of your car in Islamabad or Rawalpindi? Our 24/7 team provides fast, non-destructive vehicle lockout assistance for all car models.",
  alternates: { canonical: "/services/lockout-help" },
  openGraph: {
    title: "Car Lockout Help in Islamabad & Rawalpindi | 24/7",
    description:
      "Locked out of your car in Islamabad or Rawalpindi? Our 24/7 team provides fast, non-destructive vehicle lockout assistance for all car models.",
    url: "https://roadrecoveryservice.com/services/lockout-help",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Lockout Help in Islamabad & Rawalpindi | 24/7",
    description:
      "Locked out of your car in Islamabad or Rawalpindi? Our 24/7 team provides fast, non-destructive vehicle lockout assistance for all car models.",
    images: ["/logo.png"],
  },
};

export default function LockoutHelpPage() {
  return (
    <ServicePage
      title="Car Lockout Help in Islamabad & Rawalpindi"
      shortTitle="Car Lockout Help"
      tagline="Locked out of your car in Islamabad or Rawalpindi? We'll have you back in fast — no damage guaranteed."
      description="Getting locked out of your vehicle is a frustrating and sometimes frightening experience — especially at night or in an unfamiliar area. Our lockout specialists use professional, non-destructive entry tools to get you back into your vehicle quickly and safely. We never break windows or damage locks. Whether you've locked your keys inside, your key fob battery died, or your lock is malfunctioning, we have the expertise to handle it."
      image="https://images.unsplash.com/photo-1730514785075-b065c757b653?w=800&q=80"
      icon={Lock}
      features={[
        "Non-destructive entry — no window breaking or lock damage",
        "Works on most car, truck, and SUV models",
        "Handles standard key locks and modern electronic locks",
        "Fast response — technician on-site in ~30 minutes",
        "Discreet and professional service",
        "Available 24 hours, 7 days a week",
        "Safe for families, children, and pets locked inside",
      ]}
      process={[
        {
          step: "Call Us Immediately",
          desc: "Dial 0326 9751717. If a child or pet is locked inside, tell us right away — we'll prioritize your call and expedite dispatch.",
        },
        {
          step: "Provide Your Location and Vehicle Info",
          desc: "Let the dispatcher know your exact location and vehicle make/model so the technician comes prepared with the right tools.",
        },
        {
          step: "Technician Arrives",
          desc: "A certified locksmith technician arrives at your location, usually within 30 minutes, with professional entry tools.",
        },
        {
          step: "Vehicle Opened Safely",
          desc: "Using non-destructive slim-jim or air-wedge entry techniques, we open your vehicle door without causing any damage.",
        },
        {
          step: "You're on Your Way",
          desc: "Once you're back in your vehicle, we make sure everything is working properly before we leave.",
        },
      ]}
      faqItems={[
        {
          q: "Will you damage my car to get in?",
          a: "No. We use professional non-destructive entry tools that work with your existing lock mechanism. We do not break windows or use methods that damage your vehicle.",
        },
        {
          q: "Can you unlock a newer car with a push-button start?",
          a: "Yes, we can unlock most modern vehicles including push-button start models. The door lock mechanism is separate from the ignition system.",
        },
        {
          q: "What if my key fob battery is dead?",
          a: "If your fob is dead and you can't unlock with the physical key, we can still get you in using our professional tools. We can also advise on fob battery replacement.",
        },
      ]}
      relatedServices={[
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
