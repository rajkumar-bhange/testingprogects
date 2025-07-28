import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('button', { name: 'samsung s24 ultra 5g mobile' }).click();
  await page.getByRole('link', { name: 'Apply the filter 4 to 5.9 GB' }).click();
  await page.locator('#a-autoid-8-announce').click();
  await page.locator('').click();
  await page.getByRole('link', { name: 'item in cart' }).click();
});



