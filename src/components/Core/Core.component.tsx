import { useContext, useEffect } from 'react'

import { LASTFM_API_KEY } from 'components/constants'
import { DependenciesContext } from 'services/context'

const Core: React.FC = ({ children }) => {
  const dependencies = useContext(DependenciesContext)

  useEffect(() => {
    dependencies.create('lastFm', LASTFM_API_KEY)
  }, [dependencies])

  return <>{children}</>
}

export { Core }
