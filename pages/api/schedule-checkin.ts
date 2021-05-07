import type { NextApiRequest, NextApiResponse } from 'next'

import scheduleCheckin from '../../utils/schedule-checkin'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await scheduleCheckin()
  res.status(response.status).send(response)
}
