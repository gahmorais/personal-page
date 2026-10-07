export interface Project {
  title: string;
  description: string;
  languages: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "AutoCare",
    description:
      "App Android de controle de manutenção de veículos, projeto aplicado do MBA. Jetpack Compose, MVVM e Firebase, com 90 testes unitários e testes instrumentados.",
    languages: ["Kotlin"],
    url: "https://github.com/gahmorais/AutoCare_ProjetoAplicado",
  },
  {
    title: "Supervisório de tanque com Arduino",
    description:
      "Firmware em C para Arduino que lê os sensores, e um supervisório em C# que monitora o processo de mistura de bebidas.",
    languages: ["C", "C#"],
    url: "https://github.com/gahmorais/supervisorio-arduino-c-",
  },
  {
    title: "CartCheck",
    description:
      "App Android em Jetpack Compose para controlar os gastos durante as compras, com histórico das compras anteriores.",
    languages: ["Kotlin"],
    url: "https://github.com/gahmorais/cartcheck",
  },
  {
    title: "CRUD em C",
    description: "Sistema de cadastro em C puro, com criação, leitura, atualização e exclusão de registros.",
    languages: ["C"],
    url: "https://github.com/gahmorais/crud-in-c",
  },
  {
    title: "Mercadinho Tio Salim",
    description: "Sistema de frente de caixa.",
    languages: ["Python"],
    url: "https://github.com/gahmorais/mercadinho-tio-salim",
  },
  {
    title: "Filmes populares com a API do TMDB",
    description: "App Flutter que lista os filmes populares do momento, feito no MBA.",
    languages: ["Dart"],
    url: "https://github.com/gahmorais/projeto_flutter_tmdb_mba_xpedecacao",
  },
  {
    title: "Bootcamp React do IGTI",
    description: "Projetos desenvolvidos durante o bootcamp de React.",
    languages: ["JavaScript"],
    url: "https://github.com/gahmorais/curso-igti-react",
  },
  {
    title: "Desafios do URI Online Judge",
    description: "Soluções para os problemas de algoritmos do URI Online Judge.",
    languages: ["Java"],
    url: "https://github.com/gahmorais/uri-online-judge",
  },
];
