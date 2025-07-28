import{test,expect, chromium}from'@playwright/test'
import { title } from 'process'
test('tabs',async({page})=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    const page3=await context.newPage();
    await page1.goto('https://www.youtube.com/')
    console.log( await page1.title());
    
    await page1.waitForTimeout(3000)

    await page2.goto("https://www.cricbuzz.com/")
    console.log(await page2.title());
    
    await page2.waitForTimeout(4000)
    await page3.goto('https://openai.com/index/chatgpt/')
    console.log((await page3.title()));
    
   
})

test.only('open in the same tab',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log( await page.title());

    await page.waitForTimeout(3000)
    const link=await page.locator('//a[@href="http://www.orangehrm.com"]')
    await link.evaluate(el=>el.removeAttribute('target'))
    await link.click()
    console.log(await page.title());
    await page.waitForTimeout(3000);

    
})