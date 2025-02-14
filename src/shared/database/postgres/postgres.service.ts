import { Exception } from '../../../common/exception'
import { Logger } from '../../../common/logger'

import { PostgresAdapter } from './postgres.adapter'

export class PostgresService {
  private adapter: PostgresAdapter
  private logger: Logger

  constructor(adapter: PostgresAdapter, logger: Logger) {
    this.adapter = adapter
    this.logger = logger

    this.logger.debug('Postgres service created successfully')
  }

  async query<T>(text: string, params: any[], logger = this.logger): Promise<T[]> {
    try {
      return this.adapter.query(text, ...params)
    } catch (e) {
      logger.error(`Postgres query function failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }

  async queryOne<T>(text: string, params: any[], logger = this.logger): Promise<T> {
    try {
      const data = await this.adapter.query(text, ...params)
      return data[0]
    } catch (e) {
      logger.error(`Postgres queryOne function failed: ${e.message}`, e.stack)
      throw new Exception(e.message)
    }
  }
}
