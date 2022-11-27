import type { Handler } from 'aws-lambda'

import { checkin, getToken } from '../services/veek'
import { CheckInEvent } from '../types'

export const handler: Handler = async (event: CheckInEvent) => {
  const { accessToken } = await getToken(event)
  await checkin(accessToken)
}
