import { Locator, Page } from '@playwright/test'

export class ServiceConfigurationElements {
  page: Page
  sectionServiceConfiguration: Locator
  btnSend: Locator
  msgIcsSuccessfully: Locator
  msgIcsErrorConflicts: Locator
  btnDone: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionServiceConfiguration = page.getByTestId('serviceConfiguration')
    this.btnSend = page.getByRole('button', { name: 'Send' })
    this.msgIcsSuccessfully = page.getByRole('heading', { name: 'ICS has successfully received your integration, now you can:' })
    this.msgIcsErrorConflicts = page.getByRole('heading', { name: 'ICS has found errors in your Service Configuration Object.' })
    this.btnDone = page.getByRole('button', { name: 'Done' })
  }
}
