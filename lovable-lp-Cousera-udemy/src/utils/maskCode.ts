/** Masks the second half of a coupon code: "SAVE50NOW" -> "SAVE5****" */
export function maskCode(code: string): string {
  if (!code) return "*******";
  const keep = Math.ceil(code.length / 2);
  return code.slice(0, keep) + "*".repeat(Math.max(code.length - keep, 3));
}
