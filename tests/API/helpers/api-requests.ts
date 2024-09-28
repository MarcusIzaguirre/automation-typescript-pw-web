import { APIRequestContext } from '@playwright/test'

export async function getIntegrationById(request: APIRequestContext, accessToken: string, apiUrl: string, integrationId: string) {
  const response = await request.get(`${apiUrl}/${integrationId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return {
    response, // Return the APIResponse
    responseBody: await response.json(), // Return the response body already converted to the JSON
  }
}

export async function getIntegrationByIdInvalid(
  request: APIRequestContext,
  accessToken: string,
  apiUrl: string,
  integrationId: string,
  invalid: string,
) {
  const response = await request.get(`${apiUrl}/${integrationId}/${invalid}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return {
    response,
    responseBody: await response.json(),
  }
}

export async function getSonosIdById(request: APIRequestContext, accessToken: string, apiUrl: string, sonosId: string) {
  const response = await request.get(`${apiUrl}/${sonosId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return {
    response,
    responseBody: await response.json(),
  }
}

export async function getSonosIdByIdInvalid(
  request: APIRequestContext,
  accessToken: string,
  apiUrl: string,
  sonosId: string,
  invalid: string,
) {
  const response = await request.get(`${apiUrl}/${sonosId}/${invalid}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return {
    response,
    responseBody: await response.json(),
  }
}
