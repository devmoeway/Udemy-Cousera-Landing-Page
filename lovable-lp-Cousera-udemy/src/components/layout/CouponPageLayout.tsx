import { BRANDS, COUPONS } from "@/config";
import { richContent } from "@/config/richContent";
import type { Brand } from "@/types/coupon";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrandBanner } from "@/components/brand/BrandBanner";
import { CouponList } from "@/components/coupon/CouponList";
import { BrandInfoCard } from "@/components/sidebar/BrandInfoCard";
import { HowItWorks } from "@/components/shared/HowItWorks";
import { RichTextBlock } from "@/components/shared/RichTextBlock";

export function CouponPageLayout({ brand }: { brand: Brand }) {
  const info = BRANDS[brand];
  const content = richContent[brand];
  const percents = COUPONS[brand]
    .filter((c) => c.discount_value.endsWith("%"))
    .map((c) => Number(c.discount_value.replace(/[^\d.]/g, "")))
    .filter((n) => !Number.isNaN(n));
  const topDiscount = percents.length ? `${Math.max(...percents)}%` : "big discounts";

  return (
    <div className={`${info.themeClass} flex min-h-screen flex-col bg-background`}>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-4 py-8">
        <BrandBanner brand={info} topDiscount={topDiscount} />
        <RichTextBlock html={content.header} />
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <CouponList brand={brand} />
          <div className="space-y-6">
            <BrandInfoCard brand={info} />
            {/* Desktop: stacked steps under the brand description */}
            <HowItWorks layout="inline-vertical" className="hidden lg:block" />
          </div>
        </div>
        {/* Mobile / tablet: steps stay at the bottom of the page */}
        <HowItWorks className="lg:hidden" />
        <RichTextBlock html={content.footer} />
      </main>
      <Footer />
    </div>
  );
}
