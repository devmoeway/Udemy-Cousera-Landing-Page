import { ClipboardCopy, MousePointerClick, PartyPopper, ShoppingCart } from "lucide-react";

const STEPS = [
  { icon: MousePointerClick, text: 'Click "Show/Get Code"' },
  { icon: ClipboardCopy, text: "Copy the code" },
  { icon: ShoppingCart, text: "Enter the code at checkout" },
  { icon: PartyPopper, text: "Enjoy your savings!" },
];

interface Props {
  /** "inline-vertical" = stacked list next to the brand description (desktop sidebar). */
  layout?: "inline-vertical" | "bottom";
  className?: string;
}

export function HowItWorks({ layout = "bottom", className = "" }: Props) {
  const vertical = layout === "inline-vertical";

  return (
    <section className={`ticket-card p-6 ${className}`}>
      <h2 className="font-heading text-lg font-semibold">How it works</h2>
      <ol className={`mt-4 grid gap-4 ${vertical ? "" : "sm:grid-cols-4"}`}>
        {STEPS.map((step, i) => (
          <li key={step.text} className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
              <step.icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground">Step {i + 1}</p>
              <p className="text-sm font-medium">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
