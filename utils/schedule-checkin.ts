import getToken from './getToken'
import lines from './lines'
import queue from '../pages/api/checkin'

export default async () => {
  try {
    const { token } = await getToken()
    const [line] = await lines(token)

    await queue.enqueue(line, {
      runAt: new Date(line.nextInteraction),
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
