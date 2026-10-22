import type { Metadata } from "next";
import { Fuel } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Emergency Fuel Delivery Across Pakistan" },
  description:
    "Run out of petrol or diesel? We deliver fuel directly to your location in Islamabad, Rawalpindi, Lahore & Murree so you never have to walk along a dangerous roadside.",
  alternates: { canonical: "/services/fuel-delivery" },
  openGraph: {
    title: "24/7 Emergency Fuel Delivery Across Pakistan",
    description:
      "Run out of petrol or diesel? We deliver fuel directly to your location in Islamabad, Rawalpindi, Lahore & Murree so you never have to walk along a dangerous roadside.",
    url: "https://roadrecoveryservice.com/services/fuel-delivery",
    images: [{ url: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=1200&q=80", alt: "Emergency fuel delivery canister being carried to a stranded vehicle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Fuel Delivery Across Pakistan",
    description:
      "Run out of petrol or diesel? We deliver fuel directly to your location in Islamabad, Rawalpindi, Lahore & Murree so you never have to walk along a dangerous roadside.",
    images: ["https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=1200&q=80"],
  },
};

export default function FuelDeliveryPage() {
  return (
    <ServicePage
      title="Emergency Fuel Delivery Across Pakistan"
      shortTitle="Emergency Fuel Delivery"
      slug="fuel-delivery"
      tagline="Your fuel gauge said 50km left. It lied. Now you're coasting to a stop on the Islamabad Expressway with nothing around but darkness and the sound of trucks. We bring the fuel to you."
      description="The needle was hovering, but you thought you'd make it. Then the engine stuttered, the power steering went heavy, and now you're sitting on the shoulder of a highway with an empty tank and no petrol pump in sight. Maybe the CNG stations were all dry and you burned through petrol faster than planned. Maybe the gauge was just wrong. Either way, you're stuck, and walking along a busy road with a jerry can is the last thing you should do. Call 0326 9751717. We bring petrol or diesel straight to your car, pour it in, wait until you start the engine, and point you to the nearest station. You never have to leave your vehicle."
      image="https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=800&q=80"
      imageAlt="Emergency fuel delivery canister being carried to a stranded vehicle"
      icon={Fuel}
      features={[
        "Petrol (regular and high-octane) and diesel delivery",
        "Enough fuel to reach the nearest petrol/CNG station safely",
        "You never have to leave your vehicle or walk along a busy road",
        "Available in parking lots, highways, roadsides, and more",
        "Fast dispatch. Technician arrives in ~30 minutes",
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
          desc: "Share your exact location: street address, km marker, or nearest landmark. If you're unsure, describe what you see and we'll find you.",
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
          a: "We typically bring enough fuel to get your vehicle to the nearest petrol/CNG station safely, usually 5–10 litres. The fuel cost is separate from the service fee.",
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
      price={2000}
      relatedServices={[
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "Tyre Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
