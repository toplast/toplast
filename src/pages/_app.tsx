import { AppProps } from 'next/app'

import { DependenciesProvider } from 'services/context'
import GlobalStyles from 'styles/global.styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DependenciesProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </DependenciesProvider>
  )
}

export default MyApp
