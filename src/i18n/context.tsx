import { createContext, useContext, useMemo, type ReactNode } from "react";
import { DEFAULT_LOCALE, dirOf, type Locale } from "./types";
import { getDict, type Dict } from "./index";

/**
 * Dil, yalnızca URL'den gelir (bkz. locale-path.ts). Sağlayıcı dili kendisi
 * seçmez; RootComponent yoldan türetip prop olarak verir. Dil değişimi bir
 * gezinmedir — LanguageSwitcher <Link> ile ilgili dilin URL'sine gider.
 *
 * <html lang>/<html dir> RootShell'de set edilir; burada document'a yazılmaz
 * (iki yerden yazmak hidrasyon uyuşmazlığı riski taşır).
 */
type Ctx = { locale: Locale; t: Dict; dir: "ltr" | "rtl" };
const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<Ctx>(
    () => ({ locale, t: getDict(locale), dir: dirOf(locale) }),
    [locale],
  );
  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) return { locale: DEFAULT_LOCALE, t: getDict(DEFAULT_LOCALE), dir: "ltr" as const };
  return ctx;
}
