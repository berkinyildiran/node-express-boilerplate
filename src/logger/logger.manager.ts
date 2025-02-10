import { ConsoleLogger } from './adapter/console.logger'

import { LoggerProvider } from './interface/logger.provider'
import { LoggerRecord } from './interface/logger.record'
import { LoggerStrategy } from './interface/logger.strategy'

export class LoggerManager {
  private static readonly instances: Record<LoggerProvider, LoggerStrategy> = {} as Record<LoggerProvider, LoggerStrategy>

  private static createAdapter(provider: LoggerProvider): LoggerStrategy {
    let adapter: LoggerStrategy

    switch (provider) {
      case 'console':
        adapter = new ConsoleLogger()
        break
    }

    this.instances[provider] = adapter

    return adapter
  }

  private static retrieveInstance(provider: LoggerProvider): LoggerStrategy {
    return this.instances[provider] || this.createAdapter(provider)
  }

  static debug(provider: LoggerProvider, record: LoggerRecord, message: string): void {
    this.retrieveInstance(provider).debug(record, message)
  }

  static error(provider: LoggerProvider, record: LoggerRecord, message: string): void {
    this.retrieveInstance(provider).error(record, message)
  }

  static info(provider: LoggerProvider, record: LoggerRecord, message: string): void {
    this.retrieveInstance(provider).info(record, message)
  }

  static warn(provider: LoggerProvider, record: LoggerRecord, message: string): void {
    this.retrieveInstance(provider).warn(record, message)
  }
}
