import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../utils/testData';

test.describe('Inventory Management', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(testData.admin.email, testData.admin.password);
  });

  test('Store Admin can navigate to the Inventory module', async () => {
    await inventoryPage.open();
  });

  test('Store Admin can add a new product to inventory', async () => {
    await inventoryPage.open();
    await inventoryPage.addProduct(testData.product.name, testData.product.price);
    await inventoryPage.expectToastVisible('toast-success'); 
  });
});