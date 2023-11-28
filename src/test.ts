
import {Browser, chromium, Page} from "playwright";
import {firefox} from "playwright/index";


describe('Ananya Portfolio', () => {
let browser: Browser;
    let page: Page;

    beforeAll(async () => {

        browser = await firefox.launch({
            headless: false,
            devtools: false,
            args: ['--start-maximized']
        });
        //context
        const context = await browser.newContext();

        //page
        page = await context.newPage();
        await page.setViewportSize({
            width: 1920,
            height: 800
        })
    });

});