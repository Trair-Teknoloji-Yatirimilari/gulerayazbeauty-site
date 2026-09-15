import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { contactLabel, contactMethodForHref, isTrackablePath, trackContact } from "@/lib/track";

/**
 * Tüm wa.me ve tel: bağlantılarını tek bir yerden ölçer.
 *
 * Bağlantıların her birine ayrı onClick eklemek yerine belge düzeyinde tek
 * dinleyici kullanılıyor: sağ alttaki sabit WhatsApp butonu, hero CTA'ları,
 * iletişim bölümü, hizmet sayfalarının üst/alt CTA'ları, /kampanya butonları
 * ve footer telefonları dahil — sonradan eklenen bağlantılar da otomatik
 * kapsanır, hiçbiri atlanmaz.
 *
 * Dinleyici preventDefault çağırmaz ve hiçbir şeyi beklemez; gezinme
 * gecikmez. Yönetim ekranlarında (/admin, /auth) devre dışı.
 */
export function ContactTracking() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isTrackablePath(pathname)) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!link) return;
      const method = contactMethodForHref(link.getAttribute("href"));
      if (!method) return;
      trackContact(method, contactLabel(link, pathname));
    };

    // capture: olay, bağlantının kendi handler'ları durdursa bile yakalanır
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  return null;
}
