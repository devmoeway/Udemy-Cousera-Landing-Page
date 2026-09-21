/**
 * EDIT HERE: brand logo image URLs per brand.
 * This is the ONLY place logo URLs may be declared. Never hardcode a logo elsewhere.
 */
import type { Brand } from "@/types/coupon";

export const BRAND_LOGOS: Record<Brand, string> = {
  coursera:
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/3840px-Coursera-Logo_600x600.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  // NOTE: This is a Google image-cache thumbnail URL. It can expire, change, or get
  // rate-limited over time. Once a permanent source is available, download it and serve
  // it as a local static asset (e.g. /public/logos/udemy.png) instead of hotlinking.
  udemy:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjvSTLZnqZkMXwYL9FG5nRJqy1cjA-8sA7MTW8CI4hyML1d9uaM83Psk&s=10",
  capcut:
    "https://images.seeklogo.com/logo-png/55/1/capcut-logo-png_seeklogo-558525.png",
};
