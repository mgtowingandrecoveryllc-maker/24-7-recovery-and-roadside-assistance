import type { Metadata } from "next";
import { Truck } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Flatbed Car Recovery & Towing in Islamabad & Rawalpindi" },
  description:
    "Safe flatbed car recovery and towing in Islamabad and Rawalpindi — ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
  alternates: { canonical: "/services/flatbed-towing" },
  openGraph: {
    title: "24/7 Flatbed Car Recovery & Towing in Islamabad & Rawalpindi",
    description:
      "Safe flatbed car recovery and towing in Islamabad and Rawalpindi — ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
    url: "https://roadrecoveryservice.com/services/flatbed-towing",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Flatbed Car Recovery & Towing in Islamabad & Rawalpindi",
    description:
      "Safe flatbed car recovery and towing in Islamabad and Rawalpindi — ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
    images: ["/logo.png"],
  },
};

export default function FlatbedTowingPage() {
  return (
    <ServicePage
      title="Flatbed Car Recovery & Towing in Islamabad & Rawalpindi"
      shortTitle="Flatbed Recovery & Towing"
      tagline="The safest way to recover and transport your vehicle — all four wheels completely off the ground."
      description="Flatbed towing is widely considered the gold standard for vehicle transport. Unlike hook-and-chain or wheel-lift towing, a flatbed carrier loads your entire vehicle onto a flat platform, keeping all four wheels completely off the road. This eliminates drivetrain stress, prevents tire wear, and protects the undercarriage — making it the recommended method for AWD and 4WD vehicles, luxury and sports cars, lowered vehicles, motorcycles, and any vehicle that cannot be towed on its own wheels."
      image="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
      icon={Truck}
      features={[
        "All four wheels off the ground — zero drivetrain stress",
        "Ideal for AWD, 4WD, and all-wheel-drive vehicles",
        "Safe for luxury, exotic, and sports cars",
        "Handles lowered vehicles and low ground-clearance cars",
        "Accommodates motorcycles, classic cars, and antiques",
        "Soft straps and wheel net tie-downs for damage-free loading",
        "Available 24/7 with fast dispatch",
      ]}
      process={[
        {
          step: "Call or Book Online",
          desc: "Reach our dispatch line at 0326 9751717. Describe your vehicle type and location so we can confirm a flatbed is the right solution.",
        },
        {
          step: "Flatbed Dispatched",
          desc: "We send the nearest available flatbed truck. You'll receive an ETA and driver information immediately.",
        },
        {
          step: "Vehicle Inspection",
          desc: "Our driver inspects and photographs your vehicle before loading to document its condition prior to transport.",
        },
        {
          step: "Careful Loading",
          desc: "Your vehicle is driven or winched onto the flatbed and secured with soft straps and wheel nets at all four corners.",
        },
        {
          step: "Safe Delivery",
          desc: "We transport your vehicle to your destination and unload it with the same care used during loading.",
        },
      ]}
      faqItems={[
        {
          q: "When should I choose flatbed over wheel-lift towing?",
          a: "Choose flatbed for AWD/4WD vehicles, luxury and sports cars, lowered vehicles, cars with transmission issues, and any vehicle with front/rear damage. If you're unsure, we'll recommend the right method.",
        },
        {
          q: "Can you tow my motorcycle on a flatbed?",
          a: "Yes. Our flatbeds can accommodate most motorcycles using proper wheel chock and tie-down systems to keep them stable and secure during transport.",
        },
        {
          q: "Will loading my vehicle on the flatbed cause any damage?",
          a: "We use soft straps and proper loading angles to prevent scratches, scrapes, or damage. Vehicles with very low clearance use extended ramps for safe loading.",
        },
      ]}
      relatedServices={[
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Winch Out Service", href: "/services/winch-out" },
        { title: "Tire Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
