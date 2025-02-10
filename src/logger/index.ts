import moment from 'moment'
import * as uuid from 'uuid'

import { LoggerManager } from './logger.manager'

import { LoggerRecord } from './interface/logger.record'

export class Logger {
  private readonly id: string
  private readonly operation: string

  constructor(operation: string) {
    this.id = uuid.v4()
    this.operation = operation
  }

  private prepare(): LoggerRecord {
    return {
      id: this.id,
      date: moment(),
      operation: this.operation,
    }
  }

  debug(message: string): void {
    const record = this.prepare()

    LoggerManager.debug('console', record, message)
  }

  error(message: string): void {
    const record = this.prepare()

    LoggerManager.error('console', record, message)
  }

  info(message: string): void {
    const record = this.prepare()

    LoggerManager.info('console', record, message)
  }

  warn(message: string): void {
    const record = this.prepare()

    LoggerManager.warn('console', record, message)
  }
}
