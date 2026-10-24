export const LOCALES = ["tr", "en", "fa"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "tr";

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}


export function dirOf(l: Locale): "ltr" | "rtl" {
  return l === "fa" ? "rtl" : "ltr";
}

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  fa: "FA",
};

export const localeFullNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  fa: "فارسی",
};
