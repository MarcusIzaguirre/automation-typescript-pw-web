import { Locator, Page } from '@playwright/test'

export class ManageSandboxIntegrationElements {
  page: Page
  btnConvertToProduction: Locator
  checkboxCreateNewIntegration: Locator
  btnOkModal: Locator

  constructor(page: Page) {
    this.page = page
    this.btnConvertToProduction = page.locator("button[data-testid='convert-to-prod-button']")
    this.checkboxCreateNewIntegration = page.locator("input[data-id= 'toRegular']")
    this.btnOkModal = page.getByRole('button', { name: 'Ok' })
  }
}
