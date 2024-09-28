import { faker } from '@faker-js/faker'
import { Page } from '@playwright/test'

import { SonosMusicApiElements } from '../../../elements/contentIntegrationsElements/sonosMusicApiElements'
import { GeneralInformationContentPage } from './generalInformationContentPage'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { DashboardPage } from './../utilPages/dashboardPage'
import { DashboardElements } from '../../../elements/contentIntegrationsElements/dashboardElements'

const randomIntegrationId = faker.internet.ipv4()

export class SonosMusicApiPage {
  page: Page
  smapiElements: SonosMusicApiElements
  generalInformationContentPage: GeneralInformationContentPage
  toastsAsserts: ToastAsserts
  dashboardPage: DashboardPage
  dashboardElements: DashboardElements

  constructor(page: Page) {
    this.page = page
    this.smapiElements = new SonosMusicApiElements(page)
    this.generalInformationContentPage = new GeneralInformationContentPage(page)
    this.toastsAsserts = new ToastAsserts(page)
    this.dashboardPage = new DashboardPage(page)
    this.dashboardElements = new DashboardElements(page)
  }

  async accessSonosMusicApi() {
    await this.smapiElements.sectionSmapi.click()
  }

  async panelEndpoints() {
    await this.smapiElements.btnSavePanelEndpoints.click()
    await this.toastsAsserts.validSavedSuccessfullySecondToast()
  }

  async panelAuthenticationAnonymous() {
    await this.smapiElements.btnSavePanelAuthentication.click()
    await this.toastsAsserts.validSavedSuccessfullyThirdToast()
  }

  async panelConfiguration() {
    await this.smapiElements.btnSavePanelConfiguration.click()
    await this.toastsAsserts.validSavedSuccessfullyFourthToast()
  }

  async fillSectionSmapiSandbox() {
    await this.accessSonosMusicApi()
    await this.fillPanelLabels()
    await this.panelEndpoints()
    await this.panelConfiguration()
  }

  async fillPanelLabels() {
    await this.smapiElements.inputIntegrationId.click()
    await this.smapiElements.inputIntegrationId.fill(randomIntegrationId)
    await this.smapiElements.InputConfigLabel.click()
    await this.smapiElements.InputConfigLabel.fill(this.smapiElements.txtConfigLabel)
    await this.smapiElements.btnSavePanelLabels.click()
    const messageErrorIntId = this.toastsAsserts.msgIntegrationIdInUse
    if (messageErrorIntId) {
      const newValueIntId = faker.internet.ipv4()
      await this.smapiElements.inputIntegrationId.fill(newValueIntId)
    } else {
      await this.toastsAsserts.validSavedSuccessfullyFirstToast()
    }
  }
}
