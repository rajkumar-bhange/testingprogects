import{test,expect}from'@playwright/test'
test('page_navigation',async({page})=>{
    await page.goto('https://www.cricbuzz.com/')
    console.log(await page.title());
    // await page.waitForTimeout(3000)

    await page.goto('https://practicetestautomation.com/')
    console.log(await page.title());
    await page.waitForTimeout(3000)
    
    await page.goBack();
    await page.waitForTimeout(3000)

    await page.goForward();
    await page.waitForTimeout(3000)

        
})

// test.only('flh',async({page})=>{
//     await page.goto('https://www.youtube.com/')
//     await page.locator('(//a[@aria-haspopup="false"])[3]').click();
//     await page.waitForTimeout(3000)
//     await page.goBack();

// })