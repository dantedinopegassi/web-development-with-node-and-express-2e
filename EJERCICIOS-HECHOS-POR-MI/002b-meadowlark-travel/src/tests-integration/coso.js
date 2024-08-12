const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto(`http://localhost:${port}`);
    await page.goto(`https://news.yahoo.com/`);

    const headings = await page.$$('h3');
    for (let index = 0; index < headings.length; index++) {
        const element = headings[index];
        const heading = await page.evaluate(element => element.textContent, element);
        console.log(heading);
    }

    // const elementos = await page.$$('div');
    // console.log(elementos.toString());
    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.click('[id-identificador-test-puppeteer="home"]')
    // ]);
    // expect(page.url()).toBe(`http://localhost:${port}`);

    await browser.close();
})();