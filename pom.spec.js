import {test,expect}from'@playwright/test'
import orange from './practice/orangeHRM'
test('page object model',async({page})=>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
 const log=new orange(page)
await log.login('Admin','admin123')
await page.pause();

})
