/**
 * Única fonte de verdade do endereço do site.
 *
 * O GitHub Pages publica sites de projeto em https://<usuario>.github.io/<repo>,
 * então o nome do repositório é também o `basePath` do Next e o prefixo das URLs
 * absolutas das meta tags Open Graph.
 *
 * Ao renomear o repositório, mude `repo` aqui e faça um novo deploy: o GitHub
 * redireciona clones, issues e stars para o nome novo, mas NÃO redireciona a URL
 * do Pages. Veja a seção "Renomear o repositório" no README.
 */
const user = 'gahmorais'
const repo = 'personal-page'

module.exports = {
  user,
  repo,
  basePath: `/${repo}`,
  siteUrl: `https://${user}.github.io/${repo}`,
}
