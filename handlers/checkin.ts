import type { Handler } from 'aws-lambda'

import middlewares from '../middlewares'
import { checkin, getToken } from '../services/veek'
import { CheckInEvent, CheckInResponse } from '../types/CheckIn'

export const handler: Handler = middlewares(
  async (event: CheckInEvent): Promise<CheckInResponse> => {
    const { accessToken } = await getToken(event)
    return checkin(accessToken)
  },
)
