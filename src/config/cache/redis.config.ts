export class RedisConfig {
  readonly host: string
  readonly port: number

  constructor(host: string, port: string) {
    this.host = host
    this.port = Number(port)
  }
}
