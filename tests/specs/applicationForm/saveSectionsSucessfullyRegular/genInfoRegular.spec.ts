import { test } from '@playwright/test'

import { GeneralInformationContentPage } from '../../../pages/sectionsPages/generalInformationContentPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { ManageSandboxIntegrationPage } from '../../../pages/utilPages/manageSandboxIntegrationPage'
import { GenInfoContentElements } from '../../../../elements/contentIntegrationsElements/generalInformationContentElements'
import { IcsCallPage } from '../../../pages/utilPages/icsCallPage'
import { ToastAsserts } from '../../../utils/toastsAsserts'

test.describe('Section General Information Regular Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let generalInformationContentPage: GeneralInformationContentPage
  let manageSandboxIntegrationPage: ManageSandboxIntegrationPage
  let genInfoElements: GenInfoContentElements
  let icsCallPage: IcsCallPage
  let toastsAsserts: ToastAsserts

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    generalInformationContentPage = new GeneralInformationContentPage(page)
    manageSandboxIntegrationPage = new ManageSandboxIntegrationPage(page)
    genInfoElements = new GenInfoContentElements(page)
    icsCallPage = new IcsCallPage(page)
    toastsAsserts = new ToastAsserts(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section General Information successfully Regular', async () => {
    await icsCallPage.callToIcsSuccessfullySandboxPortal()
    await manageSandboxIntegrationPage.convertToProductionCreateNew()
    await generalInformationContentPage.fillGenInfoPanelRegular()
    await genInfoElements.btnSaveWebSitePanel.click()
    await toastsAsserts.waitThirdToast()
  })
})
