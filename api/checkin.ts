import { Queue } from 'quirrel/vercel'

import handler from '../utils/handler'

export default Queue('api/checkin', handler)
