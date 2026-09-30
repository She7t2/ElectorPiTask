import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.getByRole('link', { name: 'Inventory' }).click();
    await this.waitForSpinnerToHide();
 }

  async addProduct(name: string, price: string) {
    await this.page.getByTestId('product-name').fill(name);
    await this.page.getByTestId('product-price').fill(price);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}