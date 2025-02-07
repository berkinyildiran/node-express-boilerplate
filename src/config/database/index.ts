import { PostgresConfig } from './postgres.config'

export class DatabaseConfig {
  readonly postgres: PostgresConfig

  constructor(env: NodeJS.ProcessEnv) {
    this.postgres = new PostgresConfig(
      env.POSTGRES_HOST,
      env.POSTGRES_PORT,
      env.POSTGRES_USER,
      env.POSTGRES_PASSWORD,
      env.POSTGRES_DATABASE,
    )
  }
}
