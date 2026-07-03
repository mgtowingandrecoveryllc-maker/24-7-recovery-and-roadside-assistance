import type { Metadata } from "next";
import { CircleDot } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Tyre Change Service in Islamabad & Rawalpindi | 24/7",
  description:
    "Flat tyre in Islamabad or Rawalpindi? We come to you and mount your spare quickly and safely — 24/7 roadside tyre change for all vehicle types.",
  alternates: { canonical: "/services/tire-change" },
  openGraph: {
    title: "Tyre Change Service in Islamabad & Rawalpindi | 24/7",
    description:
      "Flat tyre in Islamabad or Rawalpindi? We come to you and mount your spare quickly and safely — 24/7 roadside tyre change for all vehicle types.",
    url: "https://roadrecoveryservice.com/services/tire-change",
    images: [{ url: "/logo.png", alt: "24/7 Recovery and Roadside Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyre Change Service in Islamabad & Rawalpindi | 24/7",
    description:
      "Flat tyre in Islamabad or Rawalpindi? We come to you and mount your spare quickly and safely — 24/7 roadside tyre change for all vehicle types.",
    images: ["/logo.png"],
  },
};

export default function TireChangePage() {
  return (
    <ServicePage
      title="Tyre Change Service in Islamabad & Rawalpindi"
      shortTitle="Tyre Change Service"
      tagline="Flat tyre on the roadside? We fit your spare and have you moving again fast."
      description="A flat tire on the side of the road is not just an inconvenience — it's a safety hazard, especially on highways or at night. Our tire change service brings a trained technician to your location to remove the flat tire and mount your spare so you can safely continue on your way. If your spare is also flat, damaged, or unavailable, we can tow your vehicle to the nearest tire shop."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      icon={CircleDot}
      features={[
        "On-site spare tire mounting — no need to find a shop",
        "Works with full-size and compact spare tires",
        "Proper torque applied to lug nuts for safe driving",
        "Towing available if no spare is present",
        "Safe roadside operation with proper traffic management",
        "Available 24 hours, 7 days a week",
        "All vehicle types including cars, trucks, and SUVs",
      ]}
      process={[
        {
          step: "Pull Over Safely",
          desc: "Get your vehicle off the road as far as possible, turn on your hazard lights, and if available, place warning triangles or flares behind the vehicle.",
        },
        {
          step: "Call Us Right Away",
          desc: "Call 0326 9751717 and give us your location. Let us know if you have a spare tire available in your vehicle.",
        },
        {
          step: "Technician Arrives",
          desc: "Our technician arrives with the tools needed to change your tire, including a professional floor jack and torque wrench.",
        },
        {
          step: "Flat Removed, Spare Mounted",
          desc: "We safely lift your vehicle, remove the flat, mount your spare tire, and tighten the lug nuts to the proper manufacturer torque specification.",
        },
        {
          step: "Safety Check and Advice",
          desc: "We check the spare tire pressure and advise you on its limitations (compact spares have speed and distance restrictions) before sending you on your way.",
        },
      ]}
      faqItems={[
        {
          q: "What if I don't have a spare tire?",
          a: "If your vehicle doesn't have a spare or the spare is also flat, we can tow your vehicle to the nearest tire shop or your preferred location.",
        },
        {
          q: "Is it safe to drive on a donut spare?",
          a: "Compact 'donut' spares are temporary — they're typically limited to 50 mph and 50-70 miles. We'll advise you on the specific limitations for your spare and recommend getting a full-size replacement soon.",
        },
        {
          q: "Can you help if I have a blowout on the highway?",
          a: "Yes. We assist with highway blowouts regularly. Stay calm, pull over to the shoulder as far as possible, and call us. Our technicians are experienced with roadside safety.",
        },
      ]}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
