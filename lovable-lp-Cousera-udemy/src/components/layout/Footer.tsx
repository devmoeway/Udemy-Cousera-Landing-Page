export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          Thanks for supporting us!
        </p>
        <p>© {new Date().getFullYear()} CouponDesk. All rights reserved.</p>
      </div>
    </footer>
  );
}
