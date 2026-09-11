import { Link } from "@tanstack/react-router";
import { Scissors } from "lucide-react";
import { BRAND_LIST } from "@/config";

export function Header() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/udemy" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-primary-foreground">
            <Scissors className="size-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">CouponDesk</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          {BRAND_LIST.map((brand) => (
            <Link
              key={brand.id}
              to={brand.path}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-brand-light hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-1.5 bg-brand-light text-foreground" }}
            >
              {brand.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
