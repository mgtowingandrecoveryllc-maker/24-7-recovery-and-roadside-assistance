import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Accident Towing",
  description:
    "Professional accident towing service available 24/7. We respond fast, work with your insurance, and transport your vehicle safely after a collision.",
};

export default function AccidentTowingPage() {
  return (
    <ServicePage
      title="Accident Towing"
      tagline="Fast, professional towing after a collision — we're on-scene in minutes."
      description="A vehicle accident is one of the most stressful experiences a driver can face. On top of dealing with the immediate aftermath, you also need to get your vehicle safely removed from the scene. Our accident towing team is trained to respond quickly, work safely around crash scenes, and handle your vehicle with the care it deserves. We coordinate with law enforcement, insurance adjusters, and towing destinations so you don't have to."
      image="https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=800&q=80"
      icon={AlertTriangle}
      features={[
        "Rapid response — average 30 minutes to your location",
        "Safe removal from collision scenes with law enforcement coordination",
        "Works with all major insurance providers and adjusters",
        "Transport to your preferred body shop or storage facility",
        "Flatbed and wheel-lift options for all vehicle types",
        "Available 24 hours, 7 days a week including holidays",
        "Fully licensed, insured, and certified technicians",
      ]}
      process={[
        {
          step: "Call Our Dispatch Line",
          desc: "Call 0326 9751717 anytime. A real dispatcher will answer, get your location, and confirm the details of your situation immediately.",
        },
        {
          step: "Truck Dispatched to Your Scene",
          desc: "The nearest available truck is dispatched right away. We'll give you an ETA and the driver's name so you know who to expect.",
        },
        {
          step: "Safe Scene Assessment",
          desc: "Our driver assesses the scene for safety, works alongside first responders if present, and determines the best towing method for your vehicle.",
        },
        {
          step: "Secure Vehicle Hookup",
          desc: "Your vehicle is carefully secured using the appropriate towing equipment — flatbed or wheel-lift — to prevent further damage during transport.",
        },
        {
          step: "Transport to Your Destination",
          desc: "We transport your vehicle to your chosen body shop, dealership, or storage facility. We can help recommend a trusted local shop if needed.",
        },
      ]}
      faqItems={[
        {
          q: "Do you work with my insurance company?",
          a: "Yes. We work with all major insurance carriers. Have your insurance information ready when you call and we can coordinate directly with your provider.",
        },
        {
          q: "Where will you take my vehicle?",
          a: "We take your vehicle wherever you direct us — your preferred body shop, a dealership, your home, or a storage facility. We'll help you decide if you're unsure.",
        },
        {
          q: "Is my vehicle safe with you after an accident?",
          a: "Absolutely. We're fully insured and our drivers are trained to handle damaged vehicles carefully. We document the existing condition before transport.",
        },
      ]}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Winch Out Service", href: "/services/winch-out" },
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
