export type Locale = "pt" | "en" | "es";

/** Ordem em que os idiomas aparecem no seletor */
export const locales: Locale[] = ["pt", "en", "es"];

export const defaultLocale: Locale = "pt";

interface LocaleMeta {
  /** Atributo lang do <html> e valor das tags hreflang */
  htmlLang: string;
  /** og:locale, no formato idioma_REGIÃO que o Open Graph pede */
  ogLocale: string;
  /** Primeiro segmento da rota. O português fica na raiz, então não tem segmento */
  segment: string;
  /** Rótulo curto do seletor */
  short: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  pt: { htmlLang: "pt-BR", ogLocale: "pt_BR", segment: "", short: "PT" },
  en: { htmlLang: "en", ogLocale: "en_US", segment: "en", short: "EN" },
  es: { htmlLang: "es", ogLocale: "es_ES", segment: "es", short: "ES" },
};

/**
 * Caminho da página do idioma, relativo ao basePath.
 *
 * A barra no fim acompanha o `trailingSlash: true` do next.config.js: é ela que
 * faz o export gerar `en/index.html` em vez de `en.html`, e assim o GitHub
 * Pages serve a página sem depender de reescrever a extensão.
 */
export function localePath(locale: Locale): string {
  const { segment } = localeMeta[locale];
  return segment ? `/${segment}/` : "/";
}

/**
 * Descobre o idioma a partir da rota da página.
 *
 * Cada idioma tem a sua própria página exportada, então o caminho basta. É o
 * que o `_document` usa para escrever o `<html lang>`, já que de lá não há
 * acesso às props da página.
 */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1] ?? "";
  return locales.find((locale) => localeMeta[locale].segment === segment) ?? defaultLocale;
}
