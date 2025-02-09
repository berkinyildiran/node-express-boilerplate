import { CacheConfig } from '../../config/cache'

import { RedisCache } from './redis'

export class CacheModule {
  readonly redis: RedisCache

  constructor(config: CacheConfig) {
    this.redis = new RedisCache(config.redis)
  }
}
