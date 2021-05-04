const fetch = require('isomorphic-fetch')

let token

const getToken = () =>
  fetch('https://services.live.veek.com.br/authenticator/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: '3ce64b69c3de57a0d807fccb5cd5a20a4d51b4bf',
      device: {
        ref:
          'fchGQOXMSUI8lxHMvW69rQ:APA91bErRdWkdjalt8BKxGBcFeF07fP1ivRBCyw2EVuwzmlAsU1PeMoQDt96ZXZup57-qFY8G3_9W6yhYlGePvc24HyJYvLDu52gqEH3uy0gLjM4fU',
        name: 'Rafael’s iPhone',
      },
    }),
  })
    .then(async response => {
      if (response.status !== 200) throw await response.json()
      return response.json()
    })
    .then(response => {
      token = response.token
    })

const checkin = () =>
  fetch('https://services.live.veek.com.br/telecom/lines/checkin', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(async response => {
    if (response.status !== 201) throw await response.json()
    return response.json()
  })

;(async () => {
  try {
    await getToken()
    await checkin()
    console.log('💰')
  } catch (error) {
    console.log(error.message)
  }
})()
