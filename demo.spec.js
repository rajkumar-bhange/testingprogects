import {test,expect} from '@playwright/test'
test("click the index value",async({page})=>{
    await page.goto('https://practicetestautomation.com/')
    await page.click("(//a[normalize-space()='Practice'])[1]")
})