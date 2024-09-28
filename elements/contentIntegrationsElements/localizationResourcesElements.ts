import { Locator, Page } from '@playwright/test'

export class LocalizationResourcesElements {
  page: Page
  sectionLocaResources: Locator
  closei18Next: Locator
  btnSavei18Next: Locator
  toastFirstPanelLocalResSaveSuccessfully: Locator
  uploadFilei18next: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionLocaResources = page.getByTestId('localizationResources')
    this.closei18Next = page.locator("button[title='Close this window']")
    this.btnSavei18Next = page.getByRole('button', { name: 'Ok' })
    this.toastFirstPanelLocalResSaveSuccessfully = page.getByText('This section has been saved successfully.').first()
    this.uploadFilei18next = page.locator("input[type='file'][name='i18nextLocalizationFileUpload']")
  }
}
