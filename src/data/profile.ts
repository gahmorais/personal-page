export type Lane = "hardware" | "software" | "both";

export interface Role {
  start: string;
  end: string;
  title: string;
  company: string;
  lane: Lane;
  summary: string;
  details?: string[];
}

// Código 128 (subconjunto B) de "GABRIEL MORAIS": 1 = barra, 0 = espaço
export const nameBarcode =
  "110100100001101000100010100011000100010110001100010111011000100010100011010001000110111011011001100101110110001000111011011000101110101000110001100010001011011101000111101101101100011101011";

export const links = {
  linkedin: "https://www.linkedin.com/in/gabrielmorais-dev",
  github: "https://github.com/gahmorais",
};

export const roles: Role[] = [
  {
    start: "2011",
    end: "2011",
    title: "Auxiliar técnico",
    company: "Libermac Automação Comercial",
    lane: "hardware",
    summary: "Manutenção de impressoras térmicas e equipamentos de automação comercial.",
  },
  {
    start: "2012",
    end: "2013",
    title: "Técnico em eletrônica",
    company: "SBITEC",
    lane: "hardware",
    summary: "Manutenção de impressoras de etiquetas e de cartões.",
  },
  {
    start: "2013",
    end: "2017",
    title: "Técnico eletrônico",
    company: "BKP Automação",
    lane: "hardware",
    summary:
      "Reparo de impressoras, leitores e coletores de código de barras em nível de componente.",
  },
  {
    start: "2017",
    end: "2019",
    title: "Supervisor de assistência técnica",
    company: "BKP Automação",
    lane: "hardware",
    summary:
      "Supervisão da equipe de reparo de impressoras, leitores e coletores de código de barras.",
  },
  {
    start: "2020",
    end: "2025",
    title: "Desenvolvedor de software",
    company: "BKP Automação",
    lane: "software",
    summary:
      "Desenvolvimento do software das mesmas impressoras, leitores e coletores que eu reparava na bancada. O primeiro foi um app Android em Kotlin para inventário de equipamentos numa rede de supermercados de 20 lojas, com autenticação por técnico e gravação no Realtime Database do Firebase.",
  },
  {
    start: "2025",
    end: "hoje",
    title: "Líder de engenharia",
    company: "BKP Automação",
    lane: "both",
    summary:
      "Lidero o time de engenharia: o desenvolvimento de software, dois engenheiros projetistas mecânicos e um analista de suporte que também desenvolve. Os apps Android de coletores de dados e terminais de consulta estão em 500 a 2.000 dispositivos em produção no varejo.",
    details: [
      "Deploy e gestão da frota de tablets em modo kiosk via MDM, e avaliação de uma solução própria com a Android Management API.",
      "Migração da frota do Android 12 para o 14, tratando as mudanças de permissões e de comportamento da plataforma.",
      "Variantes de build por cliente e por hardware com product flavors no Gradle.",
      "Integração de scanners Datalogic Magellan via RS-232 e diagnóstico de falhas de USB-C / Power Delivery.",
      "Seleção de fornecedores OEM/ODM de terminais, incluindo kits SKD/CKD com software embarcado.",
      "Backends em Go com Clean Architecture e um servidor Telnet que simula um WMS, validado contra o cliente Velocity para Android.",
      "Pipelines de CI/CD com GitHub Actions e imagens de contêiner.",
    ],
  },
];

export const skills: { area: string; items: string }[] = [
  {
    area: "Android",
    items: "Kotlin, Android SDK, Gradle com product flavors, MDM e Android Enterprise (AMAPI), modo kiosk",
  },
  {
    area: "Hardware e integração",
    items: "Serial RS-232, scanners e coletores AIDC, impressão ESC/POS",
  },
  {
    area: "Arquitetura",
    items: "Clean Architecture, hexagonal (ports & adapters), padrão outbox, SSE",
  },
  {
    area: "Backend e infraestrutura",
    items: "Go, Ktor, PostgreSQL, Docker, GitHub Actions, Linux",
  },
];

export const education: { course: string; school: string; period: string }[] = [
  { course: "MBA em Engenharia de Software com IA", school: "Full Cycle", period: "Em andamento" },
  { course: "MBA em Desenvolvimento Mobile", school: "XP Educação", period: "2022 – 2023" },
  {
    course: "Bacharelado em Engenharia de Controle e Automação",
    school: "Universidade São Judas Tadeu",
    period: "2015 – 2020",
  },
  { course: "Técnico em Mecatrônica", school: "ETEC Martin Luther King", period: "2010 – 2011" },
];
