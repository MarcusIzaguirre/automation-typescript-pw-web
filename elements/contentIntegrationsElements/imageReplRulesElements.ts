import { Locator, Page } from '@playwright/test'

export class ImageReplRulesElements {
  page: Page
  sectionImgReplRules: Locator
  addReplRuleBtn: Locator
  patternInput: Locator
  nameInput: Locator
  replTextInput: Locator
  saveBtn: Locator
  patternTxt: string
  nameTxt: string
  replacementText: string

  constructor(page: Page) {
    this.page = page
    this.sectionImgReplRules = page.getByTestId('imageReplacement')
    this.addReplRuleBtn = page.getByTestId('addReplacementRuleButton')
    this.patternInput = page.locator("input[name='RootPattern__c']")
    this.nameInput = page.locator("input[name='nameInput']")
    this.replTextInput = page.locator("input[name='replacementInput']")
    this.saveBtn = page.getByTestId('imageReplacmentDictSaveButton')
    this.patternTxt = '(?:_(?<size>DEFAULT)\\.png)'
    this.nameTxt = '230x220'
    this.replacementText = 'test.png'
  }
}
