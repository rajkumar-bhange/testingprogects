import {test,expect}from'@playwright/test'
import { execPath } from 'process';
test('practice page',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice/')
    await page.click("//a[text()='Practice']")
    await page.click("//a[text()='Test Login Page']");
    await page.fill('//input[@type="text"]','student')
    await page.fill('//input[@id="password"]','Password123')
    await expect(page.locator('//button[@id="submit"]')).toBeVisible();
    await page.click('//button[@id="submit"]');
    await expect(page).toHaveURL(/logged-in-successfully/)
    await page.click('//a[@style="color:#ffffff"]');
    await expect(page).toHaveURL(/practice-test-login/)
})