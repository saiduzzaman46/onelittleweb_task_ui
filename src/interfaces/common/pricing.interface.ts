export interface IPricingFeature {
  name: string;
  included: boolean;
}

export interface IPricingPlan {
  id: string | number;
  name: string;
  description: string;
  price: number;
  features: IPricingFeature[];
  isActive?: boolean;
}
