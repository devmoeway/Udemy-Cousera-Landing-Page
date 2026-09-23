import { AFFILIATE_LINKS } from "@/config/affiliateLinks";
import { getTrackingParamValue } from "@/lib/tracking-cookies";
import type { TrackedParam } from "@/config/trackingParams";
import type { Brand } from "@/types/coupon";

export function resolveAffiliateLink(brand: Brand): string {
  const template = AFFILIATE_LINKS[brand];

  return template.replace(/\{(\w+)\}/g, (_, key) =>
    getTrackingParamValue(key as TrackedParam)
  );
}
