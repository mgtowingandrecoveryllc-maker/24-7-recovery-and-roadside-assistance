import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Accident Towing & Recovery Across Pakistan" },
  description:
    "Emergency accident recovery & towing in Islamabad, Rawalpindi, Lahore & Murree. 30-min response, flatbed & wheel-lift available. Call 0326 9751717 anytime.",
  alternates: { canonical: "/services/accident-towing" },
  openGraph: {
    title: "24/7 Accident Towing & Recovery Across Pakistan",
    description:
      "Emergency accident recovery & towing in Islamabad, Rawalpindi, Lahore & Murree. 30-min response, flatbed & wheel-lift available. Call 0326 9751717 anytime.",
    url: "https://roadrecoveryservice.com/services/accident-towing",
    images: [{ url: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=1200&q=80", alt: "Emergency accident recovery crew securing a damaged vehicle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Accident Towing & Recovery Across Pakistan",
    description:
      "Emergency accident recovery & towing in Islamabad, Rawalpindi, Lahore & Murree. 30-min response, flatbed & wheel-lift available. Call 0326 9751717 anytime.",
    images: ["https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=1200&q=80"],
  },
};

export default function AccidentTowingPage() {
  return (
    <ServicePage
      title="Emergency Car Recovery & Accident Towing Across Pakistan"
      shortTitle="Accident Recovery & Towing"
      slug="accident-towing"
      tagline="You've just been hit. Your hands are shaking. The other driver is arguing. Police are on the way. Your car is blocking traffic and it needs to move NOW. Call us. We handle the rest."
      description="Everything just happened at once. The impact, the airbags, the honking behind you. You're standing on the road trying to think straight while traffic backs up and someone is taking photos of your number plate. The police want the road cleared. Your car can't drive. You need it moved. Carefully, properly, and right now. Call 0326 9751717. We dispatch a recovery truck immediately, work alongside police and first responders at the scene, and get your damaged vehicle safely onto a flatbed or wheel-lift without making anything worse. We take it wherever you need: your mechanic, a body shop, or home. If you're on a motorway, call the Motorway Police helpline (130) first for scene safety, then call us for recovery."
      image="https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=800&q=80"
      imageAlt="Emergency accident recovery crew securing a damaged vehicle for towing"
      icon={AlertTriangle}
      features={[
        "Rapid response, average 30 minutes to your location",
        "Safe removal from collision scenes with law enforcement coordination",
        "We provide documentation for insurance claims",
        "Transport to your preferred body shop or storage facility",
        "Flatbed and wheel-lift options for all vehicle types",
        "Available 24 hours, 7 days a week including holidays",
        "Trained, professional, and certified technicians",
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
          desc: "Your vehicle is carefully secured using the appropriate towing equipment, flatbed or wheel-lift, to prevent further damage during transport.",
        },
        {
          step: "Transport to Your Destination",
          desc: "We transport your vehicle to your chosen body shop, dealership, or storage facility. We can help recommend a trusted local shop if needed.",
        },
      ]}
      faqItems={[
        {
          q: "Can you help with my insurance claim?",
          a: "We provide receipts and documentation that you can submit to your insurance company for reimbursement. Have your insurance information ready when you call.",
        },
        {
          q: "Where will you take my vehicle?",
          a: "We take your vehicle wherever you direct us: your preferred body shop, a dealership, your home, or a storage facility. We'll help you decide if you're unsure.",
        },
        {
          q: "Is my vehicle safe with you after an accident?",
          a: "Yes. We handle damaged vehicles carefully. We document the existing condition before transport and take every precaution to prevent further damage.",
        },
      ]}
      price={8000}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Winch Out Service", href: "/services/winch-out" },
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
