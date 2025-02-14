import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { RedisAdapter } from './redis.adapter'

export class RedisService {
  private readonly adapter: RedisAdapter
  private readonly logger: Logger

  constructor(adapter: RedisAdapter, logger: Logger) {
    this.adapter = adapter
    this.logger = logger

    this.logger.debug('Redis service created successfully')
  }

  async get<T>(key: string, logger = this.logger): Promise<T> {
    try {
      logger.debug(`Redis get function called with key: ${key}`)

      const value = await this.adapter.get(key)

      return JSON.parse(value)
    } catch (e) {
      logger.error(`Redis get function failed: ${e.message}`, e.stack)
      throw new Exception(`Redis get function failed: ${e.message}`)
    }
  }

  async set<T>(key: string, value: T, logger = this.logger): Promise<T> {
    try {
      logger.debug(`Redis set function called with key: ${key}`)

      const data = JSON.stringify(value)
      await this.adapter.set(key, data)

      return value
    } catch (e) {
      logger.error(`Redis set function failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
