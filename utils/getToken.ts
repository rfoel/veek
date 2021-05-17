import fetch from 'node-fetch'

export default () =>
  fetch('https://services.live.veek.com.br/authenticator/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: process.env.VEEK_OAUTH_CODE,
    }),
  }).then(async response => {
    if (response.status !== 200) throw await response.json()
    return response.json()
  })
