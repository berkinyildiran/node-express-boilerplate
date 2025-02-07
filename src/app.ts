import express, { Application } from 'express'
import http from 'node:http'

import { Config } from './config'

export class App {
  private readonly app: Application
  private readonly config: Config

  constructor() {
    this.app = express()
    this.config = new Config(process.env)
  }

  listen(): http.Server {
    const port = this.config.server.port
    const timeout = this.config.server.timeout

    const server = this.app.listen(port)
    server.timeout = timeout

    return server
  }
}
