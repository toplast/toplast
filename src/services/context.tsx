import LastFm from '@toplast/lastfm'
import { createContext, useState } from 'react'

/**
 * Dependencies
 */
const dependencies = {
  lastFm: LastFm,
}

/**
 * Types
 */
type InstanceOfDependencies = {
  lastFm: LastFm
}

type DependenciesProps = typeof dependencies
type DependenciesKeys = keyof DependenciesProps

type DependenciesParameters = {
  [K in DependenciesKeys]: Unpacked<ConstructorParameters<DependenciesProps[K]>>
}

type InstanceDependencies = {
  [K in DependenciesKeys]: InstanceType<DependenciesProps[K]>
}

type State = {
  [K in keyof InstanceDependencies]?: InstanceDependencies[K]
}

type ReturnOfContext<R extends DependenciesKeys> = InstanceOfDependencies[R] | false

/**
 * Methods
 */
interface ContextMethods {
  create: <S extends DependenciesKeys>(service: S, options?: DependenciesParameters[S]) => ReturnOfContext<S>
  get: <S extends DependenciesKeys>(service: S) => ReturnOfContext<S>
  destroy: (service: DependenciesKeys) => boolean
  dependencies: State
}

const DependenciesContext = createContext<ContextMethods>({
  create: () => false,
  destroy: () => false,
  get: () => false,
  dependencies: {},
})

/**
 * Provider of dependencies service
 */
const DependenciesProvider: React.FC = ({ children }) => {
  const [initialized, setInitialized] = useState<State>({})

  /**
   * Create a new service and return the instance
   */
  const create: ContextMethods['create'] = <S extends DependenciesKeys>(
    name: S,
    options?: DependenciesParameters[S]
  ) => {
    const Dependency = dependencies[name]

    // It doesn't exist
    if (!Dependency) return false

    // It already exist
    if (initialized[name]) return initialized[name] as InstanceDependencies[S]

    // Init
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instanceOfDependency = new Dependency(options as any)

    // Update
    setInitialized((prev) => ({
      ...prev,
      [name]: instanceOfDependency,
    }))

    // Return
    return instanceOfDependency as InstanceDependencies[S]
  }

  /**
   * Destroy a service
   */
  const destroy: ContextMethods['destroy'] = (name) => {
    // It doesn't exist
    if (!initialized[name]) return false

    // Update
    setInitialized((prev) => {
      const newObject = prev
      delete newObject[name]

      return newObject
    })

    // Return
    return true
  }

  /**
   * Get a the instance of dependency
   */
  const get: ContextMethods['get'] = <S extends DependenciesKeys>(service: S) => {
    if (initialized[service]) {
      return initialized[service] as InstanceOfDependencies[S]
    }

    return false
  }

  return (
    <DependenciesContext.Provider value={{ create, destroy, get, dependencies: initialized }}>
      {children}
    </DependenciesContext.Provider>
  )
}

export { DependenciesContext, DependenciesProvider }
