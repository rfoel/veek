import checkin from '../../utils/checkin-async'
import scheduleCheckin from '../../utils/schedule-checkin'

export default async () => {
  await checkin()
  await scheduleCheckin()
}
