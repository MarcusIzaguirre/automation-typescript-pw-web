import { faker } from '@faker-js/faker'
import { expect, Page } from '@playwright/test'
import { ToastAsserts } from '../../utils/toastsAsserts'

import { GenInfoContentElements } from '../../../elements/contentIntegrationsElements/generalInformationContentElements'

const randonServiceName = faker.person.firstName()
const randonServiceDescription = faker.string.alpha(10)
const randonAccountName = faker.animal.fish()
const randonServiceFeatures = faker.commerce.productName()
export class GeneralInformationContentPage {
  page: Page
  genInfoElements: GenInfoContentElements
  toastsAsserts: ToastAsserts

  constructor(page: Page) {
    this.page = page
    this.genInfoElements = new GenInfoContentElements(page)
    this.toastsAsserts = new ToastAsserts(page)
  }

  async accessGenInfoSandbox() {
    await this.genInfoElements.sectionGenInfoSandbox.click()
  }

  async fillServiceNameSandbox() {
    await this.waitChargeFieldServiceName()
  }

  async selectContentTypes() {
    await this.genInfoElements.pickListContentTypesAudiobooks.click()
    await this.page.waitForTimeout(2000)
    await this.genInfoElements.ContentTypesMove.click()
  }

  async selectCommercial() {
    await this.genInfoElements.picklistCommercial.click()
    await this.genInfoElements.picklistCommercialNo.click()
  }

  async fillServiceDescription() {
    await this.genInfoElements.inputServiceDescription.fill(randonServiceDescription)
  }

  async fillAccountName() {
    await this.genInfoElements.inputAccountName.fill(randonAccountName)
  }

  async selectAccountType() {
    await this.genInfoElements.picklistAccountType.click()
    await this.genInfoElements.picklistAccountTypeFree.click()
  }

  async fillServiceFeatures() {
    await this.genInfoElements.inputServiceFeatures.fill(randonServiceFeatures)
  }

  async serviceAvailability() {
    await this.genInfoElements.clickServAvailability.click()
  }

  async selectGlobalSerAva() {
    await this.genInfoElements.selectGlobalServAvail.click()
  }

  async checkboxAccept() {
    await this.genInfoElements.checkboxAccept.click()
  }

  async saveGenInfoPanel() {
    await this.genInfoElements.btnSaveGenInfoPanel.click()
  }

  async validSavedSuccessfullySecondToast() {
    await expect(this.genInfoElements.toastSecondPanelGenInfoSaveSuccessfully).toBeVisible({ timeout: 3000 })
  }

  async validStatusComplete() {
    await expect(this.genInfoElements.statusCompleteLeftMenu).toBeVisible()
  }

  async fillGenInfoPanelSandbox() {
    await this.fillServiceNameSandbox()
    await this.serviceAvailability()
    await this.selectGlobalSerAva()
    await this.checkboxAccept()
    await this.saveGenInfoPanel()
    await this.toastsAsserts.waitFirstToast()
  }

  async fillGenInfoPanelRegular() {
    await this.fillServiceNameSandbox()
    await this.selectContentTypes()
    await this.selectCommercial()
    await this.fillServiceDescription()
    await this.fillAccountName()
    await this.selectAccountType()
    await this.fillServiceFeatures()
    await this.saveGenInfoPanel()
    await this.toastsAsserts.waitFirstToast()
  }

  async fillWebSitePanelHomePageField() {
    await this.waitChargeFieldHomePage()
    await this.genInfoElements.btnSaveWebSitePanel.click()
    await this.toastsAsserts.waitThirdToast()
  }

  async fillSectionGenInfoSandbox() {
    await this.fillGenInfoPanelSandbox()
    await this.fillWebSitePanelHomePageField()
  }

  async waitChargeFieldHomePage() {
    try {
      let fieldHomePage = this.genInfoElements.inputHomePage
      while (!fieldHomePage) {
        console.log('Field not found. Waiting...')
        await this.page.waitForSelector("input[name='HomePage__c']", { state: 'attached' })
        await expect(this.genInfoElements.inputHomePage).toBeVisible({ visible: true })
        fieldHomePage = this.genInfoElements.inputHomePage
      }

      if (fieldHomePage) {
        await fieldHomePage.click()
        await this.page.waitForTimeout(3000)
        await fieldHomePage.fill(this.genInfoElements.textHomePage)
        await this.page.waitForTimeout(2000)
      } else {
        console.log('Field not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on Home Page Field')
    }
  }

  async waitChargeFieldServiceName() {
    try {
      let fieldServiceName = this.genInfoElements.inputServiceName
      while (!fieldServiceName) {
        console.log('Field not found. Waiting...')
        await this.toastsAsserts.waitCharge()
        fieldServiceName = this.genInfoElements.inputServiceName
      }

      if (fieldServiceName) {
        await this.toastsAsserts.waitCharge()
        await fieldServiceName.click()
        await fieldServiceName.fill(randonServiceName)
      } else {
        console.log('Field not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on Service Name field')
    }
  }
}
