import {test,expect}from '@playwright/test'
test ("atuo suggestion",async({page})=>{
    await page.goto('https://www.abhibus.com/')
    await page.locator('//input[@id="from-city-input"]').fill('ben')
    const loct=await page.locator('//div[@class="container source-stations-panel "]')
    await loct.first().waitFor();
    const text=await loct.allTextContents()
    for(let i=0; i<text.length; i++){
    if(text[i].trim()==='Benur'){

    
        await loct.nth(i).click();
    }
}
 await page.pause()
})