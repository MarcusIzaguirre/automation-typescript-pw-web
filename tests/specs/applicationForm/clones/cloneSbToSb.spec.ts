import { test } from '@playwright/test'
import { DashboardPage } from '../../../pages/utilPages/dashboardPage'
import { GeneralInformationContentPage } from '../../../pages/sectionsPages/generalInformationContentPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { IcsCallPage } from '../../../pages/utilPages/icsCallPage'
import { ManageSandboxIntegrationPage } from '../../../pages/utilPages/manageSandboxIntegrationPage'

test.describe('Duplicates devportal', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let generalInformationContentPage: GeneralInformationContentPage
  let dashboardPage: DashboardPage
  let icsCallPage: IcsCallPage
  let manageSandboxIntegrationPage: ManageSandboxIntegrationPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    generalInformationContentPage = new GeneralInformationContentPage(page)
    dashboardPage = new DashboardPage(page)
    icsCallPage = new IcsCallPage(page)
    manageSandboxIntegrationPage = new ManageSandboxIntegrationPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Clone sandbox to sandbox geninfo panel', async () => {
    await generalInformationContentPage.fillGenInfoPanelSandbox()
    await dashboardPage.clickDashboardMenu()
    await dashboardPage.cloneSboxToSbox()
  })

  test('Scenario 2: Duplicate a regular integration with permission just for a sandbox', async () => {
    await icsCallPage.callToIcsSuccessfullySandboxPortal()
    await manageSandboxIntegrationPage.convertToProductionCreateNew()
    await dashboardPage.clickDashboardMenu()
    await dashboardPage.iconDuplicateInProgressToSandbox()
  })
})
