import {test,expect}from '@playwright/test'
// test("login",async({page})=>{

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('[name="username"]').fill('Admin');
//     await page.locator('[type="password"]').fill('admin123')
//     await page.locator('[type="submit"]').click();
// }) 
test('orange',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//  /await expect (page).getByAltText('orangehrm-logo').toBeVisible();
await page.getByPlaceholder('username').fill('admin');
await page.getByPlaceholder('password').fill('admin123')
await page.locator('//button[@type="submit"]').click();

// await page.waitForTimeout(30000)
await expect(page).toHaveURL(/dashboard/);
await page.getByAltText('profile picture').click()
await page.getByText('Logout').click();
await page.waitForTimeout(3000)
await expect(page).toHaveURL(/login/)

})