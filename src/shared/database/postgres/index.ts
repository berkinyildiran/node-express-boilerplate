import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { PostgresConfig } from '../../../config/database/postgres.config'

import { PostgresAdapter } from './postgres.adapter'

export class PostgresDatabase {
  private readonly adapter: PostgresAdapter
  private readonly logger: Logger

  constructor(config: PostgresConfig, logger: Logger) {
    this.logger = logger

    this.logger.debug('Postgres adapter creating')
    this.adapter = new PostgresAdapter(config.host, config.port, config.user, config.password, config.database)
    this.logger.debug('Postgres created successfully')
  }

  async connect(): Promise<void> {
    try {
      this.logger.debug('Postgres connection starting')
      await this.adapter.connect()
      this.logger.info('Postgres connection successfully')
    } catch (e) {
      this.logger.error(`Postgres connection failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
