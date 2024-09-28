import { Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { ContactInformationElements } from '../../../elements/contentIntegrationsElements/contactInformationElements'

const randonName = faker.person.fullName()
const randonEmail = faker.internet.email()
const randonPhone = faker.phone.number()

export class ContactInformationPage {
  page: Page
  contactElements: ContactInformationElements

  constructor(page: Page) {
    this.page = page
    this.contactElements = new ContactInformationElements(page)
  }

  async accessContactInformation() {
    await this.contactElements.sectionContactInformation.click()
  }

  async fillFirstKeyPointsContact() {
    await this.contactElements.inputKeypointFirstContactName.fill(randonName)
    await this.contactElements.inputKeypointFirstContactEmail.fill(randonEmail)
    await this.contactElements.inputKeypointFirstContactPhone.fill(randonPhone)
    await this.contactElements.inputKeypointSecondContactName.fill(randonName)
    await this.contactElements.inputKeypointSecondContactEmail.fill(randonEmail)
    await this.contactElements.inputKeypointSecondContactPhone.fill(randonPhone)
    await this.contactElements.btnSaveKeypoints.click()
  }
}
