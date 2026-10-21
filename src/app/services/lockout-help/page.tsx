import type { Metadata } from "next";
import { Lock } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Expert Car Lockout Help Across Pakistan" },
  description:
    "Locked out of your car? Our 24/7 team provides fast, non-destructive vehicle lockout assistance in Islamabad, Rawalpindi, Lahore & Murree for all car models.",
  alternates: { canonical: "/services/lockout-help" },
  openGraph: {
    title: "24/7 Expert Car Lockout Help Across Pakistan",
    description:
      "Locked out of your car? Our 24/7 team provides fast, non-destructive vehicle lockout assistance in Islamabad, Rawalpindi, Lahore & Murree for all car models.",
    url: "https://roadrecoveryservice.com/services/lockout-help",
    images: [{ url: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1200&q=80", alt: "Technician using non-destructive tools to unlock a car door" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Expert Car Lockout Help Across Pakistan",
    description:
      "Locked out of your car? Our 24/7 team provides fast, non-destructive vehicle lockout assistance in Islamabad, Rawalpindi, Lahore & Murree for all car models.",
    images: ["https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1200&q=80"],
  },
};

export default function LockoutHelpPage() {
  return (
    <ServicePage
      title="Car Lockout Help Across Pakistan"
      shortTitle="Car Lockout Help"
      slug="lockout-help"
      tagline="Your toddler is in the back seat. The doors are locked. It's 45 degrees in Lahore and the car is sitting in full sun. Every second feels like a minute. Call us — we're already moving."
      description="You stepped out for one second. The door closed. The keys are on the seat and your child is strapped in the car seat, face getting red. Or maybe it's simpler — you locked yourself out in F-8 basement parking at midnight and the lot is empty. Either way, that sinking feeling is the same. Our lockout specialists reach you with non-destructive entry tools that open your car without breaking a window or scratching the paint. Kids or pets locked inside? Tell us when you call — those calls jump to the front of the line. We've opened cars in DHA Lahore in 45-degree heat, outside wedding halls in Bahria Town at 1am, and in Centaurus parking where your phone signal barely works. One call to 0326 9751717. We get you back in."
      image="https://images.unsplash.com/photo-1730514785075-b065c757b653?w=800&q=80"
      imageAlt="Technician using non-destructive tools to unlock a car door"
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
      price={2000}
      relatedServices={[
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
