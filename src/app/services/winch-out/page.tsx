import type { Metadata } from "next";
import { Anchor } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Vehicle Recovery & Winch-Out Across Pakistan" },
  description:
    "Car stuck in mud, a ditch, or rough terrain? Our winch recovery for cars, SUVs, vans and pickups, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
  alternates: { canonical: "/services/winch-out" },
  openGraph: {
    title: "24/7 Vehicle Recovery & Winch-Out Across Pakistan",
    description:
      "Car stuck in mud, a ditch, or rough terrain? Our winch recovery for cars, SUVs, vans and pickups, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
    url: "https://roadrecoveryservice.com/services/winch-out",
    images: [{ url: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=1200&q=80", alt: "Recovery truck winching a stuck vehicle out of mud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Vehicle Recovery & Winch-Out Across Pakistan",
    description:
      "Car stuck in mud, a ditch, or rough terrain? Our winch recovery for cars, SUVs, vans and pickups, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
    images: ["https://images.unsplash.com/photo-1554863804-69546eb96737?w=1200&q=80"],
  },
};

export default function WinchOutPage() {
  return (
    <ServicePage
      title="Vehicle Recovery & Winch-Out Across Pakistan"
      shortTitle="Vehicle Recovery & Winch-Out"
      slug="winch-out"
      tagline="It's raining on the Murree road. Your back wheels just slid off the edge. The car is tilted, you can feel it slipping, and the drop below is real. Don't get out. Call us."
      description="Your car slid into a muddy ditch near Taxila after monsoon rain. Wheels spinning, going nowhere, and the more you try the deeper it sinks. This is not a job for a push or a rope tied to another car. That's how panels get bent and bumpers ripped off. We use a winch and flatbed to get you out. Tell us the situation on the call and we'll confirm how we'll recover it. We do the same thing on the flooded soft shoulders near GT Road Rawalpindi, the unpaved patches around Bahria Town's outer phases, and anywhere else your car ends up somewhere it shouldn't be."
      image="https://images.unsplash.com/photo-1554863804-69546eb96737?w=800&q=80"
      imageAlt="Recovery truck winching a stuck vehicle out of mud"
      icon={Anchor}
      features={[
        "Winch recovery for cars, SUVs, vans and pickups",
        "Extraction from mud, snow, sand, ditches, and embankments",
        "We use a winch to extract your vehicle safely",
        "Works for cars, SUVs, vans, and light commercial vehicles",
        "Available 24 hours, 7 days a week",
      ]}
      process={[
        {
          step: "Do Not Spin Your Wheels",
          desc: "If you're stuck, avoid spinning your tyres excessively. It can dig you in deeper. Put the car in park and call us right away.",
        },
        {
          step: "Call and Describe the Situation",
          desc: "Call 0326 9751717. Describe your location, what type of terrain you're stuck in, and the direction your vehicle is facing. This helps us send the right equipment.",
        },
        {
          step: "Recovery Team Arrives",
          desc: "We arrive and assess the situation. We'll tell you how we plan to recover the vehicle.",
        },
        {
          step: "Winch Extraction",
          desc: "We attach the winch and extract your vehicle back to solid ground.",
        },
        {
          step: "Inspection and Next Steps",
          desc: "Once out, we check the vehicle and either send you on your way or load it onto the flatbed.",
        },
      ]}
      faqItems={[
        {
          q: "Can you pull my truck out of deep mud?",
          a: "Our trucks carry a winch. Tell us your vehicle and where it's stuck on the call, and we'll confirm whether we can pull it out.",
        },
        {
          q: "Will winching damage my vehicle's frame or bumper?",
          a: "We attach the winch to a secure point on the vehicle. Tell us your vehicle's make and model on the call.",
        },
        {
          q: "What if my vehicle is stuck on a steep slope?",
          a: "Slope recoveries take more care. Tell us the gradient and the conditions on the call and we'll confirm what we can do. Your safety and our operator's safety come first.",
        },
      ]}
      price={8000}
      relatedServices={[
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Tyre Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
