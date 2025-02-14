import { Logger } from '../../common/logger'

import { DatabaseConfig } from '../../config/database'

import { Postgres } from './postgres'

export class DatabaseModule {
  private readonly logger: Logger = new Logger('DatabaseModule')

  readonly postgres: Postgres

  constructor(config: DatabaseConfig) {
    this.postgres = new Postgres(config.postgres, this.logger)
    this.logger.debug('Successfully initialized')
  }
}
