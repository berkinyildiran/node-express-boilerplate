import dotenv from 'dotenv'

import { App } from './app'

dotenv.config()

async function bootstrap() {
  const app = new App()
  await app.connect()

  app.listen()
}
bootstrap()
