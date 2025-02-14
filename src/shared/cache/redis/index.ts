import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { RedisConfig } from '../../../config/cache/redis.config'

import { RedisAdapter } from './redis.adapter'

export class RedisCache {
  private readonly adapter: RedisAdapter
  private readonly logger: Logger

  constructor(config: RedisConfig, logger: Logger) {
    this.logger = logger

    this.logger.debug('Redis adapter creating')
    this.adapter = new RedisAdapter(config.host, config.port)
    this.logger.debug('Redis adapter created successfully')
  }

  async connect(): Promise<void> {
    try {
      this.logger.debug('Redis connection starting')
      await this.adapter.connect()
      this.logger.info('Redis connection successfully')
    } catch (e) {
      this.logger.error(`Redis connection failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
