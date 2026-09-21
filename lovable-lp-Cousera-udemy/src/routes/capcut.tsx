import { createFileRoute } from "@tanstack/react-router";
import { CouponPageLayout } from "@/components/layout/CouponPageLayout";

export const Route = createFileRoute("/capcut")({
  validateSearch: (search: Record<string, unknown>): { cp_id?: string } =>
    typeof search['cp_id'] === "string" ? { cp_id: search['cp_id'] } : {},
  head: () => ({
    meta: [
      { title: "CapCut Coupons & Promo Codes 2026 | RoamLedger" },
      {
        name: "description",
        content:
          "Verified CapCut coupon codes and CapCut Pro deals, updated regularly. Reveal a code and save on premium editing tools.",
      },
      { property: "og:title", content: "CapCut Coupons & Promo Codes 2026" },
      {
        property: "og:description",
        content: "Verified CapCut coupon codes and CapCut Pro deals, updated regularly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "RoamLedger" },
      { property: "og:url", content: "https://roamledger.net/capcut" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CapCut Coupons & Promo Codes 2026" },
      {
        name: "twitter:description",
        content: "Verified CapCut coupon codes and CapCut Pro deals, updated regularly.",
      },
      { name: "googlebot", content: "noindex, nofollow" },
    ],
  }),
  component: () => <CouponPageLayout brand="capcut" />,
});
