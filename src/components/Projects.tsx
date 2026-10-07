import { KeyboardEvent, useRef, useState } from "react";
import { Project } from "@/data/projects";

const ALL = "Todas";

export default function Projects({ projects }: { projects: Project[] }) {
  const languages = [ALL, ...Array.from(new Set(projects.flatMap((p) => p.languages)))];
  const [selected, setSelected] = useState(ALL);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
        aria-label="Filtrar projetos por linguagem"
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
              {language}
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
          {visible.length === 1 ? "1 projeto" : `${visible.length} projetos`}
        </p>
        <ul key={selected} className="fade-in mt-4 divide-y divide-rule border-y border-rule">
          {visible.map((project) => (
            <li key={project.url} className="relative py-5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold underline-offset-4 after:absolute after:inset-0 hover:underline"
              >
                {project.title}
              </a>
              <p className="mt-1 text-sm text-graphite">{project.languages.join(" e ")}</p>
              <p className="mt-2 max-w-prose">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
