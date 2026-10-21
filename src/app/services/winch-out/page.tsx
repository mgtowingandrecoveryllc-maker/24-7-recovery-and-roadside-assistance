import type { Metadata } from "next";
import { Anchor } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: { absolute: "24/7 Vehicle Recovery & Winch-Out Across Pakistan" },
  description:
    "Car stuck in mud, a ditch, or rough terrain? Our heavy-duty winch recovery team extracts all vehicle types safely, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
  alternates: { canonical: "/services/winch-out" },
  openGraph: {
    title: "24/7 Vehicle Recovery & Winch-Out Across Pakistan",
    description:
      "Car stuck in mud, a ditch, or rough terrain? Our heavy-duty winch recovery team extracts all vehicle types safely, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
    url: "https://roadrecoveryservice.com/services/winch-out",
    images: [{ url: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=1200&q=80", alt: "Heavy-duty winch truck recovering a stuck vehicle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Vehicle Recovery & Winch-Out Across Pakistan",
    description:
      "Car stuck in mud, a ditch, or rough terrain? Our heavy-duty winch recovery team extracts all vehicle types safely, 24/7 in Islamabad, Rawalpindi, Lahore & Murree.",
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
      description="You took the family up to Nathia Gali for the weekend. On the way back it started raining. You moved over for an oncoming truck and your rear tyres caught the soft shoulder. Now your car is half off the road, tilted at an angle that makes your stomach turn, wheels spinning in mud and going nowhere. This is not a job for a push or a rope tied to another car — that's how vehicles go over the edge. Our winch-out crew handles this every monsoon season and every snowfall on these mountain roads. We rig proper anchor points, use heavy-duty winch lines, and pull your vehicle back to solid ground in a slow, controlled extraction. We do the same thing on the flooded soft shoulders near GT Road Rawalpindi, the unpaved patches around Bahria Town's outer phases, and anywhere else your car ends up somewhere it shouldn't be."
      image="https://images.unsplash.com/photo-1554863804-69546eb96737?w=800&q=80"
      imageAlt="Heavy-duty winch truck recovering a stuck vehicle from rough terrain"
      icon={Anchor}
      features={[
        "Heavy-duty winch recovery for all vehicle types",
        "Extraction from mud, snow, sand, ditches, and embankments",
        "Proper rigging and anchor point selection to prevent damage",
        "Controlled winching — slow and steady to protect your vehicle",
        "Works for cars, trucks, SUVs, and light commercial vehicles",
        "Available 24 hours, 7 days a week",
        "Experienced operators with proper off-road recovery training",
      ]}
      process={[
        {
          step: "Do Not Spin Your Wheels",
          desc: "If you're stuck, avoid spinning your tires excessively — it can dig you in deeper. Put the car in park and call us right away.",
        },
        {
          step: "Call and Describe the Situation",
          desc: "Call 0326 9751717. Describe your location, what type of terrain you're stuck in, and the direction your vehicle is facing. This helps us send the right equipment.",
        },
        {
          step: "Recovery Team Arrives",
          desc: "Our winch recovery team arrives with the appropriate equipment. We'll assess the situation before attaching any recovery lines.",
        },
        {
          step: "Safe Rigging Setup",
          desc: "We identify safe attachment points on your vehicle and establish secure anchor points for our winch. Proper rigging is critical to avoid damage.",
        },
        {
          step: "Controlled Vehicle Extraction",
          desc: "We carefully winch your vehicle back to solid ground in a controlled manner, stopping to reassess as needed. Once out, we inspect for damage.",
        },
      ]}
      faqItems={[
        {
          q: "Can you pull my truck out of deep mud?",
          a: "Yes. Our heavy-duty winch systems are rated for large trucks and SUVs. The key is getting to you before the vehicle sinks further — call us as soon as you're stuck.",
        },
        {
          q: "Will winching damage my vehicle's frame or bumper?",
          a: "We use recovery straps and proper attachment points (recovery hooks, frame mount points) to distribute the load safely. We never just hook to a bumper.",
        },
        {
          q: "What if my vehicle is stuck on a steep slope?",
          a: "Slope recoveries are more complex and potentially dangerous. Our team is trained for these situations and will assess carefully before proceeding. Your safety and the driver's safety come first.",
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
