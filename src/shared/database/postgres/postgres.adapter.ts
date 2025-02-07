import { Client } from 'pg'

export class PostgresAdapter {
  private client: Client

  constructor(host: string, port: number, user: string, password: string, database: string) {
    this.client = new Client({
      host,
      port,
      user,
      password,
      database,
    })
  }

  async connect(): Promise<void> {
    await this.client.connect()
  }
}
