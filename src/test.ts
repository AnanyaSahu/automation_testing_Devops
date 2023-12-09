
import { Browser, chromium, Page } from "playwright";
// import {SelectorConstants} from "./SelectorConstants";
import { firefox } from "playwright/index";

describe('VehicleSearchComponent', () => {
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
            width: 1520,
            height: 800
        })
    });

    afterAll(async () => {
        await browser.close();
    });

    it("Open page", async () => {
        await page.goto("http://ananyasahu.com/?i=1");
        await page.waitForTimeout(5000);
    }, 100000);

    it("Open page", async () => {
        let textContent: string | null;
        await page.waitForSelector('//*[@id="home"]/h2');
        page.textContent('//*[@id="home"]/h2').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'HELLO, I AM ANANYA SAHU!') {
                    return true
                } else {
                    return false
                }

            });

    }, 100000);

    it("click hire me", async () => {
        let xxx: string | null;
        await page.waitForSelector('//*[@id="home"]/a');
    }, 100000);

    it("click services link and navigate to services", async () => {
        await page.waitForSelector('//*[@id="collapsible-nav"]/a[2]');
        await page.click('//*[@id="collapsible-nav"]/a[2]')
        await page.waitForTimeout(3000);

    }, 100000);

    it("verify first and second services", async () => {
        let textContent: string | null;
        await page.waitForSelector('//*[@id="services"]/div/div[1]/div[2]/h5');
        page.textContent('//*[@id="services"]/div/div[1]/div[2]/h5').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'Web Designing') {
                    return true
                } else {
                    return false

                }

            });

        await page.waitForSelector('//*[@id="services"]/div/div[2]/div[2]/h5');
        page.textContent('//*[@id="services"]/div/div[2]/div[2]/h5').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'DevOps') {
                    return true
                } else {
                    return false

                }
            });
        await page.waitForTimeout(2000);
    }, 100000);

    it("scroll to top", async () => {
        await page.evaluate(() => {
            window.scrollBy(0, -1000);
        });
        await page.waitForTimeout(2000);

    }, 100000);

    it("click client link and navigate to client section", async () => {
        await page.waitForSelector('//*[@id="collapsible-nav"]/a[3]');
        await page.click('//*[@id="collapsible-nav"]/a[3]');
        await page.waitForTimeout(3000);

    }, 100000);

    it("scroll to top", async () => {
        await page.evaluate(() => {
            window.scrollBy(0, -1800);
        });
        await page.waitForTimeout(2000);

    }, 100000);

    it("click achievements link and navigate to achievements section", async () => {
        await page.waitForSelector('//*[@id="collapsible-nav"]/a[4]');
        await page.click('//*[@id="collapsible-nav"]/a[4]');
        await page.waitForTimeout(3000);

    }, 100000);

    it("scroll to top", async () => {
        await page.evaluate(() => {
            window.scrollBy(0, -2100);
        });
        await page.waitForTimeout(2000);

    }, 100000);

    it("click testimonials link and navigate to testimonials section", async () => {
        await page.waitForSelector('//*[@id="collapsible-nav"]/a[5]');
        await page.click('//*[@id="collapsible-nav"]/a[5]');
        await page.waitForTimeout(5000);

    }, 100000);

    it("scroll to top", async () => {
        await page.evaluate(() => {
            window.scrollBy(0, -2500);
        });
        await page.waitForTimeout(2000);

    }, 100000);

    
    it("download CV button", async () => {
        await page.waitForSelector('body > div > aside > div:nth-child(5) > div > a > button');
        await page.click('body > div > aside > div:nth-child(5) > div > a > button');
        await page.waitForTimeout(3000);

    }, 100000);

    
    it("check language widget", async () => {
        let textContent: string | null;
        await page.waitForSelector('body > div > aside > div:nth-child(7) > div > div > h5');
        page.textContent('body > div > aside > div:nth-child(7) > div > div > h5').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'LANGUAGES') {
                    return true
                } else {
                    return false
                }

            });

    }, 100000);


    it("check COMPETENCIES widget", async () => {
        let textContent: string | null;
        await page.waitForSelector('body > div > aside > div:nth-child(8) > div > div > h5');
        page.textContent('body > div > aside > div:nth-child(8) > div > div > h5').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'COMPETENCIES') {
                    return true
                } else {
                    return false
                }

            });

    }, 100000);


    it("check SKILLSET widget", async () => {
        let textContent: string | null;
        await page.waitForSelector('body > div > aside > div:nth-child(9) > div > div > h5');
        page.textContent('body > div > aside > div:nth-child(9) > div > div > h5').then(
            res => {
                textContent = res != null ? res.toString() : null
                if (textContent == 'SKILLSET') {
                    return true
                } else {
                    return false
                }

            });

    }, 100000);

        it("wait for page", async () => {
        await page.waitForTimeout(2000);

    }, 100000);
});