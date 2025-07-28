import {test,expect}from '@playwright/test'
test('sugges the element',async({page})=>{
    await page.goto('https://www.abhibus.com/')
    await page.fill('//input[@type="text"]','brngaluru')
    await page.waitForSelector('//li [@data-id="9831 Pangaluru (Andhra Pradesh)"]')

    const fromcity=await page.$$('//li [@data-id="9831 Pangaluru (Andhra Pradesh)"]')

    for(let option of fromcity){

        const value= await option.textContent();
        console.log(value);
        
    }
    await page.pause();
})