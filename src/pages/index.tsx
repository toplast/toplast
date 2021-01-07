import Head from 'next/head'

import Core from 'components/Core'
import Infographic from 'components/Infographic'

export default function Home() {
  return (
    <Core>
      <Head>
        <title>Toplast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Infographic />
    </Core>
  )
}
