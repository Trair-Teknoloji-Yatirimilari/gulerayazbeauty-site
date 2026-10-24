import { tr } from "./dictionaries/tr";
import { en } from "./dictionaries/en";
import { fa } from "./dictionaries/fa";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./types";

export type Dict = typeof tr;

const DICTS: Record<Locale, Dict> = { tr, en, fa };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}


export { DEFAULT_LOCALE, isLocale, type Locale } from "./types";
