import { PostgresDatabase } from '../../shared/database/postgres'

export class AuthRepository {
  private readonly postgres: PostgresDatabase

  constructor(postgres: PostgresDatabase) {
    this.postgres = postgres
  }
}
