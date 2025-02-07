import { DatabaseConfig } from '../../config/database'

import { PostgresDatabase } from './postgres'

export class Database {
  readonly postgres: PostgresDatabase

  constructor(config: DatabaseConfig) {
    this.postgres = new PostgresDatabase(config.postgres)
  }
}
