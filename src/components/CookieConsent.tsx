import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useT } from "@/i18n/context";
import { loadMetaPixel, readConsent, writeConsent } from "@/lib/consent";

/**
 * Çerez onay bandı.
 *
 * Meta Pixel zorunlu çerez değil ve veriyi yurt dışına aktarıyor; bu yüzden
 * ziyaretçi "Kabul et" demeden yüklenmiyor. Karar localStorage'da saklanıyor,
 * sonraki ziyaretlerde bant gösterilmiyor.
 *
 * SSR'da hiçbir şey basmaz (ilk render'da `decided === null` ve `mounted`
 * false olduğu için) — hidrasyon uyuşmazlığı oluşmaz.
 */
export function CookieConsent() {
  const { t } = useT();
  const c = t.consent;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = readConsent();
    if (stored === "granted") {
      loadMetaPixel();
      return;
    }
    if (stored === "denied") return;
    setVisible(true);
  }, []);

  // Yönetim panelinde ve giriş ekranında gösterme
  if (!mounted || !visible) return null;
  if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) return null;

  const accept = () => {
    writeConsent("granted");
    loadMetaPixel();
    setVisible(false);
  };

  const decline = () => {
    writeConsent("denied");
    setVisible(false);
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
