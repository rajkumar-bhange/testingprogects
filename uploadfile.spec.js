import{test,expect}from'@playwright/test'
test('single uploadfile',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="singleFileInput"]').setInputFiles('tests/practicefirst.png')

    await page.click('//button[@type="submit"]')

    await page.pause();

})

test('multiple fileuploded',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['tests/practicefirst.png','tests/practiceparticuler.png'])
    await page.locator('(//button[@type="submit"])[2]').click();

    await page.pause();
})