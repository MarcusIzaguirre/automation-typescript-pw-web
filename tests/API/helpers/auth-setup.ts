import { APIRequestContext } from '@playwright/test'
import * as endpoints from '../fixtures/endpoints'
import * as dataAccess from '../fixtures/data-access'

export async function authenticate(request: APIRequestContext): Promise<string> {
  const authUrl = `${endpoints.baseAPI}/${endpoints.postLogin}`
  const response = await request.post(authUrl, {
    form: {
      client_id: dataAccess.clientId,
      client_secret: dataAccess.clientSecret,
      username: dataAccess.username,
      password: `${dataAccess.password}${dataAccess.secretToken}`,
      grant_type: 'password',
    },
  })

  const responseBody = await response.json()
  return responseBody.access_token
}
