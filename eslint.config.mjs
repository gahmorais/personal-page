// O Next 16 removeu o `next lint`, então o ESLint roda pelo CLI próprio.
// O eslint-config-next já exporta flat config, sem precisar de FlatCompat.
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  // O `next lint` ignorava estas pastas sozinho; no CLI é explícito
  { ignores: ['.next/**', 'out/**'] },
  ...nextCoreWebVitals,
]

export default config
