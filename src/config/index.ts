import { ServerConfig } from './server'

export class Config {
  readonly server: ServerConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.server = new ServerConfig(env)
  }
}
