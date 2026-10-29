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
      tagline="Your lowered Civic won't clear a speed bump, let alone survive a wheel-lift tow. The body kit is millimetres from the tarmac. You need a flatbed. All four wheels off the ground, zero scraping."
      description="A flatbed keeps all four wheels off the road. Zero drivetrain stress, no scraping, no making a bad situation worse. Choose flatbed for AWD and 4WD vehicles (wheel-lift towing can destroy the transfer case), lowered cars that won't clear speed bumps, luxury and sports cars, motorcycles, and any vehicle with front or rear damage. The car is driven or winched onto the flatbed and strapped down securely. Tell us the vehicle and we'll confirm the approach."
      image="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&q=80"
      imageAlt="Flatbed tow truck loading a car for safe transport"
      icon={Truck}
      features={[
        "All four wheels off the ground, zero drivetrain stress",
        "Ideal for AWD and 4WD vehicles",
        "Safe for luxury, exotic, and sports cars",
        "Handles lowered vehicles and low ground-clearance cars",
        "Accommodates motorcycles, classic cars, and antiques",
        "Secured on the flatbed before it moves",
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
          desc: "Our driver checks your vehicle before loading.",
        },
        {
          step: "Careful Loading",
          desc: "Your vehicle is driven or winched onto the flatbed and strapped down securely.",
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
          a: "Yes. Our flatbeds can accommodate most motorcycles and strap them down securely on the flatbed.",
        },
        {
          q: "Will loading my vehicle on the flatbed cause any damage?",
          a: "The car is driven or winched onto the flatbed and strapped down securely. Tell us if it's lowered or has a body kit and we'll confirm the approach.",
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
