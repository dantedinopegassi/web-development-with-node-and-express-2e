const puppeteer = require("puppeteer");
const app = require("../meadowlark.js");

let server;
let port = 3000;

beforeEach(async () => {
    server = app.listen(port, () => {
        console.log("el server arranco joya");
    });
});

afterEach(() => {
    server.close();
});

test("about to home page", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/about`);

    await page.waitForSelector('[id-identificador-test-puppeteer="home"]', {
        timeout: 5000,
    });

    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle0'}),
        page.click('[id-identificador-test-puppeteer="home"]')
    ]);
    expect(page.url()).toBe(`http://localhost:${port}/`);

    await browser.close();
});
