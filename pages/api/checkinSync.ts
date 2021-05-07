import type { NextApiRequest, NextApiResponse } from 'next'

import checkin from '../../utils/checkin'
import getToken from '../../utils/getToken'
import lines from '../../utils/lines'
import queue from './checkin'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { token } = await getToken()
    await checkin(token)
    const [line] = await lines(token)

    await queue.enqueue(line, {
      runAt: line.nextInteraction,
      retry: ['1min', '3min', '5min'],
    })

    res.status(201).send({
      message: `Check-in complete. Next interaction will happen at ${line.nextInteraction}.`,
    })
  } catch (error) {
    res.status(error.statusCode).send({ message: error.message })
  }
}
