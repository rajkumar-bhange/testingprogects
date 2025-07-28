import{test ,expect}from'@playwright/test'
test.beforeAll('started',()=>{
    console.log("test started succesfully");
    
})
test.beforeEach('visiting the url',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
})
test('login1',async({page})=>{
    await page.locator('//input[@type="text"]').fill('standard_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@type="submit"]').click();
})
test('login2',async({page})=>{
    await page.locator('//input[@type="text"]').fill('locked_out_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@type="submit"]').click();
})
test('login3',async({page})=>{
    await page.locator('//input[@type="text"]').fill('problem_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@type="submit"]').click();
})
// test('login4',async({page})=>{
//     await page.locator('//input[@type="text"]').fill('performance_glitch_user')
//     await page.locator('//input[@id="password"]').fill('secret_sauce')
//     await page.locator('//input[@type="submit"]').click();
// })
test.afterEach("logout",async({page})=>{
    await page.click("//button[text()='Open Menu']")
    await page.click('//a[@id="logout_sidebar_link"]')
})
test.afterAll('test copleted',()=>{
    console.log("test is successfully copleted");
    
})
