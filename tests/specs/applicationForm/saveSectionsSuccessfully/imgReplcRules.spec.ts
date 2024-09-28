import { test } from '@playwright/test'
import { SetupDevPortalPage } from '../../../pages/setupDevPortalPage'
import { ImgReplRulesPage } from '../../../pages/sectionsPages/imgReplRulesPage'
import { ToastAsserts } from '../../../utils/toastsAsserts'

test.describe('Section Image Replacement Rules Sandbox Integration', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let imgReplRulPage: ImgReplRulesPage
  let toastsAsserts: ToastAsserts

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    imgReplRulPage = new ImgReplRulesPage(page)
    toastsAsserts = new ToastAsserts(page)
    await setupDevPortalpage.setupSandboxIntegration()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Save section Image Replacement Rules successfully Sandbox', async () => {
    await imgReplRulPage.accessImgReplRules()
    await imgReplRulPage.fillSectionImgReplRules()
    await toastsAsserts.waitFirstToast()
  })
})
