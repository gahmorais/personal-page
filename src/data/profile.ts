/**
 * Fatos que não dependem de idioma: datas, nomes próprios e a estrutura da
 * trajetória. Todo o texto corrido vive nos dicionários de `src/i18n/`,
 * chaveado pelos ids daqui.
 */

export type Lane = "hardware" | "software" | "both";

/** Sentinela no lugar de uma data: o rótulo ("hoje", "today", "hoy") vem do dicionário */
export const PRESENT = "present";

/** Idem, para um curso em andamento */
export const IN_PROGRESS = "in-progress";

export type RoleId =
  | "libermac-auxiliar"
  | "sbitec-tecnico"
  | "bkp-tecnico"
  | "bkp-supervisor"
  | "bkp-dev"
  | "bkp-lider";

export interface Role {
  id: RoleId;
  start: string;
  end: string;
  /** Nome próprio, não traduz */
  company: string;
  lane: Lane;
}

export type SkillId = "android" | "hardware" | "arquitetura" | "backend";

export type EducationId = "mba-ia" | "mba-mobile" | "engenharia" | "tecnico";

export interface Education {
  id: EducationId;
  /** Nome próprio, não traduz */
  school: string;
  period: string;
}

// Código 128 (subconjunto B) de "GABRIEL MORAIS": 1 = barra, 0 = espaço
export const nameBarcode =
  "110100100001101000100010100011000100010110001100010111011000100010100011010001000110111011011001100101110110001000111011011000101110101000110001100010001011011101000111101101101100011101011";

export const barcodeText = "GABRIEL MORAIS";

export const links = {
  linkedin: "https://www.linkedin.com/in/gabriel-morais-dev/",
  github: "https://github.com/gahmorais",
};

export const roles: Role[] = [
  {
    id: "libermac-auxiliar",
    start: "2011",
    end: "2011",
    company: "Libermac Automação Comercial",
    lane: "hardware",
  },
  {
    id: "sbitec-tecnico",
    start: "2012",
    end: "2013",
    company: "SBITEC",
    lane: "hardware",
  },
  {
    id: "bkp-tecnico",
    start: "2013",
    end: "2017",
    company: "BKP Automação",
    lane: "hardware",
  },
  {
    id: "bkp-supervisor",
    start: "2017",
    end: "2019",
    company: "BKP Automação",
    lane: "hardware",
  },
  {
    id: "bkp-dev",
    start: "2020",
    end: "2025",
    company: "BKP Automação",
    lane: "software",
  },
  {
    id: "bkp-lider",
    start: "2025",
    end: PRESENT,
    company: "BKP Automação",
    lane: "both",
  },
];

/** Ordem em que as competências aparecem */
export const skillIds: SkillId[] = ["android", "hardware", "arquitetura", "backend"];

export const education: Education[] = [
  { id: "mba-ia", school: "Full Cycle", period: IN_PROGRESS },
  { id: "mba-mobile", school: "XP Educação", period: "2022 – 2023" },
  { id: "engenharia", school: "Universidade São Judas Tadeu", period: "2015 – 2020" },
  { id: "tecnico", school: "ETEC Martin Luther King", period: "2010 – 2011" },
];
