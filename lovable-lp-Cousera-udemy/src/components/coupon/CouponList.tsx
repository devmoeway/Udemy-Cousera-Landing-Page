import { useMemo, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { AFFILIATE_LINKS, COUPONS } from "@/config";
import type { Brand, Coupon } from "@/types/coupon";
import { CouponCard } from "./CouponCard";
import { CodeRevealModal } from "./CodeRevealModal";
import { FilterTabs, type CouponFilter } from "./FilterTabs";

export function CouponList({ brand }: { brand: Brand }) {
  const coupons = COUPONS[brand];
  const [filter, setFilter] = useState<CouponFilter>("all");
  const navigate = useNavigate();
  const cpId = useRouterState({
    select: (s) => (s.location.search as { cp_id?: string })?.cp_id,
  });

  const counts = useMemo(
    () => ({
      all: coupons.length,
      Code: coupons.filter((c) => c.type === "Code").length,
      Deal: coupons.filter((c) => c.type === "Deal").length,
    }),
    [coupons],
  );

  //dbg
  const visible = filter === "all" ? coupons : coupons.filter((c) => c.type === filter);
  const selected = cpId ? (coupons.find((c) => c.counpon_id === cpId) ?? null) : null;
  console.log("DBG2", JSON.stringify(selected));


  const closeModal = () => {
    navigate({
      search: (prev: Record<string, unknown>) => {
        const { cp_id: _omit, ...rest } = prev ?? {};
        return rest;
      },
      replace: true,
    } as never);
  };

  const handleAction = (coupon: Coupon) => {
    // 1. Open the affiliate link (Link A) in a background tab, keeping focus here.
    const bgTab = window.open(AFFILIATE_LINKS[brand], "_blank");
    if (bgTab) bgTab.blur();
    window.focus();

    // 2. Reflect the opened coupon in the URL (Link B pattern: /{brand}?cp_id=...)
    navigate({
      search: (prev: Record<string, unknown>) => ({ ...prev, cp_id: coupon.counpon_id }),
    } as never);
  };

  return (
    <div className="space-y-4">
      <FilterTabs active={filter} counts={counts} onChange={setFilter} />
      <div className="space-y-4">
        {visible.map((coupon) => (
          <CouponCard key={coupon.counpon_id} coupon={coupon} onAction={handleAction} />
        ))}
      </div>
      <CodeRevealModal
        coupon={selected}
        brand={brand}
        open={selected !== null}
        onOpenChange={(open) => !open && closeModal()}
      />
    </div>
  );
}
