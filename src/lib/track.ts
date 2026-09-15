/**
 * Meta Pixel olay gönderimi.
 *
 * Tek giriş noktası: trackContact(). Gönderim ateşle-unut — fbq yoksa,
 * reklam engelleyici varsa ya da hata olursa sessizce geçer; hiçbir koşulda
 * bağlantıyı geciktirmez veya engellemez.
 */

type ContactMethod = "whatsapp" | "phone";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackContact(method: ContactMethod, contentName: string): void {
  try {
    window.fbq?.("track", "Contact", { content_name: contentName, method });
  } catch {
    /* ölçüm hatası kullanıcıyı etkilemesin */
  }
}

/** Yönetim ekranlarında ölçüm yapılmaz. */
export function isTrackablePath(pathname: string): boolean {
  return !pathname.startsWith("/admin") && !pathname.startsWith("/auth");
}

/** Bağlantının hangi temas türü olduğunu döndürür; ikisi de değilse null. */
export function contactMethodForHref(href: string | null): ContactMethod | null {
  if (!href) return null;
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("wa.me/")) return "whatsapp";
  return null;
}

/** Olayda görünecek ad: sayfa yolu + buton metni/aria-label. */
export function contactLabel(link: HTMLAnchorElement, pathname: string): string {
  const raw = link.getAttribute("aria-label") || link.textContent || "";
  const label = raw.replace(/\s+/g, " ").trim().slice(0, 60);
  return label ? `${pathname} · ${label}` : pathname;
}
