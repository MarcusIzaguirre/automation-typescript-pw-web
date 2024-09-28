import { Locator, Page } from '@playwright/test'

export class ClientCredentialsElements {
  page: Page
  sectionClientCred: Locator
  inputDisplayName: Locator
  comboboxIntegrationType: Locator
  typeDirectControlIntegration: Locator
  inputConfigLabelControl: Locator
  inputDescription: Locator
  btnSaveIntegrationOverview: Locator
  inputKeyNameFirst: Locator
  btnSaveKeys: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionClientCred = page.getByTestId('clientCredentials')
    this.inputDisplayName = page.locator(`[name='DisplayName__c']`)
    this.comboboxIntegrationType = page.getByRole('combobox', { name: 'Integration Type' })
    this.typeDirectControlIntegration = page.getByRole('option', { name: 'Direct Control Integration' })
    this.inputConfigLabelControl = page.locator(`[name='ConfigurationLabel__c']`)
    this.inputDescription = page.locator(`[name='Description__c']`)
    this.btnSaveIntegrationOverview = page.getByTestId('save-integration-overview')
    this.inputKeyNameFirst = page.locator(`[name='KeyName__c']`)
    this.btnSaveKeys = page.getByTestId('save-keys')
  }
}
