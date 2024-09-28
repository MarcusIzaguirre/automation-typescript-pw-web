import { Page, expect } from '@playwright/test'

import { BrandAssetsPage } from '../sectionsPages/brandAssetsPage'
import { DeploymentSettingsPage } from '../sectionsPages/deploymentSettingsPage'
import { GeneralInformationContentPage } from '../sectionsPages/generalInformationContentPage'
import { LocalizationResourcesPage } from '../sectionsPages/localizationResourcesPage'
import { ServiceConfigurationPage } from '../sectionsPages/serviceConfigurationPage'
import { SonosMusicApiPage } from '../sectionsPages/sonosMusicApiPage'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { ServiceConfigurationElements } from '../../../elements/contentIntegrationsElements/serviceConfigurationElements'

export class IcsCallPage {
  page: Page
  generalInformationContentPage: GeneralInformationContentPage
  smapiPage: SonosMusicApiPage
  brandPage: BrandAssetsPage
  localResPage: LocalizationResourcesPage
  deploymentPage: DeploymentSettingsPage
  serviceConfigurationPage: ServiceConfigurationPage
  serviceConfigutarionElements: ServiceConfigurationElements
  toastAsserts: ToastAsserts

  constructor(page: Page) {
    this.page = page
    this.generalInformationContentPage = new GeneralInformationContentPage(page)
    this.smapiPage = new SonosMusicApiPage(page)
    this.brandPage = new BrandAssetsPage(page)
    this.localResPage = new LocalizationResourcesPage(page)
    this.deploymentPage = new DeploymentSettingsPage(page)
    this.serviceConfigurationPage = new ServiceConfigurationPage(page)
    this.toastAsserts = new ToastAsserts(page)
    this.serviceConfigutarionElements = new ServiceConfigurationElements(page)
  }

  async callToIcsSuccessfullySandboxPortal() {
    await this.generalInformationContentPage.fillSectionGenInfoSandbox()

    await this.smapiPage.accessSonosMusicApi()
    await this.smapiPage.fillSectionSmapiSandbox()

    await this.brandPage.accessBrandAssets()
    await this.page.waitForTimeout(3000)
    await this.brandPage.uploadServiceLogoSvg()
    await this.page.waitForTimeout(3000)
    await this.brandPage.uploadFullLogoSonosAppSvg()
    await this.brandPage.uploadFullLogoSonosSupportSvg()
    await this.brandPage.uploadBadge()

    await this.localResPage.accessLocalizationResources()
    await this.localResPage.uploadi18Next()

    await this.deploymentPage.accessDeploymentSettings()
    await this.deploymentPage.fillSonosId()

    await this.serviceConfigurationPage.accessServiceConfiguration()
    await this.serviceConfigurationPage.clickSendToIcsSandboxPortal()
    await this.msgIcsSuccessfully()
    await this.serviceConfigutarionElements.btnDone.click()
  }

  async validCallToIcsSuccessfullySandboxPortal() {
    await this.generalInformationContentPage.fillSectionGenInfoSandbox()

    await this.smapiPage.accessSonosMusicApi()
    await this.smapiPage.fillSectionSmapiSandbox()

    await this.brandPage.accessBrandAssets()
    await this.page.waitForTimeout(3000)
    await this.brandPage.uploadServiceLogoSvg()
    await this.page.waitForTimeout(3000)
    await this.brandPage.uploadFullLogoSonosAppSvg()
    await this.brandPage.uploadFullLogoSonosSupportSvg()
    await this.brandPage.uploadBadge()

    await this.localResPage.accessLocalizationResources()
    await this.localResPage.uploadi18Next()

    await this.deploymentPage.accessDeploymentSettings()
    await this.deploymentPage.fillSonosId()

    await this.serviceConfigurationPage.accessServiceConfiguration()
    await this.serviceConfigurationPage.clickSendToIcsSandboxPortal()
    await this.msgIcsSuccessfully()
  }

  async msgIcsSuccessfully() {
    try {
      let icsSuccessfully = this.serviceConfigutarionElements.msgIcsSuccessfully
      while (!icsSuccessfully) {
        console.log('Msg not found. Waiting...')
        await expect(this.serviceConfigutarionElements.msgIcsSuccessfully).toBeVisible({ timeout: 7000 })
        await expect(this.serviceConfigutarionElements.btnDone).toBeVisible({ visible: true })
        icsSuccessfully = this.serviceConfigutarionElements.msgIcsSuccessfully
      }

      if (icsSuccessfully) {
        await expect(this.serviceConfigutarionElements.btnDone).toBeVisible({ visible: true })
        await this.page.waitForTimeout(3000)
        console.log('Msg successfully found')
      } else {
        console.log('Msg not found after wait')
      }
    } catch (error) {
      console.error('An error occurred on msg validation call ics')
    }
  }

  async callToIcsErrorConflictsSandboxPortal() {
    await this.generalInformationContentPage.fillSectionGenInfoSandbox()

    await this.smapiPage.accessSonosMusicApi()
    await this.smapiPage.fillSectionSmapiSandbox()

    await this.brandPage.accessBrandAssets()
    await this.brandPage.uploadServiceLogoSvg()
    await this.brandPage.uploadFullLogoSonosAppSvg()
    await this.brandPage.uploadFullLogoSonosSupportSvg()
    await this.brandPage.uploadBadge()

    await this.localResPage.accessLocalizationResources()
    await this.localResPage.uploadi18Next()

    await this.deploymentPage.accessDeploymentSettings()
    await this.deploymentPage.fillSonosId()

    await this.serviceConfigurationPage.accessServiceConfiguration()
    await this.serviceConfigurationPage.clickSendToIcsSandboxPortal()
    await this.serviceConfigurationPage.validIcsErrorConflicts()
  }
}
