import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const BASE = "https://roadrecoveryservice.com";
const NOW = new Date();

const serviceImages: Record<string, { loc: string; title: string }[]> = {
  "/services/accident-towing": [
    { loc: "https://images.unsplash.com/photo-1730514784243-f0e7f09c9f50?w=1200&q=80", title: "Emergency accident recovery crew securing a damaged vehicle" },
  ],
  "/services/flatbed-towing": [
    { loc: "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=1200&q=80", title: "Flatbed tow truck loading a car for safe transport" },
  ],
  "/services/fuel-delivery": [
    { loc: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?w=1200&q=80", title: "Emergency fuel delivery to a stranded vehicle" },
  ],
  "/services/jumpstart": [
    { loc: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=1200&q=80", title: "Technician jump-starting a car battery" },
  ],
  "/services/lockout-help": [
    { loc: "https://images.unsplash.com/photo-1730514785075-b065c757b653?w=1200&q=80", title: "Technician using non-destructive tools to unlock a car" },
  ],
  "/services/tire-change": [
    { loc: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", title: "Tyre being changed at the roadside" },
  ],
  "/services/tyre-air-refill": [
    { loc: "https://images.unsplash.com/photo-1764015805414-df7de89d405b?w=1200&q=80", title: "Portable air compressor inflating a car tyre" },
  ],
  "/services/winch-out": [
    { loc: "https://images.unsplash.com/photo-1554863804-69546eb96737?w=1200&q=80", title: "Heavy-duty winch truck recovering a stuck vehicle" },
  ],
  "/services/car-towing": [
    { loc: "https://images.unsplash.com/photo-1549317661-bd32c8ce0abb?w=1200&q=80", title: "Car being loaded onto a tow truck for safe transport" },
  ],
  "/services/motorway-recovery": [
    { loc: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80", title: "Recovery vehicle responding to a motorway breakdown" },
  ],
  "/services/heavy-duty-recovery": [
    { loc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80", title: "Heavy duty recovery truck lifting a commercial vehicle" },
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/services/accident-towing", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/flatbed-towing", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/fuel-delivery", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/jumpstart", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/lockout-help", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/tire-change", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/tyre-air-refill", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/winch-out", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/car-towing", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/motorway-recovery", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/heavy-duty-recovery", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/jumpstart-in-islamabad", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/services/jumpstart-in-rawalpindi", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/services/jumpstart-in-lahore", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/services/jumpstart-in-murree", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/areas", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/areas/roadside-recovery-service-in-islamabad", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/areas/roadside-recovery-service-in-rawalpindi", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/areas/roadside-recovery-service-in-lahore", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/areas/roadside-recovery-service-in-murree", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((page) => ({
    url: `${BASE}${page.path}`,
    lastModified: NOW,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    ...(serviceImages[page.path] && {
      images: serviceImages[page.path].map((img) => img.loc),
    }),
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [post.image],
  }));

  return [...staticPages, ...blogPages];
}
