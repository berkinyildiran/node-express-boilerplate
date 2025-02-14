import { Exception } from '../common/exception'

import { ConsoleLogger } from './adapter/console.logger'

import { LoggerProvider } from './interface/logger.provider'
import { LoggerStrategy } from './interface/logger.strategy'

export class LoggerFactory {
  static createAdapter(provider: LoggerProvider): LoggerStrategy {
    switch (provider) {
      case 'console':
        return new ConsoleLogger()
      default:
        throw new Exception(`Unsupported logger provider: ${provider}`)
    }
  }
}
