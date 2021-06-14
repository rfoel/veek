import fetch from 'node-fetch'

import { GetTokenResponse } from '../types/Token'

export default ({
  username,
  password,
}: {
  username: string
  password: string
}): Promise<GetTokenResponse> =>
  fetch('https://services.live.veek.com.br/authenticator/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      grantType: 'password',
    }),
  }).then((response) => response.json())
