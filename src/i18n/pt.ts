import { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Gabriel Morais | Engenheiro de software",
    description:
      "Engenheiro de software e líder do time de engenharia que projeta e programa coletores de dados e terminais de consulta Android para o varejo.",
    ogImageAlt: "Código de barras com o nome Gabriel Morais, lido por uma linha de laser",
  },

  header: {
    tagline: "Engenheiro de software, Android embarcado",
    bio: [
      "Comecei consertando impressoras e leitores de código de barras em nível de componente. Hoje lidero o time de engenharia que projeta e programa esses mesmos equipamentos: de 500 a 2.000 coletores e terminais de consulta em produção no varejo.",
      "Sou engenheiro de controle e automação, com MBA em desenvolvimento mobile, e trabalho com Kotlin, Go e C. O próximo passo é o software embarcado automotivo, com Android Automotive e redes veiculares.",
    ],
    barcodeAlt: (text) => `Código de barras com o texto ${text}`,
    contactLabel: "Contato",
  },

  languages: {
    label: "Idioma",
    name: { pt: "Português", en: "English", es: "Español" },
  },

  sections: {
    timeline: {
      title: "Do hardware ao software",
      intro:
        "Treze anos entre a bancada de reparo e o código. Cada cargo aparece na coluna em que eu trabalhava; o atual ocupa as duas.",
    },
    skills: { title: "Competências" },
    projects: { title: "Projetos" },
    education: { title: "Formação" },
  },

  timeline: {
    lane: {
      hardware: "Hardware",
      software: "Software",
      both: "Hardware e software",
    },
    present: "hoje",
    showDetails: "Ver o que faço hoje",
    hideDetails: "Ocultar detalhes",
    role: {
      "libermac-auxiliar": {
        title: "Auxiliar técnico",
        summary: "Manutenção de impressoras térmicas e equipamentos de automação comercial.",
      },
      "sbitec-tecnico": {
        title: "Técnico em eletrônica",
        summary: "Manutenção de impressoras de etiquetas e de cartões.",
      },
      "bkp-tecnico": {
        title: "Técnico eletrônico",
        summary:
          "Reparo de impressoras, leitores e coletores de código de barras em nível de componente.",
      },
      "bkp-supervisor": {
        title: "Supervisor de assistência técnica",
        summary:
          "Supervisão da equipe de reparo de impressoras, leitores e coletores de código de barras.",
      },
      "bkp-dev": {
        title: "Desenvolvedor de software",
        summary:
          "Desenvolvimento do software das mesmas impressoras, leitores e coletores que eu reparava na bancada. O primeiro foi um app Android em Kotlin para inventário de equipamentos numa rede de supermercados de 20 lojas, com autenticação por técnico e gravação no Realtime Database do Firebase.",
      },
      "bkp-lider": {
        title: "Líder de engenharia",
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
    },
  },

  skills: {
    android: {
      area: "Android",
      items:
        "Kotlin, Android SDK, Gradle com product flavors, MDM e Android Enterprise (AMAPI), modo kiosk",
    },
    hardware: {
      area: "Hardware e integração",
      items: "Serial RS-232, scanners e coletores AIDC, impressão ESC/POS",
    },
    arquitetura: {
      area: "Arquitetura",
      items: "Clean Architecture, hexagonal (ports & adapters), padrão outbox, SSE",
    },
    backend: {
      area: "Backend e infraestrutura",
      items: "Go, Ktor, PostgreSQL, Docker, GitHub Actions, Linux",
    },
  },

  projects: {
    filterLabel: "Filtrar projetos por linguagem",
    all: "Todas",
    count: (total) => (total === 1 ? "1 projeto" : `${total} projetos`),
    item: {
      autocare: {
        title: "AutoCare",
        description:
          "App Android de controle de manutenção de veículos, projeto aplicado do MBA. Jetpack Compose, MVVM e Firebase, com 90 testes unitários e testes instrumentados.",
      },
      "supervisorio-arduino": {
        title: "Supervisório de tanque com Arduino",
        description:
          "Firmware em C para Arduino que lê os sensores, e um supervisório em C# que monitora o processo de mistura de bebidas.",
      },
      cartcheck: {
        title: "CartCheck",
        description:
          "App Android em Jetpack Compose para controlar os gastos durante as compras, com histórico das compras anteriores.",
      },
      "crud-c": {
        title: "CRUD em C",
        description:
          "Sistema de cadastro em C puro, com criação, leitura, atualização e exclusão de registros.",
      },
      "mercadinho-tio-salim": {
        title: "Mercadinho Tio Salim",
        description: "Sistema de frente de caixa.",
      },
      "tmdb-flutter": {
        title: "Filmes populares com a API do TMDB",
        description: "App Flutter que lista os filmes populares do momento, feito no MBA.",
      },
      "bootcamp-react": {
        title: "Bootcamp React do IGTI",
        description: "Projetos desenvolvidos durante o bootcamp de React.",
      },
      "uri-online-judge": {
        title: "Desafios do URI Online Judge",
        description: "Soluções para os problemas de algoritmos do URI Online Judge.",
      },
    },
  },

  education: {
    inProgress: "Em andamento",
    course: {
      "mba-ia": "MBA em Engenharia de Software com IA",
      "mba-mobile": "MBA em Desenvolvimento Mobile",
      engenharia: "Bacharelado em Engenharia de Controle e Automação",
      tecnico: "Técnico em Mecatrônica",
    },
  },

  footer: {
    before: "Quer conversar sobre um projeto? Me chame no",
    after: ".",
  },
};
