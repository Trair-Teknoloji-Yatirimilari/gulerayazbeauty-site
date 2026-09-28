import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useT } from "@/i18n/context";
import {
  CONSENT_REOPEN_EVENT,
  isPixelLoaded,
  loadMetaPixel,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { isTrackablePath } from "@/lib/track";

/**
 * Çerez onay bandı.
 *
 * Meta Pixel zorunlu çerez değil ve veriyi yurt dışına aktarıyor; bu yüzden
 * ziyaretçi "Kabul et" demeden yüklenmiyor. Karar localStorage'da saklanıyor,
 * sonraki ziyaretlerde bant gösterilmiyor.
 *
 * Yönetim ekranlarında (/admin, /auth) ne bant gösterilir ne de Pixel
 * yüklenir — daha önce rıza verilmiş bir tarayıcı doğrudan panele girse bile.
 *
 * SSR'da hiçbir şey basmaz (`mounted` false) — hidrasyon uyuşmazlığı olmaz.
 */
export function CookieConsent() {
  const { t } = useT();
  const c = t.consent;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const trackable = isTrackablePath(pathname);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => setMounted(true), []);

  // Rıza varsa Pixel'i yükle; yoksa bandı göster. Yönetim ekranlarında ikisi de yok.
  useEffect(() => {
    if (!trackable) {
      setVisible(false);
      return;
    }
    const stored = readConsent();
    if (stored === "granted") {
      loadMetaPixel();
      setVisible(false);
    } else if (stored === "denied") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [trackable]);

  // Footer'daki "Çerez tercihleri" bağlantısı bandı yeniden açar
  useEffect(() => {
    const onReopen = () => setVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, onReopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, onReopen);
  }, []);

  if (!mounted || !visible || !trackable) return null;

  const accept = () => {
    writeConsent("granted");
    loadMetaPixel();
    setVisible(false);
  };

  const decline = () => {
    // localStorage'a bakılmaz: bandı yeniden açan reopenConsent() kaydı zaten
    // silmiş olur, o yüzden ölçüt Pixel'in bellekte yüklü olup olmadığıdır.
    const wasLoaded = isPixelLoaded();
    writeConsent("denied");
    setVisible(false);
    // Yüklenmiş fbq'yu bellekten kaldırmanın tek güvenilir yolu sayfayı yenilemek
    if (wasLoaded) window.location.reload();
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={c.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[2147483643] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border/60 bg-background/95 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <p className="flex-1 text-xs leading-relaxed text-foreground/80 sm:text-sm">
          {c.body}{" "}
          <Link to="/kvkk" className="underline underline-offset-2 hover:text-primary">
            {c.policyLink}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {c.decline}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
