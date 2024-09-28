import { expect, Locator, Page } from '@playwright/test'

export class ToastAsserts {
  page: Page
  toastFirstPanel: Locator
  toastSecondPanel: Locator
  toastThirdPanel: Locator
  toastConvertCreateNew: Locator
  toastDeleteIntegration: Locator
  msgIntegrationIdInUse: Locator
  statusErrorleftMenuLocalizationRes: Locator
  toastJsonInvalid: Locator
  toastDuplicatedSuccessfully: Locator
  sectionGenInfoConverted: Locator
  toastFourthPanel: Locator

  constructor(page: Page) {
    this.page = page
    this.toastFirstPanel = page.getByText('This section has been saved successfully.').first()
    this.toastSecondPanel = page.getByText('This section has been saved successfully.').nth(1)
    this.toastThirdPanel = page.getByText('This section has been saved successfully.').nth(2)
    this.toastConvertCreateNew = page.getByRole('img', { name: 'Message Icon' })
    this.toastDeleteIntegration = page.locator("div[class='slds-show'][data-id='pageAlertToast']")
    this.msgIntegrationIdInUse = page.getByText('This Integration ID is already in use.')
    this.statusErrorleftMenuLocalizationRes = page.locator("li[class='error']")
    this.toastJsonInvalid = page.getByText('This JSON is invalid')
    this.toastDuplicatedSuccessfully = page.locator("div[class='slds-show'][data-id='pageAlertToast']")
    this.sectionGenInfoConverted = page.getByTestId('generalInfo')
    this.toastFourthPanel = page.getByText('This section has been saved successfully.').nth(3)
  }

  async validSavedSuccessfullyFirstToast() {
    await expect(this.toastFirstPanel).toBeVisible({ timeout: 4000 })
  }

  async validSavedSuccessfullySecondToast() {
    await expect(this.toastSecondPanel).toBeVisible({ timeout: 4000 })
  }

  async validSavedSuccessfullyThirdToast() {
    await expect(this.toastThirdPanel).toBeVisible({ timeout: 4000 })
  }

  async validSavedSuccessfullyFourthToast() {
    await expect(this.toastFourthPanel).toBeVisible({ timeout: 4000 })
  }

  async waitCharge() {
    await this.page.waitForTimeout(6000)
  }

  async validClonedSbToSb() {
    await expect(this.toastDuplicatedSuccessfully).toBeTruthy()
  }

  async validConvertCreateNew() {
    await expect(this.toastConvertCreateNew).toBeVisible({ timeout: 10000 })
  }

  async validToastWebElementSucessfully() {
    try {
      let toastWebSuccessfully = this.toastDeleteIntegration
      while (!toastWebSuccessfully) {
        await expect(this.toastDeleteIntegration).toBeVisible({ timeout: 8000 })
        toastWebSuccessfully = this.toastDeleteIntegration
      }

      if (toastWebSuccessfully) {
        await expect(this.toastDeleteIntegration).toBeVisible({ timeout: 7000 })
        await expect(this.toastDeleteIntegration).toBeTruthy()
      } else {
        console.log('Toast web success not found after wait')
      }
    } catch (error) {
      console.error('An error occurred')
    }
  }

  async waitFirstToast() {
    try {
      let firstToast = this.toastFirstPanel
      while (!firstToast) {
        console.log('Toast not found. Waiting...')
        await this.page.waitForTimeout(2000)
        firstToast = this.toastFirstPanel
      }

      if (firstToast) {
        await expect(this.toastFirstPanel).toBeVisible({ timeout: 4000 })
        console.log('Toast founded successfully')
      } else {
        console.log('Toast not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on first toast')
    }
  }

  async waitSecondToast() {
    try {
      let SecondToast = this.toastSecondPanel
      while (!SecondToast) {
        console.log('Toast not found. Waiting...')
        await this.page.waitForTimeout(2000)
        SecondToast = this.toastSecondPanel
      }

      if (SecondToast) {
        await expect(this.toastSecondPanel).toBeVisible({ timeout: 4000 })
        console.log('Toast founded successfully')
      } else {
        console.log('Toast not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on second toast')
    }
  }

  async waitThirdToast() {
    try {
      let ThirdToast = this.toastThirdPanel
      while (!ThirdToast) {
        console.log('Toast not found. Waiting...')
        await this.page.waitForTimeout(4000)
        ThirdToast = this.toastThirdPanel
      }

      if (ThirdToast) {
        await expect(this.toastThirdPanel).toBeVisible({ timeout: 4000 })
        console.log('Toast founded successfully')
      } else {
        console.log('Toast not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on third toast')
    }
  }

  async IntegrationIdalreadyInUse() {
    await expect(this.msgIntegrationIdInUse).toBeVisible({ timeout: 3000 })
  }

  async validStatusErrorLeftMenuLocalizationRes() {
    await expect(this.statusErrorleftMenuLocalizationRes).toHaveClass('error')
  }

  async validToastJsonInvalid() {
    await expect(this.toastJsonInvalid).toBeVisible({ timeout: 3000 })
  }
}
