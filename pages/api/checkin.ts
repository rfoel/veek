import { Queue } from 'quirrel/next'

import checkin from '../../utils/checkin-async'
import scheduleCheckin from '../../utils/schedule-checkin'

export default Queue('api/checkin', async () => {
  await checkin()
  await scheduleCheckin()
})
