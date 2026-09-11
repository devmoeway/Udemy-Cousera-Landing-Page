import { Star } from "lucide-react";
import type { BrandInfo } from "@/types/coupon";

export function BrandInfoCard({ brand }: { brand: BrandInfo }) {
  return (
    <aside className="ticket-card space-y-4 p-6">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand font-heading text-2xl font-bold text-primary-foreground">
        {brand.logoText}
      </span>
      <h2 className="text-center font-heading text-lg font-semibold">{brand.name}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="flex items-center gap-0.5 text-cta-orange">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </span>
        <span className="font-medium">{brand.rating.toFixed(1)}/5</span>
        <span className="text-muted-foreground">· {brand.votes.toLocaleString()} votes</span>
      </div>
    </aside>
  );
}
