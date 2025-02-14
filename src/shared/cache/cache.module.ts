import { Logger } from '../../common/logger'

import { CacheConfig } from '../../config/cache'

import { RedisCache } from './redis'

export class CacheModule {
  private readonly logger: Logger = new Logger('CacheModule')

  readonly redis: RedisCache

  constructor(config: CacheConfig) {
    this.redis = new RedisCache(config.redis, this.logger)
    this.logger.debug('Successfully initialized')
  }
}
