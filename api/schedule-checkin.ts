import { VercelRequest, VercelResponse } from '@vercel/node'

import scheduleCheckin from '../utils/schedule-checkin'

export default async (
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> => {
  const response = await scheduleCheckin()
  res.status(response.status).send(response)
}
