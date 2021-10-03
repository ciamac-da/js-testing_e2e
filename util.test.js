const puppeteer = require("puppeteer")
const { generateText, checkAndGenerate } = require("./util");


test('Should output name and age', () => {
 const text = generateText("Cia", 34);
 expect(text).toBe("Cia (34 years old)")
});


test('Should generate a valid text output', () => {
 const text = checkAndGenerate("Cia", 34);
 expect(text).toBe("Cia (34 years old)")
});

test("Should create an element with text and correct class",async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--window-size=1920,1080"]
    })
    const page = await browser.newPage();
    await page.goto("file:///home/cia/Documents/Programming/MyProgramming/JS/js-testing_e2e/index.html")
    
    await page.click("input#name")
    await page.type("input#name", "Cia")
    await page.click("input#age")
    await page.type("input#age", "34")
    await page.click("#btnAddUser")
    const finalText = await page.$eval(".user-item", el => el.textContent)
    expect(finalText).toBe("Cia (34 years old)")
}, 10000)