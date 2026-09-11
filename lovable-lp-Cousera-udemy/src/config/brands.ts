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
      "Udemy is one of the world's largest learning marketplaces, with over 200,000 courses taught by expert instructors. Sales run often, so a coupon can cut a course down to a few dollars. Verified codes below are updated regularly.",
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
      "Coursera partners with top universities and companies to offer courses, certificates and degrees. Coursera Plus unlocks thousands of programs for one subscription. Use the offers below to bring the price down before you subscribe.",
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
