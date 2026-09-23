import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { COUPONS } from "@/config";
import { resolveAffiliateLink } from "@/lib/resolve-affiliate-link";
import type { Brand, Coupon } from "@/types/coupon";
import { CouponCard } from "./CouponCard";
import { CodeRevealModal } from "./CodeRevealModal";
import { FilterTabs, type CouponFilter } from "./FilterTabs";

export function CouponList({ brand }: { brand: Brand }) {
  const coupons = COUPONS[brand];
  const [filter, setFilter] = useState<CouponFilter>("all");
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { cp_id?: string | number };
  // The router parses a numeric-looking cp_id into a number, so normalize to a
  // string to compare against the string counpon_id.
  const cpId = search.cp_id != null ? String(search.cp_id) : undefined;

  const counts = useMemo(
    () => ({
      all: coupons.length,
      Code: coupons.filter((c) => c.type === "Code").length,
      Deal: coupons.filter((c) => c.type === "Deal").length,
    }),
    [coupons],
  );

  const visible = filter === "all" ? coupons : coupons.filter((c) => c.type === filter);

  const [selected, setSelected] = useState<Coupon | null>(null);

  const stripCpId = () => {
    navigate({
      search: (prev: Record<string, unknown>) => {
        const { cp_id: _omit, ...rest } = prev ?? {};
        return rest;
      },
      replace: true,
    } as never);
  };

  // Sync the modal with the ?cp_id= param on initial mount AND on every
  // subsequent search change (e.g. back/forward navigation). An unknown id is
  // silently ignored and stripped from the URL so nothing crashes and no empty
  // modal is shown.
  useEffect(() => {
    if (!cpId) {
      setSelected(null);
      return;
    }
    const match = coupons.find((c) => String(c.counpon_id) === cpId) ?? null;
    if (match) {
      setSelected(match);
    } else {
      setSelected(null);
      stripCpId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpId, coupons]);

  const closeModal = () => {
    setSelected(null);
    stripCpId();
  };

  const handleAction = (coupon: Coupon) => {
    // 1. Open a NEW tab at this same page with ?cp_id= appended. This tab
    // naturally receives focus and shows the coupon page with the modal open.
    const codeModalUrl = `${window.location.origin}${window.location.pathname}?cp_id=${coupon.counpon_id}`;
    window.open(codeModalUrl, "_blank");

    // 2. Navigate the CURRENT (now backgrounded) tab straight to the affiliate URL.
    window.location.href = resolveAffiliateLink(brand);
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
