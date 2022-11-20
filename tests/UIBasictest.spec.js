const {test, expect} = require('@playwright/test');

test('Browser Context declaration Playwright test',async ({browser})=>
{
    
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractice/');
    console.log(await page.title())
})

test('First Playwright test',async ({page})=>
{
    await page.goto('https://google.com');
    //get title - make assert
    console.log(await page.title())
    await expect(page).toHaveTitle('Google');
    
})