const puppeteer = require("puppeteer");
const app = require("../meadowlark.js");



let server = null;
let port = null;                                //ESTO AUN NO ANDA: tira este error
                                                // PASS src/modules/__tests__/handlers.test.js
                                                // FAIL src/tests-integration/basic-navigation.test.js
                                                //   ● about to home page

                                                //     No element found for selector: [id-identificador-test-puppeteer='home']

                                                //       28 |     const page = await browser.newPage();
                                                //       29 |     await page.goto(`http://localhost:${port}/`);
                                                //     > 30 |     await Promise.all([
                                                //          |     ^
                                                //       31 |         page.waitForNavigation(),
                                                //       32 |         page.click("[id-identificador-test-puppeteer='home']")
                                                //       33 |     ]);

                                                //       at assert (node_modules/puppeteer-core/src/util/assert.ts:19:11)
                                                //       at CdpFrame.click (node_modules/puppeteer-core/src/api/Frame.ts:1051:11)
                                                //           at async Promise.all (index 1)
                                                //       at Object.<anonymous> (src/tests-integration/basic-navigation.test.js:30:5)

                                                // A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
                                                // Test Suites: 1 failed, 1 passed, 2 total
                                                // Tests:       1 failed, 4 passed, 5 total
                                                // Snapshots:   0 total
                                                // Time:        4.169 s
                                                // Ran all test suites.

beforeEach(async() => {
    port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

test('about to home page', async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto(`http://localhost:${port}`);
    await page.goto(`https://news.yahoo.com/`);

    const headings = await page.$$('h3');
    for (let index = 0; index < headings.length; index++) {
        const element = headings[index];
        const heading = await page.evaluate(thing => thing.textContent, thing);
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
},15000)