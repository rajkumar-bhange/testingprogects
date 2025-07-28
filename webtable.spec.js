import{test,expect}from'@playwright/test'
test('web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.click('//a[@class="active"]');
    // const colums=await page.locator('//table[@id="productTable"]//thead//tr//th')
    // const rows= await page.locator('//table[@id="productTable"]//tbody//tr')
    // console.log('colunms:', await colums.count());
    // console.log('rows', await rows.count());
    
    // const check=await rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'

    // })
    // await check.locator('//input[@type="checkbox"]').check();
    // await page.pause();
    
    const colums=await page.locator('//table[@id="productTable"]//thead//tr//th')
    const rows=await page.locator('//table[@id="productTable"]//tbody//tr')
    console.log('colums',await colums.count());
    console.log('row',await rows.count());
     const check=await rows.filter({
        has:page.locator('td'),
        hasText:/Laptop|Smartwatch/  //regulerexprestion
     })
     const count=await check.count()
     for(let i=0; i<count;i++){
        await check.nth(i).locator('//input[@type="checkbox"]').check()
     }

        await page.pause();
    
    
})