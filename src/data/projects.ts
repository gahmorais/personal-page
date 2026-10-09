/**
 * URL e linguagens de cada projeto. Título e descrição ficam nos dicionários
 * de `src/i18n/`, chaveados por estes ids.
 */

export type ProjectId =
  | "autocare"
  | "supervisorio-arduino"
  | "cartcheck"
  | "crud-c"
  | "mercadinho-tio-salim"
  | "tmdb-flutter"
  | "bootcamp-react"
  | "uri-online-judge";

export interface Project {
  id: ProjectId;
  /** Nomes de linguagem não traduzem; a conjunção da lista é que muda */
  languages: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: "autocare",
    languages: ["Kotlin"],
    url: "https://github.com/gahmorais/AutoCare_ProjetoAplicado",
  },
  {
    id: "supervisorio-arduino",
    languages: ["C", "C#"],
    url: "https://github.com/gahmorais/supervisorio-arduino-c-",
  },
  {
    id: "cartcheck",
    languages: ["Kotlin"],
    url: "https://github.com/gahmorais/cartcheck",
  },
  {
    id: "crud-c",
    languages: ["C"],
    url: "https://github.com/gahmorais/crud-in-c",
  },
  {
    id: "mercadinho-tio-salim",
    languages: ["Python"],
    url: "https://github.com/gahmorais/mercadinho-tio-salim",
  },
  {
    id: "tmdb-flutter",
    languages: ["Dart"],
    url: "https://github.com/gahmorais/projeto_flutter_tmdb_mba_xpedecacao",
  },
  {
    id: "bootcamp-react",
    languages: ["JavaScript"],
    url: "https://github.com/gahmorais/curso-igti-react",
  },
  {
    id: "uri-online-judge",
    languages: ["Java"],
    url: "https://github.com/gahmorais/uri-online-judge",
  },
];
