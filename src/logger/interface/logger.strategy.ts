import { LoggerRecord } from './logger.record'

export interface LoggerStrategy {
  debug(record: LoggerRecord, message: string): void

  error(record: LoggerRecord, message: string): void

  info(record: LoggerRecord, message: string): void

  warn(record: LoggerRecord, message: string): void
}
