import type { Metadata } from "next";
import { Route } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: {
    absolute: "24/7 Motorway Recovery & Breakdown Assistance in Pakistan",
  },
  description:
    "Broken down on the motorway? 24/7 recovery on M-1, M-2, M-3, M-11 & Islamabad-Murree Expressway. Fast response, Motorway Police coordination. From Rs. 8,000.",
  alternates: { canonical: "/services/motorway-recovery" },
  openGraph: {
    title: "24/7 Motorway Recovery & Breakdown Assistance in Pakistan",
    description:
      "Broken down on the motorway? 24/7 recovery on M-1, M-2, M-3, M-11 & Islamabad-Murree Expressway. Fast response, Motorway Police coordination. From Rs. 8,000.",
    url: "https://roadrecoveryservice.com/services/motorway-recovery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80",
        alt: "Vehicle breakdown recovery on a Pakistan motorway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Motorway Recovery & Breakdown Assistance in Pakistan",
    description:
      "Broken down on the motorway? 24/7 recovery on M-1, M-2, M-3, M-11 & Islamabad-Murree Expressway. Fast response, Motorway Police coordination. From Rs. 8,000.",
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80",
    ],
  },
};

export default function MotorwayRecoveryPage() {
  return (
    <ServicePage
      title="24/7 Motorway Recovery & Breakdown Assistance in Pakistan"
      shortTitle="Motorway Recovery"
      slug="motorway-recovery"
      tagline="Stranded on the motorway? We recover vehicles from M-1, M-2, M-3, M-11 & the Islamabad-Murree Expressway — fast, safe, and coordinated with Motorway Police."
      description="A motorway breakdown is nothing like a city breakdown. You're dealing with high-speed traffic, limited safe stopping areas, and you may be kilometres from the nearest town or service station. Our motorway recovery service is built for exactly this situation. We cover Pakistan's major motorway network including M-1 (Islamabad–Peshawar), M-2 (Islamabad–Lahore), M-3 (Lahore–Abdul Hakeem), M-11 (Lahore–Sialkot), and the Islamabad–Murree Expressway. We coordinate directly with the National Highway and Motorway Police (NHMP) to ensure your recovery is conducted safely and in compliance with motorway regulations. Whether you've had a mechanical failure, tyre blowout, overheating, or run out of fuel on the motorway, we reach you and get your vehicle off the road safely."
      image="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80"
      imageAlt="Recovery vehicle responding to a motorway breakdown in Pakistan"
      icon={Route}
      features={[
        "Coverage on M-1, M-2, M-3, M-11 & Islamabad-Murree Expressway",
        "Coordination with NHMP (National Highway & Motorway Police)",
        "Rapid response to high-speed road breakdowns",
        "Tyre blowouts, engine failures, overheating & fuel emergencies",
        "Safe vehicle extraction from hard shoulders and lanes",
        "Towing to the nearest city, workshop, or destination of your choice",
        "Experienced operators trained for motorway conditions",
      ]}
      process={[
        {
          step: "Call & Share Your Location",
          desc: "Call 0326 9751717. Tell us which motorway you're on and the nearest kilometre marker or interchange. Turn on hazard lights and stay inside your vehicle if on the hard shoulder.",
        },
        {
          step: "We Coordinate with Motorway Police",
          desc: "If needed, we inform the NHMP about the recovery. This ensures lane closures or traffic management are in place for your safety.",
        },
        {
          step: "Recovery Vehicle Dispatched",
          desc: "We dispatch from the nearest service point along the motorway. Response time depends on your exact location but we aim for the fastest possible arrival.",
        },
        {
          step: "On-Site Assessment & Recovery",
          desc: "Our team assesses whether a roadside fix is possible (tyre change, fuel, jump start) or if your vehicle needs towing. Either way, we get you moving.",
        },
        {
          step: "Delivery to Safety",
          desc: "If towing is needed, we take your vehicle to the nearest town, your preferred workshop, or your home city. You ride with us or arrange separate transport.",
        },
      ]}
      faqItems={[
        {
          q: "Which motorways do you cover?",
          a: "We cover M-1 (Islamabad–Peshawar), M-2 (Islamabad–Lahore), M-3 (Lahore–Abdul Hakeem), M-11 (Lahore–Sialkot), and the Islamabad–Murree Expressway. For breakdowns on other highways, call us and we'll confirm availability.",
        },
        {
          q: "How long does it take to reach me on the motorway?",
          a: "Response time depends on your exact location. Breakdowns near interchanges or service areas typically see faster response. We dispatch from the nearest available point and keep you updated on arrival time.",
        },
        {
          q: "What should I do while waiting for recovery on the motorway?",
          a: "Pull as far onto the hard shoulder as possible, turn on your hazard lights, and stay inside the vehicle with your seatbelt on — especially at night. If you have a reflective triangle, place it at least 50 metres behind your car. Call the Motorway Police helpline (130) and then call us.",
        },
        {
          q: "Do you coordinate with Motorway Police?",
          a: "Yes. Where required, we coordinate with the NHMP to ensure traffic management is in place during recovery. This is especially important for breakdowns in a live traffic lane or at night.",
        },
        {
          q: "How much does motorway recovery cost?",
          a: "Motorway recovery starts from Rs. 8,000 and varies based on distance and location on the motorway. Breakdowns far from interchanges or in remote sections may cost more. We always confirm the price before dispatch.",
        },
      ]}
      price={8000}
      relatedServices={[
        { title: "Car Towing", href: "/services/car-towing" },
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
