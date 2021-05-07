import { Queue } from 'quirrel/next'

import checkinSync from './checkinSync'

export default Queue('api/checkin', checkinSync as any)
