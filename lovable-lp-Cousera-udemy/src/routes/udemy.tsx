import { createFileRoute } from "@tanstack/react-router";
import { CouponPageLayout } from "@/components/layout/CouponPageLayout";

export const Route = createFileRoute("/udemy")({
  validateSearch: (search: Record<string, unknown>): { cp_id?: string } =>
    typeof search['cp_id'] === "string" ? { cp_id: search['cp_id'] } : {},
  head: () => ({
    meta: [
      { title: "Udemy Coupons & Promo Codes 2026 | CouponDesk" },
      {
        name: "description",
        content:
          "Verified Udemy coupon codes and course deals, updated regularly. Reveal a code and save on top-rated online courses.",
      },
      { property: "og:title", content: "Udemy Coupons & Promo Codes 2026" },
      {
        property: "og:description",
        content: "Verified Udemy coupon codes and course deals, updated regularly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CouponPageLayout brand="udemy" />,
});
