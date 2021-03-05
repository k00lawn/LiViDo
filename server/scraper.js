const puppeteer = require('puppeteer');
async function scraper(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url);
    await page.waitForSelector('.vjs-tech')
    const srcText = await page.$eval('.vjs-tech', video => 
    video.getAttribute('src'))
    browser.close()
    return srcText
}
module.exports = {
    scraper
}

