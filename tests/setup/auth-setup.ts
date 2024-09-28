import { expect, test as setup } from '@playwright/test'

import OktaLoginPage from '../pages/okta-login-page'
import SalesforceHeaderPage from '../pages/salesforce-header-page'
import oktaLoginUrl from '../utils/salesforce-okta-sso-url'

const env = process.env.ENV || ''
const username = process.env.OKTA_USERNAME || ''
const password = process.env.OKTA_PASSWORD || ''
const authFile = '.auth/user.json'

setup('Okta authentication', async ({ page }) => {
  const oktaLogin = new OktaLoginPage(page)
  const salesforceHeaderPage = new SalesforceHeaderPage(page)

  await page.goto(oktaLoginUrl[env])
  await oktaLogin.doLogin(username, password)
  await expect(salesforceHeaderPage.loginAsSystemMessage).toBeVisible({ timeout: 300000 })

  await page.context().storageState({ path: authFile })
})
