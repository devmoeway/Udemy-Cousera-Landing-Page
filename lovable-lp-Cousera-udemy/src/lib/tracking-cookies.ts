import { TRACKED_PARAMS, type TrackedParam } from "@/config/trackingParams";

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// Chạy 1 lần lúc app load. Chỉ GHI ĐÈ cookie khi param CÓ mặt trên URL —
// nếu param không có trên URL lần này, GIỮ NGUYÊN giá trị cookie cũ (nếu có),
// để click id không bị mất khi user lướt qua nhiều trang trước khi bấm nút.
export function captureTrackingParamsOnLoad() {
  const params = new URLSearchParams(window.location.search);
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key);
    if (value) setCookie(`tp_${key}`, value, 30);
  }
}

export function getTrackingParamValue(key: TrackedParam): string {
  return getCookie(`tp_${key}`) ?? "";
}
