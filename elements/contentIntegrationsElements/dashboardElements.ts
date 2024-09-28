import { Locator, Page } from '@playwright/test'

//SELECIONAR OS ELEMENTOS QUE PRECISO MAPEAR: BUTTON, TITLE, INPUT, MENSAGEM
export class DashboardElements {
  page: Page
  btnIconDuplicateSandbox: Locator
  btnNewContentIntegration: Locator
  contentIntegrationTab: Locator
  controlIntegrationTab: Locator
  titleNewContentIntegration: Locator
  topMenuDashboard: Locator
  checkboxDuplicateThisIntegration: Locator
  btnOkModalDuplicate: Locator
  inputConfigLabelOnDuplicate: Locator
  btnDuplicateInModal: Locator
  soundsGoodBtn: Locator
  iconDeleteIntegration: Locator
  btnDeleteIntegrationModal: Locator
  btnDuplicateInProgress: Locator
  checkboxCreateaSandboxIntegration: Locator
  btnNewControlIntegration: Locator

  constructor(page: Page) {
    this.page = page
    this.titleNewContentIntegration = page.getByTitle('New Content Integration')
    this.btnNewContentIntegration = page.getByTestId('new-content-integration-button')
    this.topMenuDashboard = page.locator("a[id='1']")
    this.btnIconDuplicateSandbox = page.getByTestId('content-duplicate-button SANDBOX 1')
    this.checkboxDuplicateThisIntegration = page.locator('.first-radio')
    this.btnOkModalDuplicate = page.getByRole('button', { name: 'Ok' })
    this.inputConfigLabelOnDuplicate = page.locator(`[name='ConfigurationLabel']`)
    this.btnDuplicateInModal = page.getByRole('button', { name: 'Duplicate' })
    this.soundsGoodBtn = page.getByTestId('confirm-button')
    this.iconDeleteIntegration = page.getByTestId('delete-sandbox-integration 1')
    this.btnDeleteIntegrationModal = page.getByRole('button', { name: 'Delete' })
    this.btnDuplicateInProgress = page.locator("span[data-testid='content-duplicate-button IN PROGRESS 1']")
    this.checkboxCreateaSandboxIntegration = page.locator("input[value='toSandbox']")
    this.controlIntegrationTab = page.getByTestId('controlTab')
    this.btnNewControlIntegration = page.getByTestId('new-control-integration-button')
  }
}
