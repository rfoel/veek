import { Simcard } from './common'

export interface CheckInResponse {
  id: number
  ddd: string
  msisdn: string
  telecomReference: string
  frozenBalance: string
  nextInteraction: Date
  userId: number
  state: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  simcard: Simcard
  portability?: boolean
}
