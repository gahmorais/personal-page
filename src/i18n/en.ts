import { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Gabriel Morais | Software engineer",
    description:
      "Software engineer and engineering lead who designs and programs Android handheld data collectors and price-check terminals for retail.",
    ogImageAlt: "Barcode spelling the name Gabriel Morais, read by a laser line",
  },

  header: {
    tagline: "Software engineer, embedded Android",
    bio: [
      "I started out repairing printers and barcode scanners down to the component level. Today I lead the engineering team that designs and programs that same equipment: 500 to 2,000 handheld collectors and price-check terminals running in retail production.",
      "I'm a control and automation engineer with an MBA in mobile development, and I work with Kotlin, Go and C. My next step is automotive embedded software, with Android Automotive and vehicle networks.",
    ],
    barcodeAlt: (text) => `Barcode with the text ${text}`,
    contactLabel: "Contact",
  },

  languages: {
    label: "Language",
    name: { pt: "Português", en: "English", es: "Español" },
  },

  sections: {
    timeline: {
      title: "From hardware to software",
      intro:
        "Thirteen years between the repair bench and the code. Each role sits in the column I was working in; the current one spans both.",
    },
    skills: { title: "Skills" },
    projects: { title: "Projects" },
    education: { title: "Education" },
  },

  timeline: {
    lane: {
      hardware: "Hardware",
      software: "Software",
      both: "Hardware and software",
    },
    present: "today",
    showDetails: "See what I do today",
    hideDetails: "Hide details",
    role: {
      "libermac-auxiliar": {
        title: "Technician's assistant",
        summary: "Maintenance of thermal printers and retail automation equipment.",
      },
      "sbitec-tecnico": {
        title: "Electronics technician",
        summary: "Maintenance of label and card printers.",
      },
      "bkp-tecnico": {
        title: "Electronics technician",
        summary:
          "Component-level repair of barcode printers, scanners and handheld collectors.",
      },
      "bkp-supervisor": {
        title: "Service supervisor",
        summary:
          "Supervised the team that repaired barcode printers, scanners and handheld collectors.",
      },
      "bkp-dev": {
        title: "Software developer",
        summary:
          "Built the software for the same printers, scanners and collectors I used to repair at the bench. The first one was an Android app in Kotlin for equipment inventory across a 20-store supermarket chain, with per-technician authentication and writes to Firebase Realtime Database.",
      },
      "bkp-lider": {
        title: "Engineering lead",
        summary:
          "I lead the engineering team: software development, two mechanical design engineers and a support analyst who also develops. The Android apps for data collectors and price-check terminals run on 500 to 2,000 devices in retail production.",
        details: [
          "Deployment and management of the tablet fleet in kiosk mode via MDM, plus the evaluation of an in-house solution built on the Android Management API.",
          "Fleet migration from Android 12 to 14, handling the platform's permission and behavior changes.",
          "Per-customer and per-hardware build variants with Gradle product flavors.",
          "Integration of Datalogic Magellan scanners over RS-232, and diagnosis of USB-C / Power Delivery failures.",
          "Selection of OEM/ODM terminal suppliers, including SKD/CKD kits with embedded software.",
          "Go backends with Clean Architecture and a Telnet server that simulates a WMS, validated against the Velocity client for Android.",
          "CI/CD pipelines with GitHub Actions and container images.",
        ],
      },
    },
  },

  skills: {
    android: {
      area: "Android",
      items:
        "Kotlin, Android SDK, Gradle with product flavors, MDM and Android Enterprise (AMAPI), kiosk mode",
    },
    hardware: {
      area: "Hardware and integration",
      items: "RS-232 serial, AIDC scanners and collectors, ESC/POS printing",
    },
    arquitetura: {
      area: "Architecture",
      items: "Clean Architecture, hexagonal (ports & adapters), outbox pattern, SSE",
    },
    backend: {
      area: "Backend and infrastructure",
      items: "Go, Ktor, PostgreSQL, Docker, GitHub Actions, Linux",
    },
  },

  projects: {
    filterLabel: "Filter projects by language",
    all: "All",
    count: (total) => (total === 1 ? "1 project" : `${total} projects`),
    item: {
      autocare: {
        title: "AutoCare",
        description:
          "Android app for tracking vehicle maintenance, the applied project for my MBA. Jetpack Compose, MVVM and Firebase, with 90 unit tests plus instrumented tests.",
      },
      "supervisorio-arduino": {
        title: "Arduino tank supervisory system",
        description:
          "C firmware for Arduino that reads the sensors, and a C# supervisory app that monitors a beverage mixing process.",
      },
      cartcheck: {
        title: "CartCheck",
        description:
          "Android app in Jetpack Compose for keeping track of spending while shopping, with a history of previous trips.",
      },
      "crud-c": {
        title: "CRUD in C",
        description:
          "A record-keeping system in plain C, with create, read, update and delete.",
      },
      "mercadinho-tio-salim": {
        title: "Mercadinho Tio Salim",
        description: "Point-of-sale system.",
      },
      "tmdb-flutter": {
        title: "Popular movies with the TMDB API",
        description: "Flutter app that lists the movies popular right now, built during my MBA.",
      },
      "bootcamp-react": {
        title: "IGTI React bootcamp",
        description: "Projects built during the React bootcamp.",
      },
      "uri-online-judge": {
        title: "URI Online Judge challenges",
        description: "Solutions to the algorithm problems on URI Online Judge.",
      },
    },
  },

  education: {
    inProgress: "In progress",
    course: {
      "mba-ia": "MBA in Software Engineering with AI",
      "mba-mobile": "MBA in Mobile Development",
      engenharia: "BEng in Control and Automation Engineering",
      tecnico: "Technical degree in Mechatronics",
    },
  },

  footer: {
    before: "Want to talk about a project? Reach out on",
    after: ".",
  },
};
