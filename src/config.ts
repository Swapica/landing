import packageJson from '../package.json'
import { LogLevelDesc } from 'loglevel'
import { pickBy, mapKeys } from 'lodash-es'

export const config = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  LOG_LEVEL: 'trace' as LogLevelDesc,
  BUILD_VERSION: packageJson.version || import.meta.env.VITE_APP_BUILD_VERSION,
  DASHBOARD_APP_URL: '',
  GITHUB_URL: '',
  PUSH_NOTIFICATIONS_URL:
    'https://app.push.org/channels?channel=0xd21e17e4c0A41f8ce95d2B6364946f5fB9783085',
} as const

Object.assign(config, _mapEnvCfg(import.meta.env))
Object.assign(config, _mapEnvCfg(document.ENV))

function _mapEnvCfg(env: ImportMetaEnv | typeof document.ENV): {
  [k: string]: string | boolean | undefined
} {
  return mapKeys(
    pickBy(env, (v, k) => k.startsWith('VITE_APP_')),
    (v, k) => k.replace(/^VITE_APP_/, ''),
  )
}
