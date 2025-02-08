import express, { Application } from 'express'
import http from 'node:http'

import { Config } from './config'

import { Auth } from './module/auth'

import { Cache } from './shared/cache'
import { Database } from './shared/database'

export class App {
  private readonly app: Application
  private readonly config: Config

  private readonly cache: Cache
  private readonly database: Database

  private readonly auth: Auth

  constructor() {
    this.app = express()
    this.config = new Config(process.env)

    this.cache = new Cache(this.config.cache)
    this.database = new Database(this.config.database)

    this.auth = new Auth(this.database.postgres)

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
