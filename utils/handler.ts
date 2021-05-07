import { QuirrelJobHandler } from 'quirrel/vercel'

import checkin from './checkin'
import getToken from './getToken'
import lines from './lines'
import queue from '../api/checkin'

const handler: QuirrelJobHandler<any> = async () => {
  const { token } = await getToken()
  await checkin(token)
  const [{ nextInteraction }] = await lines(token)

  await queue.enqueue(
    {},
    { runAt: nextInteraction, retry: ['1min', '3min', '5min'] },
  )
}

export default handler
