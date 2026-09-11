/**
 * EDIT HERE: affiliate links per brand (Link A).
 * This is the ONLY place links may be declared. Never hardcode a link elsewhere.
 */
import type { Brand } from "@/types/coupon";

export const AFFILIATE_LINKS: Record<Brand, string> = {
  udemy: "https://rutgon.me/UDEMY_SHORT_CODE", // TODO: replace with real short code
  coursera: "https://rutgon.me/COURSERA_SHORT_CODE", // TODO: replace with real short code
};
