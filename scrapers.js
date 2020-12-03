const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[2]/div[3]/div/div[3]/div/div/div[2]/div/div/div[1]/div/div[1]/div[3]/section/div[2]/div/ul/li[1]/div/div[2]/div[3]/p/span');
    const src = await el.getProperty('textContent');
    const name = await src.jsonValue();

    console.log({name})

    await browser.close();

}

//Invoke Function
scrapeProduct('https://www.yelp.com/biz/h-and-l-auto-body-oakland');
