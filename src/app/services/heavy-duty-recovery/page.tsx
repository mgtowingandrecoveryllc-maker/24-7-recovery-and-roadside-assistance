import type { Metadata } from "next";
import { Construction } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "Heavy Duty Vehicle Recovery & Towing in Pakistan" },
  description:
    "Heavy vehicle recovery for trucks, buses, commercial vehicles & construction equipment across Pakistan. Heavy-duty winching, crane-assisted recovery, multi-axle transport. Call for quote.",
  alternates: { canonical: "/services/heavy-duty-recovery" },
  openGraph: {
    title: "Heavy Duty Vehicle Recovery & Towing in Pakistan",
    description:
      "Heavy vehicle recovery for trucks, buses, commercial vehicles & construction equipment across Pakistan. Heavy-duty winching, crane-assisted recovery, multi-axle transport. Call for quote.",
    url: "https://roadrecoveryservice.com/services/heavy-duty-recovery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
        alt: "Heavy duty recovery truck lifting a commercial vehicle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Duty Vehicle Recovery & Towing in Pakistan",
    description:
      "Heavy vehicle recovery for trucks, buses, commercial vehicles & construction equipment across Pakistan. Heavy-duty winching, crane-assisted recovery, multi-axle transport. Call for quote.",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
    ],
  },
};

export default function HeavyDutyRecoveryPage() {
  return (
    <ServicePage
      title="Heavy Duty Vehicle Recovery & Towing in Pakistan"
      shortTitle="Heavy Duty Recovery"
      slug="heavy-duty-recovery"
      tagline="Trucks, buses, construction equipment — when regular tow trucks can't handle the job, our heavy-duty recovery team can."
      description="Standard tow trucks have limits. When a loaded truck jackknifes on the highway, a bus breaks down with passengers on board, or construction equipment needs to be moved from a site, you need heavy-duty recovery capabilities. Our heavy vehicle recovery service is equipped for exactly this — heavy-duty winching systems, crane-assisted lifts, and multi-axle flatbed transporters that handle vehicles and equipment far beyond what conventional recovery can manage. We work with fleet operators, logistics companies, construction firms, and commercial drivers across Islamabad, Rawalpindi, Lahore, and Murree. Every heavy recovery job is different, so we assess the situation first, plan the safest extraction method, and execute with the right equipment for the weight and terrain involved."
      image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
      imageAlt="Heavy duty recovery truck lifting a commercial vehicle"
      icon={Construction}
      features={[
        "Recovery of trucks, buses, trailers & commercial vehicles",
        "Heavy-duty winching for overturned or stuck vehicles",
        "Crane-assisted recovery for extreme situations",
        "Multi-axle flatbed transport for oversized loads",
        "Construction equipment recovery & relocation",
        "Fleet operator & logistics company partnerships",
        "On-site assessment to determine safest recovery method",
      ]}
      process={[
        {
          step: "Describe the Situation",
          desc: "Call 0326 9751717. Tell us the vehicle type, weight (if known), exact location, and what happened — is it overturned, stuck, broken down, or needing relocation? Photos help if you can send them via WhatsApp.",
        },
        {
          step: "We Assess & Plan",
          desc: "Heavy recovery can't be rushed. We determine the right equipment — winch truck, crane, multi-axle flatbed — based on vehicle weight, terrain, and access. We give you a quote before deploying.",
        },
        {
          step: "Equipment Is Mobilised",
          desc: "We dispatch the appropriate heavy-duty recovery vehicles and crew. For complex jobs, this may include multiple units working together.",
        },
        {
          step: "Safe Recovery Executed",
          desc: "Our experienced operators rig and recover the vehicle using proper load-rated equipment. Safety is the priority — we never rush a heavy lift.",
        },
        {
          step: "Transport or Repair Coordination",
          desc: "Once recovered, we transport the vehicle to your chosen workshop, depot, or yard. For fleet operators, we coordinate directly with your dispatch team.",
        },
      ]}
      faqItems={[
        {
          q: "What types of heavy vehicles can you recover?",
          a: "We recover trucks (including loaded cargo trucks), buses, trailers, tankers, construction equipment (excavators, loaders, cranes), and any vehicle too heavy for a standard tow truck. If it has wheels or tracks, we can likely recover it.",
        },
        {
          q: "How much does heavy duty recovery cost?",
          a: "Heavy recovery pricing varies significantly based on vehicle weight, type of recovery needed (winching vs. crane vs. flatbed), distance, and site conditions. We always provide a quote after assessing the situation. Call 0326 9751717 to describe your job.",
        },
        {
          q: "Can you recover an overturned truck?",
          a: "Yes. Uprighting overturned trucks and trailers is one of our core heavy-duty capabilities. We use rated rigging equipment and plan every lift carefully to avoid cargo damage and secondary incidents.",
        },
        {
          q: "Do you work with fleet operators and logistics companies?",
          a: "Yes. We work with several fleet operators and logistics firms across Pakistan. We offer priority response for regular clients and can coordinate directly with your dispatch or operations team.",
        },
        {
          q: "How quickly can you respond to a heavy vehicle breakdown?",
          a: "Response time depends on the equipment needed and your location. Simple heavy towing may be as fast as regular recovery. Complex crane jobs may require additional mobilisation time. We'll give you an honest ETA when you call.",
        },
      ]}
      priceText="Call for quote — pricing varies by vehicle weight, recovery type, and distance"
      relatedServices={[
        { title: "Car Towing", href: "/services/car-towing" },
        { title: "Winch-Out Service", href: "/services/winch-out" },
        { title: "Motorway Recovery", href: "/services/motorway-recovery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
