const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  const content = await page.content();
  console.log('HTML length:', content.length);
  if (content.length < 500) {
     console.log(content);
  }
  await browser.close();
})();
