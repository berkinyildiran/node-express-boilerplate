import { Logger } from '../../logger'

import { PostgresDatabase } from '../../shared/database/postgres'

import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'

export class AuthModule {
  private readonly logger: Logger = new Logger('AuthModule')

  readonly controller: AuthController

  constructor(postgres: PostgresDatabase) {
    const repository = new AuthRepository(postgres)
    const service = new AuthService(repository)

    this.controller = new AuthController(service)

    this.logger.debug('Successfully initialized')
  }
}
