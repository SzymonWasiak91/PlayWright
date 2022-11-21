const {test, expect} = require('@playwright/test');

test('Browser Context declaration Playwright test',async ({browser})=>
{
    const context =await browser.newContext();
    const page = await context.newPage();

    const email = page.locator("#email");
    const password = page.locator("#password");
    const buttonSubmint = page.locator("[name=commit]");
    const courseName = page.locator(".course-listing-title");

    await page.goto('https://sso.teachable.com/secure/9521/identity/login');
    console.log(await page.title())
    await email.type("wasiak.szymon.1991@gmail.com");
    await password.type("vvv");
    await buttonSubmint.click();
    console.log(await page.locator("[data-transition=entered]").textContent());
    await expect(page.locator("[data-transition=entered]")).toContainText(' password is incorrect');
    await email.fill("wasiak.szymon.1991@gmail.com");
    await password.type("Hellscream#91");
    await buttonSubmint.click();
    console.log(await courseName.first().textContent());
    const allTitles = await courseName.allTextContents();
    console.log(allTitles);
})

test('First Playwright test',async ({page})=>
{
    await page.goto('https://google.com');
    //get title - make assert
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
    
})
