import type { Metadata } from "next";
import { Truck } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Flatbed Car Recovery & Towing Across Pakistan" },
  description:
    "Safe flatbed car recovery and towing in Islamabad, Rawalpindi, Lahore & Murree. Ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
  alternates: { canonical: "/services/flatbed-towing" },
  openGraph: {
    title: "24/7 Flatbed Car Recovery & Towing Across Pakistan",
    description:
      "Safe flatbed car recovery and towing in Islamabad, Rawalpindi, Lahore & Murree. Ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
    url: "https://roadrecoveryservice.com/services/flatbed-towing",
    images: [{ url: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=1200&q=80", alt: "Flatbed tow truck loading a car for safe transport" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Flatbed Car Recovery & Towing Across Pakistan",
    description:
      "Safe flatbed car recovery and towing in Islamabad, Rawalpindi, Lahore & Murree. Ideal for AWD, luxury, and low-clearance vehicles. Available 24/7 with fast dispatch.",
    images: ["https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=1200&q=80"],
  },
};

export default function FlatbedTowingPage() {
  return (
    <ServicePage
      title="Flatbed Car Recovery & Towing Across Pakistan"
      shortTitle="Flatbed Recovery & Towing"
      slug="flatbed-towing"
      tagline="Your car's front end is smashed, the axle looks bent, and some random bystander is suggesting you just drag it with a rope. No. You need a flatbed. All four wheels off the ground, zero extra damage."
      description="Some vehicles can't be dragged. Maybe the front end is crumpled from a collision on GT Road. Maybe your AWD Prado's transfer case will be destroyed by wheel-lift towing. Maybe your lowered Honda Civic will scrape every speed bump between here and the workshop. That's what flatbed recovery is for. We load your entire car onto a flat platform. All four wheels completely off the road. No drivetrain stress, no scraping, no making a bad situation worse. We use soft straps and wheel nets, not chains, so your paint and body stay intact. Luxury car, sports car, motorcycle, damaged wreck, doesn't matter. If it needs to be lifted, not dragged, this is the service you call."
      image="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
      imageAlt="Flatbed tow truck loading a car for safe transport"
      icon={Truck}
      features={[
        "All four wheels off the ground, zero drivetrain stress",
        "Ideal for AWD, 4WD, and all-wheel-drive vehicles",
        "Safe for luxury, exotic, and sports cars",
        "Handles lowered vehicles and low ground-clearance cars",
        "Accommodates motorcycles, classic cars, and antiques",
        "Soft straps and wheel net tie-downs for damage-free loading",
        "Available 24/7 with fast dispatch",
      ]}
      process={[
        {
          step: "Call or Contact Us",
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
      price={8000}
      relatedServices={[
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Winch Out Service", href: "/services/winch-out" },
        { title: "Tyre Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
