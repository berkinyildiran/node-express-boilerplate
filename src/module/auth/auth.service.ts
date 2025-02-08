import { AuthRepository } from './auth.repository'

export class AuthService {
  private readonly repository: AuthRepository

  constructor(repository: AuthRepository) {
    this.repository = repository
  }

  async login(): Promise<void> {}

  async register(): Promise<void> {}
}
