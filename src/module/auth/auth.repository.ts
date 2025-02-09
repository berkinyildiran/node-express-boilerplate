import { PostgresModule } from '../../shared/database/postgres/postgres.module'

export class AuthRepository {
  private readonly postgres: PostgresModule

  constructor(postgres: PostgresModule) {
    this.postgres = postgres
  }
}
