import {test,expect} from '@playwright/test'
test("alert",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.click('//button[@id="alertBtn"]')
    page.on('dialog',async dialog=>{
        console.log(dialog.type());
        expect(dialog.type('alert'))
        console.log(dialog.message());
        expect(dialog.message('I am an alert box!'))
        await dialog.accept();
    })
    await page.waitForTimeout(3000)
})

test('conformation alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.click('//button[@id="alertBtn"]')
    page.on('dialog',async dialog=>{
         console.log(dialog.type());
         console.log(dialog.message());
         await dialog.dismiss();     
    })
    await page.click('//button[@id="confirmBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!');
    await page.pause();


    })

    test('promt alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        console.log(dialog.type());
        await dialog.accept('rajkumar')
        
    })
    await page.click('//button[@id="promptBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello rajkumar! How are you today?')
    await page.pause();

    })