import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { servicePagesFor, serviceByPath } from "@/lib/service-pages";
import { BEAUTY_SALON_ID } from "@/lib/service-head";
import { SITE_URL } from "@/lib/site";
import { getDict } from "@/i18n";
import type { Locale } from "@/i18n/types";
import { alternateLinks, localizedPath, localizedUrl } from "@/i18n/locale-path";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/**
 * Hub'daki gruplama — ziyaretçi ihtiyaca göre tarasın diye.
 * Yollar KODDA kalır (çevrilmiyor); başlık ve intro sözlükten gelir.
 */
const GROUP_PATHS = {
  laser: ["/lazer-epilasyon", "/erkek-lazer-epilasyon", "/dovme-silme", "/karbon-peeling"],
  skinBody: ["/cilt-bakimi", "/led-isik-terapisi", "/vucut-sekillendirme", "/reformer-pilates"],
  hair: ["/kuafor", "/sac-boyama", "/keratin-brezilya-fonu", "/protez-sac"],
  detail: ["/manikur-pedikur", "/protez-tirnak", "/ipek-kirpik", "/kalici-makyaj"],
} as const;

type GroupKey = keyof typeof GROUP_PATHS;
const GROUP_ORDER: GroupKey[] = ["laser", "skinBody", "hair", "detail"];

/** Hub sayfaları (ör. /cihazlar) hizmet kataloğuna girmez */
function catalogFor(locale: Locale) {
  return servicePagesFor(locale).filter((s) => !s.hub);
}

export function servicesHubHead(locale: Locale) {
  const t = getDict(locale).servicesHub;
  const url = localizedUrl("/hizmetler", locale);
  const catalog = catalogFor(locale);
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: alternateLinks("/hizmetler", locale),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.ldItemList,
          itemListElement: catalog.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.navLabel,
            url: localizedUrl(s.path, locale),
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: getDict(locale).nav.home, item: localizedUrl("/", locale) },
            { "@type": "ListItem", position: 2, name: t.ldBreadcrumb, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: t.ldOfferCatalog,
          // Tek işletme kimliği — dile göre değişmez
          provider: { "@id": BEAUTY_SALON_ID },
          itemListElement: catalog.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.navLabel,
              url: localizedUrl(s.path, locale),
            },
          })),
        }),
      },
    ],
  };
}

export function ServicesHubPage({ locale }: { locale: Locale }) {
  const t = getDict(locale).servicesHub;
  const byPath = serviceByPath(locale);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 lg:px-10">
        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">{t.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-gold-gradient italic">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">{t.intro}</p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {GROUP_ORDER.map((key) => {
            const group = t.groups[key];
            return (
              <motion.section key={key} {...fadeUp}>
                <h2 className="font-display text-2xl md:text-3xl">{group.title}</h2>
                <p className="mt-3 max-w-2xl text-sm text-foreground/60 leading-relaxed">
                  {group.intro}
                </p>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {GROUP_PATHS[key].map((path) => {
                    const s = byPath[path];
                    if (!s) return null;
                    return (
                      <li key={path}>
                        <Link
                          to={localizedPath(s.path, locale)}
                          className="group flex h-full flex-col gap-2 rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/50"
                        >
                          <span className="flex items-center gap-2 font-display text-lg">
                            {s.navLabel}
                            <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                          </span>
                          <span className="text-sm leading-relaxed text-foreground/65">
                            {s.description}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.section>
            );
          })}
        </div>

        <motion.p {...fadeUp} className="mt-16 text-sm text-foreground/60 leading-relaxed">
          {t.closingBefore}
          <a
            href="https://wa.me/905010274777"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            {t.closingLink}
          </a>
          {t.closingAfter}
          {/*
            /kampanya ve /blog yalnızca Türkçe var; EN/FA'da bu iki cümle
            kasıtlı olarak yok (öneklenirse 404 olur, öneksiz bırakılırsa
            ziyaretçiyi Türkçe sayfaya düşürür).
          */}
          {locale === "tr" && (
            <>
              {" "}
              Güncel kampanyalar için{" "}
              <Link to="/kampanya" className="underline underline-offset-2 hover:text-primary">
                kampanya sayfamıza
              </Link>
              , uygulamalara dair yazılar için{" "}
              <Link to="/blog" className="underline underline-offset-2 hover:text-primary">
                blog bölümümüze
              </Link>{" "}
              bakabilirsiniz.
            </>
          )}
        </motion.p>

        <motion.p {...fadeUp} className="mt-10 text-xs italic text-muted-foreground leading-relaxed">
          {t.disclaimer}
        </motion.p>
      </main>

      <SiteFooter />
    </div>
  );
}
