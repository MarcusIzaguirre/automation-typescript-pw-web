import { test } from '@playwright/test'

import { GeneralInformationContentPage } from '../../../pages/sectionsPages/generalInformationContentPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { SonosMusicApiPage } from '../../../pages/sectionsPages/sonosMusicApiPage'

test.describe('Section General Information Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let generalInformationContentPage: GeneralInformationContentPage
  let smapiPage: SonosMusicApiPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    smapiPage = new SonosMusicApiPage(page)
    generalInformationContentPage = new GeneralInformationContentPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section General Information successfully Sandbox', async () => {
    await generalInformationContentPage.fillSectionGenInfoSandbox()
  })

  test('Scenario 2: It should ensure the status of complete General Information remains when leaving and returning', async () => {
    await generalInformationContentPage.fillSectionGenInfoSandbox()
    await smapiPage.accessSonosMusicApi()
    await generalInformationContentPage.accessGenInfoSandbox()
    await generalInformationContentPage.validStatusComplete()
  })
})
