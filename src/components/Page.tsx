import Head from "next/head";
import Barcode from "@/components/Barcode";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import {
  IN_PROGRESS,
  barcodeText,
  education,
  links,
  nameBarcode,
  roles,
  skillIds,
} from "@/data/profile";
import { projects } from "@/data/projects";
import { Locale, defaultLocale, getDictionary, localeMeta, localePath, locales } from "@/i18n";
import { siteUrl } from "../../site.config";

const linkClass =
  "underline decoration-rule decoration-2 underline-offset-4 hover:decoration-ink";

const ogImage = `${siteUrl}/og.png`;

/**
 * A página inteira, num só componente que recebe o idioma.
 *
 * Cada idioma tem a sua própria rota exportada (`/`, `/en`, `/es`) porque o
 * roteamento i18n do Next não funciona com `output: 'export'`.
 */
export default function Page({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { ogLocale } = localeMeta[locale];
  const url = `${siteUrl}${localePath(locale)}`;

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={url} />

        {/* Diz ao buscador que as três páginas são a mesma, em idiomas diferentes.
            O x-default é para quem não casa com nenhum dos três */}
        {/* As chaves levam prefixo porque o next/head deduplica por chave entre
            todos os filhos, sem olhar o tipo da tag: sem isso as metas
            og:locale:alternate abaixo derrubariam estes links */}
        {locales.map((alternate) => (
          <link
            key={`hreflang-${alternate}`}
            rel="alternate"
            hrefLang={localeMeta[alternate].htmlLang}
            href={`${siteUrl}${localePath(alternate)}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteUrl}${localePath(defaultLocale)}`}
        />

        {/* Open Graph: o card que LinkedIn, WhatsApp e afins montam a partir do link */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gabriel Morais" />
        <meta property="og:locale" content={ogLocale} />
        {locales
          .filter((alternate) => alternate !== locale)
          .map((alternate) => (
            <meta
              key={`og-locale-${alternate}`}
              property="og:locale:alternate"
              content={localeMeta[alternate].ogLocale}
            />
          ))}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        {/* A imagem é só o código de barras com o nome, então serve aos três
            idiomas: muda a descrição dela, não o arquivo */}
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t.meta.ogImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <main className="mx-auto max-w-[880px] space-y-20 px-4 py-16 sm:px-6 sm:py-24">
        <header>
          <div className="mb-10 flex justify-end">
            <LanguageSwitcher current={locale} t={t.languages} />
          </div>

          <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-[4.25rem]">
            Gabriel Morais
          </h1>
          <p className="mt-3 text-xl text-graphite">{t.header.tagline}</p>

          <div className="mt-10">
            <Barcode
              pattern={nameBarcode}
              text={barcodeText}
              alt={t.header.barcodeAlt(barcodeText)}
            />
          </div>

          {/* O primeiro parágrafo respira mais porque vem logo depois do código
              de barras; os seguintes só se separam entre si */}
          {t.header.bio.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`max-w-prose text-xl leading-relaxed ${index === 0 ? "mt-10" : "mt-4"}`}
            >
              {paragraph}
            </p>
          ))}

          <nav aria-label={t.header.contactLabel} className="mt-8 flex gap-6 text-lg font-semibold">
            <a className={linkClass} href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className={linkClass} href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </header>

        {/* Os ids das seções ficam em português nos três idiomas: são âncora de
            URL e alvo de aria-labelledby, e assim o link continua valendo quando
            alguém troca de idioma */}
        <Section
          id="trajetoria"
          title={t.sections.timeline.title}
          intro={t.sections.timeline.intro}
        >
          <Timeline roles={roles} t={t.timeline} />
        </Section>

        <Section id="competencias" title={t.sections.skills.title}>
          <dl className="grid gap-y-4 sm:grid-cols-[14rem_1fr] sm:gap-x-8 sm:gap-y-6">
            {skillIds.map((id) => (
              <div key={id} className="sm:contents">
                <dt className="font-semibold">{t.skills[id].area}</dt>
                <dd className="text-graphite">{t.skills[id].items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projetos" title={t.sections.projects.title}>
          <Projects projects={projects} locale={locale} t={t.projects} />
        </Section>

        <Section id="formacao" title={t.sections.education.title}>
          <ul className="divide-y divide-rule border-y border-rule">
            {education.map((item) => (
              <li key={item.id} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <span className="block font-semibold">{t.education.course[item.id]}</span>
                  <span className="block text-graphite">{item.school}</span>
                </div>
                <span className="tabular-nums text-graphite">
                  {item.period === IN_PROGRESS ? t.education.inProgress : item.period}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="border-t border-rule pt-8 text-graphite">
          {t.footer.before}{" "}
          <a
            className={`${linkClass} text-ink`}
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {t.footer.after}
        </footer>
      </main>
    </>
  );
}
