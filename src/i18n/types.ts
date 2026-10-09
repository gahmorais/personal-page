import { EducationId, Lane, RoleId, SkillId } from "@/data/profile";
import { ProjectId } from "@/data/projects";
import { Locale } from "./locales";

/**
 * Contrato único dos três idiomas.
 *
 * Os `Record` chaveados pelos ids de `src/data/` são de propósito: o
 * `npm run typecheck` reprova qualquer idioma que esqueça um cargo, projeto,
 * competência ou curso — e também o que sobrar depois de um id ser removido.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    /** Descrição da imagem de preview, para quem compartilha o link */
    ogImageAlt: string;
  };

  header: {
    tagline: string;
    /** Um item por parágrafo da bio */
    bio: string[];
    barcodeAlt: (text: string) => string;
    contactLabel: string;
  };

  languages: {
    /** aria-label do seletor de idioma */
    label: string;
    /** Nome de cada idioma no próprio idioma, para o leitor de tela */
    name: Record<Locale, string>;
  };

  sections: {
    timeline: { title: string; intro: string };
    skills: { title: string };
    projects: { title: string };
    education: { title: string };
  };

  timeline: {
    lane: Record<Lane, string>;
    /** Rótulo do sentinela PRESENT no fim do período do cargo atual */
    present: string;
    showDetails: string;
    hideDetails: string;
    role: Record<RoleId, { title: string; summary: string; details?: string[] }>;
  };

  skills: Record<SkillId, { area: string; items: string }>;

  projects: {
    filterLabel: string;
    /** Rótulo da aba que não filtra nada */
    all: string;
    count: (total: number) => string;
    item: Record<ProjectId, { title: string; description: string }>;
  };

  education: {
    /** Rótulo do sentinela IN_PROGRESS no lugar do período */
    inProgress: string;
    course: Record<EducationId, string>;
  };

  footer: {
    /** A frase quebra em duas porque o link do LinkedIn fica no meio */
    before: string;
    after: string;
  };
}
