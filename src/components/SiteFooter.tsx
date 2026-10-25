import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Mail } from "lucide-react";
import { useT } from "@/i18n/context";
import { SERVICE_PAGES, serviceByPath } from "@/lib/service-pages";
import { localizedPath } from "@/i18n/locale-path";
import { reopenConsent } from "@/lib/consent";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteFooter() {
  const { t, locale } = useT();
  const addressLines = t.footer.address.split("\n");
  return (
    <footer className="relative border-t border-border/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 items-start">
          <div>
            <span className="text-gold-gradient font-display text-lg tracking-wide whitespace-nowrap block">
              {t.nav.brand}
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mt-2 block">
              {t.footer.tagline}
            </span>
          </div>

          {/* Hizmet sayfalarına iç bağlantı sütunu */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{t.footer.servicesHeader}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={localizedPath("/hizmetler", locale)} className="text-sm text-primary hover:text-primary/80 transition-colors">
                  {t.footer.allServices}
                </Link>
              </li>
              {/*
                Sıra KASITLI olarak TR dizisinden geliyor: üç dil dizisi farklı
                sırada tutuluyor, buradan dönseydik footer sırası dile göre
                değişirdi. Etiket ve href dile göre çözülür, sıra sabit kalır.
              */}
              {SERVICE_PAGES.map((s) => {
                const localized = serviceByPath(locale)[s.path] ?? s;
                return (
                  <li key={s.path}>
                    <Link to={localizedPath(s.path, locale)} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                      {localized.navLabel}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to="/kampanya" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {t.campaign.footerLink}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={localizedPath("/galeri", locale)} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {t.footer.galleryLink}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{t.footer.contactHeader}</h4>
            <a href="tel:+905010274777" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
              +90 501 027 4 777
            </a>
            <a href="tel:+902122234777" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
              +90 212 223 4 777
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Maslak+1453+Sarıyer+İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary mt-0.5" strokeWidth={1.5} />
              <span>
                {addressLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < addressLines.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </a>
          </div>

          <div className="md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-4">{t.footer.socialHeader}</h4>
            <a
              href="https://www.instagram.com/gulerayaz_beautycenter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram: @gulerayaz_beautycenter"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @gulerayaz_beautycenter
            </a>
            <a
              href="mailto:info@gulerayazbeauty.com"
              className="mt-3 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@gulerayazbeauty.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {t.nav.brand}. {t.footer.copyright}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] text-muted-foreground">
            <Link to={localizedPath("/galeri", locale)} className="hover:text-primary transition-colors underline underline-offset-2">
              {t.footer.galleryLink}
            </Link>
            ·
            <Link to="/blog" className="hover:text-primary transition-colors underline underline-offset-2">
              Blog
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link to={localizedPath("/kvkk", locale)} className="hover:text-primary transition-colors underline underline-offset-2">
              {t.footer.legalLink}
            </Link>
            <span className="hidden sm:inline">·</span>
            {/* KVKK: rızanın geri alınması, verilmesi kadar kolay olmalı */}
            <button
              type="button"
              onClick={reopenConsent}
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              {t.consent.manageLink}
            </button>
            <span className="hidden sm:inline">·</span>
            <span>{t.footer.disclaimer}</span>
          </div>
          {/*
            Dil değiştirici: SiteNav yalnızca ana sayfada render edildiği için
            /kvkk ve /galeri'de dil değiştirmenin başka yolu yoktu. Bileşen
            çevrilmemiş sayfalarda kendini gizler (TRANSLATED_PATHS).
          */}
          <div className="mt-3 flex justify-center">
            <LanguageSwitcher variant="footer" />
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            {t.footer.resultDisclaimer}
          </p>
        </div>
        <p className="text-[11px] text-muted-foreground text-center mt-8">
          {t.footer.credit}{" "}
          <a
            href="https://www.trairx.com"
            rel="noopener"
            className="font-medium hover:text-foreground transition-colors"
          >
            TrairX Technology
          </a>
        </p>
      </div>
    </footer>
  );
}
