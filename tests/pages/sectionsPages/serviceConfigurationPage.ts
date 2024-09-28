import { expect, Page } from '@playwright/test'

import { ServiceConfigurationElements } from '../../../elements/contentIntegrationsElements/serviceConfigurationElements'
import { ManageRegularIntegrationPage } from '../utilPages/manageRegularIntegrationPage'
import { ToastAsserts } from '../../utils/toastsAsserts'

export class ServiceConfigurationPage {
  page: Page
  serviceConfigurationElements: ServiceConfigurationElements
  manageRegInteg: ManageRegularIntegrationPage
  toastsAsserts: ToastAsserts

  constructor(page: Page) {
    this.page = page
    this.serviceConfigurationElements = new ServiceConfigurationElements(page)
    this.manageRegInteg = new ManageRegularIntegrationPage(page)
    this.toastsAsserts = new ToastAsserts(page)
  }

  async accessServiceConfiguration() {
    await this.serviceConfigurationElements.sectionServiceConfiguration.click()
  }

  async validIcsSuccessfully() {
    await expect(this.serviceConfigurationElements.msgIcsSuccessfully).toBeVisible({ timeout: 5000 })
  }

  async clickSendToIcsSandboxPortal() {
    await expect(this.serviceConfigurationElements.btnSend).toBeVisible({ timeout: 4000 })
    await this.serviceConfigurationElements.btnSend.click()
  }

  async validIcsErrorConflicts() {
    await expect(this.serviceConfigurationElements.msgIcsErrorConflicts).toBeVisible({ timeout: 3000 })
  }
}
