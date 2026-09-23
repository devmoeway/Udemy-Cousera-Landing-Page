export const TRACKED_PARAMS = ["gclid", "gbraid", "wbraid"] as const;
export type TrackedParam = (typeof TRACKED_PARAMS)[number];
