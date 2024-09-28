import { test } from '@playwright/test'

import { IcsCallPage } from '../../pages/utilPages/icsCallPage'
import { SetupDevPortalPage } from '../../pages/setupDevPortalPage'

test.describe('Make Call to the ICS successfully Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let icsCallPage: IcsCallPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    icsCallPage = new IcsCallPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Call to the ICS successfully Sandbox DevPortal', async () => {
    await icsCallPage.validCallToIcsSuccessfullySandboxPortal()
  })
})
