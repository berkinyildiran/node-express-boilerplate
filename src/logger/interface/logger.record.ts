import { Moment } from 'moment'

export interface LoggerRecord {
  id: string
  date: Moment
  operation: string
}
