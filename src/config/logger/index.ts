import { LoggerProvider } from '../../logger/interface/logger.provider'

export class LoggerConfig {
  readonly providers: LoggerProvider[]

  constructor(env: NodeJS.ProcessEnv) {
    this.providers = env.LOGGER_PROVIDERS.split(' ') as LoggerProvider[]
  }
}
