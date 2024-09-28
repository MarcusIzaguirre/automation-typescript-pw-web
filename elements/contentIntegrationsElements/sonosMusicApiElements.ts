import { Locator, Page } from '@playwright/test'

export class SonosMusicApiElements {
  page: Page
  sectionSmapi: Locator
  inputIntegrationId: Locator
  txtIntegrationId: string
  InputConfigLabel: Locator
  txtConfigLabel: string
  btnSavePanelLabels: Locator
  btnSavePanelEndpoints: Locator
  btnSavePanelConfiguration: Locator
  toastFirstPanelSmapiSaveSuccessfully: Locator
  toastSecondPanelSmapiSaveSuccessfully: Locator
  toastThirdPanelSmapiSaveSuccessfully: Locator
  btnSavePanelAuthentication: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionSmapi = page.getByTestId('sonosMusicAPI')
    this.inputIntegrationId = page.locator(`[name='IntegrationId__c']`)
    this.txtIntegrationId = 'com.playone.sonos'
    this.InputConfigLabel = page.locator(`[name='ServiceConfigurationSet__c']`)
    this.txtConfigLabel = 'version 1.2'
    this.btnSavePanelLabels = page.getByTestId('saveButtonLabels')
    this.btnSavePanelEndpoints = page.getByTestId('saveButtonEndpoint')
    this.btnSavePanelConfiguration = page.getByTestId('saveButtonFooter')
    this.toastFirstPanelSmapiSaveSuccessfully = page.getByText('This section has been saved successfully.').first()
    this.toastSecondPanelSmapiSaveSuccessfully = page.getByText('This section has been saved successfully.').nth(1)
    this.toastThirdPanelSmapiSaveSuccessfully = page.getByText('This section has been saved successfully.').nth(2)
    this.btnSavePanelAuthentication = page.getByTestId('saveButtonAuthentication')
  }
}
