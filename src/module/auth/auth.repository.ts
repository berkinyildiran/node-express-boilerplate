import { PostgresService } from '../../shared/database/postgres/postgres.service'

export class AuthRepository {
  private readonly postgres: PostgresService

  constructor(postgres: PostgresService) {
    this.postgres = postgres
  }
}
