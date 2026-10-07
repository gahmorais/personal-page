import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'

const sans = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} ${mono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
