import middy, { MiddyfiedHandler } from '@middy/core'
import type { Handler } from 'aws-lambda'

import logger from './logger'

export default (handler: Handler): MiddyfiedHandler =>
  middy(handler).use([logger])
