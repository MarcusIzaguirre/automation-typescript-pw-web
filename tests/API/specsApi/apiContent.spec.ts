import { test, expect } from '@playwright/test'
import { authenticate } from '../helpers/auth-setup'
import { getIntegrationById, getIntegrationByIdInvalid, getSonosIdById, getSonosIdByIdInvalid } from '../helpers/api-requests'
import * as endpoints from '../fixtures/endpoints'
import { faker } from '@faker-js/faker'
import * as dataAccess from '../fixtures/data-access'

let accessToken: string

test.describe('API Testing Content Integrations', () => {
  test.beforeAll(async ({ request }) => {
    accessToken = await authenticate(request)
  })

  test('Scenario 01: It should authenticate a user with valid credentials ICS', async () => {
    expect(accessToken).toBeDefined()
  })

  test('Scenario 02: It should not authenticate a user with invalid client id ICS', async ({ request }) => {
    const authUrl = `${endpoints.baseAPI}/${endpoints.postLogin}`
    const response = await request.post(authUrl, {
      form: {
        client_id: faker.animal.cat(),
        client_secret: dataAccess.clientSecret,
        username: dataAccess.username,
        password: `${dataAccess.password}${dataAccess.secretToken}`,
        grant_type: 'password',
      },
    })

    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(400)
    expect(responseBody.error).toEqual('invalid_client_id')
    expect(responseBody.error_description).toEqual('client identifier invalid')
  })

  test('Scenario 03: It should retrieve the sonosId and role by integrationId - IntegrationId Valid', async ({ request }) => {
    const { response, responseBody } = await getIntegrationById(request, accessToken, endpoints.baseAPI, endpoints.getIntegrationIdValid)

    expect(response.status()).toBe(200)
    expect(responseBody.users).toBeDefined()
    expect(responseBody.users.length).toBeGreaterThan(0)

    responseBody.users.forEach((user) => {
      expect(user).toHaveProperty('sonosId')
      expect(user).toHaveProperty('role')
    })
  })

  test('Scenario 04: It should not call integration id with data invalid - IntegrationId invalid', async ({ request }) => {
    const { response, responseBody } = await getIntegrationByIdInvalid(
      request,
      accessToken,
      endpoints.baseAPI,
      endpoints.getIntegrationId,
      'invalid',
    )

    expect(response.status()).toBe(404)
    expect(responseBody.message).toEqual('Integration Id not found')
  })

  test('Scenario 05: It should retrieve the integrations from sonosId and role - SonoId valid', async ({ request }) => {
    const { response, responseBody } = await getSonosIdById(request, accessToken, endpoints.baseAPI, endpoints.getSonosIdValid)

    expect(response.status()).toBe(200)
    expect(responseBody.role).toEqual('developer partner')
    expect(responseBody.integrations).toBeTruthy()
  })

  test('Scenario 06: It should not call a sonos id with data invalid - SonoId invalid', async ({ request }) => {
    const { response, responseBody } = await getSonosIdByIdInvalid(request, accessToken, endpoints.baseAPI, endpoints.getSonosId, '20')

    expect(response.status()).toBe(404)
    expect(responseBody.message).toEqual('Sonos Id not found')
  })
})
