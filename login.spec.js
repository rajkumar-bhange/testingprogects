import{test ,expect}from'@playwright/test'
import path from 'path'
test('login page ',async({page })=>{
    await page.goto('https://practice.expandtesting.com/login')
    await page.locator('//input[@type="text"]').fill('practice')
    await page.locator('//input[@id="password"]').fill('SuperSecretPassword!')
    await page.click('(//button["text()=Login"])[2]')
    
    await page.click('//a[@class="btn btn-expand btn-sm"]')
   
    await page.goBack('https://practice.expandtesting.com/login');
    await page.waitForTimeout(3000)

    await page.click('//i["text()= Logout"]')
    await page.pause()

})