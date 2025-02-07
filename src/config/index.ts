import { DatabaseConfig } from './database'
import { ServerConfig } from './server'

export class Config {
  readonly database: DatabaseConfig
  readonly server: ServerConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.server = new ServerConfig(env)
    this.database = new DatabaseConfig(env)
  }
}
