import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Car Jump Start Service Across Pakistan" },
  description:
    "Dead battery? Our 24/7 jump start service comes to you in Islamabad, Rawalpindi, Lahore & Murree - professional jump-start for cars, vans, trucks, and diesel vehicles.",
  alternates: { canonical: "/services/jumpstart" },
  openGraph: {
    title: "24/7 Car Jump Start Service Across Pakistan",
    description:
      "Dead battery? Our 24/7 jump start service comes to you in Islamabad, Rawalpindi, Lahore & Murree - professional jump-start for cars, vans, trucks, and diesel vehicles.",
    url: "https://roadrecoveryservice.com/services/jumpstart",
    images: [{ url: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", alt: "Car jump start service, technician with portable equipment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Car Jump Start Service Across Pakistan",
    description:
      "Dead battery? Our 24/7 jump start service comes to you in Islamabad, Rawalpindi, Lahore & Murree - professional jump-start for cars, vans, trucks, and diesel vehicles.",
    images: ["https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80"],
  },
};

export default function JumpstartPage() {
  return (
    <ServicePage
      title="24/7 Car Jump Start Service Across Pakistan"
      shortTitle="Car Jump Start Service"
      slug="jumpstart"
      tagline="Lehtrar Road, late at night. Your car won't start after a tyre shop visit. The road is quiet, the shop is closed, and your phone is dying. One call to 0326 9751717 and our guy is already on his way."
      description="You turn the key and nothing happens. Maybe it's a basement car park in Blue Area after a late meeting. Maybe it's the Islamabad Expressway shoulder at 2am and there's not a soul around. That sinking feeling? We know it. Call us and a technician with a commercial-grade portable jump-starter is headed to your exact location. He'll get your engine running, check if your battery needs replacing, and you'll be driving home before the chai gets cold. Cars, SUVs, diesel trucks, doesn't matter. Rs. 1,500, done."
      image="https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=800&q=80"
      imageAlt="Technician jump-starting a car battery with portable equipment"
      icon={Zap}
      features={[
        "Commercial-grade jump starters for all vehicle sizes",
        "Works on cars, trucks, SUVs, vans, and diesel vehicles",
        "Jump starters with built-in surge protection",
        "Battery condition assessment after jump-start",
        "Available 24 hours, 7 days a week",
        "Fast response to car parks, roadsides, and driveways",
        "Honest advice. We'll tell you if the battery needs replacement",
      ]}
      process={[
        {
          step: "Call 0326 9751717",
          desc: "Tell us where you are and what you drive. A technician with a commercial-grade jump starter is dispatched immediately.",
        },
        {
          step: "Engine Running, Battery Checked",
          desc: "We jump your car, check the battery health, and let you know honestly if it needs replacing. You're driving again in minutes.",
        },
      ]}
      faqItems={[
        {
          q: "Why won't my car hold a charge after a jump?",
          a: "If your car starts with a jump but dies again quickly, your battery may be at end of life or your alternator may not be charging it properly. We can advise you on next steps.",
        },
        {
          q: "Can you jumpstart a diesel truck?",
          a: "Yes. Our commercial jump-starters are rated for diesel engines including heavy-duty trucks. Just let us know the vehicle type when you call.",
        },
        {
          q: "Is there any risk of damaging my car's electronics?",
          a: "We use jump starters with built-in surge protection and follow correct polarity procedures to protect your vehicle's electrical system.",
        },
      ]}
      price={1500}
      cityPages={[
        { city: "Islamabad", href: "/services/jumpstart-in-islamabad" },
        { city: "Rawalpindi", href: "/services/jumpstart-in-rawalpindi" },
        { city: "Lahore", href: "/services/jumpstart-in-lahore" },
        { city: "Murree", href: "/services/jumpstart-in-murree" },
      ]}
      relatedServices={[
        { title: "Lockout Help", href: "/services/lockout-help" },
        { title: "Fuel Delivery", href: "/services/fuel-delivery" },
        { title: "Tyre Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
