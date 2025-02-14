import { Logger } from '../../common/logger'

import { CacheConfig } from '../../config/cache'

import { Redis } from './redis'

export class CacheModule {
  private readonly logger: Logger = new Logger('CacheModule')

  readonly redis: Redis

  constructor(config: CacheConfig) {
    this.redis = new Redis(config.redis, this.logger)
    this.logger.debug('Successfully initialized')
  }
}
