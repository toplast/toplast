import Head from 'next/head'

import { APP_NAME, DESCRIPTION, URL } from 'components/constants'

const SEO = () => {
  return (
    <Head>
      {/* <link rel="shortcut icon" href={faviconSrc} /> */}

      <title>{`${APP_NAME}`}</title>
      <meta name="description" content={DESCRIPTION} />
      {/* <meta name="image" content={shareSrc} /> */}

      <meta property="og:url" content={URL} />
      <meta property="og:title" content={APP_NAME} />
      <meta property="og:description" content={DESCRIPTION} />
      {/* <meta property="og:image" content={`${URL}${shareSrc}`} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={APP_NAME} />
      <meta name="twitter:description" content={DESCRIPTION} />
      {/* <meta name="twitter:image" content={`${URL}${shareSrc}`} /> */}
    </Head>
  )
}

export { SEO }
