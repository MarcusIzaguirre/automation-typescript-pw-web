import { expect, Page } from '@playwright/test'

import { SetupDevPortalElements } from '../../elements/contentIntegrationsElements/setupDevPortalElements'
import { DashboardPage } from './utilPages/dashboardPage'
import { DashboardElements } from '../../elements/contentIntegrationsElements/dashboardElements'
import { NewCasePage } from './casesPages/newCasePage'

const URL = 'https://truckin--qa.sandbox.my.site.com/developerportal/s/?language=en_US'

export class SetupDevPortalPage {
  page: Page
  setupDevPortalElements: SetupDevPortalElements
  dashboardPage: DashboardPage
  dashboardElements: DashboardElements
  newCasePage: NewCasePage

  constructor(page: Page) {
    this.page = page
    this.setupDevPortalElements = new SetupDevPortalElements(page)
    this.dashboardPage = new DashboardPage(page)
    this.dashboardElements = new DashboardElements(page)
    this.newCasePage = new NewCasePage(page)
  }

  async navigateDevPortal() {
    await this.page.goto(URL)
  }

  async validgetStartedPageTitle() {
    await expect(this.setupDevPortalElements.getStartedPageTitle).toBeVisible({ timeout: 4000 })
  }

  async clickGetStartedButton() {
    await this.setupDevPortalElements.getStartedButton.click()
  }

  async clicksignContentButton() {
    const signContentButton = this.page
      .locator('article')
      .filter({ hasText: "I'm integrating a content service with SonosIf you have access to or own a catal" })
      .getByTitle('Sign in')
    await signContentButton.click()
  }

  async validloginPageTitle() {
    await expect(this.page).toHaveTitle('Sign in | Sonos')
  }

  async fillEmail() {
    await this.setupDevPortalElements.email.fill(this.setupDevPortalElements.emailData)
  }

  async fillPassword() {
    await this.setupDevPortalElements.password.fill(this.setupDevPortalElements.passData)
  }

  async clickSignLoginButton() {
    await this.setupDevPortalElements.signLoginButton.click()
  }

  async validDashboardPage() {
    await expect(this.setupDevPortalElements.validDashboard).toBeVisible({ timeout: 50000 })
  }

  async setupRegularIntegration() {
    await this.navigateDevPortal()
    await this.validgetStartedPageTitle()
    await this.clickGetStartedButton()
    await this.clicksignContentButton()
    await this.validloginPageTitle()
    await this.fillEmail()
    await this.fillPassword()
    await this.clickSignLoginButton()
    await this.validDashboardPage()
    await this.dashboardPage.createNewContentIntegrations()
    await this.dashboardPage.validTitleNewContentIntegration()
  }

  async setupSandboxIntegration() {
    await this.navigateDevPortal()
    await this.validgetStartedPageTitle()
    await this.clickGetStartedButton()
    await this.clicksignContentButton()
    await this.validloginPageTitle()
    await this.fillEmail()
    await this.fillPassword()
    await this.clickSignLoginButton()
    await this.validDashboardPage()
    await this.dashboardPage.createNewContentIntegrations()
    await this.dashboardPage.clickSoundsGood()
    await this.dashboardPage.validTitleNewContentIntegration()
  }

  async setupControlIntegration() {
    await this.navigateDevPortal()
    await this.validgetStartedPageTitle()
    await this.clickGetStartedButton()
    await this.clicksignContentButton()
    await this.validloginPageTitle()
    await this.fillEmail()
    await this.fillPassword()
    await this.clickSignLoginButton()
    await this.validDashboardPage()
    await this.dashboardPage.accessControlTab()
    await this.page.waitForTimeout(1500)
    await this.dashboardPage.createNewControlIntegration()
    await this.page.waitForLoadState()
    await this.dashboardPage.validTitleNewControlIntegration()
    await this.page.waitForTimeout(1000)
  }

  async setupSupport() {
    await this.navigateDevPortal()
    await this.validgetStartedPageTitle()
    await this.clickGetStartedButton()
    await this.clicksignContentButton()
    await this.validloginPageTitle()
    await this.fillEmail()
    await this.fillPassword()
    await this.clickSignLoginButton()
    await this.validDashboardPage()
    await this.newCasePage.clickSupportMenu()
  }
}
