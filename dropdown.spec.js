// import{test,expect} from '@playwright/test'
// test("dropdown the value",async({page})=>{
//     await page.goto("https://freelance-learn-automation.vercel.app/signup")
//     await page.locator('//input[@type="text"]').fill('rajumar')
//     await page.locator('#state').selectOption({label:"Gujarat"})
//     await page.waitForTimeout(4000)


//     await page.locator('#state').selectOption({value:"Karnataka"})
//     await page.waitForTimeout(5000)
// }


//single selectre dropdown 
// import {test, expect } from "@playwright/test";
// test.skip('single selecter dropdown' ,async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     // await page.locator('//select[@id="country"]').selectOption('United Kingdom')
//     // await page.locator('//select[@id="country"]').selectOption({index:2})
//     await page.locator('//select[@id="country"]').selectOption({value:'uk'})
//     await page.pause();
// })


// // multiple selecter dropdown 
// test.skip('multiple selecter dropdown' ,async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('//select[@id="colors"]').selectOption(['blue','yellow','green','red'])
//     await page.pause();



// })
//  import{test,expect} from'@playwright/test'
//     test("auto suggestion",async({page})=>{
//         await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
//         await page.locator('//input[@id="autocomplete"]').fill('in')
//         const locat= await page.locator('//div[@class="ui-menu-item-wrapper"]')
//         await locat.first().waitFor()
//         const text=await locat.allTextContents();
//         for( let i=0; i<text.length; i++){
//             if(text[i].trim()==='China'){
//                 await locat.nth(i).click();
//             }
//         }
//         await page.pause();
//     })

import {test,expect}from '@playwright/test'
test ("atuo suggestion",async({page})=>{
    await page.goto('https://www.abhibus.com/')
    await page.getByPlaceholder('//input[@id="from-city-input"]').fill('ben')
    const loct=await page.locator('//div[@class="container source-stations-panel "]')
    await loct.first().waitFor();
    const text=await loct.allTextContents();
for(let i=0; i<text.length; i++){
    if(text[i].trim()==='benur'){
        await loct.nth(i).click();
    }
}
 await page.pause()
})

