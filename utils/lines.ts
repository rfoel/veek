import fetch from 'node-fetch'

import { LinesResponse } from '../types'

export default (token: string): Promise<LinesResponse> =>
  fetch('https://services.live.veek.com.br/telecom/lines', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(async (response) => {
    if (response.status !== 200) throw await response.json()
    return response.json()
  })
