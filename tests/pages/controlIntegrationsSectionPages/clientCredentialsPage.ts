import { Page, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { ClientCredentialsElements } from '../../../elements/controlIntegrationElements/clientCredentialsElements'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { GenInfoContentElements } from '../../../elements/contentIntegrationsElements/generalInformationContentElements'

const randomDisplayName = faker.internet.displayName()
const randomConfigLabelVersionNumber = faker.number.float({ min: 0.0, max: 10.0, precision: 0.1 }).toFixed(1)
const versionText = `Version ${randomConfigLabelVersionNumber}`
const randomDescription = faker.animal.dog()
const randomKeyNameFirst = faker.internet.userName()

export class ClientCredentialsPage {
  page: Page
  clientCredElements: ClientCredentialsElements
  toastAsserts: ToastAsserts
  genInfoElements: GenInfoContentElements

  constructor(page: Page) {
    this.page = page
    this.clientCredElements = new ClientCredentialsElements(page)
    this.toastAsserts = new ToastAsserts(page)
    this.genInfoElements = new GenInfoContentElements(page)
  }

  async accessClientCredentials() {
    await this.clientCredElements.sectionClientCred.click()
  }

  async fillDisplayName() {
    await expect(this.clientCredElements.inputDisplayName).toBeVisible({ timeout: 2500 })
    await this.clientCredElements.inputDisplayName.click()
    await this.page.waitForTimeout(1500)
    await this.clientCredElements.inputDisplayName.fill(randomDisplayName)
  }

  async selectIntegrationType() {
    await this.clientCredElements.comboboxIntegrationType.click()
    await this.clientCredElements.typeDirectControlIntegration.click()
  }

  async fillConfigLabelControl() {
    await this.clientCredElements.inputConfigLabelControl.fill(versionText)
  }

  async fillDescription() {
    await this.clientCredElements.inputDescription.fill(randomDescription)
  }

  async saveIntegrationOverviewPanel() {
    await this.clientCredElements.btnSaveIntegrationOverview.click()
  }

  async fillKeyNameFirst() {
    await this.clientCredElements.inputKeyNameFirst.fill(randomKeyNameFirst)
  }

  async saveKeysPanel() {
    await this.clientCredElements.btnSaveKeys.click()
  }

  async serviceAvailability() {
    await this.genInfoElements.clickServAvailability.click()
  }

  async selectGlobalSerAva() {
    await this.genInfoElements.selectGlobalServAvail.click()
  }

  async fillIntegrationOverviewPanel() {
    await this.accessClientCredentials()
    await this.fillDisplayName()
    await this.selectIntegrationType()
    await this.fillConfigLabelControl()
    await this.fillDescription()
    await this.serviceAvailability()
    await this.selectGlobalSerAva()
    await this.saveIntegrationOverviewPanel()
    await this.toastAsserts.waitFirstToast()
  }

  async fillClientCredentialsPanelFirst() {
    await this.fillKeyNameFirst()
    await this.saveKeysPanel()
    await this.toastAsserts.waitSecondToast()
  }
}
