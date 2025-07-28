import {test,expect}from'@playwright/test'
import { promises } from 'dns'
test('table testing',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const colums=await page.locator('//table[@id="productTable"]//thead//tr//th')
    const row=await page.locator('//table[@id="productTable"]//tbody//tr')
    console.log('colums',await colums.count())
    console.log('row',await row.count());

    const check=await row.filter({
        has:page.locator('td'),

        hasText:/Laptop|Smartwatch|Smartphone|Television/
    })
    const count=await check.count()
    for(let i=0; i<count;i++){
        await check.nth(i).locator('//input[@type="checkbox"]').check();
    }
  const navigationPromise = page.waitForNavigation();
await page.getByText('Navigate after timeout').click();
await navigationPromise;

    await page.pause();
})