import { faker } from '@faker-js/faker'
import { Page } from '@playwright/test'

import { DeploymentSettingsElements } from '../../../elements/contentIntegrationsElements/deploymentSettingsElements'
import { ToastAsserts } from '../../utils/toastsAsserts'

const randomSonosId = faker.number.binary(255)

export class DeploymentSettingsPage {
  page: Page
  deploymentSettingsElements: DeploymentSettingsElements
  toastsAsserts: ToastAsserts

  constructor(page: Page) {
    this.page = page
    this.deploymentSettingsElements = new DeploymentSettingsElements(page)
    this.toastsAsserts = new ToastAsserts(page)
  }

  async accessDeploymentSettings() {
    await this.deploymentSettingsElements.sectionDeploymentSettings.click()
  }

  async fillSonosId() {
    await this.deploymentSettingsElements.inputSonosId.click()
    await this.deploymentSettingsElements.inputSonosId.fill(randomSonosId)
    await this.deploymentSettingsElements.btnSaveSonosId.click()
    await this.toastsAsserts.validSavedSuccessfullySecondToast()
  }
}
