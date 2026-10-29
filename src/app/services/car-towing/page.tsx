import type { Metadata } from "next";
import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Towing Service Across Pakistan" },
  description:
    "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree. For breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
  alternates: { canonical: "/services/car-towing" },
  openGraph: {
    title: "24/7 Car Towing Service Across Pakistan",
    description:
      "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree. For breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
    url: "https://roadrecoveryservice.com/services/car-towing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80",
        alt: "Car being loaded onto a tow truck for safe transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Towing Service Across Pakistan",
    description:
      "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree. For breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

export default function CarTowingPage() {
  return (
    <ServicePage
      title="24/7 Car Towing Service Across Pakistan"
      shortTitle="Car Towing Service"
      slug="car-towing"
      tagline="Your car is dead in the driveway. The mechanic is across town. It's not starting, it's not rolling, and you've got work in the morning. We come get it."
      description="Not every tow is an emergency. Sometimes you just need a car moved from Point A to Point B and it can't drive itself. We send a tow truck to your exact location, load your vehicle properly, and take it wherever you need: your house, a workshop, a dealership, or another city. We can move the car that died in an office car park, the project car sitting in a garage, the vehicle that needs to reach a workshop before Eid."
      image="https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=800&q=80"
      imageAlt="Car being loaded onto a tow truck for safe transport"
      icon={Car}
      features={[
        "General-purpose towing for any car, SUV, or van",
        "Ideal for non-starting, non-running, or unregistered vehicles",
        "Inter-city car transport between Islamabad, Rawalpindi, Lahore & Murree",
        "Lifted-car collection from the traffic police yard",
        "Towing to workshops, dealerships, or private residences",
        "Safe loading and securing, no additional damage to your vehicle",
        "Transparent pricing starting from Rs. 8,000",
      ]}
      process={[
        {
          step: "Tell Us What You Need",
          desc: "Call 0326 9751717 with your location, vehicle details, and where the car needs to go. We'll give you a clear price before dispatching.",
        },
        {
          step: "We Dispatch a Tow Truck",
          desc: "A tow truck suited to your vehicle is dispatched immediately. We aim for around 30 minutes in our service areas.",
        },
        {
          step: "Vehicle Is Loaded & Secured",
          desc: "Our operator loads your car and straps it down securely.",
        },
        {
          step: "Delivered to Your Destination",
          desc: "We drive your car to the exact address you specified: workshop, home, dealership, or another city. You'll be updated throughout.",
        },
      ]}
      faqItems={[
        {
          q: "How is car towing different from accident towing or flatbed towing?",
          a: "Flatbed towing uses a specific type of truck where all four wheels are off the ground. General car towing covers everything else: breakdowns, relocations, non-starting vehicles, transport between cities, and any situation where your car needs to move and can't drive itself.",
        },
        {
          q: "Can you tow a car that doesn't run at all?",
          a: "Yes. Dead engine, flat battery, sat for months? We load it. No running engine required.",
        },
        {
          q: "What does car towing cost?",
          a: "Our car towing starts from Rs. 8,000. Final price depends on distance and vehicle size. We always confirm the price before dispatch. No hidden charges.",
        },
        {
          q: "Can you tow a car between cities or deliver a non-running vehicle?",
          a: "Yes. Give us the pickup and delivery addresses and we'll handle the rest. Inter-city transport, purchased vehicles, project cars, anything that needs to move.",
        },
      ]}
      price={8000}
      cityPages={[
        { city: "Islamabad", href: "/services/car-recovery-and-towing-in-islamabad" },
        { city: "Rawalpindi", href: "/services/car-recovery-and-towing-in-rawalpindi" },
        { city: "Lahore", href: "/services/car-recovery-and-towing-in-lahore" },
        { city: "Murree", href: "/services/car-recovery-and-towing-in-murree" },
      ]}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Motorway Recovery", href: "/services/motorway-recovery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
