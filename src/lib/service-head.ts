import { SITE_URL } from "./site";
import { alternateLinks, localizedUrl } from "@/i18n/locale-path";
import { getDict } from "@/i18n";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/types";
import type { ServicePage } from "./service-pages";

/** Ana sayfadaki BeautySalon şemasının @id'si — Service.provider buraya bağlanır. */
export const BEAUTY_SALON_ID = `${SITE_URL}/#beautysalon`;

/**
 * Hizmet sayfalarının ortak head() tanımı:
 * title + description + canonical VE og:url açıkça (kök layout'tan miras yok),
 * og:image, ve Service + BreadcrumbList + FAQPage JSON-LD.
 *
 * locale varsayılanı "tr" — 17 Türkçe rota dosyası serviceHead(DATA) olarak
 * çağırmaya devam eder, hiçbiri değişmedi. hreflang yalnızca sayfanın birden
 * fazla dilde karşılığı varsa basılır (alternateLinks bunu kendisi karar verir).
 */
export function serviceHead(data: ServicePage, locale: Locale = DEFAULT_LOCALE) {
  const url = localizedUrl(data.path, locale);
  // Her hizmet sayfasının kendi 1200x630 paylaşım görseli (public/og/<slug>.jpg)
  // Paylaşım görseli dile bağlı değil: üç dilde de aynı dosya.
  const image = `${SITE_URL}/og${data.path}.jpg`;

  return {
    meta: [
      { title: data.title },
      { name: "description", content: data.description },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: data.coverAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: alternateLinks(data.path, locale),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.h1,
          description: data.description,
          url,
          image,
          serviceType: data.navLabel,
          areaServed: { "@type": "City", name: "İstanbul" },
          provider: { "@id": BEAUTY_SALON_ID },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: getDict(locale).nav.home, item: localizedUrl("/", locale) },
            { "@type": "ListItem", position: 2, name: data.navLabel, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}
