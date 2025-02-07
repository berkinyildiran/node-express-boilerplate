import { Exception } from '../../../common/exception'

import { PostgresConfig } from '../../../config/database/postgres.config'

import { PostgresAdapter } from './postgres.adapter'

export class PostgresDatabase {
  private readonly adapter: PostgresAdapter

  constructor(config: PostgresConfig) {
    this.adapter = new PostgresAdapter(config.host, config.port, config.user, config.password, config.database)
  }

  async connect(): Promise<void> {
    try {
      await this.adapter.connect()
    } catch (e) {
      throw new Exception(e.message)
    }
  }
}
