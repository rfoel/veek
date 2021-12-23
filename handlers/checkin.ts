import type { Handler } from 'aws-lambda'

import middlewares from '../middlewares'
import { CheckInEvent, CheckInResponse } from '../types/CheckIn'
import checkin from '../utils/checkin'
import getToken from '../utils/getToken'

export const handler: Handler = middlewares(
  async (event: CheckInEvent): Promise<CheckInResponse> => {
    const { accessToken } = await getToken(event)
    return checkin(accessToken)
  },
)
