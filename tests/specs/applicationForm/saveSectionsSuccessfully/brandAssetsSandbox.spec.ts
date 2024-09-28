import { test } from '@playwright/test'

import { BrandAssetsPage } from '../../../pages/sectionsPages/brandAssetsPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
//import { SonosMusicApiPage } from '../../../pages/sectionsPages/sonosMusicApiPage'
import { GeneralInformationContentPage } from '../../../pages/sectionsPages/generalInformationContentPage'

test.describe('Section Brand Assets Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let brandPage: BrandAssetsPage
  let generalInformationContentPage: GeneralInformationContentPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    brandPage = new BrandAssetsPage(page)
    generalInformationContentPage = new GeneralInformationContentPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Brand Assets successfully Sandbox', async () => {
    await brandPage.accessBrandAssets()
    await brandPage.uploadServiceLogoSvg()
    await brandPage.uploadFullLogoSonosAppSvg()
    await brandPage.uploadFullLogoSonosSupportSvg()
    await brandPage.uploadBadge()
  })

  test('Scenario 2: It should ensure the status of complete Brand Assets remains when leaving and returning', async () => {
    await brandPage.accessBrandAssets()
    await brandPage.uploadServiceLogoSvg()
    await brandPage.uploadFullLogoSonosAppSvg()
    await brandPage.uploadFullLogoSonosSupportSvg()
    await brandPage.uploadBadge()
    await generalInformationContentPage.accessGenInfoSandbox()
    await brandPage.accessBrandAssets()
    await generalInformationContentPage.validStatusComplete()
  })
})
