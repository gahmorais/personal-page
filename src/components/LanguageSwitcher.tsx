import { Fragment } from "react";
import { useRouter } from "next/router";
import { Dictionary, Locale, localeMeta, localePath, locales } from "@/i18n";

interface IPropsLanguageSwitcher {
  current: Locale;
  t: Dictionary["languages"];
}

export default function LanguageSwitcher({ current, t }: IPropsLanguageSwitcher) {
  // Em produção o site vive numa subpasta e o href é absoluto a partir da raiz
  // do domínio: sem o basePath, /en apontaria para fora do site
  const { basePath } = useRouter();

  return (
    <nav aria-label={t.label} className="flex items-center gap-2 font-mono text-sm">
      {locales.map((locale, index) => {
        const { htmlLang, short } = localeMeta[locale];
        const isCurrent = locale === current;

        return (
          <Fragment key={locale}>
            {index > 0 && (
              <span className="text-rule" aria-hidden="true">
                ·
              </span>
            )}
            {/* Trocar de idioma troca o documento inteiro — o lang do <html>, o
                title e as meta tags do Open Graph — então é navegação dura, e
                não uma transição de rota do next/link */}
            <a
              href={`${basePath}${localePath(locale)}`}
              hrefLang={htmlLang}
              lang={htmlLang}
              aria-current={isCurrent ? "true" : undefined}
              className={
                isCurrent
                  ? "text-ink"
                  : "text-graphite underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-ink"
              }
            >
              {/* O leitor de tela anuncia "Português" em vez de soletrar "PT" */}
              <span className="sr-only">{t.name[locale]}</span>
              <span aria-hidden="true">{short}</span>
            </a>
          </Fragment>
        );
      })}
    </nav>
  );
}
