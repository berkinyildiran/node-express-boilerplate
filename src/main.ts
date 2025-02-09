import dotenv from 'dotenv'

import { AppModule } from './app.module'

dotenv.config()

async function bootstrap() {
  const app = new AppModule()
  await app.connect()

  app.listen()
}
bootstrap()
