const lines = JSON.parse(process.env.VEEK_LINES)

const baseUrl = 'https://services.live.veek.com.br'

const getToken = async ({ username, password }) => {
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
  return fetch(url, init).then(response => response.json())
}

const checkin = accessToken => {
  const url = `${baseUrl}/telecom/lines/checkin`
  const init = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  }
  return fetch(url, init).then(response => response.json())
}

const rewards = async accessToken => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const [line] = await fetch(`${baseUrl}/telecom/lines`, {
    headers,
  }).then(response => response.json())

  const [bonus, checkins] = await Promise.all([
    fetch(`${baseUrl}/telecom/lines/${line.id}/bonus`, {
      headers,
    }).then(response => response.json()),
    fetch(`${baseUrl}/telecom/checkins?lineId=${line.id}`, {
      headers,
    }).then(response => response.json()),
  ])

  if (bonus.available) {
    await fetch(`${baseUrl}/telecom/lines/${line.id}/claim`, {
      headers,
      method: 'POST',
    })
  }

  if (checkins.available) {
    await fetch(`${baseUrl}/telecom/checkins/claim`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        params: {
          lineId: line.id,
        },
      }),
    })
  }
}

for (const line of lines) {
  const { accessToken } = await getToken(line)
  const checkIns = process.env.CHECK_INS || 1

  for (let i = 0; i < checkIns; i++) {
    await checkin(accessToken, line).catch(console.log)
  }

  await rewards(accessToken, line).catch(console.log)
}
