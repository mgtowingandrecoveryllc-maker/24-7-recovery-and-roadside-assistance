import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Jumpstart Service",
  description:
    "Dead battery? Our 24/7 jumpstart service gets your vehicle running fast. Professional jump-start for cars, trucks, and SUVs.",
};

export default function JumpstartPage() {
  return (
    <ServicePage
      title="Jumpstart Service"
      tagline="Dead battery? We'll get you running again in minutes."
      description="A dead battery can happen at the worst possible time — in a parking lot before work, on the highway at night, or in the middle of nowhere. Our jumpstart service brings a technician directly to your location with a commercial-grade portable jump-starter powerful enough to start virtually any vehicle, including diesel trucks and large SUVs. We'll get your engine running and give you a quick assessment of whether your battery needs replacement."
      image="https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=800&q=80"
      icon={Zap}
      features={[
        "Commercial-grade jump starters for all vehicle sizes",
        "Works on cars, trucks, SUVs, vans, and diesel vehicles",
        "No risk of electrical damage — professional equipment used",
        "Battery condition assessment after jump-start",
        "Available 24 hours, 7 days a week",
        "Fast response to parking lots, roadsides, and driveways",
        "Honest advice — we'll tell you if the battery needs replacement",
      ]}
      process={[
        {
          step: "Call Our Dispatch Line",
          desc: "Call 0326 9751717 and let us know your location and vehicle type. We'll dispatch a technician right away.",
        },
        {
          step: "Stay with Your Vehicle",
          desc: "Remain with your vehicle in a safe location. If you're in a dangerous spot (highway lane, dark area), turn on hazard lights and stay visible.",
        },
        {
          step: "Technician Arrives",
          desc: "Our technician arrives with a professional jump-start unit. We'll verify your vehicle make and model to apply the correct voltage.",
        },
        {
          step: "Jump-Start Applied",
          desc: "We connect the jump-starter following proper safety protocols and start your vehicle.",
        },
        {
          step: "Battery Health Check",
          desc: "Once running, we assess your battery health and let you know if it's likely to fail again soon — no pressure, just honest information.",
        },
      ]}
      faqItems={[
        {
          q: "Why won't my car hold a charge after a jump?",
          a: "If your car starts with a jump but dies again quickly, your battery may be at end of life or your alternator may not be charging it properly. We can advise you on next steps.",
        },
        {
          q: "Can you jumpstart a diesel truck?",
          a: "Yes. Our commercial jump-starters are rated for diesel engines including heavy-duty trucks. Just let us know the vehicle type when you call.",
        },
        {
          q: "Is there any risk of damaging my car's electronics?",
          a: "We use professional equipment with surge protection and follow correct polarity procedures to protect your vehicle's electrical system.",
        },
      ]}
      relatedServices={[
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "Tire Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
