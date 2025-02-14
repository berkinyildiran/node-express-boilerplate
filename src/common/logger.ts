import crypto from 'node:crypto'

import { LoggerManager } from '../logger/logger.manager'

import { LoggerRecord } from '../logger/interface/logger.record'

export class Logger {
  private readonly id: string
  private readonly operation: string

  constructor(operation: string) {
    this.id = crypto.randomUUID()
    this.operation = operation
  }

  private prepare(): LoggerRecord {
    return {
      id: this.id,
      date: Date.now(),
      operation: this.operation,
    }
  }

  debug(message: string): void {
    const record = this.prepare()
    LoggerManager.debug(record, message)
  }

  error(message: string, stack: string): void {
    const record = this.prepare()
    LoggerManager.error(record, message, stack)
  }

  info(message: string): void {
    const record = this.prepare()
    LoggerManager.info(record, message)
  }

  warn(message: string): void {
    const record = this.prepare()
    LoggerManager.warn(record, message)
  }
}
