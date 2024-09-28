import { Locator, Page } from '@playwright/test'

export class BrandAssetsElements {
  page: Page
  sectionBrandAssets: Locator
  uploadIconSvg: Locator
  doneIconSvg: Locator
  btnSaveIcons: Locator
  uploadFullLogoApp: Locator
  uploadFullLogoSupport: Locator
  btnSaveFullLogo: Locator
  uploadBadge: Locator
  btnSaveBadge: Locator

  constructor(page: Page) {
    this.page = page
    this.sectionBrandAssets = page.getByTestId('brandAssets')
    this.uploadIconSvg = page.getByTestId('upload-icon-section-svg')
    this.doneIconSvg = page.getByRole('button', { name: 'Done' })
    this.btnSaveIcons = page.getByTestId('icons-save-button')
    this.uploadFullLogoApp = page.getByTestId('logos-section-sonos-app')
    this.uploadFullLogoSupport = page.getByTestId('input-logos-section-sonos-support')
    this.btnSaveFullLogo = page.getByTestId('logos-section-save-button')
    this.uploadBadge = page.getByTestId('input-badge-section-svg')
    this.btnSaveBadge = page.getByTestId('badge-save-button')
  }
}
