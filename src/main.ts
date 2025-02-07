import dotenv from 'dotenv'

import { App } from './app'

dotenv.config()

async function bootstrap() {
  const app = new App()
  app.listen()
}
bootstrap()
