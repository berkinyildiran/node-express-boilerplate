export class Exception extends Error {
  readonly status: number

  constructor(message: string, status: number = 500) {
    super(message)
    this.status = status
  }
}
