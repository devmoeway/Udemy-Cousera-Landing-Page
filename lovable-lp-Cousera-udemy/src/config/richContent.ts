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
    header: `
      <h2>Today's Verified Udemy Coupons</h2>
      <p>Every code and deal listed below is checked regularly, so you're not stuck copying an expired offer at checkout. Codes marked "Code" require you to enter them on the Udemy checkout page before payment; offers marked "Deal" apply automatically once you click through — no code needed.</p>
      <p>Because Udemy discounts vary by course, category, and how new a listing is, it's worth quickly comparing two or three offers below before you commit, especially if you're deciding between an individual course and a Personal Plan subscription.</p>
    `,
    footer: `
      <h3>Frequently Asked Questions</h3>
      <p><strong>Do Udemy coupon codes work on any course?</strong><br/>
      Some codes apply sitewide, while others are tied to a specific course, category, or price threshold — check the offer's title above, as it usually indicates the scope.</p>
      <p><strong>Why didn't my code work at checkout?</strong><br/>
      Codes can expire quickly, hit a redemption cap, or be restricted to certain regions or account types (new users, students). If one code fails, try another offer above — new codes are added frequently.</p>
      <p><strong>Is a subscription or a one-off course cheaper?</strong><br/>
      If you plan to take more than a couple of courses a year, the Personal Plan subscription deals above are usually better value than paying per course.</p>
    `,
  },
  coursera: {
    header: `
      <h2>Today's Verified Coursera Coupons</h2>
      <p>Every code and deal listed below is checked regularly, so you're not stuck copying an expired offer at checkout. Codes marked "Code" need to be entered manually before payment; offers marked "Deal" apply automatically once you click through.</p>
      <p>Most Coursera discounts apply to a Coursera Plus subscription rather than individual course purchases — check each offer's title above to see exactly what it covers before you click through.</p>
    `,
    footer: `
      <h3>Frequently Asked Questions</h3>
      <p><strong>Does this discount apply to individual courses or Coursera Plus?</strong><br/>
      Check the offer title above — most current promotions apply to a Coursera Plus subscription rather than single-course purchases.</p>
      <p><strong>Why didn't my code work at checkout?</strong><br/>
      Codes can expire, hit a redemption cap, or be limited to new users, students, or educators. If one fails, try another offer above.</p>
      <p><strong>Can I combine a free trial with a discount code?</strong><br/>
      Usually not — a free trial and a percentage-off code both apply to the first billing cycle, so Coursera will generally let you use one or the other, not both.</p>
    `,
  },
};
