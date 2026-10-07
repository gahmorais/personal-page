/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // O GitHub Pages publica o site em https://gahmorais.github.io/personal-page
  basePath: isProd ? '/personal-page' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
