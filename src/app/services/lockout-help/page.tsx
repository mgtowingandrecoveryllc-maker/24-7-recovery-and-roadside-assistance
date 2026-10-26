import type { Metadata } from "next";
import { Lock } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Lockout Help Across Pakistan" },
  description:
    "Locked out of your car? Our 24/7 team provides fast, non-destructive vehicle lockout assistance in Islamabad, Rawalpindi, Lahore & Murree for all car models.",
  alternates: { canonical: "/services/lockout-help" },
  openGraph: {
    title: "24/7 Car Lockout Help Across Pakistan",
    description:
      "Locked out of your car? Our 24/7 team provides fast, non-destructive vehicle lockout assistance in Islamabad, Rawalpindi, Lahore & Murree for all car models.",
    url: "https://roadrecoveryservice.com/services/lockout-help",
    images: [{ url: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1200&q=80", alt: "Technician using non-destructive tools to unlock a car door" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Lockout Help Across Pakistan",
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
      tagline="Your toddler is in the back seat. The doors are locked. It's 45 degrees in Lahore and the car is sitting in full sun. Every second feels like a minute. Call us. We're already moving."
      description="You stepped out for one second. The door closed. The keys are on the seat and your child is strapped in the car seat, face getting red. Or maybe it's simpler. You locked yourself out in a basement car park after a late meeting and the lot is empty. Either way, you need someone fast. Our lockout specialists reach you with non-destructive entry tools that open your car without breaking a window or scratching the paint. Kids or pets locked inside? Tell us when you call. Those calls jump to the front of the line. Whether it's a shopping mall car park in peak summer or a quiet residential street at 3am, we show up and get you back in. One call to 0326 9751717."
      image="https://images.unsplash.com/photo-1730514785075-b065c757b653?w=800&q=80"
      imageAlt="Technician using non-destructive tools to unlock a car door"
      icon={Lock}
      features={[
        "Non-destructive entry, no window breaking or lock damage",
        "Works on most car, truck, and SUV models",
        "Handles standard key locks and modern electronic locks",
        "Fast response. Technician on-site in ~30 minutes",
        "Quick, quiet, no fuss",
        "Available 24 hours, 7 days a week",
        "Safe for families, children, and pets locked inside",
      ]}
      process={[
        {
          step: "Call Us Immediately",
          desc: "Dial 0326 9751717. If a child or pet is locked inside, tell us right away. We'll prioritise your call and send someone immediately.",
        },
        {
          step: "Provide Your Location and Vehicle Info",
          desc: "Let the dispatcher know your exact location and vehicle make/model so the technician comes prepared with the right tools.",
        },
        {
          step: "Technician Arrives",
          desc: "A lockout technician arrives at your location, usually within 30 minutes, with a slim-jim and air-wedge kit.",
        },
        {
          step: "Vehicle Opened Safely",
          desc: "Using a slim-jim or air-wedge, we open your vehicle door without breaking glass or scratching paint.",
        },
        {
          step: "You're on Your Way",
          desc: "Once you're back in your vehicle, we make sure everything is working properly before we leave.",
        },
      ]}
      faqItems={[
        {
          q: "Will you damage my car to get in?",
          a: "No. We use a slim-jim and air-wedge that work with your existing lock mechanism. No broken glass, no scratched paint, no damage.",
        },
        {
          q: "Can you unlock a newer car with a push-button start?",
          a: "Yes, we can unlock most modern vehicles including push-button start models. The door lock mechanism is separate from the ignition system.",
        },
        {
          q: "What if my key fob battery is dead?",
          a: "If your fob is dead and you can't unlock with the physical key, we can still get you in with our slim-jim and air-wedge. We can also advise on fob battery replacement.",
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
