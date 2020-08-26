const puppeteer = require('puppeteer');
// const url = 'https://www.linkedin.com/posts/yanti-amelia-bb620414b_zikir-menenangkan-hati-ugcPost-6685150334366576640-xFCc/'
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

