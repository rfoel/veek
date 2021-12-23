export interface CheckInEvent {
  username: string
  password: string
}
export interface SimCard {
  id: number
  iccid: string
  pin: string
  lineId: number
  status: string
  lastRetry: Date
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

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
  simcard: SimCard
  portability?: boolean
}
