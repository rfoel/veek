import { Simcard } from './common'

export interface Line {
  id: number
  ddd: string
  msisdn: string
  telecomReference: string
  frozenBalance?: number
  nextInteraction: Date
  userId: number
  state: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  simcard: Simcard
  portability?: boolean
}

export type LinesResponse = Array<Line>
