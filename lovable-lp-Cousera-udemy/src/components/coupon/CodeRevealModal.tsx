import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BRANDS } from "@/config";
import { resolveAffiliateLink } from "@/lib/resolve-affiliate-link";
import type { Brand, Coupon } from "@/types/coupon";

interface Props {
  coupon: Coupon | null;
  brand: Brand;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CodeRevealModal({ coupon, brand, open, onOpenChange }: Props) {
  const [copied, setCopied] = useState(false);
  const brandName = BRANDS[brand].name;
  // "Deal" coupons have a placeholder ("Deal Activated"), not a real code to copy.
  const isDeal = coupon?.type === "Deal";
  const code = isDeal ? undefined : coupon?.code?.trim();

  const copy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goToBrand = () => {
  window.location.href = resolveAffiliateLink(brand);
};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">{coupon?.title ?? "Your coupon"}</DialogTitle>
          <DialogDescription>
            {isDeal
              ? `No code needed — this deal activates automatically at ${brandName}.`
              : `Copy this code, then head to ${brandName} and paste it at checkout.`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <span className="flex-1 rounded-md border border-dashed border-border bg-secondary px-4 py-3 text-center font-code text-lg font-semibold tracking-widest">
            {code || "No code needed"}
          </span>
          {!isDeal && (
            <button
              type="button"
              onClick={copy}
              disabled={!code}
              className="cta-button hover:cta-button-hover flex items-center gap-1.5 px-4 py-3 text-sm disabled:opacity-50"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={goToBrand}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground transition-[filter] hover:brightness-110"
        >
          <ExternalLink className="size-4" />
          Go to {brandName}
        </button>
      </DialogContent>
    </Dialog>
  );
}
