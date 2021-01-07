// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json')

// UI
export const APP_NAME = 'Toplast'
export const AUTHOR = 'Henrique de Castilhos'
export const DESCRIPTION = pkg.description
export const URL = pkg.url

// Environment
export const LASTFM_API_KEY = process.env.LASTFM_API_KEY
