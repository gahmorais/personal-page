import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const sans = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function App({ Component, pageProps }: AppProps) {
  // Em produção o site vive numa subpasta, então o ícone precisa do basePath:
  // sem a tag explícita o browser pediria /favicon.ico na raiz do domínio
  const { basePath } = useRouter()

  return (
    <div className={`${sans.variable} ${mono.variable} font-sans`}>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
