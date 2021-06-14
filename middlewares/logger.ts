const obfuscate = (data: Record<string, unknown>, filter: string[]) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (filter.includes(key)) return { ...acc, [key]: '******' }
    return { ...acc, [key]: value }
  }, {})

const logger = (data: Record<string, unknown>) =>
  console.log(JSON.stringify(obfuscate(data, ['password']), null, 2))

const logRequest = (handler) => {
  logger({ REQUEST: handler.event })
}

const logResponse = (handler) => {
  logger({
    RESPONSE: {
      status: handler.response.staus,
      body: JSON.parse(handler.response.body),
    },
  })
}

const logError = (handler) => {
  logger({ ERROR: handler.response })
}

export default {
  before: (handler) => logRequest(handler),
  after: (handler) => logResponse(handler),
  onError: (handler) => logError(handler),
}
