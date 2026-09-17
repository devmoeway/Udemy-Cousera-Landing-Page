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
    <p>Because Udemy discounts vary by course, category, and how new a listing is, it's worth comparing two or three offers below before you commit — especially if you're deciding between an individual course and a Personal Plan subscription, since the better deal isn't always obvious at first glance.</p>
    <p>Udemy hosts courses across dozens of categories — programming, AI and ChatGPT, data analytics, digital marketing, design, project management, and more — so whether you're picking up a first skill or upskilling for a promotion, there's usually a discounted course worth grabbing here.</p>
  `,
  footer: `
    <h3>How to Redeem a Udemy Coupon</h3>
    <ol>
      <li>Pick an offer above and click "Get Code" or "Get Deal."</li>
      <li>For a "Code" offer, copy the code shown — it's already copied to your clipboard once you click.</li>
      <li>You'll land on the Udemy course or checkout page. If you're not signed in, log in or create a free account.</li>
      <li>For "Code" offers, paste the code into the promo code field before completing payment. "Deal" offers apply automatically — just check the final price matches before paying.</li>
      <li>Confirm your purchase and get instant access to the course.</li>
    </ol>

    <h3>Udemy Coupon FAQs</h3>
    <p><strong>Do these coupon codes work on any course?</strong><br/>
    Not always — some codes apply sitewide, while others are tied to a specific course, category, or minimum order value. Check the title of each offer above; it usually states the scope.</p>
    <p><strong>Why didn't my code work at checkout?</strong><br/>
    Codes can expire quickly, hit a redemption cap, or be restricted to certain regions or account types (new users, students, etc.). If one code fails, try another offer above — new codes are added frequently.</p>
    <p><strong>Is a subscription or a one-off course cheaper?</strong><br/>
    If you plan to take more than a couple of courses a year, the Personal Plan subscription deals above are usually better value than paying per course — especially while a plan discount is active.</p>
    <p><strong>Does Udemy offer refunds?</strong><br/>
    Yes, Udemy generally allows refunds within a set window after purchase if a course isn't what you expected. Check Udemy's current refund policy for the exact eligibility window before buying.</p>
    <p><strong>Are Udemy certificates worth adding to a resume?</strong><br/>
    They're not accredited degrees, but many learners add them to a CV or LinkedIn profile to show initiative and up-to-date skills — particularly useful in fast-moving fields like tech and AI, where formal programs can lag behind.</p>
    <p><strong>How often do new Udemy coupons show up?</strong><br/>
    Udemy runs frequent promotions, including flash sales and seasonal events like Black Friday, so discounts here are refreshed often rather than being a handful of static offers.</p>
    <p><strong>Are there free Udemy courses available?</strong><br/>
    Udemy does offer a selection of free courses alongside paid ones. Free courses typically don't include a certificate of completion — that's more common with paid enrollments.</p>
  `,
},
  coursera: {
  header: `
    <h2>Today's Verified Coursera Coupons</h2>
    <p>Every code and deal listed below is checked regularly, so you're not stuck copying an expired offer at checkout. Codes marked "Code" need to be entered manually before payment; offers marked "Deal" apply automatically once you click through — no code needed.</p>
    <p>Most Coursera discounts apply to a Coursera Plus subscription rather than individual course purchases, so check each offer's title above to see exactly what it covers before you click through — the savings on an annual Plus plan can be significantly larger than on a single course.</p>
    <p>Coursera partners with top universities and companies to offer courses, Specializations, and Professional Certificates across AI, data science, business, cybersecurity, cloud computing, and more — useful whether you're after a quick skill refresh or a credential to add to your resume.</p>
  `,
  footer: `
    <h3>How to Redeem a Coursera Coupon</h3>
    <ol>
      <li>Pick an offer above and click "Get Code" or "Get Deal."</li>
      <li>For a "Code" offer, copy the code shown — it's already copied to your clipboard once you click.</li>
      <li>You'll land on Coursera. Sign in, or create a free account if you're new.</li>
      <li>Choose the course, Specialization, or Coursera Plus plan the offer applies to.</li>
      <li>For "Code" offers, paste the code into the promo field at checkout before paying. "Deal" offers apply automatically — just confirm the discounted price before completing payment.</li>
    </ol>

    <h3>Coursera Coupon FAQs</h3>
    <p><strong>Does this discount apply to individual courses or Coursera Plus?</strong><br/>
    Check the offer title above — most current promotions apply to a Coursera Plus subscription rather than single-course purchases.</p>
    <p><strong>Why didn't my code work at checkout?</strong><br/>
    Codes can expire, hit a redemption cap, or be limited to new users, students, or educators. If one fails, try another offer above — new codes are added regularly.</p>
    <p><strong>Can I combine a free trial with a discount code?</strong><br/>
    Usually not — a free trial and a percentage-off code both apply to the first billing cycle, so Coursera will generally let you use one or the other, not both.</p>
    <p><strong>Is Coursera actually free?</strong><br/>
    Not entirely. Many courses can be audited for free, but certificates, graded assignments, and most Specializations or Coursera Plus content require payment or a subscription.</p>
    <p><strong>Do free (audited) courses come with a certificate?</strong><br/>
    No — auditing a course gives you the learning materials, but you'll need to pay for the course, subscribe to Coursera Plus, or enroll in an eligible certificate program to earn a verified certificate.</p>
    <p><strong>Is a Coursera Plus subscription worth it over paying per course?</strong><br/>
    If you expect to take more than a couple of courses or Specializations in a year, Coursera Plus usually works out cheaper — especially when an active discount code is stacked on top of the annual price.</p>
    <p><strong>Does Coursera actually help with getting a job?</strong><br/>
    It can — Coursera's Professional Certificates and Specializations are built around in-demand skills, and many learners use them to strengthen a resume, switch careers, or prepare for a specific role rather than as a substitute for a full degree.</p>
  `,
},
};
