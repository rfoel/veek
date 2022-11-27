import { CheckInEvent, CheckInResponse, GetTokenResponse } from '../types'

const baseUrl = 'https://services.live.veek.com.br'

export const getToken = ({
  username,
  password,
}: CheckInEvent): Promise<GetTokenResponse> =>
  fetch(`${baseUrl}/authenticator/oauth2/token`, {
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

export const checkin = (token: string): Promise<CheckInResponse> =>
  fetch(`${baseUrl}/telecom/lines/checkin`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
