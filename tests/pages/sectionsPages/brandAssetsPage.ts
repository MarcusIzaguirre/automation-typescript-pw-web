import { Page } from '@playwright/test'

import { BrandAssetsElements } from '../../../elements/contentIntegrationsElements/brandAssetsElements'
import { ManageRegularIntegrationPage } from './../utilPages/manageRegularIntegrationPage'
import { ToastAsserts } from '../../utils/toastsAsserts'

export class BrandAssetsPage {
  page: Page
  brandElements: BrandAssetsElements
  manageRegInteg: ManageRegularIntegrationPage
  toastsAsserts: ToastAsserts

  constructor(page: Page) {
    this.page = page
    this.brandElements = new BrandAssetsElements(page)
    this.manageRegInteg = new ManageRegularIntegrationPage(page)
    this.toastsAsserts = new ToastAsserts(page)
  }

  async accessBrandAssets() {
    await this.brandElements.sectionBrandAssets.click()
  }

  async clickUploadServiceLogo() {
    await this.page.setInputFiles("input[type='file'][name='iconSectionSVG']", ['uploadItems/octopus.svg'])
  }

  async uploadServiceLogoSvg() {
    await this.page.waitForTimeout(3000)
    await this.clickUploadServiceLogo()
    await this.page.waitForTimeout(3000)
    await this.brandElements.doneIconSvg.click()
    await this.page.waitForTimeout(3000)
    await this.brandElements.btnSaveIcons.click()
    await this.toastsAsserts.waitFirstToast()
  }

  async clickUploadFulllogoSonosApp() {
    await this.page.setInputFiles("input[type='file'][name='logosSectionSonosApp']", ['uploadItems/file.svg'], { timeout: 2000 })
  }

  async uploadFullLogoSonosAppSvg() {
    await this.clickUploadFulllogoSonosApp()
    await this.brandElements.doneIconSvg.click()
  }

  async clickUploadFulllogoSonosSupport() {
    await this.page.setInputFiles("input[type='file'][name='logosSectionSonosSupport']", ['uploadItems/file.svg'])
  }

  async uploadFullLogoSonosSupportSvg() {
    await this.clickUploadFulllogoSonosSupport()
    await this.brandElements.doneIconSvg.click()
    await this.brandElements.btnSaveFullLogo.click()
    await this.toastsAsserts.waitSecondToast()
  }

  async clickUploadBadge() {
    await this.page.setInputFiles("input[type='file'][name='bagdeSectionFormatSVG']", ['uploadItems/file.svg'])
  }

  async uploadBadge() {
    await this.clickUploadBadge()
    await this.brandElements.doneIconSvg.click()
    await this.brandElements.btnSaveBadge.click()
    await this.toastsAsserts.waitThirdToast()
  }
}
