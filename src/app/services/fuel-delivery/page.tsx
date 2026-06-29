import type { Metadata } from "next";
import { Fuel } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Emergency Fuel Delivery in Islamabad & Rawalpindi | 24/7",
  description:
    "Out of fuel in Islamabad or Rawalpindi? We deliver petrol or diesel directly to your location 24/7. Fast, safe emergency fuel delivery service.",
  alternates: { canonical: "/services/fuel-delivery" },
};

export default function FuelDeliveryPage() {
  return (
    <ServicePage
      title="Emergency Fuel Delivery in Islamabad & Rawalpindi"
      shortTitle="Emergency Fuel Delivery"
      tagline="Run out of petrol or diesel? We bring fuel directly to your location — no walking required."
      description="Running out of fuel happens to everyone at some point. Whether the gauge was inaccurate, you misjudged the distance, or you were distracted — we're not here to judge. We're here to help. Our fuel delivery service brings petrol or diesel directly to your location so you can get to the nearest petrol/CNG station without leaving your vehicle unattended or walking along a dangerous roadside."
      image="https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=800&q=80"
      icon={Fuel}
      features={[
        "Petrol (regular and high-octane) and diesel delivery",
        "Enough fuel to reach the nearest petrol/CNG station safely",
        "You never have to leave your vehicle or walk along a busy road",
        "Available in parking lots, highways, roadsides, and more",
        "Fast dispatch — technician arrives in ~30 minutes",
        "Available 24 hours, 7 days a week",
        "Safe fuel handling by trained professionals",
      ]}
      process={[
        {
          step: "Call and Tell Us Your Fuel Type",
          desc: "Call 0326 9751717 and let us know whether your vehicle takes petrol or diesel. Getting this right is important.",
        },
        {
          step: "Give Us Your Location",
          desc: "Share your exact location — street address, mile marker, or nearest landmark. If you're unsure, describe what you see and we'll find you.",
        },
        {
          step: "Stay Safe While You Wait",
          desc: "Turn on your hazard lights, stay inside your vehicle if it's safe to do so, and wait for our technician to arrive.",
        },
        {
          step: "Fuel Delivered to Your Tank",
          desc: "Our technician arrives and safely transfers the fuel into your tank. We'll let you know how much was delivered and what you owe.",
        },
        {
          step: "Confirm Your Car Starts",
          desc: "We wait while you start the vehicle to confirm it's running before we leave. We'll also point you toward the nearest petrol/CNG station.",
        },
      ]}
      faqItems={[
        {
          q: "How much fuel do you bring?",
          a: "We typically bring enough fuel to get your vehicle to the nearest petrol/CNG station safely — usually 5–10 litres. The fuel cost is separate from the service fee.",
        },
        {
          q: "What if I put the wrong fuel in my car?",
          a: "If you've accidentally put diesel in a petrol car (or vice versa), do not start the vehicle. Call us and we can help coordinate a drain and flush service.",
        },
        {
          q: "Do you deliver diesel?",
          a: "Yes. We carry both petrol and diesel. Make sure to tell us which one your vehicle requires when you call.",
        },
      ]}
      relatedServices={[
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "Tire Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
