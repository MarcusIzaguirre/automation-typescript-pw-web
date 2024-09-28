import { test } from '@playwright/test'

import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { SonosMusicApiPage } from '../../../pages/sectionsPages/sonosMusicApiPage'
import { GeneralInformationContentPage } from '../../../pages/sectionsPages/generalInformationContentPage' //add

test.describe('Section Sonos Music API Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let smapiPage: SonosMusicApiPage
  let generalInformationContentPage: GeneralInformationContentPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    smapiPage = new SonosMusicApiPage(page)
    generalInformationContentPage = new GeneralInformationContentPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Sonos Music API successfully Sandbox', async () => {
    await smapiPage.accessSonosMusicApi()
    await smapiPage.fillPanelLabels()
    await smapiPage.panelEndpoints()
    await smapiPage.panelAuthenticationAnonymous()
    await smapiPage.panelConfiguration()
  })

  test('Scenario 2: It should ensure the status of complete SMAPI remains when leaving and returning', async () => {
    await smapiPage.fillSectionSmapiSandbox()
    await generalInformationContentPage.accessGenInfoSandbox()
    await smapiPage.accessSonosMusicApi()
    await generalInformationContentPage.validStatusComplete()
  })
})
