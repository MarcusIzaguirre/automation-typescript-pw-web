import { test } from '@playwright/test'
import { SetupDevPortalPage } from '../../pages/setupDevPortalPage'
import { ClientCredentialsPage } from '../../pages/controlIntegrationsSectionPages/clientCredentialsPage'

test.describe('Section Client Credentials Control Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let clientCredentPage: ClientCredentialsPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    clientCredentPage = new ClientCredentialsPage(page)
    await setupDevPortalpage.setupControlIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save Client Credentials section successfully', async () => {
    await clientCredentPage.fillIntegrationOverviewPanel()
    await clientCredentPage.fillClientCredentialsPanelFirst()
  })
})
