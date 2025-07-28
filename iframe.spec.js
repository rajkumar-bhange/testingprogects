import {test,expect}from'@playwright/test'
test.skip('handdel frame',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // const frame=await page.frames()
    // console.log('frame count:',frame.length);
    // for(let URL of frame){
    //     console.log('url :',URL.url());
        
    // }
    
    const frame=await page.frame('iframe-name')
    await frame.locator('(//a[text()="Courses"])[1]').click();

    await page.pause();
})
  
test('',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame.locator('//input[@name="mytext3"]').fill('RAJKUMAR')

    const child= await frame.childFrames()
    await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').click();
    await page.pause();


})

