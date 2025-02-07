import { RedisConfig } from './redis.config'

export class CacheConfig {
  readonly redis: RedisConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.redis = new RedisConfig(env.REDIS_HOST, env.REDIS_PORT)
  }
}
