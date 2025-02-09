import { DatabaseConfig } from '../../config/database'

import { PostgresModule } from './postgres/postgres.module'

export class DatabaseModule {
  readonly postgres: PostgresModule

  constructor(config: DatabaseConfig) {
    this.postgres = new PostgresModule(config.postgres)
  }
}
