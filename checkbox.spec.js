import {test, expect}from '@playwright/test'
test("redio_button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="male"]').check();
    await expect(page.locator('//input[@id="male"]')).toBeChecked();
    // await expect(page.locator('//input[@id="male"]')).not.toBeChecked();

    await page.pause();

})
 test("single select checkbox" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="monday"]').check();
    await expect(page.locator('//input[@id="monday"]')).toBeChecked();
    await page.locator('//input[@id="monday"]').uncheck();
    await page.pause();


 })

 test.only("mulltiple select checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const locator=['//input[@id="sunday"]','//input[@id="monday"]','//input[@id="thursday"]']
    for(let select of locator){
        await page.locator(select).check();
        await expect(page.locator(select)).toBeChecked();
    }
    await page.pause();
    
 })