import { PostgresModule } from '../../shared/database/postgres/postgres.module'

import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'

export class AuthModule {
  readonly controller: AuthController

  constructor(postgres: PostgresModule) {
    const repository = new AuthRepository(postgres)
    const service = new AuthService(repository)

    this.controller = new AuthController(service)
  }
}
