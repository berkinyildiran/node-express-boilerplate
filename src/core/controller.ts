import { NextFunction, Request, Response, Router } from 'express'

export abstract class CoreController {
  readonly router: Router

  protected constructor() {
    this.router = Router()
  }

  private wrap(...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        for (const fn of fns) {
          await fn(req, res, next)
        }
      } catch (e) {
        next(e)
      }
    }
  }

  protected delete(path: string, ...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>): void {
    this.router.delete(path, this.wrap(...fns))
  }

  protected get(path: string, ...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>): void {
    this.router.get(path, this.wrap(...fns))
  }

  protected patch(path: string, ...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>): void {
    this.router.patch(path, this.wrap(...fns))
  }

  protected post(path: string, ...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>): void {
    this.router.post(path, this.wrap(...fns))
  }

  protected put(path: string, ...fns: Array<(req: Request, res: Response, next: NextFunction) => Promise<any>>): void {
    this.router.put(path, this.wrap(...fns))
  }
}
