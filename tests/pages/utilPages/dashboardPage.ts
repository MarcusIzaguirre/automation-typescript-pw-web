import { expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { DashboardElements } from '../../../elements/contentIntegrationsElements/dashboardElements'
import { SonosMusicApiElements } from '../../../elements/contentIntegrationsElements/sonosMusicApiElements'

const randomConfigLabelOnDuplicate = faker.person.jobTitle()
const randomIntegrationId = faker.internet.ipv4()
faker.seed(Date.now())

export class DashboardPage {
  page: Page
  dashboardElements: DashboardElements
  toastsAsserts: ToastAsserts
  smapiElements: SonosMusicApiElements

  constructor(page: Page) {
    this.page = page
    this.dashboardElements = new DashboardElements(page)
    this.toastsAsserts = new ToastAsserts(page)
    this.smapiElements = new SonosMusicApiElements(page)
  }

  async createNewContentIntegrations() {
    await this.dashboardElements.btnNewContentIntegration.click()
  }

  async accessControlTab() {
    await this.dashboardElements.controlIntegrationTab.click()
  }

  async createNewControlIntegration() {
    await this.dashboardElements.btnNewControlIntegration.click()
  }

  async validTitleNewControlIntegration() {
    await expect(this.page).toHaveTitle('Control Integration')
  }

  async validTitleNewContentIntegration() {
    await expect(this.page).toHaveTitle('New Content Integration')
  }

  async clickDashboardMenu() {
    await this.dashboardElements.topMenuDashboard.click()
  }

  async clickIconDuplicateSandbox() {
    await this.dashboardElements.btnIconDuplicateSandbox.click()
  }

  async iconDuplicateInProgressToSandbox() {
    await this.dashboardElements.btnDuplicateInProgress.click()
    await this.dashboardElements.checkboxCreateaSandboxIntegration.click()
    await this.dashboardElements.btnOkModalDuplicate.click()
    await this.fillIntegrationIdAndConfigLabelByModal()
  }

  async fillIntegrationIdAndConfigLabelByModal() {
    try {
      await this.smapiElements.inputIntegrationId.click()
      await this.smapiElements.inputIntegrationId.fill(randomIntegrationId)
      await this.dashboardElements.inputConfigLabelOnDuplicate.click()
      await this.dashboardElements.inputConfigLabelOnDuplicate.fill(this.smapiElements.txtConfigLabel)
      await this.clickButtonDuplicateInModal()
      await this.page.waitForTimeout(4000)
      await this.toastsAsserts.validConvertCreateNew()
    } catch (error) {
      const messageErrorIntIdonModal = this.toastsAsserts.msgIntegrationIdInUse
      if (messageErrorIntIdonModal) {
        const newValueIntId = faker.internet.ipv4()
        await this.smapiElements.inputIntegrationId.fill(newValueIntId)
        await this.pressTabThreeTimes()
        await this.clickButtonDuplicateInModal()
        await this.page.waitForTimeout(4000)
        await this.toastsAsserts.validToastWebElementSucessfully()
      }
    }
  }

  async pressTabThreeTimes() {
    for (let i = 0; i < 3; i++) {
      await this.page.keyboard.press('Tab')
    }
  }

  async clickcheckboxDuplicateThisIntegration() {
    await this.dashboardElements.checkboxDuplicateThisIntegration.click()
    await this.dashboardElements.btnOkModalDuplicate.click()
  }

  async fillConfigLabelOnDuplicate() {
    await this.dashboardElements.inputConfigLabelOnDuplicate.fill(randomConfigLabelOnDuplicate)
  }

  async clickButtonDuplicateInModal() {
    await this.dashboardElements.btnDuplicateInModal.click()
  }

  async iconDeleteIntegration() {
    await this.dashboardElements.iconDeleteIntegration.click()
    await this.dashboardElements.btnDeleteIntegrationModal.click()
  }

  async cloneSboxToSbox() {
    await this.clickIconDuplicateSandbox()
    await this.toastsAsserts.waitCharge()
    await this.smapiElements.inputIntegrationId.fill(randomIntegrationId)
    await this.fillConfigLabelOnDuplicate()
    await this.toastsAsserts.waitCharge()
    await this.clickButtonDuplicateInModal()
    await this.toastsAsserts.waitCharge()
    await this.toastsAsserts.validClonedSbToSb()
  }

  async clickSoundsGood() {
    await this.dashboardElements.soundsGoodBtn.click()
  }
}
