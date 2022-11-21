const {test, expect} = require('@playwright/test');

test('Browser Context declaration Playwright test',async ({page})=>
{
    await page.goto('https://sso.teachable.com/secure/9521/identity/login');
    await page.locator("#email").type("wasiak.szymon.1991@gmail.com");
    await page.locator("#password").type("Hellscream#91");
    await page.locator("[name=commit]").click();
    await page.waitForLoadState('networkidle');
    const title = await page.locator(".course-listing-title").allTextContents();
    console.log(title)
})

