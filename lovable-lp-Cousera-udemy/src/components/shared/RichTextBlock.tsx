/**
 * Renders trusted long-form HTML from src/config/richContent.ts.
 * Strips script/style/event handlers as a defensive measure.
 */
function sanitize(html: string): string {
  return html
    .replace(/<\s*(script|style|iframe|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "");
}

export function RichTextBlock({ html, className = "" }: { html: string; className?: string }) {
  if (!html?.trim()) return null;
  return (
    <section
      className={`rich-text ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitize(html) }}
    />
  );
}
