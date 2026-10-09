# personal-page

Página pessoal com a minha trajetória e a lista dos meus projetos no GitHub,
publicada em https://gahmorais.github.io/personal-page.

Feita com Next.js (Pages Router), TypeScript e Tailwind CSS, exportada como site estático.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Todo o conteúdo fica em [`src/data/`](src/data/): cargos, competências e formação
em `profile.ts`, projetos em `projects.ts`. Os componentes só renderizam esses dados.

## Verificação

```bash
npm run lint       # ESLint (flat config em eslint.config.mjs)
npm run typecheck  # tsc --noEmit
npm run build      # gera o site estático em out/
```

O Next 16 removeu o `next lint`, então o ESLint roda pelo CLI próprio. A config
estende `eslint-config-next/core-web-vitals`, que já vem em flat config.

Os três rodam no CI a cada push, antes do deploy.

## Imagem de preview

`public/og.png` é o card que aparece quando o link é compartilhado. Ele é gerado
a partir do mesmo código de barras da página:

```bash
npm run og
```

Rode de novo se `nameBarcode` em `src/data/profile.ts` mudar.

## Deploy

Automático: cada push na branch `main` dispara o workflow
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml), que faz lint,
typecheck, build e publica no GitHub Pages.

## Renomear o repositório

O GitHub redireciona clones, issues, stars e a página do repositório para o nome
novo — **mas não redireciona a URL do GitHub Pages**. Renomear quebra todos os
links já compartilhados para o endereço antigo, sem volta automática.

Para renomear sem quebrar o site em si:

1. Mude `repo` em [`site.config.js`](site.config.js). É de lá que saem o
   `basePath` do Next e as URLs absolutas das meta tags Open Graph.
2. Atualize o campo `homepage` do `package.json` e os links deste README.
3. Faça push na `main` para o workflow republicar o site com os caminhos novos.

Sem o passo 1 o site sobe, mas todo CSS, JS e imagem apontam para a subpasta
antiga e o resultado é uma página sem estilo nenhum.

Se o endereço precisa ser estável, o caminho é um domínio próprio: aí o nome do
repositório deixa de fazer parte da URL.
