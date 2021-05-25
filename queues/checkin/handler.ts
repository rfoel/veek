import checkin from '../../utils/checkin-async'
import scheduleCheckin from '../../utils/schedule-checkin'

export default async (): Promise<void> => {
  await checkin()
  await scheduleCheckin()
}
