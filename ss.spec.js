import{test,expect}from'@playwright/test'
test('take a ss',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.screenshot({path:'C:/Users/Dhanraj/Desktop/playwightestvc123/tests/practice'+'first.png'})
    await page.screenshot({path:'C:/Users/Dhanraj/Desktop/playwightestvc123/tests/practice'+'fullss.png',fullPage:true})

    await page.locator('//div[@class="tableFixHead"]').screenshot({path:'C:/Users/Dhanraj/Desktop/playwightestvc123/tests/practice'+'particuler.png'})
})