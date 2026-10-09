import { KeyboardEvent, useRef, useState } from "react";
import { Project } from "@/data/projects";
import { Dictionary, Locale, localeMeta } from "@/i18n";

// A aba que não filtra nada é comparada contra nomes de linguagem, então o valor
// é uma sentinela interna: traduzir só o rótulo evita colisão com uma linguagem
const ALL = "__all__";

interface IPropsProjects {
  projects: Project[];
  locale: Locale;
  t: Dictionary["projects"];
}

export default function Projects({ projects, locale, t }: IPropsProjects) {
  const languages = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.languages)))];
  const [selected, setSelected] = useState(ALL);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // "C e C#", "C and C#", "C y C#": a conjunção e a vírgula saem do ICU
  const list = new Intl.ListFormat(localeMeta[locale].htmlLang, { type: "conjunction" });

  const visible =
    selected === ALL ? projects : projects.filter((p) => p.languages.includes(selected));

  // Setas, Home e End movem a seleção entre as abas, como no padrão de tabs da WAI-ARIA
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = languages.indexOf(selected);
    const moves: Record<string, number> = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: languages.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = (moves[event.key] + languages.length) % languages.length;
    setSelected(languages[next]);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={t.filterLabel}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 py-1"
        onKeyDown={handleKeyDown}
      >
        {languages.map((language, index) => {
          const isSelected = language === selected;
          return (
            <button
              key={language}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={isSelected}
              aria-controls="projects-panel"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(language)}
              className={`shrink-0 rounded-full border px-4 py-1.5 transition-colors ${
                isSelected
                  ? "border-ink bg-ink text-paper"
                  : "border-rule text-ink hover:border-ink"
              }`}
            >
              {language === ALL ? t.all : language}
            </button>
          );
        })}
      </div>

      <div
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`tab-${languages.indexOf(selected)}`}
        className="mt-6"
      >
        <p className="text-graphite" aria-live="polite">
          {t.count(visible.length)}
        </p>
        <ul key={selected} className="fade-in mt-4 divide-y divide-rule border-y border-rule">
          {visible.map((project) => (
            <li key={project.id} className="relative py-5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold underline-offset-4 after:absolute after:inset-0 hover:underline"
              >
                {t.item[project.id].title}
              </a>
              <p className="mt-1 text-sm text-graphite">{list.format(project.languages)}</p>
              <p className="mt-2 max-w-prose">{t.item[project.id].description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
