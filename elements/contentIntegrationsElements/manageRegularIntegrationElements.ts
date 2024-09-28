import { Page } from '@playwright/test'

//SELECIONAR OS ELEMENTOS QUE PRECISO MAPEAR: BUTTON, TITLE, INPUT, MENSAGEM
export class ManageRegularIntegrationElements {
  page: Page
  validModalWithUnsavedChanges: string

  constructor(page: Page) {
    this.page = page
    this.validModalWithUnsavedChanges = 'You have sections with unsaved changes.'
  }
}
