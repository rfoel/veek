import checkin from './checkin'
import getToken from './getToken'

export default async () => {
  try {
    const { token } = await getToken()
    await checkin(token)

    return {
      status: 200,
      message: `Checked-in successfully`,
    }
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    }
  }
}
