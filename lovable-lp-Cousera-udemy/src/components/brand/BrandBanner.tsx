import { Star } from "lucide-react";
import type { BrandInfo } from "@/types/coupon";

export function BrandBanner({ brand, topDiscount }: { brand: BrandInfo; topDiscount: string }) {
  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-border bg-brand-light p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="max-w-2xl">
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">
          {brand.name} Coupons: Save Up to {topDiscount} on {brand.tagline}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Hand-checked {brand.name} promo codes and deals, updated regularly.
        </p>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="flex items-center gap-0.5 text-cta-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </span>
          <span className="font-medium">
            {brand.rating.toFixed(1)}/5
          </span>
          <span className="text-muted-foreground">· {brand.votes.toLocaleString()} votes</span>
        </div>
      </div>
      <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-brand font-heading text-3xl font-bold text-primary-foreground shadow-ticket">
        {brand.logoText}
      </span>
    </section>
  );
}
