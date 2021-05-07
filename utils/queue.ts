import { Queue } from 'quirrel/vercel'

import handler from './handler'

const queue = Queue('api/checkin', handler)

export default queue
