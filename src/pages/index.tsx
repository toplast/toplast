import Head from 'next/head'

import Infographic from '../components/Infographic'

export default function Home() {
  return (
    <>
      <Head>
        <title>Toplast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Infographic />
    </>
  )
}
