import { DatabaseConfig } from '../../config/database'

import { Logger } from '../../logger'

import { PostgresDatabase } from './postgres'

export class DatabaseModule {
  private readonly logger: Logger = new Logger('DatabaseModule')

  readonly postgres: PostgresDatabase

  constructor(config: DatabaseConfig) {
    this.postgres = new PostgresDatabase(config.postgres, this.logger)
    this.logger.debug('Successfully initialized')
  }
}
