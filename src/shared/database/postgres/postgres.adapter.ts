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

  async query(text: string, ...params: any[]): Promise<any[]> {
    const response = await this.client.query(text, params)

    return response.rows
  }
}
