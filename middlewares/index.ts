import type { APIGatewayProxyHandler } from 'aws-lambda'
import middy, { MiddyfiedHandler } from '@middy/core'

import logger from './logger'

export default (handler: APIGatewayProxyHandler): MiddyfiedHandler =>
  middy(handler).use([logger])
