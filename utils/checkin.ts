import fetch from 'node-fetch'

import { CheckInResponse } from '../types/CheckIn'

export default (token: string): Promise<CheckInResponse> =>
  fetch('https://services.live.veek.com.br/telecom/lines/checkin', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(async (response) => {
    if (response.status !== 201) throw await response.json()
    return response.json()
  })
