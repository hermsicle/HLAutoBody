const puppeteer = require('puppeteer');
puppeteer.launch({ headless: true, args: ['--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] }).then(async browser => {
	const page = await browser.newPage();
    // await page.goto("https://www.yelp.com/search?cflt=restaurants&find_loc=San Francisco, CA");
    await page.goto("https://www.yelp.com/biz/h-and-l-auto-body-oakland");
	await page.waitForSelector('body');
    var rposts = await page.evaluate(() => {
    
    });
    console.log(rposts);
    await browser.close();
}).catch(function(error) {
    console.error(error);
});