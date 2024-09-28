import { test } from '@playwright/test'

import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { ManageSandboxIntegrationPage } from '../../../pages/utilPages/manageSandboxIntegrationPage'
import { IcsCallPage } from '../../../pages/utilPages/icsCallPage'

test.describe('Display modals by Submit', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let manageSandboxIntegrationPage: ManageSandboxIntegrationPage
  let icsCallPage: IcsCallPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    manageSandboxIntegrationPage = new ManageSandboxIntegrationPage(page)
    icsCallPage = new IcsCallPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: It should display Modal Application is not complete', async () => {
    await icsCallPage.callToIcsSuccessfullySandboxPortal()
    await manageSandboxIntegrationPage.convertToProductionCreateNew()
    await manageSandboxIntegrationPage.modalApplicationisnotcomplete()
  })

  test('Scenario 2: It should display Modal Unsaved Changes', async () => {
    await icsCallPage.callToIcsSuccessfullySandboxPortal()
    await manageSandboxIntegrationPage.convertToProductionCreateNew()
    await manageSandboxIntegrationPage.modalUnsavedChanges()
  })
})
