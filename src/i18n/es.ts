import { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Gabriel Morais | Ingeniero de software",
    description:
      "Ingeniero de software y líder del equipo de ingeniería que diseña y programa terminales portátiles de datos y verificadores de precios Android para el comercio minorista.",
    ogImageAlt: "Código de barras con el nombre Gabriel Morais, leído por una línea de láser",
  },

  header: {
    tagline: "Ingeniero de software, Android embebido",
    bio: [
      "Empecé reparando impresoras y lectores de código de barras a nivel de componente. Hoy lidero el equipo de ingeniería que diseña y programa esos mismos equipos: de 500 a 2.000 terminales portátiles y verificadores de precios en producción en el comercio minorista.",
      "Soy ingeniero de control y automatización, con un MBA en desarrollo móvil, y trabajo con Kotlin, Go y C. El siguiente paso es el software embebido automotriz, con Android Automotive y redes vehiculares.",
    ],
    barcodeAlt: (text) => `Código de barras con el texto ${text}`,
    contactLabel: "Contacto",
  },

  languages: {
    label: "Idioma",
    name: { pt: "Português", en: "English", es: "Español" },
  },

  sections: {
    timeline: {
      title: "Del hardware al software",
      intro:
        "Trece años entre el banco de reparación y el código. Cada puesto aparece en la columna en la que trabajaba; el actual ocupa las dos.",
    },
    skills: { title: "Competencias" },
    projects: { title: "Proyectos" },
    education: { title: "Formación" },
  },

  timeline: {
    lane: {
      hardware: "Hardware",
      software: "Software",
      both: "Hardware y software",
    },
    present: "hoy",
    showDetails: "Ver lo que hago hoy",
    hideDetails: "Ocultar detalles",
    role: {
      "libermac-auxiliar": {
        title: "Auxiliar técnico",
        summary: "Mantenimiento de impresoras térmicas y equipos de automatización comercial.",
      },
      "sbitec-tecnico": {
        title: "Técnico en electrónica",
        summary: "Mantenimiento de impresoras de etiquetas y de tarjetas.",
      },
      "bkp-tecnico": {
        title: "Técnico electrónico",
        summary:
          "Reparación de impresoras, lectores y terminales portátiles de código de barras a nivel de componente.",
      },
      "bkp-supervisor": {
        title: "Supervisor de servicio técnico",
        summary:
          "Supervisión del equipo de reparación de impresoras, lectores y terminales portátiles de código de barras.",
      },
      "bkp-dev": {
        title: "Desarrollador de software",
        summary:
          "Desarrollo del software de las mismas impresoras, lectores y terminales que yo reparaba en el banco. El primero fue una app Android en Kotlin para el inventario de equipos en una cadena de supermercados de 20 tiendas, con autenticación por técnico y escritura en Realtime Database de Firebase.",
      },
      "bkp-lider": {
        title: "Líder de ingeniería",
        summary:
          "Lidero el equipo de ingeniería: el desarrollo de software, dos ingenieros proyectistas mecánicos y un analista de soporte que también desarrolla. Las apps Android de terminales portátiles y verificadores de precios están en 500 a 2.000 dispositivos en producción en el comercio minorista.",
        details: [
          "Despliegue y gestión de la flota de tablets en modo kiosco vía MDM, y evaluación de una solución propia con la Android Management API.",
          "Migración de la flota de Android 12 a 14, atendiendo los cambios de permisos y de comportamiento de la plataforma.",
          "Variantes de compilación por cliente y por hardware con product flavors de Gradle.",
          "Integración de escáneres Datalogic Magellan por RS-232 y diagnóstico de fallos de USB-C / Power Delivery.",
          "Selección de proveedores OEM/ODM de terminales, incluidos kits SKD/CKD con software embebido.",
          "Backends en Go con Clean Architecture y un servidor Telnet que simula un WMS, validado contra el cliente Velocity para Android.",
          "Pipelines de CI/CD con GitHub Actions e imágenes de contenedor.",
        ],
      },
    },
  },

  skills: {
    android: {
      area: "Android",
      items:
        "Kotlin, Android SDK, Gradle con product flavors, MDM y Android Enterprise (AMAPI), modo kiosco",
    },
    hardware: {
      area: "Hardware e integración",
      items: "Serial RS-232, escáneres y terminales AIDC, impresión ESC/POS",
    },
    arquitetura: {
      area: "Arquitectura",
      items: "Clean Architecture, hexagonal (ports & adapters), patrón outbox, SSE",
    },
    backend: {
      area: "Backend e infraestructura",
      items: "Go, Ktor, PostgreSQL, Docker, GitHub Actions, Linux",
    },
  },

  projects: {
    filterLabel: "Filtrar proyectos por lenguaje",
    all: "Todos",
    count: (total) => (total === 1 ? "1 proyecto" : `${total} proyectos`),
    item: {
      autocare: {
        title: "AutoCare",
        description:
          "App Android de control de mantenimiento de vehículos, proyecto aplicado del MBA. Jetpack Compose, MVVM y Firebase, con 90 pruebas unitarias y pruebas instrumentadas.",
      },
      "supervisorio-arduino": {
        title: "Supervisorio de tanque con Arduino",
        description:
          "Firmware en C para Arduino que lee los sensores, y un supervisorio en C# que monitorea el proceso de mezcla de bebidas.",
      },
      cartcheck: {
        title: "CartCheck",
        description:
          "App Android en Jetpack Compose para controlar los gastos durante la compra, con el historial de las compras anteriores.",
      },
      "crud-c": {
        title: "CRUD en C",
        description:
          "Sistema de registro en C puro, con creación, lectura, actualización y eliminación de registros.",
      },
      "mercadinho-tio-salim": {
        title: "Mercadinho Tio Salim",
        description: "Sistema de punto de venta.",
      },
      "tmdb-flutter": {
        title: "Películas populares con la API de TMDB",
        description: "App Flutter que lista las películas populares del momento, hecha en el MBA.",
      },
      "bootcamp-react": {
        title: "Bootcamp de React del IGTI",
        description: "Proyectos desarrollados durante el bootcamp de React.",
      },
      "uri-online-judge": {
        title: "Desafíos de URI Online Judge",
        description: "Soluciones a los problemas de algoritmos de URI Online Judge.",
      },
    },
  },

  education: {
    inProgress: "En curso",
    course: {
      "mba-ia": "MBA en Ingeniería de Software con IA",
      "mba-mobile": "MBA en Desarrollo Móvil",
      engenharia: "Licenciatura en Ingeniería de Control y Automatización",
      tecnico: "Técnico en Mecatrónica",
    },
  },

  footer: {
    before: "¿Quieres hablar de un proyecto? Escríbeme en",
    after: ".",
  },
};
