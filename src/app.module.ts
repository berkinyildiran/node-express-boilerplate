import express, { Application } from 'express'
import http from 'node:http'

import { Exception } from './common/exception'
import { Logger } from './common/logger'

import { ConfigModule } from './config/config.module'

import { AuthModule } from './module/auth/auth.module'

import { CacheModule } from './shared/cache/cache.module'
import { DatabaseModule } from './shared/database/database.module'

export class AppModule {
  private readonly app: Application
  private readonly config: ConfigModule
  private readonly logger: Logger = new Logger('AppModule')

  private readonly cache: CacheModule
  private readonly database: DatabaseModule

  private readonly auth: AuthModule

  constructor(config: ConfigModule) {
    this.app = express()
    this.config = config

    this.cache = new CacheModule(this.config.cache)
    this.database = new DatabaseModule(this.config.database)

    this.auth = new AuthModule(this.database.postgres.service)

    this.app.use('/auth', this.auth.controller.router)

    this.logger.debug('Routers successfully initialized')
  }

  listen(): http.Server {
    const port = this.config.server.port
    const timeout = this.config.server.timeout

    const server = this.app.listen(port)
    this.logger.info('Server listening on port: ' + port)

    server.timeout = timeout

    return server
  }

  async connect(): Promise<void> {
    try {
      const promises = []

      promises.push(this.cache.redis.connect())
      promises.push(this.database.postgres.connect())

      await Promise.all(promises)
    } catch (e) {
      this.logger.error(`Server connection failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
