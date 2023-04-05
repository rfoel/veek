import { CheckInEvent, CheckInResponse, GetTokenResponse } from '../types'
import fetch from '../utils/fetch'

const baseUrl = 'https://services.live.veek.com.br'

export const getToken = async ({ username, password }: CheckInEvent) => {
  const url = `${baseUrl}/authenticator/oauth2/token`
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      grantType: 'password',
    }),
  }
  return fetch<GetTokenResponse>(url, init)
}

export const checkin = (token: string) => {
  const url = `${baseUrl}/telecom/lines/checkin`
  const init = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  return fetch<CheckInResponse>(url, init)
}
