import {test,expect} from '@playwright/test'
import { duplexPair } from 'stream';
test("select the redio butten",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('//legend[text()="Radio Button Example"]')).toBeVisible();
    await page.locator('//input[@value="radio2"]').check();

})

test.only('Suggession Class Example',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.fill('//input[@id="autocomplete"]','in')
    const locat=await page.locator('//div[@class="ui-menu-item-wrapper"]')
    await locat.first().waitFor();
    const text=await locat.allTextContents();
    for(let i=0; i<text.length; i++){
        if(text[i].trim()==='china'){
            await locat.nth(i).click();

        }
    }
        
    await page.pause();

    


})
test('Dropdown Example',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('//select[@id="dropdown-class-example"]').selectOption({value:"option3"})
    await page.waitForTimeout(3000)
    await page.locator('//select[@id="dropdown-class-example"]').selectOption({value:"option1"})

})

test('Checkbox Example',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator("//legend[text()='Checkbox Example']")).toBeVisible();
    const locator=['//input[@id="checkBoxOption1"]','//input[@id="checkBoxOption3"]']
    for(let select of locator){
        await page.locator(select).check();
        await expect(page.locator(select)).toBeVisible();

    }
    await page.pause();

})
test('Switch Tab Example',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('//a[@id="opentab"]').click();
    

})
test('Switch To Alert Example',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    page.on('dialog',async({dialog})=>{
        console.log(dialog.type());
        await dailog.expect();
        
    })   
    await page.click('//input[@id="alertbtn"]')
    await page.waitForTimeout(4000)
    // await page.pause();
})