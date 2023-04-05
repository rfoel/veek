import type { Handler } from 'aws-lambda'

import { checkin, getToken } from '../services/veek'
import { CheckInEvent } from '../types'

export const handler: Handler = async (event: CheckInEvent) => {
  console.log({ EVENT: JSON.stringify(event, null, 2) })
  const { accessToken } = await getToken(event)
  await checkin(accessToken)
}
