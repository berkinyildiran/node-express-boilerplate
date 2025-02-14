import dotenv from 'dotenv'

import { AppModule } from './app.module'
import { ConfigModule } from './config/config.module'

import { LoggerManager } from './logger/logger.manager'

dotenv.config()

async function bootstrap() {
  const config = new ConfigModule(process.env)

  LoggerManager.initialize(config.logger.providers) // Initialized for centralized logging

  const app = new AppModule(config)
  await app.connect()

  app.listen()
}
bootstrap()
