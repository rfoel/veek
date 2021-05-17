import dayjs from 'dayjs'
import Hashids from 'hashids'

import getToken from './getToken'
import lines from './lines'
import queue from '../api/checkin'

const hashids = new Hashids('Veek', 6, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789')

export default async () => {
  try {
    const { token } = await getToken()
    const [line] = await lines(token)
    const runAt = dayjs(line.nextInteraction).subtract(7, 'minutes').toDate()

    await queue.enqueue(line, {
      id: hashids.encode(+runAt),
      runAt,
      retry: ['1min', '3min', '5min'],
    })

    return {
      status: 201,
      message: `Next interaction will happen at ${line.nextInteraction}.`,
    }
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    }
  }
}
