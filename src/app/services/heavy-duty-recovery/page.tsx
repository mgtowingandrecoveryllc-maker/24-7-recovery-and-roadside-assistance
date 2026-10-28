import type { Metadata } from "next";
import { Construction } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "Heavy Duty Vehicle Recovery & Towing in Pakistan" },
  description:
    "Recovery for vans, pickups and light commercial vehicles in Islamabad, Rawalpindi, Lahore & Murree. Flatbed and winch. Call 0326 9751717 for a quote.",
  alternates: { canonical: "/services/heavy-duty-recovery" },
  openGraph: {
    title: "Heavy Duty Vehicle Recovery & Towing in Pakistan",
    description:
      "Recovery for vans, pickups and light commercial vehicles in Islamabad, Rawalpindi, Lahore & Murree. Flatbed and winch. Call 0326 9751717 for a quote.",
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
      "Recovery for vans, pickups and light commercial vehicles in Islamabad, Rawalpindi, Lahore & Murree. Flatbed and winch. Call 0326 9751717 for a quote.",
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
      tagline="Your loaded truck just broke down on GT Road. Traffic is backing up behind you. Horns blaring. A regular tow truck can't even move this thing. You need a flatbed and a winch."
      description="A loaded Hiace van broke down on M-2 near Lillah. Too heavy for a regular wheel-lift. We bring a flatbed with a winch, load it up, and deliver it to your workshop. For vans, pickups, and light commercial vehicles that are too big for a standard tow, this is what we do. Heavier than that? Tell us the vehicle and its weight on the call and we'll say honestly whether we can take the job. We work with fleet operators and commercial drivers across Islamabad, Rawalpindi, Lahore, and Murree."
      image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
      imageAlt="Heavy duty recovery truck lifting a commercial vehicle"
      icon={Construction}
      features={[
        "Recovery of vans, pickups and light commercial vehicles",
        "Winching for stuck or off-road vehicles",
        "Flatbed loading for vehicles too heavy for a wheel-lift",
        "Fleet customers get priority response",
        "On-site assessment to determine safest recovery method",
      ]}
      process={[
        {
          step: "Describe the Situation",
          desc: "Call 0326 9751717. Tell us the vehicle type, weight (if known), exact location, and what happened. Is it overturned, stuck, broken down, or needing relocation? Photos help if you can send them via WhatsApp.",
        },
        {
          step: "We Assess & Plan",
          desc: "Heavy recovery can't be rushed. We determine the right equipment (flatbed or winch) based on vehicle weight, terrain, and access. We give you a quote before deploying.",
        },
        {
          step: "Equipment Is Mobilised",
          desc: "We dispatch the appropriate heavy-duty recovery vehicles and crew. For complex jobs, this may include multiple units working together.",
        },
        {
          step: "Safe Recovery Executed",
          desc: "Operators strap the vehicle down securely and recover it using proper equipment. Safety is the priority. We never rush a heavy lift.",
        },
        {
          step: "Transport or Repair Coordination",
          desc: "Once recovered, we transport the vehicle to your chosen workshop, depot, or yard. For fleet operators, we can take instructions from your operations team.",
        },
      ]}
      faqItems={[
        {
          q: "What types of heavy vehicles can you recover?",
          a: "We recover vans, pickups, and light commercial vehicles that are too heavy for a standard wheel-lift. Heavier than that? Tell us the vehicle and its weight on the call and we'll say honestly whether we can take the job.",
        },
        {
          q: "How much does heavy duty recovery cost?",
          a: "Heavy recovery pricing varies based on vehicle weight, type of recovery needed (winching vs. flatbed), distance, and site conditions. We always provide a quote after assessing the situation. Call 0326 9751717 to describe your job.",
        },
        {
          q: "Can you recover an overturned truck?",
          a: "It depends on the vehicle. Tell us the situation on the call and we'll say honestly whether we can take the job. For lighter commercial vehicles we use a winch and flatbed.",
        },
        {
          q: "Do you work with fleet operators and logistics companies?",
          a: "Yes. We can work with fleet operators. Fleet customers get priority response.",
        },
        {
          q: "How quickly can you respond to a heavy vehicle breakdown?",
          a: "Response time depends on the equipment needed and your location. Simple heavy towing may be as fast as regular recovery. Larger jobs may take longer to set up. We'll give you an honest ETA when you call.",
        },
      ]}
      priceText="Call for a quote. Pricing depends on vehicle weight, recovery type, and distance."
      relatedServices={[
        { title: "Car Towing", href: "/services/car-towing" },
        { title: "Winch-Out Service", href: "/services/winch-out" },
        { title: "Motorway Recovery", href: "/services/motorway-recovery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
