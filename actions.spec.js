// import{test,expect}from'@playwright/test'
// test('actios',async({page})=>{
//     await page.goto('https://www.google.com/')
//     // await page.locator('//textarea[@name="q"]').type('cricbuzz')
    
//     // await page.keyboard.press('Control+A')
//     // await page.keyboard.press('Control+C')
//     // await page.keyboard.press('Backslash')
//     // await page.keyboard.press('Control+V')
//     // await page.keyboard.press('Enter')
//     await page.locator('//textarea[@name="q"]').focus();
//     await page.keyboard.type('cricbuzz')
//     await page.keyboard.press('ArrowRight')
//     await page.keyboard.down("shift")
//     for(let i=0; i>3;i++){
//     await page.keyboard.press('ArrowRight')

//     }

//     await page.pause();
// })


import{test,expect}from'@playwright/test'

test('actions',async({page})=>{
   
    await page.goto('https://gotranscript.com/text-compare')
    await page.locator('//textarea[@name="text1"]').fill('rajkumar')
    await page.keyboard.press('Control+A')//copy the element
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await expect(page.locator('//textarea[@name="text2"]')).toHaveValue('rajkumar')
    await page.locator('//button[@id="recaptcha"]').click()
    await page.pause();

})

test('mouse hover',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//button[@class="dropbtn"]').hover();
    await page.pause();
})

test('right click',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator("//span[text()='right click me']").click({button:"right"})
    await page.pause();

})

test('double click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="field1"]').fill('rajkumar')
    await page.locator("//button[text()='Copy Text']").dblclick();
    await page.pause();
})

test('grag and deop',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const drag=await page.locator('//div[@id="draggable"]')
    const drop=await page.locator('//div[@id="droppable"]')
    await drag.dragTo(drop);
    await page.pause();
})

test.only('mouse scroling',async({page})=>{
     await page.setViewportSize({width:360,height:768});
await page.goto('https://testautomationpractice.blogspot.com/')
await page.mouse.wheel(0,3000)
await page.mouse.wheel(-3000,0)
await page.pause();
})