import { Redis } from 'ioredis'

export class RedisAdapter {
  private readonly client: Redis

  constructor(host: string, port: number) {
    this.client = new Redis({
      host,
      port,
      lazyConnect: true,
    })
  }

  async connect(): Promise<void> {
    await this.client.connect()
  }
}
