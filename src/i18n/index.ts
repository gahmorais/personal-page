import { en } from "./en";
import { es } from "./es";
import { Locale } from "./locales";
import { pt } from "./pt";
import { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";
export {
  type Locale,
  defaultLocale,
  localeFromPathname,
  localeMeta,
  localePath,
  locales,
} from "./locales";
