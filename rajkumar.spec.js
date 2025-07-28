import {test,expect} from '@playwright/test'
import { log } from 'console'
test("Positive LogIn test",async({page})=>{
    await page.goto('https://practicetestautomation.com/')
    // await page.click("(//a[normalize-space()='Practice'])[1]");
    await page.getByRole('link', {name: 'Practice'}).click();
    await page.click("//a[normalize-space()='Test Login Page']");
    await page.fill("(//input[@id='username'])[1]",'student')
    await page.fill("(//input[@id='password'])[1]",'Password123')
    await page.click('#submit')
    await expect(page.locator("(//img[@alt='Practice Test Automation'])[1]")).toBeVisible()
    await page.locator("(//a[normalize-space()='Log out'])[1]").click();
})

test('Negative username test',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice/')
    await page.click('//*[@id="loop-container"]/div/article/div[2]/div[1]/div[1]/p/a')
    await page.fill('//input[@type="text"]','studenta')
    await page.fill('//input[@name="username"]','Password123')
    await page.click('//button[@id="submit"]');
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
    const error=page.locator('#error')
    await expect(error).toBeVisible()
    await expect(error).toHaveText('Your username is invalid!');
    

})

test('Negative password test',async({page})=>{
     await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('//input[@type="text"]','student')
    await page.fill('//input[@name="username"]','Password12344')
    await page.click('//button[@id="submit"]');
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
    const error=page.locator('#error')
    await expect(error).toBeVisible('Your password is invalid!')
    // await expect(error).toHaveText('Your password is invalid!');
    
})