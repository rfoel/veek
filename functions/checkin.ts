import type { Handler } from 'aws-lambda'

import { checkin, getToken } from '../services/veek'
import { CheckInEvent, CheckInResponse } from '../types'

export const handler: Handler = async (
  event: CheckInEvent,
): Promise<CheckInResponse> => {
  const { accessToken } = await getToken(event)
  return checkin(accessToken)
}
