import { LoggerFactory } from './logger.factory'

import { LoggerProvider } from './interface/logger.provider'
import { LoggerRecord } from './interface/logger.record'
import { LoggerStrategy } from './interface/logger.strategy'

export class LoggerManager {
  private static readonly instances: Map<LoggerProvider, LoggerStrategy> = new Map()

  static initialize(providers: LoggerProvider[]): void {
    for (const provider of providers) {
      this.instances.set(provider, LoggerFactory.createAdapter(provider))
    }
  }

  static debug(record: LoggerRecord, message: string): void {
    for (const instance of this.instances.values()) {
      instance.debug(record, message)
    }
  }

  static error(record: LoggerRecord, message: string, stack: string): void {
    for (const instance of this.instances.values()) {
      instance.error(record, message, stack)
    }
  }

  static info(record: LoggerRecord, message: string): void {
    for (const instance of this.instances.values()) {
      instance.info(record, message)
    }
  }

  static warn(record: LoggerRecord, message: string): void {
    for (const instance of this.instances.values()) {
      instance.warn(record, message)
    }
  }
}
