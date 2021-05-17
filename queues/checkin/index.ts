import { Queue } from 'quirrel/vercel'

import handler from './handler'

export default Queue('api/checkin', handler)
