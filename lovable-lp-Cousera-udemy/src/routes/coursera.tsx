import { createFileRoute } from "@tanstack/react-router";
import { CouponPageLayout } from "@/components/layout/CouponPageLayout";

export const Route = createFileRoute("/coursera")({
  validateSearch: (search: Record<string, unknown>): { cp_id?: string } =>
    typeof search['cp_id'] === "string" ? { cp_id: search['cp_id'] } : {},
  head: () => ({
    meta: [
      { title: "Coursera Coupons & Coursera Plus Discounts 2026 | CouponDesk" },
      {
        name: "description",
        content:
          "Up to 40% off Coursera Plus with verified coupon codes and offers. Reveal a code and save on certificates and courses.",
      },
      { property: "og:title", content: "Coursera Coupons & Coursera Plus Discounts 2026" },
      {
        property: "og:description",
        content: "Up to 40% off Coursera Plus with verified coupon codes and offers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CouponPageLayout brand="coursera" />,
});
