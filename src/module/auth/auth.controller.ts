import { Request, Response } from 'express'

import { CoreController } from '../../core/controller'

import { AuthService } from './auth.service'

export class AuthController extends CoreController {
  private readonly service: AuthService

  constructor(service: AuthService) {
    super()

    this.service = service

    this.post('/login', this.login)
    this.post('/register', this.register)
  }

  private login = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.login()

    res.send(data)
  }

  private register = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.register()

    res.send(data)
  }
}
