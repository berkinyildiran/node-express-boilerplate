import express, { Application } from 'express'
import http from 'node:http'

import { Config } from './config'

import { AuthModule } from './module/auth/auth.module'

import { CacheModule } from './shared/cache/cache.module'
import { DatabaseModule } from './shared/database/database.module'

export class AppModule {
  private readonly app: Application
  private readonly config: Config

  private readonly cache: CacheModule
  private readonly database: DatabaseModule

  private readonly auth: AuthModule

  constructor() {
    this.app = express()
    this.config = new Config(process.env)

    this.cache = new CacheModule(this.config.cache)
    this.database = new DatabaseModule(this.config.database)

    this.auth = new AuthModule(this.database.postgres)

    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    this.app.use('/auth', this.auth.controller.router)
  }

  listen(): http.Server {
    const port = this.config.server.port
    const timeout = this.config.server.timeout

    const server = this.app.listen(port)
    server.timeout = timeout

    return server
  }

  async connect(): Promise<void> {
    await Promise.all([this.cache.redis.connect(), this.database.postgres.connect()])
  }
}
