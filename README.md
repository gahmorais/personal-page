# personal-page

Página pessoal com a lista dos meus projetos no GitHub, publicada em
https://gahmorais.github.io/personal-page.

Feita com Next.js (Pages Router), TypeScript e Tailwind CSS, exportada como site estático.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000. Os projetos listados ficam em `src/pages/index.tsx`.

## Build

```bash
npm run build
```

Gera o site estático na pasta `out/`, já com o `basePath` `/personal-page`.

## Deploy

Automático: cada push na branch `main` dispara o workflow
`.github/workflows/nextjs.yml`, que faz o build e publica no GitHub Pages.
