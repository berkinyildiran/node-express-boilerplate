import { CacheConfig } from '../../config/cache'

import { RedisModule } from './redis/redis.module'

export class CacheModule {
  readonly redis: RedisModule

  constructor(config: CacheConfig) {
    this.redis = new RedisModule(config.redis)
  }
}
