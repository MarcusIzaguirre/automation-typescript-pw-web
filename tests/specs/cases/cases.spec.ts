import { test } from '@playwright/test'
import { SetupDevPortalPage } from '../../pages/setupDevPortalPage'
import { NewCasePage } from '../../pages/casesPages/newCasePage'

test.describe('Tests in the Support Menu to check the cases', () => {
  let setupDevPortalpage: SetupDevPortalPage
  let newCasePage: NewCasePage

  test.beforeEach(async ({ page }) => {
    setupDevPortalpage = new SetupDevPortalPage(page)
    newCasePage = new NewCasePage(page)
    await setupDevPortalpage.setupSupport()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Scenario 1: Create a new case successfully', async () => {
    await newCasePage.newCase()
    await newCasePage.fillSubject()
    await newCasePage.selectCategory('Content Integration')
    await newCasePage.selectSubCategory('Other')
    await newCasePage.fillDescription()
    await newCasePage.saveNewCase()
    await newCasePage.verifyCaseCreated()
  })
})
