import got from 'got'

import { CheckInEvent, CheckInResponse, GetTokenResponse } from '../types'

const baseUrl = 'https://services.live.veek.com.br'

export const getToken = ({
  username,
  password,
}: CheckInEvent): Promise<GetTokenResponse> =>
  got
    .post(`${baseUrl}/authenticator/oauth2/token`, {
      json: {
        username,
        password,
        grantType: 'password',
      },
    })
    .json()

export const checkin = (token: string): Promise<CheckInResponse> =>
  got
    .post(`${baseUrl}/telecom/lines/checkin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json()
