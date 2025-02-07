import { CacheConfig } from '../../config/cache'

import { RedisCache } from './redis'

export class Cache {
  readonly redis: RedisCache

  constructor(config: CacheConfig) {
    this.redis = new RedisCache(config.redis)
  }
}
