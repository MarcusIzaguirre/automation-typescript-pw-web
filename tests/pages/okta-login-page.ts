import { Locator, Page } from '@playwright/test'

class OktaLoginPage {
  readonly page: Page
  readonly username: Locator
  readonly password: Locator
  readonly loginButton: Locator
  readonly authButton: Locator

  constructor(page: Page) {
    this.page = page
    this.username = page.getByLabel('Username')
    this.password = page.getByLabel('Password')
    this.loginButton = page.getByRole('button', { name: 'Sign in' })
    this.authButton = page.locator('[data-se="okta_verify-push"]')
    //this.authButton = page.locator('[data-se="okta_verify-totp"]')
  }

  async fillUsername(username: string) {
    await this.username.fill(username)
  }

  async fillPassword(password: string) {
    await this.password.fill(password)
  }

  async doLogin(username: string, password: string) {
    await this.fillUsername(username)
    await this.fillPassword(password)
    await this.loginButton.click()
    await this.authButton.click()
  }
}

export default OktaLoginPage
