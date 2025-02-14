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

  async get(key: string): Promise<string | null> {
    return this.client.get(key)
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value)
  }
}
