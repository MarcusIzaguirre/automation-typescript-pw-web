import { Page } from '@playwright/test'
import { ImageReplRulesElements } from '../../../elements/contentIntegrationsElements/imageReplRulesElements'

//const randonName = faker.image.

export class ImgReplRulesPage {
  page: Page
  imgReplRulElements: ImageReplRulesElements

  constructor(page: Page) {
    this.page = page
    this.imgReplRulElements = new ImageReplRulesElements(page)
  }

  async accessImgReplRules() {
    await this.imgReplRulElements.sectionImgReplRules.click()
  }

  async addReplacementRule() {
    await this.imgReplRulElements.addReplRuleBtn.click()
  }

  async fillPatern() {
    await this.imgReplRulElements.patternInput.fill(this.imgReplRulElements.patternTxt)
  }

  async fillNameImgRepl() {
    await this.imgReplRulElements.nameInput.fill(this.imgReplRulElements.nameTxt)
  }

  async fillReplText() {
    await this.imgReplRulElements.replTextInput.fill(this.imgReplRulElements.replacementText)
  }

  async savePanel() {
    await this.imgReplRulElements.saveBtn.click()
  }

  async fillSectionImgReplRules() {
    await this.addReplacementRule()
    await this.fillPatern()
    await this.fillNameImgRepl()
    await this.fillReplText()
    await this.savePanel()
  }
}
