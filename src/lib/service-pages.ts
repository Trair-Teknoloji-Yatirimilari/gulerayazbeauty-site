/**
 * Hizmet sayfası tipleri ve dile göre seçiciler.
 *
 * İçerikler dil başına ayrı dosyalarda: service-pages.{tr,en,fa}.ts
 *
 * DİKKAT — eşlemeler dil başına AYRI kurulur. Üç dilin girdileri aynı `path`
 * ve aynı `serviceKey` değerini taşır; tek bir havuzda Object.fromEntries'e
 * verilirse son dil diğerlerini sessizce ezer ve Türkçe sayfalar yabancı
 * içerik gösterir. Bu yüzden aşağıda hiçbir yerde diller birleştirilmez.
 */

export type Block =
  | { t: "p"; html: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] };

export interface ServicePage {
  /** Route yolu — sitemap ve iç bağlantılar bunu kullanır */
  path:
    | "/lazer-epilasyon" | "/erkek-lazer-epilasyon" | "/cilt-bakimi" | "/karbon-peeling"
    | "/vucut-sekillendirme" | "/dovme-silme" | "/kalici-makyaj" | "/protez-tirnak"
    | "/ipek-kirpik" | "/reformer-pilates" | "/kuafor" | "/sac-boyama"
    | "/keratin-brezilya-fonu" | "/protez-sac" | "/cihazlar"
    | "/manikur-pedikur" | "/led-isik-terapisi";
  /** Ana sayfadaki hizmet kartı anahtarı (SERVICE_IMAGES ile aynı) */
  serviceKey: string;
  /** true ise bu bir hizmet değil, hub sayfasıdır: /hizmetler kataloğuna girmez */
  hub?: boolean;
  /** Blog kategorisi eşlemesi (blog detayındaki "İlgili hizmet" kutusu) */
  blogCategory: string;
  /** Footer ve menülerde kullanılan kısa ad */
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  /** src/assets altındaki kapak dosyası adı */
  cover: string;
  coverAlt: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
  /** SSS'den sonra gelen, bağlantı içerebilen kapanış paragrafı */
  afterFaqHtml?: string;
  /** Sayfa sonundaki italik bilgilendirme notu */
  note: string;
}

import { LOCALES, type Locale } from "@/i18n/types";
import { SERVICE_PAGES_TR } from "./service-pages.tr";
import { SERVICE_PAGES_EN } from "./service-pages.en";
import { SERVICE_PAGES_FA } from "./service-pages.fa";

const BY_LOCALE: Record<Locale, ServicePage[]> = {
  tr: SERVICE_PAGES_TR,
  en: SERVICE_PAGES_EN,
  fa: SERVICE_PAGES_FA,
};

/** Dil başına AYRI kurulan eşlemeler — diller birbirini ezemez. */
const MAPS = Object.fromEntries(
  LOCALES.map((l) => {
    const pages = BY_LOCALE[l];
    return [
      l,
      {
        byPath: Object.fromEntries(pages.map((s) => [s.path, s])) as Record<string, ServicePage>,
        byBlogCategory: Object.fromEntries(pages.map((s) => [s.blogCategory, s])) as Record<string, ServicePage>,
        pathByKey: Object.fromEntries(pages.map((s) => [s.serviceKey, s.path])) as Record<string, string>,
      },
    ];
  }),
) as Record<Locale, { byPath: Record<string, ServicePage>; byBlogCategory: Record<string, ServicePage>; pathByKey: Record<string, string> }>;

export function servicePagesFor(locale: Locale): ServicePage[] {
  return BY_LOCALE[locale] ?? SERVICE_PAGES_TR;
}

export function serviceByPath(locale: Locale): Record<string, ServicePage> {
  return (MAPS[locale] ?? MAPS.tr).byPath;
}

/** Bu hizmet sayfasının karşılığı olan diller. locale-path.ts hreflang için kullanır. */
export function serviceLocalesForPath(basePath: string): Locale[] {
  return LOCALES.filter((l) => BY_LOCALE[l].some((s) => s.path === basePath));
}

/* ------------------------------------------------------------------ *
 * Türkçe — mevcut adlar ve davranış korunuyor.
 * 17 Türkçe rota dosyası, SiteFooter, hizmetler.tsx ve blog_.$slug.tsx
 * bu üçünü kullanmaya devam eder; hiçbiri değişmedi.
 * ------------------------------------------------------------------ */

export const SERVICE_PAGES = SERVICE_PAGES_TR;

export const SERVICE_BY_PATH = MAPS.tr.byPath;

/**
 * Blog kategorisi → hizmet sayfası (blog detayındaki "İlgili hizmet" kutusu).
 * TÜRKÇE kalır: blog yazıları DB'de yalnızca Türkçe ve /blog/* rotaları tek dilli.
 * EN/FA kategorileri bu havuza girmez.
 */
export const SERVICE_BY_BLOG_CATEGORY = MAPS.tr.byBlogCategory;

/** Ana sayfa hizmet kartı anahtarı → hizmet sayfası yolu (Türkçe kanonik yol). */
export const SERVICE_PATH_BY_KEY = MAPS.tr.pathByKey;
