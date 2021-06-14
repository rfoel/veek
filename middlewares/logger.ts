const obfuscate = (data: Record<string, unknown>, filter: string[] = []) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (filter.includes(key)) return { ...acc, [key]: '******' }
    return { ...acc, [key]: value }
  }, {})

const logger = (data: Record<string, unknown>) =>
  console.log(JSON.stringify(data, null, 2))

const logRequest = (handler) => {
  logger({ REQUEST: obfuscate(handler.event, ['password']) })
}

const logResponse = (handler) => {
  logger({
    RESPONSE: {
      statusCode: handler.response.statusCode,
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
