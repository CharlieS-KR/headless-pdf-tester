const puppeteer = require('puppeteer');

async function consoleTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG', msg.text()));
    await page.goto('http://127.0.0.1:5500/client/index.html');
    await page.$eval('#test-btn', button => button.click());
    await browser.close();
};

module.exports = consoleTest;