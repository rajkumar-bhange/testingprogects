// /html/body/div/input[@name="username"]   =  abuslate expath

import {test,expect} from'@playwright/test'
test('login use from expath',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("Admin");
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    
    await page.locator('//input[@type="password"]').type("admin123");
    await page.locator('//button[@type="submit"]').first().click();
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/dashboard/);
    // await page.locator('//a[@class="oxd-main-menu-item active toggle"]').click();

     await page.getByRole('link', { name: 'Admin' }).click();
})
