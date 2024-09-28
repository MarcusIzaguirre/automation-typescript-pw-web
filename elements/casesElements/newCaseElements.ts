import { Locator, Page } from '@playwright/test'

export class NewCaseElements {
  page: Page
  topMenuSupport: Locator
  btnNewCase: Locator
  inputSubject: Locator
  inputDescription: Locator
  btnSaveCase: Locator
  selectCategoryfield: string
  selectSubCategoryfield: string
  caseTextAndNumber: Locator

  constructor(page: Page) {
    this.page = page
    this.topMenuSupport = page.locator("a[id='4']")
    this.btnNewCase = page.getByTestId('goToNewCasePageBtn')
    this.inputSubject = page.locator("input[name='SubjectInput']")
    this.inputDescription = page.locator("textarea[class='slds-textarea']")
    this.btnSaveCase = page.getByRole('button', { name: 'Save' })
    this.selectCategoryfield = "select[name='CategoryInput']"
    this.selectSubCategoryfield = "select[name='SubcategoryInput']"
    this.caseTextAndNumber = page.locator("div[class='slds-col slds-size_3-of-4 header-content'] h2")
  }
}
