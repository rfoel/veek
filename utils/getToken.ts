import fetch from 'node-fetch'

import { GetTokenResponse } from '../types/Token'

export default (): Promise<GetTokenResponse> =>
  fetch('https://services.live.veek.com.br/authenticator/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: process.env.VEEK_USERNAME,
      password: process.env.VEEK_PASSWORD,
      grantType: 'password',
    }),
  }).then((response) => response.json())
