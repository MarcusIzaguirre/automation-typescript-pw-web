import { Locator, Page } from '@playwright/test'

export class ContactInformationElements {
  page: Page
  sectionContactInformation: Locator
  inputKeypointFirstContactName: Locator
  inputKeypointFirstContactEmail: Locator
  inputKeypointFirstContactPhone: Locator
  inputKeypointSecondContactName: Locator
  inputKeypointSecondContactEmail: Locator
  inputKeypointSecondContactPhone: Locator
  btnSaveKeypoints: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionContactInformation = page.getByTestId('qualityAssurance')
    this.inputKeypointFirstContactName = page.locator(
      'lightning-input-field[data-testid="keypoint-first-contact-name"] lightning-input lightning-primitive-input-simple div div input',
    )
    this.inputKeypointFirstContactEmail = page.locator(
      'lightning-input[data-testid="keypoint-first-contac-email"] lightning-primitive-input-simple div div input',
    )
    this.inputKeypointFirstContactPhone = page.locator(
      'lightning-input-field[data-testid="keypoint-first-contact-phone"] lightning-input lightning-primitive-input-simple div div input',
    )
    this.inputKeypointSecondContactName = page.locator(
      'lightning-input-field[data-testid="keypoint-second-contact-name"] lightning-primitive-input-simple div div input',
    )

    this.inputKeypointSecondContactEmail = page.locator(
      'lightning-input[data-testid="keypoint-second-contact-email"] lightning-primitive-input-simple div div input',
    )
    this.inputKeypointSecondContactPhone = page.locator(
      'lightning-input-field[data-testid="keypoint-second-contact-phone"] lightning-input lightning-primitive-input-simple div div input',
    )
    this.btnSaveKeypoints = page.getByTestId('Keypoints-save-button')
  }
}
