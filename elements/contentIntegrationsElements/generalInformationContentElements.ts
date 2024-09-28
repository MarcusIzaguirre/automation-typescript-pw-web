import { Locator, Page } from '@playwright/test'

export class GenInfoContentElements {
  page: Page
  inputServiceName: Locator
  txtServiceName: string
  txtServiceNameSandbox: string
  clickServAvailability: Locator
  selectGlobalServAvail: Locator
  checkboxAccept: Locator
  btnSaveGenInfoPanel: Locator
  integrationTypeSandbox: string
  integrationTypeRegular: string
  toastFirstPanelGenInfoSaveSuccessfully: Locator
  toastSecondPanelGenInfoSaveSuccessfully: Locator
  inputHomePage: Locator
  textHomePage: string
  btnSaveWebSitePanel: Locator
  pickListContentTypesAudiobooks: Locator
  ContentTypesMove: Locator
  picklistCommercial: Locator
  picklistCommercialNo: Locator
  inputServiceDescription: Locator
  inputAccountName: Locator
  picklistAccountType: Locator
  picklistAccountTypeFree: Locator
  inputServiceFeatures: Locator
  sectionGenInfoSandbox: Locator
  statusCompleteLeftMenu: Locator

  constructor(page: Page) {
    this.page = page
    this.inputServiceName = page.locator(`[name='ServiceName__c']`)
    this.txtServiceName = 'Acme Radio'
    this.txtServiceNameSandbox = 'Auto Acme Radio Sandbox'
    this.clickServAvailability = page.locator("button[name='ServiceAvailability__c']")
    this.selectGlobalServAvail = page.locator("lightning-base-combobox-item[data-value='Global']")
    this.checkboxAccept = page.getByText('I accept')
    this.btnSaveGenInfoPanel = page.locator('button[name="genInfo"]')
    this.integrationTypeSandbox = 'Sandbox Integration'
    this.integrationTypeRegular = 'Regular'
    this.toastFirstPanelGenInfoSaveSuccessfully = page.getByText('This section has been saved successfully.').first()
    this.toastSecondPanelGenInfoSaveSuccessfully = page.getByText('This section has been saved successfully.').nth(2)
    this.inputHomePage = page.locator("input[name='HomePage__c']")
    this.textHomePage = 'https://www.pexels.com/pt-br'
    this.btnSaveWebSitePanel = page.locator('button[name="webSites"]')
    this.sectionGenInfoSandbox = page.getByTestId('generalInfo')
    this.statusCompleteLeftMenu = page.locator("li[class='completed']")
    //Regular integration fields
    this.pickListContentTypesAudiobooks = page.getByRole('option', { name: 'Audiobooks' })
    this.ContentTypesMove = page.locator("button[title='Move to Chosen']")
    this.picklistCommercial = page.getByRole('combobox', { name: 'Commercial Content Service' })
    this.picklistCommercialNo = page.getByRole('option', { name: 'No, my service is available for personal use only.' })
    this.inputServiceDescription = page.getByPlaceholder('Acme Radio is an internet radio service available exclusively on Acme.')
    this.inputAccountName = page.locator(`[name='Name__c']`)
    this.picklistAccountType = page.locator(`[name='Type__c']`)
    this.picklistAccountTypeFree = page.getByRole('option', { name: 'Free' })
    this.inputServiceFeatures = page.getByPlaceholder('* Curated music and original programming')
  }
}
