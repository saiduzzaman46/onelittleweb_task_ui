import { IPricingPlan } from "@/interfaces/common/pricing.interface";

const baseFeatures = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

export const pricingData: IPricingPlan[] = [
  {
    id: 1,
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: baseFeatures.map((f, i) => ({ name: f, included: i < 2 })),
  },
  {
    id: 2,
    name: "Professional",
    description:
      "Ideal for individuals who who need advanced features and tools for client work.",
    price: 25,
    isActive: true,
    features: baseFeatures.map((f, i) => ({ name: f, included: i < 6 })),
  },
  {
    id: 3,
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: baseFeatures.map((f, i) => ({ name: f, included: true })),
  },
];
