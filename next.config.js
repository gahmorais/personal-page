/** @type {import('next').NextConfig} */
const { basePath } = require('./site.config')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Faz o export gerar en/index.html em vez de en.html: assim o GitHub Pages
  // serve /en como índice de diretório, sem depender de reescrever a extensão
  trailingSlash: true,
  // O GitHub Pages publica o site numa subpasta com o nome do repositório
  basePath: isProd ? basePath : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
