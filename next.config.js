/** @type {import('next').NextConfig} */
const { basePath } = require('./site.config')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // O GitHub Pages publica o site numa subpasta com o nome do repositório
  basePath: isProd ? basePath : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
