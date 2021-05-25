export interface BaseResponse {
  status: number
  message: string
}

export interface Simcard {
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
