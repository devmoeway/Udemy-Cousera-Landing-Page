/**
 * EDIT HERE: Google Tag Manager container ID.
 * Prefers the VITE_GTM_ID environment variable when present.
 */
export const GTM_CONTAINER_ID: string =
  (import.meta.env['VITE_GTM_ID'] as string | undefined) ?? "GTM-T5DBJMWF";

export const isGtmEnabled = /^GTM-[A-Z0-9]+$/.test(GTM_CONTAINER_ID) && GTM_CONTAINER_ID !== "GTM-XXXXXXX";
