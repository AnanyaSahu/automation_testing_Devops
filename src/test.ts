
import {Browser, chromium, Page} from "playwright";
// import {SelectorConstants} from "./SelectorConstants";
import {firefox} from "playwright/index";

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
            width: 1920,
            height: 800
        })
    });

    afterAll(async () =>{
        await browser.close();
    });

    it("Open page", async () => {
            await page.goto("http://ananyasahu.com/?i=1");
            await page.waitForTimeout(10000);
            // page load
            // await page.waitForResponse(response => {
            //     return response.request().resourceType() === "xhr";
            // });
        }, 100000);

    it("Open page", async () => {
        let xxx : string|null ;
             await page.waitForSelector('//*[@id="home"]/h2');
             page.textContent('//*[@id="home"]/h2').then(
                res => {
                    xxx = res != null ? res.toString():  null
                    if(xxx == 'HELLO, I AM ANANYA SAHU!') {
                        return true
                        // print('true')
                    } else {
                        return false
                        // print('true')
                    }

                });
            
           
            //  await page.click(SelectorConstants.IDP_USERNAME_INPUT)
            //  await page.fill(SelectorConstants.IDP_USERNAME_INPUT, username)
         
        }, 100000); 

        it("click hire me", async () => {
            let xxx : string|null ;
                 await page.waitForSelector('//*[@id="home"]/a');               
                await page.click('//*[@id="home"]/a')
                // print('clicked')
                //  await page.fill(SelectorConstants.IDP_USERNAME_INPUT, username)
             
            }, 100000); 

            it("click services link and navigate to services", async () => {
                // let xxx : string|null ;
                    await page.waitForSelector('//*[@id="collapsible-nav"]/a[2]');               
                    await page.click('//*[@id="collapsible-nav"]/a[2]')
                    // page.
                    // print('clicked')
                    //  await page.fill(SelectorConstants.IDP_USERNAME_INPUT, username)
                 
                }, 100000); 
            
    });