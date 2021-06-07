import type { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import checkin from '../utils/checkin'
import getToken from '../utils/getToken'

export const handler: APIGatewayProxyHandler =
  async (): Promise<APIGatewayProxyResult> => {
    try {
      const { accessToken } = await getToken()
      const response = await checkin(accessToken)
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    }
  }
