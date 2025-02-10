import { LoggerRecord } from '../interface/logger.record'
import { LoggerStrategy } from '../interface/logger.strategy'

export class ConsoleLogger implements LoggerStrategy {
  private readonly client: Console

  constructor() {
    this.client = console
  }

  private formatter(level: string, record: LoggerRecord): string {
    const parts = []

    parts.push(record.id)
    parts.push(level.toUpperCase())
    parts.push(record.date.format('YYYY-MM-DD HH:mm:ss'))
    parts.push(record.operation)

    return parts.map((part) => '[' + part + ']').join(' ')
  }

  debug(record: LoggerRecord, message: string): void {
    const log = this.formatter('debug', record)
    this.client.debug(log, message)
  }

  error(record: LoggerRecord, message: string): void {
    const log = this.formatter('error', record)
    this.client.error(log, message)
  }

  info(record: LoggerRecord, message: string): void {
    const log = this.formatter('info', record)
    this.client.info(log, message)
  }

  warn(record: LoggerRecord, message: string): void {
    const log = this.formatter('warn', record)
    this.client.warn(log, message)
  }
}
