/**
 * EDIT HERE: brand metadata (name, description, rating, theme).
 * Adding a brand: add a coupon file, an AFFILIATE_LINKS entry, an entry here and a route.
 */
import type { Brand, BrandInfo, Coupon } from "@/types/coupon";
import { udemyCoupons } from "./coupons/udemy";
import { courseraCoupons } from "./coupons/coursera";

export const BRANDS: Record<Brand, BrandInfo> = {
  udemy: {
    id: "udemy",
    name: "Udemy",
    tagline: "online courses",
    description:
      "Pick up new skills for less through Udemy's huge course library spanning tech, business, AI, marketing, design, and personal growth. Save more with verified Udemy coupons, promo codes, and exclusive deals of up to 50% off, all gathered right here. Whether you're upskilling for your career or just learning for fun, find the latest Udemy discounts and start at the best price available.",
    logoText: "U",
    rating: 4.6,
    votes: 3184,
    themeClass: "theme-udemy",
    path: "/udemy",
  },
  coursera: {
    id: "coursera",
    name: "Coursera",
    tagline: "Coursera Plus & certificates",
    description:
      "Cut the cost of online learning with verified Coursera coupons, promo codes, and limited-time deals gathered right here. Save up to 50% on Coursera Plus, unlock unlimited access to courses, certificates, and career-focused programs, and try it all risk-free with a 7-day trial. Sign up for free and start building new skills for less.",
    logoText: "C",
    rating: 4.5,
    votes: 2417,
    themeClass: "theme-coursera",
    path: "/coursera",
  },
};

export const COUPONS: Record<Brand, Coupon[]> = {
  udemy: udemyCoupons,
  coursera: courseraCoupons,
};

export const BRAND_LIST: BrandInfo[] = [BRANDS.udemy, BRANDS.coursera];
