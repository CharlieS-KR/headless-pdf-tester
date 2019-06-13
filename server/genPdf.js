const puppeteer = require('puppeteer');

async function genPdf(url, filePath = './output/output.pdf', format = 'A4', deviceType) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    if (deviceType) {
        const device = puppeteer.devices['iPhone X'];
        await page.emulate(device);
    }
    await page.goto(url);
    await page.pdf({ path: filePath, format: format });
    await browser.close();
}

module.exports = genPdf;