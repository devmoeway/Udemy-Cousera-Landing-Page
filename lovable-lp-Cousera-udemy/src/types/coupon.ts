export type Brand = "udemy" | "coursera" | "capcut";

export type CouponType = "Code" | "Deal";

export interface Coupon {
  /** Stable id used in the ?cp_id= URL param */
  counpon_id: string;
  title: string;
  /** Badge text: "40%", "$115", "Free Trial", "Deal"... */
  discount_value: string;
  /** Drives the button label and the All/Codes/Deals filter tabs */
  type: CouponType;
  /** Real code for type "Code"; "Deal Activated" placeholder for type "Deal" */
  code: string;
}

export interface BrandInfo {
  id: Brand;
  name: string;
  tagline: string;
  description: string;
  logoText: string;
  rating: number;
  votes: number;
  themeClass: string;
  path: string;
}
