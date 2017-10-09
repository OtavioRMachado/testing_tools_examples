const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.focus('input[type="text"]')
  await page.type('otaviormachado github')
  await page.click('input[name="btnK"]')
  await page.waitForSelector('#main')
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
