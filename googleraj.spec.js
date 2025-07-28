import{test, expect} from '@playwright/test'
test('google Im feeling lucky', async({page}) => {
    await page.goto("https://www.google.com/")
    await expect( page.locator("//a[text()='Gmail']")).toBeVisible();    
    //await page.locator('//div[@class="FPdoLc lJ9FBc"]//child::input[@value="I\'m Feeling Lucky"]').click()
    await page.locator('//div[@class="FPdoLc lJ9FBc"]//child::input[@name="btnI"]').click()
    await page.pause()
})
