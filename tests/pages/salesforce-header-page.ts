import { expect, Locator, Page } from '@playwright/test'

class SalesforceHeaderPage {
  readonly page: Page
  readonly loginAsSystemMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.loginAsSystemMessage = page.locator('.oneSystemMessage')
  }

  async verifySystemMessage(message: string) {
    await expect(this.loginAsSystemMessage.getByText(message)).toBeVisible()
  }
}

export default SalesforceHeaderPage
