import { Page } from '@playwright/test'

import { GenInfoContentElements } from '../../../elements/contentIntegrationsElements/generalInformationContentElements'
import { LocalizationResourcesElements } from '../../../elements/contentIntegrationsElements/localizationResourcesElements'
import { ManageRegularIntegrationPage } from '../utilPages/manageRegularIntegrationPage'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { BrandAssetsPage } from './brandAssetsPage'

export class LocalizationResourcesPage {
  page: Page
  localResElements: LocalizationResourcesElements
  manageRegInteg: ManageRegularIntegrationPage
  genInfoElements: GenInfoContentElements
  toastsAsserts: ToastAsserts
  brandPage: BrandAssetsPage

  constructor(page: Page) {
    this.page = page
    this.localResElements = new LocalizationResourcesElements(page)
    this.manageRegInteg = new ManageRegularIntegrationPage(page)
    this.genInfoElements = new GenInfoContentElements(page)
    this.toastsAsserts = new ToastAsserts(page)
    this.brandPage = new BrandAssetsPage(page)
  }

  async accessLocalizationResources() {
    await this.localResElements.sectionLocaResources.click()
  }

  async clicklUploadi18Next() {
    await this.toastsAsserts.waitCharge()
    await this.page.setInputFiles("input[type='file'][name='i18nextLocalizationFileUpload']", ['uploadItems/i18nn.json'])
  }

  async clicklUploadi18NextWithError() {
    await this.toastsAsserts.waitCharge()
    await this.page.setInputFiles("input[type='file'][name='i18nextLocalizationFileUpload']", ['uploadItems/testerro.json'])
  }

  async uploadi18Next() {
    await this.toastsAsserts.waitCharge()
    await this.clicklUploadi18Next()
    await this.toastsAsserts.waitCharge()
    await this.localResElements.closei18Next.click()
    await this.toastsAsserts.waitCharge()
    await this.localResElements.btnSavei18Next.click()
    await this.toastsAsserts.waitFirstToast()
  }

  async uploadi18NextWithError() {
    await this.clicklUploadi18NextWithError()
    await this.toastsAsserts.waitCharge()
    await this.localResElements.closei18Next.click()
    await this.toastsAsserts.validToastJsonInvalid()
    await this.toastsAsserts.validStatusErrorLeftMenuLocalizationRes()
    await this.brandPage.accessBrandAssets()
    await this.accessLocalizationResources()
    await this.toastsAsserts.validStatusErrorLeftMenuLocalizationRes()
  }
}
