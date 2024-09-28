import { test } from '@playwright/test'

import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { ContactInformationPage } from '../../../pages/sectionsPages/contactInformationPage'
import { ToastAsserts } from '../../../utils/toastsAsserts'
import { ManageSandboxIntegrationPage } from '../../../pages/utilPages/manageSandboxIntegrationPage'
import { IcsCallPage } from '../../../pages/utilPages/icsCallPage'

test.describe('Section Contact Information Regular Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let contactInformationPage: ContactInformationPage
  let toastAsserts: ToastAsserts
  let manageSandboxIntegrationPage: ManageSandboxIntegrationPage
  let icsCallPage: IcsCallPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    contactInformationPage = new ContactInformationPage(page)
    toastAsserts = new ToastAsserts(page)
    await setupDevPortalpage.setupSandboxIntegration()
    manageSandboxIntegrationPage = new ManageSandboxIntegrationPage(page)
    icsCallPage = new IcsCallPage(page)
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Contact Information successfully Regular Integration', async () => {
    await icsCallPage.callToIcsSuccessfullySandboxPortal()
    await manageSandboxIntegrationPage.convertToProductionCreateNew()
    await contactInformationPage.accessContactInformation()
    await contactInformationPage.fillFirstKeyPointsContact()
    await toastAsserts.waitFirstToast()
  })
})
