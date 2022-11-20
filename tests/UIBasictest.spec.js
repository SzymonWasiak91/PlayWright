const {test, expect} = require('@playwright/test');

test.only('Browser Context declaration Playwright test',async ({browser})=>
{
    const context =await browser.newContext();
    const page = await context.newPage();

    const email = page.locator("#email");
    const password = page.locator("#password");
    const buttonSubmint = page.locator("[name=commit]");

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
    console.log(await page.locator("body > div.view-school > div.view-directory.course-directory.signed-in-directory > div > div.row.course-list.list > div:nth-child(1) > div > div.row > a > div > div.course-listing-title").textContent());
})

test('First Playwright test',async ({page})=>
{
    await page.goto('https://google.com');
    //get title - make assert
    console.log(await page.title())
    await expect(page).toHaveTitle('Google');
    
})