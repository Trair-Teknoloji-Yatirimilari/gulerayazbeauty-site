/**
 * Dil ↔ URL eşlemesi. TEK KAYNAK.
 *
 * Dil yalnızca yoldan türetilir: Türkçe kökte (/kvkk), diğer diller önekli
 * (/en/kvkk, /fa/kvkk). localStorage veya tarayıcı tercihi render edilen dili
 * BELİRLEMEZ ve otomatik yönlendirme yapılmaz — Googlebot'u yönlendirmek
 * indekslemeyi bozar.
 *
 * RootShell (<html lang>), RootComponent (LocaleProvider), dil değiştirici ve
 * hreflang etiketleri hep bu dosyadaki fonksiyonları kullanır; böylece
 * ikisi birbirinden ayrışamaz.
 */

import { SITE_URL } from "@/lib/site";
import { DEFAULT_LOCALE, type Locale } from "./types";

/** Türkçe dışındaki diller URL'de önek alır. */
const PREFIXED_LOCALES = ["en", "fa"] as const;
type PrefixedLocale = (typeof PREFIXED_LOCALES)[number];

function isPrefixedLocale(v: string): v is PrefixedLocale {
  return (PREFIXED_LOCALES as readonly string[]).includes(v);
}

/**
 * Aşama 1'de üç dile çevrilmiş sayfalar.
 *
 * Hem hreflang etiketleri hem dil değiştirici bu listeden beslenir. Aşama 2'de
 * hizmet sayfaları çevrilince YALNIZCA buraya ekleme yapılır; iki yeri birden
 * güncellemek gerekmez.
 */
export const TRANSLATED_PATHS = ["/", "/kvkk", "/galeri"] as const;
export type TranslatedPath = (typeof TRANSLATED_PATHS)[number];

export function isTranslatedPath(p: string): p is TranslatedPath {
  return (TRANSLATED_PATHS as readonly string[]).includes(p);
}

/** Yoldan dili türetir. Önek yoksa Türkçe. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1] ?? "";
  return isPrefixedLocale(seg) ? seg : DEFAULT_LOCALE;
}

/** Dil önekini atıp kanonik (Türkçe) yolu döndürür: /en/kvkk → /kvkk, /en → / */
export function basePathOf(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isPrefixedLocale(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}

/** Kanonik yolu istenen dilde URL'ye çevirir: ("/kvkk","en") → /en/kvkk */
export function localizedPath(basePath: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return basePath;
  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
}

/** Mutlak URL. */
export function localizedUrl(basePath: string, locale: Locale): string {
  return `${SITE_URL}${localizedPath(basePath, locale)}`;
}

/**
 * head() için canonical + karşılıklı hreflang bağlantıları.
 * Canonical her dilde KENDİ URL'sidir; x-default Türkçe'yi gösterir.
 * Yalnızca çevrilmiş sayfalarda çağrılmalı.
 */
export function alternateLinks(basePath: string, locale: Locale) {
  return [
    { rel: "canonical", href: localizedUrl(basePath, locale) },
    { rel: "alternate", hreflang: "tr", href: localizedUrl(basePath, "tr") },
    { rel: "alternate", hreflang: "en", href: localizedUrl(basePath, "en") },
    { rel: "alternate", hreflang: "fa", href: localizedUrl(basePath, "fa") },
    { rel: "alternate", hreflang: "x-default", href: localizedUrl(basePath, "tr") },
  ];
}
