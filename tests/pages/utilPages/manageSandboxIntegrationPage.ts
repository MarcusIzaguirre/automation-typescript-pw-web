import { Page } from '@playwright/test'
import { BrandAssetsPage } from '../sectionsPages/brandAssetsPage'
import { DeploymentSettingsPage } from '../sectionsPages/deploymentSettingsPage'
import { GeneralInformationContentPage } from '../sectionsPages/generalInformationContentPage'
import { LocalizationResourcesPage } from '../sectionsPages/localizationResourcesPage'
import { SonosMusicApiPage } from '../sectionsPages/sonosMusicApiPage'
import { ManageSandboxIntegrationElements } from '../../../elements/contentIntegrationsElements/manageSandboxIntegrationElements'
import { DashboardPage } from './dashboardPage'
import { ToastAsserts } from '../../utils/toastsAsserts'
import { ManageRegularIntegrationPage } from './manageRegularIntegrationPage'
import { SonosMusicApiElements } from '../../../elements/contentIntegrationsElements/sonosMusicApiElements'

export class ManageSandboxIntegrationPage {
  page: Page
  generalInformationContentPage: GeneralInformationContentPage
  smapiPage: SonosMusicApiPage
  brandPage: BrandAssetsPage
  localResPage: LocalizationResourcesPage
  deploymentPage: DeploymentSettingsPage
  manageSandboxElements: ManageSandboxIntegrationElements
  dashboardPage: DashboardPage
  toastAsserts: ToastAsserts
  manageRegularIntegrationPage: ManageRegularIntegrationPage
  smapiElements: SonosMusicApiElements

  constructor(page: Page) {
    this.page = page
    this.generalInformationContentPage = new GeneralInformationContentPage(page)
    this.smapiPage = new SonosMusicApiPage(page)
    this.brandPage = new BrandAssetsPage(page)
    this.localResPage = new LocalizationResourcesPage(page)
    this.deploymentPage = new DeploymentSettingsPage(page)
    this.manageSandboxElements = new ManageSandboxIntegrationElements(page)
    this.dashboardPage = new DashboardPage(page)
    this.toastAsserts = new ToastAsserts(page)
    this.manageRegularIntegrationPage = new ManageRegularIntegrationPage(page)
    this.smapiElements = new SonosMusicApiElements(page)
  }

  async convertToProductionCreateNew() {
    await this.page.waitForSelector("button[data-testid='convert-to-prod-button']")
    await this.manageSandboxElements.btnConvertToProduction.click()
    await this.manageSandboxElements.checkboxCreateNewIntegration.check()
    await this.manageSandboxElements.btnOkModal.click()
    await this.page.waitForSelector(`[name='IntegrationId__c']`)
    await this.dashboardPage.fillIntegrationIdAndConfigLabelByModal()
  }

  async modalApplicationisnotcomplete() {
    await this.manageRegularIntegrationPage.clickSubmit()
    await this.manageRegularIntegrationPage.validModalApplicationIsNotComplete()
  }

  async modalUnsavedChanges() {
    await this.generalInformationContentPage.fillServiceDescription()
    await this.manageRegularIntegrationPage.clickSubmit()
    await this.manageRegularIntegrationPage.validModalUnSavedChanges()
  }
}
