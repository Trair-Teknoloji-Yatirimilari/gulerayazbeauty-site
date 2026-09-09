import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT } from "@/i18n/context";
import { whatsappLink } from "@/lib/site";

/**
 * Site üst menüsü. Ana sayfada bölüm çapaları aynı sayfada (#hizmetler),
 * diğer sayfalarda ana sayfaya dönmesi gerekiyor (/#hizmetler) — bunu
 * `onHome` belirliyor.
 */
export function SiteNav({ onHome = false }: { onHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const { t } = useT();
  const a = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
  const links: { href: string; label: string; route?: boolean }[] = [
    { href: a("merkez"), label: t.nav.about },
    { href: a("hizmetler"), label: t.nav.services },
    { href: a("deneyim"), label: t.nav.journey },
    { href: "/galeri", label: t.nav.gallery, route: true },
    { href: "/blog", label: t.nav.blog, route: true },
    { href: a("sss"), label: t.nav.faq },
    { href: a("iletisim"), label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        {onHome ? (
          <a href="#top" className="flex flex-col items-start leading-none group">
            <span className="text-gold-gradient font-display text-base md:text-lg tracking-wide whitespace-nowrap">
              {t.nav.brand}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {t.nav.tagline}
            </span>
          </a>
        ) : (
          <Link to="/" className="flex flex-col items-start leading-none group">
            <span className="text-gold-gradient font-display text-base md:text-lg tracking-wide whitespace-nowrap">
              {t.nav.brand}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {t.nav.tagline}
            </span>
          </Link>
        )}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.route ? (
              <Link key={l.href} to={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={whatsappLink(t.whatsapp.prefilledMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2 text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {t.nav.ctaAppointment} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button onClick={() => setOpen(!open)} className="text-primary p-2" aria-label={t.nav.menuAria}>
            <div className="w-6 h-px bg-current mb-1.5" />
            <div className="w-6 h-px bg-current mb-1.5" />
            <div className="w-4 h-px bg-current ml-auto" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) =>
              l.route ? (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground/80">{l.label}</Link>
              ) : (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground/80">{l.label}</a>
              ),
            )}
          </div>
        </div>
      )}
    </motion.header>
  );
}
