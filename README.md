# personal-page

Página pessoal com a minha trajetória e a lista dos meus projetos no GitHub,
publicada em https://gahmorais.github.io/personal-page, em três idiomas:

| Endereço | Idioma |
| --- | --- |
| [`/`](https://gahmorais.github.io/personal-page/) | português |
| [`/en`](https://gahmorais.github.io/personal-page/en/) | inglês |
| [`/es`](https://gahmorais.github.io/personal-page/es/) | espanhol |

Feita com Next.js (Pages Router), TypeScript e Tailwind CSS, exportada como site estático.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

O conteúdo é dividido em duas camadas:

- [`src/data/`](src/data/) guarda o que **não** depende de idioma: datas, nomes de
  empresa e escola, URLs dos projetos, linguagens e o código de barras. Cada
  cargo, projeto, competência e curso tem um id.
- [`src/i18n/`](src/i18n/) guarda **todo** o texto, um arquivo por idioma
  (`pt.ts`, `en.ts`, `es.ts`), chaveado por esses ids.

A divisão existe para que uma URL de projeto ou uma data não precise ser repetida
— e ficar desatualizada — em três arquivos. O contrato é a interface `Dictionary`
em [`src/i18n/types.ts`](src/i18n/types.ts): como ela usa `Record<RoleId, …>`, o
`npm run typecheck` reprova qualquer idioma que esqueça uma entrada.

Os componentes só renderizam o que recebem. [`src/components/Page.tsx`](src/components/Page.tsx)
é a página inteira e recebe o idioma; `src/pages/index.tsx`, `src/pages/en/index.tsx`
e `src/pages/es/index.tsx` só a chamam.

### Adicionar um idioma

1. Acrescente o código em `Locale` e em `localeMeta`, em
   [`src/i18n/locales.ts`](src/i18n/locales.ts).
2. Copie um dicionário existente para `src/i18n/<código>.ts` e traduza; o
   typecheck aponta o que falta.
3. Registre o arquivo em [`src/i18n/index.ts`](src/i18n/index.ts).
4. Crie `src/pages/<código>/index.tsx` com `<Page locale="<código>" />`.

O seletor de idioma, as tags `hreflang` e as `og:locale:alternate` saem da lista
de `locales` — não precisam ser mexidos.

### Por que não o i18n do Next

O roteamento i18n nativo não funciona com `output: 'export'`: ele está na lista
de features não suportadas do export estático, junto com rewrites e redirects.
Daí uma página por idioma, e `trailingSlash: true` no
[`next.config.js`](next.config.js) para o export gerar `en/index.html` em vez de
`en.html` — assim o GitHub Pages serve `/en` como índice de diretório, sem
depender de reescrever a extensão.

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

A mesma imagem serve aos três idiomas — ela é só o código de barras com o nome,
sem texto traduzível. O que muda por idioma é o `og:image:alt`.

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
