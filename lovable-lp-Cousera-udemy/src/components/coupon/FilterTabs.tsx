export type CouponFilter = "all" | "Code" | "Deal";

interface Props {
  active: CouponFilter;
  counts: Record<CouponFilter, number>;
  onChange: (filter: CouponFilter) => void;
}

const TABS: { id: CouponFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Code", label: "Codes" },
  { id: "Deal", label: "Deals" },
];

export function FilterTabs({ active, counts, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === tab.id
              ? "bg-brand text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:bg-brand-light"
          }`}
        >
          {tab.label} ({counts[tab.id]})
        </button>
      ))}
    </div>
  );
}
