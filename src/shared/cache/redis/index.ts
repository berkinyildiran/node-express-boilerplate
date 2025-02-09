import { Exception } from '../../../common/exception'

import { RedisConfig } from '../../../config/cache/redis.config'

import { RedisAdapter } from './redis.adapter'

export class RedisCache {
  private readonly adapter: RedisAdapter

  constructor(config: RedisConfig) {
    this.adapter = new RedisAdapter(config.host, config.port)
  }

  async connect(): Promise<void> {
    try {
      await this.adapter.connect()
    } catch (e) {
      throw new Exception(e.message)
    }
  }
}
