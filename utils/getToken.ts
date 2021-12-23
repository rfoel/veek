import got from 'got'

import { CheckInEvent } from '../types/CheckIn'
import { GetTokenResponse } from '../types/Token'

const getToken = ({
  username,
  password,
}: CheckInEvent): Promise<GetTokenResponse> =>
  got
    .post('https://services.live.veek.com.br/authenticator/oauth2/token', {
      json: {
        username,
        password,
        grantType: 'password',
      },
    })
    .json()

export default getToken
