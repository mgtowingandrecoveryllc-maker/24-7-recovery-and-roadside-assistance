import type { Metadata } from "next";
import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Towing Service Across Pakistan" },
  description:
    "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree — for breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
  alternates: { canonical: "/services/car-towing" },
  openGraph: {
    title: "24/7 Car Towing Service Across Pakistan",
    description:
      "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree — for breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
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
      "Need your car towed? Our 24/7 car towing service covers Islamabad, Rawalpindi, Lahore & Murree — for breakdowns, relocations, non-starting vehicles & more. From Rs. 8,000.",
    images: ["https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=1200&q=80"],
  },
};

export default function CarTowingPage() {
  return (
    <ServicePage
      title="24/7 Car Towing Service Across Pakistan"
      shortTitle="Car Towing Service"
      slug="car-towing"
      tagline="Whether your car won't start, needs to reach a mechanic, or has to move across cities — we tow it safely, 24 hours a day."
      description="Not every tow job is an emergency. Sometimes your car simply won't start in the morning, you've bought a non-running vehicle and need it delivered, or you need to relocate a car from one city to another. Our general car towing service handles all of it — day or night, across Islamabad, Rawalpindi, Lahore, and Murree. Unlike accident or flatbed-specific towing, this service covers the everyday scenarios that keep your car from getting where it needs to go. We dispatch a professional tow truck to your exact location, secure your vehicle properly, and deliver it to any destination you choose — your home, a workshop, a dealership, or another city entirely."
      image="https://images.unsplash.com/photo-1706130576686-d1a24ca0a8ea?w=800&q=80"
      imageAlt="Car being loaded onto a tow truck for safe transport"
      icon={Car}
      features={[
        "General-purpose towing for any car, SUV, or van",
        "Ideal for non-starting, non-running, or unregistered vehicles",
        "Inter-city car transport between Islamabad, Rawalpindi, Lahore & Murree",
        "Parking violation or impound lot vehicle retrieval",
        "Towing to workshops, dealerships, or private residences",
        "Safe loading and securing — no additional damage to your vehicle",
        "Transparent pricing starting from Rs. 8,000",
      ]}
      process={[
        {
          step: "Tell Us What You Need",
          desc: "Call 0326 9751717 with your location, vehicle details, and where the car needs to go. We'll give you a clear price before dispatching.",
        },
        {
          step: "We Dispatch a Tow Truck",
          desc: "A tow truck suited to your vehicle is dispatched immediately. Average arrival within 30 minutes in our service areas.",
        },
        {
          step: "Vehicle Is Loaded & Secured",
          desc: "Our operator loads your car using proper tie-downs and wheel straps to prevent any movement or damage during transport.",
        },
        {
          step: "Delivered to Your Destination",
          desc: "We drive your car to the exact address you specified — workshop, home, dealership, or another city. You'll be updated throughout.",
        },
      ]}
      faqItems={[
        {
          q: "How is car towing different from accident towing or flatbed towing?",
          a: "Accident towing handles crash scenes and works with police and insurance. Flatbed towing uses a specific type of truck where all four wheels are off the ground. General car towing covers everything else — breakdowns, relocations, non-starting vehicles, transport between cities, and any situation where your car needs to move and can't drive itself.",
        },
        {
          q: "Can you tow a car that doesn't run at all?",
          a: "Yes. Whether the engine is dead, the battery is completely gone, or the car has been sitting for months, we can load and tow it. No running engine required.",
        },
        {
          q: "What does car towing cost?",
          a: "Our car towing starts from Rs. 8,000. Final price depends on distance and vehicle size. We always confirm the price before dispatch — no hidden charges.",
        },
        {
          q: "Can you tow my car from Lahore to Islamabad?",
          a: "Absolutely. We regularly handle inter-city towing between Islamabad, Rawalpindi, Lahore, and Murree. Call us with the pickup and drop-off locations for a quote.",
        },
        {
          q: "I bought a car online and it doesn't run — can you deliver it to me?",
          a: "Yes, this is one of our most common requests. Give us the pickup address and your delivery address, and we'll handle the rest. We tow purchased vehicles, project cars, and barn finds regularly.",
        },
      ]}
      price={8000}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Motorway Recovery", href: "/services/motorway-recovery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
