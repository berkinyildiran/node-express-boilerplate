export class ServerConfig {
  readonly port: number
  readonly timeout: number

  constructor(env: NodeJS.ProcessEnv) {
    this.port = Number(env.SERVER_PORT)
    this.timeout = Number(env.SERVER_TIMEOUT)
  }
}
