import { CheckInEvent, CheckInResponse, GetTokenResponse } from '../types'
import fetch from '../utils/fetch'

const baseUrl = 'https://services.live.veek.com.br'

export const getToken = async ({ username, password }: CheckInEvent) => {
  const url = `${baseUrl}/authenticator/oauth2/token`
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const init = {
    method: 'POST',
    headers,
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
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  })
  const init = {
    method: 'POST',
    headers,
  }
  return fetch<CheckInResponse>(url, init)
}
