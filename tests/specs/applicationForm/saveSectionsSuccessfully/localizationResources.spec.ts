import { test } from '@playwright/test'

import { LocalizationResourcesPage } from '../../../pages/sectionsPages/localizationResourcesPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'

test.describe('Section Localization Resources Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let localResPage: LocalizationResourcesPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    localResPage = new LocalizationResourcesPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Localization Resources i18next successfully Sandbox', async () => {
    await localResPage.accessLocalizationResources()
    await localResPage.uploadi18Next()
  })

  test('Scenario 2: It should display error on status left menu on Localization Resources wrong file leaving and back', async () => {
    await localResPage.accessLocalizationResources()
    await localResPage.uploadi18NextWithError()
  })
})
