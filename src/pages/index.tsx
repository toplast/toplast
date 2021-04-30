import { useContext } from 'react'

import Core from 'components/Core'
// import Header from 'components/Header'
import Infographic from 'components/Infographic'
import SEO from 'components/SEO'
import { DependenciesContext } from 'services/context'

const COVER_ID = 'cover-wrapper'
const APP_NAME = 'Coverify'

const scrollToAsync = (x = 0, y = 0) => {
  new Promise<void>((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-extra-semi
    ;(global as any).window.scrollTo(x, y)

    setTimeout(() => {
      resolve()
    }, 100)
  })
}

const useDownloadCanvas = () => {
  const dependencies = useContext(DependenciesContext)

  const submit = async () => {
    // Get node
    const node = document.getElementById(COVER_ID)
    if (!node) return

    // Create/get dependencies
    const screenShotService = dependencies.create('screenshot', { node })

    if (screenShotService) {
      await screenShotService.downloadImage(APP_NAME)
    }

    return
  }

  return submit
}

export default function Home() {
  const downloadCanvas = useDownloadCanvas()

  const handleDownloadChart = async () => {
    await scrollToAsync()
    await downloadCanvas()
  }

  return (
    <Core>
      <Infographic
        id={COVER_ID}
        style={{ position: 'absolute', left: -1000, top: -1000 }}
      />

      <SEO />
      {/* <Header /> */}

      <button style={{ margin: '2rem' }} onClick={handleDownloadChart}>
        Download image
      </button>
    </Core>
  )
}
