import { expect, Page } from '@playwright/test'
import { ManageRegularIntegrationElements } from '../../../elements/contentIntegrationsElements/manageRegularIntegrationElements'
import { DashboardPage } from './dashboardPage'

export class ManageRegularIntegrationPage {
  page: Page
  manageRegularIntegrationPage: ManageRegularIntegrationPage
  manageRegularIntegrationElements: ManageRegularIntegrationElements
  dashboardPage: DashboardPage

  constructor(page: Page) {
    this.page = page
  }

  async clickSubmit() {
    await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible({ timeout: 3000 })
    await this.page.getByRole('button', { name: 'Submit' }).click()
  }

  async validModalApplicationIsNotComplete() {
    await expect(this.page.getByRole('heading', { name: 'Your application is not complete.' })).toContainText(
      'Your application is not complete.',
    )
  }

  async clickBackToEditing() {
    await this.page.getByRole('button', { name: 'Back to Editing' }).click()
  }

  async validModalUnSavedChanges() {
    await expect(this.page.getByRole('heading', { name: 'You have sections with unsaved changes.' })).toContainText(
      'You have sections with unsaved changes.',
    )
  }
}
