import dotenv from 'dotenv'

import { AppModule } from './app.module'
import { ConfigModule } from './config/config.module'

dotenv.config()

async function bootstrap() {
  const config = new ConfigModule(process.env)

  const app = new AppModule(config)
  await app.connect()

  app.listen()
}
bootstrap()
