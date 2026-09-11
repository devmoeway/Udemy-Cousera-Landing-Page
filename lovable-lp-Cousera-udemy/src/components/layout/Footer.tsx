export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </p>
        <p>© {new Date().getFullYear()} CouponDesk. All rights reserved.</p>
      </div>
    </footer>
  );
}
