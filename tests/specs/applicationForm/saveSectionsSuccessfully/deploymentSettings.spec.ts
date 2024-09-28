import { test } from '@playwright/test'

import { DeploymentSettingsPage } from '../../../pages/sectionsPages/deploymentSettingsPage'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'

test.describe('Section Deployment Settings Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let deploymentPage: DeploymentSettingsPage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    deploymentPage = new DeploymentSettingsPage(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Deployment Settings successfully Sandbox', async () => {
    await deploymentPage.accessDeploymentSettings()
    await deploymentPage.fillSonosId()
  })
})
