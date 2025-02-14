import { Logger } from '../../common/logger'

import { PostgresService } from '../../shared/database/postgres/postgres.service'

import { AuthController } from './auth.controller'
import { AuthRepository } from './auth.repository'
import { AuthService } from './auth.service'

export class AuthModule {
  private readonly logger: Logger = new Logger('AuthModule')

  readonly controller: AuthController

  constructor(postgres: PostgresService) {
    const repository = new AuthRepository(postgres)
    const service = new AuthService(repository)

    this.controller = new AuthController(service)

    this.logger.debug('Successfully initialized')
  }
}
