import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitForSpinnerToHide() {
    await expect(this.page.getByTestId('spinner')).toBeHidden();
  }

  async expectToastVisible(testId: string) {
    await expect(this.page.getByTestId(testId)).toBeVisible();
  }
}