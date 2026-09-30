import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventoryPage } from './InventoryPage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto()   {
    await this.page.goto('/login');
    return this ; 
  }

  async login(email: string, password: string) {
    await this.page.getByTestId('email').fill(email);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();

    return new InventoryPage (this.page)

  }
}