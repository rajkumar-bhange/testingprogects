import{test,expect}from '@playwright/test'
test('assertion', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')
    await expect(page.locator('//img[@alt="image not displaying"]')).toBeVisible()
    await expect(page.locator('(//input[@type="text"])[1]')).toBeEmpty()
    await page.fill('(//input[@type="text"])[1]','rajkumar')
    await expect(page.locator('(//input[@type="text"])[1]')).toHaveValue("rajkumar")
    await expect(page.locator('(//input[@type="text"])[1]')).not.toBeEmpty();
    await expect(page.locator('//button[@type="submit"]')).toBeVisible();
    await expect(page.locator('//img[@id="imagetrgt"]')).toBeVisible();

})