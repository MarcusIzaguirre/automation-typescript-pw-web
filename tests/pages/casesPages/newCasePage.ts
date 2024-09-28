import { expect, Page } from '@playwright/test'
import { NewCaseElements } from '../../../elements/casesElements/newCaseElements'
import { faker } from '@faker-js/faker'

const randomSubject = faker.commerce.productName()
const randomDescription = faker.word.words(5)

export class NewCasePage {
  page: Page
  newCaseElements: NewCaseElements

  constructor(page: Page) {
    this.page = page
    this.newCaseElements = new NewCaseElements(page)
  }

  async clickSupportMenu() {
    await this.newCaseElements.topMenuSupport.click()
    await expect(this.newCaseElements.btnNewCase).toBeVisible({ timeout: 4000 })
  }

  async newCase() {
    await this.newCaseElements.btnNewCase.click()
  }

  async fillSubject() {
    await this.newCaseElements.inputSubject.fill(randomSubject)
  }

  async selectCategory(optionValue: string) {
    await this.page.selectOption(this.newCaseElements.selectCategoryfield, optionValue)
  }

  async selectSubCategory(optionValue: string) {
    await this.page.selectOption(this.newCaseElements.selectSubCategoryfield, optionValue)
  }

  async fillDescription() {
    await this.newCaseElements.inputDescription.fill(randomDescription)
  }

  async saveNewCase() {
    await this.newCaseElements.btnSaveCase.click()
  }

  async verifyCaseCreated(): Promise<void> {
    const caseTextLocator = this.newCaseElements.caseTextAndNumber
    const caseNumberPattern = /^Case \d+$/

    // Set a maximum waiting time (in milliseconds)
    const maxWaitTime = 15000
    const pollInterval = 500
    let currentTime = 0
    let caseText: string = ''

    // Loop to wait until the case number appears or the maximum time is reached
    while (currentTime < maxWaitTime) {
      caseText = await caseTextLocator.innerText()
      console.log(`Texto do Case capturado: "${caseText}"`)

      // Remove extra spaces and check the pattern
      const trimmedCaseText = caseText.trim()
      if (caseNumberPattern.test(trimmedCaseText)) {
        expect(trimmedCaseText).toMatch(caseNumberPattern)
        return
      }

      // Wait a while before trying again
      await this.page.waitForTimeout(pollInterval)
      currentTime += pollInterval
    }

    throw new Error(`Case number did not appear within ${maxWaitTime / 1000} seconds. Last captured text: "${caseText}"`)
  }
}
