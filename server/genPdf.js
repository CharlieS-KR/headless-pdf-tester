const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];

function genPdf(url, filePath = './output/output.pdf', format = 'A4', deviceType) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        if (deviceType) await page.emulate(deviceType);
        await page.goto(url);
        await page.pdf({ path: filePath, format: format });
        await browser.close();
    })();
}

module.exports = genPdf;