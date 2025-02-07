export class PostgresConfig {
  host: string
  port: number
  user: string
  password: string
  database: string

  constructor(host: string, port: string, user: string, password: string, database: string) {
    this.host = host
    this.port = Number(port)
    this.user = user
    this.password = password
    this.database = database
  }
}
