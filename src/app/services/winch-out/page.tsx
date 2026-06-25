import type { Metadata } from "next";
import { Anchor } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Winch Out Service",
  description:
    "Vehicle stuck in mud, snow, sand, or a ditch? Our heavy-duty winch recovery service extracts your vehicle safely. Available 24/7.",
  alternates: { canonical: "/services/winch-out" },
};

export default function WinchOutPage() {
  return (
    <ServicePage
      title="Winch Out Service"
      tagline="Stuck in mud, snow, or a ditch? We'll pull you out safely."
      description="Getting your vehicle stuck is a nerve-wracking experience. Whether you've slid into a ditch, sunk in mud or snow, or high-centered on uneven terrain, our winch-out recovery team has the heavy-duty equipment and experience to extract your vehicle without causing further damage. We use proper rigging techniques, appropriate anchor points, and controlled winching to safely recover your vehicle and get you back on solid ground."
      image="https://images.unsplash.com/photo-1554863804-69546eb96737?w=800&q=80"
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
      relatedServices={[
        { title: "Accident Towing", href: "/services/accident-towing" },
        { title: "Flatbed Towing", href: "/services/flatbed-towing" },
        { title: "Tire Change", href: "/services/tire-change" },
        { title: "View All Services", href: "/services" },
      ]}
    />
  );
}
