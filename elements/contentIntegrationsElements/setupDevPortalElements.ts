import { Locator, Page } from '@playwright/test'

//SELECIONAR OS ELEMENTOS QUE PRECISO MAPEAR: BUTTON, TITLE, INPUT, MENSAGEM
export class SetupDevPortalElements {
  page: Page
  getStartedPageTitle: Locator
  getStartedButton: Locator
  signContentButton: Locator
  loginPageTitle: Locator
  email: Locator
  password: Locator
  signLoginButton: Locator
  emailData: string
  passData: string
  validDashboard: Locator

  //MAPEANDO OS ELEMENTOS
  constructor(page: Page) {
    this.page = page
    this.getStartedPageTitle = page.locator("div[class='logoImage']")
    this.getStartedButton = page.locator("button[data-id='getStarted']")
    this.email = page.locator('#okta-signin-username')
    this.password = page.locator('#okta-signin-password')
    this.emailData = 'automationqa@uorak.com'
    this.passData = 'auto123@'
    this.signLoginButton = page.locator('#okta-signin-submit')
    this.validDashboard = page.locator("a[id='1']")
  }
}
