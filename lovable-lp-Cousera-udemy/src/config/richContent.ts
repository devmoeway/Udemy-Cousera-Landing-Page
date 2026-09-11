/**
 * EDIT HERE: long-form on-page content per brand.
 *
 * Purpose: add substantive editorial content to each brand page so the site is not
 * flagged as thin / low-content by ad review platforms.
 *
 * Both values are raw HTML strings rendered by <RichTextBlock />.
 * `header` renders below the brand banner, `footer` renders above the site footer.
 * Only trusted, internally authored HTML belongs here — never user input.
 */

export interface RichContent {
  header: string; // HTML string
  footer: string; // HTML string
}

export const richContent: Record<"udemy" | "coursera", RichContent> = {
  udemy: {
    header: `<p>Placeholder intro paragraph about Udemy coupons — replace with real long-form content later.</p>`,
    footer: `<p>Placeholder footer content — replace with real long-form content later.</p>`,
  },
  coursera: {
    header: `<p>Placeholder intro paragraph about Coursera coupons — replace with real long-form content later.</p>`,
    footer: `<p>Placeholder footer content — replace with real long-form content later.</p>`,
  },
};
