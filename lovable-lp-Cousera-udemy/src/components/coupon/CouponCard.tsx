import { Scissors, Check } from "lucide-react";
import type { Coupon } from "@/types/coupon";
import { maskCode } from "@/utils/maskCode";

interface Props {
  coupon: Coupon;
  onAction: (coupon: Coupon) => void;
}

export function CouponCard({ coupon, onAction }: Props) {
  const isCode = coupon.type === "Code";

  return (
    <article className="ticket-card group relative flex flex-col gap-4 p-5 hover:-translate-y-0.5 hover:shadow-ticket-hover sm:flex-row sm:items-center">
      {/* Left: discount badge */}
      <div className="flex shrink-0 flex-row items-baseline gap-1.5 sm:w-24 sm:flex-col sm:items-center sm:gap-0 sm:text-center">
        <span className="font-heading text-2xl font-bold leading-none text-brand">
          {coupon.discount_value}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {isCode ? "Off" : "Deal"}
        </span>
      </div>

      {/* Middle */}
      <div className="min-w-0 flex-1 sm:px-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand">
            {isCode ? "Code" : "Deal"}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-medium text-cta-green">
            <Check className="size-3" /> Verified
          </span>
        </div>
        <h3 className="mt-1 font-heading text-base font-semibold leading-snug">{coupon.title}</h3>
      </div>

      {/* Tear line */}
      <div className="relative hidden self-stretch border-l-2 border-dashed border-border sm:block">
        <span className="absolute -top-6 -left-[9px] size-4 rounded-full bg-background" />
        <span className="absolute -bottom-6 -left-[9px] size-4 rounded-full bg-background" />
        <span className="absolute top-1/2 -left-3 -translate-y-1/2 bg-card p-1 text-muted-foreground">
          <Scissors className="size-4" />
        </span>
      </div>
      <div className="relative border-t-2 border-dashed border-border sm:hidden" />

      {/* Right: CTA */}
      <div className="flex w-full shrink-0 items-center sm:w-72 sm:pl-4">
        {isCode ? (
          <div className="relative w-full">
            <div className="rounded-lg border border-dashed border-border bg-secondary px-3.5 py-3 pr-36">
              <span className="font-code text-sm font-semibold tracking-widest text-foreground">
                {maskCode(coupon.code)}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onAction(coupon)}
              className="cta-button hover:cta-button-hover absolute right-0 top-0 bottom-0 rounded-l-none px-5 text-xs"
            >
              Get Code
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onAction(coupon)}
            className="cta-button hover:cta-button-hover w-full px-4 py-3 text-sm"
          >
            Get Deal
          </button>
        )}
      </div>
    </article>
  );
}
