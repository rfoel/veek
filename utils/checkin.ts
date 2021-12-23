import got from 'got'

import { CheckInResponse } from '../types/CheckIn'

const checkin = (token: string): Promise<CheckInResponse> =>
  got
    .post('https://services.live.veek.com.br/telecom/lines/checkin', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json()

export default checkin
