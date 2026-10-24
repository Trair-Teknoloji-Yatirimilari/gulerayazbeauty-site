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
import { SERVICE_PAGES, serviceLocalesForPath } from "@/lib/service-pages";
import { DEFAULT_LOCALE, type Locale } from "./types";

/** Türkçe dışındaki diller URL'de önek alır. */
const PREFIXED_LOCALES = ["en", "fa"] as const;
type PrefixedLocale = (typeof PREFIXED_LOCALES)[number];

function isPrefixedLocale(v: string): v is PrefixedLocale {
  return (PREFIXED_LOCALES as readonly string[]).includes(v);
}

/**
 * Rota tabanlı çevrilmiş sayfalar (hizmet sayfası olmayanlar).
 * Bunların karşılığı $lang/ altındaki rota dosyalarıdır.
 */
const STATIC_TRANSLATED = ["/", "/kvkk", "/galeri"] as const;

/**
 * Bu yolun karşılığı olan diller. TEK KAYNAK — hreflang, dil değiştirici ve
 * sitemap hep buradan beslenir.
 *
 * Hizmet sayfaları için liste service-pages.{tr,en,fa}.ts dizilerinden TÜRETİLİR:
 * bir sayfa service-pages.en.ts'e eklendiği an /en/<path> otomatik olarak
 * çevrilmiş sayılır, ikinci bir listeye elle eklemek gerekmez. Diller arası
 * asimetri de desteklenir (EN'de var, FA'da yok → hreflang yalnızca tr+en).
 */
export function localesForPath(basePath: string): Locale[] {
  if ((STATIC_TRANSLATED as readonly string[]).includes(basePath)) return ["tr", "en", "fa"];
  return serviceLocalesForPath(basePath);
}

/** Birden fazla dilde karşılığı var mı? */
export function isTranslatedPath(p: string): boolean {
  return localesForPath(p).length > 1;
}

/** Sitemap'in gezeceği, çevrilmiş tüm kanonik yollar. */
export function allTranslatedPaths(): string[] {
  const set = new Set<string>(STATIC_TRANSLATED);
  for (const s of SERVICE_PAGES) if (localesForPath(s.path).length > 1) set.add(s.path);
  return [...set];
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
  const locales = localesForPath(basePath);
  const links: Array<{ rel: string; hreflang?: string; href: string }> = [
    { rel: "canonical", href: localizedUrl(basePath, locale) },
  ];
  if (locales.length < 2) return links; // tek dilli sayfaya hreflang basma
  for (const l of locales) {
    links.push({ rel: "alternate", hreflang: l, href: localizedUrl(basePath, l) });
  }
  links.push({ rel: "alternate", hreflang: "x-default", href: localizedUrl(basePath, "tr") });
  return links;
}
