import{test,expect}from'@playwright/test'
test('demo site',async({page})=>{
    await page.goto('https://demo.automationtesting.in/')
    await page.click('//button[@id="btn2"]')
    await expect(page).toHaveURL(/Register.html/)
    
    await page.fill('//input[@type="text"]','rajkumar')
    await page.fill('//input[@ng-model="LastName"]','bhange');
    await expect(page.locator("(//label['text()=Address'])[2]")).toBeVisible();
    await page.locator('//textarea[@rows="3"]').fill('bengaluru gublalla gate 3-pash house no=6 first flour')
    await page.fill('//input[@type="email"]','rajbhnage07@gmail.com')
    await page.fill('//input[@type="tel"]','9148159125')
    await expect(page.locator("(//label['text()=Gender*'])[5]")).toBeVisible()
    await page.check('(//input[@type="radio"])[1]')
    
    await expect(page.locator("(//label['text()=Hobbies'])[5]")).toBeVisible();
    const locator=['//input[@id="checkbox1"]','//input[@id="checkbox2"]','//input[@id="checkbox3"]']
    for(let select of locator){
        await page.locator(select).check()
        await expect(page.locator(select)).toBeChecked();
    }
    await page.locator('//div[@id="msdd"]').click();
   await page.locator('//a[text()="English"]').click();
  await page.locator('//a[text()="Hindi"]').click();

  await page.locator('#Skills').selectOption({value:'Client Server'})
  
  const selecter=await page.locator('#Skills').inputValue();
  console.log("selecter value",selecter);

//   await page.click("(//span['text()=Denmark'])[11]")
//   await page.fill('//input[@type="search"]','japan')
//   const loct=await page.locator('//ul[@class="select2-results__options"]')
//   await loct.first().waitFor();
//   const text=await loct.allTextContents();

//   for(let i=0; i<text.length; i++){
//     if(text[i].trim()==='japan'){
//         await loct.nth(i).click();

//     }
//   }

  await page.locator('(//select[@type="text"])[3]').selectOption({value:'1998'})
  await page.locator('(//select[@type="text"])[4]').selectOption({value:'July'})
  await page.locator('(//select[@type="text"])[5]').selectOption({value:'25'})

  await page.fill('//input[@type="password"]',"raj@54321")
  await page.fill('//input[@id="secondpassword"]',"raj@54321")
  await page.click('//button[@id="submitbtn"]')

    await page.pause();



})