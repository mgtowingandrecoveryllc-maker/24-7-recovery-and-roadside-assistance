import type { Metadata } from "next";
import { CircleDot } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Tyre Change Service Across Pakistan" },
  description:
    "Flat tyre on the roadside? Our technicians arrive in ~30 mins to mount your spare safely. Available 24/7 in Islamabad, Rawalpindi, Lahore & Murree. Call now.",
  alternates: { canonical: "/services/tire-change" },
  openGraph: {
    title: "24/7 Tyre Change Service Across Pakistan",
    description:
      "Flat tyre on the roadside? Our technicians arrive in ~30 mins to mount your spare safely. Available 24/7 in Islamabad, Rawalpindi, Lahore & Murree. Call now.",
    url: "https://roadrecoveryservice.com/services/tire-change",
    images: [{ url: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", alt: "Tyre being changed at the roadside" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Tyre Change Service Across Pakistan",
    description:
      "Flat tyre on the roadside? Our technicians arrive in ~30 mins to mount your spare safely. Available 24/7 in Islamabad, Rawalpindi, Lahore & Murree. Call now.",
    images: ["https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80"],
  },
};

export default function TireChangePage() {
  return (
    <ServicePage
      title="Tyre Change Service Across Pakistan"
      shortTitle="Tyre Change Service"
      slug="tire-change"
      tagline="Flat tyre on the roadside? We fit your spare and have you moving again fast."
      description="A flat tyre on the side of the road is not just an inconvenience — it's a safety hazard, especially on highways or at night. Our tyre change service brings a trained technician to your location to remove the flat tyre and mount your spare so you can safely continue on your way. If your spare is also flat, damaged, or unavailable, we can tow your vehicle to the nearest tyre shop."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      imageAlt="Close-up of a tyre being changed at the roadside"
      icon={CircleDot}
      features={[
        "On-site spare tyre mounting — no need to find a shop",
        "Works with full-size and compact spare tyres",
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
          desc: "Call 0326 9751717 and give us your location. Let us know if you have a spare tyre available in your vehicle.",
        },
        {
          step: "Technician Arrives",
          desc: "Our technician arrives with the tools needed to change your tyre, including a professional floor jack and torque wrench.",
        },
        {
          step: "Flat Removed, Spare Mounted",
          desc: "We safely lift your vehicle, remove the flat, mount your spare tyre, and tighten the lug nuts to the proper manufacturer torque specification.",
        },
        {
          step: "Safety Check and Advice",
          desc: "We check the spare tyre pressure and advise you on its limitations (compact spares have speed and distance restrictions) before sending you on your way.",
        },
      ]}
      faqItems={[
        {
          q: "What if I don't have a spare tyre?",
          a: "If your vehicle doesn't have a spare or the spare is also flat, we can tow your vehicle to the nearest tyre shop or your preferred location.",
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
      price={2500}
      relatedServices={[
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Jumpstart Service", href: "/services/jumpstart" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
