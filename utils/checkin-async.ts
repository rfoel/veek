import checkin from './checkin'
import getToken from './getToken'
import { CheckInAsyncResponse } from '../types/Token'

export default async (): Promise<CheckInAsyncResponse> => {
  try {
    const { accessToken } = await getToken()
    await checkin(accessToken)

    return {
      status: 200,
      message: 'Checked-in successfully',
    }
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    }
  }
}
