import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { RedisConfig } from '../../../config/cache/redis.config'

import { RedisAdapter } from './redis.adapter'
import { RedisService } from './redis.service'

export class Redis {
  private readonly adapter: RedisAdapter
  private readonly logger: Logger

  readonly service: RedisService

  constructor(config: RedisConfig, logger: Logger) {
    this.logger = logger

    this.adapter = new RedisAdapter(config.host, config.port)
    this.logger.debug('Redis adapter created successfully')

    this.service = new RedisService(this.adapter, this.logger)
  }

  async connect(): Promise<void> {
    try {
      await this.adapter.connect()
      this.logger.info('Redis connection successfully')
    } catch (e) {
      this.logger.error(`Redis connection failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
