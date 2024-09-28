import { Locator, Page } from '@playwright/test'

export class DeploymentSettingsElements {
  page: Page
  sectionDeploymentSettings: Locator
  inputSonosId: Locator
  btnSaveSonosId: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionDeploymentSettings = page.getByTestId('ICSSettings')
    this.inputSonosId = page.locator("input[name='AccountId__c']")
    this.btnSaveSonosId = page.locator("button[name='sonosAccDict']")
  }
}
