const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const portalCode = fs.readFileSync('src/components/layout/StrategicPortal.tsx', 'utf-8');
  // Match patterns like '/path/subpath'
  const matches = portalCode.match(/'\/[a-zA-Z0-9\-_/]+'/g) || [];
  const routes = Array.from(new Set(matches.map(m => m.slice(1, -1)))).filter(r => !r.startsWith('/api'));
  console.log('Testing ' + routes.length + ' routes...');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const badRoutes = [];

  for (const r of routes) {
    const errors = [];
    const onErr = err => errors.push(err.message);
    page.on('pageerror', onErr);

    try {
      await page.goto('http://localhost:3000' + r, { timeout: 8000, waitUntil: 'load' });
      await page.waitForTimeout(150);
      const rootHtml = await page.locator('#root').innerHTML();
      if (errors.length > 0 || rootHtml.length < 500) {
        console.error('FAILED: ' + r + ' - HTML len: ' + rootHtml.length + ' Errors: ' + errors.join(' | '));
        badRoutes.push({ route: r, htmlLen: rootHtml.length, errors });
      }
    } catch (e) {
      console.error('ERROR visiting ' + r + ': ' + e.message);
      badRoutes.push({ route: r, error: e.message });
    }
    page.off('pageerror', onErr);
  }

  console.log('Finished. Total routes: ' + routes.length + ' Bad routes count: ' + badRoutes.length);
  if (badRoutes.length > 0) {
    console.log(JSON.stringify(badRoutes, null, 2));
  }
  await browser.close();
})();
