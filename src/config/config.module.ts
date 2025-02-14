import { CacheConfig } from './cache'
import { DatabaseConfig } from './database'
import { ServerConfig } from './server'

export class ConfigModule {
  readonly cache: CacheConfig
  readonly database: DatabaseConfig
  readonly server: ServerConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.cache = new CacheConfig(env)
    this.database = new DatabaseConfig(env)
    this.server = new ServerConfig(env)
  }
}
