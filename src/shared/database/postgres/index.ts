import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { PostgresConfig } from '../../../config/database/postgres.config'

import { PostgresAdapter } from './postgres.adapter'
import { PostgresService } from './postgres.service'

export class Postgres {
  private readonly adapter: PostgresAdapter
  private readonly logger: Logger

  readonly service: PostgresService

  constructor(config: PostgresConfig, logger: Logger) {
    this.logger = logger

    this.adapter = new PostgresAdapter(config.host, config.port, config.user, config.password, config.database)
    this.logger.debug('Postgres adapter created successfully')

    this.service = new PostgresService(this.adapter, this.logger)
  }

  async connect(): Promise<void> {
    try {
      await this.adapter.connect()
      this.logger.info('Postgres connection successfully')
    } catch (e) {
      this.logger.error(`Postgres connection failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
