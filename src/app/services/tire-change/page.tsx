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
      tagline="BANG. Your tyre just blew on M-2 near Kallar Kahar. Trucks are flying past at 120. You don't have a jack. You're standing on the hard shoulder wondering what to do next. Call us."
      description="You felt the thud, the car pulled hard to one side, and now you're stopped on a motorway shoulder with traffic screaming past. You pop the boot. No jack, or the spare looks half-flat, or you've never changed a tyre in your life. Doesn't matter. Call 0326 9751717 and a technician shows up with a floor jack, torque wrench, and the experience to swap your tyre safely on a busy roadside. Spare mounted, wheel nuts torqued properly, and you're rolling again. No spare at all? We tow you to the nearest tyre shop instead."
      image="https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=800&q=80"
      imageAlt="Close-up of a tyre being changed at the roadside"
      icon={CircleDot}
      features={[
        "On-site spare tyre mounting, no need to find a shop",
        "Works with full-size and compact spare tyres",
        "Proper torque applied to wheel nuts for safe driving",
        "Towing available if no spare is present",
        "Safe roadside operation with proper traffic management",
        "Available 24 hours, 7 days a week",
        "All vehicle types including cars, trucks, and SUVs",
      ]}
      process={[
        {
          step: "Call 0326 9751717",
          desc: "Tell us where you are and whether you have a spare. We send a technician with a floor jack and torque wrench.",
        },
        {
          step: "Spare Mounted, You're Rolling",
          desc: "We swap the flat, torque the wheel nuts to spec, check the spare's pressure, and advise on any speed or distance limits. No spare? We tow you to the nearest tyre shop.",
        },
      ]}
      faqItems={[
        {
          q: "What if I don't have a spare tyre?",
          a: "If your vehicle doesn't have a spare or the spare is also flat, we can tow your vehicle to the nearest tyre shop or your preferred location.",
        },
        {
          q: "Is it safe to drive on a space-saver spare?",
          a: "Compact space-saver spares are temporary. They're typically limited to 80 km/h and 80 to 110 km. We'll advise you on the specific limitations for your spare and recommend getting a full-size replacement soon.",
        },
        {
          q: "Can you help if I have a blowout on the highway?",
          a: "Yes. We assist with highway blowouts. Stay calm, pull over to the shoulder as far as possible, and call us. Our technicians are experienced with roadside safety.",
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
