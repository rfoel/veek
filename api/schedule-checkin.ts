import scheduleCheckin from '../utils/schedule-checkin'

export default async (req, res) => {
  const response = await scheduleCheckin()
  res.status(response.status).send(response)
}
