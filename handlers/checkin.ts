import type { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import checkin from '../utils/checkin'
import getToken from '../utils/getToken'
import middlewares from '../middlewares'

export const handler: APIGatewayProxyHandler = middlewares(
  async (event: unknown): Promise<APIGatewayProxyResult> => {
    try {
      const { accessToken } = await getToken(
        event as {
          username: string
          password: string
        },
      )
      const response = await checkin(accessToken)
      return {
        statusCode: 200,
        body: JSON.stringify(response, null, 2),
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify(error, null, 2),
      }
    }
  },
)
