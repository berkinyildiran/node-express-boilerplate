import { CacheConfig } from './cache'
import { DatabaseConfig } from './database'
import { LoggerConfig } from './logger'
import { ServerConfig } from './server'

export class ConfigModule {
  readonly cache: CacheConfig
  readonly database: DatabaseConfig
  readonly logger: LoggerConfig
  readonly server: ServerConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.cache = new CacheConfig(env)
    this.database = new DatabaseConfig(env)
    this.logger = new LoggerConfig(env)
    this.server = new ServerConfig(env)
  }
}
