import{test,expect}from'@playwright/test'
import login from "./practice/login.json"
test('login',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(login.username)
    await page.locator('//input[@type="password"]').fill(login.password)
    await page.locator('//button[@type="submit"]').click();
    await page.pause();
})




// npx playwright codegen
// npx playwright codegen --outupt